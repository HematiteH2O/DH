export const Scripts: ModdedBattleScriptsData = {
	init() {

		// event moves from Gen I and Gen II
		const newMoves = (mon: string, moves: string[]) => {
			for (const move of moves) {
				this.modData('Learnsets', this.toID(mon)).learnset[this.toID(move)] = ["7V0"];
			}
		};
		newMoves("bulbasaur", ["ancientpower"]);
		newMoves("squirtle", ["zapcannon"]);
		newMoves("spearow", ["sonicboom"]);
		newMoves("fearow", ["payday"]);
		newMoves("pichu", ["dizzypunch", "petaldance", "scaryface", "sing"]);
		newMoves("nidoranf", ["lovelykiss", "moonlight", "sweetkiss"]);
		newMoves("nidoranm", ["lovelykiss", "morningsun", "sweetkiss"]);
		newMoves("cleffa", ["dizzypunch", "petaldance", "scaryface", "swift"]);
		newMoves("igglybuff", ["dizzypunch", "petaldance", "scaryface"]);
		newMoves("zubat", ["flail"]);
		newMoves("psyduck", ["petaldance", "triattack"]);
		newMoves("poliwag", ["growth", "lovelykiss"]);
		newMoves("abra", ["foresight"]);
		newMoves("machop", ["falseswipe", "thrash"]);
		newMoves("bellsprout", ["lovelykiss", "sweetkiss"]);
		newMoves("geodude", ["rapidspin"]);
		newMoves("magnemite", ["agility"]);
		newMoves("doduo", ["lowkick"]);
		newMoves("seel", ["flail"]);
		newMoves("onix", ["sharpen"]);
		newMoves("drowzee", ["amnesia"]);
		newMoves("voltorb", ["agility"]);
		newMoves("cubone", ["furyattack"]);
		newMoves("tyrogue", ["dizzypunch", "rage"]);
		newMoves("lickitung", ["doubleslap"]);
		newMoves("kangaskhan", ["feintattack"]);
		newMoves("horsea", ["haze"]);
		newMoves("mrmime", ["mindreader"]);
		newMoves("scyther", ["sonicboom"]);
		newMoves("smoochum", ["dizzypunch", "petaldance"]);
		newMoves("elekid", ["dizzypunch", "pursuit"]);
		newMoves("magby", ["dizzypunch"]);
		newMoves("pinsir", ["rockthrow"]);
		newMoves("tauros", ["quickattack"]);
		newMoves("magikarp", ["bubble", "dragonrage", "reversal"]);
		newMoves("lapras", ["bite"]);
		newMoves("eevee", ["growth"]);
		newMoves("snorlax", ["lovelykiss", "splash", "sweetkiss"]);
		newMoves("chikorita", ["petaldance"]);
		newMoves("totodile", ["submission"]);
		newMoves("sentret", ["dizzypunch"]);
		newMoves("ledyba", ["barrier"]);
		newMoves("spinarak", ["growth"]);
		newMoves("chinchou", ["lightscreen"]);
		newMoves("natu", ["safeguard"]);
		newMoves("marill", ["dizzypunch", "scaryface"]);
		newMoves("hoppip", ["agility"]);
		newMoves("sunkern", ["splash"]);
		newMoves("yanma", ["sweetkiss"]);
		newMoves("wooper", ["bellydrum", "scaryface"]);
		newMoves("murkrow", ["beatup"]);
		newMoves("misdreavus", ["hypnosis"]);
		newMoves("wobbuffet", ["mimic"]);
		newMoves("dunsparce", ["furyattack", "horndrill"]);
		newMoves("snubbull", ["lovelykiss"]);
		newMoves("sneasel", ["moonlight"]);
		newMoves("swinub", ["whirlwind"]);
		newMoves("remoraid", ["amnesia", "mist"]);
		newMoves("delibird", ["payday"]);
		newMoves("mantine", ["gust"]);
		newMoves("phanpy", ["absorb", "encore"]);
		newMoves("stantler", ["safeguard"]);
		newMoves("larvitar", ["rage"]);

		// these are from Legends: Arceus
		const legendsMoves = (mon: string, moves: string[]) => {
			for (const move of moves) {
				this.modData('Learnsets', this.toID(mon)).learnset[this.toID(move)] = ["8S0"];
			}
		};
		legendsMoves("abomasnow", ["iciclecrash"]);
		legendsMoves("aipom", ["doubleedge", "mudbomb", "quickattack"]);
		legendsMoves("ambipom", ["doubleedge", "mudbomb", "quickattack"]);
		legendsMoves("arceus", ["ancientpower", "confusion", "quickattack", "extrasensory", "dazzlinggleam", "dracometeor", "mysticalfire", "steelbeam"]);
		legendsMoves("azelf", ["doublehit", "mysticalpower", "powershift"]);
		legendsMoves("barboach", ["zenheadbutt"]);
		legendsMoves("bastiodon", ["powershift", "steelbeam"]);
		legendsMoves("beautifly", ["airslash"]);
		legendsMoves("bergmite", ["iceshard"]);
		legendsMoves("bibarel", ["bite"]);
		legendsMoves("bidoof", ["bite"]);
		legendsMoves("blissey", ["babydolleyes", "drainingkiss", "fairywind", "powershift", "tackle"]);
		legendsMoves("bonsly", ["headsmash", "irondefense", "tackle"]);
		legendsMoves("budew", ["petaldance", "poisonjab", "poisonpowder", "poisonsting"]);
		legendsMoves("buneary", ["doubleedge", "drainingkiss"]);
		legendsMoves("burmy", ["strugglebug"]);
		legendsMoves("carnivine", ["absorb", "leechlife"]);
		legendsMoves("chansey", ["babydolleyes", "drainingkiss", "fairywind", "tackle"]);
		legendsMoves("chatot", ["airslash", "gust", "hurricane", "powershift", "playrough", "snarl"]);
		legendsMoves("cherrim", ["absorb", "doubleedge", "sleeppowder", "stunspore"]);
		legendsMoves("cherubi", ["absorb", "doubleedge", "petaldance", "sleeppowder", "stunspore"]);
		legendsMoves("chimchar", ["doubleedge", "tackle"]);
		legendsMoves("chimecho", ["doubleedge", "extrasensory", "ominouswind"]);
		legendsMoves("chingling", ["doubleedge", "extrasensory", "ominouswind", "energyball"]);
		legendsMoves("clefable", ["babydolleyes", "doubleedge", "fairywind", "tackle"]);
		legendsMoves("clefairy", ["babydolleyes", "doubleedge", "fairywind", "tackle"]);
		legendsMoves("cleffa", ["babydolleyes", "calmmind", "doubleedge", "fairywind", "moonblast", "tackle"]);
		legendsMoves("cranidos", ["bite", "tackle"]);
		legendsMoves("cresselia", ["lunarblessing", "powershift", "recover", "tackle"]);
		legendsMoves("croagunk", ["closecombat", "earthpower"]);
		legendsMoves("cyndaquil", ["irontail"]);
		legendsMoves("darkrai", ["hex", "shadowsneak"]);
		legendsMoves("dartrix", ["aerialace", "airslash", "gust", "magicalleaf", "leafstorm", "psychocut"]);
		legendsMoves("dewott", ["slash"]);
		legendsMoves("drifblim", ["confusion", "extrasensory", "mysticalfire", "powershift"]);
		legendsMoves("drifloon", ["confusion", "extrasensory", "mysticalfire"]);
		legendsMoves("dusclops", ["absorb", "leechlife", "powershift"]);
		legendsMoves("dusknoir", ["absorb", "leechlife", "powershift"]);
		legendsMoves("duskull", ["absorb", "leechlife"]);
		legendsMoves("dustox", ["extrasensory"]);
		legendsMoves("eevee", ["calmmind", "mimic"]);
		legendsMoves("electabuzz", ["spark"]);
		legendsMoves("electivire", ["spark"]);
		legendsMoves("elekid", ["spark"]);
		legendsMoves("empoleon", ["doubleedge", "roost", "steelbeam", "wavecrash"]);
		legendsMoves("espeon", ["mimic", "rocksmash"]);
		legendsMoves("finneon", ["babydolleyes", "bubble", "airslash", "roost", "hydropump"]);
		legendsMoves("flareon", ["calmmind", "powershift", "mimic"]);
		legendsMoves("gallade", ["focusenergy", "icebeam"]);
		legendsMoves("gardevoir", ["aurasphere", "recover", "icebeam"]);
		legendsMoves("gastly", ["poisongas"]);
		legendsMoves("gastrodon", ["tackle"]);
		legendsMoves("gastrodoneast", ["tackle"]);
		legendsMoves("gengar", ["poisongas", "powershift"]);
		legendsMoves("glaceon", ["calmmind", "mimic", "powdersnow"]);
		legendsMoves("glalie", ["iceball"]);
		legendsMoves("glameow", ["doubleedge", "nastyplot", "nightslash", "tackle"]);
		legendsMoves("gligar", ["mudbomb"]);
		legendsMoves("gliscor", ["pinmissile", "spikes", "powershift"]);
		legendsMoves("golbat", ["crosspoison"]);
		legendsMoves("golduck", ["bubble", "triattack"]);
		legendsMoves("goomy", ["acidspray", "hydropump", "shelter"]);
		legendsMoves("grotle", ["bulldoze", "leafblade", "sleeppowder"]);
		legendsMoves("gyarados", ["focusenergy"]);
		legendsMoves("happiny", ["babydolleyes", "calmmind", "doubleedge", "drainingkiss", "fairywind", "softboiled", "tackle"]);
		legendsMoves("haunter", ["poisongas"]);
		legendsMoves("heatran", ["ember"]);
		legendsMoves("heracross", ["slash", "calmmind", "outrage"]);
		legendsMoves("hippopotas", ["mudbomb"]);
		legendsMoves("hippowdon", ["mudbomb"]);
		legendsMoves("honchkrow", ["airslash"]);
		legendsMoves("infernape", ["doubleedge", "drainpunch", "ragingfury"]);
		legendsMoves("jolteon", ["calmmind", "mimic"]);
		legendsMoves("kadabra", ["hypnosis"]);
		legendsMoves("kirlia", ["icebeam"]);
		legendsMoves("kricketot", ["absorb", "tackle"]);
		legendsMoves("kricketune", ["tackle"]);
		legendsMoves("landorus", ["bite", "crunch", "sandsearstorm", "tackle", "twister"]);
		legendsMoves("leafeon", ["calmmind", "leafage", "mimic"]);
		legendsMoves("lickilicky", ["doubleedge", "tackle", "iceball"]);
		legendsMoves("lickitung", ["doubleedge", "tackle", "iceball"]);
		legendsMoves("lopunny", ["doubleedge", "drainingkiss", "machpunch"]);
		legendsMoves("lucario", ["machpunch"]);
		legendsMoves("lumineon", ["aerialace", "bubble", "airslash", "roost", "hydropump"]);
		legendsMoves("machamp", ["doublehit", "drainpunch", "machpunch", "tackle"]);
		legendsMoves("machoke", ["doublehit", "machpunch", "tackle"]);
		legendsMoves("machop", ["doublehit", "machpunch", "tackle"]);
		legendsMoves("magby", ["poisongas", "tackle"]);
		legendsMoves("magmar", ["poisongas", "tackle"]);
		legendsMoves("magmortar", ["poisongas", "tackle"]);
		legendsMoves("mamoswine", ["babydolleyes"]);
		legendsMoves("manaphy", ["bubble", "confusion", "hydropump", "moonblast", "takeheart", "zenheadbutt", "calmmind"]);
		legendsMoves("mantine", ["doubleedge", "powershift"]);
		legendsMoves("mantyke", ["doubleedge", "roost"]);
		legendsMoves("mesprit", ["doublehit", "mysticalpower", "recover"]);
		legendsMoves("mimejr", ["irondefense", "zenheadbutt"]);
		legendsMoves("misdreavus", ["extrasensory", "hypnosis"]);
		legendsMoves("mismagius", ["extrasensory", "hypnosis"]);
		legendsMoves("monferno", ["doubleedge"]);
		legendsMoves("mrmime", ["powershift"]);
		legendsMoves("munchlax", ["gigaimpact", "highhorsepower", "iceball"]);
		legendsMoves("murkrow", ["airslash", "nightslash"]);
		legendsMoves("ninetales", ["flamewheel", "nastyplot"]);
		legendsMoves("ninetalesalola", ["icefang"]);
		legendsMoves("nosepass", ["flashcannon", "powershift"]);
		legendsMoves("onix", ["powershift"]);
		legendsMoves("oshawott", ["slash"]);
		legendsMoves("pachirisu", ["crunch", "thundershock", "playrough"]);
		legendsMoves("paras", ["energyball"]);
		legendsMoves("petilil", ["leafage", "poisonpowder", "recover", "babydolleyes"]);
		legendsMoves("phione", ["bubble", "confusion", "hydropump", "moonblast", "takeheart", "zenheadbutt", "calmmind"]);
		legendsMoves("pichu", ["babydolleyes", "quickattack", "spark"]);
		legendsMoves("pikachu", ["babydolleyes", "calmmind"]);
		legendsMoves("piloswine", ["babydolleyes"]);
		legendsMoves("piplup", ["doubleedge", "liquidation", "roost", "tackle"]);
		legendsMoves("ponyta", ["doublehit"]);
		legendsMoves("porygon", ["spark"]);
		legendsMoves("porygon2", ["spark"]);
		legendsMoves("porygonz", ["powershift", "spark"]);
		legendsMoves("prinplup", ["doubleedge", "liquidation", "roost"]);
		legendsMoves("probopass", ["steelbeam", "powershift"]);
		legendsMoves("psyduck", ["bubble", "triattack"]);
		legendsMoves("purugly", ["doubleedge", "nastyplot", "nightslash", "tackle"]);
		legendsMoves("quilava", ["irontail"]);
		legendsMoves("raichu", ["babydolleyes", "calmmind"]);
		legendsMoves("ralts", ["icebeam"]);
		legendsMoves("rampardos", ["powershift", "bite"]);
		legendsMoves("rapidash", ["doublehit"]);
		legendsMoves("regigigas", ["ancientpower", "powershift", "tackle"]);
		legendsMoves("remoraid", ["bubble"]);
		legendsMoves("rhydon", ["doubleedge"]);
		legendsMoves("rhyhorn", ["doubleedge", "gigaimpact"]);
		legendsMoves("rhyperior", ["doubleedge"]);
		legendsMoves("riolu", ["aurasphere", "closecombat", "focusenergy"]);
		legendsMoves("roselia", ["poisonpowder"]);
		legendsMoves("roserade", ["poisonpowder"]);
		legendsMoves("rowlet", ["aerialace", "airslash", "gust", "magicalleaf", "leafstorm", "psychocut"]);
		legendsMoves("rufflet", ["doubleedge", "quickattack", "twister", "ominouswind"]);
		legendsMoves("scizor", ["closecombat", "calmmind"]);
		legendsMoves("scyther", ["closecombat", "calmmind"]);
		legendsMoves("sealeo", ["liquidation", "babydolleyes"]);
		legendsMoves("shaymin", ["leafage", "recover", "sleeppowder", "aerialace", "babydolleyes", "playrough"]);
		legendsMoves("shellos", ["tackle"]);
		legendsMoves("shieldon", ["steelbeam", "tackle"]);
		legendsMoves("snorlax", ["iceball"]);
		legendsMoves("snover", ["iciclecrash"]);
		legendsMoves("spheal", ["liquidation", "babydolleyes"]);
		legendsMoves("spiritomb", ["extrasensory"]);
		legendsMoves("stantler", ["confusion", "psyshieldbash"]);
		legendsMoves("staraptor", ["airslash", "gust", "focusenergy"]);
		legendsMoves("staravia", ["airslash", "gigaimpact", "gust"]);
		legendsMoves("starly", ["airslash", "gigaimpact", "gust"]);
		legendsMoves("steelix", ["iceball", "powershift"]);
		legendsMoves("stunky", ["doubleedge", "poisonjab", "tackle"]);
		legendsMoves("sudowoodo", ["tackle"]);
		legendsMoves("swinub", ["highhorsepower", "babydolleyes"]);
		legendsMoves("sylveon", ["magicalleaf", "mimic", "rocksmash"]);
		legendsMoves("tangela", ["acidspray", "doublehit"]);
		legendsMoves("tangrowth", ["acidspray", "doublehit"]);
		legendsMoves("teddiursa", ["highhorsepower", "focusenergy", "tackle"]);
		legendsMoves("tentacool", ["acidarmor"]);
		legendsMoves("thundurus", ["powershift", "spark", "tackle", "twister", "wildboltstorm"]);
		legendsMoves("togekiss", ["babydolleyes", "calmmind", "moonblast", "tackle"]);
		legendsMoves("togepi", ["babydolleyes", "calmmind", "fairywind", "moonblast", "tackle"]);
		legendsMoves("togetic", ["airslash", "babydolleyes", "calmmind", "moonblast", "tackle"]);
		legendsMoves("tornadus", ["bleakwindstorm", "tackle", "twister"]);
		legendsMoves("torterra", ["leafblade", "headlongrush", "sleeppowder"]);
		legendsMoves("toxicroak", ["closecombat", "earthpower"]);
		legendsMoves("turtwig", ["bulldoze", "leafblade", "sleeppowder"]);
		legendsMoves("umbreon", ["calmmind", "mimic", "powershift", "rocksmash"]);
		legendsMoves("ursaring", ["highhorsepower", "focusenergy"]);
		legendsMoves("uxie", ["doublehit", "hypnosis", "mysticalpower", "powershift"]);
		legendsMoves("vaporeon", ["bubble", "calmmind", "mimic"]);
		legendsMoves("vespiquen", ["powershift", "recover"]);
		legendsMoves("vulpix", ["flamewheel", "nastyplot"]);
		legendsMoves("vulpixalola", ["dazzlinggleam", "energyball", "icefang", "nastyplot", "quickattack"]);
		legendsMoves("walrein", ["babydolleyes"]);
		legendsMoves("whiscash", ["aerialace"]);
		legendsMoves("wormadam", ["gust", "silverwind", "magicalleaf"]);
		legendsMoves("wormadamsandy", ["gust", "silverwind"]);
		legendsMoves("wormadamtrash", ["gust", "silverwind", "steelbeam"]);
		legendsMoves("yanma", ["gust"]);
		legendsMoves("yanmega", ["crunch"]);
		legendsMoves("zubat", ["crosspoison"]);

		let printno = 0;
		for (const typeid in this.dataCache.TypeChart) { // doing types first; can come back for Egg groups later
			const type = this.dataCache.TypeChart[typeid];
			type.entireMovepool = {
				gen1or2: {},
				gen3: {},
				gen4: {},
				gen5: {},
				gen6: {},
				gen7: {},
				lgpe: {},
				gen8: {},
				gen9: {},
			};
			type.universal = {
				gen1or2: {},
				gen3: {},
				gen4: {},
				gen5: {},
				gen6: {},
				gen7: {},
				lgpe: {},
				gen8: {},
				gen9: {},
			};
			for (const moveid in this.dataCache.Moves) {
				for (const gen in type.entireMovepool) {
					type.entireMovepool[gen][moveid] = 0;
				}
			}
			for (const id in this.dataCache.Pokedex) {
				const poke = this.dataCache.Pokedex[id];
				if (!poke || poke.evos) continue;
				// skip NFEs... and anything that can't be read correctly, just in case
				let hasType = false;
				if (poke.types[0] && poke.types[0] === id) hasType = true;
				if (poke.types[1] && poke.types[1] === id) hasType = true;
				if (!hasType) continue;
				if (this.dataCache.Learnsets[id] && this.dataCache.Learnsets[id].learnset) {

					// start with the vanilla learnset
					const learnset = this.modData('Learnsets', this.toID(id)).learnset;
					let learnset2 = null;
					let learnset3 = null;
					let learnset4 = null; // for Rotom and stuff
					// if the Pokémon has pre-evolutions, add their learnsets, too!
					if (poke.prevo) {
						const poke2 = this.dataCache.Pokedex[this.toID(poke.prevo)];
						learnset2 = this.modData('Learnsets', this.toID(poke.prevo)).learnset;
						if (poke2.prevo) {
							learnset3 = this.modData('Learnsets', this.toID(poke2.prevo)).learnset;
						}
					}
					if (poke.changesFrom) {
						const poke4 = this.dataCache.Pokedex[this.toID(poke.changesFrom)];
						learnset4 = this.modData('Learnsets', this.toID(poke.changesFrom)).learnset;
					}

					// okay, now we have a pretty complete set of learnset data... so let's account for all of the moves the Pokémon knows
					for (const moveLearned in this.dataCache.Moves) {
						let gen1or2 = false;
						let gen3 = false;
						let gen4 = false;
						let gen5 = false;
						let gen6 = false;
						let gen7 = false;
						let gen8 = false;
						let lgpe = false;
						let gen9 = false;
						if (learnset[moveLearned]) {
							for (const source of learnset[moveid]) {
								if (parseInt(source.charAt(0)) === 3) gen3 = true;
								if (parseInt(source.charAt(0)) === 4) gen4 = true;
								if (parseInt(source.charAt(0)) === 5) gen5 = true;
								if (parseInt(source.charAt(0)) === 6) gen6 = true;
								if (parseInt(source.charAt(0)) === 7 && source.charAt(1) !== 'V') gen7 = true;
								if (parseInt(source.charAt(0)) === 7 && source.charAt(1) === 'V') gen1or2 = true;
								if (parseInt(source.charAt(0)) === 8 && source.charAt(1) !== 'V') gen8 = true;
								if (parseInt(source.charAt(0)) === 8 && source.charAt(1) === 'V') lgpe = true;
								if (parseInt(source.charAt(0)) === 9) gen9 = true;
							}
							for (const source of learnset2[moveid]) {
								if (parseInt(source.charAt(0)) === 3) gen3 = true;
								if (parseInt(source.charAt(0)) === 4) gen4 = true;
								if (parseInt(source.charAt(0)) === 5) gen5 = true;
								if (parseInt(source.charAt(0)) === 6) gen6 = true;
								if (parseInt(source.charAt(0)) === 7 && source.charAt(1) !== 'V') gen7 = true;
								if (parseInt(source.charAt(0)) === 7 && source.charAt(1) === 'V') gen1or2 = true;
								if (parseInt(source.charAt(0)) === 8 && source.charAt(1) !== 'V') gen8 = true;
								if (parseInt(source.charAt(0)) === 8 && source.charAt(1) === 'V') lgpe = true;
								if (parseInt(source.charAt(0)) === 9) gen9 = true;
							}
							for (const source of learnset3[moveid]) {
								if (parseInt(source.charAt(0)) === 3) gen3 = true;
								if (parseInt(source.charAt(0)) === 4) gen4 = true;
								if (parseInt(source.charAt(0)) === 5) gen5 = true;
								if (parseInt(source.charAt(0)) === 6) gen6 = true;
								if (parseInt(source.charAt(0)) === 7 && source.charAt(1) !== 'V') gen7 = true;
								if (parseInt(source.charAt(0)) === 7 && source.charAt(1) === 'V') gen1or2 = true;
								if (parseInt(source.charAt(0)) === 8 && source.charAt(1) !== 'V') gen8 = true;
								if (parseInt(source.charAt(0)) === 8 && source.charAt(1) === 'V') lgpe = true;
								if (parseInt(source.charAt(0)) === 9) gen9 = true;
							}
							for (const source of learnset4[moveid]) {
								if (parseInt(source.charAt(0)) === 7 && source.charAt(1) === 'V') gen1or2 = true;
								if (parseInt(source.charAt(0)) === 3) gen3 = true;
								if (parseInt(source.charAt(0)) === 4) gen4 = true;
								if (parseInt(source.charAt(0)) === 5) gen5 = true;
								if (parseInt(source.charAt(0)) === 6) gen6 = true;
								if (parseInt(source.charAt(0)) === 7 && source.charAt(1) !== 'V') gen7 = true;
								if (parseInt(source.charAt(0)) === 8 && source.charAt(1) === 'V') lgpe = true;
								if (parseInt(source.charAt(0)) === 8 && source.charAt(1) !== 'V') gen8 = true;
								if (parseInt(source.charAt(0)) === 9) gen9 = true;
							}
						}
						if (gen1or2) type.entireMovepool.gen1or2[moveid]++;
						if (gen3) type.entireMovepool.gen3[moveid]++;
						if (gen4) type.entireMovepool.gen4[moveid]++;
						if (gen5) type.entireMovepool.gen5[moveid]++;
						if (gen6) type.entireMovepool.gen6[moveid]++;
						if (gen7) type.entireMovepool.gen7[moveid]++;
						if (lgpe) type.entireMovepool.lgpe[moveid]++;
						if (gen8) type.entireMovepool.gen8[moveid]++;
						if (gen9) type.entireMovepool.gen9[moveid]++;
					}
				}
			}
			// now here I'm going to divide how many Pokémon learn each move by how many learn Protect and see if it's at least ~85%?
			for (const moveid in this.dataCache.Moves) {
				const move = this.dataCache.Moves[moveid];
				for (const gen in type.entireMovepool) {
					const minimum = 17 * (type.entireMovepool[gen].protect / 20) - 1;
					if (type.entireMovepool[gen][moveid] > minimum) type.universal[gen].push(move.name);
				}
			}
			let sheetOutput: string[] = [
				type + `~` + type.universal.gen1or2 + `~` + type.universal.gen3 + `~` + type.universal.gen4 + `~` + type.universal.gen5 + `~` + type.universal.gen6 + `~` + type.universal.gen7 + `~` + type.universal.lgpe + `~` + type.universal.gen8 + `~` + type.universal.gen9
			];
			type.sheetOutput = sheetOutput;
		}
	},
};
