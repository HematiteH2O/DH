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

		// event moves from Gen I and Gen II
		const newMoves = (mon: string, moves: string[]) => {
			for (const move of moves) {
				this.modData('Learnsets', this.toID(mon)).learnset[this.toID(move)] = ["3S0"];
			}
		};
		newMoves("bulbasaur", ["ancientpower"]);
		newMoves("squirtle", ["zapcannon"]);
		newMoves("spearow", ["sonicboom"]);
		newMoves("fearow", ["payday"]);
		newMoves("pichu", ["dizzypunch"]);
		newMoves("pichu", ["petaldance"]);
		newMoves("pichu", ["scaryface"]);
		newMoves("pichu", ["sing"]);
		newMoves("nidoranf", ["lovelykiss"]);
		newMoves("nidoranf", ["moonlight"]);
		newMoves("nidoranf", ["sweetkiss"]);
		newMoves("nidoranm", ["lovelykiss"]);
		newMoves("nidoranm", ["morningsun"]);
		newMoves("nidoranm", ["sweetkiss"]);
		newMoves("cleffa", ["dizzypunch"]);
		newMoves("cleffa", ["petaldance"]);
		newMoves("cleffa", ["scaryface"]);
		newMoves("cleffa", ["swift"]);
		newMoves("igglybuff", ["dizzypunch"]);
		newMoves("igglybuff", ["petaldance"]);
		newMoves("igglybuff", ["scaryface"]);
		newMoves("zubat", ["flail"]);
		newMoves("psyduck", ["petaldance"]);
		newMoves("psyduck", ["triattack"]);
		newMoves("poliwag", ["growth"]);
		newMoves("poliwag", ["lovelykiss"]);
		newMoves("abra", ["foresight"]);
		newMoves("machop", ["falseswipe"]);
		newMoves("machop", ["thrash"]);
		newMoves("bellsprout", ["lovelykiss"]);
		newMoves("bellsprout", ["sweetkiss"]);
		newMoves("geodude", ["rapidspin"]);
		newMoves("magnemite", ["agility"]);
		newMoves("doduo", ["lowkick"]);
		newMoves("seel", ["flail"]);
		newMoves("onix", ["sharpen"]);
		newMoves("drowzee", ["amnesia"]);
		newMoves("voltorb", ["agility"]);
		newMoves("cubone", ["furyattack"]);
		newMoves("tyrogue", ["dizzypunch"]);
		newMoves("tyrogue", ["rage"]);
		newMoves("lickitung", ["doubleslap"]);
		newMoves("kangaskhan", ["feintattack"]);
		newMoves("horsea", ["haze"]);
		newMoves("mrmime", ["mindreader"]);
		newMoves("scyther", ["sonicboom"]);
		newMoves("smoochum", ["dizzypunch"]);
		newMoves("smoochum", ["petaldance"]);
		newMoves("elekid", ["dizzypunch"]);
		newMoves("elekid", ["pursuit"]);
		newMoves("magby", ["dizzypunch"]);
		newMoves("pinsir", ["rockthrow"]);
		newMoves("tauros", ["quickattack"]);
		newMoves("magikarp", ["bubble"]);
		newMoves("magikarp", ["dragonrage"]);
		newMoves("magikarp", ["reversal"]);
		newMoves("lapras", ["bite"]);
		newMoves("eevee", ["growth"]);
		newMoves("snorlax", ["lovelykiss"]);
		newMoves("snorlax", ["splash"]);
		newMoves("snorlax", ["sweetkiss"]);
		newMoves("chikorita", ["petaldance"]);
		newMoves("totodile", ["submission"]);
		newMoves("sentret", ["dizzypunch"]);
		newMoves("ledyba", ["barrier"]);
		newMoves("spinarak", ["growth"]);
		newMoves("chinchou", ["lightscreen"]);
		newMoves("natu", ["safeguard"]);
		newMoves("marill", ["dizzypunch"]);
		newMoves("marill", ["scaryface"]);
		newMoves("hoppip", ["agility"]);
		newMoves("sunkern", ["splash"]);
		newMoves("yanma", ["sweetkiss"]);
		newMoves("wooper", ["bellydrum"]);
		newMoves("wooper", ["scaryface"]);
		newMoves("murkrow", ["beatup"]);
		newMoves("misdreavus", ["hypnosis"]);
		newMoves("wobbuffet", ["mimic"]);
		newMoves("dunsparce", ["furyattack"]);
		newMoves("dunsparce", ["horndrill"]);
		newMoves("snubbull", ["lovelykiss"]);
		newMoves("sneasel", ["moonlight"]);
		newMoves("swinub", ["whirlwind"]);
		newMoves("remoraid", ["amnesia"]);
		newMoves("remoraid", ["mist"]);
		newMoves("delibird", ["payday"]);
		newMoves("mantine", ["gust"]);
		newMoves("phanpy", ["absorb"]);
		newMoves("phanpy", ["encore"]);
		newMoves("stantler", ["safeguard"]);
		newMoves("larvitar", ["rage"]);

		// these are the categories we're checking for
		const burnMoves = ['willowisp', 'scald', 'scorchingsands', 'lavaplume'];

		for (const id in this.dataCache.Pokedex) {
			const poke = this.dataCache.Pokedex[id];
			if (!poke) continue; // skip anything that can't be read correctly, just in case
			if (this.dataCache.Learnsets[id] && this.dataCache.Learnsets[id].learnset) {

				// setup for the categories that moves can be logged into
				const burnAuth: string[] = []; // moves that were in the Pokémon's level-up or Egg learnset either in Gen IV or when the move was added
				const burnFringe: string[] = []; // moves that were in the Pokémon's level-up or Egg learnset either in Gen IV or when the move was added

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

					// a simplified version of the Pulse learnset sheet:
					// only decide a) if the Pokémon learns the move at all and b) if it's a safe bet it still gets it in Pulse or not
					// "fringe moves" and transfer-only moves and future buffs are all lumped into one category unless they're TMs or tutors in Pulse
					let learned = false;
					let authentic = pulseTms.includes(moveid) || pulseTutors.includes(moveid) ? true : false; // assuming all TMs and tutors are safe bets
					if (learnset[moveid]) { // if it learns the move itself
						for (const source of learnset[moveid]) {
							learned = true;
							if (
								(parseInt(source.charAt(0)) === pokeGen && pokeGen > 3) ||
								(parseInt(source.charAt(0)) === moveGen && moveGen > 3) ||
								parseInt(source.charAt(0)) === 4
							) {
								if (source.charAt(1) === 'L' || source.charAt(1) === 'E') authentic = true;
							}
						}
					}
					if (learnset2 && learnset2[moveid]) { // if it has a pre-evolution and its pre-evolution learns the move
						for (const source of learnset2[moveid]) {
							learned = true;
							if (
								(parseInt(source.charAt(0)) === pokeGen && pokeGen > 3) ||
								(parseInt(source.charAt(0)) === moveGen && moveGen > 3) ||
								parseInt(source.charAt(0)) === 4
							) {
								if (source.charAt(1) === 'L' || source.charAt(1) === 'E') authentic = true;
							}
						}
					}
					if (learnset3 && learnset3[moveid]) { // if it's the third stage and its basic stage learns the move
						for (const source of learnset3[moveid]) {
							learned = true;
							if (
								(parseInt(source.charAt(0)) === pokeGen && pokeGen > 3) ||
								(parseInt(source.charAt(0)) === moveGen && moveGen > 3) ||
								parseInt(source.charAt(0)) === 4
							) {
								if (source.charAt(1) === 'L' || source.charAt(1) === 'E') authentic = true;
							}
						}
					}
					if (!learned) continue;

					// generate the appropriate movelists twice over: first for the most likely moves, then for this widened category of "fringe moves"
					if (burnMoves.includes(moveid) && authentic) burnAuth.push(move.name);
					if (burnMoves.includes(moveid) && !authentic) burnFringe.push(move.name);
				}
				const sheetOutput: string[] = [];
				var iconname = poke.name.toLowerCase();
				var iconid = iconname.replace(" ", `-`).replace(`.`, ``); // to get rid of spaces and periods
				// finalize sheetOutput after figuring out all of the appropriate categories!
				sheetOutput.push(`=IMAGE("https://www.smogon.com/forums//media/minisprites/` + iconid + `.png",3)~` + poke.name + "~" + poke.types[0] + "~" + (poke.types[1] ? poke.types[1] : ""));
				
				poke.sheetOutput = sheetOutput;
			}
		}
	},
};
