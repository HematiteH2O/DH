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
			for (const id in this.dex.data.Pokedex) {
				const poke = this.dex.data.Pokedex[id];
				if (poke && poke.sheetOutput) this.add('-message', `${poke.sheetOutput}`);
			}
		},
		mod: 'utilitysheet',
	},

];
