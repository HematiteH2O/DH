export const Scripts: ModdedBattleScriptsData = {
	init() {
		for (const id in this.dataCache.Pokedex) {
			const poke = this.dataCache.Pokedex[id];
			if (!poke || !poke.num || !poke.abilities || !poke.types || !poke.baseStats) return;
			let abilities = ``;
			if (poke.abilities[0]) {
				abilities += `${this.dataCache.Abilities[this.toID(poke.abilities[0])].name}`;
			}
			if (poke.abilities[1]) {
				abilities += ` / ${this.dataCache.Abilities[this.toID(poke.abilities[1])].name}`;
			}
			if (poke.abilities['H']) {
				abilities += ` // ${this.dataCache.Abilities[this.toID(poke.abilities['H'])].name}`;
			}
			if (poke.abilities['S']) {
				abilities += ` // (${this.dataCache.Abilities[this.toID(poke.abilities['S'])].name})`;
			}
			const sheetOutput: string[] = [];
			var iconname = poke.name.toLowerCase();
			var iconid = iconname.replace(`\s`, `-`).replace(`.`, ``); // should get rid of spaces and periods?
			sheetOutput.push((poke.evos ? "nfe" : "fe") + poke.num + `~=IMAGE("https://www.smogon.com/forums//media/minisprites/` + iconid + `.png",3)~` + poke.name + "~" + poke.types[0] + "~" + (poke.types[1] ? poke.types[1] : "") + "~" + poke.baseStats.hp + "~" + poke.baseStats.atk + "~" + poke.baseStats.def + "~" + poke.baseStats.spa + "~" + poke.baseStats.spd + "~" + poke.baseStats.spe + "~~~~~~~~" + abilities);
			poke.sheetOutput = sheetOutput;
		}
	},
};
