// pasting Kalos for convenience
export const Scripts: ModdedBattleScriptsData = {
	init() {
		const hms = [
			'cut', 'surf', 'fly', 'strength', 'waterfall', 'dive', 'flash', 'dig',
		];
		const genVTms = [
			// TMs
			'honeclaws', 'dragonclaw', 'psyshock', 'calmmind', 'roar', 'toxic', 'hail', 'bulkup', 'venoshock', 'hiddenpower', 'sunnyday', 'taunt', 'icebeam', 'blizzard', 'hyperbeam',
			'lightscreen', 'protect', 'raindance', 'telekinesis', 'safeguard', 'frustration', 'solarbeam', 'smackdown', 'thunderbolt', 'thunder', 'earthquake', 'return', 'dig', 'psychic',
			'shadowball', 'brickbreak', 'doubleteam', 'reflect', 'sludgewave', 'flamethrower', 'sludgebomb', 'sandstorm', 'fireblast', 'rocktomb', 'aerialace', 'torment', 'facade',
			'flamecharge', 'rest', 'attract', 'thief', 'lowsweep', 'round', 'echoedvoice', 'overheat', 'allyswitch', 'focusblast', 'energyball', 'falseswipe', 'scald', 'fling',
			'chargebeam', 'skydrop', 'incinerate', 'quash', 'willowisp', 'acrobatics', 'embargo', 'explosion', 'shadowclaw', 'payback', 'retaliate', 'gigaimpact', 'rockpolish', 'flash',
			'stoneedge', 'voltswitch', 'thunderwave', 'gyroball', 'swordsdance', 'strugglebug', 'psychup', 'bulldoze', 'frostbreath', 'rockslide', 'xscissor', 'dragontail', 'workup',
			'poisonjab', 'dreameater', 'grassknot', 'swagger', 'pluck', 'uturn', 'substitute', 'flashcannon', 'trickroom', 'wildcharge', 'rocksmash', 'snarl', 'cut', 'fly', 'surf', 
			'strength', 'waterfall', 'dive',
			// tutors
			'grasspledge', 'firepledge', 'waterpledge', 'frenzyplant', 'blastburn', 'hydrocannon', 'covet', 'bugbite', 'drillrun', 'bounce', 'signalbeam', 'ironhead', 'superfang',
			'uproar', 'seedbomb', 'dualchop', 'lowkick', 'gunkshot', 'thunderpunch', 'firepunch', 'icepunch', 'lastresort', 'irondefense', 'magnetrise', 'magiccoat', 'block', 'hypervoice',
			'electroweb', 'icywind', 'irontail', 'aquatail', 'earthpower', 'zenheadbutt', 'foulplay', 'superpower', 'gravity', 'dragonpulse', 'darkpulse', 'dracometeor', 'bind', 'snore',
			'healbell', 'knockoff', 'synthesis', 'roost', 'skyattack', 'roleplay', 'heatwave', 'gigadrain', 'drainpunch', 'painsplit', 'tailwind', 'worryseed', 'gastroacid', 'helpinghand',
			'afteryou', 'magicroom', 'wonderroom', 'spite', 'recycle', 'trick', 'stealthrock', 'outrage', 'endeavor', 'sleeptalk', 'skillswap', 'snatch', 
		]; // must include the whole list, even the ones below
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

// todo:
// - highlight TMs that are learned now, but weren't already in Gen V, if they were TMs at the time (for my own convenience) - done
// - shift each move to the lowest level it's ever learned pre-Gen VIII - done
// - delay early moves to evolution levels if the pre-evolution didn't have them - done
// - list all (non-TM) Egg moves, post-Gen VIII Egg/level-up additions, and the above postgameTms section at the end ("moves that can be assigned levels if I want") - done
// - forcibly remove all field move TMs and HMs from level-up!! - done

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
			if (!poke || poke.evos) continue;
			if (!(this.dataCache.Learnsets[id] && this.dataCache.Learnsets[id].learnset)) continue; // skip Megas and G-Maxes this time
			if (poke.baseSpecies && (poke.baseSpecies === "Pikachu" || poke.baseSpecies === "Pichu" || poke.baseSpecies === "Eevee" || poke.baseSpecies === "Floette")) continue;
			if (poke.forme && (poke.forme === "Totem" || poke.forme === "Alola-Totem")) continue;
			if (poke.num && poke.num < 0) continue; // skip CAPs
			let future = false; // determine if something is Gen VIII or later
			if (poke.num && poke.num > 809) future = true;
			if (poke.forme && (poke.forme === "Galar" || poke.forme === "Hisui" || poke.baseSpecies === "Tauros")) future = true;

			// RANDOM ABILITY
			// todo:
			// - list eligible Abilities (no form-change Abilities, Wonder Guard; do not randomize anything for Slaking, Regigigas, Archeops, etc.)

			// - randomize 1 Ability and put it in slot 1
			// - prioritize vanilla Abilities between slot 2 and HA (based on chosen rankings, random variance, excluding post-Gen V Abilities)
			// - Legendaries and Mythicals have 1 Ability and starters only randomize HA

			// - randomize a second Ability only for the crossgen output
			// - overwrite all Abilities with lower priority than that Ability with it
			// - if no Abilities have been overwritten, overwrite a random Ability with the same priority as it
			// - otherwise, ignore it

			// RANDOM TYPE
			// todo:
			// - randomize 2 types for single-types, 1 type for dual-types - done
			const chosenTypes: string[] = [];
			if (poke.types) {
				for (const type of poke.types) {
					if (type === "Fairy") continue;
					if (poke.abilities && ["Overgrow", "Blaze", "Torrent"].includes(poke.abilities[0]) && ["Fire", "Water", "Grass"].includes(type)) continue;
					if (poke.types[0] === "Normal" && poke.types[1] && poke.types[1] === "Flying" && type === "Normal") continue; // skip Normal in Normal/Flying
					chosenTypes.push(type);
				}
			}
			if (chosenTypes.length < 2) { // first pad types to 2
				const validTypes1: string[] = [];
				for (const type in this.dataCache.TypeChart) {
					if (chosenTypes.includes(type)) continue;
					if (type === "Fairy") continue;
					if (poke.abilities && ["Overgrow", "Blaze", "Torrent"].includes(poke.abilities[0]) && ["Fire", "Water", "Grass"].includes(type)) continue;
					validTypes1.push(type);
				}
				let random1 = Math.floor(Math.random() * validTypes1.length);
				chosenTypes.push(validTypes1[random1]);
			}
			if (chosenTypes.length < 2) { // pure Fairy-types need a second random type
				const validTypes2: string[] = [];
				for (const type in this.dataCache.TypeChart) {
					if (chosenTypes.includes(type)) continue;
					if (type === "Fairy") continue;
					if (poke.abilities && ["Overgrow", "Blaze", "Torrent"].includes(poke.abilities[0]) && ["Fire", "Water", "Grass"].includes(type)) continue;
					validTypes2.push(type);
				}
				let random2 = Math.floor(Math.random() * validTypes2.length);
				chosenTypes.push(validTypes2[random2]);
			}

			// - pool together all types including randomized types, base types, pre-evolutions and forms

			if (poke.prevo) {
				const poke2 = this.dataCache.Pokedex[this.toID(poke.prevo)];
				if (poke2.types) {
					for (const type of poke2.types) {
						if (chosenTypes.includes(type) || type === "Fairy") continue;
						if (poke.abilities && ["Overgrow", "Blaze", "Torrent"].includes(poke.abilities[0]) && ["Fire", "Water", "Grass"].includes(type)) continue;
						if (poke2.types[0] === "Normal" && poke2.types[1] && poke2.types[1] === "Flying" && type === "Normal") continue;
						chosenTypes.push(type);
					}
				}
				if (poke2.prevo) {
					const poke3 = this.dataCache.Pokedex[this.toID(poke2.prevo)];
					if (poke3.types) {
						for (const type of poke3.types) {
							if (chosenTypes.includes(type) || type === "Fairy") continue;
							if (poke.abilities && ["Overgrow", "Blaze", "Torrent"].includes(poke.abilities[0]) && ["Fire", "Water", "Grass"].includes(type)) continue;
							if (poke3.types[0] === "Normal" && poke3.types[1] && poke3.types[1] === "Flying" && type === "Normal") continue;
							chosenTypes.push(type);
						}
					}
				}
			}
			if (poke.otherFormes) {
				for (const form of poke.otherFormes) {
					const poke4 = this.dataCache.Pokedex[this.toID(form)];
					if (poke4.types) {
						for (const type of poke4.types) {
							if (chosenTypes.includes(type) || type === "Fairy") continue;
							if (poke.abilities && ["Overgrow", "Blaze", "Torrent"].includes(poke.abilities[0]) && ["Fire", "Water", "Grass"].includes(type)) continue;
							if (poke3.types[0] === "Normal" && poke3.types[1] && poke3.types[1] === "Flying" && type === "Normal") continue;
							chosenTypes.push(type);
						}
					}
				}
			}

			// generate 1 more random type to make absolutely sure there's at least 1 in the pool that isn't on another form already
			const validTypes3: string[] = [];
			for (const type in this.dataCache.TypeChart) {
				if (chosenTypes.includes(type)) continue;
				if (poke.abilities && ["Overgrow", "Blaze", "Torrent"].includes(poke.abilities[0]) && ["Fire", "Water", "Grass"].includes(type)) continue;
				if (type === "Fairy") continue;
				validTypes3.push(type);
			}
			if (validTypes3.length) {
				let random3 = Math.floor(Math.random() * validTypes3.length);
				chosenTypes.push(validTypes3[random3]);
			}

			// - score different type combinations; pick at random from the highest-scoring combinations
			// - thinking... iterate through all possible type1s, then iterate through all possible type2s, then push to a list of eligible combinations
			// - clear the list of eligible combinations every time a higher scorer is found

/*

				poke.learnsetCumulative = {
							Moves: [],
							learnset: [],
				};
				for (let i = 1; i < 102; i++) {
					poke.learnsetCumulative.learnset[i] = {
						movesLearned: [],
					}
				}
*/

			let chosenCombinations = {};
			let topScore = 0;
			let loopCount = 0;
			for (const type1 of chosenTypes) {
				for (const type2 of chosenTypes) {
					// automatically reject the base type
					if (type1 === poke.types[0] && ((poke.types[1] && type2 === poke.types[1]) || (!poke.types[1] && type2 === type1))) continue;
					if (type2 === poke.types[0] && ((poke.types[1] && type1 === poke.types[1]) || (!poke.types[1] && type2 === type1))) continue;

					// reject exact types already taken by other forms/variants
					if (poke.otherFormes) {
						let formContinue = false;
						for (const form of poke.otherFormes) {
							const poke4 = this.dataCache.Pokedex[this.toID(form)];
							if (poke4.types) {
								if (type1 === poke4.types[0] && ((poke4.types[1] && type2 === poke4.types[1]) || (!poke4.types[1] && type2 === type1))) formContinue = true;
								if (type2 === poke4.types[0] && ((poke4.types[1] && type1 === poke4.types[1]) || (!poke4.types[1] && type2 === type1))) formContinue = true;
							}
						}
						if (formContinue) continue;
					}

					if (poke.abilities && ["Overgrow", "Blaze", "Torrent"].includes(poke.abilities[0])) {
						if (!["Fire", "Water", "Grass"].includes(type1) && !["Fire", "Water", "Grass"].includes(type2)) continue; // force starters' primary types
						if (type2 === type1) continue; // force starters to be dual-types
					}

					// skip identical combinations for now
					let comboSkip = false;
					for (const combo in chosenCombinations) {
						if (chosenCombinations[combo].type1 === type2 && chosenCombinations[combo].type2 === type1) comboSkip = true;
					}
					if (comboSkip) continue;

					let score = 0;
					// defensive:
					// +1 for non-neutral defensive matchups
					// +2 for double-weaknesses or immunities
					// +3 if one type has an immunity and the other has a weakness

					// offensive:
					// +1 if one type is resisted and the other is SE
					// +3 if one type is resisted or worse and the other is neutral or worse, but one of the base types is SE

					// Ability checks

					// reset all existing combinations if a higher-scoring one comes along
					if (score > topScore) {
						loopCount = 0;
						topScore = score;
						chosenCombinations = {};
					}

					chosenCombinations[loopCount] = {
							type1: [],
							type2: [],
					};
					chosenCombinations[loopCount].type1 = type1;
					chosenCombinations[loopCount].type2 = type2;
					loopCount++;
				}
			}

			let randomType = Math.floor(Math.random() * loopCount);
			poke.chosenType = chosenCombinations[randomType];
			if (poke.types[0] === poke.chosenType.type2 || (poke.types[1] && poke.types[1] === poke.chosenType.type1)) {
				poke.chosenType.type1 = chosenCombinations[randomType].type2;
				poke.chosenType.type2 = chosenCombinations[randomType].type1;
			}

			// console.logging
			let samples: string[] = [poke.name + ` samples: `];
			if (chosenCombinations[0]) samples += chosenCombinations[0].type1 + ((chosenCombinations[0].type2 !== chosenCombinations[0].type1) ? `/` + chosenCombinations[0].type2 + `, ` : `, `);
			if (chosenCombinations[1]) samples += chosenCombinations[1].type1 + ((chosenCombinations[1].type2 !== chosenCombinations[1].type1) ? `/` + chosenCombinations[1].type2 + `, ` : `, `);
			if (chosenCombinations[2]) samples += chosenCombinations[2].type1 + ((chosenCombinations[2].type2 !== chosenCombinations[2].type1) ? `/` + chosenCombinations[2].type2 + `, ` : `, `);
			if (chosenCombinations[3]) samples += chosenCombinations[3].type1 + ((chosenCombinations[3].type2 !== chosenCombinations[3].type1) ? `/` + chosenCombinations[3].type2 + `, ` : `, `);
			if (chosenCombinations[4]) samples += chosenCombinations[4].type1 + ((chosenCombinations[4].type2 !== chosenCombinations[4].type1) ? `/` + chosenCombinations[4].type2 + `, ` : `, `);
			if (poke.chosenType) samples += `chosen: ` + poke.chosenType.type1 + ((poke.chosenType.type2 !== poke.chosenType.type1) ? `/` + poke.chosenType.type2 : ` `);
			console.log(samples);

			// RANDOM MOVES
			// todo:
			// - add universal moves to learnsets when randomizing (based on the new type)
			// - go through move substitutions by type, but keep the old move listed in the same row just in case (ex. "15 - Icy Wind -> Struggle Bug")
			// - possible: filter out moves that are already TMs if the player gets the TM earlier than the level-up move (save on space)
			// - possible: push one completely random (? within certain parameters?) extra move to the learnset

			// MODDED STATS
			// todo:
			// - push mixed offenses; take out of Def, SpD or Spe, usually
			// - a chance of a "randomizer stat spread moment" (crazy swing into or out of one stat; move points evenly into/from two others)
			// - Ability stat checks
			// - minor optimizations (HP-to-defense ratios, Speed)
			// - go back and cap stat differences (differences should be multiples of 10, no more than +/- 40 to a stat, no more than +/- 60 overall)

			// - then: translate stat differences to all pre-evolutions, but cut the differences in half first

			// - then: unless there are 3 stages already, also generate a crossgen version of the stat spread
			// - +10 to higher offense, then elevate higher offense to 100 if necessary
			// - clamp Speed to specific ranges based on movepool/Ability properties
			// - raise HP until bulk is 4/3 the original (but calculate as though +10 has already been given to each defense)
			// or until BST is too high to keep boosting... cap should be 550
			// - optional, if room: add the same amount to the highest unboosted stat between Atk/Def/SpA/SpD as to the higher offense
			// - optional, if room: add +10 to remaining unboosted stats

			if (this.dataCache.Learnsets[id] && this.dataCache.Learnsets[id].learnset) {
				printno++;
				poke.learnsetCumulative = {
							Moves: [],
							learnset: [],
				};
				poke.additionalTms = [];
				poke.backports = [];
				for (let i = 1; i < 102; i++) {
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
					if (hms.includes(moveid)) continue; // skip HMs

					let learned = false;
					let learnedLvUp = false;
					let learnedTm = false;
					let include = false;
					let levelLearned = 999;
					let prevoLevelLearned = 999;
					let prevo2LevelLearned = 999;
					let genVLearnedTmAlready = false;
					let guaranteeShowLv = false;
					let lv1 = false;
					let prevoLv1 = false;
					let prevo2lv1 = false;
					if (learnset[moveid]) { // if it learns the move
						learned = true;
						for (const source of learnset[moveid]) {
							// include level-up and Egg moves from all Generations...
							if (parseInt(source.charAt(0)) === 5 && (source.charAt(1) === 'T' || source.charAt(1) === 'M')) {
								genVLearnedTmAlready = true;
							}
							if (source.charAt(1) === 'L') {
								learnedLvUp = true;
								if (parseInt(source.charAt(0)) < 8 || future) if (parseInt(source.substr(2)) < parseInt(levelLearned)) {
									if (parseInt(source.substr(2)) < 2) {
										lv1 = true;
									} else {
										levelLearned = source.substr(2);
									}
								}
								// (but ignore levels for Gen VIII and on)
								include = true;
							}
							if (source.charAt(1) === 'E') include = true;
							// ... and then TM and tutor moves only if they were accessible TMs and tutors in Gen V, specifically
							if (genVTms.includes(moveid)) {
								include = true; // so I know if they're to be included at all
								if (!postgameTms.includes(moveid)) learnedTm = true; // so I know if they need to be in level-up anyway
							}
						}
						// evolution-only moves should be moved to the level of evolution
						if (learnedLvUp && learnset2) {
							let prevoLearned = false;
							if (learnset2[moveid]) {
								for (const source of learnset2[moveid]) if (source.charAt(1) === 'L' && parseInt(source.charAt(0)) < 8 || future) {
									if (poke.evoLevel && !(parseInt(source.substr(2)) > poke.evoLevel)) prevoLearned = true;
									// covers for edge cases like Pidgeot learning Hurricane at level 1 and Pidgeotto learning it well after it evolves
									// otherwise, Pidgeot gets it moved to level 1 *and* misses the later level, so we at least want it to be level 36
								}
							}
							if (prevoLearned === false && poke.evoLevel && poke.evoLevel > levelLearned) levelLearned = poke.evoLevel;
						}
					}
					if (learnset2 && learnset2[moveid]) { // if it learns the move
						learned = true;
						for (const source of learnset2[moveid]) {
							// include level-up and Egg moves from all Generations...
							if (source.charAt(1) === 'L') {
								learnedLvUp = true;
								if (parseInt(source.charAt(0)) < 8 || future) {
									guaranteeShowLv = true;
									if (parseInt(source.substr(2)) < parseInt(prevoLevelLearned)) {
										if (parseInt(source.substr(2)) < 2) {
											prevoLv1 = true;
										} else {
											prevoLevelLearned = source.substr(2);
										}
									}
								}
								// (but ignore levels for Gen VIII and on)
								include = true;
							}
							if (source.charAt(1) === 'E') include = true;
							// ... and then TM and tutor moves only if they were accessible TMs and tutors in Gen V, specifically
							if (genVTms.includes(moveid)) {
								include = true; // so I know if they're to be included at all
								if (!postgameTms.includes(moveid)) learnedTm = true; // so I know if they need to be in level-up anyway
							}
						}
						if (learnedLvUp && learnset3) {
							let prevoLearned = false;
							let evoLevel = null;
							let poke2 = this.dataCache.Pokedex[this.toID(poke.prevo)];
							if (poke2.evoLevel) evoLevel = poke2.evoLevel;
							if (learnset3[moveid]) {
								for (const source of learnset3[moveid]) if (source.charAt(1) === 'L' && parseInt(source.charAt(0)) < 8 || future) {
									if (evoLevel && !(parseInt(source.substr(2)) > evoLevel)) prevoLearned = true;
									// covers for edge cases like Pidgeot learning Hurricane at level 1 and Pidgey learning it well after it evolves
									// otherwise, Pidgeot gets it moved to level 1 *and* misses the later level, so we at least want it to be level 36
								}
							}
							if (prevoLearned === false && evoLevel && evoLevel > levelLearned) levelLearned = evoLevel;
							if (prevoLearned === false && evoLevel && evoLevel > prevoLevelLearned) prevoLevelLearned = evoLevel;
						}
					}
					if (learnset3 && learnset3[moveid]) { // if it learns the move
						learned = true;
						for (const source of learnset3[moveid]) {
							// include level-up and Egg moves from all Generations...
							if (source.charAt(1) === 'L') {
								learnedLvUp = true;
								if (parseInt(source.charAt(0)) < 8 || future) {
									guaranteeShowLv = true;
									if (parseInt(source.substr(2)) < parseInt(prevo2LevelLearned)) {
										if (parseInt(source.substr(2)) < 2) {
											prevo2lv1 = true;
										} else {
											prevo2LevelLearned = source.substr(2);
										}
									}
								}
								// (but ignore levels for Gen VIII and on)
								include = true;
							}
							if (source.charAt(1) === 'E') include = true;
							// ... and then TM and tutor moves only if they were accessible TMs and tutors in Gen V, specifically
							if (genVTms.includes(moveid)) {
								include = true; // so I know if they're to be included at all
								if (!postgameTms.includes(moveid)) learnedTm = true; // so I know if they need to be in level-up anyway
							}
						}
					}
					if (!learned || !include) continue;
					// (copy the above when ready)
					if (!learnedLvUp && ['grasspledge', 'firepledge', 'waterpledge', 'hydrocannon', 'frenzyplant', 'blastburn', 'dracometeor', 'gigaimpact'].includes(moveid)) continue;
					if (learned && !learnedLvUp && !learnedTm) levelLearned = 101;
					if (levelLearned == 999) levelLearned = 101;
					if (prevoLevelLearned == 999) {
						if (guaranteeShowLv && prevo2LevelLearned && prevo2LevelLearned !== 999) {
							prevoLevelLearned = prevo2LevelLearned;
						} else {
							prevoLevelLearned = `n/a`;
							if (prevo2lv1) {
								prevoLevelLearned = 1;
							} else if (prevoLv1) {
								prevoLevelLearned = 1;
								const poke2 = this.dataCache.Pokedex[this.toID(poke.prevo)];
								if (poke2 && poke2.evoLevel) prevoLevelLearned = poke2.evoLevel;
							}
						}
					} else {
						if (prevoLevelLearned > levelLearned && levelLearned > 1) prevoLevelLearned = levelLearned;
					}
					if (prevo2LevelLearned == 999) {
						prevo2LevelLearned = `n/a`;
						if (prevo2lv1) prevo2LevelLearned = 1;
					} else {
						if (prevo2LevelLearned > levelLearned && levelLearned > 1) prevo2LevelLearned = levelLearned;
						if (prevo2LevelLearned > prevoLevelLearned && prevoLevelLearned > 1) prevo2LevelLearned = prevoLevelLearned;
					}
					let moveName: string[] = [move.name];
					if (levelLearned == 101 && guaranteeShowLv) {
						levelLearned = prevoLevelLearned;
					}
					if (levelLearned == 101 && (lv1 || prevoLv1 || prevo2lv1)) {
						levelLearned = 1;
						if (lv1 && prevoLv1 && !prevo2lv1) {
							const poke2 = this.dataCache.Pokedex[this.toID(poke.prevo)];
							if (poke2 && poke2.evoLevel) levelLearned = poke2.evoLevel;
						}
						if (lv1 && !prevoLv1 && !prevo2lv1 && poke.evoLevel) levelLearned = poke.evoLevel;
					}
					if (genVTms.includes(moveid)) {
						if (!genVLearnedTmAlready) poke.additionalTms.push(move.tmid ? move.tmid : `x ` + move.name); // make sure to identify TMs that need to be added manually
						if (levelLearned === 101 && !postgameTms.includes(moveid)) continue; // skip level 0 moves if they're on the Gen V TM/tutor list
					}
					if (move.num && move.num > 559) moveName = moveName + `*`; // identify post-Gen V moves
					if (learnset3) moveName = prevo2LevelLearned + ` - ` + moveName; // add prevo2 levels
					if (learnset2) moveName = prevoLevelLearned + ` - ` + moveName; // add prevo levels
					if (levelLearned < 1 || levelLearned > 101) continue;
					if (!poke.learnsetCumulative.learnset[levelLearned]) {
						console.log(poke.name + `, ` + move.name + `, ` + levelLearned);
						continue;
					}
					if (levelLearned == 101) {
						// reset move name
						moveName = move.name;
						if (move.num && move.num > 559) {
							poke.backports.push(moveName);
						} else {
							poke.learnsetCumulative.learnset[levelLearned].movesLearned.push(move.name);
						}
					} else {
						poke.learnsetCumulative.learnset[levelLearned].movesLearned.push(moveName);
					}
				}

				poke.learnsetCumulative.learnset.sort();
				if (!poke || !poke.learnsetCumulative.learnset) return;
				// finalize sheetOutput now.........
				let sheetOutput: string[] = [
					`\n\n` + (poke.evoLevel ? (poke.name + ` // ` + poke.evoLevel) : poke.name) + `\n`
				];
				// TODO: other randomizer features (types, Abilities, stats)
				for (const level in poke.learnsetCumulative.learnset) {
					if (poke.learnsetCumulative.learnset[level].movesLearned.length) {
						poke.learnsetCumulative.learnset[level].movesLearned.sort();
						if (parseInt(level) > 99) {
							sheetOutput += `\n~ Additional moves\n`
							for (const moveid of poke.learnsetCumulative.learnset[level].movesLearned) sheetOutput += moveid + `, `;
							sheetOutput += `~`;
						} else {
							for (const moveid of poke.learnsetCumulative.learnset[level].movesLearned) {
								sheetOutput += `\n` + (parseInt(level) + 1) + ` - ` + moveid;
							}
						}
					}
				}
				if (poke.backports.length) {
					poke.backports.sort();
					// TODO: these should include (and be sorted by) TM numbers, ideally
					sheetOutput += `\n~ Possible backports\n`
					for (const moveid of poke.backports) sheetOutput += moveid + `, `;
					sheetOutput += `~`;
				}
				if (poke.additionalTms.length) {
					poke.additionalTms.sort();
					// TODO: these should include (and be sorted by) TM numbers, ideally
					sheetOutput += `\n~ Additional TMs and tutors\n`
					for (const moveid of poke.additionalTms) {
						if (moveid.charAt(0) === 'x') sheetOutput += moveid.substr(2) + `, `;
						else sheetOutput += moveid + `, `;
					}
					sheetOutput += `~`;
				}
				poke.sheetOutput = sheetOutput;
			}
		}
	},
};
