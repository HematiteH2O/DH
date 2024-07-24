export const Scripts: ModdedBattleScriptsData = {
	init() {
		const ondasDexDraft = [
			"Raichu", "Nidoqueen", "Nidoking", "Vileplume", "Slowbro", "Exeggutor", "Marowak", "Kangaskhan", "Starmie", "Jynx", "Gyarados", "Vaporeon", "Jolteon", "Flareon", "Lanturn", "Ampharos", "Bellossom", "Espeon", "Umbreon", "Slowking", "Heracross", "Magcargo", "Corsola", "Delibird", "Skarmory", "Houndoom", "Kingdra", "Smeargle", "Tyranitar", "Ludicolo", "Gardevoir", "Masquerain", "Ninjask", "Shedinja", "Exploud", "Delcatty", "Sableye", "Mawile", "Manectric", "Sharpedo", "Wailord", "Camerupt", "Torkoal", "Flygon", "Cacturne", "Altaria", "Zangoose", "Seviper", "Claydol", "Castform", "Banette", "Absol", "Huntail", "Gorebyss", "Bibarel", "Kricketune", "Roserade", "Vespiquen", "Cherrim", "Drifblim", "Honchkrow", "Skuntank", "Bronzong", "Lucario", "Toxicroak", "Lumineon", "Abomasnow", "Leafeon", "Glaceon", "Gallade", "Rotom", "Musharna", "Unfezant", "Gigalith", "Conkeldurr", "Leavanny", "Scolipede", "Crustle", "Scrafty", "Sigilyph", "Zoroark", "Cinccino", "Reuniclus", "Swanna", "Vanilluxe", "Sawsbuck", "Jellicent", "Klinklang", "Chandelure", "Cryogonal", "Druddigon", "Golurk", "Mandibuzz", "Heatmor", "Durant", "Hydreigon", "Volcarona", "Diggersby", "Gogoat", "Furfrou", "Aromatisse", "Slurpuff", "Barbaracle", "Dragalge", "Clawitzer", "Heliolisk", "Sylveon", "Klefki", "Ribombee", "Lycanroc", "Lycanroc-Midnight", "Lycanroc-Dusk", "Wishiwashi", "Mudsdale", "Araquanid", "Salazzle", "Bewear", "Oranguru", "Passimian", "Mimikyu", "Dhelmise", "Toxtricity", "Toxtricity-Low-Key", "Grimmsnarl", "Falinks", "Pincurchin", "Frosmoth", "Stonjourner", "Eiscue", "Indeedee", "Indeedee-F", "Archaludon", "Oinkologne", "Oinkologne-F", "Pawmot", "Maushold", "Arboliva", "Garganacl", "Armarouge", "Ceruledge", "Kilowattrel", "Mabosstiff", "Grafaiai", "Rabsca", "Bombirdier", "Palafin", "Revavroom", "Glimmora", "Houndstone", "Cetitan",
			"Cloyster", "Cursola", "Simisage", "Simisear", "Simipour", // later additions
			"Palossand", "Garbodor", "Drampa", "Turtonator", "Tinkaton", "Basculegion", "Basculegion-F", "Noivern", // even later additions
			"Magmortar", "Shuckle", "Drapion", "Runerigus", "Tsareena", "Gholdengo", // additions for variant lines
		];
		const ondasTms = [
			'adrenalinerush', 'aerialace', 'aftershock', 'aircurrent', 'attract', 'blizzard', 'bloodboil', 'brickbreak', 'bulkup', 'bulldoze', 'calmmind', 'darkpulse',
			'dazzlinggleam', 'dragonclaw', 'drainpunch', 'earthquake', 'embargo', 'energyball', 'expiration', 'explosion', 'facade', 'falseswipe', 'fireblast', 'flamecharge',
			'flamethrower', 'flashcannon', 'fling', 'focusblast', 'focuspunch', 'frustration', 'gigadrain', 'gigaimpact', 'gyroball', 'hail', 'hiddenpower',
			'hyperbeam', 'icebeam', 'lastwill', 'lightscreen', 'liquidation', 'magiccoat', 'naturepower', 'oilfire', 'overheat', 'piledriver', 'poweruppunch',
			'protect', 'psychic', 'psyshock', 'quash', 'raindance', 'reflect', 'reputation', 'rest', 'retaliate', 'return', 'revolvingdoorslam', 'risingvoltage', 'roar',
			'rockpolish', 'rockslide', 'rocktomb', 'roost', 'safeguard', 'sandstorm', 'scald', 'scorchingsands', 'shadowball', 'shockwave', 'skydrop', 'sleeptalk',
			'sludgebomb', 'snarl', 'snatch', 'solarbeam', 'splashzone', 'steelwing', 'stoneedge', 'substitute', 'sunnyday', 'surf', 'swagger',
			'swordsdance', 'taunt', 'thief', 'thunder', 'thunderwave', 'thunderbolt', 'torment', 'trickroom', 'uturn', 'voltswitch', 'wildcharge', 'willowisp',
			'windshear', 'workup', 'xscissor',
			'trashtalk', 'infestation', 'psychicnoise', // late additions
		];
		const ondasTutors = [
			'acidspray', 'aircutter', 'ancientpower', 'aquatail', 'blastburn', 'block', 'bodypress', 'bounce', 'brine', 'bugbite', 'bulletseed',
			'burningjealousy', 'chargebeam', 'cut', 'defog', 'dig', 'dive', 'doubleteam', 'dracometeor', 'dracometeor', 'dragonascent', 'dragonpulse', 'dragontail',
			'drainingkiss', 'dreameater', 'earthpower', 'endeavor', 'endure', 'firepledge', 'firepunch', 'flash', 'fly', 'foulplay', 'frenzyplant', 'furycutter',
			'gastroacid', 'grassknot', 'grasspledge', 'gravity', 'gunkshot', 'healbell', 'heatwave', 'helpinghand', 'hydrocannon', 'hypervoice', 'icepunch', 'icywind',
			'incinerate', 'irondefense', 'ironhead', 'irontail', 'knockoff', 'lastresort', 'lowkick', 'magnetrise', 'meteorbeam', 'mudslap', 'naturalgift', 'nosedive',
			'ominouswind', 'outrage', 'painsplit', 'payback', 'playrough', 'pluck', 'poisonjab', 'poltergeist', 'psychup', 'recycle', 'relicsong', 'rockclimb',
			'rocksmash', 'roleplay', 'rollout', 'secretpower', 'secretsword', 'seedbomb', 'shadowclaw', 'signalbeam', 'silverwind', 'skillswap', 'skyattack',
			'sleightofhand', 'snore', 'spite', 'stealthrock', 'steelbeam', 'steelbeam', 'stompingtantrum', 'strength', 'stringshot', 'suckerpunch', 'superfang',
			'superpower', 'swift', 'synthesis', 'tailwind', 'thunderpunch', 'trick', 'twister', 'uproar', 'vcreate', 'vacuumwave', 'volttackle', 'waterpledge',
			'waterpulse', 'waterfall', 'worryseed', 'zenheadbutt', 'powershift', 'risingstalk', 'risingheat', 'risingtide',
			// Ondas now
			'afteryou', 'lifedew', 'electroweb', 'gatheringswarm', 'soothingwave', 'sabotage', 'smackdown', 'spiritbreak',
			'snowplow', 'venoshock', 'groundbreak', 'leechlife', 'undermine', 'rampageinstinct', 'reverb', 'mixedblessing',
			'pyrotechnics', 'roilingwaves', 'overload', 'expandingforce', 'metamorphosis', 'lashout', 'steelroller', 'catharsis',
			'upperhand', 'chillingwater', 'rashreprisal', 'zenheadbutt', 'coldcomfort', 'dragoncheer', // late additions
		];
		const sinnohOnly = [ // haven't updated this in a bit - should double-check before I use it again
			'aircutter', 'ancientpower', 'block', 'brine', 'bugbite', 'bulletseed', 'chargebeam', 'cut', 'dig', 'dive', 'dreameater', 'endeavor', 'endure',
			'furycutter', 'gastroacid', 'irontail', 'lastresort', 'ominouswind', 'payback', 'playrough', 'pluck', 'powershift', 'psychup', 'recycle', 'rockclimb',
			'rocksmash', 'roleplay', 'rollout', 'secretpower', 'silverwind', 'skillswap', 'skyattack', 'strength', 'stringshot', 'suckerpunch', 'swift', 'twister',
			'uproar', 'vacuumwave', 'waterfall', 'worryseed', 'avalanche'
		];
		const notRealTutors = [
			'relicsong', 'blastburn', 'firepledge', 'vcreate', 'hydrocannon', 'waterpledge', 'volttackle', 'frenzyplant', 'grasspledge', 'secretsword', 'dragonascent',
		]; // don't show up as recommended if the Pokémon doesn't already get them
		const dexitedMoves = [
			'doubleteam', 'flash', 'kinesis', 'minimize', 'sandattack', 'smokescreen', 'snowscape', 'terablast',
		];

		// this bit is for establishing which moves are taught at each tutor:
		const etesalta = [
			'healbell', 'helpinghand', 'incinerate', 'chillingwater', 'electroweb', 'synthesis', 'icywind', 'upperhand', 'acidspray',
			'mudslap', 'tailwind', 'trick', 'gatheringswarm', 'stealthrock', 'soothingwind', 'dragontail', 'dragoncheer', 'sabotage',
			'irondefense', 'drainingkiss',
		];
		const manistral = [
			'afteryou', 'snore', 'burningjealousy', 'waterpulse', 'lifedew', 'magnetrise', 'rashreprisal', 'snowplow', 'bodypress',
			'venoshock', 'groundbreak', 'defog', 'gravity', 'leechlife', 'undermine', 'spite', 'rampageinstinct', 'foulplay', 'reverb',
			'mixedblessing',
		];
		const valledar = [
			'naturalgift', 'hypervoice', 'firepunch', 'heatwave', 'aquatail', 'thunderpunch', 'seedbomb', 'icepunch', 'lowkick', 'poisonjab',
			'earthpower', 'bounce', 'zenheadbutt', 'signalbeam', 'smackdown', 'shadowclaw', 'dragonpulse', 'knockoff', 'ironhead',
			'spiritbreak',
		];
		const coriallos = [
			'superfang', 'painsplit', 'pyrotechnics', 'roilingwaves', 'overload', 'grassknot', 'coldcomfort', 'superpower', 'gunkshot',
			'stompingtantrum', 'nosedive', 'expandingforce', 'sleightofhand', 'metamorphosis', 'meteorbeam', 'poltergeist', 'outrage',
			'lashout', 'steelroller', 'catharsis',
		];
		const sinnohTutor = [
			'cut', 'rockclimb', 'strength', 'waterfall', 'rocksmash', 'secretpower', 'captivate', 'endure', 'psychup', 'recycle', 'brine',
			'chargebeam', 'bulletseed', 'avalanche', 'lowsweep', 'dig', 'pluck', 'dreameater', 'skillswap', 'bugbuzz', 'silverwind',
			'payback', 'nastyplot', 'irontail', 'dive', 'vacuumwave', 'aircutter', 'bugbite', 'furycutter', 'ominouswind', 'suckerpunch',
			'lastresort', 'swift', 'uproar', 'block', 'worryseed', 'roleplay', 'stringshot', 'endeavor', 'gastroacid', 'skyattack',
			'rollout', 'ancientpower', 'twister', 'powershift',
		]; // these are NOT in Ondas, but I still want a row of them at the end for my own convenience

		const movepoolSections = {
			Self: [
				// Recovery
				'healorder', 'leechseed', 'milkdrink', 'moonlight', 'morningsun', 'painsplit', 'recover', 'roost', 'shoreup', 'slackoff', 'softboiled',
				'strengthsap', 'synthesis',
				// Setup
				'acidarmor', 'acupressure', 'agility', 'amnesia', 'aquastep', 'aurawheel', 'autotomize', 'barrier', 'bellydrum', 'bloodboil', 'bulkup', 'calmmind',
				'clangoroussoul', 'coil', 'cosmicpower', 'cottonguard', 'curse', 'defendorder', 'diamondstorm', 'dragondance', 'filletaway', 'flamecharge', 'geomancy',
				'growth', 'honeclaws', 'irondefense', 'metamorphosis', 'nastyplot', 'noretreat', 'quiverdance', 'rockpolish', 'runningstart', 'shellsmash', 'shelter',
				'shiftgear', 'stockpile', 'stuffcheeks', 'surgingstrikes', 'swordsdance', 'tailglow', 'takeheart', 'trailblaze', 'triplearrows', 'victorydance',
				'meteorbeam', 'electroshot',
			],
			Disrupt: [
				// Status
				'aftershock', 'banefulbunker', 'beakblast', 'bittermalice', 'bodyslam', 'darkvoid', 'direclaw', 'glare', 'hypnosis', 'infernalparade', 'lovelykiss', 'nuzzle',
				'rashpowder', 'sacredfire', 'saltcure', 'scald', 'scorchingsands', 'sleeppowder', 'spore', 'stunspore', 'thunderwave', 'toxicthread', 'willowisp',
				'matchagotcha', 'burningbulwark', 'malignantchain',
				// Setup Control
				'circlethrow', 'clearsmog', 'dragontail', 'haze', 'heartswap', 'perishsong', 'revolvingdoorslam', 'roar', 'topsyturvy', 'whirlwind', 'yawn',
				// Item Control
				'corrosivegas', 'covet', 'knockoff', 'mixedblessing', 'shadydeal', 'switcheroo', 'thief', 'trick',
				// Move-Binding
				'anchorshot', 'block', 'destinybond', 'disable', 'encore', 'fairylock', 'firespin', 'infestation', 'jawlock', 'magnetrise', 'meanlook', 'octolock', 'powder',
				'provoke', 'reverb', 'sandtomb', 'spiderweb', 'spiritshackle', 'stickyfloor', 'taunt', 'thousandwaves', 'thundercage',
				'healblock', 'psychicnoise',
				// Fixed Damage
				'counter', 'dragonrage', 'finalgambit', 'fissure', 'guillotine', 'horndrill', 'mirrorcoat', 'naturesmadness', 'nightshade', 'ruination', 'seismictoss',
				'sheercold', 'sonicboom', 'superfang',
			],
			Support: [
				// Cleric
				'aromatherapy', 'catharsis', 'gatheringswarm', 'healbell', 'junglehealing', 'lunarblessing', 'refresh', 'revivalblessing', 'takeheart', 'wish',
				// Field Control
				'auroraveil', 'backstab', 'ceaselessedge', 'contaminate', 'courtchange', 'creepingivy', 'defog', 'groundbreak', 'lightscreen', 'lushmoss', 'mortalspin', 'psyshieldbash',
				'rapidspin', 'reflect', 'snowplow', 'spikes', 'stealthrock', 'stickyweb', 'stoneaxe', 'tidyup', 'toxicspikes', 'tripwire',
			],
			Momentum: [
				'batonpass', 'chillyreception', 'explosion', 'flipturn', 'healingwish', 'memento', 'partingshot', 'pyrotechnics', 'selfdestruct', 'shedtail', 'teleport',
				'uturn', 'voltswitch',
			],
			DoublesDisrupt: [
				'acidspray', 'blackmail', 'breakingswipe', 'bulldoze', 'captivate', 'charm', 'constrict', 'cottonspore', 'demolition', 'detect', 'drumbeating', 'eerieimpulse',
				'electroweb', 'esperwing', 'fakeout', 'faketears', 'featherdance', 'feint', 'fissurevent', 'fog', 'hyperdrill', 'hyperspacefury', 'hyperspacehole', 'icywind',
				'imprison', 'incinerate', 'kingsshield', 'luminacrash', 'matblock', 'mixedblessing', 'obstruct', 'phantomforce', 'poisongas', 'psychout', 'quickguard', 'sabotage', 'screech',
				'shelltrap', 'silktrap', 'skydrop', 'snarl', 'snatch', 'spikyshield', 'splashzone', 'stringshot', 'strugglebug', 'wideguard',
				'syrupbomb', 'mightycleave', 'alluringvoice', 'upperhand',
			],
			DoublesSupport: [
				'allyswitch', 'beatup', 'cleansingwave', 'coaching', 'decorate', 'doodle', 'entrainment', 'extendinghand', 'followme', 'gravity', 'healpulse', 'helpinghand',
				'instruct', 'lifedew', 'pollenpuff', 'ragepowder', 'reversalroom', 'simplebeam', 'skillswap', 'soak', 'soothingwave', 'spicyextract', 'tailwind', 'tideturn',
				'trickroom', 'windshear',
				'dragoncheer',
			],
			Flavor: [],
		}; // provisional

		// event moves from Gen I and Gen II
		const newMoves = (mon: string, moves: string[]) => {
			for (const move of moves) {
				if (this.modData('Learnsets', this.toID(mon)).learnset[this.toID(move)]) continue;
				this.modData('Learnsets', this.toID(mon)).learnset[this.toID(move)] = ["7V"]; // no need to distinguish from regular VC
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

		// these are from BDSP
		const bdspMoves = (mon: string, moves: string[]) => {
			for (const move of moves) {
				if (this.modData('Learnsets', this.toID(mon)).learnset[this.toID(move)]) continue;
				this.modData('Learnsets', this.toID(mon)).learnset[this.toID(move)] = ["4V"]; // 4V will be for BDSP
			}
		};
		bdspMoves("arceus", ["healingwish"]);
		bdspMoves("ariados", ["bugbuzz"]);
		bdspMoves("beautifly", ["leechlife"]);
		bdspMoves("cacturne", ["assurance"]);
		bdspMoves("camerupt", ["flamewheel"]);
		bdspMoves("chatot", ["partingshot"]);
		bdspMoves("darkrai", ["confuseray"]);
		bdspMoves("deoxys", ["switcheroo", "toxicspikes"]);
		bdspMoves("delcatty", ["babydolleyes", "furyswipes", "nastyplot"]);
		bdspMoves("dodrio", ["leer", "lunge", "wingattack"]);
		bdspMoves("dustox", ["leechlife"]);
		bdspMoves("electrode", ["thundershock"]);
		bdspMoves("empoleon", ["charm", "watergun"]);
		bdspMoves("fearow", ["wingattack"]);
		bdspMoves("floatzel", ["bite", "tackle", "tailwhip"]);
		bdspMoves("forretress", ["bugbuzz"]);
		bdspMoves("furret", ["growl"]);
		bdspMoves("gligar", ["mudslap"]);
		bdspMoves("grumpig", ["confusion", "growl", "nastyplot"]);
		bdspMoves("honchkrow", ["gust"]);
		bdspMoves("hypno", ["mindreader"]);
		bdspMoves("kecleon", ["detect"]);
		bdspMoves("luvdisc", ["babydolleyes", "tearfullook"]);
		bdspMoves("manaphy", ["watergun"]);
		bdspMoves("masquerain", ["soak", "supersonic", "watergun"]);
		bdspMoves("medicham", ["pound", "psybeam"]);
		bdspMoves("mightyena", ["nastyplot"]);
		bdspMoves("mismagius", ["confusion"]);
		bdspMoves("muk", ["smog"]);
		bdspMoves("phione", ["watergun"]);
		bdspMoves("pineco", ["autotomize"]);
		bdspMoves("plusle", ["skillswap"]);
		bdspMoves("probopass", ["bodypress"]);
		bdspMoves("raticate", ["laserfocus", "sludgebomb"]);
		bdspMoves("sentret", ["blizzard"]);
		bdspMoves("slugma", ["sandstorm"]);
		bdspMoves("stantler", ["entrainment", "lunge"]);
		bdspMoves("sunflora", ["tackle"]);
		bdspMoves("torterra", ["leafage"]);
		bdspMoves("volbeat", ["playnice"]);
		bdspMoves("wormadam", ["dig"]);
		bdspMoves("wormadamsandy", ["dig", "gigadrain", "solarbeam"]);
		bdspMoves("wormadamtrash", ["dig", "gigadrain", "solarbeam"]);
		bdspMoves("yanmega", ["gust", "swordsdance"]);

		const bdspRockClimb = (move: string, mons: string[]) => {
			for (const mon of mons) {
				if (this.modData('Learnsets', this.toID(mon)).learnset[this.toID(move)]) continue;
				this.modData('Learnsets', this.toID(mon)).learnset[this.toID(move)] = ["4V"];
			}
		};
		bdspRockClimb("rockclimb", ["venusaur", "blastoise", "nidoqueen", "nidoking", "golduck", "mankey", "primeape", "arcanine", "poliwrath", "machop", "machoke", "machamp", "cubone", "marowak", "hitmonlee", "hitmonchan", "chansey", "kangaskhan", "electabuzz", "magmar", "pinsir", "omastar", "kabutops", "snorlax", "mewtwo", "mew", "meganium", "typhlosion", "feraligatr", "ampharos", "granbull", "ursaring", "blissey", "raikou", "entei", "suicune", "tyranitar", "sceptile", "blaziken", "swampert", "ludicolo", "vigoroth", "slaking", "exploud", "makuhita", "hariyama", "aggron", "zangoose", "regirock", "regice", "registeel", "groudon", "turtwig", "grotle", "torterra", "chimchar", "monferno", "infernape", "empoleon", "cranidos", "rampardos", "munchlax", "lucario", "drapion", "croagunk", "toxicroak", "abomasnow", "electivire", "magmortar", "mamoswine", "heatran", "regigigas", "giratina", "darkrai", "arceus"]);

		// these are from Legends: Arceus
		for (const id in this.dataCache.Pokedex) {
			if (this.dataCache.Learnsets.learnset2[id]) {
				for (const moveid in this.dataCache.Learnsets.learnset2[id]) {
					if (!this.modData('Learnsets', id).learnset[moveid]) this.modData('Learnsets', id).learnset[moveid] = this.dataCache.Learnsets.learnset2[id][moveid];
				}
			}
			// some exceptional hard-coding
			if (id === 'basculinwhitestriped') { // just another Basculin stripe
				for (const moveid in this.dataCache.Learnsets.basculin.learnset) {
					let skip = false;
					for (const source of this.dataCache.Learnsets.basculin.learnset[moveid]) {
						if (parseInt(source.charAt(0)) === 9) skip = true; // don't give Basculegion moves from Basculin that were intentionally cut from its movepool
					}
					if (!skip && !this.modData('Learnsets', id).learnset[moveid]) this.modData('Learnsets', id).learnset[moveid] = this.dataCache.Learnsets.basculin.learnset[moveid];
				}
			} // I might extend this same practice to other regional variants
			if (id === 'basculegionf') { // same learnset as male Basculegion
				for (const moveid in this.dataCache.Learnsets.learnset2.basculegion) {
					if (!this.modData('Learnsets', id).learnset[moveid]) this.modData('Learnsets', id).learnset[moveid] = this.dataCache.Learnsets.learnset2.basculegion[moveid];
				}
			}
		}
		const legendsMoves = (mon: string, moves: string[]) => {
			for (const move of moves) {
				if (this.modData('Learnsets', this.toID(mon)).learnset[this.toID(move)]) continue;
				this.modData('Learnsets', this.toID(mon)).learnset[this.toID(move)] = ["9V"]; // 9V will be for Legends
			}
		};
		legendsMoves("abomasnow", ["iciclecrash"]);
		legendsMoves("aipom", ["doubleedge", "mudbomb", "quickattack"]);
		legendsMoves("ambipom", ["doubleedge", "mudbomb", "quickattack"]);
		legendsMoves("arceus", ["ancientpower", "confusion", "quickattack", "extrasensory", "dazzlinggleam", "dracometeor", "mysticalfire", "steelbeam"]);
		legendsMoves("azelf", ["doublehit", "mysticalpower", "powershift"]);
		legendsMoves("barboach", ["zenheadbutt"]);
		legendsMoves("bastiodon", ["powershift", "steelbeam"]);
		legendsMoves("beautifly", ["airslash"]);
		legendsMoves("bergmite", ["iceshard"]);
		legendsMoves("bibarel", ["bite"]);
		legendsMoves("bidoof", ["bite"]);
		legendsMoves("blissey", ["babydolleyes", "drainingkiss", "fairywind", "powershift", "tackle"]);
		legendsMoves("bonsly", ["headsmash", "irondefense", "tackle"]);
		legendsMoves("budew", ["petaldance", "poisonjab", "poisonpowder", "poisonsting"]);
		legendsMoves("buneary", ["doubleedge", "drainingkiss"]);
		legendsMoves("burmy", ["strugglebug"]);
		legendsMoves("carnivine", ["absorb", "leechlife"]);
		legendsMoves("chansey", ["babydolleyes", "drainingkiss", "fairywind", "tackle"]);
		legendsMoves("chatot", ["airslash", "gust", "hurricane", "powershift", "playrough", "snarl"]);
		legendsMoves("cherrim", ["absorb", "doubleedge", "sleeppowder", "stunspore"]);
		legendsMoves("cherubi", ["absorb", "doubleedge", "petaldance", "sleeppowder", "stunspore"]);
		legendsMoves("chimchar", ["doubleedge", "tackle"]);
		legendsMoves("chimecho", ["doubleedge", "extrasensory", "ominouswind"]);
		legendsMoves("chingling", ["doubleedge", "extrasensory", "ominouswind", "energyball"]);
		legendsMoves("clefable", ["babydolleyes", "doubleedge", "fairywind", "tackle"]);
		legendsMoves("clefairy", ["babydolleyes", "doubleedge", "fairywind", "tackle"]);
		legendsMoves("cleffa", ["babydolleyes", "calmmind", "doubleedge", "fairywind", "moonblast", "tackle"]);
		legendsMoves("cranidos", ["bite", "tackle"]);
		legendsMoves("cresselia", ["lunarblessing", "powershift", "recover", "tackle"]);
		legendsMoves("croagunk", ["closecombat", "earthpower"]);
		legendsMoves("cyndaquil", ["irontail"]);
		legendsMoves("darkrai", ["hex", "shadowsneak"]);
		legendsMoves("dartrix", ["aerialace", "airslash", "gust", "magicalleaf", "leafstorm", "psychocut"]);
		legendsMoves("dewott", ["slash"]);
		legendsMoves("drifblim", ["confusion", "extrasensory", "mysticalfire", "powershift"]);
		legendsMoves("drifloon", ["confusion", "extrasensory", "mysticalfire"]);
		legendsMoves("dusclops", ["absorb", "leechlife", "powershift"]);
		legendsMoves("dusknoir", ["absorb", "leechlife", "powershift"]);
		legendsMoves("duskull", ["absorb", "leechlife"]);
		legendsMoves("dustox", ["extrasensory"]);
		legendsMoves("eevee", ["calmmind", "mimic"]);
		legendsMoves("electabuzz", ["spark"]);
		legendsMoves("electivire", ["spark"]);
		legendsMoves("elekid", ["spark"]);
		legendsMoves("empoleon", ["doubleedge", "roost", "steelbeam", "wavecrash"]);
		legendsMoves("espeon", ["mimic", "rocksmash"]);
		legendsMoves("finneon", ["babydolleyes", "bubble", "airslash", "roost", "hydropump"]);
		legendsMoves("flareon", ["calmmind", "powershift", "mimic"]);
		legendsMoves("gallade", ["focusenergy", "icebeam"]);
		legendsMoves("gardevoir", ["aurasphere", "recover", "icebeam"]);
		legendsMoves("gastly", ["poisongas"]);
		legendsMoves("gastrodon", ["tackle"]);
		legendsMoves("gastrodoneast", ["tackle"]);
		legendsMoves("gengar", ["poisongas", "powershift"]);
		legendsMoves("glaceon", ["calmmind", "mimic", "powdersnow"]);
		legendsMoves("glalie", ["iceball"]);
		legendsMoves("glameow", ["doubleedge", "nastyplot", "nightslash", "tackle"]);
		legendsMoves("gligar", ["mudbomb"]);
		legendsMoves("gliscor", ["pinmissile", "spikes", "powershift"]);
		legendsMoves("golbat", ["crosspoison"]);
		legendsMoves("golduck", ["bubble", "triattack"]);
		legendsMoves("goomy", ["acidspray", "hydropump", "shelter"]);
		legendsMoves("grotle", ["bulldoze", "leafblade", "sleeppowder"]);
		legendsMoves("gyarados", ["focusenergy"]);
		legendsMoves("happiny", ["babydolleyes", "calmmind", "doubleedge", "drainingkiss", "fairywind", "softboiled", "tackle"]);
		legendsMoves("haunter", ["poisongas"]);
		legendsMoves("heatran", ["ember"]);
		legendsMoves("heracross", ["slash", "calmmind", "outrage"]);
		legendsMoves("hippopotas", ["mudbomb"]);
		legendsMoves("hippowdon", ["mudbomb"]);
		legendsMoves("honchkrow", ["airslash"]);
		legendsMoves("infernape", ["doubleedge", "drainpunch", "ragingfury"]);
		legendsMoves("jolteon", ["calmmind", "mimic"]);
		legendsMoves("kadabra", ["hypnosis"]);
		legendsMoves("kirlia", ["icebeam"]);
		legendsMoves("kricketot", ["absorb", "tackle"]);
		legendsMoves("kricketune", ["tackle"]);
		legendsMoves("landorus", ["bite", "crunch", "sandsearstorm", "tackle", "twister"]);
		legendsMoves("leafeon", ["calmmind", "leafage", "mimic"]);
		legendsMoves("lickilicky", ["doubleedge", "tackle", "iceball"]);
		legendsMoves("lickitung", ["doubleedge", "tackle", "iceball"]);
		legendsMoves("lopunny", ["doubleedge", "drainingkiss", "machpunch"]);
		legendsMoves("lucario", ["machpunch"]);
		legendsMoves("lumineon", ["aerialace", "bubble", "airslash", "roost", "hydropump"]);
		legendsMoves("machamp", ["doublehit", "drainpunch", "machpunch", "tackle"]);
		legendsMoves("machoke", ["doublehit", "machpunch", "tackle"]);
		legendsMoves("machop", ["doublehit", "machpunch", "tackle"]);
		legendsMoves("magby", ["poisongas", "tackle"]);
		legendsMoves("magmar", ["poisongas", "tackle"]);
		legendsMoves("magmortar", ["poisongas", "tackle"]);
		legendsMoves("mamoswine", ["babydolleyes"]);
		legendsMoves("manaphy", ["bubble", "confusion", "hydropump", "moonblast", "takeheart", "zenheadbutt", "calmmind"]);
		legendsMoves("mantine", ["doubleedge", "powershift"]);
		legendsMoves("mantyke", ["doubleedge", "roost"]);
		legendsMoves("mesprit", ["doublehit", "mysticalpower", "recover"]);
		legendsMoves("mimejr", ["irondefense", "zenheadbutt"]);
		legendsMoves("misdreavus", ["extrasensory", "hypnosis"]);
		legendsMoves("mismagius", ["extrasensory", "hypnosis"]);
		legendsMoves("monferno", ["doubleedge"]);
		legendsMoves("mrmime", ["powershift"]);
		legendsMoves("munchlax", ["gigaimpact", "highhorsepower", "iceball"]);
		legendsMoves("murkrow", ["airslash", "nightslash"]);
		legendsMoves("ninetales", ["flamewheel", "nastyplot"]);
		legendsMoves("ninetalesalola", ["icefang"]);
		legendsMoves("nosepass", ["flashcannon", "powershift"]);
		legendsMoves("onix", ["powershift"]);
		legendsMoves("oshawott", ["slash"]);
		legendsMoves("pachirisu", ["crunch", "thundershock", "playrough"]);
		legendsMoves("paras", ["energyball"]);
		legendsMoves("petilil", ["leafage", "poisonpowder", "recover", "babydolleyes"]);
		legendsMoves("phione", ["bubble", "confusion", "hydropump", "moonblast", "takeheart", "zenheadbutt", "calmmind"]);
		legendsMoves("pichu", ["babydolleyes", "quickattack", "spark"]);
		legendsMoves("pikachu", ["babydolleyes", "calmmind"]);
		legendsMoves("piloswine", ["babydolleyes"]);
		legendsMoves("piplup", ["doubleedge", "liquidation", "roost", "tackle"]);
		legendsMoves("ponyta", ["doublehit"]);
		legendsMoves("porygon", ["spark"]);
		legendsMoves("porygon2", ["spark"]);
		legendsMoves("porygonz", ["powershift", "spark"]);
		legendsMoves("prinplup", ["doubleedge", "liquidation", "roost"]);
		legendsMoves("probopass", ["steelbeam", "powershift"]);
		legendsMoves("psyduck", ["bubble", "triattack"]);
		legendsMoves("purugly", ["doubleedge", "nastyplot", "nightslash", "tackle"]);
		legendsMoves("quilava", ["irontail"]);
		legendsMoves("raichu", ["babydolleyes", "calmmind"]);
		legendsMoves("ralts", ["icebeam"]);
		legendsMoves("rampardos", ["powershift", "bite"]);
		legendsMoves("rapidash", ["doublehit"]);
		legendsMoves("regigigas", ["ancientpower", "powershift", "tackle"]);
		legendsMoves("remoraid", ["bubble"]);
		legendsMoves("rhydon", ["doubleedge"]);
		legendsMoves("rhyhorn", ["doubleedge", "gigaimpact"]);
		legendsMoves("rhyperior", ["doubleedge"]);
		legendsMoves("riolu", ["aurasphere", "closecombat", "focusenergy"]);
		legendsMoves("roselia", ["poisonpowder"]);
		legendsMoves("roserade", ["poisonpowder"]);
		legendsMoves("rowlet", ["aerialace", "airslash", "gust", "magicalleaf", "leafstorm", "psychocut"]);
		legendsMoves("rufflet", ["doubleedge", "quickattack", "twister", "ominouswind"]);
		legendsMoves("scizor", ["closecombat", "calmmind"]);
		legendsMoves("scyther", ["closecombat", "calmmind"]);
		legendsMoves("sealeo", ["liquidation", "babydolleyes"]);
		legendsMoves("shaymin", ["leafage", "recover", "sleeppowder", "aerialace", "babydolleyes", "playrough"]);
		legendsMoves("shellos", ["tackle"]);
		legendsMoves("shieldon", ["steelbeam", "tackle"]);
		legendsMoves("snorlax", ["iceball"]);
		legendsMoves("snover", ["iciclecrash"]);
		legendsMoves("spheal", ["liquidation", "babydolleyes"]);
		legendsMoves("spiritomb", ["extrasensory"]);
		legendsMoves("stantler", ["confusion", "psyshieldbash"]);
		legendsMoves("staraptor", ["airslash", "gust", "focusenergy"]);
		legendsMoves("staravia", ["airslash", "gigaimpact", "gust"]);
		legendsMoves("starly", ["airslash", "gigaimpact", "gust"]);
		legendsMoves("steelix", ["iceball", "powershift"]);
		legendsMoves("stunky", ["doubleedge", "poisonjab", "tackle"]);
		legendsMoves("sudowoodo", ["tackle"]);
		legendsMoves("swinub", ["highhorsepower", "babydolleyes"]);
		legendsMoves("sylveon", ["magicalleaf", "mimic", "rocksmash"]);
		legendsMoves("tangela", ["acidspray", "doublehit"]);
		legendsMoves("tangrowth", ["acidspray", "doublehit"]);
		legendsMoves("teddiursa", ["highhorsepower", "focusenergy", "tackle"]);
		legendsMoves("tentacool", ["acidarmor"]);
		legendsMoves("thundurus", ["powershift", "spark", "tackle", "twister", "wildboltstorm"]);
		legendsMoves("togekiss", ["babydolleyes", "calmmind", "moonblast", "tackle"]);
		legendsMoves("togepi", ["babydolleyes", "calmmind", "fairywind", "moonblast", "tackle"]);
		legendsMoves("togetic", ["airslash", "babydolleyes", "calmmind", "moonblast", "tackle"]);
		legendsMoves("tornadus", ["bleakwindstorm", "tackle", "twister"]);
		legendsMoves("torterra", ["leafblade", "headlongrush", "sleeppowder"]);
		legendsMoves("toxicroak", ["closecombat", "earthpower"]);
		legendsMoves("turtwig", ["bulldoze", "leafblade", "sleeppowder"]);
		legendsMoves("umbreon", ["calmmind", "mimic", "powershift", "rocksmash"]);
		legendsMoves("ursaring", ["highhorsepower", "focusenergy"]);
		legendsMoves("uxie", ["doublehit", "hypnosis", "mysticalpower", "powershift"]);
		legendsMoves("vaporeon", ["bubble", "calmmind", "mimic"]);
		legendsMoves("vespiquen", ["powershift", "recover"]);
		legendsMoves("vulpix", ["flamewheel", "nastyplot"]);
		legendsMoves("vulpixalola", ["dazzlinggleam", "energyball", "icefang", "nastyplot", "quickattack"]);
		legendsMoves("walrein", ["babydolleyes"]);
		legendsMoves("whiscash", ["aerialace"]);
		legendsMoves("wormadam", ["gust", "silverwind", "magicalleaf"]);
		legendsMoves("wormadamsandy", ["gust", "silverwind"]);
		legendsMoves("wormadamtrash", ["gust", "silverwind", "steelbeam"]);
		legendsMoves("yanma", ["gust"]);
		legendsMoves("yanmega", ["crunch"]);
		legendsMoves("zubat", ["crosspoison"]);

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
			'earthpower', 'earthquake', 'eeriespell', 'electrodrift', 'energyball', 'eruption', 'esperwing', 'eternabeam', 'expandingforce', 'expiration', 'explosion',
			'extrasensory', 'extremespeed', 'facade', 'fakeout', 'falsesurrender', 'faustianbargain', 'fierydance', 'fierywrath', 'finalbreath', 'fireblast', 'firefang',
			'firelash', 'firepunch', 'firstimpression', 'fishiousrend', 'flameburst', 'flamethrower', 'flareblitz', 'flashcannon', 'fleurcannon', 'flipturn',
			'flowertrick', 'fly', 'flyingpress', 'focusblast', 'focuspunch', 'foulplay', 'freezedry', 'freezeshock', 'freezingglare', 'frostbreath', 'frustration',
			'fusionbolt', 'fusionflare', 'futuresight', 'gatheringswarm', 'geargrind', 'gigadrain', 'gigatonhammer', 'glaciallance', 'glaciate', 'glaiverush', 'grassknot',
			'grassyglide', 'gravapple', 'groundbreak', 'gunkshot', 'gyroball', 'hammerarm', 'headcharge', 'headsmash', 'headlongrush', 'heatcrash', 'heatwave',
			'heavyslam', 'hex', 'highhorsepower', 'highjumpkick', 'hivecall', 'hornleech', 'hurricane', 'hydropump', 'hyperdrill', 'hypervoice', 'hyperspacefury',
			'hyperspacehole', 'icebeam', 'iceburn', 'icefang', 'icehammer', 'icepunch', 'iceshard', 'icespinner', 'iciclecrash', 'iciclespear', 'incinerate',
			'infernalparade', 'ironhead', 'irontail', 'jawlock', 'jetpunch', 'judgment', 'jumpkick', 'knockoff', 'kowtowcleave', 'landswrath', 'lashout', 'lastrespects',
			'lavaplume', 'leafblade', 'leafstorm', 'leechlife', 'lightofruin', 'liquefy', 'liquidation', 'lowkick', 'luminacrash', 'lunge', 'lusterpurge', 'machpunch',
			'magmastorm', 'makeitrain', 'megahorn', 'meteorassault', 'meteorbeam', 'meteormash', 'mindblown', 'mistball', 'mistyexplosion', 'moonblast', 'moongeistbeam',
			'mountaingale', 'muddywater', 'multiattack', 'mysticalfire', 'mysticalpower', 'naturepower', 'nightdaze', 'nightslash', 'nosedive', 'oblivionwing', 'oilfire',
			'orderup', 'originpulse', 'outrage', 'overdrive', 'overheat', 'overload', 'parasite', 'petalblizzard', 'petaldance', 'phantomforce', 'photongeyser',
			'piledriver', 'pinmissile', 'plasmafists', 'playrough', 'poisonjab', 'pollenpuff', 'poltergeist', 'populationbomb', 'powergem', 'powertrip', 'poweruppunch',
			'powerwhip', 'precipiceblades', 'prismaticlaser', 'provoke', 'psychout', 'psychic', 'psychicfangs', 'psychoboost', 'psychocut', 'psyshieldbash', 'psyshock',
			'psystrike', 'pursuit', 'pyroball', 'quickattack', 'ragefist', 'ragingbull', 'rampageinstinct', 'rapidspin', 'razorshell', 'razorwind', 'relicsong',
			'reputation', 'return', 'revelationdance', 'reversal', 'revolvingdoorslam', 'risingvoltage', 'roaroftime', 'rockblast', 'rockslide', 'rockthrow',
			'rockwrecker', 'roilingwaves', 'rollout', 'runningbolt', 'sacredfire', 'sacredsword', 'saltcure', 'sandsearstorm', 'scald', 'scaleshot', 'scorchingsands',
			'searingshot', 'secretsword', 'seedbomb', 'seedflare', 'selfdestruct', 'shadowball', 'shadowbone', 'shadowclaw', 'shadowforce', 'shadowsneak', 'shadydeal',
			'shellsidearm', 'shelltrap', 'signalbeam', 'silverwind', 'skittersmack', 'skyattack', 'skyuppercut', 'sleightofhand', 'sludgebomb', 'sludgewave',
			'smartstrike', 'smellingsalts', 'snipeshot', 'snowplow', 'solarbeam', 'solarblade', 'spacialrend', 'spark', 'sparklingaria', 'spectralthief', 'spiderweb',
			'spikyshield', 'spinout', 'spiritbreak', 'spiritshackle', 'spitup', 'splashzone', 'springtidestorm', 'steameruption', 'steelbeam', 'steelroller',
			'stompingtantrum', 'stoneaxe', 'stoneedge', 'storedpower', 'stormthrow', 'strangesteam', 'suckerpunch', 'sunsteelstrike', 'superpower', 'surf',
			'surgingstrikes', 'surpriseattack', 'switchflip', 'synchronoise', 'teardown', 'technoblast', 'terrainpulse', 'testingstrike', 'thousandarrows',
			'thousandwaves', 'throatchop', 'thunder', 'thundercage', 'thunderfang', 'thunderpunch', 'thunderbolt', 'thunderouskick', 'torchsong', 'triattack',
			'triplearrows', 'tripleaxel', 'triplekick', 'tropkick', 'trumpcard', 'undermine', 'uturn', 'vacuumwave', 'vcreate', 'voltswitch', 'volttackle',
			'watershuriken', 'waterspout', 'waterfall', 'wavecrash', 'weatherball', 'wickedblow', 'wildcharge', 'wildboltstorm', 'windshear', 'woodhammer', 'xscissor',
			'zenheadbutt', 'zingzap',
			// some I forgot:
			'mixedblessing', 'pyrotechnics', 'rashreprisal',
			// DLC moves:
			'bloodmoon', 'matchagotcha', 'ivycudgel', 'electroshot', 'terastarstorm', 'ficklebeam', 'thunderclap', 'mightycleave', 'tachyoncutter', 'hardpress',
			'alluringvoice', 'temperflare', 'supercellslam', 'psychicnoise', 'upperhand', 'malignantchain', 'hydrosteam', 'psyblade',
		]; // this category doesn't need to distinguish physical from special! that's handled later
		// excludes Hidden Power and Natural Gift

		let printno = 0;
		for (const id in this.dataCache.Pokedex) {
			const poke = this.dataCache.Pokedex[id];
			if (!poke || poke.evos || id.startsWith('pichu') || id.startsWith('pikachu') || id.startsWith('eevee')) continue;
			if (ondasDexDraft.includes(poke.name) || ondasDexDraft.includes(poke.baseSpecies) || ondasDexDraft.includes(poke.baseForme)) poke.kind = "Ondas";
			if (poke.prevo && (ondasDexDraft.includes(poke.prevo) || ondasDexDraft.includes(poke.prevo.baseSpecies) || ondasDexDraft.includes(poke.prevo.baseForme))) poke.kind = "Ondas";
			// only include Pokémon in the regional dex at first... but still include Ondas iterations of starters and Legendaries, just in case they come up:
			if ((!poke.kind || poke.kind !== "Ondas") && (poke.abilities[0] !== "Overgrow" && poke.abilities[0] !== "Blaze" && poke.abilities[0] !== "Torrent") && !poke.tags) continue;
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
							else moveGenSources.push(source.charAt(0));
							// moveGenSources *should* end up as a complete list of all Gens that the Pokémon learns the move
							
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
							else moveGenSources.push(source.charAt(0));
							// moveGenSources *should* end up as a complete list of all Gens that the Pokémon learns the move

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
							else moveGenSources.push(source.charAt(0));
							// moveGenSources *should* end up as a complete list of all Gens that the Pokémon learns the move

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
							else if (source.charAt(0) === '9') moveGenSources.push("9");
							else if (source.charAt(0) === '8') moveGenSources.push("8");
							else if (source.charAt(0) === '7') moveGenSources.push("7");
							else if (source.charAt(0) === '6') moveGenSources.push("6");
							else if (source.charAt(0) === '5') moveGenSources.push("5");
							else if (source.charAt(0) === '3') moveGenSources.push("3");
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
							if (moveGenSources.includes(3)) fakeGen = 3;
							// if a move was lost after Gen III but added back later, I think I want to know when it was added back

							if (moveGenSources.includes(9)) fakeGen = 9;
							if (moveGenSources.includes("BDSP")) fakeGen = "BDSP";
							if (moveGenSources.includes(8)) fakeGen = 8;
							if (moveGenSources.includes("LGPE")) fakeGen = "LGPE";
							if (moveGenSources.includes(7)) fakeGen = 7;
							if (moveGenSources.includes(6)) fakeGen = 6;
							if (moveGenSources.includes(5)) fakeGen = 5;
							// Gen IV is always "authentic"

							if (fakeGen) title += ` (${fakeGen})`;
							// this should make it display how I want!
							// like Nasty Plot vs Helping Hand (9) or Sleep Powder vs Sleep Powder (Legends)
						}

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

					} else if (ondasTms.includes(moveid) || (ondasTutors.includes(moveid) && !sinnohOnly.includes(moveid))) {
						// if a TM or tutor is not learned, decide if it belongs in addTrend or addOther
						// should still distinguish between competitive and flavor like above!
						let addRule = "addOther";

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
							['endure', 'facade', 'frustration', 'gigaimpact', 'return', 'hiddenpower', 'hyperbeam', 'naturalgift', 'snore', 'protect', 'secretpower', 'sleeptalk', 'substitute', 'swagger', 'trashtalk', 'rest'].includes(moveid)
						) addRule = "addTrend"; // fully universal moves
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

						// now put it in as a tutor move
						if (addRule === "addTrend") {
							if (etesalta.includes(moveid)) poke.learnsetCumulative.Tutor.etesalta.push(title);
							if (manistral.includes(moveid)) poke.learnsetCumulative.Tutor.manistral.push(title);
							if (valledar.includes(moveid)) poke.learnsetCumulative.Tutor.valledar.push(title);
							if (coriallos.includes(moveid)) poke.learnsetCumulative.Tutor.coriallos.push(title);
							if (sinnohTutor.includes(moveid)) poke.learnsetCumulative.Tutor.sinnohTutor.push(title);
						}

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
						if (addRule === "addOther") continue; // addOther is only for types and categories
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

				// ~10~ two rows with space for comments: manual movepool changes, then Tactics and stat changes
				sheetOutput += poke.kind + `~` + (printno) + `~10~Manual Changes~\n`;
				sheetOutput += poke.kind + `~` + (printno) + `~10~Other Comments~\n`;

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

// TO DO:
// add notes for Generation of buff/lost moves (think I have this, but make sure it works)

// identify which tutors the Pokémon has and hasn't had previous opportunities to learn - this part feels the trickiest to me...
// if it has had a previous opportunity: add asterisk for additional trends, substitutions
// if it hasn't had a previous opportunity and isn't already in a visible substitutions row: add a new row with that information
// (okay I THINK I did this...)

// add section for tutors by which tutor teaches them
// maybe also add a Sinnoh-only tutor section for my personal reference, even though it shouldn't affect learnset design yet
// (that should be done)

// reminder to self: try using .sort() at the end of each move list to get them in alphabetical order?
// would save a lot of effort and look nice
// but make sure this doesn't cause a crash if the set is empty! (it very often will be)

// add two spaces for manual inputs: one blank for further movepool changes, one blank for Tactics and stat comments
// (think I got that)

// maaaybe have a better way of handling new variants / crossgens?
// will need hard-coding for Volateal (combining Armarouge and Ceruledge's learnsets)
// can the others just be Evo-style shortcut additions early in the script? I don't really need anything but their types and movepools
// (not gonna deal with this right now)
