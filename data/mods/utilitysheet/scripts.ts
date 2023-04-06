export const Scripts: ModdedBattleScriptsData = {
	init() {
		const platinumDex = [
			"Turtwig", "Grotle", "Torterra", "Chimchar", "Monferno", "Infernape", "Piplup", "Prinplup", "Empoleon", "Starly", "Staravia", "Staraptor", "Bidoof", "Bibarel", "Kricketot", "Kricketune", "Shinx", "Luxio", "Luxray", "Abra", "Kadabra", "Alakazam", "Magikarp", "Gyarados", "Budew", "Roselia", "Roserade", "Zubat", "Golbat", "Crobat", "Geodude", "Graveler", "Golem", "Onix", "Steelix", "Cranidos", "Rampardos", "Shieldon", "Bastiodon", "Machop", "Machoke", "Machamp", "Psyduck", "Golduck", "Burmy", "Wormadam", "Wormadam-Sandy", "Wormadam-Trash", "Mothim", "Wurmple", "Silcoon", "Beautifly", "Cascoon", "Dustox", "Combee", "Vespiquen", "Pachirisu", "Buizel", "Floatzel", "Cherubi", "Cherrim", "Shellos", "Gastrodon", "Heracross", "Aipom", "Ambipom", "Drifloon", "Drifblim", "Buneary", "Lopunny", "Gastly", "Haunter", "Gengar", "Misdreavus", "Mismagius", "Murkrow", "Honchkrow", "Glameow", "Purugly", "Goldeen", "Seaking", "Barboach", "Whiscash", "Chingling", "Chimecho", "Stunky", "Skuntank", "Meditite", "Medicham", "Bronzor", "Bronzong", "Ponyta", "Rapidash", "Bonsly", "Sudowoodo", "Mime Jr.", "Mr. Mime", "Happiny", "Chansey", "Blissey", "Cleffa", "Clefairy", "Clefable", "Chatot", "Pichu", "Pikachu", "Raichu", "Hoothoot", "Noctowl", "Spiritomb", "Gible", "Gabite", "Garchomp", "Munchlax", "Snorlax", "Unown", "Riolu", "Lucario", "Wooper", "Quagsire", "Wingull", "Pelipper", "Girafarig", "Hippopotas", "Hippowdon", "Azurill", "Marill", "Azumarill", "Skorupi", "Drapion", "Croagunk", "Toxicroak", "Carnivine", "Remoraid", "Octillery", "Finneon", "Lumineon", "Tentacool", "Tentacruel", "Feebas", "Milotic", "Mantyke", "Mantine", "Snover", "Abomasnow", "Sneasel", "Weavile", "Rotom", "Gligar", "Gliscor", "Nosepass", "Probopass", "Ralts", "Kirlia", "Gardevoir", "Gallade", "Lickitung", "Lickilicky", "Eevee", "Vaporeon", "Jolteon", "Flareon", "Espeon", "Umbreon", "Leafeon", "Glaceon", "Swablu", "Altaria", "Togepi", "Togetic", "Togekiss", "Houndour", "Houndoom", "Magnemite", "Magneton", "Magnezone", "Tangela", "Tangrowth", "Yanma", "Yanmega", "Tropius", "Rhyhorn", "Rhydon", "Rhyperior", "Duskull", "Dusclops", "Dusknoir", "Porygon", "Porygon2", "Porygon-Z", "Scyther", "Scizor", "Elekid", "Electabuzz", "Electivire", "Magby", "Magmar", "Magmortar", "Swinub", "Piloswine", "Mamoswine", "Snorunt", "Glalie", "Froslass", "Absol",
		];
		const bdspAndLegends = [
			"Smoochum", "Jynx", "Pinsir", "Sneasel-Hisui", "Sneasler", "Kleavor", "Vulpix-Alola", "Ninetales-Alola", "Growlithe-Hisui", "Arcanine-Hisui", "Basculin-White-Striped", "Basculegion", "Basculegion-F", "Qwilfish-Hisui", "Overqwil", "Voltorb-Hisui", "Electrode-Hisui", "Petilil", "Lilligant-Hisui", "Bergmite", "Avalugg-Hisui", "Spheal", "Sealeo", "Walrein", "Paras", "Parasect", "Teddiursa", "Ursaring", "Ursaluna", "Rufflet", "Braviary-Hisui", "Goomy", "Sliggoo-Hisui", "Goodra-Hisui", "Zorua-Hisui", "Zoroark-Hisui", "Stantler", "Wyrdeer",
		];
		const variants = [
			"Geodude-Alola", "Graveler-Alola", "Golem-Alola", "Ponyta-Galar", "Rapidash-Galar", "Mr. Mime-Galar", "Raichu-Alola", "Wooper-Paldea", "Mr. Rime", "Sylveon", "Clodsire", "Farigiraf", "Vulpix", "Ninetales", "Growlithe", "Arcanine", "Qwilfish", "Basculin", "Basculin-Blue-Striped", "Voltorb", "Electrode", "Lilligant", "Avalugg", "Braviary", "Sliggoo", "Goodra", "Zorua", "Zoroark",
		];
		const otherAdditions = [
			 "Darumaka", "Darumaka-Galar", "Darmanitan", "Darmanitan-Zen", "Darmanitan-Galar", "Darmanitan-Galar-Zen", "Numel", "Camerupt", "Slugma", "Magcargo", "Turtonator", "Poliwag", "Poliwhirl", "Poliwrath", "Politoed", "Clamperl", "Huntail", "Gorebyss", "Luvdisc", "Wailmer", "Wailord", "Pyukumuku", "Chinchou", "Lanturn", "Shellder", "Cloyster", "Seel", "Dewgong", "Staryu", "Starmie", "Relicanth", "Frillish", "Jellicent", "Horsea", "Seadra", "Kingdra", "Carvanha", "Sharpedo", "Corphish", "Crawdaunt", "Tynamo", "Eelektrik", "Eelektross", "Toxel", "Toxtricity", "Toxtricity-Low-Key", "Helioptile", "Heliolisk", "Oddish", "Gloom", "Vileplume", "Bellossom", "Skiddo", "Gogoat", "Fomantis", "Lurantis", "Shroomish", "Breloom", "Bellsprout", "Weepinbell", "Victreebel", "Exeggcute", "Exeggutor", "Exeggutor-Alola", "Cacnea", "Cacturne", "Snom", "Frosmoth", "Throh", "Sawk", "Crabrawler", "Crabominable", "Pancham", "Pangoro", "Koffing", "Weezing", "Weezing-Galar", "Gulpin", "Swalot", "Salandit", "Salazzle", "Diglett", "Diglett-Alola", "Dugtrio", "Dugtrio-Alola", "Mudbray", "Mudsdale", "Silicobra", "Sandaconda", "Golett", "Golurk", "Noibat", "Noivern", "Munna", "Musharna", "Espurr", "Meowstic", "Meowstic-F", "Hatenna", "Hattrem", "Hatterene", "Indeedee", "Indeedee-F", "Volbeat", "Illumise", "Shelmet", "Accelgor", "Karrablast", "Escavalier", "Wimpod", "Golisopod", "Grubbin", "Charjabug", "Vikavolt", "Spinarak", "Ariados", "Ledyba", "Ledian", "Surskit", "Masquerain", "Rolycoly", "Carkol", "Coalossal", "Minior", "Minior-Meteor", "Carbink", "Shuppet", "Banette", "Phantump", "Trevenant", "Dhelmise", "Axew", "Fraxure", "Haxorus", "Jangmo-o", "Hakamo-o", "Kommo-o", "Dratini", "Dragonair", "Dragonite", "Pawniard", "Bisharp", "Kingambit", "Rattata", "Rattata-Alola", "Raticate", "Raticate-Alola", "Skarmory", "Honedge", "Doublade", "Aegislash", "Aegislash-Blade", "Milcery", "Alcremie", "Kangaskhan", "Pidgey", "Pidgeotto", "Pidgeot", "Spearow", "Fearow", "Drampa", "Cyclizar", "Fidough", "Dachsbun", "Charcadet", "Armarouge", "Ceruledge", "Nacli", "Naclstack", "Garganacl", "Glimmet", "Glimmora", "Cetoddle", "Cetitan", "Tatsugiri", "Dondozo", "Nymble", "Lokix", "Gimmighoul", "Gholdengo", "Toedscool", "Toedscruel", "Wiglett", "Wugtrio",
		];
		const legendaries = [
			"Uxie", "Mesprit", "Azelf", "Dialga", "Palkia", "Manaphy", "Giratina", "Heatran", "Regigigas", "Cresselia", "Phione", "Darkrai", "Shaymin", "Arceus", "Sandy Shocks", "Flutter Mane", "Iron Valiant", "Blacephalon", "Stakataka", "Regirock", "Regice", "Registeel", "Type: Null", "Silvally", "Necrozma",
		];
		const pulseTms = [
			'adrenalinerush', 'aerialace', 'aftershock', 'aircurrent', 'attract', 'blizzard', 'bloodboil', 'brickbreak', 'bulkup', 'bulldoze', 'calmmind', 'darkpulse',
			'dazzlinggleam', 'dragonclaw', 'drainpunch', 'earthquake', 'embargo', 'energyball', 'expiration', 'explosion', 'facade', 'falseswipe', 'fireblast', 'flamecharge',
			'flamethrower', 'flashcannon', 'fling', 'focusblast', 'focuspunch', 'frustration', 'gigadrain', 'gigaimpact', 'gyroball', 'hail', 'healblock', 'hiddenpower',
			'hyperbeam', 'icebeam', 'lastwill', 'lightscreen', 'liquidation', 'magiccoat', 'naturepower', 'oilfire', 'overheat', 'piledriver', 'poweruppunch',
			'protect', 'psychic', 'psyshock', 'quash', 'raindance', 'reflect', 'reputation', 'rest', 'retaliate', 'return', 'revolvingdoorslam', 'risingvoltage', 'roar',
			'rockpolish', 'rockslide', 'rocktomb', 'roost', 'safeguard', 'sandstorm', 'scald', 'scorchingsands', 'shadowball', 'shockwave', 'skydrop', 'sleeptalk',
			'sludgebomb', 'snarl', 'snatch', 'solarbeam', 'splashzone', 'steelwing', 'stingingthorns', 'stoneedge', 'substitute', 'sunnyday', 'surf', 'swagger',
			'swordsdance', 'taunt', 'thief', 'thunder', 'thunderwave', 'thunderbolt', 'torment', 'toxic', 'trickroom', 'uturn', 'voltswitch', 'wildcharge', 'willowisp',
			'windshear', 'workup', 'xscissor',
		];
		const pulseTutors = [
			'acidspray', 'aircutter', 'ancientpower', 'aquatail', 'avalanche', 'blastburn', 'block', 'bodypress', 'bounce', 'brine', 'bugbite', 'bulletseed',
			'burningjealousy', 'chargebeam', 'cut', 'defog', 'dig', 'dive', 'doubleteam', 'dracometeor', 'dracometeor', 'dragonascent', 'dragonpulse', 'dragontail',
			'drainingkiss', 'dreameater', 'earthpower', 'endeavor', 'endure', 'firepledge', 'firepunch', 'flash', 'fly', 'foulplay', 'frenzyplant', 'furycutter',
			'gastroacid', 'grassknot', 'grasspledge', 'gravity', 'gunkshot', 'healbell', 'heatwave', 'helpinghand', 'hydrocannon', 'hypervoice', 'icepunch', 'icywind',
			'incinerate', 'irondefense', 'ironhead', 'irontail', 'knockoff', 'lastresort', 'lowkick', 'magnetrise', 'meteorbeam', 'mudslap', 'naturalgift', 'nosedive',
			'ominouswind', 'outrage', 'painsplit', 'payback', 'playrough', 'pluck', 'poisonjab', 'poltergeist', 'psychup', 'recycle', 'relicsong', 'rockclimb',
			'rocksmash', 'roleplay', 'rollout', 'secretpower', 'secretsword', 'seedbomb', 'shadowclaw', 'signalbeam', 'silverwind', 'skillswap', 'skyattack',
			'sleightofhand', 'snore', 'spite', 'stealthrock', 'steelbeam', 'steelbeam', 'stompingtantrum', 'strength', 'stringshot', 'suckerpunch', 'superfang',
			'superpower', 'swift', 'synthesis', 'tailwind', 'thunderpunch', 'trick', 'twister', 'uproar', 'vcreate', 'vacuumwave', 'volttackle', 'waterpledge',
			'waterpulse', 'waterfall', 'worryseed', 'zenheadbutt', 'powershift', 'risingstalk', 'risingheat', 'risingtide',
		]; // excludes Captivate
		const notRealTutors = [
			'relicsong', 'blastburn', 'firepledge', 'vcreate', 'hydrocannon', 'waterpledge', 'volttackle', 'frenzyplant', 'grasspledge', 'secretsword', 'dragonascent',
		]; // don't show up as recommended if the Pokémon doesn't already get them
		const dexitedMoves = [
			'doubleteam', 'flash', 'kinesis', 'minimize', 'sandattack', 'smokescreen', 'storedpower', 'terablast',
		];
		const movepoolSections = {
			Self: [
				// Recovery
				'healorder', 'leechseed', 'milkdrink', 'moonlight', 'morningsun', 'painsplit', 'recover', 'revivalblessing', 'roost', 'shoreup', 'slackoff', 'softboiled',
				'strengthsap', 'synthesis',
				// Setup
				'acidarmor', 'acupressure', 'agility', 'amnesia', 'aquastep', 'aurawheel', 'autotomize', 'barrier', 'bellydrum', 'bloodboil', 'bulkup', 'calmmind',
				'clangoroussoul', 'coil', 'cosmicpower', 'cottonguard', 'curse', 'defendorder', 'diamondstorm', 'dragondance', 'filletaway', 'flamecharge', 'geomancy',
				'growth', 'honeclaws', 'irondefense', 'metamorphosis', 'nastyplot', 'noretreat', 'quiverdance', 'rockpolish', 'runningstart', 'shellsmash', 'shelter',
				'shiftgear', 'stockpile', 'stuffcheeks', 'surgingstrikes', 'swordsdance', 'tailglow', 'takeheart', 'trailblaze', 'triplearrows', 'victorydance',
			],
			Disrupt: [
				// Status
				'aftershock', 'banefulbunker', 'beakblast', 'bittermalice', 'bodyslam', 'darkvoid', 'direclaw', 'glare', 'hypnosis', 'infernalparade', 'lovelykiss', 'nuzzle',
				'rashpowder', 'sacredfire', 'saltcure', 'scald', 'scorchingsands', 'sleeppowder', 'spore', 'stunspore', 'thunderwave', 'toxicthread', 'willowisp',
				// Setup Control
				'circlethrow', 'clearsmog', 'dragontail', 'haze', 'heartswap', 'perishsong', 'revolvingdoorslam', 'roar', 'topsyturvy', 'whirlwind', 'yawn',
				// Item Control
				'corrosivegas', 'covet', 'knockoff', 'shadydeal', 'switcheroo', 'thief', 'trick',
				// Move-Binding
				'anchorshot', 'block', 'destinybond', 'disable', 'encore', 'fairylock', 'firespin', 'infestation', 'jawlock', 'magnetrise', 'meanlook', 'octolock', 'powder',
				'provoke', 'reverb', 'sandtomb', 'spiderweb', 'spiritshackle', 'stickyfloor', 'taunt', 'thousandwaves', 'thundercage',
				// Fixed Damage
				'counter', 'dragonrage', 'finalgambit', 'fissure', 'guillotine', 'horndrill', 'mirrorcoat', 'naturesmadness', 'nightshade', 'ruination', 'seismictoss',
				'sheercold', 'sonicboom', 'superfang',
			],
			Support: [
				// Cleric
				'aromatherapy', 'catharsis', 'healbell', 'junglehealing', 'lunarblessing', 'refresh', 'takeheart', 'wish',
				// Field Control
				'auroraveil', 'backstab', 'ceaselessedge', 'contaminate', 'courtchange', 'creepingivy', 'defog', 'lightscreen', 'lushmoss', 'mortalspin', 'psyshieldbash',
				'rapidspin', 'reflect', 'snowshovel', 'spikes', 'stealthrock', 'stickyweb', 'stoneaxe', 'tidyup', 'toxicspikes', 'tripwire',
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

		// these are from BDSP
		const bdspMoves = (mon: string, moves: string[]) => {
			for (const move of moves) {
				this.modData('Learnsets', this.toID(mon)).learnset[this.toID(move)] = ["8S0"];
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
				this.modData('Learnsets', this.toID(mon)).learnset[this.toID(move)] = ["8S0"];
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
				this.modData('Learnsets', this.toID(mon)).learnset[this.toID(move)] = ["8S0"];
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
			'zenheadbutt', 'zingzap',
		]; // this category doesn't need to distinguish physical from special! that's handled later
		// excludes Hidden Power and Natural Gift

		let printno = 0;
		for (const id in this.dataCache.Pokedex) {
			const poke = this.dataCache.Pokedex[id];
			if (!poke || poke.evos || id.startsWith('pichu') || id.startsWith('pikachu') || id.startsWith('eevee')) continue; // skip NFEs... and anything that can't be read correctly, just in case
			/*
			if (platinumDex.includes(poke.name) || platinumDex.includes(poke.prevo) || platinumDex.includes(poke.baseSpecies) || platinumDex.includes(poke.baseForme)) poke.kind = "Platinum";
			if (bdspAndLegends.includes(poke.name) || bdspAndLegends.includes(poke.prevo) || bdspAndLegends.includes(poke.baseSpecies) || bdspAndLegends.includes(poke.baseForme)) poke.kind = "Remake";
			if (variants.includes(poke.name) || variants.includes(poke.baseForme)) poke.kind = "Variant";
			if (otherAdditions.includes(poke.name) || otherAdditions.includes(poke.prevo) || otherAdditions.includes(poke.baseSpecies) || otherAdditions.includes(poke.baseForme)) poke.kind = "Addition";
			if (legendaries.includes(poke.name) || legendaries.includes(poke.prevo) || legendaries.includes(poke.baseSpecies) || legendaries.includes(poke.baseForme)) poke.kind = "Special";
			*/
			if (id.endsWith('alola')) poke.kind = "Alola",
			if (id.endsWith('galar')) poke.kind = "Galar",
			if (id.endsWith('hisui')) poke.kind = "Hisui",
			if (id.endsWith('paldea') || id.endsWith('paldeafire') || id.endsWith('paldeawater')) poke.kind = "Paldea",
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
						},
						Special: {
							tmTutor: [],
							addTrend: [],
							natural: [],
							fringe: [],
							addOther: [],
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
					if (moveid === 'helpinghand') { // hard-coding to skip the Gen IX TM's distribution
						learned = false;
						if (learnset[moveid]) {
							for (const source of learnset[moveid]) {
								if (parseInt(source.charAt(0)) === 9 && source.charAt(1) === 'M') continue;
								learned = true;
							}
						}
						if (learnset2 && learnset2[moveid]) {
							for (const source of learnset2[moveid]) {
								if (parseInt(source.charAt(0)) === 9 && source.charAt(1) === 'M') continue;
								learned = true;
							}
						}
						if (learnset3 && learnset3[moveid]) {
							for (const source of learnset3[moveid]) {
								if (parseInt(source.charAt(0)) === 9 && source.charAt(1) === 'M') continue;
								learned = true;
							}
						}
						if (learnset4 && learnset4[moveid]) {
							for (const source of learnset4[moveid]) {
								if (parseInt(source.charAt(0)) === 9 && source.charAt(1) === 'M') continue;
								learned = true;
							}
						}
					}
					if (!learned) {
						let oriLearned = false;
						let oldestGen = 7;
						if (poke.kind === "Galar") oldestGen = 8;
						if (poke.kind === "Hisui") oldestGen = 9;
						if (poke.kind === "Paldea") oldestGen = 9;
						
						// gather the non-variant line's learnsets
						const oriPoke = this.dataCache.Pokedex[this.toID(poke.baseSpecies)];
						const oriLearnset = this.modData('Learnsets', oriPoke.id).learnset;
						let oriLearnset2 = null;
						let oriLearnset3 = null;
						let oriLearnset4 = null;
						if (poke.prevo) {
							const oriPoke2 = this.dataCache.Pokedex[this.toID(poke.prevo)];
							oriLearnset2 = this.modData('Learnsets', this.toID(oriPoke.prevo)).learnset;
							if (oriPoke2.prevo) {
								oriLearnset3 = this.modData('Learnsets', this.toID(oriPoke2.prevo)).learnset;
							}
						}
						if (oriPoke.changesFrom) {
							const poke4 = this.dataCache.Pokedex[this.toID(oriPoke.changesFrom)];
							oriLearnset4 = this.modData('Learnsets', this.toID(oriPoke.changesFrom)).learnset;
						}

						// see if any of them learn the move (we already know the variant doesn't!)
						// let's not worry how they learn it - only if they do at all
						if (oriLearnset[moveid]) {
							for (const source of oriLearnset[moveid]) {
								if ((parseInt(source.charAt(0)) < oldestGen)) learned = true;
							}
						}
						if (oriLearnset2 && oriLearnset2[moveid]) { // if it has a pre-evolution and its pre-evolution learns the move
							for (const source of oriLearnset2[moveid]) {
								if ((parseInt(source.charAt(0)) < oldestGen)) learned = true;
							}
						}
						if (oriLearnset3 && oriLearnset3[moveid]) { // if it has a pre-evolution and its pre-evolution learns the move
							for (const source of oriLearnset3[moveid]) {
								if ((parseInt(source.charAt(0)) < oldestGen)) learned = true;
							}
						}
						if (oriLearnset4 && oriLearnset4[moveid]) { // if it's the third stage and its basic stage learns the move
							for (const source of oriLearnset4[moveid]) {
								if ((parseInt(source.charAt(0)) < oldestGen)) learned = true;
							}
						}
						
						// if a TM or tutor is not learned, decide if it belongs in addTrend or addOther
						// should still distinguish between competitive and flavor like above!
						let addRule = "addOther";
						if (pulseTms.includes(moveid) || pulseTutors.includes(moveid)) addRule = "addTrend";

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
								poke.learnsetCumulative[type][category][addRule].push(move.name);
							}
						}
						for (const section in movepoolSections) {
							if (movepoolSections[section].includes(moveid)) {
								competitive = true;
								poke.learnsetCumulative[section].Moves[addRule].push(move.name);
							}
						}
						if (!competitive) {
							poke.learnsetCumulative.Flavor.Moves[addRule].push(move.name);
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
				for (const typeInOrder in typeOrder) {
					const moveType = typeOrder[typeInOrder];
					if (!poke.learnsetCumulative[moveType]) continue; // (stop breaking)
					if (
						poke.learnsetCumulative[moveType].Physical.natural.length || poke.learnsetCumulative[moveType].Physical.tmTutor.length ||
						poke.learnsetCumulative[moveType].Physical.fringe.length || poke.learnsetCumulative[moveType].Physical.addTrend.length || poke.learnsetCumulative[moveType].Physical.addOther.length
					) {
						sheetOutput += poke.kind + `~` + (printno) + "~6~" + moveType + "~Physical~" + poke.learnsetCumulative[moveType].Physical.tmTutor + "~" + poke.learnsetCumulative[moveType].Physical.addTrend + "~" + poke.learnsetCumulative[moveType].Physical.natural + "~" + (poke.learnsetCumulative[moveType].Physical.fringe.length ? "(" + poke.learnsetCumulative[moveType].Physical.fringe + ")" : "") + "~" + (poke.learnsetCumulative[moveType].Physical.addOther.length ? "(" + poke.learnsetCumulative[moveType].Physical.addOther + ")" : "") + "" + `\n`;
					}
					if (
						poke.learnsetCumulative[moveType].Special.natural.length || poke.learnsetCumulative[moveType].Special.tmTutor.length ||
						poke.learnsetCumulative[moveType].Special.fringe.length || poke.learnsetCumulative[moveType].Special.addTrend.length || poke.learnsetCumulative[moveType].Special.addOther.length
					) {
						sheetOutput += poke.kind + `~` + (printno) + "~6~" + moveType + "~Special~" + poke.learnsetCumulative[moveType].Special.tmTutor + "~" + poke.learnsetCumulative[moveType].Special.addTrend + "~" + poke.learnsetCumulative[moveType].Special.natural + "~" + (poke.learnsetCumulative[moveType].Special.fringe.length ? "(" + poke.learnsetCumulative[moveType].Special.fringe + ")" : "") + "~" + (poke.learnsetCumulative[moveType].Special.addOther.length ? "(" + poke.learnsetCumulative[moveType].Special.addOther + ")" : "") + "" + `\n`;
					}
				}
				for (const section in movepoolSections) {
					if (
						poke.learnsetCumulative[section].Moves.natural.length || poke.learnsetCumulative[section].Moves.tmTutor.length ||
						poke.learnsetCumulative[section].Moves.fringe.length || poke.learnsetCumulative[section].Moves.addTrend.length || poke.learnsetCumulative[section].Moves.addOther.length
					) {
						sheetOutput += poke.kind + `~` + (printno) + "~7~" + section + "~~" + poke.learnsetCumulative[section].Moves.tmTutor + "~" + poke.learnsetCumulative[section].Moves.addTrend + "~" + poke.learnsetCumulative[section].Moves.natural + "~" + (poke.learnsetCumulative[section].Moves.fringe.length ? "(" + poke.learnsetCumulative[section].Moves.fringe + ")" : "") + "~" + (poke.learnsetCumulative[section].Moves.addOther.length ? "(" + poke.learnsetCumulative[section].Moves.addOther + ")" : "") + "" + `\n`;
					}
				}
				sheetOutput += (printno) + "~8~";
				let sheetOutput2: string[] = [
					(poke3 ? poke.kind + `~` + (printno) + `~1~=IMAGE("https://www.smogon.com/forums//media/minisprites/` + poke3id + `.png",3)~~` + poke3.name + "~" + poke3.types[0] + "~" + (poke3.types[1] ? poke3.types[1] : "") + "~" + poke3abilities + "~" + poke3.baseStats.hp + "~" + poke3.baseStats.atk + "~" + poke3.baseStats.def + "~" + poke3.baseStats.spa + "~" + poke3.baseStats.spd + "~" + poke3.baseStats.spe + "~" + `\n` : "")
					+ (poke2 ? poke.kind + `~` + (printno) + `~2~=IMAGE("https://www.smogon.com/forums//media/minisprites/` + poke2id + `.png",3)~~` + poke2.name + "~" + poke2.types[0] + "~" + (poke2.types[1] ? poke2.types[1] : "") + "~" + poke2abilities + "~" + poke2.baseStats.hp + "~" + poke2.baseStats.atk + "~" + poke2.baseStats.def + "~" + poke2.baseStats.spa + "~" + poke2.baseStats.spd + "~" + poke2.baseStats.spe + "~" + `\n` : "")
					+ poke.kind + `~` + (printno) + `~3~=IMAGE("https://www.smogon.com/forums//media/minisprites/` + iconid + `.png",3)~~` + poke.name + "~" + poke.types[0] + "~" + (poke.types[1] ? poke.types[1] : "") + "~" + abilities + "~" + poke.baseStats.hp + "~" + poke.baseStats.atk + "~" + poke.baseStats.def + "~" + poke.baseStats.spa + "~" + poke.baseStats.spd + "~" + poke.baseStats.spe + "~" + `\n`
					+ (printno) + "~8~"
				]; // abbreviated version
				
				poke.sheetOutput = sheetOutput;
				poke.sheetOutput2 = sheetOutput2;
			}
		}
	},
};
