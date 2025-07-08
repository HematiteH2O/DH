export const Scripts: ModdedBattleScriptsData = {
	init() {
		const postgameTms = [
			'roar', 'lightscreen', 'smackdown', 'sludgewave', 'overheat', 'steelwing', 'skydrop', 'incinerate', 'quash', 'explosion', 'retaliate', 'voltswitch', 'dreameater',
			'flashcannon', 'wildcharge',
			// 'round', 'gigaimpact', 'swagger',
		];

		let printno = 0;
		for (const id in this.dataCache.Pokedex) {
			const poke = this.dataCache.Pokedex[id];
			if (!poke) continue;

			if (this.dataCache.Learnsets[id] && this.dataCache.Learnsets[id].learnset) {
				printno++;
				poke.learnsetCumulative = {
							Moves: [],
							learnset: [],
				};
				// start with the vanilla learnset
				const learnset = this.modData('Learnsets', this.toID(id)).learnset;
				let learnset2 = null;
				let learnset3 = null;

				// if the Pokémon has pre-evolutions, add their learnsets, too!
				if (poke.prevo) {
					const poke2 = this.dataCache.Pokedex[this.toID(poke.prevo)];
					learnset2 = this.modData('Learnsets', this.toID(poke.prevo)).learnset;
					if (poke2.prevo) {
						learnset3 = this.modData('Learnsets', this.toID(poke2.prevo)).learnset;
					}
				}

				for (const moveid in this.dataCache.Moves) {

// NOTICE: you will need to account for pre-evolutions' movepools before generating new level-up lists!
// specifically this is because of Egg moves, which I notice are only on the basic stage
// oops!

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
					if (learnset2 && learnset2[moveid]) { // if it learns the move
						for (const source of learnset2[moveid]) {
							if (parseInt(source.charAt(0)) === 6) {
								learned = true;
								if (source.charAt(1) === 'L') learnedLvUp = true;
								if (source.charAt(1) === 'M' && !postgameTms.includes(moveid)) learnedTm = true;
								if (source.charAt(1) === 'E' || source.charAt(1) === 'T') learnedOras = true;
							}
						}
					}
					if (learnset3 && learnset3[moveid]) { // if it learns the move
						for (const source of learnset3[moveid]) {
							if (parseInt(source.charAt(0)) === 6) {
								learned = true;
								if (source.charAt(1) === 'L') learnedLvUp = true;
								if (source.charAt(1) === 'M' && !postgameTms.includes(moveid)) learnedTm = true;
								if (source.charAt(1) === 'E' || source.charAt(1) === 'T') learnedOras = true;
							}
						}
					}
					if (learned && !learnedLvUp && !learnedTm && learnedOras) learnedLvUp = true; // add tutors and Egg moves to level-up, but not event moves
					if (learnedLvUp) poke.learnsetCumulative.Moves.push(moveid);
				}
				for (const moveid in poke.learnsetCumulative.Moves) {
					let lv = 1;
					const move = this.dataCache.Moves[moveid];
					let basePower = 1;
					if (move.basePower && move.basePower > 0) {
						basePower = move.basePower;
						if (['fellstinger'].includes(moveid)) basePower = 30;
						if (['flyingpress'].includes(moveid)) basePower = 80;
						if (['leechlife'].includes(moveid)) basePower = 20;
						if (['mysticalfire'].includes(moveid)) basePower = 65;
						if (['paraboliccharge'].includes(moveid)) basePower = 50;
						if (['suckerpunch'].includes(moveid)) basePower = 80;
						if (['tackle'].includes(moveid)) basePower = 50;
						if (['lusterpurge'].includes(moveid)) basePower = 70;
						if (['mistball'].includes(moveid)) basePower = 70;
						if (move.multihit) {
							if (move.multihit === 2) basePower *= 2;
							else if (move.multihit === 3) basePower *= 6; // Triple Kick, Triple Axel
							else basePower *= 3;
						}
						if (move.flags && move.flags['charge']) basePower *= 0.75;
						if (move.target && ['allAdjacentFoes', 'allAdjacent'].includes(move.target)) basePower *= 1.1;
						if (move.recoil) {
							if (move.recoil === [1, 4]) basePower *= 8 / 9;
							if (move.recoil === [33, 100]) basePower *= 6 / 7;
							if (move.recoil === [1, 2]) basePower *= 4 / 5;
						}
						if (move.type && (move.type === 'Normal' || !poke.types.includes[move.type])) basePower *= 0.8;
						if (move.willCrit) basePower *= 1.5;
					}

					lv = basePower - 40;
					lv *= 0.85;
					lv = Math.floor(lv);
					if (lv < 1) lv = 1;

					// coverage type lenience
					if (['Fire', 'Flying', 'Rock'].includes(moveid) && 9 < lv && lv < 14) lv = 9; // Viola
					if (['Water', 'Grass', 'Fighting', 'Ground', 'Steel'].includes(moveid) && 24 < lv && lv < 30) lv = 24; // Grant
					if (['Flying', 'Psychic', 'Fairy'].includes(moveid) && 32 < lv && lv < 38) lv = 32; // Korrina
					if (['Fire', 'Ice', 'Poison', 'Flying', 'Bug'].includes(moveid) && 35 < lv && lv < 41) lv = 35; // Ramos
					if (['Fire', 'Fighting', 'Ground'].includes(moveid) && 39 < lv && lv < 45) lv = 39; // Aliana and Clemont
					if (['Poison', 'Steel'].includes(moveid) && 44 < lv && lv < 50) lv = 44; // Valerie
					if (['Bug', 'Ghost', 'Dark'].includes(moveid) && 51 < lv && lv < 57) lv = 51; // Olympia
					if (['Psychic', 'Ground'].includes(moveid) && 51 < lv && lv < 57) lv = 51; // Xerosic
					if (['Flying', 'Psychic', 'Fairy'].includes(moveid) && 55 < lv && lv < 61) lv = 55; // Tierno??
					if (['Fire', 'Fighting', 'Rock', 'Steel'].includes(moveid) && 63 < lv && lv < 69) lv = 63; // Wulfric
					if (72 < lv) lv = 72; // c'mon you can learn anything you want at that point

					// assign exceptional levels to (some) status moves
					if (['aromaticmist', 'assist', 'bide', 'copycat', 'flash', 'howl', 'kinesis', 'mirrormove', 'sandattack', 'smokescreen', 'sonicboom'].includes(moveid)) lv = 8;
					if (['charge', 'detect', 'mefirst', 'naturalgift', 'protect', 'sweetscent', 'wish', 'workup'].includes(moveid)) lv = 15;
					if (['agility', 'autotomize', 'defendorder', 'dragonrage', 'rockpolish', 'screech', 'swordsdance'].includes(moveid)) lv = 20;
					if (['afteryou', 'babydolleyes', 'camouflage', 'charm', 'cottonspore', 'dragondance', 'electrify', 'entrainment', 'featherdance', 'flatter', 'flowershield', 'grassknot', 'grudge', 'guardswap', 'gyroball', 'honeclaws', 'lowkick', 'magiccoat', 'magneticflux', 'magnitude', 'mist', 'partingshot', 'poisonpowder', 'powerswap', 'psychup', 'quash', 'rototiller', 'tickle', 'torment'].includes(moveid)) lv = 24;
					if (['healpulse', 'helpinghand', 'iondeluge', 'luckychant', 'magicroom', 'magnetrise', 'naturepower', 'poisongas', 'wonderroom'].includes(moveid)) lv = 27;
					if (['acidarmor', 'acupressure', 'allyswitch', 'aromatherapy', 'barrier', 'bestow', 'bulkup', 'confuseray', 'curse', 'disable', 'fling', 'grasswhistle', 'guardsplit', 'healbell', 'hypnosis', 'irondefense', 'nastyplot', 'powersplit', 'psychoshift', 'recycle', 'reflect', 'reflecttype', 'refresh', 'safeguard', 'sing', 'spikes', 'spikyshield', 'spitup', 'stealthrock', 'stockpile', 'stunspore', 'substitute', 'swallow', 'switcheroo', 'tailglow', 'toxic', 'toxicspikes', 'trick', 'trickroom', 'venomdrench', 'wideguard', 'willowisp'].includes(moveid)) lv = 32;
					if (['calmmind', 'coil', 'cottonguard', 'crushgrip', 'eerieimpulse', 'flail', 'forestscurse', 'frustration', 'glare', 'growth', 'hail', 'healblock', 'healorder', 'heatcrash', 'moonlight', 'morningsun', 'painsplit', 'punishment', 'ragepowder', 'raindance', 'return', 'roleplay', 'sandstorm', 'shiftgear', 'skillswap', 'sleeppowder', 'sleeptalk', 'snatch', 'soak', 'spore', 'sunnyday', 'swagger', 'synthesis', 'telekinesis', 'thunderwave', 'topsyturvy', 'trickortreat', 'wringout'].includes(moveid)) lv = 35;
					if (['amnesia', 'attract', 'batonpass', 'beatup', 'bellydrum', 'captivate', 'destinybond', 'electricterrain', 'embargo', 'encore', 'endeavor', 'faketears', 'grassyterrain', 'healingwish', 'heavyslam', 'leechseed', 'lightscreen', 'lunardance', 'matblock', 'metalsound', 'milkdrink', 'mindreader', 'miracleeye', 'mistyterrain', 'mudsport', 'nightmare', 'quickguard', 'quiverdance', 'recover', 'rest', 'reversal', 'roost', 'simplebeam', 'slackoff', 'softboiled', 'spite', 'stickyweb', 'superfang', 'taunt', 'yawn'].includes(moveid)) lv = 39;
					if (['cosmicpower', 'craftyshield', 'doubleteam', 'electroball', 'finalgambit', 'followme', 'gastroacid', 'haze', 'imprison', 'kingsshield', 'memento', 'powder', 'roar', 'teeterdance', 'whirlwind', 'worryseed'].includes(moveid)) lv = 44;
					if (['defog', 'gravity', 'lovelykiss', 'minimize', 'shellsmash', 'tailwind'].includes(moveid)) lv = 50;
					if (['darkvoid', 'geomancy', 'perishsong'].includes(moveid)) lv = 54;

					let moveName: string[] = [` - ` + move.name];
					if (move.category && move.category !== 'Status') moveName = `a` + moveName; // attacks should be the last move learned at a level so NPCs don't often get stuck with none

					// evolutions learn exclusive moves at their evolution level, if possible!
					if (poke.evoLevel) {
						if ((!learnset2 || !learnset2[moveid]) && (!learnset3 || !learnset3[moveid]) && (lv < evoLevel)) {
							lv = evoLevel;
							let bonuslv1: string[] = [`\n 1` + moveName];
							poke.learnsetCumulative.learnset.push(bonuslv1);
						}
					}

					// first assign the move a level

					// then send it to the learnset
					let movelv: string[] = [`\n ` + lv + moveName];
					poke.learnsetCumulative.learnset.push(movelv);
				}
				poke.learnsetCumulative.learnset.sort();

				// abilities
				if (!poke || !poke.learnsetCumulative.learnset) return;
				// finalize sheetOutput now.........
				let sheetOutput: string[] = [
					`\n\n` + poke.name + `\n`
				];
				for (const move in poke.learnsetCumulative.learnset) {
					sheetOutput += move;
				}
				poke.sheetOutput = sheetOutput;
			}
		}
	},
};
