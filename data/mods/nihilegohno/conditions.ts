export const Conditions: {[k: string]: ConditionData} = {
	symbiont: {
		name: 'symbiont',
		duration: 0,
		noCopy: true,
		
		onStart(pokemon) {
			if (!pokemon.transformed) pokemon.transformed = true;
			this.add('-start', pokemon, 'typechange', pokemon.getTypes(true).join('/'), '[silent]');
			if (!pokemon.hasType('Poison') && pokemon.addType('Poison')) this.add('-start', pokemon, 'typeadd', 'Poison', '[silent]'); // three types!
			if (!pokemon.switchedIn) {
				const species = pokemon.species;
				const abilities = species.abilities;
				const baseStats = species.baseStats;
				const type = species.types[0];
				if (species.types[1]) {
					const type2 = species.types[1];
					this.add(`raw|<ul class="utilichart"><li class="result"><span class="col pokemonnamecol" style="white-space: nowrap">` + species.name + `</span> <span class="col typecol"><img src="http://play.pokemonshowdown.com/sprites/types/${type}.png" alt="${type}" height="14" width="32"><img src="http://play.pokemonshowdown.com/sprites/types/${type2}.png" alt="${type2}" height="14" width="32"></span> <span style="float: left ; min-height: 26px"><span class="col abilitycol">` + this.dex.getAbility(abilities[0]).name + `</span><span class="col abilitycol"></span></span><span style="float: left ; min-height: 26px"><span class="col statcol"><em>HP</em><br>` + baseStats.hp + `</span> <span class="col statcol"><em>Atk</em><br>` + baseStats.atk + `</span> <span class="col statcol"><em>Def</em><br>` + baseStats.def + `</span> <span class="col statcol"><em>SpA</em><br>` + baseStats.spa + `</span> <span class="col statcol"><em>SpD</em><br>` + baseStats.spd + `</span> <span class="col statcol"><em>Spe</em><br>` + baseStats.spe + `</span> </span></li><li style="clear: both"></li></ul>`);
				} else {
					this.add(`raw|<ul class="utilichart"><li class="result"><span class="col pokemonnamecol" style="white-space: nowrap">` + species.name + `</span> <span class="col typecol"><img src="http://play.pokemonshowdown.com/sprites/types/${type}.png" alt="${type}" height="14" width="32"></span> <span style="float: left ; min-height: 26px"><span class="col abilitycol">` + this.dex.getAbility(abilities[0]).name + `</span><span class="col abilitycol"></span></span><span style="float: left ; min-height: 26px"><span class="col statcol"><em>HP</em><br>` + baseStats.hp + `</span> <span class="col statcol"><em>Atk</em><br>` + baseStats.atk + `</span> <span class="col statcol"><em>Def</em><br>` + baseStats.def + `</span> <span class="col statcol"><em>SpA</em><br>` + baseStats.spa + `</span> <span class="col statcol"><em>SpD</em><br>` + baseStats.spd + `</span> <span class="col statcol"><em>Spe</em><br>` + baseStats.spe + `</span> </span></li><li style="clear: both"></li></ul>`);
				}
				pokemon.switchedIn = true;
			}
			this.add('-ability', pokemon, 'As One');
		},
		
		// As One (Nihilego)
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
			if (!move || !attacker || !attacker.fusion || !attacker.host) return;
			if (attacker.moves.indexOf(move) >= attacker.fusionIndex) {
				console.log(attacker.name);
				attacker.name = attacker.hostName;
				console.log(attacker.name);
				if (attacker.species !== attacker.host) attacker.formeChange(attacker.host);
				this.add('-start', attacker, 'typechange', attacker.getTypes(true).join('/'), '[silent]');
				if (!attacker.hasType('Poison') && attacker.addType('Poison')) this.add('-start', attacker, 'typeadd', 'Poison', '[silent]'); // three types!
			} else {
				console.log(attacker.name);
				attacker.name = attacker.fusionName;
				console.log(attacker.name);
				if (attacker.species !== attacker.fusion) attacker.formeChange(attacker.fusion);
				this.add('-start', attacker, 'typechange', attacker.getTypes(true).join('/'), '[silent]');
				if (!attacker.hasType('Poison') && attacker.addType('Poison')) this.add('-start', attacker, 'typeadd', 'Poison', '[silent]'); // three types!
			}
		},
	},
};
