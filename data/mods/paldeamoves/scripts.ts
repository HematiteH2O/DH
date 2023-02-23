export const Scripts: ModdedBattleScriptsData = {
	init() {
		for (const moveid in this.dataCache.Moves) {
			const move = this.dataCache.Moves[moveid];
			if (move.num > 826) continue;
			const newLearners: string[] = [];
			for (const id in this.dataCache.Pokedex) {
				const poke = this.dataCache.Pokedex[id];
				if (!poke) continue; // skip anything that can't be read correctly, just in case
				if (poke.num > 898 || id.endsWith('hisui') || id.endsWith('paldea') || id.endsWith('paldeafire') || id.endsWith('paldeawater')) continue;
				if (poke.evos) continue; // let's worry about fully-evolved Pokémon for now
				if (this.dataCache.Learnsets[id] && this.dataCache.Learnsets[id].learnset) {
					const learnset = this.modData('Learnsets', this.toID(id)).learnset;
					let learnedPre = false;
					let learnedGen9 = false;
					if (learnset[moveid]) { // if it learns the move itself
						for (const source of learnset[moveid]) {
							if (parseInt(source.charAt(0)) === 9) learnedGen9 = true;
							else learnedPre = true;
						}
					}
					if (learnedGen9 && !learnedPre) newLearners.push(poke.name);
				}
				if (!newLearners.length) continue;
				const sheetOutput: string[] = [];
				sheetOutput.push(move.name + `: ` newLearners);
				move.sheetOutput = sheetOutput;
			}
		}
	},
};
