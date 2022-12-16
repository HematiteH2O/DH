export const Scripts: ModdedBattleScriptsData = {
	init() {
		const pulseTms = [
			'adrenalinerush', 'aerialace', 'aftershock', 'aircurrent', 'attract', 'blizzard', 'bloodboil', 'brickbreak', 'bulkup', 'bulldoze', 'calmmind', 'darkpulse',
			'dazzlinggleam', 'dragonclaw', 'drainpunch', 'earthquake', 'embargo', 'energyball', 'explosion', 'facade', 'falseswipe', 'fireblast', 'flamecharge',
			'flamethrower', 'flashcannon', 'fling', 'focusblast', 'focuspunch', 'frustration', 'gigadrain', 'gigaimpact', 'gyroball', 'hail', 'healblock', 'hiddenpower',
			'hyperbeam', 'icebeam', 'lastwill', 'lightscreen', 'liquidation', 'magiccoat', 'miasma', 'naturepower', 'oilfire', 'overheat', 'piledriver', 'poweruppunch',
			'protect', 'psychic', 'psyshock', 'quash', 'raindance', 'reflect', 'reputation', 'rest', 'retaliate', 'return', 'revolvingdoorslam', 'risingvoltage', 'roar',
			'rockpolish', 'rockslide', 'rocktomb', 'roost', 'safeguard', 'sandstorm', 'scald', 'scorchingsands', 'shadowball', 'shockwave', 'skydrop', 'sleeptalk',
			'sludgebomb', 'snarl', 'snatch', 'solarbeam', 'splashzone', 'steelwing', 'stingingthorns', 'stoneedge', 'substitute', 'sunnyday', 'surf', 'swagger',
			'swordsdance', 'taunt', 'thief', 'thunder', 'thunderwave', 'thunderbolt', 'torment', 'toxic', 'trickroom', 'uturn', 'voltswitch', 'wildcharge', 'willowisp',
			'windshear', 'workup', 'xscissor',
		];
		const pulseTutors = [
			'aircutter', 'ancientpower', 'aquatail', 'avalanche', 'blastburn', 'block', 'bodypress', 'bounce', 'brine', 'bugbite', 'bulletseed', 'burningjealousy',
			'captivate', 'chargebeam', 'cut', 'defog', 'dig', 'dive', 'doubleteam', 'dracometeor', 'dracometeor', 'dragonascent', 'dragonpulse', 'dragontail',
			'drainingkiss', 'dreameater', 'earthpower', 'endeavor', 'endure', 'firepledge', 'firepunch', 'flash', 'fly', 'foulplay', 'frenzyplant', 'furycutter',
			'gastroacid', 'grassknot', 'grasspledge', 'gravity', 'gunkshot', 'healbell', 'heatwave', 'helpinghand', 'hydrocannon', 'hypervoice', 'icepunch', 'icywind',
			'incinerate', 'irondefense', 'ironhead', 'irontail', 'knockoff', 'lastresort', 'lowkick', 'magnetrise', 'meteorbeam', 'mudslap', 'naturalgift', 'nosedive',
			'ominouswind', 'outrage', 'painsplit', 'payback', 'playrough', 'pluck', 'poisonjab', 'poltergeist', 'psychup', 'recycle', 'relicsong', 'rockclimb',
			'rocksmash', 'roleplay', 'rollout', 'secretpower', 'secretsword', 'seedbomb', 'shadowclaw', 'signalbeam', 'silverwind', 'skillswap', 'skyattack',
			'sleightofhand', 'snore', 'spite', 'stealthrock', 'steelbeam', 'steelbeam', 'stompingtantrum', 'strength', 'stringshot', 'suckerpunch', 'superfang',
			'superpower', 'swift', 'synthesis', 'tailwind', 'thunderpunch', 'trick', 'twister', 'uproar', 'vcreate', 'vacuumwave', 'volttackle', 'waterpledge',
			'waterpulse', 'waterfall', 'worryseed', 'zenheadbutt',
		];
		for (const id in this.dataCache.Pokedex) {
			const poke = this.dataCache.Pokedex[id];
			if (!poke) continue; // skip anything that can't be read correctly, just in case
			if (this.dataCache.Learnsets[id] && this.dataCache.Learnsets[id].learnset) {

				// setup for the categories that moves can be logged into
				const naturalMoves: string[] = []; // moves that were in the Pokémon's level-up or Egg learnset either in Gen IV or when the move was added
				const tmMoves: string[] = []; // moves that the Pokémon could learn at all either in Gen IV or when the move was added and are TMs in Pulse
				const tutorMoves: string[] = []; // moves that the Pokémon could learn at all either in Gen IV or when the move was added and are tutors in Pulse
				const fringeMoves: string[] = []; // moves that were in the Pokémon's learnset as soon as possible but aren't part of the established methods
				// TRANSFER MOVES
				const transferMoves: string[] = []; // moves that were in the Pokémon's level-up or Egg learnset either in Gen IV or when the move was added
				const transferTmMoves: string[] = []; // moves that the Pokémon could learn at all either in Gen IV or when the move was added and are TMs in Pulse
				const transferTutorMoves: string[] = []; // moves that the Pokémon could learn at all either in Gen IV or when the move was added and are tutors in Pulse
				const transferFringeMoves: string[] = []; // moves that were in the Pokémon's learnset as soon as possible but aren't part of the established methods
				// LATER MOVES
				const buffMoves: string[] = []; // moves that were in the Pokémon's level-up or Egg learnset either in Gen IV or when the move was added
				const buffTmMoves: string[] = []; // moves that the Pokémon could learn at all either in Gen IV or when the move was added and are TMs in Pulse
				const buffTutorMoves: string[] = []; // moves that the Pokémon could learn at all either in Gen IV or when the move was added and are tutors in Pulse
				const buffFringeMoves: string[] = []; // moves that were in the Pokémon's learnset as soon as possible but aren't part of the established methods

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

				// if the Pokémon has pre-evolutions, add their learnsets, too!
				if (poke.prevo) {
					const poke2 = this.dataCache.Pokedex[this.toID(poke.prevo)];
					learnset2 = this.modData('Learnsets', this.toID(poke.prevo)).learnset;
					if (poke2.prevo) {
						learnset3 = this.modData('Learnsets', this.toID(poke2.prevo)).learnset;
					}
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

					// narrow down how the Pokémon learns the move as simply as possible
					let learned = false;
					let tm = pulseTms.includes(moveid) ? true : false;
					let tutor = pulseTutors.includes(moveid) ? true : false;
					let natural = false;
					let authentic = false;
					let transfer = false;
					if (learnset[moveid]) { // if it learns the move itself
						learned = true;
						for (const source of learnset[moveid]) {
							if (parseInt(source.charAt(0)) < 4) transfer = true;
							if (
								(parseInt(source.charAt(0)) === pokeGen && pokeGen > 3) ||
								(parseInt(source.charAt(0)) === moveGen && moveGen > 3) ||
								parseInt(source.charAt(0)) === 4
							) authentic = true;
							if (source.charAt(1) === 'L' || source.charAt(1) === 'E') natural = true;
						}
					}
					if (learnset2 && learnset2[moveid]) { // if it has a pre-evolution and its pre-evolution learns the move
						learned = true;
						for (const source of learnset2[moveid]) {
							if (parseInt(source.charAt(0)) < 4) transfer = true;
							if (
								(parseInt(source.charAt(0)) === pokeGen && pokeGen > 3) ||
								(parseInt(source.charAt(0)) === moveGen && moveGen > 3) ||
								parseInt(source.charAt(0)) === 4
							) authentic = true;
							if (source.charAt(1) === 'L' || source.charAt(1) === 'E') natural = true;
						}
					}
					if (learnset3 && learnset3[moveid]) { // if it's the third stage and its basic stage learns the move
						learned = true;
						for (const source of learnset3[moveid]) {
							if (parseInt(source.charAt(0)) < 4) transfer = true;
							if (
								(parseInt(source.charAt(0)) === pokeGen && pokeGen > 3) ||
								(parseInt(source.charAt(0)) === moveGen && moveGen > 3) ||
								parseInt(source.charAt(0)) === 4
							) authentic = true;
							if (source.charAt(1) === 'L' || source.charAt(1) === 'E') natural = true;
						}
					}
					if (!learned) continue;

					// generate the appropriate movelists
					// naturalMoves
					if (authentic && natural) naturalMoves.push(move.name);
					if (!authentic && natural && !transfer) buffMoves.push(move.name);
					if (!authentic && natural && transfer) transferMoves.push(move.name);
					// tmMoves
					if (authentic && tm) tmMoves.push(move.name);
					if (!authentic && tm && !transfer) buffTmMoves.push(move.name);
					if (!authentic && tm && transfer) transferTmMoves.push(move.name);
					// tutorMoves
					if (authentic && tutor) tutorMoves.push(move.name);
					if (!authentic && tutor && !transfer) buffTutorMoves.push(move.name);
					if (!authentic && tutor && transfer) transferTutorMoves.push(move.name);
					// fringeMoves
					if (authentic && !natural && !tm && !tutor) fringeMoves.push(move.name);
					if (!authentic && !natural && !tm && !tutor && !transfer) buffFringeMoves.push(move.name);
					if (!authentic && !natural && !tm && !tutor && transfer) transferFringeMoves.push(move.name);
				}
				const totalMoves: string[] = [];
				totalMoves.push(poke.name + "~" + naturalMoves + "~" + buffMoves + "~" + transferMoves + "~" + tmMoves + "~" + buffTmMoves + "~" + transferTmMoves + "~" + tutorMoves + "~" + buffTutorMoves + "~" + transferTutorMoves + "~" + fringeMoves + "~" + buffFringeMoves + "~" + transferFringeMoves);
				poke.totalMoves = totalMoves;
			}
		}
	},
};
