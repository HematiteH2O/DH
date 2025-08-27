// pasting Kalos for convenience
export const Scripts: ModdedBattleScriptsData = {
/* Kalos currently
	init() {
		const postgameTms = [
			'roar', 'lightscreen', 'smackdown', 'sludgewave', 'overheat', 'steelwing', 'skydrop', 'incinerate', 'quash', 'explosion', 'retaliate', 'voltswitch', 'dreameater',
			'flashcannon', 'wildcharge',
			// 'round', 'gigaimpact', 'swagger',
		];
		const sunAbilities = [
			'Solar Power', 'Chlorophyll', 'Leaf Guard', 'Harvest',
		];

		const movepoolSections = {
			Stab1: [
			],
			Stab2: [
			],

			SpeedControl: [
				'tailwind', 'trickroom', 'stickyweb', 'bulldoze', 'cottonspore', 'stringshot', 'electroweb', 'icywind', 'thunderwave', 'nuzzle', 'lowsweep', 'mudshot', 'rocktomb',
				'scaryface',
			],
			Priority: [
				'extremespeed', 'fakeout', 'feint', 'aquajet', 'bulletpunch', 'iceshard', 'machpunch', 'quickattack', 'shadowsneak', 'suckerpunch', 'vacuumwave', 'watershuriken',
			],
			PriorityPrankster: [
				'assist', 'copycat', 'mefirst', 'metronome', 'mirrormove', 'naturepower',
			],
			Spread: [
				'acid', 'aircutter', 'blizzard', 'bubble', 'dazzlinggleam', 'disarmingvoice', 'electroweb', 'eruption', 'heatwave', 'hypervoice', 'icywind', 'incinerate', 'muddywater',
				'powdersnow', 'razorleaf', 'razorwind', 'rockslide', 'snarl', 'strugglebug', 'swift', 'twister', 'waterspout', 'boomburst', 'bulldoze', 'discharge', 'earthquake',
				'explosion', 'lavaplume', 'magnitude', 'paraboliccharge', 'petalblizzard', 'selfdestruct', 'sludgewave', 'surf', 'synchronoise',
			],
			FieldEffect: [
				'raindance', 'sunnyday', 'sandstorm', 'hail', 'electricterrain', 'grassyterrain', 'trickroom', 'gravity', 'perishsong', 'spikes', 'stealthrock', 'toxicspikes', 'stickyweb',
				'poisongas',
			],
			DamageMitigation: [
				'reflect', 'lightscreen', 'quickguard', 'wideguard', 'matblock', 'fakeout', 'followme', 'ragepowder', 'captivate', 'growl', 'snarl', 'strugglebug', 'babydolleyes', 'charm',
				'eerieimpulse', 'featherdance', 'kingsshield', 'memento', 'nobleroar', 'partingshot', 'tickle', 'mysticalfire', 'willowisp', 'watersport', 'mudsport', 'grasswhistle',
				'hypnosis', 'lovelykiss', 'sing', 'sleeppowder', 'spore', 'yawn',
			],
			Other: [
				'taunt', 'torment', 'encore', 'disable', 'skydrop', 'destinybond', 'counter', 'mirrorcoat', 'endeavor', 'metalburst', 'superfang', 'leer', 'screech', 'faketears',
				'acidspray', 'metalsound', 'allyswitch', 'healpulse', 'helpinghand', 'skillswap', 'entrainment', 'simplebeam', 'soak', 'uturn', 'voltswitch', 'batonpass', 'partingshot',
				'acupressure', 'dragondance', 'flamecharge', 'quiverdance', 'shellsmash', 'shiftgear', 'swordsdance', 'bellydrum', 'poweruppunch', 'chargebeam', 'fierydance', 'growth',
				'nastyplot', 'tailglow', 'rototiller', 'flowershield', 'magneticflux',
			],

			// Team Flare Grunts
			Sun: [
				'morningsun', 'synthesis', 'moonlight', 'solarbeam', 'weatherball', 'growth',
				// also check for Solar Power, Chlorophyll, Leaf Guard, Harvest later
			],
			Dark: [
				'assurance', 'beatup', 'bite', 'crunch', 'darkpulse', 'darkvoid', 'embargo', 'faketears', 'feintattack', 'flatter', 'fling', 'foulplay', 'honeclaws', 'knockoff', 'memento',
				'nastyplot', 'nightdaze', 'nightslash', 'partingshot', 'payback', 'punishment', 'pursuit', 'quash', 'snarl', 'snatch', 'suckerpunch', 'switcheroo', 'taunt', 'thief',
				'topsyturvy', 'torment',
			],
			Fire: [
				'blastburn', 'blazekick', 'blueflare', 'ember', 'eruption', 'fierydance', 'fireblast', 'firefang', 'firepledge', 'firepunch', 'firespin', 'flameburst', 'flamecharge',
				'flamewheel', 'flamethrower', 'flareblitz', 'fusionflare', 'heatcrash', 'heatwave', 'incinerate', 'inferno', 'lavaplume', 'magmastorm', 'overheat', 'sacredfire',
				'searingshot', 'sunnyday', 'vcreate', 'willowisp',
			],
		};

		let printno = 0;
		for (const id in this.dataCache.Pokedex) {
			const poke = this.dataCache.Pokedex[id];
			if (!poke) continue;

			if (this.dataCache.Learnsets[id] && this.dataCache.Learnsets[id].learnset) {
				printno++;
				poke.learnsetCumulative = {};
				for (const section in movepoolSections) {
					poke.learnsetCumulative[section] = {
						Moves: [],
					};
				}
				// start with the vanilla learnset
				let learnset = null;
				if (poke.baseSpecies) {
					learnset = this.modData('Learnsets', this.toID(poke.baseSpecies)).learnset;
				} else {
					learnset = this.modData('Learnsets', this.toID(id)).learnset;
				}
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

// NOTICE: you will need to account for pre-evolutions' movepools before generating new level-up lists!
// specifically this is because of Egg moves, which I notice are only on the basic stage
// oops!

					const move = this.dataCache.Moves[moveid];
					if (!move) {
						console.log(moveid);
						continue;
					}
					let title: string[] = [move.name];

					// a simplified version of the Pulse learnset sheet:
					// only decide a) if the Pokémon learns the move at all and b) if it's a safe bet it still gets it in Ondas or not
					// "fringe moves" and transfer-only moves and future buffs are all lumped into one category unless they're TMs or tutors here
					let learned = false;
					let learnedLvUp = false;
					let learnedTm = false;
					let learnedOras = false;
					if (learnset[moveid]) { // if it learns the move
						for (const source of learnset[moveid]) {
							if (parseInt(source.charAt(0)) === 6) {
								learned = true;
								if (source.charAt(1) === 'L') {
									learnedLvUp = true;
									title = `(` + source.substr(2) + `) ` + title;
								}
								if (source.charAt(1) === 'M' && !postgameTms.includes(moveid)) learnedTm = true;
								if (source.charAt(1) === 'E' || source.charAt(1) === 'T') learnedOras = true;
							}
						}
					}
					if (learnset2 && learnset2[moveid]) { // if it learns the move
						for (const source of learnset2[moveid]) {
							if (parseInt(source.charAt(0)) === 6) {
								learned = true;
								if (source.charAt(1) === 'L') learnedLvUp = true;
								if (source.charAt(1) === 'M' && !postgameTms.includes(moveid)) learnedTm = true;
								if (source.charAt(1) === 'E' || source.charAt(1) === 'T' || source.charAt(1) === 'M') learnedOras = true;
							}
						}
					}
					if (learnset3 && learnset3[moveid]) { // if it learns the move
						for (const source of learnset3[moveid]) {
							if (parseInt(source.charAt(0)) === 6) {
								learned = true;
								if (source.charAt(1) === 'L') learnedLvUp = true;
								if (source.charAt(1) === 'M' && !postgameTms.includes(moveid)) learnedTm = true;
								if (source.charAt(1) === 'E' || source.charAt(1) === 'T' || source.charAt(1) === 'M') learnedOras = true;
							}
						}
					}
					if (learned) {
						for (const section in movepoolSections) {
							if (movepoolSections[section].includes(moveid)) {
								poke.learnsetCumulative[section].Moves.push(title);
							}
						}
						if ((move.category && move.category !== 'Status') && move.type && poke.types && (poke.types[0] === move.type)) poke.learnsetCumulative.Stab1.Moves.push(title);
						if ((move.category && move.category !== 'Status') && move.type && poke.types && poke.types[1] && poke.types[1] === move.type) poke.learnsetCumulative.Stab2.Moves.push(title);
					}
				}

				// abilities
				if (!poke || !poke.num || !poke.abilities || !poke.types || !poke.baseStats) return;
				let abilities = ``;
				if (poke.abilities[0]) abilities += `${this.dataCache.Abilities[this.toID(poke.abilities[0])].name}`;
				if (poke.abilities[1]) abilities += ` / ${this.dataCache.Abilities[this.toID(poke.abilities[1])].name}`;
				if (poke.abilities['H']) abilities += ` // ${this.dataCache.Abilities[this.toID(poke.abilities['H'])].name}`;
				if (poke.abilities['S']) abilities += ` // (${this.dataCache.Abilities[this.toID(poke.abilities['S'])].name})`;

				// added for Team Flare Grunts
				if (poke.abilities[0] && sunAbilities.includes(poke.abilities[0])) poke.learnsetCumulative.Sun.Moves.push(poke.abilities[0]);
				if (poke.abilities[1] && sunAbilities.includes(poke.abilities[1])) poke.learnsetCumulative.Sun.Moves.push(poke.abilities[1]);
				if (poke.abilities['H'] && sunAbilities.includes(poke.abilities['H'])) poke.learnsetCumulative.Sun.Moves.push(poke.abilities['H']);

				// icon name
				var iconid = id;
				// var iconid = iconname.replace(" ", `-`).replace(`.`, ``).replace(`:`, ``).replace(`\u2019`, ``); // to get rid of spaces and periods

				// finalize sheetOutput now.........
				let sheetOutput: string[] = [
					(printno) + `~3~=IMAGE("https://www.smogon.com/forums//media/minisprites/` + iconid + `.png",3)~` + poke.name + "~" + poke.types[0] + "~" + (poke.types[1] ? poke.types[1] : "") + "~" + abilities + "~" + poke.baseStats.hp + "~" + poke.baseStats.atk + "~" + poke.baseStats.def + "~" + poke.baseStats.spa + "~" + poke.baseStats.spd + "~" + poke.baseStats.spe + "~"
				];
				if (poke.evoLevel) { // helpful
					sheetOutput += "~" + poke.evoLevel;
				} else {
					sheetOutput += "~"; // just a blank cell
				}
				for (const section in movepoolSections) {
					if (
						poke.learnsetCumulative[section].Moves.length
					) {
						sheetOutput += "~" + poke.learnsetCumulative[section].Moves.sort();
					} else {
						sheetOutput += "~"; // just a blank cell
					}
				}
				poke.sheetOutput = sheetOutput;
			}
		}
	},
};
*/
export const Scripts: ModdedBattleScriptsData = {
	init() {
		const postgameTms = [
			// TMs
			'safeguard', 'smackdown', 'brickbreak', 'pluck', 'sludgewave', 'allyswitch', 'incinerate', 'quash', 'explosion', 'swordsdance', 'psychup', 'frostbreath', 'uturn', 'trickroom',
			'honeclaws', 'dragonclaw', 'calmmind', 'bulkup', 'telekinesis', 'solarbeam', 'earthquake', 'sludgebomb', 'flamecharge', 'lowsweep', 'overheat', 'focusblast', 'stoneedge',
			'poisonjab', 'dreameater', 'grassknot', 'flashcannon',
			// tutors
			'covet', 'electroweb', 'icywind', 'healbell', 'drainpunch', 'tailwind',
			'worryseed', 'gastroacid', 'helpinghand', 'afteryou', 'magicroom', 'wonderroom', 'spite', 'recycle', 'trick', 'stealthrock', 'outrage', 'endeavor', 'sleeptalk', 'skillswap',
			'snatch',
			// 'hiddenpower', 'protect', 'doubleteam', 'round', 'swagger', 'substitute',
		];

// TODO LIST:
// - add universal moves to learnsets when randomizing (based on the new type); obviously highlight where they're new since this is manual!
// --- also highlight TMs that are learned now, but weren't already in Gen V, if they were TMs at the time (for my own convenience)
// - shift each move to the lowest level it's ever learned pre-Gen VIII
// - delay early moves to evolution levels if the pre-evolution didn't have them
// - list all (non-TM) Egg moves, post-Gen VIII Egg/level-up additions, and the above postgameTms section at the end ("moves that can be assigned levels if I want")
// - go through move substitutions by type, but keep the old move listed in the same row just in case (ex. "Icy Wind -> Struggle Bug")
// - possible: filter out moves that are already TMs if the player gets the TM earlier than the level-up move (save on space)

/*
// UNIVERSAL MOVES

Universal	Attract, Double Team, Facade, Frustration, Giga Impact, Hidden Power, Hyper Beam, Protect, Rain Dance, Rest, Return, Round, Sleep Talk, Snore, Substitute, Sunny Day, Swagger, Toxic

Fire			Fire Blast, Flame Charge, Flamethrower, Heat Wave, Overheat, Reflect, Rock Smash, Solar Beam, Will-O-Wisp
Water			Blizzard, Dive, Hail, Ice Beam, Icy Wind, Scald, Surf
* Chilling Water
Electric		Charge Beam, Flash, Light Screen, Reflect, Signal Beam, Thunder, Thunder Wave, Thunderbolt, Volt Switch, Wild Charge
* Discharge, Eerie Impulse
Grass			Energy Ball, Flash, Giga Drain, Grass Knot, Reflect, Seed Bomb, Sludge Bomb, Solar Beam, Synthesis, Worry Seed
* Bullet Seed, Poison Powder, Sleep Powder, Stun Spore, Trailblaze
Ice			Blizzard, Hail, Ice Beam, Icy Wind, Reflect, Signal Beam, Snowscape
Fighting		Brick Break, Bulk Up, Earthquake, Focus Blast, Helping Hand, Ice Punch, Poison Jab, Retaliate, Rock Slide, Rock Smash, Rock Tomb, Stone Edge, Strength, Work Up
* Coaching
Poison		Gunk Shot, Sludge Bomb, Toxic, Venoshock
* Acid Spray
Ground		Bulldoze, Dig, Earth Power, Earthquake, Rock Slide, Rock Smash, Rock Tomb, Sandstorm, Stealth Rock, Stone Edge, Strength
Flying		Aerial Ace, Fly, Reflect, Roost, Tailwind
Psychic		Calm Mind, Dream Eater, Flash, Helping Hand, Light Screen, Magic Coat, Psych Up, Psychic, Psyshock, Reflect, Shadow Ball, Signal Beam, Skill Swap, Telekinesis, Trick, Trick Room, Zen Headbutt
* Teleport
Bug			Bug Bite, Roost, Struggle Bug, U-turn, X-Scissor
* Pounce
Rock			Brick Break, Bulldoze, Earth Power, Earthquake, Iron Defense, Rock Polish, Rock Slide, Rock Smash, Rock Tomb, Sandstorm, Smack Down, Stealth Rock, Stone Edge
Ghost			Shadow Ball, Spite
* Hex
Dragon		Draco Meteor, Dragon Claw, Dragon Pulse, Dragon Tail, Hone Claws, Outrage, Rock Smash, Strength
Dark			Dark Pulse, Payback, Retaliate, Snarl, Spite, Taunt, Thief, Torment
Steel			Flash Cannon, Iron Defense, Iron Head, Rock Smash
* Steel Beam (maybe)
Normal		Helping Hand, Retaliate, Work Up

Monster		Blizzard, Bulldoze, Earthquake, Ice Beam, Iron Tail, Outrage, Rock Smash, Strength
Human-Like	Brick Break, Fire Punch, Fling, Focus Blast, Helping Hand, Ice Punch, Taunt, Thunder Punch
* Focus Punch, Power-Up Punch
Water 1		Blizzard, Dive, Hail, Ice Beam, Icy Wind, Scald, Surf, Waterfall
* Chilling Water
Water 3		Blizzard, Helping Hand, Ice Beam, Reflect, Rock Slide, Scald, Surf
* Chilling Water
Bug			Bug Bite, Roost, Struggle Bug, U-turn, X-Scissor
* Pounce
Flying		Aerial Ace, Fly, Heat Wave, Pluck, Roost, Sky Attack, Tailwind, U-turn
* Air Cutter, Hurricane, Quick Attack
Amorphous	Dark Pulse, Flash, Pain Split, Shadow Ball, Sludge Bomb, Taunt
* Hex
Field			Dig, Iron Tail
Water 2		Blizzard, Bounce, Dive, Hail, Ice Beam, Icy Wind, Scald, Surf, Waterfall
* Chilling Water
Fairy			Brick Break, Calm Mind, Dig, Flash, Helping Hand, Iron Tail, Light Screen, Psychic, Reflect, Thunder Wave
* Growl, Teleport
Grass			Bullet Seed, Energy Ball, Flash, Giga Drain, Grass Knot, Reflect, Seed Bomb, Sludge Bomb, Solar Beam, Swords Dance, Synthesis, Worry Seed
* Bullet Seed, Growth, Leech Seed, Poison Powder, Sleep Powder, Stun Spore, Trailblaze
Dragon		Bulldoze, Dragon Pulse, Dragon Tail, Earthquake, Iron Tail, Outrage, Rock Smash, Strength
* Breaking Swipe, Leer

Asterisks are moves that are not TMs, but that I want to be distributed widely anyway

Post-Gen V moves I'm interested in backporting based on the above list
- Chilling Water
- Eerie Impulse
- Trailblaze
- Coaching
- Pounce
- Steel Beam (? is this possible? I could do special Head Smash at least)
- Power-Up Punch
- Breaking Swipe

Other post-Gen V moves I probably *can* backport if it comes up
	Phantom Force, Noble Roar, Parabolic Charge, Petal Blizzard, Boomburst, Play Nice, Confide, Diamond Storm, Steam Eruption, Hyperspace Hole, Water Shuriken, Aromatic Mist,
	Baby-Doll Eyes, Nuzzle, Infestation, Power-Up Punch;

 	First Impression (?), Spirit Shackle (?), Darkest Lariat, Ice Hammer, High Horsepower, Solar Blade, Leafage, Anchor Shot (?), Lunge, Fire Lash, Power Trip, Smart Strike, Trop Kick,
  	Clanging Scales, Dragon Hammer, Brutal Swing, Psychic Fangs, Shadow Bone, Accelerock, Liquidation, Tearful Look, Zing Zap, Mind Blown (?);

	Snipe Shot, Magic Powder (?), Decorate, Drum Beating, Snap Trap, Pyro Ball, Breaking Swipe, Branch Poke, Overdrive, Apple Acid, Life Dew (?), False Surrender, Meteor Assault,
 	Scale Shot (?), Skitter Smack, Corrosive Gas (?), Coaching, Flip Turn, Triple Axel (?), Dual Wingbeat, Scorching Sands, Mystical Power, Raging Fury, Wave Crash, Chloroblast (?),
  	Mountain Gale, Victory Dance, Headlong Rush, Barb Barrage (?), Esper Wing, Bitter Malice, Shelter, Infernal Parade (?), Bleakwind Storm, Wildbolt Storm, Sandsear Storm (?);

	Axe Kick (?), Lumina Crash, Jet Punch, Spicy Extract, Spin Out, Population Bomb (?), Triple Dive, Kowtow Cleave, Flower Trick, Torch Song, Aqua Step, Make It Rain, Pounce,
 	Trailblaze, Chilling Water, Hyper Drill, Twin Beam, Armor Cannon, Bitter Blade, Comeuppance, Aqua Cutter, Matcha Gotcha (?), Thunderclap, Mighty Cleave, Tachyon Cutter,
  	Hard Press (?), Supercell Slam, Malignant Chain
*/

		let printno = 0;
		for (const id in this.dataCache.Pokedex) {
			const poke = this.dataCache.Pokedex[id];
			if (!poke) continue;

			if (this.dataCache.Learnsets[id] && this.dataCache.Learnsets[id].learnset) {
				printno++;
				poke.learnsetCumulative = {
							Moves: [],
							learnset: [],
				};
				for (let i = 1; i < 99; i++) {
					poke.learnsetCumulative.learnset[i] = {
						movesLearned: [],
					}
				}
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
					const move = this.dataCache.Moves[moveid];
					if (!move) {
						console.log(moveid);
						continue;
					}

					// a simplified version of the Pulse learnset sheet:
					// only decide a) if the Pokémon learns the move at all and b) if it's a safe bet it still gets it in Ondas or not
					// "fringe moves" and transfer-only moves and future buffs are all lumped into one category unless they're TMs or tutors here
					let learned = false;
					let learnedLvUp = false;
					let learnedTm = false;
					let learnedOras = false;
					let levelLearned = 1;
					if (learnset[moveid]) { // if it learns the move
						for (const source of learnset[moveid]) {
							if (parseInt(source.charAt(0)) === 6) {
								learned = true;
								if (source.charAt(1) === 'L') {
									learnedLvUp = true;
									// and then...
									if (learnset2 && !learnset2[moveid] && poke.evoLevel && poke.evoLevel > source.substr(2)) {
										poke.learnsetCumulative.learnset[poke.evoLevel].movesLearned.push(move.name); // evolution moves for convenience
									} else {
										if (source.substr(2) && poke.learnsetCumulative.learnset[parseInt(source.substr(2))]) {
											poke.learnsetCumulative.learnset[parseInt(source.substr(2))].movesLearned.push(move.name); // otherwise, just the canon level
										} else {
											console.log(poke.name + ` - ` + move.name + ` - source ` + source);
										}
									}
								}
								if (source.charAt(1) === 'M' && !postgameTms.includes(moveid)) learnedTm = true;
								if (source.charAt(1) === 'E' || source.charAt(1) === 'T' || source.charAt(1) === 'M') learnedOras = true;
							}
						}
					}
					if (learnset2 && learnset2[moveid]) { // if it learns the move
						for (const source of learnset2[moveid]) {
							if (parseInt(source.charAt(0)) === 6) {
								learned = true;
								if (source.charAt(1) === 'L') {
									if (!learnedLvUp) {
										let level = 1;
										poke.learnsetCumulative.learnset[level].movesLearned.push(move.name);
										learnedLvUp = true;
									}
								}
								if (source.charAt(1) === 'M' && !postgameTms.includes(moveid)) learnedTm = true;
								if (source.charAt(1) === 'E' || source.charAt(1) === 'T' || source.charAt(1) === 'M') learnedOras = true;
							}
						}
					}
					if (learnset3 && learnset3[moveid]) { // if it learns the move
						for (const source of learnset3[moveid]) {
							if (parseInt(source.charAt(0)) === 6) {
								learned = true;
								if (source.charAt(1) === 'L') {
									if (!learnedLvUp) {
										let level = 1;
										poke.learnsetCumulative.learnset[level].movesLearned.push(move.name);
										learnedLvUp = true;
									}
								}
								if (source.charAt(1) === 'L') learnedLvUp = true;
								if (source.charAt(1) === 'M' && !postgameTms.includes(moveid)) learnedTm = true;
								if (source.charAt(1) === 'E' || source.charAt(1) === 'T' || source.charAt(1) === 'M') learnedOras = true;
							}
						}
					}
					if (!learnedLvUp && ['grasspledge', 'firepledge', 'waterpledge', 'hydrocannon', 'frenzyplant', 'blastburn', 'dracometeor', 'gigaimpact', 'snore'].includes(moveid)) continue;
					if (learned && !learnedLvUp && !learnedTm && learnedOras) {
						let moveName: string[] = [move.name];
						moveName = `0` + moveName; // status moves first, then
						let level = 1;
						poke.learnsetCumulative.learnset[level].movesLearned.push(moveName); // learn at level 1 if there are no other options
					}
				}

				poke.learnsetCumulative.learnset.sort();
				if (!poke || !poke.learnsetCumulative.learnset) return;
				// finalize sheetOutput now.........
				let sheetOutput: string[] = [
					`\n\n` + (poke.evoLevel ? (poke.name + ` // ` + poke.evoLevel) : poke.name) + `\n`
				];
				for (const level in poke.learnsetCumulative.learnset) {
					if (poke.learnsetCumulative.learnset[level].movesLearned.length) {
						poke.learnsetCumulative.learnset[level].movesLearned.sort();
						for (const moveid of poke.learnsetCumulative.learnset[level].movesLearned) {
							sheetOutput += `\n` + (parseInt(level) + 1) + ` - ` + moveid;
						}
					}
				}
				poke.sheetOutput = sheetOutput;
			}
		}
	},
};

// this was a cool exercise but not what I'm doing this time
/*
				for (const moveid of poke.learnsetCumulative.Moves) {
					const move = this.dataCache.Moves[moveid];
					if (!move) continue;

					// first assign the move a level
					let lv = 1;
					let basePower = 1;
					if (move.basePower && move.basePower > 0) {
						basePower = move.basePower;
						if (['fellstinger'].includes(moveid)) basePower = 30;
						if (['flyingpress'].includes(moveid)) basePower = 80;
						if (['leechlife'].includes(moveid)) basePower = 20;
						if (['mysticalfire'].includes(moveid)) basePower = 65;
						if (['paraboliccharge'].includes(moveid)) basePower = 50;
						if (['suckerpunch'].includes(moveid)) basePower = 80;
						if (['tackle'].includes(moveid)) basePower = 50;
						if (['lusterpurge'].includes(moveid)) basePower = 70;
						if (['mistball'].includes(moveid)) basePower = 70;
						if (['acrobatics'].includes(moveid)) basePower = (110 / 1.2);

						if (move.multihit) {
							if (move.multihit === 2) basePower *= 2;
							else if (move.multihit === 3) basePower *= 6; // Triple Kick, Triple Axel
							else basePower *= 3;
						}
						if (move.flags && move.flags['charge']) basePower *= 0.75;
						if (move.target && ['allAdjacentFoes', 'allAdjacent'].includes(move.target)) basePower *= 1.1;
						if (move.recoil) {
							if (move.recoil === [1, 4]) basePower *= 8 / 9;
							if (move.recoil === [33, 100]) basePower *= 6 / 7;
							if (move.recoil === [1, 2]) basePower *= 4 / 5;
						}
						if (move.type && (move.type === 'Normal')) basePower *= 0.8;
						if (['weatherball'].includes(moveid)) basePower = 100;
						if (move.willCrit) basePower *= 1.5;
					}

					lv = Math.floor((basePower * 0.7) - 23);
					if (lv < 1) lv = 1;

					// coverage type lenience
					if (['Fire', 'Flying', 'Rock'].includes(moveid) && 9 < lv && lv < 14) lv -= 2; // Viola
					if (['Water', 'Grass', 'Fighting', 'Ground', 'Steel'].includes(moveid) && 24 < lv && lv < 30) lv -= 2; // Grant
					if (['Flying', 'Psychic', 'Fairy'].includes(moveid) && 32 < lv && lv < 38) lv -= 2; // Korrina
					if (['Fire', 'Ice', 'Poison', 'Flying', 'Bug'].includes(moveid) && 35 < lv && lv < 41) lv -= 2; // Ramos
					if (['Fire', 'Fighting', 'Ground'].includes(moveid) && 39 < lv && lv < 45) lv -= 2; // Aliana and Clemont
					if (['Poison', 'Steel'].includes(moveid) && 44 < lv && lv < 50) lv -= 2; // Valerie
					if (['Bug', 'Ghost', 'Dark'].includes(moveid) && 51 < lv && lv < 57) lv -= 2; // Olympia
					if (['Psychic', 'Ground'].includes(moveid) && 51 < lv && lv < 57) lv -= 2; // Xerosic
					if (['Flying', 'Psychic', 'Fairy'].includes(moveid) && 55 < lv && lv < 61) lv -= 2; // Tierno??
					if (['Fire', 'Fighting', 'Rock', 'Steel'].includes(moveid) && 63 < lv && lv < 69) lv -= 2; // Wulfric
					if (72 < lv) lv = 72; // c'mon you can learn anything you want at that point

					// assign exceptional levels to (some) status moves
					if (['aromaticmist', 'assist', 'bide', 'copycat', 'flash', 'howl', 'kinesis', 'mirrormove', 'sandattack', 'smokescreen', 'sonicboom'].includes(moveid)) lv = 8;
					if (['charge', 'detect', 'mefirst', 'naturalgift', 'protect', 'sweetscent', 'wish', 'workup'].includes(moveid)) lv = 15;
					if (['agility', 'autotomize', 'defendorder', 'dragonrage', 'rockpolish', 'screech', 'swordsdance'].includes(moveid)) lv = 20;
					if (['afteryou', 'babydolleyes', 'camouflage', 'charm', 'cottonspore', 'dragondance', 'electrify', 'entrainment', 'featherdance', 'flatter', 'flowershield', 'grassknot', 'grudge', 'guardswap', 'gyroball', 'honeclaws', 'lowkick', 'magiccoat', 'magneticflux', 'magnitude', 'mist', 'partingshot', 'poisonpowder', 'powerswap', 'psychup', 'quash', 'rototiller', 'tickle', 'torment'].includes(moveid)) lv = 24;
					if (['healpulse', 'helpinghand', 'iondeluge', 'luckychant', 'magicroom', 'magnetrise', 'naturepower', 'poisongas', 'wonderroom'].includes(moveid)) lv = 27;
					if (['acidarmor', 'acupressure', 'allyswitch', 'aromatherapy', 'barrier', 'bestow', 'bulkup', 'confuseray', 'curse', 'disable', 'fling', 'grasswhistle', 'guardsplit', 'healbell', 'hypnosis', 'irondefense', 'nastyplot', 'powersplit', 'psychoshift', 'recycle', 'reflect', 'reflecttype', 'refresh', 'safeguard', 'sing', 'spikes', 'spikyshield', 'spitup', 'stealthrock', 'stockpile', 'stunspore', 'substitute', 'swallow', 'switcheroo', 'tailglow', 'toxic', 'toxicspikes', 'trick', 'trickroom', 'venomdrench', 'wideguard', 'willowisp'].includes(moveid)) lv = 32;
					if (['calmmind', 'coil', 'cottonguard', 'crushgrip', 'eerieimpulse', 'flail', 'forestscurse', 'frustration', 'glare', 'growth', 'hail', 'healblock', 'healorder', 'heatcrash', 'moonlight', 'morningsun', 'painsplit', 'punishment', 'ragepowder', 'raindance', 'return', 'roleplay', 'sandstorm', 'shiftgear', 'skillswap', 'sleeppowder', 'sleeptalk', 'snatch', 'soak', 'spore', 'sunnyday', 'swagger', 'synthesis', 'telekinesis', 'thunderwave', 'topsyturvy', 'trickortreat', 'wringout'].includes(moveid)) lv = 35;
					if (['amnesia', 'attract', 'batonpass', 'beatup', 'bellydrum', 'captivate', 'destinybond', 'electricterrain', 'embargo', 'encore', 'endeavor', 'faketears', 'grassyterrain', 'healingwish', 'heavyslam', 'leechseed', 'lightscreen', 'lunardance', 'matblock', 'metalsound', 'milkdrink', 'mindreader', 'miracleeye', 'mistyterrain', 'mudsport', 'nightmare', 'quickguard', 'quiverdance', 'recover', 'rest', 'reversal', 'roost', 'simplebeam', 'slackoff', 'softboiled', 'spite', 'stickyweb', 'superfang', 'taunt', 'yawn'].includes(moveid)) lv = 39;
					if (['cosmicpower', 'craftyshield', 'doubleteam', 'electroball', 'finalgambit', 'followme', 'gastroacid', 'haze', 'imprison', 'kingsshield', 'memento', 'powder', 'roar', 'teeterdance', 'whirlwind', 'worryseed'].includes(moveid)) lv = 44;
					if (['defog', 'gravity', 'lovelykiss', 'minimize', 'shellsmash', 'tailwind'].includes(moveid)) lv = 50;
					if (['darkvoid', 'geomancy', 'perishsong'].includes(moveid)) lv = 54;

					// power exceptions
					if (['tackle'].includes(moveid)) lv = 1;
					if (['pound'].includes(moveid)) lv = 1;
					if (['scratch'].includes(moveid)) lv = 1;
					if (['vinewhip'].includes(moveid)) lv = 5;
					if (['rollout', 'iceball'].includes(moveid)) lv = 8;
					if (move.volatileStatus && move.volatileStatus === 'partiallytrapped') lv = 12;
					if (['acidspray', 'drainingkiss', 'echoedvoice', 'furycutter', 'nuzzle', 'poweruppunch'].includes(moveid)) lv = 18;
					if (['focuspunch'].includes(moveid)) lv = 36;
					if (['overheat'].includes(moveid)) lv = 56;

					let moveName: string[] = [move.name];
					if (move.category && move.category !== 'Status') {
						moveName = moveName; // attacks should be the last move learned at a level so NPCs don't often get stuck with none
					} else {
						moveName = `0` + moveName; // status moves first, then
					}

					// evolutions learn exclusive moves at their evolution level, if possible!
					if (poke.evoLevel) {
						let evoMove = true;
						if (learnset2 && learnset2[moveid]) { // if it learns the move
							for (const source of learnset2[moveid]) {
								if (parseInt(source.charAt(0)) === 6) evoMove = false;
							}
						}
						if (learnset3 && learnset3[moveid]) { // if it learns the move
							for (const source of learnset3[moveid]) {
								if (parseInt(source.charAt(0)) === 6) evoMove = false;
							}
						}
						if (evoMove && (lv < poke.evoLevel)) {
							poke.learnsetCumulative.learnset[1].movesLearned.push(moveName); // bonus level 1
							lv = poke.evoLevel;
						}
						if (poke.evoLevel < lv && lv < poke.evoLevel + 3) lv = poke.evoLevel; // more evolution moves
					}

					// then send it to the learnset
					poke.learnsetCumulative.learnset[lv].movesLearned.push(moveName);
				}
*/
