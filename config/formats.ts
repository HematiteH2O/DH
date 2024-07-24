export const Formats: FormatList = [

	{
		section: "Spreadsheets",
	},
/*
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
*/
	{
		name: "Utility Sheet Generator",
		desc: [
			"Outputs a sheet that organizes a Pokémon's competitive movepool for convenience!",
		],
		
		ruleset: ['Team Preview', 'HP Percentage Mod', 'Cancel Mod', 'Dynamax Clause', 'Sleep Clause Mod'],
		onBegin() {
			// const platinumDex = ['turtwig', 'grotle', 'torterra', 'chimchar', 'monferno', 'infernape', 'piplup', 'prinplup', 'empoleon', 'starly', 'staravia', 'staraptor', 'bidoof', 'bibarel', 'kricketot', 'kricketune', 'shinx', 'luxio', 'luxray', 'abra', 'kadabra', 'alakazam', 'magikarp', 'gyarados', 'budew', 'roselia', 'roserade', 'zubat', 'golbat', 'crobat', 'geodude', 'graveler', 'golem', 'onix', 'steelix', 'cranidos', 'rampardos', 'shieldon', 'bastiodon', 'machop', 'machoke', 'machamp', 'psyduck', 'golduck', 'burmy', 'wormadam', 'wormadamsandy', 'wormadamtrash', 'mothim', 'wurmple', 'silcoon', 'beautifly', 'cascoon', 'dustox', 'combee', 'vespiquen', 'pachirisu', 'buizel', 'floatzel', 'cherubi', 'cherrim', 'shellos', 'gastrodon', 'heracross', 'aipom', 'ambipom', 'drifloon', 'drifblim', 'buneary', 'lopunny', 'gastly', 'haunter', 'gengar', 'misdreavus', 'mismagius', 'murkrow', 'honchkrow', 'glameow', 'purugly', 'goldeen', 'seaking', 'barboach', 'whiscash', 'chingling', 'chimecho', 'stunky', 'skuntank', 'meditite', 'medicham', 'bronzor', 'bronzong', 'ponyta', 'rapidash', 'bonsly', 'sudowoodo', 'mimejr', 'mrmime', 'happiny', 'chansey', 'blissey', 'cleffa', 'clefairy', 'clefable', 'chatot', 'pichu', 'pikachu', 'raichu', 'hoothoot', 'noctowl', 'spiritomb', 'gible', 'gabite', 'garchomp', 'munchlax', 'snorlax', 'unown', 'riolu', 'lucario', 'wooper', 'quagsire', 'wingull', 'pelipper', 'girafarig', 'hippopotas', 'hippowdon', 'azurill', 'marill', 'azumarill', 'skorupi', 'drapion', 'croagunk', 'toxicroak', 'carnivine', 'remoraid', 'octillery', 'finneon', 'lumineon', 'tentacool', 'tentacruel', 'feebas', 'milotic', 'mantyke', 'mantine', 'snover', 'abomasnow', 'sneasel', 'weavile', 'rotom', 'rotomheat', 'rotomwash', 'rotomfrost', 'rotomfan', 'rotommow', 'gligar', 'gliscor', 'nosepass', 'probopass', 'ralts', 'kirlia', 'gardevoir', 'gallade', 'lickitung', 'lickilicky', 'eevee', 'vaporeon', 'jolteon', 'flareon', 'espeon', 'umbreon', 'leafeon', 'glaceon', 'swablu', 'altaria', 'togepi', 'togetic', 'togekiss', 'houndour', 'houndoom', 'magnemite', 'magneton', 'magnezone', 'tangela', 'tangrowth', 'yanma', 'yanmega', 'tropius', 'rhyhorn', 'rhydon', 'rhyperior', 'duskull', 'dusclops', 'dusknoir', 'porygon', 'porygon2', 'porygonz', 'scyther', 'scizor', 'elekid', 'electabuzz', 'electivire', 'magby', 'magmar', 'magmortar', 'swinub', 'piloswine', 'mamoswine', 'snorunt', 'glalie', 'froslass', 'absol'];
			this.add('-message', `=== Variants ===\n`); // just in case
			for (const id in this.dex.data.Pokedex) {
				const poke = this.dex.data.Pokedex[id];
				if ((poke.kind && poke.kind === "Custom") && poke.sheetOutput) {
					this.add('-message', `${poke.sheetOutput}`);
					poke.sheetOutput = poke.sheetOutput2;
				}
			}
			for (const typeid in this.dex.data.TypeChart) {
				this.add('-message', `=== ${typeid} ===\n`);
				/*
				for (const pokeid of platinumDex) {
					const poke = this.dex.data.Pokedex[pokeid];
					if (poke && poke.types.includes(typeid) && poke.kind && poke.kind === "Platinum" && poke.sheetOutput) {
						this.add('-message', `${poke.sheetOutput}`);
						poke.sheetOutput = poke.sheetOutput2;
					}
				}
	 			*/
				for (const id in this.dex.data.Pokedex) {
					const poke = this.dex.data.Pokedex[id];
					if (poke.types.includes(typeid) && poke.kind && poke.kind === "Ondas" && poke.sheetOutput) {
						this.add('-message', `${poke.sheetOutput}`);
						poke.sheetOutput = poke.sheetOutput2;
					}
				}/*
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
				}*/
			}
			this.add('-message', `=== Legendary stuff (not in Ondas) ===\n`); // just personal curiosity I guess?
			for (const id in this.dex.data.Pokedex) {
				const poke = this.dex.data.Pokedex[id];
				if ((!poke.kind || (poke.kind !== "Ondas" && poke.kind !== "Custom")) && poke.sheetOutput) {
					this.add('-message', `${poke.sheetOutput}`);
					poke.sheetOutput = poke.sheetOutput2;
				}
			}
		},
		mod: 'ondas_utility', // a genius always I am a genius
	},
/*
	{
		name: "Reverse Utility Sheet",
		desc: [
			"The same as the Utility Sheet, but for Pokémon that currently aren't in the Sinnoh dex!",
		],
		
		ruleset: ['Team Preview', 'HP Percentage Mod', 'Cancel Mod', 'Dynamax Clause', 'Sleep Clause Mod'],
		onBegin() {
			const platinumDex = ['turtwig', 'grotle', 'torterra', 'chimchar', 'monferno', 'infernape', 'piplup', 'prinplup', 'empoleon', 'starly', 'staravia', 'staraptor', 'bidoof', 'bibarel', 'kricketot', 'kricketune', 'shinx', 'luxio', 'luxray', 'abra', 'kadabra', 'alakazam', 'magikarp', 'gyarados', 'budew', 'roselia', 'roserade', 'zubat', 'golbat', 'crobat', 'geodude', 'graveler', 'golem', 'onix', 'steelix', 'cranidos', 'rampardos', 'shieldon', 'bastiodon', 'machop', 'machoke', 'machamp', 'psyduck', 'golduck', 'burmy', 'wormadam', 'wormadamsandy', 'wormadamtrash', 'mothim', 'wurmple', 'silcoon', 'beautifly', 'cascoon', 'dustox', 'combee', 'vespiquen', 'pachirisu', 'buizel', 'floatzel', 'cherubi', 'cherrim', 'shellos', 'gastrodon', 'heracross', 'aipom', 'ambipom', 'drifloon', 'drifblim', 'buneary', 'lopunny', 'gastly', 'haunter', 'gengar', 'misdreavus', 'mismagius', 'murkrow', 'honchkrow', 'glameow', 'purugly', 'goldeen', 'seaking', 'barboach', 'whiscash', 'chingling', 'chimecho', 'stunky', 'skuntank', 'meditite', 'medicham', 'bronzor', 'bronzong', 'ponyta', 'rapidash', 'bonsly', 'sudowoodo', 'mimejr', 'mrmime', 'happiny', 'chansey', 'blissey', 'cleffa', 'clefairy', 'clefable', 'chatot', 'pichu', 'pikachu', 'raichu', 'hoothoot', 'noctowl', 'spiritomb', 'gible', 'gabite', 'garchomp', 'munchlax', 'snorlax', 'unown', 'riolu', 'lucario', 'wooper', 'quagsire', 'wingull', 'pelipper', 'girafarig', 'hippopotas', 'hippowdon', 'azurill', 'marill', 'azumarill', 'skorupi', 'drapion', 'croagunk', 'toxicroak', 'carnivine', 'remoraid', 'octillery', 'finneon', 'lumineon', 'tentacool', 'tentacruel', 'feebas', 'milotic', 'mantyke', 'mantine', 'snover', 'abomasnow', 'sneasel', 'weavile', 'rotom', 'rotomheat', 'rotomwash', 'rotomfrost', 'rotomfan', 'rotommow', 'gligar', 'gliscor', 'nosepass', 'probopass', 'ralts', 'kirlia', 'gardevoir', 'gallade', 'lickitung', 'lickilicky', 'eevee', 'vaporeon', 'jolteon', 'flareon', 'espeon', 'umbreon', 'leafeon', 'glaceon', 'swablu', 'altaria', 'togepi', 'togetic', 'togekiss', 'houndour', 'houndoom', 'magnemite', 'magneton', 'magnezone', 'tangela', 'tangrowth', 'yanma', 'yanmega', 'tropius', 'rhyhorn', 'rhydon', 'rhyperior', 'duskull', 'dusclops', 'dusknoir', 'porygon', 'porygon2', 'porygonz', 'scyther', 'scizor', 'elekid', 'electabuzz', 'electivire', 'magby', 'magmar', 'magmortar', 'swinub', 'piloswine', 'mamoswine', 'snorunt', 'glalie', 'froslass', 'absol'];
			for (const typeid in this.dex.data.TypeChart) {
				this.add('-message', `=== ${typeid} ===\n`);
				for (const id in this.dex.data.Pokedex) {
					if (platinumDex.includes(id)) continue;
					const poke = this.dex.data.Pokedex[id];
					if (poke.types.includes(typeid) && poke.kind && poke.kind === "National" && poke.sheetOutput) {
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
*/
];
