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
			if (this.dataCache.Learnsets[id] && this.dataCache.Learnsets[id].learnset) {
				const originMoves: string[] = []; // moves that were in the Pokémon's level-up or Egg learnset either in Gen IV or when the move was added
				const tmMoves: string[] = []; // moves that the Pokémon could learn at all either in Gen IV or when the move was added and are TMs in Pulse
				const tutorMoves: string[] = []; // moves that the Pokémon could learn at all either in Gen IV or when the move was added and are tutors in Pulse
				const oldMoves: string[] = []; // moves that were in the Pokémon's learnset as soon as possible but aren't TMs in Pulse
				const buffMoves: string[] = []; // moves that the Pokémon knows but not by any of the above means
				const learnset = this.modData('Learnsets', this.toID(id)).learnset;
				const poke = this.dataCache.Pokedex[id];
				for (const moveid in learnset) {
					const move = this.dataCache.Moves[moveid];
					let pokeGen = 1;
					if (poke.num > 898) pokeGen = 9;
					else if (poke.num > 809) pokeGen = 8;
					else if (poke.num > 721) pokeGen = 7;
					else if (poke.num > 649) pokeGen = 6;
					else if (poke.num > 493) pokeGen = 5;
					else if (poke.num > 386) pokeGen = 4;
					else if (poke.num > 251) pokeGen = 3;
					else if (poke.num > 151) pokeGen = 2;
					if (poke.gen) pokeGen = poke.gen; // for forms from later Gens
					let moveGen = 1;
					if (move.num > 826) moveGen = 9;
					else if (move.num > 742) moveGen = 8;
					else if (move.num > 621) moveGen = 7;
					else if (move.num > 559) moveGen = 6;
					else if (move.num > 467) moveGen = 5;
					else if (move.num > 354) moveGen = 4;
					else if (move.num > 251) moveGen = 3;
					else if (move.num > 165) moveGen = 2;
					for (const source of learnset[moveid]) {
						if (
							(parseInt(source.charAt(0)) === pokeGen && pokeGen > 3) ||
							(parseInt(source.charAt(0)) === moveGen && moveGen > 3) ||
							parseInt(source.charAt(0)) === 4
						) {
							if (source.charAt(1) === 'L' || source.charAt(1) === 'E') {
								// this is an originMove
								originMoves.push(move.name);
								break;
							} else {
								if (pulseTms.includes(moveid)) {
									// this is a TM move
									tmMoves.push(move.name);
									break;
								} else if (pulseTutors.includes(moveid)) {
									// this is a tutor move
									tutorMoves.push(move.name);
									break;
								} else {
									// this is an oldMove
									oldMoves.push(move.name);
									break;
								}
							}
						} else {
							// this is a buffMove
							buffMoves.push(move.name);
							break;
						}
					}
				}
				const totalMoves: string[] = [];
				totalMoves.push(poke.name + ": " + originMoves + "~" + tmMoves + "~" + tutorMoves + "~" + oldMoves + "~" + buffMoves);
				poke.totalMoves = totalMoves;
			}
		}
	},
};
