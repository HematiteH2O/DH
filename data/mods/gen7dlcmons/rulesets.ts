export const Formats: {[k: string]: FormatData} = {
	datamod: {
		effectType: 'Rule',
		name: 'Data Mod',
		desc: 'When a new Pokémon switches in for the first time, information about its types, stats and Abilities is displayed to both players.',
		onSwitchIn(pokemon) {
			if (pokemon.illusion) { // making sure Illusion isn't given away by this
				const species = this.dex.getSpecies(pokemon.illusion.species.name);
				const baseSpecies = Dex.getSpecies(pokemon.illusion.species.name);
				let modded = false;
				if (baseSpecies) {
					if (baseSpecies.types && species.types !== baseSpecies.types) {
						modded = true;
					} else {
						console.log(species.types + " is the same as " + baseSpecies.types);
					}
					console.log(modded);
					if (baseSpecies.abilities['1'] && species.abilities['1'] !== baseSpecies.abilities['1']) {
						modded = true;
					} else {
						console.log(species.abilities['1'] + " is the same as " + baseSpecies.abilities['1']);
					}
					console.log(modded);
					if (baseSpecies.abilities['2'] && species.abilities['2'] !== baseSpecies.abilities['2']) {
						modded = true;
					} else {
						console.log(species.abilities['2'] + " is the same as " + baseSpecies.abilities['2']);
					}
					console.log(modded);
					if (baseSpecies.abilities['H'] && species.abilities['H'] !== baseSpecies.abilities['H']) {
						modded = true;
					} else {
						console.log(species.abilities['H'] + " is the same as " + baseSpecies.abilities['H']);
					}
					console.log(modded);
					if (baseSpecies.abilities['S'] && species.abilities['S'] !== baseSpecies.abilities['S']) {
						modded = true;
					} else {
						console.log(species.abilities['S'] + " is the same as " + baseSpecies.abilities['S']);
					}
					console.log(modded);
					if (baseSpecies.baseStats.hp && species.baseStats.hp !== baseSpecies.baseStats.hp) {
						modded = true;
					} else {
						console.log(species.baseStats.hp + " is the same as " + baseSpecies.baseStats.hp);
					}
					console.log(modded);
					if (baseSpecies.baseStats.atk && species.baseStats.atk !== baseSpecies.baseStats.atk) {
						modded = true;
					} else {
						console.log(species.baseStats.atk + " is the same as " + baseSpecies.baseStats.atk);
					}
					console.log(modded);
					if (baseSpecies.baseStats.def && species.baseStats.def !== baseSpecies.baseStats.def) {
						modded = true;
					} else {
						console.log(species.baseStats.def + " is the same as " + baseSpecies.baseStats.def);
					}
					console.log(modded);
					if (baseSpecies.baseStats.spa && species.baseStats.spa !== baseSpecies.baseStats.spa) {
						modded = true;
					} else {
						console.log(species.baseStats.spa + " is the same as " + baseSpecies.baseStats.spa);
					}
					console.log(modded);
					if (baseSpecies.baseStats.spd && species.baseStats.spd !== baseSpecies.baseStats.spd) {
						modded = true;
					} else {
						console.log(species.baseStats.spd + " is the same as " + baseSpecies.baseStats.spd);
					}
					console.log(modded);
					if (baseSpecies.baseStats.spe && species.baseStats.spe !== baseSpecies.baseStats.spe) {
						modded = true;
					} else {
						console.log(species.baseStats.spe + " is the same as " + baseSpecies.baseStats.spe);
					}
					console.log(modded);
					if (modded) {
						console.log(species.name + " is different from base");
					} else {
						console.log(species.name + " is the same as in canon");
						return;
					}
				}
				console.log(species.name + " is being reported");
				this.add('-start', pokemon, 'typechange', pokemon.illusion.getTypes(true).join('/'), '[silent]');
				if (!pokemon.illusion.switchedIn) {
					let abilities = species.abilities[0];
					if (species.abilities[1]) {
						abilities += ` / ${species.abilities[1]}`;
					}
					if (species.abilities['H']) {
						abilities += ` / ${species.abilities['H']}`;
					}
					const baseStats = species.baseStats;
					const type = species.types[0];
					if (species.types[1]) {
						const type2 = species.types[1];
						this.add(`raw|<ul class="utilichart"><li class="result"><span class="col pokemonnamecol" style="white-space: nowrap">` + species.name + `</span> <span class="col typecol"><img src="https://${Config.routes.client}/sprites/types/${type}.png" alt="${type}" height="14" width="32"><img src="https://${Config.routes.client}/sprites/types/${type2}.png" alt="${type2}" height="14" width="32"></span> <span style="float: left ; min-height: 26px"><span class="col abilitycol">` + abilities + `</span><span class="col abilitycol"></span></span><span style="float: left ; min-height: 26px"><span class="col statcol"><em>HP</em><br>` + baseStats.hp + `</span> <span class="col statcol"><em>Atk</em><br>` + baseStats.atk + `</span> <span class="col statcol"><em>Def</em><br>` + baseStats.def + `</span> <span class="col statcol"><em>SpA</em><br>` + baseStats.spa + `</span> <span class="col statcol"><em>SpD</em><br>` + baseStats.spd + `</span> <span class="col statcol"><em>Spe</em><br>` + baseStats.spe + `</span> </span></li><li style="clear: both"></li></ul>`);
					} else {
						this.add(`raw|<ul class="utilichart"><li class="result"><span class="col pokemonnamecol" style="white-space: nowrap">` + species.name + `</span> <span class="col typecol"><img src="https://${Config.routes.client}/sprites/types/${type}.png" alt="${type}" height="14" width="32"></span> <span style="float: left ; min-height: 26px"><span class="col abilitycol">` + abilities + `</span><span class="col abilitycol"></span></span><span style="float: left ; min-height: 26px"><span class="col statcol"><em>HP</em><br>` + baseStats.hp + `</span> <span class="col statcol"><em>Atk</em><br>` + baseStats.atk + `</span> <span class="col statcol"><em>Def</em><br>` + baseStats.def + `</span> <span class="col statcol"><em>SpA</em><br>` + baseStats.spa + `</span> <span class="col statcol"><em>SpD</em><br>` + baseStats.spd + `</span> <span class="col statcol"><em>Spe</em><br>` + baseStats.spe + `</span> </span></li><li style="clear: both"></li></ul>`);
					}
					pokemon.illusion.switchedIn = true; 
				}
			} else {
				const species = this.dex.getSpecies(pokemon.species.name);
				const baseSpecies = Dex.getSpecies(pokemon.species.name);
				let modded = false;
				if (baseSpecies) {
					if (baseSpecies.types && species.types !== baseSpecies.types) {
						modded = true;
					} else {
						console.log(species.types + " is the same as " + baseSpecies.types);
					}
					console.log(modded);
					if (baseSpecies.abilities['1'] && species.abilities['1'] !== baseSpecies.abilities['1']) {
						modded = true;
					} else {
						console.log(species.abilities['1'] + " is the same as " + baseSpecies.abilities['1']);
					}
					console.log(modded);
					if (baseSpecies.abilities['2'] && species.abilities['2'] !== baseSpecies.abilities['2']) {
						modded = true;
					} else {
						console.log(species.abilities['2'] + " is the same as " + baseSpecies.abilities['2']);
					}
					console.log(modded);
					if (baseSpecies.abilities['H'] && species.abilities['H'] !== baseSpecies.abilities['H']) {
						modded = true;
					} else {
						console.log(species.abilities['H'] + " is the same as " + baseSpecies.abilities['H']);
					}
					console.log(modded);
					if (baseSpecies.abilities['S'] && species.abilities['S'] !== baseSpecies.abilities['S']) {
						modded = true;
					} else {
						console.log(species.abilities['S'] + " is the same as " + baseSpecies.abilities['S']);
					}
					console.log(modded);
					if (baseSpecies.baseStats.hp && species.baseStats.hp !== baseSpecies.baseStats.hp) {
						modded = true;
					} else {
						console.log(species.baseStats.hp + " is the same as " + baseSpecies.baseStats.hp);
					}
					console.log(modded);
					if (baseSpecies.baseStats.atk && species.baseStats.atk !== baseSpecies.baseStats.atk) {
						modded = true;
					} else {
						console.log(species.baseStats.atk + " is the same as " + baseSpecies.baseStats.atk);
					}
					console.log(modded);
					if (baseSpecies.baseStats.def && species.baseStats.def !== baseSpecies.baseStats.def) {
						modded = true;
					} else {
						console.log(species.baseStats.def + " is the same as " + baseSpecies.baseStats.def);
					}
					console.log(modded);
					if (baseSpecies.baseStats.spa && species.baseStats.spa !== baseSpecies.baseStats.spa) {
						modded = true;
					} else {
						console.log(species.baseStats.spa + " is the same as " + baseSpecies.baseStats.spa);
					}
					console.log(modded);
					if (baseSpecies.baseStats.spd && species.baseStats.spd !== baseSpecies.baseStats.spd) {
						modded = true;
					} else {
						console.log(species.baseStats.spd + " is the same as " + baseSpecies.baseStats.spd);
					}
					console.log(modded);
					if (baseSpecies.baseStats.spe && species.baseStats.spe !== baseSpecies.baseStats.spe) {
						modded = true;
					} else {
						console.log(species.baseStats.spe + " is the same as " + baseSpecies.baseStats.spe);
					}
					console.log(modded);
					if (modded) {
						console.log(species.name + " is different from base");
					} else {
						console.log(species.name + " is the same as in canon");
						return;
					}
				}
				console.log(species.name + " is being reported");
				this.add('-start', pokemon, 'typechange', pokemon.getTypes(true).join('/'), '[silent]');
				if (!pokemon.switchedIn) {
					let abilities = species.abilities[0];
					if (species.abilities[1]) {
						abilities += ` / ${species.abilities[1]}`;
					}
					if (species.abilities['H']) {
						abilities += ` / ${species.abilities['H']}`;
					}
					const baseStats = species.baseStats;
					const type = species.types[0];
					if (species.types[1]) {
						const type2 = species.types[1];
						this.add(`raw|<ul class="utilichart"><li class="result"><span class="col pokemonnamecol" style="white-space: nowrap">` + species.name + `</span> <span class="col typecol"><img src="https://${Config.routes.client}/sprites/types/${type}.png" alt="${type}" height="14" width="32"><img src="https://${Config.routes.client}/sprites/types/${type2}.png" alt="${type2}" height="14" width="32"></span> <span style="float: left ; min-height: 26px"><span class="col abilitycol">` + abilities + `</span><span class="col abilitycol"></span></span><span style="float: left ; min-height: 26px"><span class="col statcol"><em>HP</em><br>` + baseStats.hp + `</span> <span class="col statcol"><em>Atk</em><br>` + baseStats.atk + `</span> <span class="col statcol"><em>Def</em><br>` + baseStats.def + `</span> <span class="col statcol"><em>SpA</em><br>` + baseStats.spa + `</span> <span class="col statcol"><em>SpD</em><br>` + baseStats.spd + `</span> <span class="col statcol"><em>Spe</em><br>` + baseStats.spe + `</span> </span></li><li style="clear: both"></li></ul>`);
					} else {
						this.add(`raw|<ul class="utilichart"><li class="result"><span class="col pokemonnamecol" style="white-space: nowrap">` + species.name + `</span> <span class="col typecol"><img src="https://${Config.routes.client}/sprites/types/${type}.png" alt="${type}" height="14" width="32"></span> <span style="float: left ; min-height: 26px"><span class="col abilitycol">` + abilities + `</span><span class="col abilitycol"></span></span><span style="float: left ; min-height: 26px"><span class="col statcol"><em>HP</em><br>` + baseStats.hp + `</span> <span class="col statcol"><em>Atk</em><br>` + baseStats.atk + `</span> <span class="col statcol"><em>Def</em><br>` + baseStats.def + `</span> <span class="col statcol"><em>SpA</em><br>` + baseStats.spa + `</span> <span class="col statcol"><em>SpD</em><br>` + baseStats.spd + `</span> <span class="col statcol"><em>Spe</em><br>` + baseStats.spe + `</span> </span></li><li style="clear: both"></li></ul>`);
					}
					pokemon.switchedIn = true;
				}
			}
		},
		onDamagingHit(damage, target, source, move) {
			if (target.hasAbility('illusion')) { // making sure the correct information is given when an Illusion breaks
				const species = this.dex.getSpecies(target.illusion.species.name);
				const baseSpecies = Dex.getSpecies(target.illusion.species.name);
				if (baseSpecies) {
					if (
						species.types === baseSpecies.types
					) {
						this.add('-end', target, 'typechange', '[silent]');
						return;
					}
				}
				this.add('-start', target, 'typechange', target.getTypes(true).join('/'), '[silent]');
/*
				if (!target.switchedIn) {
					let abilities = species.abilities[0];
					if (species.abilities[1]) {
						abilities += ` / ${species.abilities[1]}`;
					}
					if (species.abilities['H']) {
						abilities += ` / ${species.abilities['H']}`;
					}
					const baseStats = species.baseStats;
					const type = species.types[0];
					if (species.types[1]) {
						const type2 = species.types[1];
						this.add(`raw|<ul class="utilichart"><li class="result"><span class="col pokemonnamecol" style="white-space: nowrap">` + species.name + `</span> <span class="col typecol"><img src="https://${Config.routes.client}/sprites/types/${type}.png" alt="${type}" height="14" width="32"><img src="https://${Config.routes.client}/sprites/types/${type2}.png" alt="${type2}" height="14" width="32"></span> <span style="float: left ; min-height: 26px"><span class="col abilitycol">` + abilities + `</span><span class="col abilitycol"></span></span><span style="float: left ; min-height: 26px"><span class="col statcol"><em>HP</em><br>` + baseStats.hp + `</span> <span class="col statcol"><em>Atk</em><br>` + baseStats.atk + `</span> <span class="col statcol"><em>Def</em><br>` + baseStats.def + `</span> <span class="col statcol"><em>SpA</em><br>` + baseStats.spa + `</span> <span class="col statcol"><em>SpD</em><br>` + baseStats.spd + `</span> <span class="col statcol"><em>Spe</em><br>` + baseStats.spe + `</span> </span></li><li style="clear: both"></li></ul>`);
					} else {
						this.add(`raw|<ul class="utilichart"><li class="result"><span class="col pokemonnamecol" style="white-space: nowrap">` + species.name + `</span> <span class="col typecol"><img src="https://${Config.routes.client}/sprites/types/${type}.png" alt="${type}" height="14" width="32"></span> <span style="float: left ; min-height: 26px"><span class="col abilitycol">` + abilities + `</span><span class="col abilitycol"></span></span><span style="float: left ; min-height: 26px"><span class="col statcol"><em>HP</em><br>` + baseStats.hp + `</span> <span class="col statcol"><em>Atk</em><br>` + baseStats.atk + `</span> <span class="col statcol"><em>Def</em><br>` + baseStats.def + `</span> <span class="col statcol"><em>SpA</em><br>` + baseStats.spa + `</span> <span class="col statcol"><em>SpD</em><br>` + baseStats.spd + `</span> <span class="col statcol"><em>Spe</em><br>` + baseStats.spe + `</span> </span></li><li style="clear: both"></li></ul>`);
					}
					target.switchedIn = true; 
				}
*/
			}
		},
	},
	megadatamod: {
		effectType: 'Rule',
		name: 'Mega Data Mod',
		desc: 'Gives data on stats, Ability and types when a Pokémon Mega Evolves or undergoes Ultra Burst.',
		onSwitchIn(pokemon) {
			if (pokemon.illusion) {
				if (pokemon.illusion.species.forme.startsWith('Mega') || pokemon.illusion.species.forme.startsWith('Ultra')) {
					this.add('-start', pokemon, 'typechange', pokemon.illusion.getTypes(true).join('/'), '[silent]');
				}
			} else {
				if (pokemon.species.forme.startsWith('Mega') || pokemon.species.forme.startsWith('Ultra')) {
					this.add('-start', pokemon, 'typechange', pokemon.getTypes(true).join('/'), '[silent]');
				}
			}
		},
		onDamagingHit(damage, target, source, move) {
			if (target.hasAbility('illusion')) {
				if (target.species.forme.startsWith('Mega') || target.species.forme.startsWith('Ultra')) {
					this.add('-start', target, 'typechange', target.getTypes(true).join('/'), '[silent]');
				} else {
					this.add('-end', target, 'typechange', '[silent]');
				}
			}
		},
		onAfterMega(pokemon) {
			this.add('-start', pokemon, 'typechange', pokemon.getTypes(true).join('/'), '[silent]');
			const species = this.dex.getSpecies(pokemon.species.name);
			const abilities = species.abilities;
			const baseStats = species.baseStats;
			const type = species.types[0];
			if (species.types[1]) {
				const type2 = species.types[1];
				this.add(`raw|<ul class="utilichart"><li class="result"><span class="col pokemonnamecol" style="white-space: nowrap">` + species.name + `</span> <span class="col typecol"><img src="https://${Config.routes.client}/sprites/types/${type}.png" alt="${type}" height="14" width="32"><img src="https://${Config.routes.client}/sprites/types/${type2}.png" alt="${type2}" height="14" width="32"></span> <span style="float: left ; min-height: 26px"><span class="col abilitycol">` + abilities[0] + `</span><span class="col abilitycol"></span></span><span style="float: left ; min-height: 26px"><span class="col statcol"><em>HP</em><br>` + baseStats.hp + `</span> <span class="col statcol"><em>Atk</em><br>` + baseStats.atk + `</span> <span class="col statcol"><em>Def</em><br>` + baseStats.def + `</span> <span class="col statcol"><em>SpA</em><br>` + baseStats.spa + `</span> <span class="col statcol"><em>SpD</em><br>` + baseStats.spd + `</span> <span class="col statcol"><em>Spe</em><br>` + baseStats.spe + `</span> </span></li><li style="clear: both"></li></ul>`);
			} else {
				this.add(`raw|<ul class="utilichart"><li class="result"><span class="col pokemonnamecol" style="white-space: nowrap">` + species.name + `</span> <span class="col typecol"><img src="https://${Config.routes.client}/sprites/types/${type}.png" alt="${type}" height="14" width="32"></span> <span style="float: left ; min-height: 26px"><span class="col abilitycol">` + abilities[0] + `</span><span class="col abilitycol"></span></span><span style="float: left ; min-height: 26px"><span class="col statcol"><em>HP</em><br>` + baseStats.hp + `</span> <span class="col statcol"><em>Atk</em><br>` + baseStats.atk + `</span> <span class="col statcol"><em>Def</em><br>` + baseStats.def + `</span> <span class="col statcol"><em>SpA</em><br>` + baseStats.spa + `</span> <span class="col statcol"><em>SpD</em><br>` + baseStats.spd + `</span> <span class="col statcol"><em>Spe</em><br>` + baseStats.spe + `</span> </span></li><li style="clear: both"></li></ul>`);
			}
			pokemon.switchedIn = true;
		},
	},
};
