export const Scripts: ModdedBattleScriptsData = {
	inherit: 'gen7',
	init: function () {
		for (const id in this.dataCache.Pokedex) {
			let unbanlist = this.dataCache.Formats['gen7dlcmons'].unbanlist;
			let speciesName = this.dataCache.Pokedex[id].name;
			if (!unbanlist.includes(speciesName)) {
				// if (this.dataCache.FormatsData[id] !== undefined) this.dataCache.FormatsData[id].tier = "Illegal";
			}
		}
		const added = (mon: string, moves: string[]) => {
			for (const move of moves) {
				this.modData('Learnsets', this.toID(mon)).learnset[this.toID(move)] = ["7L1"];
			}
		};
		const deleted = (mon: string, moves: string[]) => {
			for (const move of moves) {
				delete this.modData('Learnsets', this.toID(mon)).learnset[this.toID(move)];
			}
		}; // really hope this works
		added("kommoo", ["clangoroussoul"]);

		// all of the non-Gen VIII Alola forms are done here
		// Alolan Ralts line
		deleted("raltsalola", [
			"confusion", "teleport", "healpulse", "imprison", "hypnosis", "storedpower"
		]);
		added("raltsalola", [
			"recover", "lovelykiss", "defog", "fairylock", "mysticalfire", "hex", "workup", "aurasphere"
		]);
		deleted("kirliaalola", [
			"confusion", "teleport", "healpulse", "imprison", "hypnosis", "storedpower"
		]);
		added("kirliaalola", [
			"recover", "lovelykiss", "defog", "fairylock", "mysticalfire", "hex", "workup", "aurasphere"
		]);
		deleted("gardevoiralola", [
			"confusion", "teleport", "healpulse", "imprison", "hypnosis", "storedpower"
		]);
		added("gardevoiralola", [
			"recover", "lovelykiss", "defog", "fairylock", "mysticalfire", "hex", "workup", "aurasphere"
		]);
		deleted("galladealola", [
			"slash", "storedpower", "quickguard", "helpinghand", "healpulse", "wideguard",
			"confusion", "teleport", "healpulse", "imprison", "hypnosis", "storedpower"
		]);
		added("galladealola", [
			"playrough", "detect", "noretreat", "machpunch", "spiritbreak", "powertrip",
			"recover", "lovelykiss", "defog", "fairylock", "mysticalfire", "hex", "workup", "aurasphere"
		]);
		// Alolan Honedge line
		// Alolan Joltik line
		// Alolan Snivy line
		added("snivyalola", [
			"flamethrower", "fireblast", "willowisp", "flareblitz", "bulldoze"
		]);
		added("servinealola", [
			"flamethrower", "fireblast", "willowisp", "flareblitz", "bulldoze"
		]);
		added("serperioralola", [
			"flamethrower", "fireblast", "willowisp", "flareblitz", "bulldoze"
		]);
		// Alolan Tepig line
		added("tepigalola", [
			"hydropump", "surf", "liquidation", "waterfall", "eruption", "waterspout"
		]);
		added("pignitealola", [
			"hydropump", "surf", "liquidation", "waterfall", "eruption", "waterspout"
		]);
		added("emboaralola", [
			"hydropump", "surf", "liquidation", "waterfall", "eruption", "waterspout"
		]);
		// Alolan Oshawott line
		added("oshawottalola", [
			"woodhammer", "leafblade", "energyball", "leafstorm", "uturn", "focusblast", "nastyplot"
		]);
		added("dewottalola", [
			"woodhammer", "leafblade", "energyball", "leafstorm", "uturn", "focusblast", "nastyplot"
		]);
		added("samurottalola", [
			"woodhammer", "leafblade", "energyball", "leafstorm", "uturn", "focusblast", "nastyplot"
		]);
		// Alolan Foongus line
		// Alolan Lake trio
		added("uxiealola", [
			"fireblast", "flamethrower", "flamecharge", "flareblitz", "willowisp"				
		]);
		added("mespritalola", ["earthquake", "earthpower", "highhorsepower"]);
		added("azelfalola", ["powergem"]);
		// Alolan Axew line
		// Alolan Combee line
		// Alolan Escavalier line
		deleted("escavalieralola", ["megahorn", "drillrun"]);
		added("escavalieralola", ["willowisp", "bulkup", "flamecharge"]);
		deleted("armail", ["megahorn", "drillrun"]);
		added("armail", [
			"willowisp", "bulkup", "flamecharge",
			"firelash", "sunnyday", "flamethrower", "heatwave", "trickroom"
		]);
		// Alolan Accelgor line
		added("accelgoralola", ["stealthrock"]);
		added("shinobug", ["stealthrock", "encore"]);
		// Alolan Sentret line
		// Alolan Tympole line
		// Alolan Legendary Beasts
		added("raikoualola", ["thunderhead", "morningsun"]);
		added("enteialola", ["shadowclaw", "heathaze", "morningsun"]);
		added("suicunealola", ["tidechange", "morningsun"]);
		// Alolan Litwick line
		deleted("litwickalola", [
			"ember", "fireblast", "firespin", "flameburst", "flamecharge", "flamethrower", "heatwave", "incinerate", "inferno",
			"overheat", "sunnyday", "willowisp", "astonish", "confuseray", "curse", "hex", "nightshade", "shadowball", "spite"
		]);
		deleted("lampentalola", [
			"ember", "fireblast", "firespin", "flameburst", "flamecharge", "flamethrower", "heatwave", "incinerate", "inferno",
			"overheat", "sunnyday", "willowisp", "astonish", "confuseray", "curse", "hex", "nightshade", "shadowball", "spite"
		]);
		added("lampentalola", ["flashcannon"]);
		deleted("chandelurealola", [
			"ember", "fireblast", "firespin", "flameburst", "flamecharge", "flamethrower", "heatwave", "incinerate", "inferno",
			"overheat", "sunnyday", "willowisp", "astonish", "confuseray", "curse", "hex", "nightshade", "shadowball", "spite"
		]);
		added("chandelurealola", ["doomdesire", "flashcannon"]);
		// Alolan Swablu line
		// Alolan Sunkern line
	},
	canMegaEvo(pokemon) {
		const altForme = pokemon.baseSpecies.otherFormes && this.dex.getSpecies(pokemon.baseSpecies.otherFormes[0]);
		const item = pokemon.getItem();
		if (
			altForme?.isMega && altForme?.requiredMove &&
			pokemon.baseMoves.includes(this.toID(altForme.requiredMove)) && !item.zMove
		) {
			return altForme.name;
		}
		if (item.name === "Gardevoirite" && pokemon.baseSpecies.name === "Gardevoir-Alola") {
			return "Gardevoir-Alola-Mega";
		}
		if (item.name === "Galladite" && pokemon.baseSpecies.name === "Gallade-Alola") {
			return "Gallade-Alola-Mega";
		}
		if (item.name === "Altarianite" && pokemon.baseSpecies.name === "Altaria-Alola") {
			return "Altaria-Alola-Mega";
		}
		if (item.megaEvolves !== pokemon.baseSpecies.name || item.megaStone === pokemon.species.name) {
			return null;
		}
		return item.megaStone;
	},
};
