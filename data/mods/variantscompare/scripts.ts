export const Scripts: ModdedBattleScriptsData = {
	init() {
		for (const id in this.dataCache.Pokedex) {
			const poke = this.dataCache.Pokedex[id];
			if (!poke || (!id.endsWith('alola') && !id.endsWith('galar') && !id.endsWith('hisui') && !id.endsWith('paldea'))) continue;
			if (this.dataCache.Learnsets[id] && this.dataCache.Learnsets[id].learnset) {

				// identify the Pokémon's Gen of origin before going any further - it's useful!
				let pokeGen = 1;
				if (poke.num > 898 || id.endsWith('hisui') || id.endsWith('paldea') || id.endsWith('paldeafire') || id.endsWith('paldeawater')) pokeGen = 9;
				else if (poke.num > 809 || id.endsWith('galar')) pokeGen = 8;
				else if (poke.num > 721 || id.endsWith('alola')) pokeGen = 7;

				// start with the vanilla learnset
				const learnset = this.modData('Learnsets', this.toID(id)).learnset;
				let learnset2 = null;
				let poke2 = null;

				// if the Pokémon has pre-evolutions, add their learnsets, too!
				if (poke.baseSpecies) {
					poke2 = this.dataCache.Pokedex[this.toID(poke.baseSpecies)];
					learnset2 = this.modData('Learnsets', this.toID(poke.baseSpecies)).learnset;
				}
				let test = null;
				if (test) console.log("test!");
				const stabAdditions: string[] = [];
				const additions: string[] = [];
				const stabDeletions: string[] = [];
				const deletions: string[] = [];

				for (const moveid in this.dataCache.Moves) {
					const move = this.dataCache.Moves[moveid];
					if (!move) return;
					let varLearned = false;
					let oriLearned = false;
					if (learnset[moveid]) { // if it learns the move itself
						for (const source of learnset[moveid]) {
							if (parseInt(source.charAt(0)) >= pokeGen && source.charAt(1) !== 'V') varLearned = true;
						}
					}
					if (learnset2[moveid]) { // if it learns the move itself
						for (const source of learnset2[moveid]) {
							if (parseInt(source.charAt(0)) >= pokeGen && source.charAt(1) !== 'V') oriLearned = true;
						}
					}
					if (varLearned && !oriLearned) {
						if (poke.types.includes(move.type)) stabAdditions.push(move.name);
						else additions.push(move.name);
					}
					if (!varLearned && oriLearned) {
						if (poke2.types.includes(move.type)) stabDeletions.push(move.name);
						else deletions.push(move.name);
					}
				}
				const sheetOutput: string[] = [];
				var iconname = poke.name.toLowerCase();
				var iconid = iconname.replace(" ", `-`).replace(`.`, ``).replace(`:`, ``).replace(`\u2019`, ``).replace(`%`, ``); // to get rid of spaces and periods
				sheetOutput.push(`=IMAGE("https://www.smogon.com/forums//media/minisprites/` + iconid + `.png",3)~` + poke.name + "~" + poke.types[0] + "~" + (poke.types[1] ? poke.types[1] : "") + "~" + stabAdditions + "~" + additions + "~" + stabDeletions + "~" + deletions);
				poke.sheetOutput = sheetOutput;
			}
		}
	},
};
