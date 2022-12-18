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

		// declaring which moves are "competitive" in general
		const attackRMs = [
			'accelerock', 'aciddrench', 'acidspray', 'acrobatics', 'adrenalinerush', 'aerialace', 'aeroblast', 'aftershock', 'airslash', 'anchorshot', 'ancientpower',
			'appleacid', 'aquacutter', 'aquajet', 'aquastep', 'aquatail', 'arenatrap', 'armorcannon', 'assurance', 'astralbarrage', 'attackorder', 'aurasphere',
			'aurawheel', 'axekick', 'barbbarrage', 'beakblast', 'behemothbash', 'behemothblade', 'belch', 'bitterblade', 'bittermalice', 'blazekick', 'bleakwindstorm',
			'blizzard', 'bloodsuck', 'blueflare', 'bodypress', 'bodyslam', 'boltbeak', 'boltstrike', 'bonemerang', 'boomburst', 'bounce', 'bravebird', 'brickbreak',
			'brine', 'bugbuzz', 'bulletpunch', 'bulletseed', 'burnup', 'burningjealousy', 'catharsis', 'ceaselessedge', 'chargebeam', 'chloroblast', 'circlethrow',
			'circuitbreak', 'clangingscales', 'clearsmog', 'clockworkcannon', 'closecombat', 'collisioncourse', 'constrict', 'cooldown', 'coreenforcer', 'crabhammer',
			'crosschop', 'crosspoison', 'crunch', 'crushgrip', 'darkpulse', 'darkestlariat', 'dazzlinggleam', 'demolition', 'diamondstorm', 'direclaw', 'discharge',
			'doomdesire', 'doubleedge', 'doubleironbash', 'doubleshock', 'dracometeor', 'dragonascent', 'dragonclaw', 'dragondarts', 'dragonenergy', 'dragonhammer',
			'dragonpulse', 'dragontail', 'drainpunch', 'drainingkiss', 'dreameater', 'drillpeck', 'drillrun', 'drumbeating', 'dualchop', 'dualwingbeat', 'dynamaxcannon',
			'earthpower', 'earthquake', 'eeriespell', 'electrodrift', 'energyball', 'eruption', 'esperwing', 'eternabeam', 'expandingforce', 'explosion', 'extrasensory',
			'extremespeed', 'facade', 'fakeout', 'falsesurrender', 'faustianbargain', 'fierydance', 'fierywrath', 'finalbreath', 'fireblast', 'firefang', 'firelash',
			'firepunch', 'firstimpression', 'fishiousrend', 'flameburst', 'flamethrower', 'flareblitz', 'flashcannon', 'fleurcannon', 'flipturn', 'flowertrick', 'fly',
			'flyingpress', 'focusblast', 'focuspunch', 'foulplay', 'freezedry', 'freezeshock', 'freezingglare', 'frostbreath', 'frustration', 'fusionbolt', 'fusionflare',
			'futuresight', 'gatheringswarm', 'geargrind', 'gigadrain', 'gigatonhammer', 'glaciallance', 'glaciate', 'glaiverush', 'grassknot', 'grassyglide', 'gravapple',
			'groundbreak', 'gunkshot', 'gyroball', 'hammerarm', 'headcharge', 'headsmash', 'headlongrush', 'heatwave', 'hex', 'hiddenpower', 'highhorsepower',
			'highjumpkick', 'hivecall', 'hornleech', 'hurricane', 'hydropump', 'hyperdrill', 'hypervoice', 'hyperspacefury', 'hyperspacehole', 'icebeam', 'iceburn',
			'icefang', 'icehammer', 'icepunch', 'iceshard', 'icespinner', 'iciclecrash', 'iciclespear', 'incinerate', 'infernalparade', 'ironhead', 'irontail', 'jawlock',
			'jetpunch', 'judgment', 'jumpkick', 'knockoff', 'kowtowcleave', 'landswrath', 'lashout', 'lastrespects', 'lavaplume', 'leafblade', 'leafstorm', 'leechlife',
			'lightofruin', 'liquefy', 'liquidation', 'lowkick', 'luminacrash', 'lunge', 'lusterpurge', 'machpunch', 'magmastorm', 'makeitrain', 'megadrain', 'megahorn',
			'meteorassault', 'meteorbeam', 'meteormash', 'miasma', 'mindblown', 'mistball', 'mistyexplosion', 'moonblast', 'moongeistbeam', 'mortalspin', 'mountaingale',
			'muddywater', 'multiattack', 'mysticalfire', 'mysticalpower', 'naturalgift', 'naturepower', 'nightdaze', 'nightslash', 'nosedive', 'oblivionwing', 'oilfire',
			'orderup', 'originpulse', 'outrage', 'overdrive', 'overheat', 'overload', 'parasite', 'petalblizzard', 'petaldance', 'phantomforce', 'photongeyser',
			'piledriver', 'pinmissile', 'plasmafists', 'playrough', 'poisonjab', 'pollenpuff', 'poltergeist', 'populationbomb', 'powergem', 'powertrip', 'poweruppunch',
			'powerwhip', 'precipiceblades', 'prismaticlaser', 'provoke', 'psychout', 'psychic', 'psychicfangs', 'psychoboost', 'psychocut', 'psyshieldbash', 'psyshock',
			'psystrike', 'pursuit', 'pyroball', 'quickattack', 'ragefist', 'ragingbull', 'rampageinstinct', 'rapidspin', 'razorshell', 'razorwind', 'relicsong',
			'reputation', 'return', 'revelationdance', 'reversal', 'revolvingdoorslam', 'riposte', 'risingvoltage', 'roaroftime', 'rockblast', 'rockslide', 'rockthrow',
			'rockwrecker', 'roilingwaves', 'rollout', 'runningbolt', 'sacredfire', 'saltcure', 'sandsearstorm', 'scald', 'scaleshot', 'scorchingsands', 'searingshot',
			'secretsword', 'seedbomb', 'seedflare', 'selfdestruct', 'shadowball', 'shadowbone', 'shadowclaw', 'shadowforce', 'shadowsneak', 'shadydeal', 'shellsidearm',
			'shelltrap', 'signalbeam', 'silverwind', 'skittersmack', 'skyattack', 'skyuppercut', 'sleightofhand', 'sludgebomb', 'sludgewave', 'smartstrike',
			'smellingsalts', 'snipeshot', 'snowshovel', 'solarbeam', 'solarblade', 'spacialrend', 'spark', 'sparklingaria', 'spectralthief', 'spiderweb', 'spikyshield',
			'spinout', 'spiritbreak', 'spiritshackle', 'spitup', 'splashzone', 'springtidestorm', 'steameruption', 'steelbeam', 'steelroller', 'stompingtantrum',
			'stoneaxe', 'stoneedge', 'storedpower', 'stormthrow', 'strangesteam', 'suckerpunch', 'sunsteelstrike', 'superpower', 'surf', 'surgingstrikes',
			'surpriseattack', 'switchflip', 'synchronoise', 'teardown', 'technoblast', 'terrainpulse', 'testingstrike', 'thousandarrows', 'thousandwaves', 'throatchop',
			'thunder', 'thundercage', 'thunderfang', 'thunderpunch', 'thunderbolt', 'thunderouskick', 'torchsong', 'triattack', 'triplearrows', 'tripleaxel', 'triplekick',
			'tropkick', 'trumpcard', 'undermine', 'uturn', 'vacuumwave', 'vcreate', 'voltswitch', 'volttackle', 'watershuriken', 'waterspout', 'waterfall', 'wavecrash',
			'weatherball', 'wickedblow', 'wildcharge', 'wildboltstorm', 'windshear', 'woodhammer', 'xscissor', 'zenheadbutt', 'zingzap'
		]; // this category doesn't need to distinguish physical from special! that's handled later
		const utilitySelfRMs = [
			'acidarmor', 'acupressure', 'agility', 'amnesia', 'aquastep', 'aurawheel', 'autotomize', 'barrier', 'bellydrum', 'bloodboil', 'bulkup', 'calmmind',
			'catharsis', 'clangoroussoul', 'coil', 'cosmicpower', 'cottonguard', 'curse', 'defendorder', 'diamondstorm', 'dragondance', 'fellstinger', 'filletaway',
			'flamecharge', 'geomancy', 'growth', 'healorder', 'honeclaws', 'irondefense', 'junglehealing', 'liquefy', 'lunarblessing', 'magnetrise', 'metamorphosis',
			'milkdrink', 'moonlight', 'morningsun', 'nastyplot', 'noretreat', 'ominouswind', 'painsplit', 'quiverdance', 'recover', 'refresh', 'rest', 'rockpolish',
			'roost', 'runningstart', 'shellsmash', 'shelter', 'shiftgear', 'shoreup', 'skyattack', 'slackoff', 'softboiled', 'stockpile', 'strengthsap', 'stuffcheeks',
			'substitute', 'surgingstrikes', 'swordsdance', 'synthesis', 'tailglow', 'takeheart', 'trailblaze', 'triplearrows', 'victorydance',
		];
		const doublesSelfRMs = null; // nothing yet
		const utilityDisruptRMs = [
			'aftershock', 'anchorshot', 'backstab', 'banefulbunker', 'beakblast', 'bittermalice', 'block', 'bodyslam', 'circlethrow', 'clearsmog', 'constrict',
			'corrosivegas', 'counter', 'covet', 'darkvoid', 'destinybond', 'direclaw', 'disable', 'dragonrage', 'dragontail', 'encore', 'esperwing', 'fairylock',
			'fakeout', 'finalgambit', 'firespin', 'fissure', 'glare', 'guillotine', 'haze', 'heartswap', 'horndrill', 'hyperdrill', 'hypnosis', 'infernalparade',
			'infestation', 'jawlock', 'kingsshield', 'knockoff', 'leechseed', 'lovelykiss', 'meanlook', 'memento', 'mirrorcoat', 'naturesmadness', 'nightshade',
			'nuzzle', 'obstruct', 'octolock', 'perishsong', 'powder', 'provoke', 'psychout', 'rashpowder', 'reverb', 'revolvingdoorslam', 'roar', 'ruination',
			'sacredfire', 'saltcure', 'sandtomb', 'scald', 'scorchingsands', 'seismictoss', 'shadydeal', 'sheercold', 'shelltrap', 'silktrap', 'sleeppowder', 'soak',
			'sonicboom', 'spiderweb', 'spikyshield', 'spiritshackle', 'spore', 'stickyfloor', 'stunspore', 'superfang', 'switcheroo', 'taunt', 'thief', 'thousandwaves',
			'thundercage', 'thunderwave', 'topsyturvy', 'toxic', 'toxicthread', 'trick', 'whirlwind', 'willowisp', 'windshear', 'yawn',
		];
		const doublesDisruptRMs = [
			'acidspray', 'blackmail', 'breakingswipe', 'bulldoze', 'captivate', 'charm', 'cottonspore', 'demolition', 'detect', 'drumbeating', 'eerieimpulse',
			'electroweb', 'faketears', 'featherdance', 'feint', 'fissurevent', 'fog', 'hyperspacefury', 'hyperspacehole', 'icywind', 'imprison', 'incinerate',
			'luminacrash', 'matblock', 'phantomforce', 'poisongas', 'protect', 'quickguard', 'sabotage', 'screech', 'skydrop', 'snarl', 'snatch', 'splashzone',
			'stringshot', 'strugglebug', 'wideguard',
		];
		const utilitySupportRMs = [
			'aromatherapy', 'auroraveil', 'batonpass', 'burningcoals', 'ceaselessedge', 'chillyreception', 'contaminate', 'courtchange', 'creepingivy', 'defog',
			'explosion', 'flipturn', 'healbell', 'healingwish', 'lastwill', 'lightscreen', 'lushmoss', 'mortalspin', 'partingshot', 'psyshieldbash', 'pyrotechnics',
			'rapidspin', 'reflect', 'revivalblessing', 'selfdestruct', 'shedtail', 'snowshovel', 'spikes', 'stealthrock', 'stickyweb', 'stoneaxe', 'teleport', 'tidyup',
			'toxicspikes', 'tripwire', 'uturn', 'voltswitch', 'wish',
		];
		const doublesSupportRMs = [
			'allyswitch', 'beatup', 'cleansingwave', 'coaching', 'decorate', 'doodle', 'entrainment', 'extendinghand', 'followme', 'gravity', 'healpulse', 'helpinghand',
			'instruct', 'lifedew', 'pollenpuff', 'ragepowder', 'reversalroom', 'simplebeam', 'skillswap', 'soothingwave', 'spicyextract', 'tailwind', 'tideturn',
			'trickroom',
		];

		let printno = 0;
		for (const id in this.dataCache.Pokedex) {
			const poke = this.dataCache.Pokedex[id];
			if (!poke || poke.evos) continue; // skip NFEs... and anything that can't be read correctly, just in case
			if (this.dataCache.Learnsets[id] && this.dataCache.Learnsets[id].learnset) {
				printno++;

				// setup for the categories that I am currently using
				// entire competitive physical movepool
				const physStab1: string[] = [];
				const physStab2: string[] = []; // will display in the same cell separated by a semicolon
				const physCoverage: string[] = []; // moves that hit either the Pokémon's walls or its weaknesses super effectively
				const physTech: string[] = []; // moves that hit unique types super effectively in neutral matchups
				// entire competitive special movepool
				const specStab1: string[] = [];
				const specStab2: string[] = []; // will display in the same cell separated by a semicolon
				const specCoverage: string[] = [];
				const specTech: string[] = [];
				// entire competitive utility movepool
				const utilitySelf: string[] = [];
				const doublesSelf: string[] = []; // will display in the same cell separated by a semicolon
				const utilityDisrupt: string[] = [];
				const doublesDisrupt: string[] = []; // will display in the same cell separated by a semicolon
				const utilitySupport: string[] = [];
				const doublesSupport: string[] = []; // will display in the same cell separated by a semicolon
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
				console.log("Wall types: " + wallTypes);
				console.log("Weakness types: " + weaknessTypes);
				console.log("Type advantages: " + typeAdvantages);
				console.log("Offensive coverage: " + offenseCoverage);
				console.log("Weakness coverage: " + weaknessCoverage);
				console.log("Other coverage: " + otherCoverage);
				return;

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
					
					let competitive = false;
					let stab1 = false;
					let stab2 = false;
					let coverage = false;
					let tech = false;
					let uSelf = false;
					let dSelf = false;
					let uDisrupt = false;
					let dDisrupt = false;
					let uSupport = false;
					let dSupport = false;
					if (attackRMs.includes(moveid)) {
						if (move.type === poke.types[0]) stab1 = competitive = true;
						if (poke.types[1] && move.type === poke.types[1]) stab2 = competitive = true;
						if (offenseCoverage.includes(move.type) || weaknessCoverage.includes(move.type)) coverage = competitive = true;
						if (otherCoverage.includes(move.type)) tech = competitive = true;
					}
					if (utilitySelfRMs.includes(moveid)) uSelf = competitive = true;
					// if (doublesSelfRMs.includes(moveid)) dSelf = competitive = true;
					if (utilityDisruptRMs.includes(moveid)) uDisrupt = competitive = true;
					if (doublesDisruptRMs.includes(moveid)) dDisrupt = competitive = true;
					if (utilitySupportRMs.includes(moveid)) uSupport = competitive = true;
					if (doublesSupportRMs.includes(moveid)) dSupport = competitive = true;

					if (competitive) {
						if (authentic) {
							// offensive movepool
							if (moveid === 'multiattack') physStab1.push(move.name);
							else if (moveid === 'naturalgift') physCoverage.push(move.name);
							else if (moveid === 'judgment' || moveid === 'revelationdance') specStab1.push(move.name);
							else if (moveid === 'naturalgift') physCoverage.push(move.name);
							else if (
								moveid === 'hiddenpower' || moveid === 'naturepower' || moveid === 'technoblast' || moveid === 'terrainpulse' || moveid === 'weatherball'
							) specCoverage.push(move.name);
							else if (stab1 && move.category === 'Physical') physStab1.push(move.name);
							else if (stab1 && move.category === 'Special') specStab1.push(move.name);
							else if (stab2 && move.category === 'Physical') physStab2.push(move.name);
							else if (stab2 && move.category === 'Special') specStab2.push(move.name);
							else if (coverage && move.category === 'Physical') physCoverage.push(move.name);
							else if (coverage && move.category === 'Special') specCoverage.push(move.name);
							else if (tech && move.category === 'Physical') physTech.push(move.name);
							else if (tech && move.category === 'Special') specTech.push(move.name);
							// utility movepool (the same move CAN be listed twice)
							if (uSelf) utilitySelf.push(move.name);
							else if (dSelf) doublesSelf.push(move.name);
							if (uDisrupt) utilityDisrupt.push(move.name);
							else if (dDisrupt) doublesDisrupt.push(move.name);
							if (uSupport) utilitySupport.push(move.name);
							else if (dSupport) doublesSupport.push(move.name);
						} else {
							if (move.category === 'Physical') fringePhys.push(move.name);
							if (move.category === 'Special') fringeSpec.push(move.name);
							if (move.category === 'Status') fringeStatus.push(move.name);
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
					if (poke2.abilities[0]) poke2abilities += `${this.dataCache.Abilities[this.toID(poke2.abilities[0])].name}`;
					if (poke2.abilities[1]) poke2abilities += ` / ${this.dataCache.Abilities[this.toID(poke2.abilities[1])].name}`;
					if (poke2.abilities['H']) poke2abilities += ` // ${this.dataCache.Abilities[this.toID(poke2.abilities['H'])].name}`;
					if (poke2.abilities['S']) poke2abilities += ` // (${this.dataCache.Abilities[this.toID(poke2.abilities['S'])].name})`;
					var poke2name = poke2.name.toLowerCase();
					poke2id = poke2name.replace(" ", `-`).replace(`.`, ``).replace(`:`, ``).replace(`\u2019`, ``); // to get rid of spaces and periods
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
					var poke3name = poke3.name.toLowerCase();
					poke3id = poke3name.replace(" ", `-`).replace(`.`, ``).replace(`:`, ``).replace(`\u2019`, ``); // to get rid of spaces and periods
				}

				// competitive movepools now
				const physLine1: string[] = [physStab1 + (physStab1 && physStab2 ? ";" : "") + physStab2];
				const specLine1: string[] = [specStab1 + (specStab1 && specStab2 ? ";" : "") + specStab2];
				const utilLine1: string[] = [utilitySelf + (utilitySelf && doublesSelf ? ";" : "") + doublesSelf];
				const utilLine2: string[] = [utilityDisrupt + (utilityDisrupt && doublesDisrupt ? ";" : "") + doublesDisrupt];
				const utilLine3: string[] = [utilitySupport + (utilitySupport && doublesSupport ? ";" : "") + doublesSupport];

				// finalize sheetOutput now.........
				const sheetOutput: string[] = [
					(poke3 ? (printno) + `~1~=IMAGE("https://www.smogon.com/forums//media/minisprites/` + poke3id + `.png",3)~` + poke3.name + "~" + poke3.types[0] + "~" + (poke3.types[1] ? poke3.types[1] : "") + "~" + poke3abilities + "~~~~~~" + poke3.baseStats.hp + "~" + poke3.baseStats.atk + "~" + poke3.baseStats.def + "~" + poke3.baseStats.spa + "~" + poke3.baseStats.spd + "~" + poke3.baseStats.spe + "~" + `\n` : "")
					+ (poke2 ? (printno) + `~2~=IMAGE("https://www.smogon.com/forums//media/minisprites/` + poke2id + `.png",3)~` + poke2.name + "~" + poke2.types[0] + "~" + (poke2.types[1] ? poke2.types[1] : "") + "~" + poke2abilities + "~~~~~~" + poke2.baseStats.hp + "~" + poke2.baseStats.atk + "~" + poke2.baseStats.def + "~" + poke2.baseStats.spa + "~" + poke2.baseStats.spd + "~" + poke2.baseStats.spe + "~" + `\n` : "")
					+ (printno) + `~3~=IMAGE("https://www.smogon.com/forums//media/minisprites/` + iconid + `.png",3)~` + poke.name + "~" + poke.types[0] + "~" + (poke.types[1] ? poke.types[1] : "") + "~" + abilities + "~~~~~~" + poke.baseStats.hp + "~" + poke.baseStats.atk + "~" + poke.baseStats.def + "~" + poke.baseStats.spa + "~" + poke.baseStats.spd + "~" + poke.baseStats.spe + "~" + `\n`
					+ (printno) + `~4~\n`
					+ (printno) + "~5~Physical~~~Special~~~~~~Utility~~~~~~~" + `\n`
					+ (printno) + "~6~" + physLine1 + "~~~" + specLine1 + "~~~~~~" + utilLine1 + "~~~~~~~" + `\n`
					+ (printno) + "~7~" + physCoverage + "~~~" + specCoverage + "~~~~~~" + utilLine2 + "~~~~~~~" + `\n`
					+ (printno) + "~8~" + physTech + "~~~" + specTech + "~~~~~~" + utilLine3 + "~~~~~~~" + `\n`
					+ (printno) + "~9~(" + fringePhys + ")~~~(" + fringeSpec + ")~~~~~~(" + fringeStatus + ")~~~~~~~" + `\n`
					+ (printno) + "~10~" + flavorPhys + "~~~" + flavorSpec + "~~~~~~" + flavorStatus + "~~~~~~~" + `\n`
					+ (printno) + "~11~(" + flavorFringePhys + ")~~~(" + flavorFringeSpec + ")~~~~~~(" + flavorFringeStatus + ")~~~~~~~" + `\n`
					+ (printno) + "~12~"
				];
				
				poke.sheetOutput = sheetOutput;
			}
		}
	},
};
