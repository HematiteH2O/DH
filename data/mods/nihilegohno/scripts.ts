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
			
			let hostSpecies = this.dex.deepClone(pokemon.species); // aesthetic
			const baseStats = hostSpecies.baseStats;
			baseStats.hp = 109;
			baseStats.atk = this.clampIntRange(baseStats.atk + 13, 1, 255);
			baseStats.def = this.clampIntRange(baseStats.def + 11, 1, 255);
			baseStats.spa = this.clampIntRange(baseStats.spa + 31, 1, 255);
			baseStats.spd = this.clampIntRange(baseStats.spd + 31, 1, 255);
			baseStats.spe = this.clampIntRange(baseStats.spe + 29, 1, 255);
			hostSpecies.abilities = {0: pokemon.baseAbility};
			let fusion = this.dex.deepClone(hostSpecies);
			fusion.id = 'nihilegosymbiont';
			fusion.name = 'Nihilego-Symbiont';
			fusion.baseSpecies = 'Nihilego';
			fusion.forme = 'Symbiont';
	
			this.add('-message', `Huh?!`);
			this.add('-anim', pokemon, "Spite", pokemon);
			this.add('-message', `${pokemon.illusion ? pokemon.illusion.name : pokemon.name}'s ally, ${nihilego.name}, is latching onto ${pokemon.illusion ? pokemon.illusion.name : pokemon.name}'s Nihilegium-Z...!`);

			nihilego.formeChange(fusion, pokemon.getItem(), true);
			nihilego.maxhp += Math.floor(pokemon.maxhp / 2);
			nihilego.hp += Math.floor(pokemon.hp / 2);
			if (nihilego.isActive) {
				nihilego.addVolatile('symbiont');
				nihilego.transformed = true;
				this.add('-heal', nihilego, nihilego.getHealth, '[silent]');
			}
			pokemon.faint();
			nihilego.item = pokemon.item;
			this.add('-item', nihilego, this.dex.getItem(nihilego.item));
			
			nihilego.fusionIndex = 0;
			nihilego.fusionIndex += nihilego.moveSlots.length;
			for (const moveSlot of pokemon.moveSlots) {
				if (!moveSlot.id || !this.dex.getMove(moveSlot.id) || nihilego.moves.includes(moveSlot.id)) continue;
				let move = this.dex.getMove(moveSlot.id);
				nihilego.baseMoveSlots.push({
					move: move.name,
					id: move.id,
					pp: ((move.noPPBoosts || move.isZ) ? move.pp : move.pp * 8 / 5),
					maxpp: ((move.noPPBoosts || move.isZ) ? move.pp : move.pp * 8 / 5),
					target: move.target,
					disabled: false,
					disabledSource: '',
					used: false,
				});
				nihilego.moveSlots.push({
					move: move.name,
					id: move.id,
					pp: ((move.noPPBoosts || move.isZ) ? move.pp : move.pp * 8 / 5),
					maxpp: ((move.noPPBoosts || move.isZ) ? move.pp : move.pp * 8 / 5),
					target: move.target,
					disabled: false,
					disabledSource: '',
					used: false,
				});
			}
			
			// for the volatile/aesthetic transformations
			nihilego.fusion = fusion;
			nihilego.fusionName = nihilego.name;
			nihilego.host = hostSpecies;
			nihilego.hostName = pokemon.name;
			
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

	// last adjustment: make sure the Z-Move is still usable for Nihilego-Symbiont even when its host is "active!"

	getZMove(move, pokemon, skipChecks) {
		const item = pokemon.getItem();
		if (!skipChecks) {
			if (pokemon.side.zMoveUsed) return;
			if (!item.zMove) return;
			if (item.itemUser && !item.itemUser.includes(pokemon.species.name) && !pokemon.volatiles['symbiont']) return;
			const moveData = pokemon.getMoveData(move);
			// Draining the PP of the base move prevents the corresponding Z-move from being used.
			if (!moveData || !moveData.pp) return;
		}

		if (item.zMoveFrom) {
			if (move.name === item.zMoveFrom) return item.zMove as string;
		} else if (item.zMove === true) {
			if (move.type === item.zMoveType) {
				if (move.category === "Status") {
					return move.name;
				} else if (move.zMove?.basePower) {
					return this.zMoveTable[move.type];
				}
			}
		}
	},

	canZMove(pokemon) {
		if (pokemon.side.zMoveUsed ||
			(pokemon.transformed &&
				(pokemon.species.isMega || pokemon.species.isPrimal || pokemon.species.forme === "Ultra"))
		) return;
		const item = pokemon.getItem();
		if (!item.zMove) return;
		if (item.itemUser && !item.itemUser.includes(pokemon.species.name) && !pokemon.volatiles['symbiont']) return;
		let atLeastOne = false;
		let mustStruggle = true;
		const zMoves: ZMoveOptions = [];
		for (const moveSlot of pokemon.moveSlots) {
			if (moveSlot.pp <= 0) {
				zMoves.push(null);
				continue;
			}
			if (!moveSlot.disabled) {
				mustStruggle = false;
			}
			const move = this.dex.getMove(moveSlot.move);
			let zMoveName = this.getZMove(move, pokemon, true) || '';
			if (zMoveName) {
				const zMove = this.dex.getMove(zMoveName);
				if (!zMove.isZ && zMove.category === 'Status') zMoveName = "Z-" + zMoveName;
				zMoves.push({move: zMoveName, target: zMove.target});
			} else {
				zMoves.push(null);
			}
			if (zMoveName) atLeastOne = true;
		}
		if (atLeastOne && !mustStruggle) return zMoves;
	},
};
