export const Scripts: ModdedBattleScriptsData = {
	init() {
		const kalosDex = [
			"Raichu", "Nidoqueen", "Nidoking", "Vileplume",
		];
		const postgameTms = [
			'roar', 'lightscreen', 'smackdown', 'sludgewave', 'round', 'overheat', 'steelwing', 'skydrop', 'incinerate', 'quash', 'explosion', 'retaliate', 'gigaimpact', 'voltswitch',
			'dreameater', 'swagger', 'flashcannon', 'wildcharge',
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
			if ((kalosDex.includes(poke.name) || kalosDex.includes(poke.baseSpecies) || kalosDex.includes(poke.baseForme)) && !poke.kind) poke.kind = "Kalos";
			// RESUME FROM HERE

			if (this.dataCache.Learnsets[id] && this.dataCache.Learnsets[id].learnset) {
				printno++;
				poke.learnsetCumulative = {};
				for (const moveType in this.dataCache.TypeChart) {
					poke.learnsetCumulative[moveType] = {
						Physical: {
							tmTutor: [],
							addTrend: [],
							natural: [],
							fringe: [],
							addOther: [],
							neverCouldHave: [],
						},
						Special: {
							tmTutor: [],
							addTrend: [],
							natural: [],
							fringe: [],
							addOther: [],
							neverCouldHave: [],
						},
					};
				}
				for (const section in movepoolSections) {
					poke.learnsetCumulative[section] = {
						Moves: {
							tmTutor: [],
							addTrend: [],
							natural: [],
							fringe: [],
							addOther: [],
							neverCouldHave: [],
						},
					};
				}
				poke.learnsetCumulative.Tutor = {
					etesalta: [],
					manistral: [],
					valledar: [],
					coriallos: [],
					sinnohTutor: [],
				};
				poke.learnsetCumulative.Level = {
					sub20: [],
					sub20tutor: [],
					sub40: [],
					sub40tutor: [],
					sub60: [],
					sub60tutor: [],
					sub80: [],
					sub80tutor: [],
					sub100: [],
					sub100tutor: [],
					leftover: [],
					leftovertutor: [],
				};

				// identify the Pokémon's Gen of origin before going any further - it's useful!
				let pokeGen = 1;
				if (poke.num > 898 || id.endsWith('hisui') || id.endsWith('paldea') || id.endsWith('paldeafire') || id.endsWith('paldeawater')) pokeGen = 9;
				else if (poke.num > 809 || id.endsWith('galar')) pokeGen = 8;
				else if (poke.num > 721 || id.endsWith('alola')) pokeGen = 7;
				else if (poke.num > 649 || id.endsWith('mega') || id.endsWith('megax') || id.endsWith('megay') || id.endsWith('primal')) pokeGen = 6;
				else if (poke.num > 493) pokeGen = 5;
				else if (poke.num > 386) pokeGen = 4;
				else if (poke.num > 251) pokeGen = 3;
				else if (poke.num > 151) pokeGen = 2;
				if (poke.gen) pokeGen = poke.gen; // other forms from later Gens

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

				// now we're going to decide what moves are competitive on the Pokémon, so we need to know its type matchups
				// this is kinda convoluted and stretchy... it's probably not important askdjhf
				const wallTypes: string[] = []; // what types are hit worse than neutrally by both of the Pokémon's STABs?
				for (const type in this.dataCache.TypeChart) {
					if (
						this.dataCache.TypeChart[type]?.damageTaken[poke.types[0]] > 1 && (!poke.types[1] || this.dataCache.TypeChart[type]?.damageTaken[poke.types[1]] > 1)
					) wallTypes.push(type);
				}
				const weaknessTypes: string[] = []; // what types hit the Pokémon super effectively?
				for (const type in this.dataCache.TypeChart) {
					if (
						this.dataCache.TypeChart[poke.types[0]]?.damageTaken[type] > 1 || (poke.types[1] && this.dataCache.TypeChart[poke.types[1]]?.damageTaken[type] > 1)
					) continue;
					if (this.dataCache.TypeChart[poke.types[0]]?.damageTaken[type] === 1) weaknessTypes.push(type);
					else if (poke.types[1] && this.dataCache.TypeChart[poke.types[1]]?.damageTaken[type] === 1) weaknessTypes.push(type);
				}
				const typeAdvantages: string[] = []; // what types are hit super effectively by either one of the Pokémon's STABs?
				for (const type in this.dataCache.TypeChart) {
					if (
						this.dataCache.TypeChart[type]?.damageTaken[poke.types[0]] === 1 ||
						(poke.types[1] && this.dataCache.TypeChart[type]?.damageTaken[poke.types[1]] === 1)
					) typeAdvantages.push(type);
				}

				// and we're going to use those type matchups to decide how the Pokémon values different coverage types (other than its STABs)
				const offenseCoverage: string[] = []; // what types hit at least one entry in wallTypes super effectively?
				for (const type in this.dataCache.TypeChart) { // for every attacking type...
					for (const wall in this.dataCache.TypeChart) { // check each of the types that wall the Pokémon's STABs,
						if (!wallTypes.includes(wall)) continue;
						if (this.dataCache.TypeChart[wall]?.damageTaken[type] === 1 && !offenseCoverage.includes(type)) { // and see if the attacking type is effective against that type!
							offenseCoverage.push(type); // if even one of them works, it's "offensive coverage"
						}
					}
				}
				const weaknessCoverage: string[] = []; // of the remaining, what types hit at least one entry in weaknessTypes super effectively?
				for (const type in this.dataCache.TypeChart) { // for every attacking type...
					for (const weak in this.dataCache.TypeChart) { // check each of the types the Pokémon is weak to,
						if (!weaknessTypes.includes(weak) || typeAdvantages.includes(weak)) continue; // except the ones the Pokémon already beats by STAB,
						if (this.dataCache.TypeChart[weak]?.damageTaken[type] === 1 && !weaknessCoverage.includes(type)) { // and see if the attacking type is effective against that type!
							weaknessCoverage.push(type); // if even one of them works, it's "weakness coverage"
						}
					}
				}
				const otherCoverage: string[] = []; // of the remaining, what types hit at least one entry NOT in typeAdvantages super effectively?
				for (const type in this.dataCache.TypeChart) { // for every attacking type...
					if (poke.types.includes(type) || offenseCoverage.includes(type) || weaknessCoverage.includes(type)) continue; // as long as it's not on another list
					for (const check in this.dataCache.TypeChart) { // check every other type...
						if (typeAdvantages.includes(check)) continue; // unless, of course, the Pokémon already beats it!
						if (this.dataCache.TypeChart[check]?.damageTaken[type] === 1 && !otherCoverage.includes(type)) { // and see if the attacking type is effective against that type
							otherCoverage.push(type); // if it is, it's at least kind of usable coverage, I guess?
						}
					}
				}
				// any type not in one of these categories will be ignored as coverage!
				const typeOrder = {}; // this will help categorize the types of moves that the Pokémon has
				let typeNum = 0;
				if (poke.types[0]) {
					typeOrder[typeNum] = poke.types[0];
					typeNum += 1;
				}
				if (poke.types[1]) {
					typeOrder[typeNum] = poke.types[1];
					typeNum += 1;
				}
				for (const type in this.dataCache.TypeChart) {
					if (offenseCoverage.includes(type)) typeOrder[typeNum] = type;
					typeNum += 1;
				}
				for (const type in this.dataCache.TypeChart) {
					if (weaknessCoverage.includes(type) && !offenseCoverage.includes(type)) typeOrder[typeNum] = type;
					typeNum += 1;
				}
				for (const type in this.dataCache.TypeChart) {
					if (otherCoverage.includes(type)) typeOrder[typeNum] = type;
					typeNum += 1;
				}
				for (const type in this.dataCache.TypeChart) {
					if (
						(poke.types[0] && type === poke.types[0]) || (poke.types[1] && type === poke.types[1]) || offenseCoverage.includes(type) ||
						weaknessCoverage.includes(type) || otherCoverage.includes(type)
					) continue;
					typeOrder[typeNum] = type;
					typeNum += 1;
				}

				for (const moveid in this.dataCache.Moves) {
					// identify the Gen of the move
					const move = this.dataCache.Moves[moveid];
					if (!move) {
						console.log(moveid);
						continue;
					}

					let moveGen = 1;
					if (move.num > 826) moveGen = 9;
					else if (move.num > 742) moveGen = 8;
					else if (move.num > 621) moveGen = 7;
					else if (move.num > 559) moveGen = 6;
					else if (move.num > 467) moveGen = 5;
					else if (move.num > 354) moveGen = 4;
					else if (move.num > 251) moveGen = 3;
					else if (move.num > 165) moveGen = 2;

					// a simplified version of the Pulse learnset sheet:
					// only decide a) if the Pokémon learns the move at all and b) if it's a safe bet it still gets it in Ondas or not
					// "fringe moves" and transfer-only moves and future buffs are all lumped into one category unless they're TMs or tutors here
					let learned = false;
					let learnedNatural = false;
					let learnedTmTutor = ondasTms.includes(moveid) || (ondasTutors.includes(moveid) && !sinnohOnly.includes(moveid));
					let authentic = false;
					const moveGenSources: string[] = [];

					if (learnset[moveid]) { // if it learns the move itself
						for (const source of learnset[moveid]) {
							learned = true;
							if (
								(parseInt(source.charAt(0)) === pokeGen && pokeGen > 3) ||
								(parseInt(source.charAt(0)) === moveGen && moveGen > 3) ||
								parseInt(source.charAt(0)) === 4
							) authentic = true;

							if (source === '7V') moveGenSources.push("VC");
							else if (source === '8V') moveGenSources.push("LGPE");
							else if (source === '4V') moveGenSources.push("BDSP");
							else if (source === '9V') moveGenSources.push("Legends");
							else if (source.charAt(0) === '9') moveGenSources.push("Gen 9");
							else if (source.charAt(0) === '8') moveGenSources.push("Gen 8");
							else if (source.charAt(0) === '7') moveGenSources.push("Gen 7");
							else if (source.charAt(0) === '6') moveGenSources.push("Gen 6");
							else if (source.charAt(0) === '5') moveGenSources.push("Gen 5");
							else if (source.charAt(0) === '3') moveGenSources.push("Gen 3");
							// moveGenSources *should* end up as a complete list of all Gens that the Pokémon learns the move
							// excludes 4 on purpose, and 1 and 2 are just "VC"
							
							if (source.charAt(1) === 'L' || source.charAt(1) === 'E') learnedNatural = true;
						}
					}
					if (learnset2 && learnset2[moveid]) { // if it has a pre-evolution and its pre-evolution learns the move
						for (const source of learnset2[moveid]) {
							learned = true;
							if (
								(parseInt(source.charAt(0)) === pokeGen && pokeGen > 3) ||
								(parseInt(source.charAt(0)) === moveGen && moveGen > 3) ||
								parseInt(source.charAt(0)) === 4
							) authentic = true;

							if (source === '7V') moveGenSources.push("VC");
							else if (source === '8V') moveGenSources.push("LGPE");
							else if (source === '4V') moveGenSources.push("BDSP");
							else if (source === '9V') moveGenSources.push("Legends");
							else if (source.charAt(0) === '9') moveGenSources.push("Gen 9");
							else if (source.charAt(0) === '8') moveGenSources.push("Gen 8");
							else if (source.charAt(0) === '7') moveGenSources.push("Gen 7");
							else if (source.charAt(0) === '6') moveGenSources.push("Gen 6");
							else if (source.charAt(0) === '5') moveGenSources.push("Gen 5");
							else if (source.charAt(0) === '3') moveGenSources.push("Gen 3");
							// moveGenSources *should* end up as a complete list of all Gens that the Pokémon learns the move
							// excludes 4 on purpose, and 1 and 2 are just "VC"

							if (source.charAt(1) === 'L' || source.charAt(1) === 'E') learnedNatural = true;
						}
					}
					if (learnset3 && learnset3[moveid]) { // if it's the third stage and its basic stage learns the move
						for (const source of learnset3[moveid]) {
							learned = true;
							if (
								(parseInt(source.charAt(0)) === pokeGen && pokeGen > 3) ||
								(parseInt(source.charAt(0)) === moveGen && moveGen > 3) ||
								parseInt(source.charAt(0)) === 4
							) authentic = true;

							if (source === '7V') moveGenSources.push("VC");
							else if (source === '8V') moveGenSources.push("LGPE");
							else if (source === '4V') moveGenSources.push("BDSP");
							else if (source === '9V') moveGenSources.push("Legends");
							else if (source.charAt(0) === '9') moveGenSources.push("Gen 9");
							else if (source.charAt(0) === '8') moveGenSources.push("Gen 8");
							else if (source.charAt(0) === '7') moveGenSources.push("Gen 7");
							else if (source.charAt(0) === '6') moveGenSources.push("Gen 6");
							else if (source.charAt(0) === '5') moveGenSources.push("Gen 5");
							else if (source.charAt(0) === '3') moveGenSources.push("Gen 3");
							// moveGenSources *should* end up as a complete list of all Gens that the Pokémon learns the move
							// excludes 4 on purpose, and 1 and 2 are just "VC"

							if (source.charAt(1) === 'L' || source.charAt(1) === 'E') learnedNatural = true;
						}
					}
					if (learnset4 && learnset4[moveid]) { // for stuff like Rotom
						for (const source of learnset4[moveid]) {
							learned = true;
							if (
								(parseInt(source.charAt(0)) === pokeGen && pokeGen > 3) ||
								(parseInt(source.charAt(0)) === moveGen && moveGen > 3) ||
								parseInt(source.charAt(0)) === 4
							) authentic = true;

							if (source === '7V') moveGenSources.push("VC");
							else if (source === '8V') moveGenSources.push("LGPE");
							else if (source === '4V') moveGenSources.push("BDSP");
							else if (source === '9V') moveGenSources.push("Legends");
							else if (source.charAt(0) === '9') moveGenSources.push("Gen 9");
							else if (source.charAt(0) === '8') moveGenSources.push("Gen 8");
							else if (source.charAt(0) === '7') moveGenSources.push("Gen 7");
							else if (source.charAt(0) === '6') moveGenSources.push("Gen 6");
							else if (source.charAt(0) === '5') moveGenSources.push("Gen 5");
							else if (source.charAt(0) === '3') moveGenSources.push("Gen 3");
							// moveGenSources *should* end up as a complete list of all Gens that the Pokémon learns the move
							// excludes 4 on purpose, and 1 and 2 are just "VC"

							if (source.charAt(1) === 'L' || source.charAt(1) === 'E') learnedNatural = true;
						}
					}
					if (learned) {
						let title: string[] = [move.name];
						if (!authentic) {
							let fakeGen = null;
							// iterate through the Gens where the Pokémon *can* learn the move...
							// in order according to how much you, uh, respect them, I guess?
							// whichever one you would most like to display should be last
							if (moveGenSources.includes("Legends")) fakeGen = "Legends"; // lowest priority

							if (moveGenSources.includes("VC")) fakeGen = "VC";
							if (moveGenSources.includes("Gen 3")) fakeGen = 3;
							// if a move was lost after Gen III but added back later, I think I want to know when it was added back

							if (moveGenSources.includes("Gen 9")) fakeGen = 9;
							if (moveGenSources.includes("BDSP")) fakeGen = "BDSP";
							if (moveGenSources.includes("Gen 8")) fakeGen = 8;
							if (moveGenSources.includes("LGPE")) fakeGen = "LGPE";
							if (moveGenSources.includes("Gen 7")) fakeGen = 7;
							if (moveGenSources.includes("Gen 6")) fakeGen = 6;
							if (moveGenSources.includes("Gen 5")) fakeGen = 5;
							// Gen IV is always "authentic"

							if (fakeGen) title += ` (${fakeGen})`;
							// this should make it display how I want!
							// like Nasty Plot vs Helping Hand (9) or Sleep Powder vs Sleep Powder (Legends)
						}
						
						if (!learnedTmTutor && !learnedNatural && sinnohTutor.includes(moveid)) title += `♢`;
						// add diamond symbol to fringe moves that will be added back in Pulse

						// okay, so we know the move! now we need to figure out where it goes
						let competitive = false;
						if (dexitedMoves.includes(moveid)) learnedNatural = learnedTmTutor = false; // list these, but force them to be fringe moves

						if (attackRMs.includes(moveid)) {
							// what type is it?
							let type = (moveid === 'judgment' || moveid === 'multiattack' || moveid === 'ragingbull' || moveid === 'revelationdance') ? poke.types[0] : move.type;
							if (moveid === 'ivycudgel' && poke.types[1]) type = poke.types[1];
							const category = (move.category === 'Special' || moveid === 'naturepower') ? "Special" : "Physical";
							// assume a status move ended up physical if its category changed
							if (
								poke.types[0] === type || (poke.types[1] && poke.types[1] === type) || offenseCoverage.includes(type) || weaknessCoverage.includes(type)
								|| otherCoverage.includes(type) || moveid === 'naturepower' || moveid === 'technoblast' || moveid === 'terrainpulse' || moveid === 'weatherball'
								|| moveid === 'fakeout' || moveid === 'feint' || moveid === 'extremespeed' || moveid === 'suckerpunch' || moveid === 'firstimpression'
								|| moveid === 'thunderclap' || moveid === 'upperhand'
							) { // for attacking moves, proceed only if the move's type has any potential to be relevant (but including the Normal moves that defy type)
								competitive = true;
								if (learnedTmTutor) poke.learnsetCumulative[type][category].tmTutor.push(title);
								else if (learnedNatural) poke.learnsetCumulative[type][category].natural.push(title);
								else poke.learnsetCumulative[type][category].fringe.push(title);
							}
						}
						for (const section in movepoolSections) {
							if (movepoolSections[section].includes(moveid)) {
								competitive = true;
								if (learnedTmTutor) poke.learnsetCumulative[section].Moves.tmTutor.push(title);
								else if (learnedNatural) poke.learnsetCumulative[section].Moves.natural.push(title);
								else poke.learnsetCumulative[section].Moves.fringe.push(title);
							}
						}

						if (!competitive) {
							// push the move's name to the appropriate categories
							if (learnedTmTutor) poke.learnsetCumulative.Flavor.Moves.tmTutor.push(title);
							else if (learnedNatural) poke.learnsetCumulative.Flavor.Moves.natural.push(title);
							else poke.learnsetCumulative.Flavor.Moves.fringe.push(title);
						}

						if (etesalta.includes(moveid)) poke.learnsetCumulative.Tutor.etesalta.push(title);
						if (manistral.includes(moveid)) poke.learnsetCumulative.Tutor.manistral.push(title);
						if (valledar.includes(moveid)) poke.learnsetCumulative.Tutor.valledar.push(title);
						if (coriallos.includes(moveid)) poke.learnsetCumulative.Tutor.coriallos.push(title);
						if (sinnohTutor.includes(moveid)) poke.learnsetCumulative.Tutor.sinnohTutor.push(title);
						// will have to do something similar for the addTrend moves but one thing at a time

						if (learnedNatural && !ondasTms.includes(moveid)) { // skip TMs, don't skip tutors
							// sort by base power
							// add to poke.learnsetCumulative.Level.sub20, sub40, sub60, sub80, sub100 or leftover accordingly
							// separate tutors from non-tutors
							let tutor = (etesalta.includes(moveid) || manistral.includes(moveid) || valledar.includes(moveid) || coriallos.includes(moveid));
							let basePower = 0;
							if (move.basePower) basePower = move.basePower;
							if (move.type && move.type === 'Normal') basePower *= 0.75;
							if (move.willCrit) basePower *= 1.5;
							if (move.multihit) {
								if (move.multihit === 2) basePower *= 2;
								else if (move.multihit === 10) basePower *= 10;
								else if (move.multihit === 3) basePower *= 6; // Triple Kick, Triple Axel
								else basePower *= 3;
							}

							// now hard-code some that changed
							if (['doublehit'].includes(moveid)) basePower = 0;
							if (['constrict'].includes(moveid)) basePower = 20;
							if (['poisonsting', 'storedpower'].includes(moveid)) basePower = 30;
							if (['knockoff'].includes(moveid)) basePower = 40;
							if (['ceaselessedge'].includes(moveid)) basePower = 45;
							if (['swift', 'shockwave', 'magicalleaf', 'aerialace', 'shadowpunch', 'feintattack', 'magnetbomb', 'mudslap', 'ominouswind', 'megadrain', 'poweruppunch', 'shelltrap', 'jetpunch', 'octazooka', 'triplearrows', 'bittermalice'].includes(moveid)) basePower = 50;
							if (['stoneaxe'].includes(moveid)) basePower = 55;
							if (['smartstrike', 'steelwing', 'clearsmog', 'smackdown'].includes(moveid)) basePower = 60;
							if (['incinerate', 'direclaw', 'skyuppercut'].includes(moveid)) basePower = 65;
							if (['chargebeam', 'hiddenpower', 'synchronoise'].includes(moveid)) basePower = 70;
							if (['firepledge', 'waterpledge', 'grasspledge'].includes(moveid)) basePower = 75;
							if (['vitalthrow', 'snore', 'spiderweb', 'uproar'].includes(moveid)) basePower = 80;
							if (['brickbreak', 'seedflare'].includes(moveid)) basePower = 85;
							if (['burningjealousy'].includes(moveid)) basePower = 90;
							if (['multiattack'].includes(moveid)) basePower = 95;
							if (['wavecrash', 'twineedle', 'spitup', 'ragingfury', 'skyattack'].includes(moveid)) basePower = 100;
							if (['closecombat', 'doubleironbash'].includes(moveid)) basePower = 100;
							if (['guillotine', 'horndrill', 'fissure', 'sheercold', 'mistyexplosion', 'present'].includes(moveid)) basePower = 120;
							if (['triplekick'].includes(moveid)) basePower = 130;
							if (['chloroblast', 'roaroftime'].includes(moveid)) basePower = 140;

							if (tutor) {
								if (basePower < 21) poke.learnsetCumulative.Level.sub20tutor.push(title);
								else if (basePower < 41) poke.learnsetCumulative.Level.sub40tutor.push(title);
								else if (basePower < 61) poke.learnsetCumulative.Level.sub60tutor.push(title);
								else if (basePower < 81) poke.learnsetCumulative.Level.sub80tutor.push(title);
								else if (basePower < 101) poke.learnsetCumulative.Level.sub100tutor.push(title);
								else poke.learnsetCumulative.Level.leftovertutor.push(title);
							} else {
								if (basePower < 21) poke.learnsetCumulative.Level.sub20.push(title);
								else if (basePower < 41) poke.learnsetCumulative.Level.sub40.push(title);
								else if (basePower < 61) poke.learnsetCumulative.Level.sub60.push(title);
								else if (basePower < 81) poke.learnsetCumulative.Level.sub80.push(title);
								else if (basePower < 101) poke.learnsetCumulative.Level.sub100.push(title);
								else poke.learnsetCumulative.Level.leftover.push(title);
							}
						}

					} else if (ondasTms.includes(moveid) || (ondasTutors.includes(moveid))) {
						// if a TM or tutor is not learned, decide if it belongs in addTrend or addOther
						// should still distinguish between competitive and flavor like above!
						let addRule = "addOther";
						let addSinnohOnly = sinnohOnly.includes(moveid);

if (poke.name === 'Mew') {
	addRule = "addTrend";
} else {

						// account for Pokémon-exclusive tutor moves
						if (notRealTutors.includes(moveid)) continue;
						// account for the new starter moves
						if (moveid === 'risingstalk') {
							if (poke.abilities[0] !== "Overgrow" && poke.abilities[0] !== "RKS System" && poke.abilities['H'] !== "Overgrow") continue;
							addRule = "addTrend";
						}
						if (moveid === 'risingheat') {
							if (poke.abilities[0] !== "Blaze" && poke.abilities[0] !== "RKS System" && poke.abilities['H'] !== "Blaze") continue;
							addRule = "addTrend";
						}
						if (moveid === 'risingtide') {
							if (poke.abilities[0] !== "Torrent" && poke.abilities[0] !== "RKS System" && poke.abilities['H'] !== "Torrent") continue;
							addRule = "addTrend";
						}

						// below should be a list of movepool trends that sort a move into either addOther or addTrend
						if (
							['captivate', 'endure', 'facade', 'frustration', 'gigaimpact', 'return', 'hiddenpower', 'hyperbeam', 'naturalgift', 'snore', 'protect', 'secretpower', 'sleeptalk', 'substitute', 'swagger', 'trashtalk', 'toxic', 'rest'].includes(moveid)
						) addRule = "addTrend"; // fully universal moves - includes some Sinnoh-only ones
						if (!(poke.gender && poke.gender === 'N') && moveid === 'attract') addRule = "addTrend";
						if (
							((poke.types[0] && poke.types[0] === 'Fire') || (poke.types[1] && poke.types[1] === 'Fire')) &&
							['flamecharge', 'fireblast', 'flamethrower', 'heatwave', 'incinerate', 'overheat', 'willowisp', 'solarbeam'].includes(moveid)
						) addRule = "addTrend"; // Fire-type move trends
						if (
							((poke.types[0] && poke.types[0] === 'Water') || (poke.types[1] && poke.types[1] === 'Water')) &&
							['dive', 'liquidation', 'waterfall', 'roilingwaves', 'scald', 'splashzone', 'surf', 'waterpulse', 'raindance', 'blizzard', 'icebeam', 'icywind', 'hail'].includes(moveid)
						) addRule = "addTrend"; // Water-type move trends
						if (
							((poke.types[0] && poke.types[0] === 'Electric') || (poke.types[1] && poke.types[1] === 'Electric')) &&
							['raindance', 'wildcharge', 'chargebeam', 'overload', 'risingvoltage', 'shockwave', 'thunder', 'thunderbolt', 'voltswitch', 'thunderwave', 'lightscreen', 'signalbeam'].includes(moveid)
						) addRule = "addTrend"; // Electric-type move trends
						if (
							((poke.types[0] && poke.types[0] === 'Grass') || (poke.types[1] && poke.types[1] === 'Grass')) &&
							['bulletseed', 'seedbomb', 'energyball', 'gigadrain', 'grassknot', 'solarbeam', 'synthesis', 'worryseed', 'naturepower'].includes(moveid)
						) addRule = "addTrend"; // Grass-type move trends
						if (
							((poke.types[0] && poke.types[0] === 'Ice') || (poke.types[1] && poke.types[1] === 'Ice')) &&
							['raindance', 'avalanche', 'blizzard', 'icebeam', 'icywind', 'hail'].includes(moveid)
						) addRule = "addTrend"; // Ice-type move trends
						if (
							((poke.types[0] && poke.types[0] === 'Fighting') || (poke.types[1] && poke.types[1] === 'Fighting')) &&
							['brickbreak', 'focuspunch', 'lowkick', 'piledriver', 'rocksmash', 'sidewardshove', 'focusblast', 'vacuumwave', 'rockslide', 'rocktomb', 'stoneedge', 'retaliate', 'strength', 'helpinghand', 'workup'].includes(moveid)
						) addRule = "addTrend"; // Fighting-type move trends
						if (
							((poke.types[0] && poke.types[0] === 'Fighting') || (poke.types[1] && poke.types[1] === 'Fighting')) &&
							!((learnset.sacredsword) || (learnset2 && learnset2.sacredsword) || (learnset3 && learnset3.sacredsword) || (learnset4 && learnset4.sacredsword)) &&
							['bulkup'].includes(moveid)
						) addRule = "addTrend"; // Fighting-type move trend, but not for the ones with Sacred Sword
						if (
							((poke.types[0] && poke.types[0] === 'Poison') || (poke.types[1] && poke.types[1] === 'Poison')) &&
							['raindance', 'acidspray', 'expiration', 'sludgebomb', 'venoshock'].includes(moveid)
						) addRule = "addTrend"; // Poison-type move trends
						if (
							((poke.types[0] && poke.types[0] === 'Ground') || (poke.types[1] && poke.types[1] === 'Ground')) &&
							['sidewardshove', 'rocksmash', 'aftershock', 'bulldoze', 'dig', 'earthquake', 'groundbreak', 'earthpower', 'mudslap', 'rockslide', 'rocktomb', 'stoneedge', 'sandstorm', 'stealthrock', 'strength'].includes(moveid)
						) addRule = "addTrend"; // Ground-type move trends
						if (
							((poke.types[0] && poke.types[0] === 'Flying') || (poke.types[1] && poke.types[1] === 'Flying')) &&
							['raindance'].includes(moveid) // insurance: even if they're not in the Flying Egg group
						) addRule = "addTrend"; // Flying-type move trends
						if (
							((poke.eggGroups[0] && poke.eggGroups[0] === 'Flying') || (poke.eggGroups[1] && poke.eggGroups[1] === 'Flying')) &&
							['aerialace', 'fly', 'aircutter', 'windshear', 'defog', 'roost', 'tailwind', 'ominouswind'].includes(moveid)
						) addRule = "addTrend"; // Flying Egg group move trends (not type!)
						if (
							((poke.types[0] && poke.types[0] === 'Psychic') || (poke.types[1] && poke.types[1] === 'Psychic')) &&
							['raindance', 'zenheadbutt', 'dreameater', 'expandingforce', 'psychic', 'psyshock', 'tractorbeam', 'calmmind', 'lightscreen', 'magiccoat', 'reflect', 'skillswap', 'trick', 'trickroom', 'signalbeam', 'shadowball', 'psychup'].includes(moveid)
						) addRule = "addTrend"; // Psychic-type move trends
						if (
							((poke.types[0] && poke.types[0] === 'Bug') || (poke.types[1] && poke.types[1] === 'Bug')) &&
							['raindance', 'bugbite', 'gatheringswarm', 'stringshot'].includes(moveid)
						) addRule = "addTrend"; // Bug-type move trends
						if (
							((poke.types[0] && poke.types[0] === 'Rock') || (poke.types[1] && poke.types[1] === 'Rock')) &&
							['rocksmash', 'bulldoze', 'earthquake', 'groundbreak', 'earthpower', 'rockslide', 'rocktomb', 'smackdown', 'stoneedge', 'ancientpower', 'meteorbeam', 'rockpolish', 'sandstorm', 'stealthrock', 'irondefense'].includes(moveid)
						) addRule = "addTrend"; // Rock-type move trends
						if (
							((poke.types[0] && poke.types[0] === 'Ghost') || (poke.types[1] && poke.types[1] === 'Ghost')) &&
							['dreameater', 'shadowball', 'soothingwave', 'ominouswind', 'spite'].includes(moveid)
						) addRule = "addTrend"; // Ghost-type move trends
						if (
							((poke.types[0] && poke.types[0] === 'Dragon') || (poke.types[1] && poke.types[1] === 'Dragon')) &&
							['dragonclaw', 'dragontail', 'outrage', 'dracometeor', 'dragonpulse', 'twister'].includes(moveid)
						) {
							addRule = "addTrend"; // Dragon-type move trends
						} else {
							if (['dracometeor'].includes(moveid)) continue;
						}
						if (
							((poke.types[0] && poke.types[0] === 'Dark') || (poke.types[1] && poke.types[1] === 'Dark')) &&
							['mudslap', 'spite', 'lashout', 'payback', 'thief', 'darkpulse', 'snarl', 'taunt', 'torment'].includes(moveid)
						) addRule = "addTrend"; // Dark-type move trends
						if (
							((poke.types[0] && poke.types[0] === 'Steel') || (poke.types[1] && poke.types[1] === 'Steel')) &&
							['rocksmash', 'ironhead', 'flashcannon', 'steelbeam', 'irondefense'].includes(moveid)
						) {
							addRule = "addTrend"; // Steel-type move trends
						} else {
							if (['steelbeam'].includes(moveid)) continue;
						}
						if (
							((poke.types[0] && poke.types[0] === 'Fairy') || (poke.types[1] && poke.types[1] === 'Fairy')) &&
							['lightscreen', 'dazzlinggleam', 'drainingkiss'].includes(moveid)
						) addRule = "addTrend"; // Fairy-type move trends
						if (
							((poke.types[0] && poke.types[0] === 'Normal') || (poke.types[1] && poke.types[1] === 'Normal')) &&
							['mudslap', 'workup'].includes(moveid)
						) addRule = "addTrend"; // Normal-type move trends
						if (
							((poke.types[0] && poke.types[0] === 'Normal') || (poke.types[1] && poke.types[1] === 'Normal')) &&
							!((poke.types[0] && poke.types[0] === 'Flying') || (poke.types[1] && poke.types[1] === 'Flying')) &&
							['retaliate'].includes(moveid)
						) addRule = "addTrend"; // Normal-type move trend, but not for the Flying group

						// some move-specific type trends
						if (moveid === 'explosion' && addRule !== "addTrend") continue; // you shouldn't get Explosion just because you have other Normal moves
						if (moveid === 'sunnyday') {
							if ((poke.types[0] && poke.types[0] === 'Fire') || (poke.types[1] && poke.types[1] === 'Fire')) addRule = "addTrend";
							if ((poke.types[0] && poke.types[0] === 'Grass') || (poke.types[1] && poke.types[1] === 'Grass')) addRule = "addTrend";
							if (
								!((poke.types[0] && poke.types[0] === 'Water') || (poke.types[1] && poke.types[1] === 'Water') ||
								(poke.types[0] && poke.types[0] === 'Electric') || (poke.types[1] && poke.types[1] === 'Electric') ||
								(poke.types[0] && poke.types[0] === 'Ice') || (poke.types[1] && poke.types[1] === 'Ice') ||
								(poke.types[0] && poke.types[0] === 'Ghost') || (poke.types[1] && poke.types[1] === 'Ghost') ||
								(poke.types[0] && poke.types[0] === 'Steel') || (poke.types[1] && poke.types[1] === 'Steel'))
							) {
								if (
									(poke.types[0] && poke.types[0] === 'Bug') || (poke.types[1] && poke.types[1] === 'Bug') ||
									(poke.eggGroups[0] && poke.eggGroups[0] === 'Flying') || (poke.eggGroups[1] && poke.eggGroups[1] === 'Flying') ||
									(poke.types[0] && poke.types[0] === 'Dragon') || (poke.types[1] && poke.types[1] === 'Dragon') ||
									(poke.types[0] && poke.types[0] === 'Fairy') || (poke.types[1] && poke.types[1] === 'Fairy') ||
									(poke.types[0] && poke.types[0] === 'Normal') || (poke.types[1] && poke.types[1] === 'Normal')
								) addRule = "addTrend";
							}
						} // Sunny Day "trend" is... more complicated
						if (moveid === 'heatwave') {
							if (
								(
									(poke.types[0] && poke.types[0] === 'Fire') || (poke.types[1] && poke.types[1] === 'Fire') ||
									(learnset.flamethrower) || (learnset2 && learnset2.flamethrower) || (learnset3 && learnset3.flamethrower) || (learnset4 && learnset4.flamethrower)
								) && (
									(poke.eggGroups[0] && poke.eggGroups[0] === 'Flying') || (poke.eggGroups[1] && poke.eggGroups[1] === 'Flying') ||
									(learnset.defog) || (learnset2 && learnset2.defog) || (learnset3 && learnset3.defog) || (learnset4 && learnset4.defog)
								)
							) {
								addRule = "addTrend";
							}
							if ((poke.eggGroups[0] && poke.eggGroups[0] === 'Flying') || (poke.eggGroups[1] && poke.eggGroups[1] === 'Flying')) {
								if (
									!((poke.types[0] && poke.types[0] === 'Water') || (poke.types[1] && poke.types[1] === 'Water') ||
									  (poke.types[0] && poke.types[0] === 'Grass') || (poke.types[1] && poke.types[1] === 'Grass') ||
									  (poke.types[0] && poke.types[0] === 'Ice') || (poke.types[1] && poke.types[1] === 'Ice') ||
									  (poke.types[0] && poke.types[0] === 'Bug') || (poke.types[1] && poke.types[1] === 'Bug') ||
									  (poke.types[0] && poke.types[0] === 'Steel') || (poke.types[1] && poke.types[1] === 'Steel'))
								) addRule = "addTrend";
							}
						} // I'm making sure Heat Wave goes to anything with both Defog and Flamethrower, as well as most of the Flying group
						if (moveid === 'incinerate') {
							if (
								(
									(poke.types[0] && poke.types[0] === 'Fire') || (poke.types[1] && poke.types[1] === 'Fire') ||
									(learnset.fireblast) || (learnset2 && learnset2.fireblast) || (learnset3 && learnset3.fireblast) || (learnset4 && learnset4.fireblast)
								)
							) {
								addRule = "addTrend"; // basically everything that's Fire-type or learns Fire Blast learns Incinerate, but...
							} else {
								if (
									!(
										(poke.types[0] && poke.types[0] === 'Dark') || (poke.types[1] && poke.types[1] === 'Dark') ||
										(learnset.flamethrower) || (learnset2 && learnset2.flamethrower) || (learnset3 && learnset3.flamethrower) || (learnset4 && learnset4.flamethrower)
									)
								) {
									continue; // if you don't meet that criterion, and you *also* aren't Dark-type and don't learn Flamethrower, just skip it!
								}
							}
						}
						if (moveid === 'burningjealousy') {
							if (
								!(
									(poke.types[0] && poke.types[0] === 'Fire') || (poke.types[1] && poke.types[1] === 'Fire') ||
									(poke.types[0] && poke.types[0] === 'Ghost') || (poke.types[1] && poke.types[1] === 'Ghost') ||
									(poke.types[0] && poke.types[0] === 'Dark') || (poke.types[1] && poke.types[1] === 'Dark')
								)
							) {
								continue;
							}
						}
						if (moveid === 'liquidation') {
							if (
								!(
									(poke.types[0] && poke.types[0] === 'Water') || (poke.types[1] && poke.types[1] === 'Water') ||
									(poke.eggGroups[0] && poke.eggGroups[0] === 'Water 1') || (poke.eggGroups[1] && poke.eggGroups[1] === 'Water 1') ||
									(poke.eggGroups[0] && poke.eggGroups[0] === 'Water 2') || (poke.eggGroups[1] && poke.eggGroups[1] === 'Water 2') ||
									(poke.eggGroups[0] && poke.eggGroups[0] === 'Water 3') || (poke.eggGroups[1] && poke.eggGroups[1] === 'Water 3') ||
									(poke.eggGroups[0] && poke.eggGroups[0] === 'Undiscovered') || (poke.eggGroups[1] && poke.eggGroups[1] === 'Undiscovered')
								)
							) {
								continue;
							}
						}
						if (moveid === 'scald' && ((poke.types[0] && poke.types[0] === 'Ice') || (poke.types[1] && poke.types[1] === 'Ice'))) continue;
						if (['voltswitch', 'risingvoltage'].includes(moveid)) {
							if (
								!(
									(poke.types[0] && poke.types[0] === 'Electric') || (poke.types[1] && poke.types[1] === 'Electric') ||
									(poke.types[0] && poke.types[0] === 'Steel') || (poke.types[1] && poke.types[1] === 'Steel') ||
									(poke.abilities[0] === "Quark Drive")
								)
							) {
								continue;
							}
						}
						if (moveid === 'electroweb') {
							if (
								!(
									(poke.types[0] && poke.types[0] === 'Electric') || (poke.types[1] && poke.types[1] === 'Electric') ||
									(poke.types[0] && poke.types[0] === 'Bug') || (poke.types[1] && poke.types[1] === 'Bug')
								)
							) {
								continue;
							}
						}
						if (moveid === 'hail') {
							if (
								(learnset.snowscape) || (learnset2 && learnset2.snowscape) || (learnset3 && learnset3.snowscape) || (learnset4 && learnset4.snowscape)
							) {
								addRule = "addTrend";
							}
						} // I'm making sure Hail goes to anything with Snowscape if it didn't already have it (mostly Gen IX stuff)
						if (moveid === 'scorchingsands') {
							if (
								!(
									(poke.types[0] && poke.types[0] === 'Ground') || (poke.types[1] && poke.types[1] === 'Ground') ||
									(poke.types[0] && poke.types[0] === 'Fire') || (poke.types[1] && poke.types[1] === 'Fire')
								)
							) {
								continue;
							}
						}
						if (['fly', 'skydrop', 'skyattack'].includes(moveid)) {
							if (
								!(
									(poke.types[0] && poke.types[0] === 'Flying') || (poke.types[1] && poke.types[1] === 'Flying') ||
									(poke.eggGroups[0] && poke.eggGroups[0] === 'Flying') || (poke.eggGroups[1] && poke.eggGroups[1] === 'Flying') ||
									(poke.eggGroups[0] && poke.eggGroups[0] === 'Undiscovered') || (poke.eggGroups[1] && poke.eggGroups[1] === 'Undiscovered')
								)
							) {
								continue;
							}
						}
						if (moveid === 'expandingforce' && (
							(poke.types[0] && poke.types[0] === 'Flying') || (poke.types[1] && poke.types[1] === 'Flying') || (poke.abilities[0] === "Levitate")
						)) continue; // must be grounded to learn Expanding Force
						if (moveid === 'bugbite') {
							if (
								!(
									(poke.types[0] && poke.types[0] === 'Bug') || (poke.types[1] && poke.types[1] === 'Bug') ||
									(poke.eggGroups[0] && poke.eggGroups[0] === 'Bug') || (poke.eggGroups[1] && poke.eggGroups[1] === 'Bug') ||
									(poke.eggGroups[0] && poke.eggGroups[0] === 'Undiscovered') || (poke.eggGroups[1] && poke.eggGroups[1] === 'Undiscovered')
								)
							) {
								continue;
							}
						}
						if (moveid === 'uturn' && addRule !== "addTrend") continue; // you shouldn't get U-turn just because you have other Bug moves
						if (moveid === 'poltergeist' && !((poke.types[0] && poke.types[0] === 'Ghost') || (poke.types[1] && poke.types[1] === 'Ghost'))) continue;
						if (moveid === 'spiritbreak' && learnset.throatchop) addRule = "addTrend";

}

						// now... I have to figure out if the Pokémon has ever had the chance to learn the move before, by TM or tutor
						// I'm gonna do a shortcut here:
						// if the Pokémon is *not* Ditto, Unown, Wobbuffet or Smeargle,
						// then list out the Generations that it learned either Protect or Return by TM (Return is just for Regigigas's sake)
						// and see if Mew learned the target move by TM or tutor in any of those Generations
						// If so, just add an asterisk and continue
						let title: string[] = [move.name];
						let alreadyCouldHave = false;
						if (!['ditto', 'unown', 'wobbuffet', 'smeargle'].includes(poke.id) && learnset.protect && this.dataCache.Learnsets.mew.learnset[moveid]) {
							for (const source of learnset.protect) {
								if (['M', 'T'].includes(source.charAt(1))) {
									for (const sourceMew of this.dataCache.Learnsets.mew.learnset[moveid]) {
										if (sourceMew.charAt(0) === source.charAt(0)) alreadyCouldHave = true;
									}
								}
							}
							if (learnset.return) {
								for (const source of learnset.return) {
									if (['M', 'T'].includes(source.charAt(1))) {
										for (const sourceMew of this.dataCache.Learnsets.mew.learnset[moveid]) {
											if (sourceMew.charAt(0) === source.charAt(0)) alreadyCouldHave = true;
										}
									}
								}
							}
						}
						if (addRule === "addTrend" && alreadyCouldHave) title += `*`; // addTrend: point out ones you could have had already
						if (addRule !== "addTrend" && !alreadyCouldHave) title += `+`; // else: emphasize ones you couldn't already have
						// (feels more helpful than the other way around)
						if (addSinnohOnly) title += `^`; // highlight when a move is only being added in Sinnoh

						// now put it in as a tutor move
						if (addRule === "addTrend") {
							if (etesalta.includes(moveid)) poke.learnsetCumulative.Tutor.etesalta.push(title);
							if (manistral.includes(moveid)) poke.learnsetCumulative.Tutor.manistral.push(title);
							if (valledar.includes(moveid)) poke.learnsetCumulative.Tutor.valledar.push(title);
							if (coriallos.includes(moveid)) poke.learnsetCumulative.Tutor.coriallos.push(title);
							if (sinnohTutor.includes(moveid)) poke.learnsetCumulative.Tutor.sinnohTutor.push(title);
						}
						if (addSinnohOnly) continue; // if a move trend is Sinnoh-only, don't include it anywhere else!

						// now sort it into that section
						let competitive = false;
						if (attackRMs.includes(moveid)) {
							// what type is it?
							const type = (moveid === 'judgment' || moveid === 'multiattack' || moveid === 'ragingbull' || moveid === 'revelationdance') ? poke.types[0] : move.type;
							const category = (move.category === 'Special' || moveid === 'naturepower') ? "Special" : "Physical";
							// assume a status move ended up physical if its category changed
							if (
								poke.types[0] === type || (poke.types[1] && poke.types[1] === type) || offenseCoverage.includes(type) || weaknessCoverage.includes(type)
								|| otherCoverage.includes(type) || moveid === 'naturepower' || moveid === 'technoblast' || moveid === 'terrainpulse' || moveid === 'weatherball'
								|| moveid === 'fakeout' || moveid === 'feint' || moveid === 'extremespeed' || moveid === 'suckerpunch' || moveid === 'firstimpression'
								|| moveid === 'wavecrash'
							) { // for attacking moves, proceed only if the move's type has any potential to be relevant (but including the Normal moves that defy type)
								competitive = true;
								poke.learnsetCumulative[type][category][addRule].push(title);
								if (!alreadyCouldHave) poke.learnsetCumulative[type][category].neverCouldHave.push(move.name);
							}
						}
						if (addRule === "addOther" && alreadyCouldHave) continue; // addOther is only for types and categories, unless a move is totally new
						for (const section in movepoolSections) {
							if (movepoolSections[section].includes(moveid)) {
								competitive = true;
								poke.learnsetCumulative[section].Moves[addRule].push(title);
								if (!alreadyCouldHave) poke.learnsetCumulative[section].Moves.neverCouldHave.push(move.name);
							}
						}
						if (!competitive) {
							poke.learnsetCumulative.Flavor.Moves[addRule].push(title);
							if (!alreadyCouldHave) poke.learnsetCumulative.Flavor.Moves.neverCouldHave.push(move.name);
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

				// same for pre-evolutions (briefly)
				let poke2 = null;
				let poke2abilities = ``;
				var poke2id = null;
				if (poke.prevo) {
					poke2 = this.dataCache.Pokedex[this.toID(poke.prevo)];
					if (poke2.abilities[0]) poke2abilities += `${this.dataCache.Abilities[this.toID(poke2.abilities[0])].name}`;
					if (poke2.abilities[1]) poke2abilities += ` / ${this.dataCache.Abilities[this.toID(poke2.abilities[1])].name}`;
					if (poke2.abilities['H']) poke2abilities += ` // ${this.dataCache.Abilities[this.toID(poke2.abilities['H'])].name}`;
					if (poke2.abilities['S']) poke2abilities += ` // (${this.dataCache.Abilities[this.toID(poke2.abilities['S'])].name})`;
					var poke2id = poke2.id;
					// poke2id = poke2name.replace(" ", `-`).replace(`.`, ``).replace(`:`, ``).replace(`\u2019`, ``); // to get rid of spaces and periods
				}
				let poke3 = null;
				let poke3abilities = ``;
				var poke3id = null;
				if (poke2 && poke2.prevo) {
					poke3 = this.dataCache.Pokedex[this.toID(poke2.prevo)];
					if (poke3.abilities[0]) poke3abilities += `${this.dataCache.Abilities[this.toID(poke3.abilities[0])].name}`;
					if (poke3.abilities[1]) poke3abilities += ` / ${this.dataCache.Abilities[this.toID(poke3.abilities[1])].name}`;
					if (poke3.abilities['H']) poke3abilities += ` // ${this.dataCache.Abilities[this.toID(poke3.abilities['H'])].name}`;
					if (poke3.abilities['S']) poke3abilities += ` // (${this.dataCache.Abilities[this.toID(poke3.abilities['S'])].name})`;
					var poke3id = poke3.id;
					// poke3id = poke3name.replace(" ", `-`).replace(`.`, ``).replace(`:`, ``).replace(`\u2019`, ``); // to get rid of spaces and periods
				}

				// finalize sheetOutput now.........
				let sheetOutput: string[] = [
					(poke3 ? poke.kind + `~` + (printno) + `~1~=IMAGE("https://www.smogon.com/forums//media/minisprites/` + poke3id + `.png",3)~~` + poke3.name + "~" + poke3.types[0] + "~" + (poke3.types[1] ? poke3.types[1] : "") + "~" + poke3abilities + "~" + poke3.baseStats.hp + "~" + poke3.baseStats.atk + "~" + poke3.baseStats.def + "~" + poke3.baseStats.spa + "~" + poke3.baseStats.spd + "~" + poke3.baseStats.spe + "~" + `\n` : "")
					+ (poke2 ? poke.kind + `~` + (printno) + `~2~=IMAGE("https://www.smogon.com/forums//media/minisprites/` + poke2id + `.png",3)~~` + poke2.name + "~" + poke2.types[0] + "~" + (poke2.types[1] ? poke2.types[1] : "") + "~" + poke2abilities + "~" + poke2.baseStats.hp + "~" + poke2.baseStats.atk + "~" + poke2.baseStats.def + "~" + poke2.baseStats.spa + "~" + poke2.baseStats.spd + "~" + poke2.baseStats.spe + "~" + `\n` : "")
					+ poke.kind + `~` + (printno) + `~3~=IMAGE("https://www.smogon.com/forums//media/minisprites/` + iconid + `.png",3)~~` + poke.name + "~" + poke.types[0] + "~" + (poke.types[1] ? poke.types[1] : "") + "~" + abilities + "~" + poke.baseStats.hp + "~" + poke.baseStats.atk + "~" + poke.baseStats.def + "~" + poke.baseStats.spa + "~" + poke.baseStats.spd + "~" + poke.baseStats.spe + "~" + `\n`
					+ poke.kind + `~` + (printno) + `~4~\n`
					+ poke.kind + `~` + (printno) + "~5~TM and Tutor~Additional Trends~Natural~Fringe~Substitutions" + `\n`
				];
				let uncheckedMoves = [];
				for (const typeInOrder in typeOrder) {
					const moveType = typeOrder[typeInOrder];
					if (!poke.learnsetCumulative[moveType]) continue; // (stop breaking)
					if (
						poke.learnsetCumulative[moveType].Physical.natural.length || poke.learnsetCumulative[moveType].Physical.tmTutor.length ||
						poke.learnsetCumulative[moveType].Physical.fringe.length || poke.learnsetCumulative[moveType].Physical.addTrend.length
					) {
						sheetOutput += poke.kind + `~` + (printno) + "~6~" + moveType + "~Physical~" + poke.learnsetCumulative[moveType].Physical.tmTutor.sort() + "~" + poke.learnsetCumulative[moveType].Physical.addTrend.sort() + "~" + poke.learnsetCumulative[moveType].Physical.natural.sort() + "~" + (poke.learnsetCumulative[moveType].Physical.fringe.length ? "(" + poke.learnsetCumulative[moveType].Physical.fringe.sort() + ")" : "") + "~" + (poke.learnsetCumulative[moveType].Physical.addOther.length ? "(" + poke.learnsetCumulative[moveType].Physical.addOther.sort() + ")" : "") + "" + `\n`;
					} else {
						uncheckedMoves.push(poke.learnsetCumulative[moveType].Physical.neverCouldHave);
					}
					if (
						poke.learnsetCumulative[moveType].Special.natural.length || poke.learnsetCumulative[moveType].Special.tmTutor.length ||
						poke.learnsetCumulative[moveType].Special.fringe.length || poke.learnsetCumulative[moveType].Special.addTrend.length
					) {
						sheetOutput += poke.kind + `~` + (printno) + "~6~" + moveType + "~Special~" + poke.learnsetCumulative[moveType].Special.tmTutor.sort() + "~" + poke.learnsetCumulative[moveType].Special.addTrend.sort() + "~" + poke.learnsetCumulative[moveType].Special.natural.sort() + "~" + (poke.learnsetCumulative[moveType].Special.fringe.length ? "(" + poke.learnsetCumulative[moveType].Special.fringe.sort() + ")" : "") + "~" + (poke.learnsetCumulative[moveType].Special.addOther.length ? "(" + poke.learnsetCumulative[moveType].Special.addOther.sort() + ")" : "") + "" + `\n`;
					} else {
						uncheckedMoves.push(poke.learnsetCumulative[moveType].Special.neverCouldHave);
					}
				}
				for (const section in movepoolSections) {
					if (
						poke.learnsetCumulative[section].Moves.natural.length || poke.learnsetCumulative[section].Moves.tmTutor.length ||
						poke.learnsetCumulative[section].Moves.fringe.length || poke.learnsetCumulative[section].Moves.addTrend.length
					) {
						sheetOutput += poke.kind + `~` + (printno) + "~7~" + section + "~~" + poke.learnsetCumulative[section].Moves.tmTutor.sort() + "~" + poke.learnsetCumulative[section].Moves.addTrend.sort() + "~" + poke.learnsetCumulative[section].Moves.natural.sort() + "~" + (poke.learnsetCumulative[section].Moves.fringe.length ? "(" + poke.learnsetCumulative[section].Moves.fringe.sort() + ")" : "") + "~" + (poke.learnsetCumulative[section].Moves.addOther.length ? "(" + poke.learnsetCumulative[section].Moves.addOther.sort() + ")" : "") + "" + `\n`;
					} else {
						uncheckedMoves.push(poke.learnsetCumulative[section].Moves.neverCouldHave);
					}
				}

				// ~8~ add TMs and tutors that have not been evaluated - should set up in the typeOrder section... agh this feels confusing right now
				// sheetOutput += poke.kind + `~` + (printno) + "~8~Unchecked Moves~~" + uncheckedMoves.sort() + `\n`;
				// actually I didn't like that! so I have commented it out

				// ~9~ reiterate tutor moves by which tutor teaches them: Etesalta, Manistral, Valledar, Coriallos, then Sinnoh... I just want to notice blanks
				sheetOutput += poke.kind + `~` + (printno) + "~9~Etesalta~~" + poke.learnsetCumulative.Tutor.etesalta.sort() + `\n`;
				sheetOutput += poke.kind + `~` + (printno) + "~9~Manistral~~" + poke.learnsetCumulative.Tutor.manistral.sort() + `\n`;
				sheetOutput += poke.kind + `~` + (printno) + "~9~Valledar~~" + poke.learnsetCumulative.Tutor.valledar.sort() + `\n`;
				sheetOutput += poke.kind + `~` + (printno) + "~9~Coriallos~~" + poke.learnsetCumulative.Tutor.coriallos.sort() + `\n`;
				sheetOutput += poke.kind + `~` + (printno) + "~9~Sinnoh~~(" + poke.learnsetCumulative.Tutor.sinnohTutor.sort() + `)\n`;

				// ~10~ a rough pass of a natural movepool sorted into BP ranges, then two rows with space for comments: manual movepool changes, then Tactics and stat changes
				sheetOutput += poke.kind + `~` + (printno) + "~10~Level-Up~~%- " + (poke.learnsetCumulative.Level.sub20 ? poke.learnsetCumulative.Level.sub20.sort() : "--") + ((poke.learnsetCumulative.Level.sub20tutor ? "; " + poke.learnsetCumulative.Level.sub20tutor.sort() : "")) + `_\n- ` + (poke.learnsetCumulative.Level.sub40 ? poke.learnsetCumulative.Level.sub40.sort() : "--") + ((poke.learnsetCumulative.Level.sub40tutor ? "; " + poke.learnsetCumulative.Level.sub40tutor.sort() : "")) + `_\n- ` + (poke.learnsetCumulative.Level.sub60 ? poke.learnsetCumulative.Level.sub60.sort() : "--") + ((poke.learnsetCumulative.Level.sub60tutor ? "; " + poke.learnsetCumulative.Level.sub60tutor.sort() : "")) + `_\n- ` + (poke.learnsetCumulative.Level.sub80 ? poke.learnsetCumulative.Level.sub80.sort() : "--") + ((poke.learnsetCumulative.Level.sub80tutor ? "; " + poke.learnsetCumulative.Level.sub80tutor.sort() : "")) + `_\n- ` + (poke.learnsetCumulative.Level.sub100 ? poke.learnsetCumulative.Level.sub100.sort() : "--") + ((poke.learnsetCumulative.Level.sub100tutor ? "; " + poke.learnsetCumulative.Level.sub100tutor.sort() : "")) + `_\n- ` + (poke.learnsetCumulative.Level.leftover ? poke.learnsetCumulative.Level.leftover.sort() : "--") + ((poke.learnsetCumulative.Level.leftovertutor ? "; " + poke.learnsetCumulative.Level.leftovertutor.sort() : "")) + `%\n`;
				// remember to Ctrl + F "%" into quotation marks
				sheetOutput += poke.kind + `~` + (printno) + `~10~Manual Changes~~(` + poke.name + `)\n`;
				sheetOutput += poke.kind + `~` + (printno) + `~10~Other Comments~~(` + poke.name + `)\n`;

				// ~11~ a blank space
				sheetOutput += (printno) + "~11~";

				let sheetOutput2: string[] = [
					(poke3 ? poke.kind + `~` + (printno) + `~1~=IMAGE("https://www.smogon.com/forums//media/minisprites/` + poke3id + `.png",3)~~` + poke3.name + "~" + poke3.types[0] + "~" + (poke3.types[1] ? poke3.types[1] : "") + "~" + poke3abilities + "~" + poke3.baseStats.hp + "~" + poke3.baseStats.atk + "~" + poke3.baseStats.def + "~" + poke3.baseStats.spa + "~" + poke3.baseStats.spd + "~" + poke3.baseStats.spe + "~" + `\n` : "")
					+ (poke2 ? poke.kind + `~` + (printno) + `~2~=IMAGE("https://www.smogon.com/forums//media/minisprites/` + poke2id + `.png",3)~~` + poke2.name + "~" + poke2.types[0] + "~" + (poke2.types[1] ? poke2.types[1] : "") + "~" + poke2abilities + "~" + poke2.baseStats.hp + "~" + poke2.baseStats.atk + "~" + poke2.baseStats.def + "~" + poke2.baseStats.spa + "~" + poke2.baseStats.spd + "~" + poke2.baseStats.spe + "~" + `\n` : "")
					+ poke.kind + `~` + (printno) + `~3~=IMAGE("https://www.smogon.com/forums//media/minisprites/` + iconid + `.png",3)~~` + poke.name + "~" + poke.types[0] + "~" + (poke.types[1] ? poke.types[1] : "") + "~" + abilities + "~" + poke.baseStats.hp + "~" + poke.baseStats.atk + "~" + poke.baseStats.def + "~" + poke.baseStats.spa + "~" + poke.baseStats.spd + "~" + poke.baseStats.spe + "~" + `\n`
					+ (printno) + "~11~"
				]; // abbreviated version
				
				poke.sheetOutput = sheetOutput;
				poke.sheetOutput2 = sheetOutput2;
			}
		}
	},
};
