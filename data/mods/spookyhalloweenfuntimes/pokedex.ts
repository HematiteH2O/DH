export const Pokedex: {[speciesid: string]: ModdedSpeciesData} = {
//{hp: , atk: , def: , spa: , spd: , spe: }
//Oh yeah, also I didn't put numbers on anything haha um go ahead and fix tha if you need
	golbat: {
		inherit: true,
		evos: ["Crobat", "Groabat"],
	},
	groabat: {
		name: "Groabat",
		copyData: "Crobat",
		
		types: ["Dark", "Flying"],
		baseStats: {hp: 85, atk: 80, def: 80, spa: 80, spd: 80, spe: 130},
		abilities: {0: "Night Shift"},
		copyMoves: "Golbat",
		movepoolAdditions: ["ancientpower", "darkpulse", "hex", "hurricane", "powergem"],
		
		prevo: "Golbat",
		evoType: "other",
		evoCondition: "A newly-discovered evolution",
		otherFormes: ["Groabat-Waking"],
		formeOrder: ["Groabat, Groabat-Waking"],
		
		creator: "quagsi",
		modOrigin: "Halloween 2022",
	},
	groabatwaking: {
		name: "Groabat-Waking",
		baseSpecies: "Groabat",
		forme: "Waking",
		copyData: "Crobat",
		
		types: ["Dark", "Rock"],
		baseStats: {hp: 85, atk: 110, def: 50, spa: 120, spd: 100, spe: 90},
		abilities: {0: "Night Shift"},
		copyMoves: "Golbat",
		movepoolAdditions: ["ancientpower", "darkpulse", "hex", "hurricane", "powergem"],
		
		requiredAbility: "Night Shift",
		battleOnly: "Groabat",
		
		creator: "quagsi",
		modOrigin: "Halloween 2022",
	},
	possesevoir: {
		name: "Possesevoir",
		copyData: "Gardevoir",
		
		types: ["Ghost", "Fairy"],
		baseStats: {hp: 63, atk: 65, def: 85, spa: 125, spd: 120, spe: 60},
		abilities: {0: "Trace", 1: "Afterimage", H: "Telepathy"},
		movepoolAdditions: ["hex"],
		
		creator: "BlueRay",
		modOrigin: "Halloween 2022",
	},
	fealine: {
		name: "Fealine",
		types: ["Ghost"],
		baseStats: {hp: 99, atk: 113, def: 70, spa: 108, spd: 63, spe: 111},
		abilities: {0: "Rattled", 1: "Tough Claws", H: "Super Luck"},
		//Learnsets.ts 
		heightm: 1,//Persian
		weightkg: 32,
		
		creator: "quagsi",
		modOrigin: "Halloween 2022",
	},
	simipour: {
		inherit: true,
		evos: ["Gorillipour"],
	},
	gorillipour: {
		name: "Gorillipour",
		copyData: "Simipour",
		
		types: ["Water"],
		baseStats: {hp: 75, atk: 108, def: 63, spa: 108, spd: 63, spe: 111},
		abilities: {0: "Spectral Surfer", H: "Torrent"},
		movepoolAdditions: ["spiritshackle", "shadowball", "lifedew"],
		
		prevo: "Simipour",
		evoType: "other",
		evoCondition: "A newly-discovered evolution",
		
		creator: "Bolivia",
		modOrigin: "Halloween 2022",
	},
	drampa: {
		inherit: true,
		otherFormes: ["Drampa-Mega-Aged", "Drampa-Mega-Untimely"],
		formeOrder: ["Drampa", "Drampa-Mega-Aged", "Drampa-Mega-Untimely"],
	},
	drampamegaaged: {
		name: "Drampa-Mega-Aged",
		baseSpecies: "Drampa",
		forme: "Mega-Aged",
		copyData: "Drampa",
		
		types: ["Normal", "Dragon"],
		baseStats: {hp: 78, atk: 90, def: 115, spa: 145, spd: 121, spe: 35},
		abilities: {0: "Clear Body"},
		
		battleOnly: "Drampa",
		requiredItem: "Drampanite Aged",
		
		creator: "Bolivia",
		modOrigin: "Halloween 2022",
	},
	drampamegauntimely: {
		name: "Drampa-Mega-Untimely",
		baseSpecies: "Drampa",
		forme: "Mega-Untimely",
		copyData: "Drampa",
		
		types: ["Ghost", "Dragon"],
		baseStats: {hp: 78, atk: 90, def: 115, spa: 145, spd: 121, spe: 35},
		abilities: {0: "Cursed Body"},
		
		battleOnly: "Drampa",
		requiredItem: "Drampanite Untimely",
		
		creator: "Bolivia",
		modOrigin: "Halloween 2022",
	},
	popplio: {
		inherit: true,
		otherFormes: ["Popplio-Hallowed"],
		formeOrder: ["Popplio", "Popplio-Hallowed"],
	},
	poppliohallowed: {
		name: "Popplio-Hallowed",
		baseSpecies: "Popplio",
		forme: "Hallowed",
		copyData: "Popplio",
		
		types: ["Fighting", "Fairy"],
		abilities: {0: "Regenerator", H: "Dancer"},
		movepoolDeletions: ["hydropump", "scald", "surf", "aquaring"],
		
		evos: ["Brionne-Hallowed"],
		modOrigin: "Halloween 2022",
	},
	brionne: {
		inherit: true,
		otherFormes: ["Brionne-Hallowed"],
		formeOrder: ["Brionne", "Brionne-Hallowed"],
	},
	brionnehallowed: {
		name: "Brionne-Hallowed",
		baseSpecies: "Brionne",
		forme: "Hallowed",
		copyData: "Brionne",
		
		types: ["Fighting", "Fairy"],
		abilities: {0: "Regenerator", H: "Dancer"},
		movepoolDeletions: ["hydropump", "scald", "surf", "aquaring"],
		
		prevo: "Popplio-Hallowed",
		evos: ["Primarina-Hallowed"],
		modOrigin: "Halloween 2022",
	},
	primarina: {
		inherit: true,
		otherFormes: ["Primarina-Hallowed"],
		formeOrder: ["Primarina", "Primarina-Hallowed"],
	},
	primarinahallowed: {
		name: "Primarina-Hallowed",
		baseSpecies: "Primarina",
		forme: "Hallowed",
		copyData: "Primarina",
		
		types: ["Fighting", "Fairy"],
		baseStats: {hp: 80, atk: 94, def: 74, spa: 106, spd: 116, spe: 60},
		abilities: {0: "Regenerator", H: "Dancer"},
		movepoolAdditions: [
			"highjumpkick", "nightslash", "thrash", 
			"aurasphere", "boomburst", "darkpulse", "flashcannon", "focusblast", "jumpscare",
			"metalsound"],
		movepoolDeletions: [
			"liquidation",
			"hydropump", "scald", "surf",
			"aquaring"
		],
		
		prevo: "Brionne-Hallowed",
		evoType: "other",
		evoCondition: "During a special time of year, with a metal CD...",
		
		creator: "quagsi",
		modOrigin: "Halloween 2022",
	},
	charmeleon: {
		inherit: true,
		evos: ["Charizard", "Charizard-Hallowed"],
	},
	charizard: {
		inherit: true,
		otherFormes: ["Charizard-Mega-X", "Charizard-Mega-Y", "Charizard-Hallowed"],
		formeOrder: ["Charizard", "Charizard-Mega-X", "Charizard-Mega-Y", "Charizard-Hallowed"],
	},
	charizardhallowed: {
		name: "Charizard-Hallowed",
		baseSpecies: "Charizard",
		forme: "Hallowed",
		copyData: "Charizard",
		
		types: ["Poison", "Flying"],
		baseStats: {hp: 88, atk: 84, def: 78, spa: 99, spd: 85, spe: 100},
		abilities: {0: "Flash Fire", H: "Poison Point"},
		movepoolAdditions: ["crosspoison", "belch", "clearsmog", "venoshock", "toxicspikes"],
		
		prevo: "Charmeleon",
		evoType: "other",
		evoCondition: "During a special time of year, with a bag of dice...",
		
		creator: "Paulluxx",
		modOrigin: "Halloween 2022",
	},
	grotle: {
		inherit: true,
		evos: ["Torterra", "Torterra-Hallowed"],
	},
	torterra: {
		inherit: true,
		otherFormes: ["Torterra-Hallowed"],
		formeOrder: ["Torterra", "Torterra-Hallowed"],
	},
	torterrahallowed: {
		name: "Torterra-Hallowed",
		baseSpecies: "Torterra",
		forme: "Hallowed",
		copyData: "Torterra",
		
		types: ["Dark", "Ground"],
		baseStats: {hp: 95, atk: 99, def: 105, spa: 85, spd: 85, spe: 56},
		abilities: {0: "Berserk", H: "Lightning Rod"},
		movepoolAdditions: ["forcefulburial", "jawlock", "assurance", "lashout", "obstruct", "darkpulse", "grudge"],
		movepoolDeletions: ["frenzyplant", "ironhead", "rockpolish"],
		
		prevo: "Grotle",
		evoType: "other",
		evoCondition: "During a special time of year, with a worn-down tombstone...",
		
		creator: "ink",
		modOrigin: "Halloween 2022",
	},
	roserade: {
		//i *think* this pokemons supposed to just be modded
		//but IDK change it if you want...?
		inherit: true,
		//baseForme: "Treat", //???????like meloetta????? you might need to fix all of this
		baseForme: "Star",
		movepoolAdditions: ["exitsmiling", "knockoff", "pursuit", "darkpulse", "encore"],
		//otherFormes: ["Roserade-Trick"],
		//formeOrder: ["Roserade", "Roserade-Trick"],
		otherFormes: ["Roserade-Stagehand"],
		formeOrder: ["Roserade", "Roserade-Stagehand"],
	},
	roseradestagehand: {
		name: "Roserade-Stagehand",
		baseSpecies: "Roserade",
		forme: "Stagehand",
		copyData: "Roserade",
		
		types: ["Dark", "Poison"],
		movepoolAdditions: ["exitsmiling", "knockoff", "pursuit", "darkpulse", "encore"], //IDK?
		
		battleOnly: "Roserade",
		requiredMove: "Exit Smiling", //????
		
		creator: "Albatross",
		modOrigin: "Halloween 2022",
	},
	salandit: {
		inherit: true,
		otherFormes: ["Salandit-Hallowed"],
		formeOrder: ["Salandit", "Salandit-Hallowed"],
	},
	salandithallowed: {
		name: "Salandit-Hallowed",
		baseSpecies: "Salandit",
		forme: "Hallowed",
		copyData: "Salandit",
		
		types: ["Poison"],//lol sorry
		movepoolDeletions: ["ember", "fireblast", "flameburst", "flamecharge", "flamethrower", "heatwave", "incinerate", "overheat"],
		evos: ["Salazzle-Hallowed"],
		modOrigin: "Halloween 2022",
	},
	salazzle: {
		inherit: true,
		otherFormes: ["Salazzle-Hallowed"],
		formeOrder: ["Salazzle", "Salazzle-Hallowed"],
	},
	salazzlehallowed: {
		name: "Salazzle-Hallowed",
		baseSpecies: "Salazzle",
		forme: "Hallowed",
		copyData: "Salazzle",
		
		types: ["Psychic", "Poison"],
		baseStats: {hp: 68, atk: 84, def: 60, spa: 101, spd: 60, spe: 107},
		abilities: {0: "Poison Touch", H: "Oblivious"},
		movepoolAdditions: ["hex", "psychic", "psyshock", "calmmind", "recover"],
		movepoolDeletions: ["ember", "fireblast", "flameburst", "flamecharge", "flamethrower", "heatwave", "incinerate", "overheat", "flareblitz"],
		
		prevo: "Salandit-Hallowed",
		evoType: "other",
		evoCondition: "During a special time of year, with a supernatural revelation...",
		
		creator: "ausma",
		modOrigin: "Halloween 2022",
	},
	golurk: {
		inherit: true,
		otherFormes: ["Golurk-Hallowed"],
		formeOrder: ["Golurk", "Golurk-Hallowed"],
	},
	golurkhallowed: {
		name: "Golurk-Hallowed",
		baseSpecies: "Golurk",
		forme: "Hallowed",
		copyData: "Golurk",
		
		types: ["Ground"],
		baseStats: {hp: 89, atk: 144, def: 70, spa: 55, spd: 70, spe: 55},
		abilities: {0: "Life Strike"},
		movepoolAdditions: ["shoreup"],
		movepoolDeletions: ["stoneedge"],
		
		prevo: "Golett",
		evoType: "other",
		evoCondition: "During a special time of year, with a jolt of electricity...",
		
		creator: "ausma",
		modOrigin: "Halloween 2022",
	},
	hauntarant: {
		name: "Hauntarant",
		types: ["Ghost", "Bug"],
		baseStats: {hp: 75, atk: 100, def: 65, spa: 65, spd: 65, spe: 115},
		abilities: {0: "Compound Eyes", 1: "Infiltrator", H: "Cursed Body"},
		//Learnsets.ts 
		heightm: 1.6,//Haunter
		weightkg: 0.1,
		color: "Purple",
		eggGroups: ["Amorphous"],
		
		creator: "abismal",
		modOrigin: "Halloween 2022",
	},
	necromander: {
		name: "Necromander",
		copyData: "Heliolisk",
		
		types: ["Electric", "Dark"],
		baseStats: {hp: 111, atk: 74, def: 65, spa: 86, spd: 82, spe: 63},
		abilities: {0: "Necromancy", H: "Desecrate"},
		movepoolAdditions: ["luckychant", "haze", "suckerpunch", "quash", "faketears"],
		movepoolDeletions: ["sunnyday", "solarbeam", "focusblast", "hypervoice", "firepunch"],
		
		prevo: "Helioptile",
		evoType: "useItem",
		evoItem: "Moon Stone",
		
		creator: "ink",
		modOrigin: "Halloween 2022",
	},
	cozminea: {
		//do i just edit the base forme here?????? idk?????
		//if we want to use this mod file for anything else i might as well copy it over proper
		//hopefully i dont fuck up the alt forme stuff... SIGH
		name: "Cozminea",
		baseForme: "Mini",
		types: ["Normal", "Psychic"],
		baseStats: {hp: 125, atk: 32, def: 72, spa: 58, spd: 73, spe: 111},
		abilities: {0: "Levitate", 1: "Cheek Pouch", H: "True Growth"},
		weightkg: 3,
		creator: "Paulluxx",
		otherFormes: ["Cozminea-True", "Cozminea-Hallowed", "Cozminevil"],
		formeOrder: ["Cozminea", "Cozminea-True", "Cozminea-Hallowed", "Cozminevil"],
		modOrigin: "CCD2",
	},
	cozmineatrue: {
		name: "Cozminea-True",
		baseSpecies: "Cozminea",
		forme: "True",
		types: ["Dark", "Psychic"],
		baseStats: {hp: 125, atk: 118, def: 92, spa: 142, spd: 92, spe: 81},
		abilities: {0: "True Growth"},
		weightkg: 999.9,
		battleOnly: "Cozminea",
		requiredAbility: "True Growth",
		creator: "Paulluxx",
		modOrigin: "CCD2",
	},
	cozmineahallowed: {
		name: "Cozminea-Hallowed",
		baseSpecies: "Cozminea",
		forme: "Hallowed",
		types: ["Normal", "Fairy"],
		baseStats: {hp: 125, atk: 32, def: 72, spa: 78, spd: 73, spe: 91},
		abilities: {0: "Sap Sipper", 1: "Cheek Pouch", H: "True Growth"},
		weightkg: 3,
		creator: "Paulluxx",
		modOrigin: "Halloween 2022",
	},
	cozminevil: {
		name: "Cozminevil",
		baseSpecies: "Cozminea",
		forme: "Evil",
		types: ["Dark", "Fairy"],
		baseStats: {hp: 125, atk: 142, def: 92, spa: 138, spd: 92, spe: 61},
		abilities: {0: "True Growth"},
		weightkg: 999.9,
		battleOnly: "Cozminea-Hallowed",
		requiredAbility: "True Growth",
		creator: "Paulluxx",
		modOrigin: "Halloween 2022",
	},
	//Copy-pasting stuff from other places now(?)
	poultergeist: {
		num: -1004,
		name: "Poultergeist",
		types: ["Fire", "Flying"],
		baseStats: {hp: 105, atk: 65, def: 85, spa: 105, spd: 85, spe: 73},
		abilities: {0: "Chicken Out"},
		heightm: .7,
		weightkg: 2.6,
		color: "Red",
		eggGroups: ["Flying"],
		otherFormes: ["Poultergeist-Headless"],
		formeOrder: ["Poultergeist", "Poultergeist-Headless"],
		creator: "Hematite",
		modOrigin: "CCD",
	},
	poultergeistheadless: {
		num: -1004,
		name: "Poultergeist-Headless",
		baseSpecies: "Poultergeist",
		forme: "Headless",
		types: ["Fire", "Ghost"],
		baseStats: {hp: 1, atk: 65, def: 85, spa: 105, spd: 85, spe: 113},
		abilities: {0: "Wonder Guard"},
		heightm: .6,
		weightkg: 2.2,
		color: "Red",
		eggGroups: ["Flying"],
		battleOnly: "Poultergeist", 
		creator: "Hematite",
		modOrigin: "CCD",
	},
	cobroom: {
		num: -3005,
		name: "Cobroom",
		baseForme: "Alchemist",
		types: ["Poison", "Fairy"],
		baseStats: {hp: 75, atk: 65, def: 115, spa: 70, spd: 115, spe: 60},
		abilities: {0: "Arcane Switch"},
		weightkg: 670,
		otherFormes: ["Cobroom-Sorcerer"],
		formeOrder: ["Cobroom", "Cobroom-Sorcerer"],
		creator: "Magmajudis",
		modOrigin: "CCD2",
	},
	cobroomsorcerer: {
		num: -3005,
		name: "Cobroom-Sorcerer",
		baseSpecies: "Cobroom",
		forme: "Sorcerer",
		types: ["Dark", "Fairy"],
		baseStats: {hp: 75, atk: 135, def: 65, spa: 65, spd: 65, spe: 95},
		abilities: {0: "Arcane Switch"},
		weightkg: 670,
		battleOnly: "Cobroom",
		creator: "Magmajudis",
		modOrigin: "CCD2",
	},
	mienfoo: {
		inherit: true,
		evos: ["Mienshao", "Mienshao-Yaoguai"],
	},
	mienshao: {
		inherit: true,
		otherFormes: ["Mienshao-Yaoguai"],
		formeOrder: ["Mienshao", "Mienshao-Yaoguai"],
	},
	mienshaoyaoguai: {
		name: "Mienshao-Yaoguai",
		baseSpecies: "Mienshao",
		forme: "Yaoguai",
		copyData: "Mienshao",

		types: ["Fighting", "Ghost"],
		baseStats: {hp: 65, atk: 125, def: 60, spa: 105, spd: 60, spe: 95},
		abilities: {0: "Inner Focus", 1: "Prankster", H: "Berserk"},
		movepoolAdditions: ["firespin", "hex", "shadowball", "spite"],

		prevo: "Mienfoo",
		evoLevel: 50,
		creator: "Hematite",
		modOrigin: "Evolution Project",
	},
	raticate: {
		inherit: true,
		evos: ["Plaguicate"], // Eviolite compatibility
	},
	plaguicate: {
		name: "Plaguicate",
		copyData: "Raticate", // inherits information from Raticate wherever it's missing data

		types: ["Normal", "Poison"],
		baseStats: {hp: 75, atk: 91, def: 80, spa: 65, spd: 90, spe: 97},
		abilities: {0: "Poison Touch", 1: "Guts", H: "Hustle"},

		// copyMoves: "Raticate", // not always the same as copyData, but it should copy that by default so I don't need to enumerate this every time
		movepoolAdditions: ["plaquefang", "poisonfang", "venoshock"],
		// movepoolDeletions: ["struggle"], // an optional separate line for split evolutions
		// (example: Tenoris, which inherits moves from Altaria mostly but removes some that Swablu doesn't get anyway)

		prevo: "Raticate",
		evoLevel: 36,
		evoCondition: "Level up while poisoned",
		creator: "ausma",
		modOrigin: "Evolution Project",
	},

	noctowl: {
		inherit: true,
		evos: ["Hoobarn"],
	},
	hoobarn: {
		name: "Hoobarn",
		copyData: "Noctowl",

		baseStats: {hp: 100, atk: 70, def: 90, spa: 86, spd: 96, spe: 70},
		abilities: {0: "Insomnia", 1: "Keen Eye", H: "Prankster"},

		prevo: "Noctowl",
		evoType: "other",
		evoCondition: "A newly-discovered evolution", // use generic flavor where not specified
		creator: "Bolivia",
		modOrigin: "Evolution Project",
	},
	ariados: {
		inherit: true,
		evos: ["Dolorak"],
	},
	dolorak: {
		name: "Dolorak",
		copyData: "Ariados",

		baseStats: {hp: 85, atk: 110, def: 80, spa: 70, spd: 80, spe: 90},
		abilities: {0: "Swarm", 1: "Insomnia", H: "Prankster"},
		movepoolAdditions: ["memento", "poisongas"],

		prevo: "Ariados",
		evoType: "other",
		evoCondition: "A newly-discovered evolution",
		creator: "BlueRay",
		modOrigin: "Evolution Project",
	},
	mismagius: {
		inherit: true,
		evos: ["Alchemissus"],
	},
	alchemissus: {
		name: "Alchemissus",
		copyData: "Mismagius",

		types: ["Ghost", "Poison"],
		baseStats: {hp: 66, atk: 66, def: 66, spa: 114, spd: 113, spe: 107},
		abilities: {0: "Levitate", 1: "Corrosion", H: "Alchemist"},//hehe
		movepoolAdditions: ["poisongas", "toxicspikes", "venoshock"],

		prevo: "Mismagius",
		evoType: "useItem",
		evoItem: "Dawn Stone",
		creator: "KeroseneZanchu",
		modOrigin: "Evolution Project",
	},
	swirlix: {
		inherit: true,
		otherFormes: ["Swirlix-Variant"],
		formeOrder: ["Swirlix", "Swirlix-Variant"],
	},
	swirlixvariant: {
		name: "Swirlix-Variant",
		baseSpecies: "Swirlix",
		forme: "Variant",
		copyData: "Swirlix",

		types: ["Poison"],
		abilities: {0: "Sticky Hold", H: "Unburden"},
		movepoolAdditions: ["belch", "sludgebomb", "stuffcheeks"],
		movepoolDeletions: ["aromatherapy", "bellydrum", "cottonguard", "dazzlinggleam", "drainingkiss", "fairywind", "mistyexplosion", "playrough"],

		evos: ["Slurpuff-Variant"],
		creator: "abismal",
		modOrigin: "Evolution Project",
	},
	slurpuff: {
		inherit: true,
		otherFormes: ["Slurpuff-Variant"],
		formeOrder: ["Slurpuff", "Slurpuff-Variant"],
	},
	slurpuffvariant: {
		name: "Slurpuff-Variant",
		baseSpecies: "Slurpuff",
		forme: "Variant",
		copyData: "Slurpuff",

		types: ["Poison"],
		abilities: {0: "Sticky Hold", H: "Unburden"},
		movepoolAdditions: ["belch", "sludgebomb", "stuffcheeks"],
		movepoolDeletions: ["aromatherapy", "bellydrum", "cottonguard", "dazzlinggleam", "drainingkiss", "fairywind", "mistyexplosion", "playrough"],

		prevo: "Swirlix-Variant",
		evoType: "trade",
		evoItem: "Black Sludge",
		creator: "abismal",
		modOrigin: "Evolution Project",
	},

	morelull: {
		inherit: true,
		evos: ["Shiinotic", "Shiinotic-Kalos"],
	},
	shiinotic: {
		inherit: true,
		otherFormes: ["Shiinotic-Kalos"],
		formeOrder: ["Shiinotic", "Shiinotic-Kalos"],
	},
	shiinotickalos: {
		name: "Shiinotic-Kalos",
		baseSpecies: "Shiinotic",
		forme: "Kalos",
		copyData: "Shiinotic",

		types: ["Poison", "Fairy"],
		baseStats: {hp: 60, atk: 45, def: 60, spa: 90, spd: 80, spe: 70},
		abilities: {0: "Illuminate", 1: "Effect Spore", H: "Technician"},
		movepoolAdditions: ["acidspray", "nastyplot", "venoshock"],

		prevo: "Morelull",
		evoLevel: 24,
		creator: "Hematite",
		modOrigin: "Evolution Project",
	},
	solrock: {
		inherit: true,
		evos: ["Eclipseroid"],
	},
	lunatone: {
		inherit: true,
		evos: ["Eclipseroid"],
	},
	eclipseroid: {
		name: "Eclipseroid",
		copyData: "Solrock",

		types: ["Rock", "Ghost"],
		baseStats: {hp: 90, atk: 100, def: 90, spa: 100, spd: 90, spe: 70},
		movepoolAdditions: ["recover"],
		// going to hard-code its movepool a little
		weightkg: 322,
		color: "Purple",

		prevo: ["Solrock", "Lunatone"], // no idea if this will work
		evoType: "other",
		evoCondition: "A mysterious Pokémon that can evolve from either Solrock or Lunatone...",
		creator: "ausma",
		modOrigin: "Evolution Project",
	},
	gourgeist: {
		inherit: true,
		evos: ["Jackourd"],
	},
	gourgeistsmall: {
		inherit: true,
		evos: ["Jackourd-Small"],
	},
	gourgeistlarge: {
		inherit: true,
		evos: ["Jackourd-Large"],
	},
	gourgeistsuper: {
		inherit: true,
		evos: ["Jackourd-Super"],
	},
	jackourd: {
		name: "Jackourd",
		copyData: "Gourgeist",

		baseStats: {hp: 75, atk: 102, def: 122, spa: 67, spd: 75, spe: 90},
		abilities: {0: "Pickup", 1: "Harvest", H: "Hoard"},
		movepoolAdditions: ["naturalgift", "weatherball"],

		prevo: "Gourgeist",
		evoType: "levelHold",
		evoItem: "Razor Claw",
		creator: "KeroseneZanchu",
		modOrigin: "Evolution Project",
	},
	jackourdsmall: {
		name: "Jackourd-Small",
		baseSpecies: "Jackourd",
		forme: "Small",
		copyData: "Gourgeist-Small",

		baseStats: {hp: 65, atk: 103, def: 122, spa: 58, spd: 75, spe: 108},
		abilities: {0: "Pickup", 1: "Harvest", H: "Hoard"},
		copyMoves: "Gourgeist", // it doesn't like copying from other Gourgeist forms
		movepoolAdditions: ["naturalgift", "weatherball"],

		prevo: "Gourgeist-Small",
		evoType: "levelHold",
		evoItem: "Razor Claw",
		creator: "KeroseneZanchu",
		modOrigin: "Evolution Project",
	},
	jackourdlarge: {
		name: "Jackourd-Large",
		baseSpecies: "Jackourd",
		forme: "Large",
		copyData: "Gourgeist-Large",

		baseStats: {hp: 85, atk: 101, def: 122, spa: 76, spd: 75, spe: 72},
		abilities: {0: "Pickup", 1: "Harvest", H: "Hoard"},
		copyMoves: "Gourgeist", // it doesn't like copying from other Gourgeist forms
		movepoolAdditions: ["naturalgift", "weatherball"],

		prevo: "Gourgeist-Large",
		evoType: "levelHold",
		evoItem: "Razor Claw",
		creator: "KeroseneZanchu",
		modOrigin: "Evolution Project",
	},
	jackourdsuper: {
		name: "Jackourd-Super",
		baseSpecies: "Jackourd",
		forme: "Super",
		copyData: "Gourgeist-Super",

		baseStats: {hp: 95, atk: 100, def: 122, spa: 85, spd: 75, spe: 54},
		abilities: {0: "Pickup", 1: "Harvest", H: "Hoard"},
		copyMoves: "Gourgeist", // it doesn't like copying from other Gourgeist forms
		movepoolAdditions: ["naturalgift", "weatherball"],

		prevo: "Gourgeist-Super",
		evoType: "levelHold",
		evoItem: "Razor Claw",
		creator: "KeroseneZanchu",
		modOrigin: "Evolution Project",
	},

	dusclops: {
		inherit: true,
		evos: ["Dusknoir", "Dusglow"],
	},
	dusglow: {
		name: "Dusglow",
		copyData: "Dusknoir", // evolves from Dusclops but has more in common with Dusknoir

		types: ["Ghost", "Fairy"],
		baseStats: {hp: 45, atk: 85, def: 105, spa: 115, spd: 105, spe: 70},
		abilities: {0: "Pressure", H: "Wandering Spirit"},
		copyMoves: "Dusclops",
		movepoolAdditions: ["dazzlinggleam", "drainingkiss"],

		prevo: "Dusclops",
		evoType: "useItem",
		evoItem: "Dawn Stone",
		creator: "Violet",
		modOrigin: "Evolution Project",
	},
	noibat: {
		inherit: true,
		evos: ["Noivern", "Noivern-Variant"],
	},
	noivern: {
		inherit: true,
		otherFormes: ["Noivern-Variant"],
		formeOrder: ["Noivern", "Noivern-Variant"],
	},
	noivernvariant: {
		name: "Noivern-Variant",
		baseSpecies: "Noivern",
		forme: "Variant",
		copyData: "Noivern",

		types: ["Fighting", "Dragon"],
		baseStats: {hp: 95, atk: 70, def: 80, spa: 97, spd: 80, spe: 113},
		abilities: {0: "Levitate"},
		movepoolAdditions: ["aurasphere", "bulldoze", "rocktomb", "vacuumwave"],
		movepoolDeletions: ["boomburst", "dragondance"],

		prevo: "Noibat",
		evoType: "other",
		evoCondition: "A newly-discovered evolution",
		creator: "Hematite",
		modOrigin: "Evolution Project",
	},
	hypno: {
		inherit: true,
		evos: ["Mezmir"],
	},
	mezmir: {
		name: "Mezmir",
		copyData: "Hypno",

		types: ["Psychic", "Fighting"],
		baseStats: {hp: 90, atk: 103, def: 70, spa: 73, spd: 115, spe: 77},
		abilities: {0: "Comatose", 1: "Forewarn", H: "Inner Focus"},

		prevo: "Hypno",
		evoType: "other",
		evoCondition: "A newly-discovered evolution",
		creator: "quagsi",
		modOrigin: "Evolution Project",
	},
	accelgor: {
		inherit: true,
		evos: ["Velocinobi"],
	},
	velocinobi: {
		name: "Velocinobi",
		copyData: "Accelgor",

		types: ["Bug", "Ghost"],
		baseStats: {hp: 80, atk: 95, def: 20, spa: 105, spd: 90, spe: 145},
		abilities: {0: "Shed Skin", 1: "Technician", H: "Unburden"},
		movepoolAdditions: ["hex", "lunge", "shadowball", "strengthsap"],

		prevo: "Accelgor",
		evoType: "other",
		evoCondition: "A newly-discovered evolution",
		creator: "quagsi",
		modOrigin: "Evolution Project",
	},
	karrablast: {
		inherit: true,
		evos: ["Escavalier", "Escavalier-Variant"],
	},
	escavalier: {
		inherit: true,
		otherFormes: ["Escavalier-Variant"],
		formeOrder: ["Escavalier", "Escavalier-Variant"],
	},
	escavaliervariant: {
		name: "Escavalier-Variant",
		baseSpecies: "Escavalier",
		forme: "Variant",
		copyData: "Escavalier",

		types: ["Ghost"],
		abilities: {0: "Shed Skin", 1: "Chain Link", H: "Overcoat"},
		movepoolAdditions: ["phantomforce", "willowisp"],

		prevo: "Karrablast",
		evoType: "other",
		evoCondition: "A newly-discovered evolution",
		creator: "BlueRay",
		modOrigin: "Evolution Project",
	},

	curski: {
		name: "Curski",
		copyData: "Spiritomb", // does not grant Eviolite access (compare Melmetal)

		types: ["Dark"],
		baseStats: {hp: 50, atk: 117, def: 108, spa: 92, spd: 108, spe: 35},
		abilities: {0: "Dark Aura", H: "Infiltrator"},
		movepoolAdditions: ["assurance", "baddybad", "punishment"],

		creator: "KeroseneZanchu",
		modOrigin: "Evolution Project",
	},
	michu: {
		name: "Michu",
		copyData: "Mimikyu",

		types: ["Normal", "Fairy"],
		baseStats: {hp: 35, atk: 80, def: 60, spa: 30, spd: 95, spe: 101},
		abilities: {0: "Rattled"},
		movepoolDeletions: ["nightmare", "phantomforce", "shadowsneak", "woodhammer"],

		evos: ["Mimikyu"],
		creator: "Hematite",
		modOrigin: "Evolution Project",
	},
	mimikyu: {
		inherit: true,
		prevo: "Michu",
		evoType: "levelFriendship",
	},
	marowak: {
		inherit: true,
		evos: ["Resurrectric"],
	},
	resurrectric: {
		name: "Resurrectric",
		copyData: "Marowak",

		types: ["Ground", "Electric"],
		baseStats: {hp: 80, atk: 60, def: 130, spa: 90, spd: 80, spe: 45},
		abilities: {0: "Inner Focus", 1: "Lightning Rod", H: "Battle Armor"},
		movepoolAdditions: ["discharge", "healingwish", "risingvoltage", "thunder", "voltswitch"],

		prevo: "Marowak",
		evoLevel: 40,
		evoType: "levelExtra",
		evoCondition: "in a thunderstorm",
		creator: "Hematite",
		modOrigin: "Evolution Project",
	},
	yamask: {
		inherit: true,
		evos: ["Cofagrigus", "Cofagrigus-Unbound"],
	},
	cofagrigus: {
		inherit: true,
		baseForme: "Confined",
		otherFormes: ["Cofagrigus-Unbound"],
		formeOrder: ["Cofagrigus", "Cofagrigus-Unbound"],
	},
	cofagrigusunbound: {
		name: "Cofagrigus-Unbound",
		baseSpecies: "Cofagrigus",
		forme: "Unbound",
		copyData: "Cofagrigus",

		types: ["Dark"],
		baseStats: {hp: 58, atk: 95, def: 145, spa: 50, spd: 90, spe: 45},
		abilities: {0: "Pickpocket", H: "Unburden"},
		movepoolAdditions: ["assurance", "brutalswing", "darkestlariat", "skullbash", "lashout"],

		changesFrom: "Cofagrigus",
		creator: "inkbug",
		modOrigin: "Evolution Project",
	},
	horsea: {
		inherit: true,
		otherFormes: ["Horsea-Variant"],
		formeOrder: ["Horsea", "Horsea-Variant"],
	},
	horseavariant: {
		name: "Horsea-Variant",
		baseSpecies: "Horsea",
		forme: "Variant",
		copyData: "Horsea",

		types: ["Dark"],
		abilities: {0: "Poison Point", 1: "Merciless", H: "Damp"},
		movepoolAdditions: ["assurance", "darkpulse", "foulplay", "lashout", "payback", "sludgebomb", "superpower"],
		movepoolDeletions: ["aurorabeam", "blizzard", "hurricane", "icebeam", "icywind"],

		evos: ["Seadra-Variant"],
		creator: "ausma",
		modOrigin: "Evolution Project",
	},
	seadra: {
		inherit: true,
		otherFormes: ["Seadra-Variant"],
		formeOrder: ["Seadra", "Seadra-Variant"],
	},
	seadravariant: {
		name: "Seadra-Variant",
		baseSpecies: "Seadra",
		forme: "Variant",
		copyData: "Seadra",

		types: ["Dark"],
		abilities: {0: "Poison Point", 1: "Merciless", H: "Damp"},
		movepoolAdditions: ["assurance", "darkpulse", "foulplay", "lashout", "payback", "sludgebomb", "superpower"],
		movepoolDeletions: ["aurorabeam", "blizzard", "hurricane", "icebeam", "icywind"],

		evos: ["Tyrandra"],
		prevo: "Horsea-Variant",
		evoLevel: 32,
		creator: "ausma",
		modOrigin: "Evolution Project",
	},
	tyrandra: {
		name: "Tyrandra",
		copyData: "Kingdra",

		types: ["Dark", "Dragon"],
		baseStats: {hp: 70, atk: 90, def: 95, spa: 90, spd: 95, spe: 100},
		abilities: {0: "Poison Point", 1: "Merciless", H: "Damp"},
		movepoolAdditions: ["assurance", "darkpulse", "foulplay", "lashout", "payback", "sludgebomb", "superpower"],
		movepoolDeletions: ["aurorabeam", "blizzard", "hurricane", "icebeam", "icywind"],

		prevo: "Seadra-Variant",
		evoType: "trade",
		evoItem: "Dragon Scale",
		creator: "ausma",
		modOrigin: "Evolution Project",
	},
	togepi: {
		inherit: true,
		otherFormes: ["Togepi-Unidentified"],
		formeOrder: ["Togepi", "Togepi-Unidentified"],
	},
	togepiunidentified: {
		name: "Togepi-Unidentified",
		baseSpecies: "Togepi",
		forme: "Unidentified",
		copyData: "Togepi",

		types: ["Steel"],
		baseStats: {hp: 35, atk: 40, def: 65, spa: 20, spd: 65, spe: 20},
		abilities: {0: "Hustle", 1: "Light Metal", H: "Super Luck"},
		movepoolAdditions: ["flashcannon", "honeclaws", "irondefense", "steelbeam"],
		movepoolDeletions: ["followme", "morningsun", "roost", "softboiled"],

		evos: ["Togetic-Unidentified"],
		creator: "quagsi",
		modOrigin: "Evolution Project",
	},
	togetic: {
		inherit: true,
		otherFormes: ["Togetic-Unidentified"],
		formeOrder: ["Togetic", "Togetic-Unidentified"],
	},
	togeticunidentified: {
		name: "Togetic-Unidentified",
		baseSpecies: "Togetic",
		forme: "Unidentified",
		copyData: "Togetic",

		types: ["Steel"],
		baseStats: {hp: 55, atk: 80, def: 85, spa: 50, spd: 85, spe: 50},
		abilities: {0: "Hustle", 1: "Light Metal", H: "Super Luck"},
		movepoolAdditions: ["flashcannon", "honeclaws", "irondefense", "steelbeam"],
		movepoolDeletions: ["followme", "morningsun", "roost", "softboiled"],

		evos: ["Togekiss-Unidentified"],
		prevo: "Togepi-Unidentified",
		evoType: "levelFriendship",
		creator: "quagsi",
		modOrigin: "Evolution Project",
	},
	togekiss: {
		inherit: true,
		otherFormes: ["Togekiss-Unidentified"],
		formeOrder: ["Togekiss", "Togekiss-Unidentified"],
	},
	togekissunidentified: {
		name: "Togekiss-Unidentified",
		baseSpecies: "Togekiss",
		forme: "Unidentified",
		copyData: "Togekiss",

		types: ["Steel", "Flying"],
		baseStats: {hp: 85, atk: 120, def: 95, spa: 60, spd: 95, spe: 90},
		abilities: {0: "Hustle", 1: "Light Metal", H: "Super Luck"},
		movepoolAdditions: ["flashcannon", "honeclaws", "irondefense", "steelbeam"],
		movepoolDeletions: ["followme", "morningsun", "roost", "softboiled"],

		prevo: "Togetic-Unidentified",
		evoType: "useItem",
		evoItem: "Shiny Stone",
		creator: "quagsi",
		modOrigin: "Evolution Project",
	},

	klefki: {
		inherit: true,
		otherFormes: ["Klefki-Galar", "Klefki-Galar-Revealed"],
		formeOrder: ["Klefki", "Klefki-Galar", "Klefki-Galar-Revealed"],
	},
	klefkigalar: {
		name: "Klefki-Galar",
		baseSpecies: "Klefki",
		forme: "Galar",
		copyData: "Klefki",

		types: ["Steel", "Dark"],
		baseStats: {hp: 57, atk: 60, def: 106, spa: 70, spd: 87, spe: 90},
		abilities: {0: "Hunger Switch"},
		movepoolAdditions: ["knockoff", "darkpulse", "swordsdance"],

		creator: "Albatross",
		modOrigin: "Evolution Project",
	},
	klefkigalarrevealed: {
		name: "Klefki-Galar-Revealed",
		baseSpecies: "Klefki",
		forme: "Galar-Revealed",
		copyData: "Klefki",

		types: ["Fairy", "Dark"],
		baseStats: {hp: 57, atk: 116, def: 50, spa: 70, spd: 87, spe: 90},
		abilities: {0: "Hunger Switch"},
		movepoolAdditions: ["knockoff", "darkpulse", "swordsdance"],

		requiredAbility: "Hunger Switch",
		battleOnly: "Klefki-Galar",
		creator: "Albatross",
		modOrigin: "Evolution Project",
	},
};