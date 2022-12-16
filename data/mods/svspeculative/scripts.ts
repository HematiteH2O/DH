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
				const originMoves: string[] = []; // moves that were in the Pokémon's level-up or Egg learnset either in Gen IV or when the move was added
				const tmMoves: string[] = []; // moves that the Pokémon could learn at all either in Gen IV or when the move was added and are TMs in Pulse
				const tutorMoves: string[] = []; // moves that the Pokémon could learn at all either in Gen IV or when the move was added and are tutors in Pulse
				const oldMoves: string[] = []; // moves that were in the Pokémon's learnset as soon as possible but aren't part of the established methods
				// TRANSFER MOVES
				const transferMoves: string[] = []; // moves that were in the Pokémon's level-up or Egg learnset either in Gen IV or when the move was added
				const transferTmMoves: string[] = []; // moves that the Pokémon could learn at all either in Gen IV or when the move was added and are TMs in Pulse
				const transferTutorMoves: string[] = []; // moves that the Pokémon could learn at all either in Gen IV or when the move was added and are tutors in Pulse
				const transferOldMoves: string[] = []; // moves that were in the Pokémon's learnset as soon as possible but aren't part of the established methods
				// LATER MOVES
				const buffMoves: string[] = []; // moves that were in the Pokémon's level-up or Egg learnset either in Gen IV or when the move was added
				const buffTmMoves: string[] = []; // moves that the Pokémon could learn at all either in Gen IV or when the move was added and are TMs in Pulse
				const buffTutorMoves: string[] = []; // moves that the Pokémon could learn at all either in Gen IV or when the move was added and are tutors in Pulse
				const buffOldMoves: string[] = []; // moves that were in the Pokémon's learnset as soon as possible but aren't part of the established methods

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

				// if the Pokémon has pre-evolutions, add their learnsets, too!
				if (poke.prevo) {
					const poke2 = this.dataCache.Pokedex[this.toID(poke.prevo)];
					const learnset2 = this.modData('Learnsets', this.toID(poke.prevo)).learnset;
					for (const moveid in learnset2) {
						if (learnset[moveid]) {
							learnset[moveid].push(learnset2[moveid]);
						} else {
							learnset[moveid] = learnset2[moveid];
						}
					}
					if (poke2.prevo) {
						const poke3 = this.dataCache.Pokedex[this.toID(poke2.prevo)];
						const learnset3 = this.modData('Learnsets', this.toID(poke2.prevo)).learnset;
						for (const moveid in learnset3) {
							if (learnset.moveid) {
								learnset[moveid].push(learnset3[moveid]);
							} else {
								learnset[moveid] = learnset3[moveid];
							}
						}
					}
				}

				for (const moveid in learnset) {
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
					let tm = pulseTms.includes(moveid) ? true : false;
					let tutor = pulseTutors.includes(moveid) ? true : false;
					let natural = false;
					let native = false;
					let transfer = false;

					for (const source of learnset[moveid]) {
						if (parseInt(source.charAt(0)) < 4) transfer = true;
						if (
							(parseInt(source.charAt(0)) === pokeGen && pokeGen > 3) ||
							(parseInt(source.charAt(0)) === moveGen && moveGen > 3) ||
							parseInt(source.charAt(0)) === 4
						) native = true;
						if (source.charAt(1) === 'L' || source.charAt(1) === 'E') natural = true;
					}
					// no more than one category for a move!
					if (native && natural) originMoves.push(move.name);
					else if (native && tm) tmMoves.push(move.name);
					else if (native && tutor) tutorMoves.push(move.name);
					else if (native) oldMoves.push(move.name);
					// if it's not learned natively in Gen IV but it was in an earlier Gen, it must be a transfer move
					else if (transfer && natural) transferMoves.push(move.name);
					else if (transfer && tm) transferTmMoves.push(move.name);
					else if (transfer && tutor) transferTutorMoves.push(move.name);
					else if (transfer) transferOldMoves.push(move.name);
					// if it's not learned natively in Gen IV *or* an earlier Gen, it must be a buff move
					else if (natural) buffMoves.push(move.name);
					else if (tm) buffTmMoves.push(move.name);
					else if (tutor) buffTutorMoves.push(move.name);
					else buffOldMoves.push(move.name);
					// oldMoves should probably be called something like "fringeMoves," since some of them are from the future, but I don't mind this!
				}
				const totalMoves: string[] = [];
				totalMoves.push(poke.name + ": " + originMoves + "~" + tmMoves + "~" + tutorMoves + "~" + oldMoves + "~" + transferMoves + "~" + transferTmMoves + "~" + transferTutorMoves + "~" + transferOldMoves + "~" + buffMoves + "~" + buffTmMoves + "~" + buffTutorMoves + "~" + buffOldMoves);
				poke.totalMoves = totalMoves;
			}
		}
	},
};
