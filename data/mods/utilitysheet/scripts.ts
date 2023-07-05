export const Scripts: ModdedBattleScriptsData = {
	init() {
		const svTms = [
			'bodyslam', 'facade', 'falseswipe', 'gigaimpact', 'takedown', 'hyperbeam', 'hypervoice', 'swift', 'terablast', 'batonpass', 'encore', 'endure',
			'helpinghand', 'metronome', 'protect', 'scaryface', 'sleeptalk', 'substitute', 'swordsdance', 'firefang', 'firepunch', 'flamecharge', 'flareblitz',
			'blastburn', 'fireblast', 'firepledge', 'firespin', 'flamethrower', 'heatwave', 'overheat', 'sunnyday', 'willowisp', 'liquidation', 'waterfall',
			'chillingwater', 'hydrocannon', 'hydropump', 'surf', 'waterpledge', 'waterpulse', 'raindance', 'thunderfang', 'thunderpunch', 'wildcharge',
			'chargebeam', 'electroball', 'thunder', 'thunderbolt', 'voltswitch', 'eerieimpulse', 'electricterrain', 'thunderwave', 'bulletseed', 'seedbomb',
			'trailblaze', 'energyball', 'frenzyplant', 'gigadrain', 'grassknot', 'grasspledge', 'leafstorm', 'magicalleaf', 'solarbeam', 'grassyterrain',
			'avalanche', 'icefang', 'icepunch', 'icespinner', 'blizzard', 'icebeam', 'icywind', 'snowscape', 'bodypress', 'brickbreak', 'closecombat',
			'drainpunch', 'lowkick', 'lowsweep', 'reversal', 'aurasphere', 'focusblast', 'bulkup', 'gunkshot', 'poisonjab', 'poisontail', 'acidspray',
			'sludgebomb', 'venoshock', 'toxicspikes', 'bulldoze', 'dig', 'drillrun', 'earthquake', 'stompingtantrum', 'earthpower', 'mudshot', 'mudslap',
			'spikes', 'acrobatics', 'aerialace', 'bravebird', 'fly', 'aircutter', 'airslash', 'hurricane', 'tailwind', 'psychicfangs', 'zenheadbutt', 'psybeam',
			'psychic', 'psyshock', 'storedpower', 'agility', 'amnesia', 'calmmind', 'imprison', 'lightscreen', 'psychicterrain', 'reflect', 'rest', 'skillswap',
			'trick', 'trickroom', 'leechlife', 'pounce', 'uturn', 'xscissor', 'bugbuzz', 'pollenpuff', 'strugglebug', 'rockblast', 'rockslide', 'rocktomb',
			'stoneedge', 'powergem', 'sandstorm', 'stealthrock', 'phantomforce', 'shadowclaw', 'hex', 'nightshade', 'shadowball', 'confuseray', 'dragonclaw',
			'dragontail', 'outrage', 'dracometeor', 'dragonpulse', 'dragondance', 'crunch', 'fling', 'foulplay', 'thief', 'darkpulse', 'snarl', 'faketears',
			'nastyplot', 'taunt', 'heavyslam', 'ironhead', 'metalclaw', 'smartstrike', 'flashcannon', 'steelbeam', 'irondefense', 'playrough', 'dazzlinggleam',
			'disarmingvoice', 'drainingkiss'
		];
		const dexitedMoves = [
			'karatechop', 'doubleslap', 'cometpunch', 'razorwind', 'jumpkick', 'rollingkick', 'twineedle', 'sonicboom', 'submission', 'dragonrage', 'meditate', 
			'rage', 'barrier', 'bide', 'mirrormove', 'eggbomb', 'boneclub', 'clamp', 'skullbash', 'spikecannon', 'constrict', 'kinesis', 'barrage', 'lovelykiss', 
			'bubble', 'dizzypunch', 'flash', 'psywave', 'bonemerang', 'hyperfang', 'sharpen', 'conversion', 'sketch', 'triplekick', 'spiderweb', 'mindreader', 
			'nightmare', 'conversion2', 'aeroblast', 'feintattack', 'octazooka', 'foresight', 'return', 'frustration', 'sacredfire', 'magnitude', 'pursuit', 
			'vitalthrow', 'hiddenpower', 'hail', 'smellingsalts', 'naturepower', 'assist', 'magiccoat', 'revenge', 'refresh', 'grudge', 'snatch', 'secretpower', 
			'camouflage', 'tailglow', 'lusterpurge', 'mistball', 'mudsport', 'iceball', 'needlearm', 'aromatherapy', 'odorsleuth', 'silverwind', 'grasswhistle', 
			'signalbeam', 'skyuppercut', 'watersport', 'doomdesire', 'psychoboost', 'miracleeye', 'wakeupslap', 'naturalgift', 'embargo', 'psychoshift', 
			'trumpcard', 'healblock', 'wringout', 'luckychant', 'mefirst', 'punishment', 'mudbomb', 'mirrorshot', 'rockclimb', 'rockwrecker', 'magnetbomb', 
			'captivate', 'chatter', 'healorder', 'crushgrip', 'darkvoid', 'seedflare', 'ominouswind', 'autotomize', 'telekinesis', 'stormthrow', 'flameburst', 
			'synchronoise', 'chipaway', 'skydrop', 'bestow', 'dualchop', 'heartstamp', 'leaftornado', 'steamroller', 'headcharge', 'geargrind', 'searingshot', 
			'technoblast', 'secretsword', 'glaciate', 'boltstrike', 'blueflare', 'freezeshock', 'iceburn', 'fusionflare', 'fusionbolt', 'matblock', 'rototiller', 
			'trickortreat', 'iondeluge', 'forestscurse', 'topsyturvy', 'craftyshield', 'flowershield', 'electrify', 'kingsshield', 'venomdrench', 'powder', 
			'geomancy', 'poweruppunch', 'oblivionwing', 'thousandarrows', 'thousandwaves', 'landswrath', 'lightofruin', 'sparklingaria', 'floralhealing', 
			'spotlight', 'toxicthread', 'laserfocus', 'gearup', 'anchorshot', 'purify', 'coreenforcer', 'beakblast', 'clangingscales', 'dragonhammer', 
			'shelltrap', 'shadowbone', 'prismaticlaser', 'spectralthief', 'sunsteelstrike', 'moongeistbeam', 'naturesmadness', 'multiattack', 
			'mindblown', 'plasmafists', 'photongeyser', 'doubleironbash', 'maxguard', 'octolock', 'boltbeak', 'fishiousrend', 'clangoroussoul', 'decorate', 
			'snaptrap', 'aurawheel', 'strangesteam', 'obstruct', 'meteorassault', 'eternabeam', 
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
				'shiftgear', 'stockpile', 'stuffcheeks', 'swordsdance', 'tailglow', 'takeheart', 'trailblaze', 'triplearrows', 'victorydance',
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

		// declaring which moves are "competitive" in general
		const attackRMs = [
			'accelerock', 'aciddrench', 'acidspray', 'acrobatics', 'adrenalinerush', 'aerialace', 'aeroblast', 'aftershock', 'airslash', 'anchorshot',
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
			'rockwrecker', 'roilingwaves', 'runningbolt', 'sacredfire', 'sacredsword', 'saltcure', 'sandsearstorm', 'scald', 'scaleshot', 'scorchingsands',
			'searingshot', 'secretsword', 'seedbomb', 'seedflare', 'selfdestruct', 'shadowball', 'shadowbone', 'shadowclaw', 'shadowforce', 'shadowsneak', 'shadydeal',
			'shellsidearm', 'shelltrap', 'signalbeam', 'skittersmack', 'skyattack', 'skyuppercut', 'sleightofhand', 'sludgebomb', 'sludgewave',
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
			if (!poke || poke.evos) continue; // skip NFEs... and anything that can't be read correctly, just in case
			const groupBUnbanlist = [
				"Agonette", "Alchevul", "Androimatide", "Armaruin", "Awesdruk", "Baashful", "Basilud", "Brasshopper", "Bruined", "Caddismith", "Caeruleto", "Capanopy", "Cardborg", "Carecrow", "Cavvage", "Chitana", "Chloravage", "Chubee", "Cloconstruct", "Covloris", "Croakast", "Cryosaurite", "Diabol", "Draatle", "Dreampunk", "Esporesce", "Faeraith", "Falstiletto", "Fendeerie", "Ferticotta", "Flumflare", "Fridgeate", "Frozalisk", "Fulmineus", "Funera", "Gachacha", "Gastrel", "Gnomeush", "Gorilax", "Harmadillo", "Hydrongea", "IronRailgun", "Jab-bark", "Jamborai", "Kaledzi", "Kepa-ying", "Klimausion", "Kurayami", "Lepwozectur", "Libuble", "Lizhaman", "Locustab", "Marshwift", "Matitrick", "Melethyst", "Mochiknight", "Mon-Chi", "Mustank", "Neuranium", "Ohlmagoon", "Orbitgami", "Origyrant", "Pandamonium", "Phantasail", "Phanthazem", "Plasmacaw", "Pompadork", "Possabomb", "Pyrelic", "Pyroccult", "Pyrove", "Ralirulero", "Rexxon", "Roquack", "Roseaphot", "Sail-Goshi", "Sapparine", "Scorjester", "Scorpdyceps", "Searberus", "Shockatrice", "Snowpea", "Spectache", "Spirem", "Spongimney", "Squwhirrl", "Sundon", "Surchin", "Thorbarage", "Tiramitzu", "Tometex", "Tusquoka-Agent", "Tyrannyan", "Vamperilico", "Velvittle", "Vesquadron", "Vulchar", "Wiifii", "Wildemyst", "Zassansa", "Zauryo", "Zenoise", "Zunowy",
			];
			if (poke.num > 999) {
				poke.kind = "Group B";
			} else if (groupBUnbanlist.includes(poke.species)) {
				poke.kind = "Group AB";
			} else {
				poke.kind = "Group A";
			}
			if (this.dataCache.Learnsets[id] && this.dataCache.Learnsets[id].learnset) {
				printno++;
				poke.learnsetCumulative = {};
				for (const moveType in this.dataCache.TypeChart) {
					poke.learnsetCumulative[moveType] = {
						Physical: {
							tmTutor: [],
							natural: [],
							fringe: [],
						},
						Special: {
							tmTutor: [],
							natural: [],
							fringe: [],
						},
					};
				}
				for (const section in movepoolSections) {
					poke.learnsetCumulative[section] = {
						Moves: {
							tmTutor: [],
							natural: [],
							fringe: [],
						},
					};
				}

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

					// a simplified version of the Pulse learnset sheet:
					// only decide a) if the Pokémon learns the move at all and b) if it's a safe bet it still gets it in Pulse or not
					// "fringe moves" and transfer-only moves and future buffs are all lumped into one category unless they're TMs or tutors in Pulse
					let learned = false;
					let learnedNatural = false;
					let learnedTmTutor = svTms.includes(moveid);
					if (learnset[moveid] || ((learnset2 && learnset2[moveid])) || ((learnset3 && learnset3[moveid])) || (learnset4 && learnset4[moveid])) { // if it learns the move itself
						for (const source of learnset[moveid]) {
							learned = true;
							learnedNatural = true;
						}
					}
					if (learned) {

						// okay, so we know the move! now we need to figure out where it goes
						let competitive = false;
						if (dexitedMoves.includes(moveid)) learnedNatural = learnedTmTutor = false; // list these, but force them to be fringe moves

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
								if (learnedTmTutor) poke.learnsetCumulative[type][category].tmTutor.push(move.name);
								else if (learnedNatural) poke.learnsetCumulative[type][category].natural.push(move.name);
								else poke.learnsetCumulative[type][category].fringe.push(move.name);
							}
						}
						for (const section in movepoolSections) {
							if (movepoolSections[section].includes(moveid)) {
								competitive = true;
								if (learnedTmTutor) poke.learnsetCumulative[section].Moves.tmTutor.push(move.name);
								else if (learnedNatural) poke.learnsetCumulative[section].Moves.natural.push(move.name);
								else poke.learnsetCumulative[section].Moves.fringe.push(move.name);
							}
						}

						if (!competitive) {
							// push the move's name to the appropriate categories
							if (learnedTmTutor) poke.learnsetCumulative.Flavor.Moves.tmTutor.push(move.name);
							else if (learnedNatural) poke.learnsetCumulative.Flavor.Moves.natural.push(move.name);
							else poke.learnsetCumulative.Flavor.Moves.fringe.push(move.name);
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
				var iconname = poke.species.toLowerCase();
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
					+ poke.kind + `~` + (printno) + `~3~=IMAGE("https://www.smogon.com/forums//media/minisprites/` + iconid + `.png",3)~~` + poke.species + "~" + poke.types[0] + "~" + (poke.types[1] ? poke.types[1] : "") + "~" + abilities + "~" + poke.baseStats.hp + "~" + poke.baseStats.atk + "~" + poke.baseStats.def + "~" + poke.baseStats.spa + "~" + poke.baseStats.spd + "~" + poke.baseStats.spe + "~" + `\n`
					+ poke.kind + `~` + (printno) + `~4~\n`
					+ poke.kind + `~` + (printno) + "~5~TM and Tutor~Additional Trends~Natural~Fringe~Substitutions" + `\n`
				];
				for (const typeInOrder in typeOrder) {
					const moveType = typeOrder[typeInOrder];
					if (!poke.learnsetCumulative[moveType]) continue; // (stop breaking)
					if (
						poke.learnsetCumulative[moveType].Physical.natural.length || poke.learnsetCumulative[moveType].Physical.tmTutor.length ||
						poke.learnsetCumulative[moveType].Physical.fringe.length
					) {
						sheetOutput += poke.kind + `~` + (printno) + "~6~" + moveType + "~Physical~" + poke.learnsetCumulative[moveType].Physical.tmTutor + "~" + poke.learnsetCumulative[moveType].Physical.natural + "~" + (poke.learnsetCumulative[moveType].Physical.fringe.length ? "(" + poke.learnsetCumulative[moveType].Physical.fringe + ")" : "") + `\n`;
					}
					if (
						poke.learnsetCumulative[moveType].Special.natural.length || poke.learnsetCumulative[moveType].Special.tmTutor.length ||
						poke.learnsetCumulative[moveType].Special.fringe.length
					) {
						sheetOutput += poke.kind + `~` + (printno) + "~6~" + moveType + "~Special~" + poke.learnsetCumulative[moveType].Special.tmTutor + "~" + poke.learnsetCumulative[moveType].Special.natural + "~" + (poke.learnsetCumulative[moveType].Special.fringe.length ? "(" + poke.learnsetCumulative[moveType].Special.fringe + ")" : "") + `\n`;
					}
				}
				for (const section in movepoolSections) {
					if (
						poke.learnsetCumulative[section].Moves.natural.length || poke.learnsetCumulative[section].Moves.tmTutor.length ||
						poke.learnsetCumulative[section].Moves.fringe.length
					) {
						sheetOutput += poke.kind + `~` + (printno) + "~7~" + section + "~~" + poke.learnsetCumulative[section].Moves.tmTutor + "~" + poke.learnsetCumulative[section].Moves.natural + "~" + (poke.learnsetCumulative[section].Moves.fringe.length ? "(" + poke.learnsetCumulative[section].Moves.fringe + ")" : "") + `\n`;
					}
				}
				sheetOutput += (printno) + "~8~";
				let sheetOutput2: string[] = [
					(poke3 ? poke.kind + `~` + (printno) + `~1~=IMAGE("https://www.smogon.com/forums//media/minisprites/` + poke3id + `.png",3)~~` + poke3.name + "~" + poke3.types[0] + "~" + (poke3.types[1] ? poke3.types[1] : "") + "~" + poke3abilities + "~" + poke3.baseStats.hp + "~" + poke3.baseStats.atk + "~" + poke3.baseStats.def + "~" + poke3.baseStats.spa + "~" + poke3.baseStats.spd + "~" + poke3.baseStats.spe + "~" + `\n` : "")
					+ (poke2 ? poke.kind + `~` + (printno) + `~2~=IMAGE("https://www.smogon.com/forums//media/minisprites/` + poke2id + `.png",3)~~` + poke2.name + "~" + poke2.types[0] + "~" + (poke2.types[1] ? poke2.types[1] : "") + "~" + poke2abilities + "~" + poke2.baseStats.hp + "~" + poke2.baseStats.atk + "~" + poke2.baseStats.def + "~" + poke2.baseStats.spa + "~" + poke2.baseStats.spd + "~" + poke2.baseStats.spe + "~" + `\n` : "")
					+ poke.kind + `~` + (printno) + `~3~=IMAGE("https://www.smogon.com/forums//media/minisprites/` + iconid + `.png",3)~~` + poke.species + "~" + poke.types[0] + "~" + (poke.types[1] ? poke.types[1] : "") + "~" + abilities + "~" + poke.baseStats.hp + "~" + poke.baseStats.atk + "~" + poke.baseStats.def + "~" + poke.baseStats.spa + "~" + poke.baseStats.spd + "~" + poke.baseStats.spe + "~" + `\n`
					+ (printno) + "~8~"
				]; // abbreviated version
				
				poke.sheetOutput = sheetOutput;
				poke.sheetOutput2 = sheetOutput2;
			}
		}
	},
};
