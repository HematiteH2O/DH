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
	},
	possesevoir: {
		name: "Possesevoir",
		copyData: "Gardevoir",
		
		types: ["Ghost", "Fairy"],
		baseStats: {hp: 63, atk: 65, def: 85, spa: 125, spd: 120, spe: 60},
		abilities: {0: "Trace", 1: "Afterimage", H: "Telepathy"},
		movepoolAdditions: ["hex"],
		
		creator: "BlueRay",
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
	},
	roserade: {
		//i *think* this pokemons supposed to just be modded
		//but IDK change it if you want...?
		inherit: true,
		//baseForme: "Treat", //???????like meloetta????? you might need to fix all of this
		movepoolAdditions: ["exitsmiling", "knockoff", "pursuit", "darkpulse", "encore"],
		otherFormes: ["Roserade-Trick"],
		formeOrder: ["Roserade", "Roserade-Trick"],
	},
	roseradetrick: {
		name: "Roserade-Trick",
		baseSpecies: "Roserade",
		forme: "Trick",
		copyData: "Roserade",
		
		types: ["Dark", "Grass"],
		movepoolAdditions: ["exitsmiling", "knockoff", "pursuit", "darkpulse", "encore"], //IDK?
		
		battleOnly: "Roserade",
		requiredMove: "Exit Smiling", //????
		
		creator: "Albatross",
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
	},
};