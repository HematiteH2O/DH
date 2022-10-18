export const Conditions: {[k: string]: ConditionData} = {
	symbiont: {
		name: 'symbiont',
		duration: 0,
		
		onStart(pokemon) {
			if (!pokemon.transformed) pokemon.transformed = true;
			if (!pokemon.switchedIn) {
				this.add('-start', pokemon, 'typechange', pokemon.getTypes(true).join('/'), '[silent]');
				const species = this.dex.getSpecies(pokemon.species.name);
				const abilities = species.abilities;
				const baseStats = species.baseStats;
				const type = species.types[0];
				this.add(`raw|<ul class="utilichart"><li class="result"><span class="col pokemonnamecol" style="white-space: nowrap">` + species.name + `</span> <span class="col typecol"><img src="https://${Config.routes.client}/sprites/types/${type}.png" alt="${type}" height="14" width="32"></span> <span style="float: left ; min-height: 26px"><span class="col abilitycol">` + abilities[0] + `</span><span class="col abilitycol"></span></span><span style="float: left ; min-height: 26px"><span class="col statcol"><em>HP</em><br>` + baseStats.hp + `</span> <span class="col statcol"><em>Atk</em><br>` + baseStats.atk + `</span> <span class="col statcol"><em>Def</em><br>` + baseStats.def + `</span> <span class="col statcol"><em>SpA</em><br>` + baseStats.spa + `</span> <span class="col statcol"><em>SpD</em><br>` + baseStats.spd + `</span> <span class="col statcol"><em>Spe</em><br>` + baseStats.spe + `</span> </span></li><li style="clear: both"></li></ul>`);
				pokemon.baseMaxhp = Math.floor(Math.floor(
					2 * pokemon.species.baseStats['hp'] + pokemon.set.ivs['hp'] + Math.floor(pokemon.set.evs['hp'] / 4) + 100
				) * pokemon.level / 100 + 10);
				pokemon.switchedIn;
			}
			if (pokemon.hasType('Poison')) return;
			if (!pokemon.addType('Poison')) return;
			this.add('-start', pokemon, 'typeadd', 'Poison'); // three types!
		},
		
		// As One (Nihilego)
		onPreStart(pokemon) {
			this.add('-ability', pokemon, 'As One');
		},
		onSourceAfterFaint(length, target, source, effect) {
			if (effect && effect.effectType === 'Move') {
				let statName = 'atk';
				let bestStat = 0;
				let s: StatNameExceptHP;
				for (s in source.storedStats) {
					if (source.storedStats[s] > bestStat) {
						statName = s;
						bestStat = source.storedStats[s];
					}
				}
				this.boost({[statName]: length}, source, source, this.dex.getAbility('beastboost'));
			}
		},
		
		// purely aesthetic: show form change depending on the attacker
		onBeforeMovePriority: 0.5,
		onBeforeMove(attacker, defender, move) {
			if (!move || !attacker || !attacker.altSpecies || !attacker.fusedSpecies) return;
			attacker.host = this.dex.deepClone(attacker.altSpecies);
			if (attacker.fusedSpecies.id) attacker.host.id = attacker.fusedSpecies.id;
			if (attacker.fusedSpecies.name) attacker.host.name = attacker.fusedSpecies.name;
			if (attacker.fusedSpecies.baseSpecies) attacker.host.baseSpecies = attacker.fusedSpecies.baseSpecies;
			if (attacker.fusedSpecies.forme) attacker.host.forme = attacker.fusedSpecies.forme;
			let targetForme = (move.fusion ? attacker.altSpecies : attacker.host);
			if (attacker.species.name !== targetForme) attacker.formeChange(targetForme);
			if (targetForme === attacker.host) {
				attacker.name = attacker.altName;
			} else {
				attacker.name = attacker.fusedName;
			};
		},
	},
};
