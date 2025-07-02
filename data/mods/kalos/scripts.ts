export const Scripts: ModdedBattleScriptsData = {
	init() {
		const postgameTms = [
			'roar', 'lightscreen', 'smackdown', 'sludgewave', 'overheat', 'steelwing', 'skydrop', 'incinerate', 'quash', 'explosion', 'retaliate', 'voltswitch', 'dreameater',
			'flashcannon', 'wildcharge',
			// 'round', 'gigaimpact', 'swagger',
		];

		const movepoolSections = {
			SpeedControl: [
				'tailwind', 'trickroom', 'stickyweb', 'bulldoze', 'cottonspore', 'stringshot', 'electroweb', 'icywind', 'thunderwave', 'nuzzle', 'lowsweep', 'mudshot', 'rocktomb',
				'scaryface',
			],
			Priority: [
				'extremespeed', 'fakeout', 'feint', 'aquajet', 'bulletpunch', 'iceshard', 'machpunch', 'quickattack', 'shadowsneak', 'suckerpunch', 'vacuumwave', 'watershuriken',
			],
			PriorityPrankster: [
				'assist', 'copycat', 'mefirst', 'metronome', 'mirrormove', 'naturepower',
			],
			Spread: [
				'acid', 'aircutter', 'blizzard', 'bubble', 'dazzlinggleam', 'disarmingvoice', 'electroweb', 'eruption', 'heatwave', 'hypervoice', 'icywind', 'incinerate', 'muddywater',
				'powdersnow', 'razorleaf', 'razorwind', 'rockslide', 'snarl', 'strugglebug', 'swift', 'twister', 'waterspout', 'boomburst', 'bulldoze', 'discharge', 'earthquake',
				'explosion', 'lavaplume', 'magnitude', 'paraboliccharge', 'petalblizzard', 'selfdestruct', 'sludgewave', 'surf', 'synchronoise',
			],
			FieldEffect: [
				'raindance', 'sunnyday', 'sandstorm', 'hail', 'electricterrain', 'grassyterrain', 'trickroom', 'gravity', 'perishsong', 'spikes', 'stealthrock', 'toxicspikes', 'stickyweb',
				'poisongas',
			],
			DamageMitigation: [
				'reflect', 'lightscreen', 'quickguard', 'wideguard', 'matblock', 'fakeout', 'followme', 'ragepowder', 'captivate', 'growl', 'snarl', 'strugglebug', 'babydolleyes', 'charm',
				'eerieimpulse', 'featherdance', 'kingsshield', 'memento', 'nobleroar', 'partingshot', 'tickle', 'mysticalfire', 'willowisp', 'watersport', 'mudsport', 'grasswhistle',
				'hypnosis', 'lovelykiss', 'sing', 'sleeppowder', 'spore', 'yawn',
			],
			Other: [
				'taunt', 'torment', 'encore', 'disable', 'skydrop', 'destinybond', 'counter', 'mirrorcoat', 'endeavor', 'metalburst', 'superfang', 'leer', 'screech', 'faketears',
				'acidspray', 'metalsound', 'allyswitch', 'healpulse', 'helpinghand', 'skillswap', 'entrainment', 'simplebeam', 'soak', 'uturn', 'voltswitch', 'batonpass', 'partingshot',
				'acupressure', 'dragondance', 'flamecharge', 'quiverdance', 'shellsmash', 'shiftgear', 'swordsdance', 'bellydrum', 'poweruppunch', 'chargebeam', 'fierydance', 'growth',
				'nastyplot', 'tailglow', 'rototiller', 'flowershield', 'magneticflux',
			],
		};

		let printno = 0;
		for (const id in this.dataCache.Pokedex) {
			const poke = this.dataCache.Pokedex[id];
			if (!poke) continue;

			if (this.dataCache.Learnsets[id] && this.dataCache.Learnsets[id].learnset) {
				printno++;
				poke.learnsetCumulative = {};
				// start with the vanilla learnset
				const learnset = this.modData('Learnsets', this.toID(id)).learnset;
				for (const moveid in this.dataCache.Moves) {
					// identify the Gen of the move
					const move = this.dataCache.Moves[moveid];
					if (!move) {
						console.log(moveid);
						continue;
					}

					// a simplified version of the Pulse learnset sheet:
					// only decide a) if the Pokémon learns the move at all and b) if it's a safe bet it still gets it in Ondas or not
					// "fringe moves" and transfer-only moves and future buffs are all lumped into one category unless they're TMs or tutors here
					let learned = false;
					let learnedLvUp = false;
					let learnedTm = false;
					let learnedOras = false;
					if (learnset[moveid]) { // if it learns the move
						for (const source of learnset[moveid]) {
							if (parseInt(source.charAt(0)) === 6) {
								learned = true;
								if (source.charAt(1) === 'L') learnedLvUp = true;
								if (source.charAt(1) === 'M' && !postgameTms.includes(moveid)) learnedTm = true;
								if (source.charAt(1) === 'E' || source.charAt(1) === 'T') learnedOras = true;
							}
						}
					}
					if (learned && !learnedLvUp && !learnedTm && learnedOras) learnedLvUp = true; // add tutors and Egg moves to level-up, but not event moves
					if (learned) {
						// okay, so we know the move! now we need to figure out where it goes
						for (const section in movepoolSections) {
							if (movepoolSections[section].includes(moveid)) {
								poke.learnsetCumulative[section].Moves.push(title);
							}
						}
					}
				}

				// abilities
				if (!poke || !poke.num || !poke.abilities || !poke.types || !poke.baseStats) return;
				let abilities = ``;
				if (poke.abilities[0]) abilities += `${this.dataCache.Abilities[this.toID(poke.abilities[0])].name}`;
				if (poke.abilities[1]) abilities += ` / ${this.dataCache.Abilities[this.toID(poke.abilities[1])].name}`;
				if (poke.abilities['H']) abilities += ` // ${this.dataCache.Abilities[this.toID(poke.abilities['H'])].name}`;
				if (poke.abilities['S']) abilities += ` // (${this.dataCache.Abilities[this.toID(poke.abilities['S'])].name})`;
				// icon name
				var iconid = id;
				// var iconid = iconname.replace(" ", `-`).replace(`.`, ``).replace(`:`, ``).replace(`\u2019`, ``); // to get rid of spaces and periods

				// finalize sheetOutput now.........
				let sheetOutput: string[] = [
					(printno) + `~3~=IMAGE("https://www.smogon.com/forums//media/minisprites/` + iconid + `.png",3)~` + poke.name + "~" + poke.types[0] + "~" + (poke.types[1] ? poke.types[1] : "") + "~" + abilities + "~" + poke.baseStats.hp + "~" + poke.baseStats.atk + "~" + poke.baseStats.def + "~" + poke.baseStats.spa + "~" + poke.baseStats.spd + "~" + poke.baseStats.spe + "~"
				];
				for (const section in movepoolSections) {
					if (
						poke.learnsetCumulative[section].Moves.length
					) {
						sheetOutput += "~" + poke.learnsetCumulative[section].Moves.sort();
					} else {
						sheetOutput += "~"; // just a blank cell
					}
				}
				poke.sheetOutput = sheetOutput;
			}
		}
	},
};
