export const Scripts: {[k: string]: ModdedBattleScriptsData} = {
	canMegaEvo(pokemon) {
		const species = pokemon.baseSpecies;
		const altForme = species.otherFormes && this.dex.getSpecies(species.otherFormes[0]);
		const item = pokemon.getItem();
		if (item.name === 'Nihilegium Z') {
			pokemon.canNihilego = true;
			return true;
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
			baseStats.hp = 109;
			baseStats.atk = this.clampIntRange(baseStats.atk + 13, 1, 255);
			baseStats.def = this.clampIntRange(baseStats.def + 11, 1, 255);
			baseStats.spa = this.clampIntRange(baseStats.spa + 31, 1, 255);
			baseStats.spd = this.clampIntRange(baseStats.spd + 31, 1, 255);
			baseStats.spe = this.clampIntRange(baseStats.spe + 29, 1, 255);
			
			fusion.id = 'nihilegosymbiont';
			fusion.name = 'Nihilego-Symbiont';
			fusion.baseSpecies = 'Nihilego';
			fusion.forme = 'Symbiont';
			fusion.abilities = {0: pokemon.baseAbility};
	
			this.add('-message', `Huh?!`);
			this.add('-anim', pokemon, "Curse", pokemon);
			this.add('-message', `${pokemon.illusion ? pokemon.illusion.name : pokemon.name}'s ally, ${nihilego.name}, is latching onto ${pokemon.illusion ? pokemon.illusion.name : pokemon.name}'s Nihilegium-Z...!`);

			nihilego.formeChange(fusion, pokemon.getItem(), true);
			nihilego.maxhp += pokemon.maxhp;
			nihilego.hp += pokemon.hp;
			if (nihilego.isActive) {
				nihilego.addVolatile('symbiont');
				nihilego.transformed = true;
				this.add('-heal', nihilego, nihilego.getHealth, '[silent]');
			}
			pokemon.faint();
			nihilego.item = null;
			nihilego.setItem(pokemon.item);
			this.add('-item', nihilego, this.dex.getItem(nihilego.item));
			
			for (const moveSlot of pokemon.moveSlots) {
				if (!moveSlot.id || !this.dex.getMove(moveSlot.id) || nihilego.moves.includes(moveSlot.id)) continue;
				let move = this.dex.getMove(moveSlot.id);
				this.baseMoveSlots.push({
					move: move.name,
					id: move.id,
					pp: ((move.noPPBoosts || move.isZ) ? move.pp : move.pp * 8 / 5),
					maxpp: ((move.noPPBoosts || move.isZ) ? move.pp : move.pp * 8 / 5),
					target: move.target,
					disabled: false,
					disabledSource: '',
					used: false,
					fusion: true, // so I can track this later
				});
				this.moveSlots.push({
					move: move.name,
					id: move.id,
					pp: ((move.noPPBoosts || move.isZ) ? move.pp : move.pp * 8 / 5),
					maxpp: ((move.noPPBoosts || move.isZ) ? move.pp : move.pp * 8 / 5),
					target: move.target,
					disabled: false,
					disabledSource: '',
					used: false,
					fusion: true, // so I can track this later
				});
			}
			
			// for the volatile/aesthetic transformations
			nihilego.fusedSpecies = fusion;
			nihilego.fusedName = nihilego.name;
			nihilego.altSpecies = pokemon.species;
			nihilego.altName = pokemon.name;
			
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
	},

	pokemon: {
		removeVolatile(status: string | Effect) {
			if (!this.isActive) return null;
			if (!this.hp) return false;
			status = this.battle.dex.getEffect(status) as Effect;
			if (!this.volatiles[status.id]) return false;
			this.battle.singleEvent('End', status, this.volatiles[status.id], this);
			const linkedPokemon = this.volatiles[status.id].linkedPokemon;
			const linkedStatus = this.volatiles[status.id].linkedStatus;
			delete this.volatiles[status.id];
			if (linkedPokemon) {
				this.removeLinkedVolatiles(linkedStatus, linkedPokemon);
			}
			return true;
		},
		setItem(item: string | Item, source?: Pokemon, effect?: Effect) {
			if (!this.hp) return false;
			if (typeof item === 'string') item = this.battle.dex.getItem(item);

			const effectid = this.battle.effect ? this.battle.effect.id : '';
			const RESTORATIVE_BERRIES = new Set([
				'leppaberry', 'aguavberry', 'enigmaberry', 'figyberry', 'iapapaberry', 'magoberry', 'sitrusberry', 'wikiberry', 'oranberry',
			] as ID[]);
			if (RESTORATIVE_BERRIES.has('leppaberry' as ID)) {
				const inflicted = ['trick', 'switcheroo'].includes(effectid);
				const external = inflicted && source && source.side.id !== this.side.id;
				this.pendingStaleness = external ? 'external' : 'internal';
			} else {
				this.pendingStaleness = undefined;
			}
			this.item = item.id;
			this.itemData = {id: item.id, target: this};
			if (item.id) {
				this.battle.singleEvent('Start', item, this.itemData, this, source, effect);
			}
			return true;
		},
	},
};
