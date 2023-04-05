export const Formats: FormatList = [

	{
		section: "Spreadsheets",
	},

	{
		name: "Dex Sheet Generator",
		desc: [
			"Outputs a sheet like your usual Dex WIP Sheet!",
		],
		
		ruleset: ['Team Preview', 'HP Percentage Mod', 'Cancel Mod', 'Dynamax Clause', 'Sleep Clause Mod'],
		onBegin() {
			for (const id in this.dex.data.Pokedex) {
				const poke = this.dex.data.Pokedex[id];
				if (poke && poke.sheetOutput) this.add('-message', `${poke.sheetOutput}`);
			}
		},
		mod: 'dexsheet',
	},

	{
		name: "Pulse Learnsets Generator",
		desc: [
			"Outputs a sheet that helpfully identifies learnsets based on Pulse's TMs and tutors!",
		],
		
		ruleset: ['Team Preview', 'HP Percentage Mod', 'Cancel Mod', 'Dynamax Clause', 'Sleep Clause Mod'],
		onBegin() {
			for (const id in this.dex.data.Pokedex) {
				const poke = this.dex.data.Pokedex[id];
				if (poke && poke.sheetOutput) this.add('-message', `${poke.sheetOutput}`);
			}
		},
		mod: 'pulselearnsets',
	},

	{
		name: "Utility Sheet Generator",
		desc: [
			"Outputs a sheet that organizes a Pokémon's competitive movepool for convenience!",
		],
		
		ruleset: ['Team Preview', 'HP Percentage Mod', 'Cancel Mod', 'Dynamax Clause', 'Sleep Clause Mod'],
		onBegin() {
			for (const typeid in this.dex.data.TypeChart) {
				this.add('-message', `=== ${typeid} ===\n`);
				for (const id in this.dex.data.Pokedex) {
					const poke = this.dex.data.Pokedex[id];
					if (poke.types.includes(typeid) && poke.kind && poke.kind === "Platinum" && poke.sheetOutput) {
						this.add('-message', `${poke.sheetOutput}`);
						poke.sheetOutput = poke.sheetOutput2;
					}
				}
				for (const id in this.dex.data.Pokedex) {
					const poke = this.dex.data.Pokedex[id];
					if (poke.types.includes(typeid) && poke.kind && poke.kind === "Remake" && poke.sheetOutput) {
						this.add('-message', `${poke.sheetOutput}`);
						poke.sheetOutput = poke.sheetOutput2;
					}
				}
				for (const id in this.dex.data.Pokedex) {
					const poke = this.dex.data.Pokedex[id];
					if (poke.types.includes(typeid) && poke.kind && poke.kind === "Variant" && poke.sheetOutput) {
						this.add('-message', `${poke.sheetOutput}`);
						poke.sheetOutput = poke.sheetOutput2;
					}
				}
				for (const id in this.dex.data.Pokedex) {
					const poke = this.dex.data.Pokedex[id];
					if (poke.types.includes(typeid) && poke.kind && poke.kind === "Addition" && poke.sheetOutput) {
						this.add('-message', `${poke.sheetOutput}`);
						poke.sheetOutput = poke.sheetOutput2;
					}
				}
				for (const id in this.dex.data.Pokedex) {
					const poke = this.dex.data.Pokedex[id];
					if (poke.types.includes(typeid) && poke.kind && poke.kind === "Special" && poke.sheetOutput) {
						this.add('-message', `${poke.sheetOutput}`);
						poke.sheetOutput = poke.sheetOutput2;
					}
				}
			}
		},
		mod: 'utilitysheet',
	},

	{
		name: "Variants Comparison",
		desc: [
			"Outputs a sheet that compares variants' authentic movepools to their base forms (excluding impossible transfers)!",
		],
		
		ruleset: ['Team Preview', 'HP Percentage Mod', 'Cancel Mod', 'Dynamax Clause', 'Sleep Clause Mod'],
		onBegin() {
			for (const id in this.dex.data.Pokedex) {
				const poke = this.dex.data.Pokedex[id];
				if (poke && poke.sheetOutput) this.add('-message', `${poke.sheetOutput}`);
			}
		},
		mod: 'variantscompare',
	},

	{
		name: "Moves from Paldea",
		desc: [
			"Outputs a sheet that lists movepool additions from Gen IX (by move)!",
		],
		
		ruleset: ['Team Preview', 'HP Percentage Mod', 'Cancel Mod', 'Dynamax Clause', 'Sleep Clause Mod'],
		onBegin() {
			for (const moveid in this.dex.data.Moves) {
				const move = this.dex.data.Moves[moveid];
				if (move && move.sheetOutput) this.add('-message', `${move.sheetOutput}`);
			}
		},
		mod: 'paldeamoves',
	},

	{
		name: "Type-Move Correlations",
		desc: [
			"Outputs a sheet that lists type-move correlations in each Generation.",
		],
		
		ruleset: ['Team Preview', 'HP Percentage Mod', 'Cancel Mod', 'Dynamax Clause', 'Sleep Clause Mod'],
		onBegin() {
			for (const typeid in this.dex.data.TypeChart) {
				const type = this.dex.data.TypeChart[typeid];
				if (type && type.sheetOutput) this.add('-message', `${type.sheetOutput}`);
			}
		},
		mod: 'typedata',
	},

];
