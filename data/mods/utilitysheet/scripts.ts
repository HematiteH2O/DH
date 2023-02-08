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
			'chargebeam', 'cut', 'defog', 'dig', 'dive', 'doubleteam', 'dracometeor', 'dracometeor', 'dragonascent', 'dragonpulse', 'dragontail',
			'drainingkiss', 'dreameater', 'earthpower', 'endeavor', 'endure', 'firepledge', 'firepunch', 'flash', 'fly', 'foulplay', 'frenzyplant', 'furycutter',
			'gastroacid', 'grassknot', 'grasspledge', 'gravity', 'gunkshot', 'healbell', 'heatwave', 'helpinghand', 'hydrocannon', 'hypervoice', 'icepunch', 'icywind',
			'incinerate', 'irondefense', 'ironhead', 'irontail', 'knockoff', 'lastresort', 'lowkick', 'magnetrise', 'meteorbeam', 'mudslap', 'naturalgift', 'nosedive',
			'ominouswind', 'outrage', 'painsplit', 'payback', 'playrough', 'pluck', 'poisonjab', 'poltergeist', 'psychup', 'recycle', 'relicsong', 'rockclimb',
			'rocksmash', 'roleplay', 'rollout', 'secretpower', 'secretsword', 'seedbomb', 'shadowclaw', 'signalbeam', 'silverwind', 'skillswap', 'skyattack',
			'sleightofhand', 'snore', 'spite', 'stealthrock', 'steelbeam', 'steelbeam', 'stompingtantrum', 'strength', 'stringshot', 'suckerpunch', 'superfang',
			'superpower', 'swift', 'synthesis', 'tailwind', 'thunderpunch', 'trick', 'twister', 'uproar', 'vcreate', 'vacuumwave', 'volttackle', 'waterpledge',
			'waterpulse', 'waterfall', 'worryseed', 'zenheadbutt',
		]; // excludes Captivate
		const movepoolSections = {
			Status: [
				'aftershock', 'banefulbunker', 'beakblast', 'bittermalice', 'bodyslam', 'darkvoid', 'direclaw', 'glare', 'hypnosis', 'infernalparade', 'lovelykiss', 'nuzzle',
				'rashpowder', 'sacredfire', 'saltcure', 'scald', 'scorchingsands', 'sleeppowder', 'spore', 'stunspore', 'thunderwave', 'toxicthread', 'willowisp'
			],
			Cleric: [
				'aromatherapy', 'catharsis', 'healbell', 'junglehealing', 'lunarblessing', 'refresh', 'takeheart',
			],
			Recovery: [
				'healorder', 'leechseed', 'milkdrink', 'moonlight', 'morningsun', 'painsplit', 'recover', 'revivalblessing', 'roost', 'shoreup', 'slackoff', 'softboiled',
				'strengthsap', 'synthesis', 'wish',
			],
			FieldControl: [
				'auroraveil', 'backstab', 'ceaselessedge', 'contaminate', 'courtchange', 'creepingivy', 'defog', 'lightscreen', 'lushmoss', 'mortalspin', 'psyshieldbash',
				'rapidspin', 'reflect', 'snowshovel', 'spikes', 'stealthrock', 'stickyweb', 'stoneaxe', 'tidyup', 'toxicspikes', 'tripwire',
			],
			Setup: [
				'acidarmor', 'acupressure', 'agility', 'amnesia', 'aquastep', 'aurawheel', 'autotomize', 'barrier', 'bellydrum', 'bloodboil', 'bulkup', 'calmmind',
				'clangoroussoul', 'coil', 'cosmicpower', 'cottonguard', 'curse', 'defendorder', 'diamondstorm', 'dragondance', 'filletaway', 'flamecharge', 'geomancy',
				'growth', 'honeclaws', 'irondefense', 'metamorphosis', 'nastyplot', 'noretreat', 'quiverdance', 'rockpolish', 'runningstart', 'shellsmash', 'shelter',
				'shiftgear', 'stockpile', 'stuffcheeks', 'surgingstrikes', 'swordsdance', 'tailglow', 'takeheart', 'trailblaze', 'triplearrows', 'victorydance',
			],
			SetupControl: [
				'circlethrow', 'clearsmog', 'dragontail', 'haze', 'heartswap', 'perishsong', 'revolvingdoorslam', 'roar', 'topsyturvy', 'whirlwind', 'yawn',
			],
			ItemControl: [
				'corrosivegas', 'covet', 'knockoff', 'shadydeal', 'switcheroo', 'thief', 'trick',
			],
			MoveBinding: [
				'anchorshot', 'block', 'destinybond', 'disable', 'encore', 'fairylock', 'firespin', 'infestation', 'jawlock', 'magnetrise', 'meanlook', 'octolock', 'powder',
				'provoke', 'reverb', 'sandtomb', 'spiderweb', 'spiritshackle', 'stickyfloor', 'taunt', 'thousandwaves', 'thundercage',
			],
			FixedDamage: [
				'counter', 'dragonrage', 'finalgambit', 'fissure', 'guillotine', 'horndrill', 'mirrorcoat', 'naturesmadness', 'nightshade', 'ruination', 'seismictoss',
				'sheercold', 'sonicboom', 'superfang',
			],
			Momentum: [
				'batonpass', 'chillyreception', 'explosion', 'flipturn', 'healingwish', 'memento', 'partingshot', 'pyrotechnics', 'selfdestruct', 'shedtail', 'teleport',
				'uturn', 'voltswitch',
			],
			DoublesDisrupt: [
				'acidspray', 'blackmail', 'breakingswipe', 'bulldoze', 'captivate', 'charm', 'constrict', 'cottonspore', 'demolition', 'detect', 'drumbeating', 'eerieimpulse',
				'electroweb', 'esperwing', 'fakeout', 'faketears', 'featherdance', 'feint', 'fissurevent', 'fog', 'hyperdrill', 'hyperspacefury', 'hyperspacehole', 'icywind',
				'imprison', 'incinerate', 'kingsshield', 'luminacrash', 'matblock', 'obstruct', 'phantomforce', 'poisongas', 'psychout', 'quickguard', 'sabotage', 'screech',
				'shelltrap', 'silktrap', 'skydrop', 'snarl', 'snatch', 'spikyshield', 'splashzone', 'stringshot', 'strugglebug', 'wideguard',
			],
			DoublesSupport: [
				'allyswitch', 'beatup', 'cleansingwave', 'coaching', 'decorate', 'doodle', 'entrainment', 'extendinghand', 'followme', 'gravity', 'healpulse', 'helpinghand',
				'instruct', 'lifedew', 'pollenpuff', 'ragepowder', 'reversalroom', 'simplebeam', 'skillswap', 'soak', 'soothingwave', 'spicyextract', 'tailwind', 'tideturn',
				'trickroom', 'windshear',
			],
			Flavor: [],
		}; // provisional

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
			'brine', 'bugbuzz', 'bulletpunch', 'bulletseed', 'burnup', 'burningjealousy', 'catharsis', 'ceaselessedge', 'chargebeam', 'chloroblast',
			'circuitbreak', 'clangingscales', 'clearsmog', 'clockworkcannon', 'closecombat', 'collisioncourse', 'constrict', 'cooldown', 'coreenforcer', 'crabhammer',
			'crosschop', 'crosspoison', 'crunch', 'crushgrip', 'darkpulse', 'darkestlariat', 'dazzlinggleam', 'demolition', 'diamondstorm', 'direclaw', 'discharge',
			'doomdesire', 'doubleedge', 'doubleironbash', 'doubleshock', 'dracometeor', 'dragonascent', 'dragonclaw', 'dragondarts', 'dragonenergy', 'dragonhammer',
			'dragonpulse', 'drainpunch', 'drainingkiss', 'dreameater', 'drillpeck', 'drillrun', 'drumbeating', 'dualchop', 'dualwingbeat', 'dynamaxcannon',
			'earthpower', 'earthquake', 'eeriespell', 'electrodrift', 'energyball', 'eruption', 'esperwing', 'eternabeam', 'expandingforce', 'explosion', 'extrasensory',
			'extremespeed', 'facade', 'fakeout', 'falsesurrender', 'faustianbargain', 'fierydance', 'fierywrath', 'finalbreath', 'fireblast', 'firefang', 'firelash',
			'firepunch', 'firstimpression', 'fishiousrend', 'flameburst', 'flamethrower', 'flareblitz', 'flashcannon', 'fleurcannon', 'flipturn', 'flowertrick', 'fly',
			'flyingpress', 'focusblast', 'focuspunch', 'foulplay', 'freezedry', 'freezeshock', 'freezingglare', 'frostbreath', 'frustration', 'fusionbolt', 'fusionflare',
			'futuresight', 'gatheringswarm', 'geargrind', 'gigadrain', 'gigatonhammer', 'glaciallance', 'glaciate', 'glaiverush', 'grassknot', 'grassyglide', 'gravapple',
			'groundbreak', 'gunkshot', 'gyroball', 'hammerarm', 'headcharge', 'headsmash', 'headlongrush', 'heatwave', 'hex', 'highhorsepower',
			'highjumpkick', 'hivecall', 'hornleech', 'hurricane', 'hydropump', 'hyperdrill', 'hypervoice', 'hyperspacefury', 'hyperspacehole', 'icebeam', 'iceburn',
			'icefang', 'icehammer', 'icepunch', 'iceshard', 'icespinner', 'iciclecrash', 'iciclespear', 'incinerate', 'infernalparade', 'ironhead', 'irontail', 'jawlock',
			'jetpunch', 'judgment', 'jumpkick', 'knockoff', 'kowtowcleave', 'landswrath', 'lashout', 'lastrespects', 'lavaplume', 'leafblade', 'leafstorm', 'leechlife',
			'lightofruin', 'liquefy', 'liquidation', 'lowkick', 'luminacrash', 'lunge', 'lusterpurge', 'machpunch', 'magmastorm', 'makeitrain', 'megahorn',
			'meteorassault', 'meteorbeam', 'meteormash', 'miasma', 'mindblown', 'mistball', 'mistyexplosion', 'moonblast', 'moongeistbeam', 'mountaingale',
			'muddywater', 'multiattack', 'mysticalfire', 'mysticalpower', 'naturepower', 'nightdaze', 'nightslash', 'nosedive', 'oblivionwing', 'oilfire',
			'orderup', 'originpulse', 'outrage', 'overdrive', 'overheat', 'overload', 'parasite', 'petalblizzard', 'petaldance', 'phantomforce', 'photongeyser',
			'piledriver', 'pinmissile', 'plasmafists', 'playrough', 'poisonjab', 'pollenpuff', 'poltergeist', 'populationbomb', 'powergem', 'powertrip', 'poweruppunch',
			'powerwhip', 'precipiceblades', 'prismaticlaser', 'provoke', 'psychout', 'psychic', 'psychicfangs', 'psychoboost', 'psychocut', 'psyshieldbash', 'psyshock',
			'psystrike', 'pursuit', 'pyroball', 'quickattack', 'ragefist', 'ragingbull', 'rampageinstinct', 'rapidspin', 'razorshell', 'razorwind', 'relicsong',
			'reputation', 'return', 'revelationdance', 'reversal', 'revolvingdoorslam', 'riposte', 'risingvoltage', 'roaroftime', 'rockblast', 'rockslide', 'rockthrow',
			'rockwrecker', 'roilingwaves', 'rollout', 'runningbolt', 'sacredfire', 'sacredsword', 'saltcure', 'sandsearstorm', 'scald', 'scaleshot', 'scorchingsands',
			'searingshot', 'secretsword', 'seedbomb', 'seedflare', 'selfdestruct', 'shadowball', 'shadowbone', 'shadowclaw', 'shadowforce', 'shadowsneak', 'shadydeal',
			'shellsidearm', 'shelltrap', 'signalbeam', 'silverwind', 'skittersmack', 'skyattack', 'skyuppercut', 'sleightofhand', 'sludgebomb', 'sludgewave',
			'smartstrike', 'smellingsalts', 'snipeshot', 'snowshovel', 'solarbeam', 'solarblade', 'spacialrend', 'spark', 'sparklingaria', 'spectralthief', 'spiderweb',
			'spikyshield', 'spinout', 'spiritbreak', 'spiritshackle', 'spitup', 'splashzone', 'springtidestorm', 'steameruption', 'steelbeam', 'steelroller',
			'stompingtantrum', 'stoneaxe', 'stoneedge', 'storedpower', 'stormthrow', 'strangesteam', 'suckerpunch', 'sunsteelstrike', 'superpower', 'surf',
			'surgingstrikes', 'surpriseattack', 'switchflip', 'synchronoise', 'teardown', 'technoblast', 'terrainpulse', 'testingstrike', 'thousandarrows',
			'thousandwaves', 'throatchop', 'thunder', 'thundercage', 'thunderfang', 'thunderpunch', 'thunderbolt', 'thunderouskick', 'torchsong', 'triattack',
			'triplearrows', 'tripleaxel', 'triplekick', 'tropkick', 'trumpcard', 'undermine', 'uturn', 'vacuumwave', 'vcreate', 'voltswitch', 'volttackle',
			'watershuriken', 'waterspout', 'waterfall', 'wavecrash', 'weatherball', 'wickedblow', 'wildcharge', 'wildboltstorm', 'windshear', 'woodhammer', 'xscissor',
			'zenheadbutt', 'zingzap'
		]; // this category doesn't need to distinguish physical from special! that's handled later
		// excludes Hidden Power and Natural Gift

		let printno = 0;
		for (const id in this.dataCache.Pokedex) {
			const poke = this.dataCache.Pokedex[id];
			if (!poke || poke.evos) continue; // skip NFEs... and anything that can't be read correctly, just in case
			if (this.dataCache.Learnsets[id] && this.dataCache.Learnsets[id].learnset) {
				printno++;
				poke.learnsetCumulative = {};
				for (const moveType in this.dataCache.TypeChart) {
					poke.learnsetCumulative[moveType] = {
						Physical: {
							natural: [],
							tmTutor: [],
							fringe: [],
						},
						Special: {
							natural: [],
							tmTutor: [],
							fringe: [],
						},
					};
				}
				for (const section in movepoolSections) {
					poke.learnsetCumulative[section] = {
						Moves: {
							natural: [],
							tmTutor: [],
							fringe: [],
						},
					};
				}

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
					let learnedNatural = false;
					let learnedTmTutor = pulseTms.includes(moveid) || pulseTutors.includes(moveid);
					if (learnset[moveid]) { // if it learns the move itself
						for (const source of learnset[moveid]) {
							learned = true;
							if (
								(parseInt(source.charAt(0)) === pokeGen && pokeGen > 3) ||
								(parseInt(source.charAt(0)) === moveGen && moveGen > 3) ||
								parseInt(source.charAt(0)) === 4
							) {
								if (source.charAt(1) === 'L' || source.charAt(1) === 'E') learnedNatural = true;
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
								if (source.charAt(1) === 'L' || source.charAt(1) === 'E') learnedNatural = true;
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
								if (source.charAt(1) === 'L' || source.charAt(1) === 'E') learnedNatural = true;
							}
						}
					}
					if (learnset4 && learnset4[moveid]) { // for stuff like Rotom
						for (const source of learnset4[moveid]) {
							learned = true;
							if (
								(parseInt(source.charAt(0)) === pokeGen && pokeGen > 3) ||
								(parseInt(source.charAt(0)) === moveGen && moveGen > 3) ||
								parseInt(source.charAt(0)) === 4
							) {
								if (source.charAt(1) === 'L' || source.charAt(1) === 'E') learnedNatural = true;
							}
						}
					}
					if (!learned) continue;

					// okay, so we know the move! now we need to figure out where it goes
					let competitive = false;
					
					if (attackRMs.includes(moveid)) {
						// what type is it?
						const type = (moveid === 'judgment' || moveid === 'multiattack' || moveid === 'ragingbull' || moveid === 'revelationdance') ? poke.types[0] : move.type;
						const category = (move.category === 'Special' || moveid === 'naturepower') ? "Special" : "Physical";
						// assume a status move ended up physical if its category changed
						if (
							poke.types[0] === type || (poke.types[1] && poke.types[1] === type) || offenseCoverage.includes(type) || weaknessCoverage.includes(type)
							|| otherCoverage.includes(type) || moveid === 'naturepower' || moveid === 'technoblast' || moveid === 'terrainpulse' || moveid === 'weatherball'
							|| moveid === 'fakeout' || moveid === 'feint'
						) { // for attacking moves, proceed only if the move's type has any potential to be relevant (but including the Normal moves that defy type)
							competitive = true;
							if (learnedNatural) poke.learnsetCumulative[type][category].natural.push(move.name);
							if (learnedTmTutor) poke.learnsetCumulative[type][category].tmTutor.push(move.name);
							if (!learnedNatural && !learnedTmTutor) poke.learnsetCumulative[type][category].fringe.push(move.name);
						}
					}
					for (const section in movepoolSections) {
						if (movepoolSections[section].includes(moveid)) {
							competitive = true;
							if (learnedNatural) poke.learnsetCumulative[section].Moves.natural.push(move.name);
							if (learnedTmTutor) poke.learnsetCumulative[section].Moves.tmTutor.push(move.name);
							if (!learnedNatural && !learnedTmTutor) poke.learnsetCumulative[section].Moves.fringe.push(move.name);
						}
					}

					if (!competitive) {
						// push the move's name to the appropriate categories
						if (learnedNatural) poke.learnsetCumulative.Flavor.Moves.natural.push(move.name);
						if (learnedTmTutor) poke.learnsetCumulative.Flavor.Moves.tmTutor.push(move.name);
						if (!learnedNatural && !learnedTmTutor) poke.learnsetCumulative.Flavor.Moves.fringe.push(move.name);
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

				// finalize sheetOutput now.........
				let sheetOutput: string[] = [
					(poke3 ? (printno) + `~1~=IMAGE("https://www.smogon.com/forums//media/minisprites/` + poke3id + `.png",3)~~` + poke3.name + "~" + poke3.types[0] + "~" + (poke3.types[1] ? poke3.types[1] : "") + "~" + poke3abilities + "~~~~~~" + poke3.baseStats.hp + "~" + poke3.baseStats.atk + "~" + poke3.baseStats.def + "~" + poke3.baseStats.spa + "~" + poke3.baseStats.spd + "~" + poke3.baseStats.spe + "~" + `\n` : "")
					+ (poke2 ? (printno) + `~2~=IMAGE("https://www.smogon.com/forums//media/minisprites/` + poke2id + `.png",3)~~` + poke2.name + "~" + poke2.types[0] + "~" + (poke2.types[1] ? poke2.types[1] : "") + "~" + poke2abilities + "~~~~~~" + poke2.baseStats.hp + "~" + poke2.baseStats.atk + "~" + poke2.baseStats.def + "~" + poke2.baseStats.spa + "~" + poke2.baseStats.spd + "~" + poke2.baseStats.spe + "~" + `\n` : "")
					+ (printno) + `~3~=IMAGE("https://www.smogon.com/forums//media/minisprites/` + iconid + `.png",3)~~` + poke.name + "~" + poke.types[0] + "~" + (poke.types[1] ? poke.types[1] : "") + "~" + abilities + "~~~~~~" + poke.baseStats.hp + "~" + poke.baseStats.atk + "~" + poke.baseStats.def + "~" + poke.baseStats.spa + "~" + poke.baseStats.spd + "~" + poke.baseStats.spe + "~" + `\n`
					+ (printno) + `~4~\n`
					+ (printno) + "~5~~~Natural~~~TM and Tutor~~Fringe" + `\n`
				];
				if (poke.types[0]) {
					const moveType = poke.types[0];
					if (
						poke.learnsetCumulative[moveType].Physical.natural || poke.learnsetCumulative[moveType].Physical.tmTutor || poke.learnsetCumulative[moveType].Physical.fringe
					) {
						sheetOutput += (printno) + "~6~" + moveType + "~Physical~" + (poke.learnsetCumulative[moveType].Physical.natural || "") + "~~~" + (poke.learnsetCumulative[moveType].Physical.tmTutor || "") + "~~" + (poke.learnsetCumulative[moveType].Physical.fringe || "") + "" + `\n`;
					}
					if (
						poke.learnsetCumulative[moveType].Special.natural || poke.learnsetCumulative[moveType].Special.tmTutor || poke.learnsetCumulative[moveType].Special.fringe
					) {
						sheetOutput += (printno) + "~6~" + moveType + "~Special~" + (poke.learnsetCumulative[moveType].Special.natural || "") + "~~~" + (poke.learnsetCumulative[moveType].Special.tmTutor || "") + "~~" + (poke.learnsetCumulative[moveType].Special.fringe || "") + "" + `\n`;
					}
				}
				if (poke.types[1]) {
					const moveType = poke.types[1];
					if (
						poke.learnsetCumulative[moveType].Physical.natural !== [] || poke.learnsetCumulative[moveType].Physical.tmTutor !== [] || poke.learnsetCumulative[moveType].Physical.fringe !== []
					) {
						sheetOutput += (printno) + "~6~" + moveType + "~Physical~" + (poke.learnsetCumulative[moveType].Physical.natural || "") + "~~~" + (poke.learnsetCumulative[moveType].Physical.tmTutor || "") + "~~" + (poke.learnsetCumulative[moveType].Physical.fringe || "") + "" + `\n`;
					}
					if (
						poke.learnsetCumulative[moveType].Special.natural !== [] || poke.learnsetCumulative[moveType].Special.tmTutor !== [] || poke.learnsetCumulative[moveType].Special.fringe !== []
					) {
						sheetOutput += (printno) + "~6~" + moveType + "~Special~" + (poke.learnsetCumulative[moveType].Special.natural || "") + "~~~" + (poke.learnsetCumulative[moveType].Special.tmTutor || "") + "~~" + (poke.learnsetCumulative[moveType].Special.fringe || "") + "" + `\n`;
					}
				}
				for (const moveType in this.dataCache.TypeChart) {
					if (poke.types[0] === moveType || (poke.types[1] && poke.types[1] === moveType)) continue;
					if (
						poke.learnsetCumulative[moveType].Physical.natural !== [] || poke.learnsetCumulative[moveType].Physical.tmTutor !== [] || poke.learnsetCumulative[moveType].Physical.fringe !== []
					) {
						sheetOutput += (printno) + "~6~" + moveType + "~Physical~" + (poke.learnsetCumulative[moveType].Physical.natural || "") + "~~~" + (poke.learnsetCumulative[moveType].Physical.tmTutor || "") + "~~" + (poke.learnsetCumulative[moveType].Physical.fringe || "") + "" + `\n`;
					}
					if (
						poke.learnsetCumulative[moveType].Special.natural !== [] || poke.learnsetCumulative[moveType].Special.tmTutor !== [] || poke.learnsetCumulative[moveType].Special.fringe !== []
					) {
						sheetOutput += (printno) + "~6~" + moveType + "~Special~" + (poke.learnsetCumulative[moveType].Special.natural || "") + "~~~" + (poke.learnsetCumulative[moveType].Special.tmTutor || "") + "~~" + (poke.learnsetCumulative[moveType].Special.fringe || "") + "" + `\n`;
					}
				}
				for (const section in movepoolSections) {
					if (poke.learnsetCumulative[section].Moves.natural !== [] || poke.learnsetCumulative[section].Moves.tmTutor !== [] || poke.learnsetCumulative[section].Moves.fringe !== []) {
						sheetOutput += (printno) + "~7~" + section + "~~" + (poke.learnsetCumulative[section].Moves.natural || "") + "~~~" + (poke.learnsetCumulative[section].Moves.tmTutor || "") + "~~" + (poke.learnsetCumulative[section].Moves.fringe || "") + "" + `\n`;
					}
				}
				sheetOutput += (printno) + "~8~";
				
				poke.sheetOutput = sheetOutput;
			}
		}
	},
};
