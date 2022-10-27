export const Scripts: {[k: string]: ModdedBattleScriptsData} = {
	teambuilderConfig: {
		excludeStandardTiers: true,
		customTiers: ['Spooky', 'Spooky (NFE)'],
		customDoublesTiers: ['Spooky', 'Spooky (NFE)'],
	},
	init() {
		for (const id in this.dataCache.Pokedex) {
			const newMon = this.dataCache.Pokedex[id];
			if (!newMon) continue;
			if (newMon.copyData) {
				let copyData = this.dataCache.Pokedex[this.toID(newMon.copyData)];

				if (!newMon.types && copyData.types) newMon.types = copyData.types;
				if (!newMon.baseStats && copyData.baseStats) newMon.baseStats = copyData.baseStats;
				if (!newMon.abilities && copyData.abilities) newMon.abilities = copyData.abilities;
				if (!newMon.num && copyData.num) newMon.num = copyData.num * -1; // inverting the original's dex number
				if (!newMon.genderRatio && copyData.genderRatio) newMon.genderRatio = copyData.genderRatio;
				if (!newMon.heightm && copyData.heightm) newMon.heightm = copyData.heightm;
				if (!newMon.weightkg && copyData.weightkg) newMon.weightkg = copyData.weightkg;
				if (!newMon.color && copyData.color) newMon.color = copyData.color;
				if (!newMon.eggGroups && copyData.eggGroups) newMon.eggGroups = copyData.eggGroups;

				let copyMoves = newMon.copyData;
				if (newMon.copyMoves) copyMoves = newMon.copyMoves;
				if (copyMoves) {
					if (!this.dataCache.Learnsets[id]) this.dataCache.Learnsets[id] = { learnset: {}}; // create a blank learnset entry so we don't need a learnsets file (thank you ink)
					const learnset = this.dataCache.Learnsets[this.toID(copyMoves)].learnset;
					for (const moveid in learnset) {
						this.modData('Learnsets', id).learnset[moveid] = ['8M'];
					}
				}
			}
			if (newMon.movepoolAdditions) {
				for (const move of newMon.movepoolAdditions) {
					this.modData('Learnsets', this.toID(id)).learnset[this.toID(move)] = ["8M"];
				}
			}
			if (newMon.movepoolDeletions) {
				for (const move of newMon.movepoolDeletions) {
					delete this.modData('Learnsets', this.toID(id)).learnset[this.toID(move)];
				}
			}
		}
	},
	runSwitch(pokemon) { // modified for Hoard, Afterimage
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
		if (!pokemon.m.originalItem) pokemon.m.originalItem = pokemon.item;
		if (pokemon.m.afterimage) {
			if (!pokemon.hasType('Ghost') && pokemon.addType('Ghost'))) {
				this.add('-start', target, 'typeadd', 'Ghost', '[from] Ability: Afterimage', '[of] ' + pokemon.m.afterimage.source);
			}
		}
		pokemon.draggedIn = null;
		return true;
	},
	// Poultergeist content
	faintMessages(lastFirst = false) {
		if (this.ended) return;
		const length = this.faintQueue.length;
		if (!length) return false;
		if (lastFirst) {
			this.faintQueue.unshift(this.faintQueue[this.faintQueue.length - 1]);
			this.faintQueue.pop();
		}
		let faintData;
		while (this.faintQueue.length) {
			faintData = this.faintQueue.shift()!;
			const pokemon: Pokemon = faintData.target;
			if (!pokemon.fainted &&
					this.runEvent('BeforeFaint', pokemon, faintData.source, faintData.effect)) {
				this.add('faint', pokemon);
				if (
					!(pokemon.species.name === 'Poultergeist' && pokemon.ability === 'chickenout' && !pokemon.headless &&
					  !pokemon.transformed && this.canSwitch(pokemon.side))
				) {
					pokemon.side.pokemonLeft--;
				}
				this.runEvent('Faint', pokemon, faintData.source, faintData.effect);
				this.singleEvent('End', pokemon.getAbility(), pokemon.abilityData, pokemon);
				pokemon.clearVolatile(false);
				if (!pokemon.headless) {
					pokemon.fainted = true;
				} else {
					pokemon.faintQueued = null;
				}
				pokemon.illusion = null;
				pokemon.isActive = false;
				pokemon.isStarted = false;
				pokemon.side.faintedThisTurn = pokemon;
			}
		}

		if (this.gen <= 1) {
			// in gen 1, fainting skips the rest of the turn
			// residuals don't exist in gen 1
			this.queue.clear();
		} else if (this.gen <= 3 && this.gameType === 'singles') {
			// in gen 3 or earlier, fainting in singles skips to residuals
			for (const pokemon of this.getAllActive()) {
				if (this.gen <= 2) {
					// in gen 2, fainting skips moves only
					this.queue.cancelMove(pokemon);
				} else {
					// in gen 3, fainting skips all moves and switches
					this.queue.cancelAction(pokemon);
				}
			}
		}

		let team1PokemonLeft = this.sides[0].pokemonLeft;
		let team2PokemonLeft = this.sides[1].pokemonLeft;
		const team3PokemonLeft = this.gameType === 'free-for-all' && this.sides[2]!.pokemonLeft;
		const team4PokemonLeft = this.gameType === 'free-for-all' && this.sides[3]!.pokemonLeft;
		if (this.gameType === 'multi') {
			team1PokemonLeft = this.sides.reduce((total, side) => total + (side.n % 2 === 0 ? side.pokemonLeft : 0), 0);
			team2PokemonLeft = this.sides.reduce((total, side) => total + (side.n % 2 === 1 ? side.pokemonLeft : 0), 0);
		}
		if (!team1PokemonLeft && !team2PokemonLeft && !team3PokemonLeft && !team4PokemonLeft) {
			this.win(faintData && this.gen > 4 ? faintData.target.side : null);
			return true;
		}
		if (!team2PokemonLeft && !team3PokemonLeft && !team4PokemonLeft) {
			this.win(this.sides[0]);
			return true;
		}
		if (!team1PokemonLeft && !team3PokemonLeft && !team4PokemonLeft) {
			this.win(this.sides[1]);
			return true;
		}
		if (!team1PokemonLeft && !team2PokemonLeft && !team4PokemonLeft) {
			this.win(this.sides[2]);
			return true;
		}
		if (!team1PokemonLeft && !team2PokemonLeft && !team3PokemonLeft) {
			this.win(this.sides[3]);
			return true;
		}

		if (faintData) {
			this.runEvent('AfterFaint', faintData.target, faintData.source, faintData.effect, length);
		}
		return false;
	},
	checkFainted() {
		for (const side of this.sides) {
			for (const pokemon of side.active) {
				if (pokemon.fainted) {
					pokemon.status = 'fnt' as ID;
					pokemon.switchFlag = true;
				} else if (pokemon.headless) {
					pokemon.status = '';
					pokemon.switchFlag = true;
				}
			}
		}
	}
};
