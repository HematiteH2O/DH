export const Formats: FormatList = [

	{
		section: "Spreadsheets",
	},
/*
	{
		name: "Dex Sheet Generator",
		desc: [
			"Outputs a sheet like your usual Dex WIP Sheet!",
		],
		
		ruleset: ['Team Preview', 'HP Percentage Mod', 'Cancel Mod', 'Dynamax Clause', 'Sleep Clause Mod'],
		onBegin() {
			for (const id in this.dex.data.Pokedex) {
				const poke = this.dex.data.Pokedex[id];
				if (poke && poke.sheetOutput) this.add('-message', `${poke.sheetOutput}`);
			}
		},
		mod: 'dexsheet',
	},

	{
		name: "Pulse Learnsets Generator",
		desc: [
			"Outputs a sheet that helpfully identifies learnsets based on Pulse's TMs and tutors!",
		],
		
		ruleset: ['Team Preview', 'HP Percentage Mod', 'Cancel Mod', 'Dynamax Clause', 'Sleep Clause Mod'],
		onBegin() {
			for (const id in this.dex.data.Pokedex) {
				const poke = this.dex.data.Pokedex[id];
				if (poke && poke.sheetOutput) this.add('-message', `${poke.sheetOutput}`);
			}
		},
		mod: 'pulselearnsets',
	},
*/
	{
		name: "Utility Sheet Generator",
		desc: [
			"Outputs a sheet that organizes a Pokémon's competitive movepool for convenience!",
		],
		
		ruleset: ['Team Preview', 'HP Percentage Mod', 'Cancel Mod', 'Dynamax Clause', 'Sleep Clause Mod'],
		onBegin() {
			// const platinumDex = ['turtwig', 'grotle', 'torterra', 'chimchar', 'monferno', 'infernape', 'piplup', 'prinplup', 'empoleon', 'starly', 'staravia', 'staraptor', 'bidoof', 'bibarel', 'kricketot', 'kricketune', 'shinx', 'luxio', 'luxray', 'abra', 'kadabra', 'alakazam', 'magikarp', 'gyarados', 'budew', 'roselia', 'roserade', 'zubat', 'golbat', 'crobat', 'geodude', 'graveler', 'golem', 'onix', 'steelix', 'cranidos', 'rampardos', 'shieldon', 'bastiodon', 'machop', 'machoke', 'machamp', 'psyduck', 'golduck', 'burmy', 'wormadam', 'wormadamsandy', 'wormadamtrash', 'mothim', 'wurmple', 'silcoon', 'beautifly', 'cascoon', 'dustox', 'combee', 'vespiquen', 'pachirisu', 'buizel', 'floatzel', 'cherubi', 'cherrim', 'shellos', 'gastrodon', 'heracross', 'aipom', 'ambipom', 'drifloon', 'drifblim', 'buneary', 'lopunny', 'gastly', 'haunter', 'gengar', 'misdreavus', 'mismagius', 'murkrow', 'honchkrow', 'glameow', 'purugly', 'goldeen', 'seaking', 'barboach', 'whiscash', 'chingling', 'chimecho', 'stunky', 'skuntank', 'meditite', 'medicham', 'bronzor', 'bronzong', 'ponyta', 'rapidash', 'bonsly', 'sudowoodo', 'mimejr', 'mrmime', 'happiny', 'chansey', 'blissey', 'cleffa', 'clefairy', 'clefable', 'chatot', 'pichu', 'pikachu', 'raichu', 'hoothoot', 'noctowl', 'spiritomb', 'gible', 'gabite', 'garchomp', 'munchlax', 'snorlax', 'unown', 'riolu', 'lucario', 'wooper', 'quagsire', 'wingull', 'pelipper', 'girafarig', 'hippopotas', 'hippowdon', 'azurill', 'marill', 'azumarill', 'skorupi', 'drapion', 'croagunk', 'toxicroak', 'carnivine', 'remoraid', 'octillery', 'finneon', 'lumineon', 'tentacool', 'tentacruel', 'feebas', 'milotic', 'mantyke', 'mantine', 'snover', 'abomasnow', 'sneasel', 'weavile', 'rotom', 'rotomheat', 'rotomwash', 'rotomfrost', 'rotomfan', 'rotommow', 'gligar', 'gliscor', 'nosepass', 'probopass', 'ralts', 'kirlia', 'gardevoir', 'gallade', 'lickitung', 'lickilicky', 'eevee', 'vaporeon', 'jolteon', 'flareon', 'espeon', 'umbreon', 'leafeon', 'glaceon', 'swablu', 'altaria', 'togepi', 'togetic', 'togekiss', 'houndour', 'houndoom', 'magnemite', 'magneton', 'magnezone', 'tangela', 'tangrowth', 'yanma', 'yanmega', 'tropius', 'rhyhorn', 'rhydon', 'rhyperior', 'duskull', 'dusclops', 'dusknoir', 'porygon', 'porygon2', 'porygonz', 'scyther', 'scizor', 'elekid', 'electabuzz', 'electivire', 'magby', 'magmar', 'magmortar', 'swinub', 'piloswine', 'mamoswine', 'snorunt', 'glalie', 'froslass', 'absol'];
			this.add('-message', `=== Variants ===\n`); // just in case
			for (const id in this.dex.data.Pokedex) {
				const poke = this.dex.data.Pokedex[id];
				if ((poke.kind && poke.kind === "Custom") && poke.sheetOutput) {
					this.add('-message', `${poke.sheetOutput}`);
					poke.sheetOutput = poke.sheetOutput2;
				}
			}
			for (const typeid in this.dex.data.TypeChart) {
				this.add('-message', `=== ${typeid} ===\n`);
				/*
				for (const pokeid of platinumDex) {
					const poke = this.dex.data.Pokedex[pokeid];
					if (poke && poke.types.includes(typeid) && poke.kind && poke.kind === "Platinum" && poke.sheetOutput) {
						this.add('-message', `${poke.sheetOutput}`);
						poke.sheetOutput = poke.sheetOutput2;
					}
				}
	 			*/
				for (const id in this.dex.data.Pokedex) {
					const poke = this.dex.data.Pokedex[id];
					if (poke.types.includes(typeid) && poke.kind && poke.kind === "Ondas" && poke.sheetOutput) {
						this.add('-message', `${poke.sheetOutput}`);
						poke.sheetOutput = poke.sheetOutput2;
					}
				}/*
				for (const id in this.dex.data.Pokedex) {
					const poke = this.dex.data.Pokedex[id];
					if (poke.types.includes(typeid) && poke.kind && poke.kind === "Variant" && poke.sheetOutput) {
						this.add('-message', `${poke.sheetOutput}`);
						poke.sheetOutput = poke.sheetOutput2;
					}
				}
				for (const id in this.dex.data.Pokedex) {
					const poke = this.dex.data.Pokedex[id];
					if (poke.types.includes(typeid) && poke.kind && poke.kind === "Addition" && poke.sheetOutput) {
						this.add('-message', `${poke.sheetOutput}`);
						poke.sheetOutput = poke.sheetOutput2;
					}
				}
				for (const id in this.dex.data.Pokedex) {
					const poke = this.dex.data.Pokedex[id];
					if (poke.types.includes(typeid) && poke.kind && poke.kind === "Special" && poke.sheetOutput) {
						this.add('-message', `${poke.sheetOutput}`);
						poke.sheetOutput = poke.sheetOutput2;
					}
				}*/
			}
			this.add('-message', `=== Legendary stuff (not in Ondas) ===\n`); // just personal curiosity I guess?
			for (const id in this.dex.data.Pokedex) {
				const poke = this.dex.data.Pokedex[id];
				if ((!poke.kind || (poke.kind !== "Ondas" && poke.kind !== "Custom")) && poke.sheetOutput) {
					this.add('-message', `${poke.sheetOutput}`);
					poke.sheetOutput = poke.sheetOutput2;
				}
			}
		},
		mod: 'ondas_utility', // a genius always I am a genius
	},
	{
		name: "Kalos dex output",
		desc: [
			"Outputs a sheet with in-game notes on Gen VI moves!",
		],
		
		ruleset: ['Team Preview', 'HP Percentage Mod', 'Cancel Mod', 'Dynamax Clause', 'Sleep Clause Mod'],
		onBegin() {
			const kalosDex = [
		// Battle Maison:
				'venusaur', 'charizard', 'blastoise', 'meganium', 'typhlosion', 'feraligatr', 'sceptile', 'blaziken', 'swampert', 'torterra', 'infernape', 'empoleon', 'serperior', 'emboar', 'samurott', 'chesnaught', 'delphox', 'greninja', 'shedinja', 'smeargle', 'ditto', 'clefairy', 'delibird', 'luvdisc', 'unown', 'farfetchd', 'spinda', 'corsola', 'delcatty', 'sableye', 'mawile', 'kricketune', 'dustox', 'ledian', 'ariados', 'butterfree', 'beedrill', 'beautifly', 'volbeat', 'illumise', 'parasect', 'dugtrio', 'wobbuffet', 'plusle', 'minun', 'pachirisu', 'sudowoodo', 'magcargo', 'medicham', 'bibarel', 'chatot', 'vivillon', 'raticate', 'masquerain', 'furret', 'dunsparce', 'azumarill', 'mightyena', 'linoone', 'castform', 'watchog', 'diggersby', 'wormadam', 'mothim', 'marowak', 'sunflora', 'chimecho', 'swoobat', 'emolga', 'quagsire', 'qwilfish', 'swellow', 'pelipper', 'dedenne', 'wigglytuff', 'arbok', 'persian', 'lunatone', 'solrock', 'kecleon', 'rotom', 'fearow', 'noctowl', 'audino', 'liepard', 'sandslash', 'venomoth', 'seaking', 'granbull', 'cherrim', 'purugly', 'carnivine', 'primeape', 'hitmonlee', 'hitmonchan', 'jynx', 'hitmontop', 'banette', 'dusclops', 'ninjask', 'zangoose', 'seviper', 'dodrio', 'mrmime', 'lanturn', 'jumpluff', 'breloom', 'sharpedo', 'camerupt', 'tropius', 'lumineon', 'basculin', 'maractus', 'aromatisse', 'amoonguss', 'forretress', 'mantine', 'skarmory', 'stantler', 'absol', 'throh', 'sawk', 'meowstic', 'swalot', 'whiscash', 'crawdaunt', 'xatu', 'torkoal', 'grumpig', 'cinccino', 'alomomola', 'klefki', 'stunfisk', 'galvantula', 'furfrou', 'swanna', 'hariyama', 'vespiquen', 'garbodor', 'trevenant', 'dewgong', 'kingler', 'manectric', 'cacturne', 'gastrodon', 'crustle', 'sawsbuck', 'pidgeot', 'skuntank', 'electrode', 'octillery', 'ludicolo', 'shiftry', 'glalie', 'lopunny', 'froslass', 'whimsicott', 'lilligant', 'darmanitan', 'jellicent', 'slurpuff', 'heliolisk', 'ambipom', 'malamar', 'clefable', 'hypno', 'cofagrigus', 'golurk', 'heatmor', 'durant', 'raichu', 'huntail', 'gorebyss', 'relicanth', 'staraptor', 'spiritomb', 'scolipede', 'beheeyem', 'beartic', 'cryogonal', 'druddigon', 'musharna', 'unfezant', 'scrafty', 'ferrothorn', 'vileplume', 'victreebel', 'slowbro', 'weezing', 'kangaskhan', 'tauros', 'bellossom', 'slowking', 'miltank', 'exploud', 'altaria', 'toxicroak', 'sigilyph', 'gothitelle', 'reuniclus', 'bisharp', 'bouffalant', 'abomasnow', 'dragalge', 'gourgeist', 'golem', 'omastar', 'kabutops', 'cradily', 'armaldo', 'rampardos', 'bastiodon', 'floatzel', 'mismagius', 'carracosta', 'escavalier', 'accelgor', 'pangoro', 'zebstrika', 'drifblim', 'simisage', 'simisear', 'simipour', 'talonflame', 'golduck', 'alakazam', 'rapidash', 'muk', 'gengar', 'pinsir', 'politoed', 'scizor', 'heracross', 'ursaring', 'houndoom', 'donphan', 'wailord', 'claydol', 'bronzong', 'drapion', 'stoutland', 'leavanny', 'barbaracle', 'clawitzer', 'hawlucha', 'carbink', 'nidoqueen', 'nidoking', 'ninetales', 'machamp', 'shuckle', 'honchkrow', 'conkeldurr', 'pyroar', 'excadrill', 'seismitoad', 'poliwrath', 'ampharos', 'steelix', 'weavile', 'gliscor', 'zoroark', 'mienshao', 'braviary', 'mandibuzz', 'avalugg', 'tentacruel', 'aerodactyl', 'porygon2', 'roserade', 'lickilicky', 'yanmega', 'gigalith', 'eelektross', 'gardevoir', 'gallade', 'krookodile', 'exeggutor', 'starmie', 'flygon', 'klinklang', 'chandelure', 'aegislash', 'tyrantrum', 'aurorus', 'luxray', 'cloyster', 'vaporeon', 'jolteon', 'flareon', 'espeon', 'umbreon', 'lucario', 'hippowdon', 'leafeon', 'glaceon', 'probopass', 'dusknoir', 'sylveon', 'aggron', 'walrein', 'mamoswine', 'gogoat', 'lapras', 'crobat', 'magnezone', 'rhyperior', 'tangrowth', 'porygonz', 'vanilluxe', 'noivern', 'gyarados', 'snorlax', 'kingdra', 'blissey', 'milotic', 'electivire', 'magmortar', 'haxorus', 'togekiss', 'volcarona', 'florges', 'arcanine', 'archeops', 'dragonite', 'tyranitar', 'salamence', 'metagross', 'garchomp', 'hydreigon', 'goodra', 'slaking', 'articuno', 'zapdos', 'moltres', 'raikou', 'entei', 'suicune', 'regirock', 'regice', 'registeel', 'latias', 'latios', 'uxie', 'mesprit', 'azelf', 'heatran', 'regigigas', 'cresselia', 'cobalion', 'terrakion', 'virizion', 'tornadus', 'thundurus', 'landorus', 'venusaurmega', 'charizardmegax', 'charizardmegay', 'blastoisemega', 'alakazammega', 'gengarmega', 'kangaskhanmega', 'pinsirmega', 'gyaradosmega', 'aerodactylmega', 'ampharosmega', 'scizormega', 'heracrossmega', 'houndoommega', 'tyranitarmega', 'blazikenmega', 'gardevoirmega', 'mawilemega', 'aggronmega', 'medichammega', 'manectricmega', 'banettemega', 'absolmega', 'latiasmega', 'latiosmega', 'garchompmega', 'lucariomega', 'abomasnowmega',
		// Kalos dex:
		//		'chespin', 'quilladin', 'chesnaught', 'fennekin', 'braixen', 'delphox', 'froakie', 'frogadier', 'greninja', 'bunnelby', 'diggersby', 'zigzagoon', 'linoone', 'fletchling', 'fletchinder', 'talonflame', 'pidgey', 'pidgeotto', 'pidgeot', 'scatterbug', 'spewpa', 'vivillon', 'caterpie', 'metapod', 'butterfree', 'weedle', 'kakuna', 'beedrill', 'pansage', 'simisage', 'pansear', 'simisear', 'panpour', 'simipour', 'pichu', 'pikachu', 'raichu', 'bidoof', 'bibarel', 'dunsparce', 'azurill', 'marill', 'azumarill', 'burmy', 'burmysandy', 'burmytrash', 'wormadam', 'wormadamsandy', 'wormadamtrash', 'mothim', 'surskit', 'masquerain', 'magikarp', 'gyarados', 'corphish', 'crawdaunt', 'goldeen', 'seaking', 'carvanha', 'sharpedo', 'litleo', 'pyroar', 'psyduck', 'golduck', 'farfetchd', 'riolu', 'lucario', 'ralts', 'kirlia', 'gardevoir', 'gallade', 'flabebe', 'floette', 'florges', 'budew', 'roselia', 'roserade', 'ledyba', 'ledian', 'combee', 'vespiquen', 'skitty', 'delcatty', 'bulbasaur', 'ivysaur', 'venusaur', 'charmander', 'charmeleon', 'charizard', 'squirtle', 'wartortle', 'blastoise', 'skiddo', 'gogoat', 'pancham', 'pangoro', 'furfrou', 'doduo', 'dodrio', 'plusle', 'minun', 'gulpin', 'swalot', 'scraggy', 'scrafty', 'abra', 'kadabra', 'alakazam', 'oddish', 'gloom', 'vileplume', 'bellossom', 'sentret', 'furret', 'nincada', 'ninjask', 'shedinja', 'espurr', 'meowstic', 'meowsticf', 'kecleon', 'honedge', 'doublade', 'aegislash', 'venipede', 'whirlipede', 'scolipede', 'audino', 'smeargle', 'croagunk', 'toxicroak', 'ducklett', 'swanna', 'spritzee', 'aromatisse', 'swirlix', 'slurpuff', 'volbeat', 'illumise', 'hoppip', 'skiploom', 'jumpluff', 'munchlax', 'snorlax', 'whismur', 'loudred', 'exploud', 'meditite', 'medicham', 'zubat', 'golbat', 'crobat', 'axew', 'fraxure', 'haxorus', 'diancie', 'hoopa', 'volcanion', 'drifloon', 'drifblim', 'mienfoo', 'mienshao', 'zangoose', 'seviper', 'spoink', 'grumpig', 'absol', 'inkay', 'malamar', 'lunatone', 'solrock', 'bagon', 'shelgon', 'salamence', 'wingull', 'pelipper', 'taillow', 'swellow', 'binacle', 'barbaracle', 'dwebble', 'crustle', 'tentacool', 'tentacruel', 'wailmer', 'wailord', 'luvdisc', 'skrelp', 'dragalge', 'clauncher', 'clawitzer', 'staryu', 'starmie', 'shellder', 'cloyster', 'qwilfish', 'horsea', 'seadra', 'kingdra', 'relicanth', 'sandile', 'krokorok', 'krookodile', 'helioptile', 'heliolisk', 'hippopotas', 'hippowdon', 'rhyhorn', 'rhydon', 'rhyperior', 'onix', 'steelix', 'woobat', 'swoobat', 'machop', 'machoke', 'machamp', 'cubone', 'marowak', 'kangaskhan', 'mawile', 'tyrunt', 'tyrantrum', 'amaura', 'aurorus', 'aerodactyl', 'ferroseed', 'ferrothorn', 'snubbull', 'granbull', 'electrike', 'manectric', 'houndour', 'houndoom', 'eevee', 'vaporeon', 'jolteon', 'flareon', 'espeon', 'umbreon', 'leafeon', 'glaceon', 'sylveon', 'emolga', 'yanma', 'yanmega', 'hawlucha', 'sigilyph', 'golett', 'golurk', 'nosepass', 'probopass', 'makuhita', 'hariyama', 'throh', 'sawk', 'starly', 'staravia', 'staraptor', 'stunky', 'skuntank', 'nidoranf', 'nidorina', 'nidoqueen', 'nidoranm', 'nidorino', 'nidoking', 'dedenne', 'chingling', 'chimecho', 'mimejr', 'mrmime', 'solosis', 'duosion', 'reuniclus', 'wynaut', 'wobbuffet', 'roggenrola', 'boldore', 'gigalith', 'sableye', 'carbink', 'tauros', 'miltank', 'mareep', 'flaaffy', 'ampharos', 'pinsir', 'heracross', 'pachirisu', 'slowpoke', 'slowbro', 'slowking', 'exeggcute', 'exeggutor', 'chatot', 'mantyke', 'mantine', 'clamperl', 'huntail', 'gorebyss', 'remoraid', 'octillery', 'corsola', 'chinchou', 'lanturn', 'alomomola', 'lapras', 'articuno', 'zapdos', 'moltres', 'diglett', 'dugtrio', 'trapinch', 'vibrava', 'flygon', 'gible', 'gabite', 'garchomp', 'geodude', 'graveler', 'golem', 'slugma', 'magcargo', 'shuckle', 'skorupi', 'drapion', 'wooper', 'quagsire', 'goomy', 'sliggoo', 'goodra', 'karrablast', 'escavalier', 'shelmet', 'accelgor', 'bellsprout', 'weepinbell', 'victreebel', 'carnivine', 'gastly', 'haunter', 'gengar', 'poliwag', 'poliwhirl', 'poliwrath', 'politoed', 'ekans', 'arbok', 'stunfisk', 'barboach', 'whiscash', 'purrloin', 'liepard', 'poochyena', 'mightyena', 'patrat', 'watchog', 'pawniard', 'bisharp', 'klefki', 'murkrow', 'honchkrow', 'foongus', 'amoonguss', 'lotad', 'lombre', 'ludicolo', 'buizel', 'floatzel', 'basculin', 'phantump', 'trevenant', 'pumpkaboo', 'gourgeist', 'litwick', 'lampent', 'chandelure', 'rotom', 'magnemite', 'magneton', 'magnezone', 'voltorb', 'electrode', 'trubbish', 'garbodor', 'swinub', 'piloswine', 'mamoswine', 'bergmite', 'avalugg', 'cubchoo', 'beartic', 'smoochum', 'jynx', 'vanillite', 'vanillish', 'vanilluxe', 'snover', 'abomasnow', 'delibird', 'sneasel', 'weavile', 'timburr', 'gurdurr', 'conkeldurr', 'torkoal', 'sandshrew', 'sandslash', 'aron', 'lairon', 'aggron', 'larvitar', 'pupitar', 'tyranitar', 'heatmor', 'durant', 'spinarak', 'ariados', 'spearow', 'fearow', 'cryogonal', 'skarmory', 'noibat', 'noivern', 'gligar', 'gliscor', 'hoothoot', 'noctowl', 'igglybuff', 'jigglypuff', 'wigglytuff', 'shuppet', 'banette', 'zorua', 'zoroark', 'gothita', 'gothorita', 'gothitelle', 'bonsly', 'sudowoodo', 'spinda', 'teddiursa', 'ursaring', 'lickitung', 'lickilicky', 'scyther', 'scizor', 'ditto', 'swablu', 'altaria', 'druddigon', 'deino', 'zweilous', 'hydreigon', 'dratini', 'dragonair', 'dragonite', 'xerneas', 'yveltal', 'zygarde', 'mewtwo',
		// Gen VI only:
		//		'chespin', 'quilladin', 'chesnaught', 'fennekin', 'braixen', 'delphox', 'froakie', 'frogadier', 'greninja', 'bunnelby', 'diggersby', 'fletchling', 'fletchinder', 'talonflame', 'scatterbug', 'spewpa', 'vivillon', 'litleo', 'pyroar', 'flabebe', 'floette', 'florges', 'skiddo', 'gogoat', 'pancham', 'pangoro', 'furfrou', 'espurr', 'meowstic', 'meowsticf', 'honedge', 'doublade', 'aegislash', 'spritzee', 'aromatisse', 'swirlix', 'slurpuff', 'inkay', 'malamar', 'binacle', 'barbaracle', 'skrelp', 'dragalge', 'clauncher', 'clawitzer', 'helioptile', 'heliolisk', 'tyrunt', 'tyrantrum', 'amaura', 'aurorus', 'eevee', 'flareon', 'jolteon', 'vaporeon', 'espeon', 'umbreon', 'leafeon', 'glaceon', 'sylveon', 'hawlucha', 'dedenne', 'carbink', 'goomy', 'sliggoo', 'goodra', 'klefki', 'phantump', 'trevenant', 'pumpkaboo', 'gourgeist', 'bergmite', 'avalugg', 'noibat', 'noivern', 'xerneas', 'yveltal', 'zygarde', 'diancie', 'hoopa', 'volcanion', 'bulbasaur', 'ivysaur', 'venusaur', 'charmander', 'charmeleon', 'charizard', 'squirtle', 'wartortle', 'blastoise', 'abra', 'kadabra', 'alakazam', 'gastly', 'haunter', 'gengar', 'kangaskhan', 'pinsir', 'magikarp', 'gyarados', 'aerodactyl', 'mewtwo', 'mareep', 'flaaffy', 'ampharos', 'scyther', 'scizor', 'heracross', 'houndour', 'houndoom', 'larvitar', 'pupitar', 'tyranitar', 'ralts', 'kirlia', 'gardevoir', 'gallade', 'mawile', 'aron', 'lairon', 'aggron', 'meditite', 'medicham', 'electrike', 'manectric', 'shuppet', 'banette', 'absol', 'latias', 'latios', 'gible', 'gabite', 'garchomp', 'riolu', 'lucario', 'snover', 'abomasnow',
			];
			for (const id of kalosDex) {
				const poke = this.dex.data.Pokedex[id];
				if (poke && poke.sheetOutput) {
					this.add('-message', `${poke.sheetOutput}`);
				} else {
					this.add('-message', ``);
					console.log(id);
				}
			}
		},
		mod: 'kalos', // a genius always I am a genius
	},
	{
		name: "Randomizer dex output",
		desc: [
			"WIP but it's for the randomizer! (obviously)",
		],
		
		ruleset: ['Team Preview', 'HP Percentage Mod', 'Cancel Mod', 'Dynamax Clause', 'Sleep Clause Mod'],
		onBegin() {
			for (const id in this.dex.data.Pokedex) {
				const poke = this.dex.data.Pokedex[id];
				if (poke && poke.sheetOutput) this.add('-message', `${poke.sheetOutput}`);
			}
		},
		mod: 'randomizer',
	},
/*
	{
		name: "Reverse Utility Sheet",
		desc: [
			"The same as the Utility Sheet, but for Pokémon that currently aren't in the Sinnoh dex!",
		],
		
		ruleset: ['Team Preview', 'HP Percentage Mod', 'Cancel Mod', 'Dynamax Clause', 'Sleep Clause Mod'],
		onBegin() {
			const platinumDex = ['turtwig', 'grotle', 'torterra', 'chimchar', 'monferno', 'infernape', 'piplup', 'prinplup', 'empoleon', 'starly', 'staravia', 'staraptor', 'bidoof', 'bibarel', 'kricketot', 'kricketune', 'shinx', 'luxio', 'luxray', 'abra', 'kadabra', 'alakazam', 'magikarp', 'gyarados', 'budew', 'roselia', 'roserade', 'zubat', 'golbat', 'crobat', 'geodude', 'graveler', 'golem', 'onix', 'steelix', 'cranidos', 'rampardos', 'shieldon', 'bastiodon', 'machop', 'machoke', 'machamp', 'psyduck', 'golduck', 'burmy', 'wormadam', 'wormadamsandy', 'wormadamtrash', 'mothim', 'wurmple', 'silcoon', 'beautifly', 'cascoon', 'dustox', 'combee', 'vespiquen', 'pachirisu', 'buizel', 'floatzel', 'cherubi', 'cherrim', 'shellos', 'gastrodon', 'heracross', 'aipom', 'ambipom', 'drifloon', 'drifblim', 'buneary', 'lopunny', 'gastly', 'haunter', 'gengar', 'misdreavus', 'mismagius', 'murkrow', 'honchkrow', 'glameow', 'purugly', 'goldeen', 'seaking', 'barboach', 'whiscash', 'chingling', 'chimecho', 'stunky', 'skuntank', 'meditite', 'medicham', 'bronzor', 'bronzong', 'ponyta', 'rapidash', 'bonsly', 'sudowoodo', 'mimejr', 'mrmime', 'happiny', 'chansey', 'blissey', 'cleffa', 'clefairy', 'clefable', 'chatot', 'pichu', 'pikachu', 'raichu', 'hoothoot', 'noctowl', 'spiritomb', 'gible', 'gabite', 'garchomp', 'munchlax', 'snorlax', 'unown', 'riolu', 'lucario', 'wooper', 'quagsire', 'wingull', 'pelipper', 'girafarig', 'hippopotas', 'hippowdon', 'azurill', 'marill', 'azumarill', 'skorupi', 'drapion', 'croagunk', 'toxicroak', 'carnivine', 'remoraid', 'octillery', 'finneon', 'lumineon', 'tentacool', 'tentacruel', 'feebas', 'milotic', 'mantyke', 'mantine', 'snover', 'abomasnow', 'sneasel', 'weavile', 'rotom', 'rotomheat', 'rotomwash', 'rotomfrost', 'rotomfan', 'rotommow', 'gligar', 'gliscor', 'nosepass', 'probopass', 'ralts', 'kirlia', 'gardevoir', 'gallade', 'lickitung', 'lickilicky', 'eevee', 'vaporeon', 'jolteon', 'flareon', 'espeon', 'umbreon', 'leafeon', 'glaceon', 'swablu', 'altaria', 'togepi', 'togetic', 'togekiss', 'houndour', 'houndoom', 'magnemite', 'magneton', 'magnezone', 'tangela', 'tangrowth', 'yanma', 'yanmega', 'tropius', 'rhyhorn', 'rhydon', 'rhyperior', 'duskull', 'dusclops', 'dusknoir', 'porygon', 'porygon2', 'porygonz', 'scyther', 'scizor', 'elekid', 'electabuzz', 'electivire', 'magby', 'magmar', 'magmortar', 'swinub', 'piloswine', 'mamoswine', 'snorunt', 'glalie', 'froslass', 'absol'];
			for (const typeid in this.dex.data.TypeChart) {
				this.add('-message', `=== ${typeid} ===\n`);
				for (const id in this.dex.data.Pokedex) {
					if (platinumDex.includes(id)) continue;
					const poke = this.dex.data.Pokedex[id];
					if (poke.types.includes(typeid) && poke.kind && poke.kind === "National" && poke.sheetOutput) {
						this.add('-message', `${poke.sheetOutput}`);
						poke.sheetOutput = poke.sheetOutput2;
					}
				}
			}
		},
		mod: 'utilitysheet',
	},

	{
		name: "Variants Comparison",
		desc: [
			"Outputs a sheet that compares variants' authentic movepools to their base forms (excluding impossible transfers)!",
		],
		
		ruleset: ['Team Preview', 'HP Percentage Mod', 'Cancel Mod', 'Dynamax Clause', 'Sleep Clause Mod'],
		onBegin() {
			for (const id in this.dex.data.Pokedex) {
				const poke = this.dex.data.Pokedex[id];
				if (poke && poke.sheetOutput) this.add('-message', `${poke.sheetOutput}`);
			}
		},
		mod: 'variantscompare',
	},

	{
		name: "Moves from Paldea",
		desc: [
			"Outputs a sheet that lists movepool additions from Gen IX (by move)!",
		],
		
		ruleset: ['Team Preview', 'HP Percentage Mod', 'Cancel Mod', 'Dynamax Clause', 'Sleep Clause Mod'],
		onBegin() {
			for (const moveid in this.dex.data.Moves) {
				const move = this.dex.data.Moves[moveid];
				if (move && move.sheetOutput) this.add('-message', `${move.sheetOutput}`);
			}
		},
		mod: 'paldeamoves',
	},

	{
		name: "Type-Move Correlations",
		desc: [
			"Outputs a sheet that lists type-move correlations in each Generation.",
		],
		
		ruleset: ['Team Preview', 'HP Percentage Mod', 'Cancel Mod', 'Dynamax Clause', 'Sleep Clause Mod'],
		onBegin() {
			for (const typeid in this.dex.data.TypeChart) {
				const type = this.dex.data.TypeChart[typeid];
				if (type && type.sheetOutput) this.add('-message', `${type.sheetOutput}`);
			}
		},
		mod: 'typedata',
	},
*/
];
