export const Scripts: {[k: string]: ModdedBattleScriptsData} = {
	canMegaEvo(pokemon) {
		const species = pokemon.baseSpecies;
		const altForme = species.otherFormes && this.dex.getSpecies(species.otherFormes[0]);
		const item = pokemon.getItem();
		if (item.name === 'Nihilegium Z') {
			pokemon.canNihilego = true;
			return null;
		}
		if ((this.gen <= 7 || this.ruleTable.has('standardnatdex')) &&
			altForme?.isMega && altForme?.requiredMove &&
			pokemon.baseMoves.includes(this.toID(altForme.requiredMove)) && !item.zMove) {
			return altForme.name;
		}
		if (item.megaEvolves === species.baseSpecies && item.megaStone !== species.name) {
			return item.megaStone;
		}
		return null;
	},

	runMegaEvo(pokemon) {
		const speciesid = pokemon.canMegaEvo || pokemon.canUltraBurst;
		if (!speciesid && !pokemon.canNihilego) return false;
		const side = pokemon.side;

		// Pokémon affected by Sky Drop cannot mega evolve. Enforce it here for now.
		for (const foeActive of side.foe.active) {
			if (foeActive.volatiles['skydrop'] && foeActive.volatiles['skydrop'].source === pokemon) {
				return false;
			}
		}
		
		if (pokemon.canNihilego) {
			const allies = pokemon.side.pokemon.filter(ally => ally !== pokemon && ally.species.baseSpecies === 'Nihilego' && !ally.fainted);
			// const allies = pokemon.side.pokemon.filter(ally => ally !== pokemon && ally.species.baseSpecies === 'Nihilego' && ally.isActive && !ally.fainted);
			// trying to make it work in singles first
			if (!allies || !allies[0]) {
				this.hint("You can't use Nihilegium-Z without an ally Nihilego.");
				return;
			}
			const nihilego = allies[0];
			let fusion = this.dex.deepClone(pokemon.species);
			const baseStats = fusion.baseStats;
			baseStats.atk = this.clampIntRange(baseStats.atk + 13, 1, 255);
			baseStats.def = this.clampIntRange(baseStats.def + 11, 1, 255);
			baseStats.spa = this.clampIntRange(baseStats.spa + 31, 1, 255);
			baseStats.spd = this.clampIntRange(baseStats.spd + 31, 1, 255);
			baseStats.spe = this.clampIntRange(baseStats.spe + 29, 1, 255);
			let fusedAbility = this.dex.deepClone(pokemon.baseAbility);
			fusedAbility.name = "As One (Nihilego)";
			fusedAbility.isPermanent = true; // disable Trace
			fusion.ability = fusedAbility;
			
			fusion.id = 'nihilegosymbiont';
			fusion.name = 'Nihilego-Symbiont';
			fusion.baseSpecies = 'Nihilego';
			fusion.forme = 'Symbiont';
			
			nihilego.formeChange(fusion, pokemon.getItem(), true);
			nihilego.maxhp += pokemon.maxhp;
			nihilego.hp += pokemon.hp;
			if (nihilego.isActive) {
				nihilego.addVolatile('symbiont');
				nihilego.transformed = true;
				this.add('-heal', nihilego, nihilego.getHealth, '[silent]');
			}
			
			for (const moveSlot of pokemon.moveSlots) {
				let emptynum = 1;
				for (const slot of nihilego.moveSlots) emptynum++;
				let move = moveSlot.id;
				if (!moveSlot.id || nihilego.moves.includes(moveSlot.id)) continue;
				const sketchedMove = {
					move: move.name,
					id: move.id,
					pp: move.pp,
					maxpp: move.pp,
					target: move.target,
					disabled: false,
					used: false,
					fusion: true, // so I can track this later
				};
				nihilego.moveSlots[emptynum] = sketchedMove;
			}
			
			pokemon.faint();
			nihilego.item = pokemon.item;
			nihilego.altSpecies = pokemon.species;
			nihilego.fusedSpecies = fusion;
			this.add('-item', nihilego, pokemon.item.name);
			
			return;
		}

		pokemon.formeChange(speciesid, pokemon.getItem(), true);

		// Limit one mega evolution
		const wasMega = pokemon.canMegaEvo;
		for (const ally of side.pokemon) {
			if (wasMega) {
				ally.canMegaEvo = null;
			} else {
				ally.canUltraBurst = null;
			}
		}

		this.runEvent('AfterMega', pokemon);
		return true;
	},
	runSwitch(pokemon: Pokemon) { // modified for Nihilego
		if (pokemon.species.forme === 'Symbiont') {
			pokemon.addVolatile('symbiont');
			pokemon.transformed = true;
		}
		this.runEvent('Swap', pokemon);
		this.runEvent('SwitchIn', pokemon);
		if (this.gen <= 2 && !pokemon.side.faintedThisTurn && pokemon.draggedIn !== this.turn) {
			this.runEvent('AfterSwitchInSelf', pokemon);
		}
		if (!pokemon.hp) return false;
		pokemon.isStarted = true;
		if (!pokemon.fainted) {
			this.singleEvent('Start', pokemon.getAbility(), pokemon.abilityData, pokemon);
			pokemon.abilityOrder = this.abilityOrder++;
			this.singleEvent('Start', pokemon.getItem(), pokemon.itemData, pokemon);
		}
		if (this.gen === 4) {
			for (const foeActive of pokemon.side.foe.active) {
				foeActive.removeVolatile('substitutebroken');
			}
		}
		pokemon.draggedIn = null;
		return true;
	}
};
