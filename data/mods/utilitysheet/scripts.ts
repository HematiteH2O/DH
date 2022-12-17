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

		const strongMoves = [
			'acidspray', 'acrobatics', 'assurance', 'ceaselessedge', 'drainingkiss', 'facade', 'freezedry', 'frostbreath', 'hex', 'hiddenpower', 'infernalparade',
			'lastrespects', 'naturepower', 'paraboliccharge', 'powertrip', 'ragefist', 'risingvoltage', 'shadowclaw', 'smartstrike', 'stoneaxe', 'storedpower', 'stormthrow',
			'terrainpulse', 'triplearrows', 'tropkick', 'weatherball',
		]; // moves that bypass the other checks

		// the rest is, uh, incomplete
		const brnMoves = [
			'beakblast', 'bittermalice', 'burningjealousy', 'iceburn', 'infernalparade', 'lavaplume', 'sacredfire', 'scald', 'scorchingsands', 'searingshot',
			'steameruption', 'willowisp'
		]; // will also count Bitter Malice here (as cold burn)
		const przMoves = ['bodyslam', 'bounce', 'discharge', 'freezeshock', 'glare', 'nuzzle', 'stunspore', 'thunderwave'];
		const slpMoves = ['darkvoid', 'hypnosis', 'lovelykiss', 'sleeppowder', 'spore'];
		const psnMoves = ['banefulbunker', 'barbbarrage', 'gunkshot', 'poisonfang', 'poisongas', 'poisonjab', 'sludgebomb', 'toxic', 'toxicthread'];
		const statusMoves = ['direclaw']; // ??? this category is kind of an edge case, but the only Dire Claw user will have it marked as a main STAB anyway

		const clericMoves = ['aromatherapy', 'healbell', 'revivalblessing', 'wish'];
		const refreshMoves = ['junglehealing', 'lunarblessing', 'refresh'];
		const manipulation = ['disable', 'encore', 'magiccoat', 'switcheroo', 'taunt', 'trick'];
		const trapping = ['anchorshot', 'block', 'fairylock', 'jawlock', 'meanlook', 'octolock', 'pursuit', 'spiderweb', 'spiritshackle', 'thousandwaves'];
		// will additionally check for trapping moves using move.volatileStatus: 'partiallytrapped'

		const screens = ['reflect', 'lightscreen', 'auroraveil'];
		const hazards = ['ceaselessedge', 'spikes', 'stealthrock', 'stickyweb', 'stoneaxe', 'toxicspikes'];
		const hazardControl = ['courtchange', 'defog', 'mortalspin', 'rapidspin', 'tidyup'];

		const physicalSetup = [
			'bellydrum', 'bulkup', 'coil', 'curse', 'dragondance', 'fellstinger', 'filletaway', 'honeclaws', 'noretreat', 'poweruppunch', 'shellsmash', 'shiftgear',
			'swordsdance', 'tidyup', 'victorydance', 'workup',
		]; // put under physical moves
		const specialSetup = [
			'calmmind', 'chargebeam', 'clangoroussoul', 'fierydance', 'geomancy', 'growth', 'meteorbeam', 'nastyplot', 'quiverdance', 'tailglow', 'takeheart',
			'torchsong',
		]; // put under special moves
		const defensiveSetup = [
			'acidarmor', 'amnesia', 'barrier', 'cosmicpower', 'cottonguard', 'defendorder', 'irondefense', 'psyshieldbash', 'shelter', 'steelwing', 'stockpile',
			'stuffcheeks',
		]; // put under utility moves? these are very rarely seen without Body Press, though...
		const speedSetup = ['agility', 'aquastep', 'aurawheel', 'autotomize', 'rockpolish', 'scaleshot']; // put under utility moves; excluding Esper Wing for now
		const setupControl = ['circlethrow', 'dragontail', 'haze', 'perishsong', 'roar', 'whirlwind'];
		const strongPrio = ['esperwing', 'extremespeed', 'fakeout', 'firstimpression', 'grassyglide', 'suckerpunch', 'wavecrash'];
		// will check for "priority" using the above list but also *STAB* priority moves of less BP

		// will check for pivot moves using move.selfSwitch, but exclude Revival Blessing!
		// will check for self-KO moves using move.selfdestruct (yes this is lowercase)

		const doublesMoves = [
			'beatup', 'breakingswipe', 'bulldoze', 'coaching', 'cottonspore', 'decorate', 'electroweb', 'fakeout', 'feint', 'followme', 'gravity', 'healpulse',
			'helpinghand', 'icywind', 'junglehealing', 'lifedew', 'lunarblessing', 'quickguard', 'ragepowder', 'snarl', 'stringshot', 'strugglebug', 'tailwind',
			'trickroom', 'wideguard'
		]; // ???

		let printno = 0;
		for (const id in this.dataCache.Pokedex) {
			const poke = this.dataCache.Pokedex[id];
			if (!poke || poke.evos) continue; // skip NFEs... and anything that can't be read correctly, just in case
			if (this.dataCache.Learnsets[id] && this.dataCache.Learnsets[id].learnset) {
				printno++;

				// setup for the categories that I am currently using
				// entire competitive physical movepool
				const physStab1: string[] = [];
				const physStab2: string[] = [];
				const physCovOff: string[] = [];
				const physCovWeak: string[] = [];
				const physCovOther: string[] = []; // not immediately in use though
				const physSetup: string[] = [];
				// entire competitive special movepool
				const specStab1: string[] = [];
				const specStab2: string[] = [];
				const specCovOff: string[] = [];
				const specCovWeak: string[] = [];
				const specCovOther: string[] = []; // not immediately in use though
				const specSetup: string[] = [];
				// entire competitive utility movepool (will refine later)
				const utility: string[] = [];
				const doubles: string[] = [];
				// competitive fringe movepool
				const fringePhys: string[] = [];
				const fringeSpec: string[] = [];
				const fringeStatus: string[] = [];
				// flavor movepool
				const flavorPhys: string[] = [];
				const flavorSpec: string[] = [];
				const flavorStatus: string[] = [];
				// flavor fringe movepool
				const flavorFringePhys: string[] = [];
				const flavorFringeSpec: string[] = [];
				const flavorFringeStatus: string[] = [];

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

				// now we're going to decide what moves are competitive on the Pokémon, so we need to know its type matchups
				const wallTypes = {}; // what types are hit worse than neutrally by both of the Pokémon's STABs?
				for (const type in this.dataCache.TypeChart) {
					if (
						this.dataCache.TypeChart[type].damageTaken[poke.types[0]] > 1 && (!poke.types[1] || this.dataCache.TypeChart[type].damageTaken[poke.types[0]] > 1)
					) wallTypes.push(type);
				}
				const weaknessTypes = {}; // what types hit the Pokémon super effectively?
				for (const type in this.dataCache.TypeChart) {
					if (
						this.dataCache.TypeChart[poke.types[0]].damageTaken[type] > 1 || (poke.types[1] && this.dataCache.TypeChart[poke.types[0]].damageTaken[type] > 1)
					) continue;
					if (this.dataCache.TypeChart[poke.types[0]].damageTaken[type] === 1) weaknessTypes.push(type);
					else if (poke.types[1] && this.dataCache.TypeChart[poke.types[1]].damageTaken[type] === 1) weaknessTypes.push(type);
				}
				const typeAdvantages = {}; // what types are hit super effectively by either one of the Pokémon's STABs?
				for (const type in this.dataCache.TypeChart) {
					if (
						this.dataCache.TypeChart[type].damageTaken[poke.types[0]] === 1 ||
						(poke.types[1] && this.dataCache.TypeChart[type].damageTaken[poke.types[1]] === 1)
					) typeAdvantages.push(type);
				}

				// and we're going to use those type matchups to decide how the Pokémon values different coverage types (other than its STABs)
				const offenseCoverage = {}; // what types hit at least one entry in wallTypes super effectively?
				for (const type in this.dataCache.TypeChart) { // for every attacking type...
					for (const wall in wallTypes) { // check each of the types that wall the Pokémon's STABs,
						if (this.dataCache.TypeChart[wall].damageTaken[type] === 1) { // and see if the attacking type is effective against that type!
							offenseCoverage.push(type); // if even one of them works, it's "offensive coverage"
							break; // and you don't need to check it any more once you confirm that
						}
					}
				}
				const weaknessCoverage = {}; // of the remaining, what types hit at least one entry in weaknessTypes super effectively?
				for (const type in this.dataCache.TypeChart) { // for every attacking type...
					for (const weak in weaknessTypes) { // check each of the types the Pokémon is weak to,
						if (typeAdvantages.includes(weak)) continue; // except the ones the Pokémon already beats by STAB,
						if (this.dataCache.TypeChart[weak].damageTaken[type] === 1) { // and see if the attacking type is effective against that type!
							offenseCoverage.push(type); // if even one of them works, it's "weakness coverage"
							break; // and you don't need to check it any more once you confirm that
						}
					}
				}
				const otherCoverage = {}; // of the remaining, what types hit at least one entry NOT in typeAdvantages super effectively?
				for (const type in this.dataCache.TypeChart) { // for every attacking type...
					if (poke.types.includes(type) || offenseCoverage.includes(type) || weaknessCoverage.includes(type)) continue; // as long as it's not on another list
					for (const check in this.dataCache.TypeChart) { // check every other type...
						if (typeAdvantages.includes(check)) continue; // unless, of course, the Pokémon already beats it!
						if (this.dataCache.TypeChart[check].damageTaken[type] === 1) { // and see if the attacking type is effective against that type
							otherCoverage.push(type); // if it is, it's at least kind of usable coverage, I guess??
							break; // and you don't need to check it any more once you confirm that
						}
					}
				}
				// any type not in one of these categories will be ignored as coverage!

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

					// okay, so we know the move! now we need to figure out where it goes
					// first, let's decide if it's a competitive attacking move
					let attack = false;
					if (move.basePower && (move.basePower > 70 || move.priority !== 0 || (move.multihit && move.basePower >= 20))) {
						attack = true;
					}
					if (move.category !== 'Status' && move.basePower === 0) attack = true; // moves with variable base power always count (for my sanity)
					if (strongMoves.includes(moveid)) attack = true;
					
					let competitive = false; // set this to true any time you decide to use a move for something!

					// if it is a competitive attacking move, it gets put into a category based on its type - but it depends on the user's type, too
					if (attack) {
						if (move.type === poke.types[0] && moveid !== 'hiddenpower') {
							if (move.category === 'Physical' && authentic) physStab1.push(move.name);
							else if (move.category === 'Physical' && !authentic) fringePhys.push(move.name);
							else if (move.category === 'Special' && authentic) specStab1.push(move.name);
							else if (move.category === 'Special' && !authentic) fringeSpec.push(move.name);
							competitive = true;
						} else if (poke.types[1] && move.type === poke.types[1] && moveid !== 'hiddenpower') {
							if (move.category === 'Physical' && authentic) physStab2.push(move.name);
							else if (move.category === 'Physical' && !authentic) fringePhys.push(move.name);
							else if (move.category === 'Special' && authentic) specStab2.push(move.name);
							else if (move.category === 'Special' && !authentic) fringeSpec.push(move.name);
							competitive = true;
						} else if (offenseCoverage.includes(move.type) || moveid === 'hiddenpower') {
							if (move.category === 'Physical' && authentic) physCovOff.push(move.name);
							else if (move.category === 'Physical' && !authentic) fringePhys.push(move.name);
							else if (move.category === 'Special' && authentic) specCovOff.push(move.name);
							else if (move.category === 'Special' && !authentic) fringeSpec.push(move.name);
							competitive = true;
						} else if (weaknessCoverage.includes(move.type)) {
							if (move.category === 'Physical' && authentic) physCovWeak.push(move.name);
							else if (move.category === 'Physical' && !authentic) fringePhys.push(move.name);
							else if (move.category === 'Special' && authentic) specCovWeak.push(move.name);
							else if (move.category === 'Special' && !authentic) fringeSpec.push(move.name);
							competitive = true;
						} else if (otherCoverage.includes(move.type) || strongPrio.includes(moveid)) {
							if (move.category === 'Physical' && authentic) physCovOther.push(move.name);
							else if (move.category === 'Physical' && !authentic) fringePhys.push(move.name);
							else if (move.category === 'Special' && authentic) specCovOther.push(move.name);
							else if (move.category === 'Special' && !authentic) fringeSpec.push(move.name);
							competitive = true;
						}
					} else {
						if (physicalSetup.includes(moveid)) {
							if (authentic) physSetup.push(move.name);
							else fringePhys.push(move.name);
							competitive = true;
						}
						else if (specialSetup.includes(moveid)) {
							if (authentic) specSetup.push(move.name);
							else fringeSpec.push(move.name);
							competitive = true;
						}
						else if (
							brnMoves.includes(moveid) || przMoves.includes(moveid) || slpMoves.includes(moveid) || psnMoves.includes(moveid) || statusMoves.includes(moveid) ||
							clericMoves.includes(moveid) || refreshMoves.includes(moveid) || manipulation.includes(moveid) || trapping.includes(moveid) ||
							screens.includes(moveid) || hazards.includes(moveid) || hazardControl.includes(moveid) || defensiveSetup.includes(moveid) ||
							speedSetup.includes(moveid) || setupControl.includes(moveid) || (move.volatileStatus && move.volatileStatus === 'partiallytrapped')
						) {
							if (authentic) utility.push(move.name);
							else fringeStatus.push(move.name);
							competitive = true;
						}
						else if (doublesMoves.includes(move.name)) {
							if (authentic) doubles.push(move.name);
							else {
								if (move.category === 'Physical') fringePhys.push(move.name);
								if (move.category === 'Special') fringeSpec.push(move.name);
								if (move.category === 'Status') fringeStatus.push(move.name);
							}
							competitive = true;
						}
					}

					if (!competitive) {
						if (move.category === 'Physical' && authentic) flavorPhys.push(move.name);
						else if (move.category === 'Physical' && !authentic) flavorFringePhys.push(move.name);
						else if (move.category === 'Special' && authentic) flavorSpec.push(move.name);
						else if (move.category === 'Special' && !authentic) flavorFringeSpec.push(move.name);
						else if (move.category === 'Status' && authentic) flavorStatus.push(move.name);
						else if (move.category === 'Status' && !authentic) flavorFringeStatus.push(move.name);
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
				var iconname = poke.name.toLowerCase();
				var iconid = iconname.replace(" ", `-`).replace(`.`, ``).replace(`:`, ``).replace(`\u2019`, ``); // to get rid of spaces and periods

				// same for pre-evolutions (briefly)
				let poke2 = null;
				let poke2abilities = ``;
				var poke2id = null;
				if (poke.prevo) {
					poke2 = this.dataCache.Pokedex[this.toID(poke.prevo)];
					if (poke2.abilities[0]) abilities += `${this.dataCache.Abilities[this.toID(poke2.abilities[0])].name}`;
					if (poke2.abilities[1]) abilities += ` / ${this.dataCache.Abilities[this.toID(poke2.abilities[1])].name}`;
					if (poke2.abilities['H']) abilities += ` // ${this.dataCache.Abilities[this.toID(poke2.abilities['H'])].name}`;
					if (poke2.abilities['S']) abilities += ` // (${this.dataCache.Abilities[this.toID(poke2.abilities['S'])].name})`;
					var poke2name = poke2.name.toLowerCase();
					poke2id = poke2name.replace(" ", `-`).replace(`.`, ``).replace(`:`, ``).replace(`\u2019`, ``); // to get rid of spaces and periods
				}
				let poke3 = null;
				let poke3abilities = ``;
				var poke3id = null;
				if (poke2 && poke2.prevo) {
					poke3 = this.dataCache.Pokedex[this.toID(poke2.prevo)];
					if (poke3.abilities[0]) abilities += `${this.dataCache.Abilities[this.toID(poke3.abilities[0])].name}`;
					if (poke3.abilities[1]) abilities += ` / ${this.dataCache.Abilities[this.toID(poke3.abilities[1])].name}`;
					if (poke3.abilities['H']) abilities += ` // ${this.dataCache.Abilities[this.toID(poke3.abilities['H'])].name}`;
					if (poke3.abilities['S']) abilities += ` // (${this.dataCache.Abilities[this.toID(poke3.abilities['S'])].name})`;
					var poke3name = poke3.name.toLowerCase();
					poke3id = poke3name.replace(" ", `-`).replace(`.`, ``).replace(`:`, ``).replace(`\u2019`, ``); // to get rid of spaces and periods
				}

				// competitive movepools now
				const physLine1: string[] = [physStab1 + ";" + physStab2 + ";" + physCovOff + ";" + physCovWeak + ";" + physCovOther + ";" + physSetup];
				const specLine1: string[] = [specStab1 + ";" + specStab2 + ";" + specCovOff + ";" + specCovWeak + ";" + specCovOther + ";" + specSetup];
				const utilLine1: string[] = [utility + ";" + doubles];

				// finalize sheetOutput now.........
				const sheetOutput: string[] = [
					(poke3 ? (printno + 0.01) + `~=IMAGE("https://www.smogon.com/forums//media/minisprites/` + iconid + `.png",3)~` + poke.name + "~" + poke.types[0] + "~" + (poke.types[1] ? poke.types[1] : "") + abilities + "~~~~~~" + poke.baseStats.hp + "~" + poke.baseStats.atk + "~" + poke.baseStats.def + "~" + poke.baseStats.spa + "~" + poke.baseStats.spd + "~" + poke.baseStats.spe + "~" + `<br>` : "")
					+ (poke2 ? (printno + 0.02) + `~=IMAGE("https://www.smogon.com/forums//media/minisprites/` + iconid + `.png",3)~` + poke.name + "~" + poke.types[0] + "~" + (poke.types[1] ? poke.types[1] : "") + abilities + "~~~~~~" + poke.baseStats.hp + "~" + poke.baseStats.atk + "~" + poke.baseStats.def + "~" + poke.baseStats.spa + "~" + poke.baseStats.spd + "~" + poke.baseStats.spe + "~" + `<br>` : "")
					+ (printno + 0.1) + `~=IMAGE("https://www.smogon.com/forums//media/minisprites/` + iconid + `.png",3)~` + poke.name + "~" + poke.types[0] + "~" + (poke.types[1] ? poke.types[1] : "") + abilities + "~~~~~~" + poke.baseStats.hp + "~" + poke.baseStats.atk + "~" + poke.baseStats.def + "~" + poke.baseStats.spa + "~" + poke.baseStats.spd + "~" + poke.baseStats.spe + "~" + `<br>`
					+ (printno + 0.2) + "Physical~~~Special~~~~~~Status~~~~~~~" + `<br>`
					+ (printno + 0.3) + physLine1 + "~~~" + specLine1 + "~~~~~~" + utilLine1 + "~~~~~~~" + `<br>`
					+ (printno + 0.4) + "(" + fringePhys + ")~~~(" + fringeSpec + ")~~~~~~(" + fringeStatus + ")~~~~~~~" + `<br>`
					+ (printno + 0.5) + flavorPhys + "~~~" + flavorSpec + "~~~~~~" + flavorStatus + "~~~~~~~" + `<br>`
					+ (printno + 0.6) + "(" + flavorFringePhys + ")~~~(" + flavorFringeSpec + ")~~~~~~(" + flavorFringeStatus + ")~~~~~~~" + `<br><br>`
				];
				
				poke.sheetOutput = sheetOutput;
			}
		}
	},
};
