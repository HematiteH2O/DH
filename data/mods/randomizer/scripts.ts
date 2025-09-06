// TODO:
// - evolution lines, including pre-evolutions and crossgens
// - forms
// - additional details for export, like menu icons, stat deltas and any utility I want highlighted

const pushLevelUp = [
	'accelerock', 'acid', 'acidspray', 'acupressure', 'afteryou', 'aircutter', 'allyswitch', 'appleacid', 'aquajet', 'aquastep', 'astralbarrage', 'aurawheel', 'babydolleyes', 'batonpass', 'bellydrum', 'bitterblade', 'bittermalice',
	'bleakwindstorm', 'blizzard', 'boomburst', 'breakingswipe', 'brutalswing', 'bubble', 'bulkup', 'bulldoze', 'bulletpunch', 'burningjealousy', 'calmmind', 'captivate', 'chargebeam', 'charm', 'chillingwater', 'clangingscales',
	'clangoroussoul', 'coil', 'coreenforcer', 'cottonspore', 'counter', 'curse', 'darkvoid', 'dazzlinggleam', 'decorate', 'destinybond', 'diamondstorm', 'disable', 'disarmingvoice', 'discharge', 'dragondance', 'dragonenergy',
	'drainingkiss', 'drainpunch', 'dreameater', 'drumbeating', 'earthquake', 'eerieimpulse', 'electroweb', 'encore', 'endeavor', 'entrainment', 'eruption', 'esperwing', 'expandingforce', 'explosion', 'extremespeed', 'fakeout', 'faketears',
	'featherdance', 'feint', 'fierydance', 'fierywrath', 'firstimpression', 'flamecharge', 'flipturn', 'followme', 'foulplay', 'geomancy', 'gigadrain', 'glaciallance', 'glaciate', 'glare', 'grasswhistle', 'gravapple', 'gravity',
	'growl', 'growth', 'haze', 'healpulse', 'heatwave', 'helpinghand', 'hex', 'hornleech', 'howl', 'hurricane', 'hypervoice', 'hypnosis', 'iceshard', 'icywind', 'incinerate', 'inferno', 'jetpunch', 'knockoff', 'landswrath', 'lavaplume',
	'leechlife', 'leechseed', 'leer', 'lightscreen', 'lovelykiss', 'lowsweep', 'luminacrash', 'lunge', 'machpunch', 'makeitrain', 'matchagotcha', 'memento', 'metalburst', 'metalsound', 'mindblown', 'mirrorcoat', 'moonlight',
	'morningsun', 'mortalspin', 'mudshot', 'mudsport', 'muddywater', 'mysticalfire', 'nastyplot', 'noretreat', 'nobleroar', 'nuzzle', 'oblivionwing', 'originpulse', 'overdrive', 'paraboliccharge', 'partingshot', 'perishsong',
	'petalblizzard', 'poisongas', 'pounce', 'powdersnow', 'poweruppunch', 'precipiceblades', 'psychicnoise', 'quickattack', 'quickguard', 'quiverdance', 'ragepowder', 'razorleaf', 'razorwind', 'reflect', 'relicsong', 'rockslide', 'rocktomb',
	'sacredfire', 'sandsearstorm', 'scaryface', 'screech', 'searingshot', 'selfdestruct', 'shadowsneak', 'shellsmash', 'shelltrap', 'shiftgear', 'shoreup', 'signalbeam', 'silktrap', 'simplebeam', 'sing', 'skillswap', 'skittersmack',
	'skydrop', 'sleeppowder', 'sludgewave', 'snarl', 'soak', 'solarbeam', 'solarblade', 'sparklingaria', 'spicyextract', 'spikes', 'spiritbreak', 'spore', 'springtidestorm', 'stealthrock', 'stickyweb', 'stringshot', 'strugglebug', 'stunspore',
	'suckerpunch', 'superfang', 'surf', 'swift', 'swordsdance', 'synchronoise', 'synthesis', 'syrupbomb', 'tailwhip', 'tailwind', 'tarshot', 'taunt', 'tearfullook', 'thousandarrows', 'thousandwaves', 'thunder', 'thunderwave',
	'thunderclap', 'thunderouskick', 'tickle', 'tidyup', 'torchsong', 'torment', 'toxicspikes', 'toxicthread', 'trailblaze', 'trickroom', 'tropkick', 'twister', 'uturn', 'vacuumwave', 'victorydance', 'voltswitch', 'watershuriken',
	'watersport', 'waterspout', 'weatherball', 'wideguard', 'wildboltstorm', 'willowisp', 'worryseed', 'yawn', 'zapcannon'
];
const pushLevelUpPrankster = ['assist', 'copycat', 'mefirst', 'metronome', 'mirrormove', 'naturepower'];

const universal = ['doubleteam', 'facade', 'frustration', 'gigaimpact', 'hiddenpower', 'hyperbeam', 'protect', 'raindance', 'rest', 'return', 'round', 'sleeptalk', 'snore', 'substitute', 'sunnyday', 'swagger', 'toxic'];

const universalFire = ['fireblast', 'flamecharge', 'flamethrower', 'heatwave', 'overheat', 'reflect', 'rocksmash', 'solarbeam', 'willowisp'];
const universalWater = ['blizzard', 'dive', 'hail', 'icebeam', 'icywind', 'scald', 'surf', 'chillingwater'];
const universalElectric = ['chargebeam', 'flash', 'lightscreen', 'reflect', 'signalbeam', 'thunder', 'thunderwave', 'thunderbolt', 'voltswitch', 'wildcharge', 'discharge', 'eerieimpulse'];
const universalGrass = ['energyball', 'flash', 'gigadrain', 'grassknot', 'reflect', 'seedbomb', 'sludgebomb', 'solarbeam', 'synthesis', 'worryseed', 'bulletseed', 'poisonpowder', 'sleeppowder', 'stunspore', 'trailblaze'];
const universalIce = ['blizzard', 'hail', 'icebeam', 'icywind', 'reflect', 'signalbeam'];
const universalFighting = ['brickbreak', 'bulkup', 'earthquake', 'focusblast', 'helpinghand', 'poisonjab', 'retaliate', 'rockslide', 'rocksmash', 'rocktomb', 'stoneedge', 'strength', 'workup', 'coaching'];
const universalPoison = ['gunkshot', 'sludgebomb', 'toxic', 'venoshock', 'acidspray'];
const universalGround = ['bulldoze', 'dig', 'earthpower', 'earthquake', 'rockslide', 'rocksmash', 'rocktomb', 'sandstorm', 'stealthrock', 'stoneedge', 'strength'];
const universalFlying = ['aerialace', 'fly', 'reflect', 'roost', 'tailwind'];
const universalPsychic = ['calmmind', 'dreameater', 'flash', 'helpinghand', 'lightscreen', 'magiccoat', 'psychup', 'psychic', 'psyshock', 'reflect', 'shadowball', 'signalbeam', 'skillswap', 'telekinesis', 'trick', 'trickroom', 'zenheadbutt', 'teleport'];
const universalBug = ['bugbite', 'roost', 'strugglebug', 'uturn', 'xscissor', 'pounce'];
const universalRock = ['brickbreak', 'bulldoze', 'earthpower', 'earthquake', 'irondefense', 'rockpolish', 'rockslide', 'rocksmash', 'rocktomb', 'sandstorm', 'smackdown', 'stealthrock', 'stoneedge'];
const universalGhost = ['shadowball', 'spite', 'willowisp', 'hex'];
const universalDragon = ['dracometeor', 'dragonclaw', 'dragonpulse', 'dragontail', 'honeclaws', 'outrage', 'rocksmash', 'strength'];
const universalDark = ['darkpulse', 'payback', 'retaliate', 'snarl', 'spite', 'taunt', 'thief', 'torment'];
const universalSteel = ['flashcannon', 'irondefense', 'ironhead', 'rocksmash', 'steelbeam'];
const universalFairy = ['charm', 'dazzlinggleam', 'drainingkiss', 'fling', 'lightscreen', 'reflect', 'shadowball'];
const universalNormal = ['helpinghand', 'retaliate', 'workup'];

const universalMonsterGroup = ['bulldoze', 'earthquake', 'irontail', 'outrage', 'rocksmash', 'strength'];
const universalHumanlikeGroup = ['brickbreak', 'firepunch', 'fling', 'focusblast', 'helpinghand', 'icepunch', 'taunt', 'thunderpunch', 'focuspunch', 'poweruppunch'];
const universalWater1Group = ['blizzard', 'dive', 'hail', 'icebeam', 'icywind', 'scald', 'surf', 'waterfall', 'chillingwater'];
const universalWater3Group = ['blizzard', 'helpinghand', 'icebeam', 'reflect', 'rockslide', 'scald', 'surf', 'chillingwater'];
const universalBugGroup = ['bugbite', 'roost', 'strugglebug', 'uturn', 'xscissor', 'pounce'];
const universalFlyingGroup = ['aerialace', 'fly', 'heatwave', 'pluck', 'roost', 'skyattack', 'tailwind', 'uturn', 'aircutter', 'hurricane', 'quickattack'];
const universalAmorphousGroup = ['darkpulse', 'flash', 'painsplit', 'shadowball', 'sludgebomb', 'taunt', 'hex'];
const universalFieldGroup = ['dig', 'irontail'];
const universalWater2Group = ['blizzard', 'bounce', 'dive', 'hail', 'icebeam', 'icywind', 'scald', 'surf', 'waterfall', 'chillingwater'];
const universalFairyGroup = ['brickbreak', 'calmmind', 'dig', 'flash', 'helpinghand', 'irontail', 'lightscreen', 'psychic', 'reflect', 'thunderwave', 'growl', 'teleport'];
const universalGrassGroup = ['bulletseed', 'energyball', 'flash', 'gigadrain', 'grassknot', 'reflect', 'seedbomb', 'sludgebomb', 'solarbeam', 'swordsdance', 'synthesis', 'worryseed', 'growth', 'leechseed', 'poisonpowder', 'sleeppowder', 'stunspore', 'trailblaze'];
const universalDragonGroup = ['bulldoze', 'dragonpulse', 'dragontail', 'earthquake', 'irontail', 'outrage', 'rocksmash', 'strength', 'breakingswipe', 'leer'];

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

const movesAfterGenV = [
	'phantomforce', 'nobleroar', 'paraboliccharge', 'petalblizzard', 'boomburst', 'playnice', 'confide', 'diamondstorm', 'steameruption', 'hyperspacehole',
	'watershuriken', 'aromaticmist', 'babydolleyes', 'nuzzle', 'infestation', 'poweruppunch',
	'firstimpression', 'darkestlariat', 'icehammer', 'highhorsepower', 'solarblade', 'lunge', 'firelash',
	'powertrip', 'smartstrike', 'tropkick', 'clangingscales', 'dragonhammer', 'brutalswing', 'psychicfangs', 'shadowbone', 'accelerock', 'liquidation',
	'tearfullook', 'zingzap', 'mindblown',
	'snipeshot', 'decorate', 'drumbeating', 'snaptrap', 'pyroball', 'breakingswipe', 'overdrive', 'appleacid', 'lifedew', 'falsesurrender',
	'meteorassault', 'skittersmack', 'coaching', 'flipturn', 'dualwingbeat', 'scorchingsands', 'mysticalpower', 'ragingfury', 'wavecrash', 'chloroblast',
	'mountaingale', 'victorydance', 'headlongrush', 'barbbarrage', 'esperwing', 'bittermalice', 'shelter', 'infernalparade', 'bleakwindstorm',
	'wildboltstorm', 'sandsearstorm',
	'axekick', 'luminacrash', 'jetpunch', 'spicyextract', 'spinout', 'populationbomb', 'tripledive', 'kowtowcleave', 'flowertrick', 'torchsong',
	'aquastep', 'makeitrain', 'pounce', 'trailblaze', 'chillingwater', 'hyperdrill', 'twinbeam', 'armorcannon', 'bitterblade', 'comeuppance', 'aquacutter',
	'thunderclap', 'mightycleave', 'tachyoncutter', 'hardpress', 'supercellslam', 'malignantchain',
	'eerieimpulse', 'steelbeam', 'toxicthread', 'psychicnoise', 'triplearrows', 'mysticalfire', 'spotlight', 'psyshieldbash', 'tidyup', 'mortalspin',
	'precipiceblades', 'originpulse', 'oblivionwing', 'landswrath', 'hyperspacefury', 'prismaticlaser', 'doubleironbash', 'freezingglare', 'thunderouskick',
	'fierywrath', 'thundercage', 'dragonenergy', 'eternabeam', 'wickedblow', 'surgingstrikes', 'ruination',
	'leafage', 'branchpoke', // I commented these out because they weren't worth trading anything for, but turns out there's no move limit!

	// hey
	// wanna see something crazy?
	'fairywind', 'strangesteam', 'playrough', 'moonblast', 'fleurcannon', 'lightofruin', 'disarmingvoice', 'drainingkiss', 'spiritbreak', 'dazzlinggleam',
	'springtidestorm', 'naturesmadness',
];
const moveGroups = {
	// first should be clones/meaningfully related groups
	// then should be rough BP ranges
	1: ['defendorder', 'stockpile', 'cosmicpower'],
	2: ['acidarmor', 'barrier', 'amnesia', 'irondefense', 'shelter'],
	3: ['harden', 'defensecurl', 'withdraw', 'irondefense'],
	4: ['nastyplot', 'swordsdance', 'bulkup', 'calmmind'],
	5: ['agility', 'rockpolish', 'autotomize'],
	6: ['dragondance', 'tidyup', 'quiverdance', 'victorydance', 'coil', 'shiftgear'],
	7: ['cottonguard', 'coil'],
	8: ['healorder', 'roost', 'recover', 'softboiled', 'milkdrink', 'slackoff'],
	9: ['moonlight', 'synthesis', 'morningsun', 'shoreup'],
	10: ['tailwhip', 'leer', 'growl', 'sweetscent'],
	11: ['stringshot', 'cottonspore'],
	12: ['eerieimpulse', 'charm', 'featherdance'],
	13: ['screech', 'faketears', 'metalsound'],
	14: ['sandattack', 'smokescreen', 'flash', 'kinesis'],
	15: ['comeuppance', 'counter', 'metalburst', 'mirrorcoat'],
	16: ['lowkick', 'grassknot'],
	17: ['heatcrash', 'heavyslam'],
	18: ['lowkick', 'grassknot', 'heatcrash', 'heavyslam'],
	19: ['seismictoss', 'dragonrage', 'nightshade', 'sonicboom', 'psywave'],
	20: ['reversal', 'flail'],
	21: ['hardpress', 'wringout'],
	22: ['hardpress', 'wringout', 'crushgrip'],
	23: ['gyroball', 'electroball'],
	24: ['finalgambit', 'memento', 'healingwish', 'mistyexplosion', 'selfdestruct'],
	25: ['finalgambit', 'memento', 'healingwish', 'mistyexplosion', 'selfdestruct', 'explosion'],
	26: ['ragepowder', 'followme'],
	27: ['stickyweb', 'spikes', 'stealthrock', 'toxicspikes'],
	28: ['silktrap', 'obstruct', 'kingsshield', 'burningbulwark', 'banefulbunker', 'spikyshield', 'craftyshield', 'matblock', 'quickguard', 'wideguard'],
	29: ['spiderweb', 'fairylock', 'block', 'meanlook', 'octolock'],
	30: ['flatter', 'swagger', 'sweetkiss', 'confuseray', 'supersonic'],
	31: ['flatter', 'swagger', 'sweetkiss', 'confuseray', 'supersonic', 'teeterdance'],
	32: ['switcheroo', 'trick'],
	33: ['electricterrain', 'mistyterrain', 'sunnyday', 'grassyterrain', 'hail', 'snowscape', 'psychicterrain', 'sandstorm', 'raindance'],
	34: ['magneticflux', 'flowershield', 'rototiller', 'gearup', 'aromaticmist', 'decorate', 'acupressure', 'coaching', 'howl'],
	35: ['thunderwave', 'stunspore', 'glare'],
	36: ['grasswhistle', 'sing', 'hypnosis'],
	37: ['thunderwave', 'willowisp', 'hypnosis', 'toxic'],
	38: ['floralhealing', 'healpulse', 'lifedew'],
	39: ['detect', 'protect'],
	40: ['mirrormove', 'copycat'],
	41: ['trickortreat', 'forestscurse', 'magicpowder', 'soak'],
	42: ['aromatherapy', 'healbell', 'refresh', 'purify'],
	43: ['worryseed', 'simplebeam', 'entrainment', 'gastroacid'],
	44: ['doodle', 'skillswap', 'roleplay'],
	45: ['worryseed', 'simplebeam', 'entrainment', 'gastroacid', 'doodle', 'skillswap', 'roleplay'],
	46: ['powder', 'mudsport', 'watersport'],
	47: ['mist', 'safeguard', 'luckychant'],
	48: ['whirlwind', 'roar'],
	49: ['dragontail', 'circlethrow'],
	50: ['whirlwind', 'roar', 'dragontail', 'circlethrow'],
	51: ['mindreader', 'foresight', 'odorsleuth', 'miracleeye'],
	52: ['ingrain', 'aquaring'],
	53: ['triplekick', 'tripleaxel'],
	54: ['armthrust', 'doubleslap', 'furyattack', 'barrage', 'furyswipes', 'cometpunch', 'spikecannon'],
	55: ['pinmissile', 'twineedle', 'bulletseed', 'bonerush', 'iciclespear', 'tailslap', 'rockblast', 'scaleshot'],
	56: ['armthrust', 'doubleslap', 'furyattack', 'barrage', 'furyswipes', 'cometpunch', 'spikecannon', 'pinmissile', 'twineedle', 'bulletseed', 'bonerush', 'iciclespear', 'tailslap', 'rockblast', 'scaleshot'],
	57: ['bind', 'wrap', 'infestation', 'clamp', 'firespin', 'whirlpool', 'snaptrap', 'sandtomb'],
	58: ['disarmingvoice', 'powdersnow', 'acid', 'bubble'],
	59: ['powertrip', 'storedpower'],
	60: ['doublehit', 'dualchop', 'dualwingbeat', 'twinbeam'],
	61: ['tripledive', 'dragondarts', 'bonemerang', 'geargrind'],
	62: ['iceball', 'rollout'],
	63: ['furycutter', 'echoedvoice'],
	64: ['iceball', 'rollout', 'furycutter', 'echoedvoice'],
	65: ['machpunch', 'shadowsneak', 'iceshard', 'quickattack', 'accelerock', 'bulletpunch', 'aquajet'],
	66: ['watershuriken', 'vacuumwave'],
	67: ['machpunch', 'shadowsneak', 'iceshard', 'quickattack', 'accelerock', 'bulletpunch', 'aquajet', 'watershuriken', 'vacuumwave'],
	68: ['poweruppunch', 'chargebeam'],
	69: ['flamecharge', 'trailblaze'],
	70: ['poweruppunch', 'chargebeam', 'flamecharge', 'trailblaze'],
	71: ['poisonfang', 'thunderfang', 'firefang', 'icefang'],
	72: ['pounce', 'mudshot', 'rocktomb', 'lowsweep'],
	73: ['mudslap', 'acidspray', 'chillingwater', 'pounce', 'mudshot', 'rocktomb', 'lowsweep', 'knockoff'],
	74: ['strugglebug', 'snarl', 'breakingswipe'],
	75: ['electroweb', 'icywind', 'bulldoze'],
	76: ['strugglebug', 'snarl', 'breakingswipe', 'electroweb', 'icywind', 'bulldoze'],
	77: ['mudslap', 'acidspray', 'chillingwater', 'pounce', 'mudshot', 'rocktomb', 'lowsweep', 'knockoff', 'strugglebug', 'snarl', 'breakingswipe', 'electroweb', 'icywind', 'bulldoze'],
	78: ['razorleaf', 'aircutter'],
	79: ['incinerate', 'razorleaf', 'aircutter', 'brutalswing'],
	80: ['bugbite', 'pluck', 'incinerate'],
	81: ['thief', 'covet'],
	82: ['feintattack', 'aerialace', 'shadowpunch', 'magnetbomb', 'shockwave', 'magicalleaf', 'swift'],
	83: ['feintattack', 'aerialace', 'shadowpunch', 'magnetbomb', 'shockwave', 'magicalleaf', 'swift', 'smartstrike'],
	84: ['revenge', 'avalanche'],
	85: ['payback', 'assurance', 'revenge', 'avalanche'],
	86: ['stormthrow', 'frostbreath', 'flowertrick'],
	87: ['forcepalm', 'flamewheel', 'dragonbreath', 'waterpulse', 'spark', 'sludge'],
	88: ['needlearm', 'heartstamp', 'steamroller', 'boneclub', 'stomp'],
	89: ['swift', 'incinerate', 'razorleaf', 'aircutter', 'strugglebug', 'snarl', 'breakingswipe', 'electroweb', 'icywind', 'bulldoze', 'brutalswing'],
	90: ['barbbarrage', 'infernalparade'],
	91: ['partingshot', 'batonpass', 'flipturn', 'uturn', 'voltswitch', 'teleport'],
	92: ['silverwind', 'ominouswind', 'ancientpower'],
	93: ['hex', 'venoshock', 'brine'],
	94: ['tropkick', 'bittermalice', 'lunge', 'skittersmack', 'spiritbreak', 'mysticalfire'],
	95: ['firelash', 'gravapple', 'appleacid', 'luminacrash'],
	96: ['suckerpunch', 'thunderclap'],
	97: ['machpunch', 'shadowsneak', 'iceshard', 'quickattack', 'accelerock', 'bulletpunch', 'aquajet', 'watershuriken', 'vacuumwave', 'jetpunch', 'suckerpunch'],
	98: ['nightslash', 'shadowclaw', 'slash', 'crosspoison', 'psychocut', 'aquacutter'],
	99: ['wakeupslap', 'smellingsalts'],
	100: ['crushclaw', 'razorshell'],
	101: ['rockslide', 'overdrive', 'dazzlinggleam'],
	102: ['brickbreak', 'psychicfangs'],
	103: ['mysticalpower', 'fierydance', 'torchsong'],
	104: ['aquastep', 'esperwing'],
	105: ['psyshieldbash', 'aquastep', 'esperwing', 'fierydance', 'torchsong', 'mysticalpower'],
	106: ['scorchingsands', 'scald'],
	107: ['discharge', 'lavaplume'],
	108: ['scorchingsands', 'scald', 'discharge', 'lavaplume'],
	109: ['thunderpunch', 'firepunch', 'icepunch'],
	110: ['drainingkiss', 'drainpunch', 'hornleech', 'gigadrain', 'leechlife', 'bitterblade'],
	111: ['triattack', 'poisonjab'],
	112: ['crunch', 'shadowball', 'flashcannon'],
	113: ['zingzap', 'iciclecrash', 'hyperfang', 'zenheadbutt', 'ironhead', 'waterfall', 'darkpulse', 'extrasensory'],
	114: ['bodypress', 'psyshock', 'foulplay'],
	115: ['dig', 'dive', 'bounce', 'fly', 'phantomforce'],
	116: ['spiritshackle', 'anchorshot'],
	117: ['blazekick', 'snipeshot', 'attackorder', 'leafblade'],
	118: ['shadowbone', 'shadowball', 'liquidation', 'nightdaze', 'playrough', 'meteormash', 'bugbuzz', 'energyball', 'earthpower', 'moonblast', 'psychic'],
	119: ['bodyslam', 'rockclimb', 'thunderbolt', 'strangesteam', 'flamethrower', 'icebeam', 'sludgebomb'],
	120: ['submission', 'wildcharge', 'takedown'],
	121: ['darkestlariat', 'sacredsword'],
	122: ['petalblizzard', 'hypervoice', 'muddywater', 'surf', 'heatwave', 'sludgewave', 'earthquake'],
	123: ['dynamicpunch', 'inferno', 'zapcannon'],
	124: ['supercellslam', 'jumpkick'],
	125: ['hammerarm', 'icehammer', 'spinout'],
	126: ['crosschop', 'stoneedge', 'crabhammer'],
	127: ['dragonrush', 'mountaingale'],
	128: ['irontail', 'focusblast'],
	129: ['thunder', 'hurricane', 'solarbeam', 'solarblade', 'blizzard'],
	130: ['thunder', 'fireblast', 'hurricane', 'blizzard', 'gunkshot'],
	131: ['closecombat', 'headlongrush', 'armorcannon'],
	132: ['closecombat', 'headlongrush', 'armorcannon', 'glaiverush', 'superpower'],
	133: ['outrage', 'ragingfury', 'thrash', 'petaldance'],
	134: ['flareblitz', 'bravebird', 'woodhammer', 'doubleedge', 'headcharge', 'wavecrash'],
	135: ['skyattack', 'solarbeam', 'solarblade', 'skullbash', 'meteorbeam', 'electroshot'],
	136: ['dracometeor', 'overheat', 'leafstorm'],
	137: ['steelbeam', 'mindblown', 'chloroblast'],
	138: ['meteorassault', 'gigaimpact', 'rockwrecker', 'hyperbeam'],
	139: ['eruption', 'waterspout'],
	140: ['fissure', 'guillotine', 'horndrill', 'sheercold'],
		// last resort BP groupings]
	141: ['poisonsting', 'lick', 'astonish', 'smog', 'peck', 'leafage', 'branchpoke', 'rocksmash', 'pound', 'scratch', 'twister', 'thundershock', 'fairywind', 'ember', 'gust', 'watergun', 'vinewhip', 'cut', 'tackle'],
	142: ['karatechop', 'poisontail', 'rockthrow', 'metalclaw', 'confusion'],
	143: ['poisonsting', 'lick', 'astonish', 'smog', 'peck', 'leafage', 'branchpoke', 'rocksmash', 'pound', 'scratch', 'twister', 'thundershock', 'fairywind', 'ember', 'gust', 'watergun', 'vinewhip', 'cut', 'tackle', 'karatechop', 'poisontail', 'rockthrow', 'metalclaw', 'confusion', 'disarmingvoice', 'powdersnow', 'acid', 'bubble'],
	144: ['poisonsting', 'lick', 'astonish', 'smog', 'peck', 'leafage', 'branchpoke', 'rocksmash', 'pound', 'scratch', 'twister', 'thundershock', 'fairywind', 'ember', 'gust', 'watergun', 'vinewhip', 'cut', 'tackle', 'karatechop', 'poisontail', 'rockthrow', 'metalclaw', 'confusion', 'disarmingvoice', 'powdersnow', 'acid', 'bubble', 'bite'],
	145: ['leaftornado', 'mudbomb', 'aurorabeam', 'psybeam', 'mirrorshot', 'octazooka', 'bubblebeam', 'forcepalm', 'flamewheel', 'dragonbreath', 'waterpulse', 'spark', 'sludge', 'needlearm', 'heartstamp', 'steamroller', 'boneclub', 'stomp', 'leaftornado', 'mudbomb', 'aurorabeam', 'psybeam', 'mirrorshot', 'octazooka', 'bubblebeam', 'wingattack', 'hornattack', 'feintattack', 'aerialace', 'shadowpunch', 'magnetbomb', 'shockwave', 'magicalleaf'],
	146: ['leaftornado', 'mudbomb', 'aurorabeam', 'psybeam', 'mirrorshot', 'octazooka', 'bubblebeam', 'forcepalm', 'flamewheel', 'dragonbreath', 'waterpulse', 'spark', 'sludge', 'needlearm', 'heartstamp', 'steamroller', 'boneclub', 'stomp', 'leaftornado', 'mudbomb', 'aurorabeam', 'psybeam', 'mirrorshot', 'octazooka', 'bubblebeam', 'wingattack', 'hornattack', 'feintattack', 'aerialace', 'shadowpunch', 'magnetbomb', 'shockwave', 'magicalleaf', 'swift', 'incinerate', 'razorleaf', 'aircutter', 'strugglebug', 'snarl', 'breakingswipe', 'electroweb', 'icywind', 'bulldoze', 'brutalswing', 'acidspray', 'chillingwater', 'pounce', 'mudshot', 'rocktomb', 'lowsweep', 'knockoff', 'silverwind', 'ominouswind', 'ancientpower'],
	147: ['headbutt', 'dizzypunch', 'secretpower', 'chipaway', 'steelwing', 'signalbeam', 'airslash', 'brickbreak', 'nightslash', 'shadowclaw', 'slash', 'crosspoison', 'psychocut', 'aquacutter', 'wakeupslap', 'smellingsalts', 'crushclaw', 'razorshell', 'thunderpunch', 'firepunch', 'icepunch', 'temperflare', 'stompingtantrum', 'psychicnoise'],
	148: ['triattack', 'poisonjab', 'crunch', 'shadowball', 'flashcannon', 'zingzap', 'iciclecrash', 'hyperfang', 'zenheadbutt', 'ironhead', 'waterfall', 'darkpulse', 'extrasensory', 'xscissor', 'dragonclaw', 'drillpeck', 'seedbomb', 'slam', 'megapunch', 'strength', 'alluringvoice', 'aurasphere', 'powergem', 'falsesurrender', 'throatchop'],
	149: ['triattack', 'poisonjab', 'crunch', 'shadowball', 'flashcannon', 'zingzap', 'iciclecrash', 'hyperfang', 'zenheadbutt', 'ironhead', 'waterfall', 'darkpulse', 'extrasensory', 'xscissor', 'dragonclaw', 'drillpeck', 'seedbomb', 'slam', 'megapunch', 'strength', 'alluringvoice', 'aurasphere', 'powergem', 'falsesurrender', 'kowtowcleave', 'overdrive', 'dazzlinggleam', 'scorchingsands', 'scald', 'bodypress', 'psyshock', 'dig', 'dive', 'spiritshackle', 'anchorshot', 'snipeshot', 'submission'],
	150: ['skyuppercut', 'psychicfangs', 'dragonpulse', 'blazekick', 'shadowbone', 'shadowball', 'liquidation', 'nightdaze', 'bodyslam', 'darkestlariat'],
	151: ['dragonhammer', 'aquatail', 'attackorder', 'leafblade', 'playrough', 'meteormash', 'bugbuzz', 'energyball', 'earthpower', 'rockclimb', 'thunderbolt', 'strangesteam', 'flamethrower', 'icebeam', 'sludgebomb', 'psychic', 'wildcharge', 'takedown', 'sacredsword', 'highhorsepower', 'moonblast'],
	152: ['skyuppercut', 'psychicfangs', 'dragonpulse', 'blazekick', 'shadowbone', 'shadowball', 'liquidation', 'nightdaze', 'bodyslam', 'darkestlariat', 'dragonhammer', 'aquatail', 'attackorder', 'leafblade', 'playrough', 'meteormash', 'bugbuzz', 'energyball', 'earthpower', 'rockclimb', 'thunderbolt', 'strangesteam', 'flamethrower', 'icebeam', 'sludgebomb', 'psychic', 'wildcharge', 'takedown', 'sacredsword', 'highhorsepower', 'moonblast', 'petalblizzard', 'hypervoice', 'muddywater', 'surf', 'heatwave', 'sludgewave', 'earthquake'],
	153: ['dynamicpunch', 'inferno', 'zapcannon', 'supercellslam', 'jumpkick', 'hammerarm', 'icehammer', 'spinout', 'crosschop', 'stoneedge', 'crabhammer', 'dragonrush', 'mountaingale', 'irontail', 'focusblast', 'thunder', 'fireblast', 'hurricane', 'blizzard', 'gunkshot', 'hydropump', 'megahorn', 'powerwhip', 'megakick'],
	154: ['dynamicpunch', 'inferno', 'zapcannon', 'supercellslam', 'jumpkick', 'hammerarm', 'icehammer', 'spinout', 'crosschop', 'stoneedge', 'crabhammer', 'dragonrush', 'mountaingale', 'irontail', 'focusblast', 'thunder', 'fireblast', 'hurricane', 'blizzard', 'gunkshot', 'hydropump', 'megahorn', 'powerwhip', 'megakick', 'eggbomb', 'pyroball'],
	155: ['closecombat', 'headlongrush', 'armorcannon', 'glaiverush', 'superpower', 'outrage', 'ragingfury', 'thrash', 'petaldance', 'flareblitz', 'bravebird', 'woodhammer', 'doubleedge', 'headcharge', 'wavecrash', 'doubleshock', 'burnup', 'skyattack', 'solarbeam', 'solarblade', 'skullbash', 'meteorbeam', 'electroshot'],
	156: ['dracometeor', 'overheat', 'leafstorm', 'steelbeam', 'mindblown', 'chloroblast', 'meteorassault', 'gigaimpact', 'rockwrecker', 'hyperbeam'],
};

export const Scripts: ModdedBattleScriptsData = {
	init() {
		const abilityDex = this.dataCache.Abilities;
		const hms = [ // excludes Dig and Flash because those do require manual input
			'cut', 'surf', 'fly', 'strength', 'waterfall', 'dive',
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

		const randAbilities = [
			'stench', 'drizzle', 'speedboost', 'battlearmor', 'sturdy', 'damp', 'limber', 'sandveil', 'static', 'voltabsorb', 'waterabsorb', 'cloudnine', 'compoundeyes', 'insomnia', 'colorchange', 'immunity', 'flashfire',
			'shielddust', 'owntempo', 'suctioncups', 'intimidate', 'shadowtag', 'roughskin', 'levitate', 'effectspore', 'synchronize', 'clearbody', 'naturalcure', 'lightningrod', 'serenegrace', 'swiftswim', 'chlorophyll',
			'trace', 'hugepower', 'poisonpoint', 'innerfocus', 'magmaarmor', 'waterveil', 'magnetpull', 'soundproof', 'raindish', 'sandstream', 'pressure', 'thickfat', 'earlybird', 'flamebody', 'runaway', 'keeneye',
			'hypercutter', 'pickup', 'truant', 'hustle', 'cutecharm', 'plus', 'minus', 'stickyhold', 'shedskin', 'guts', 'marvelscale', 'liquidooze', 'overgrow', 'blaze', 'torrent', 'swarm', 'rockhead', 'drought',
			'arenatrap', 'vitalspirit', 'whitesmoke', 'purepower', 'shellarmor', 'tangledfeet', 'motordrive', 'rivalry', 'steadfast', 'snowcloak', 'gluttony', 'angerpoint', 'unburden', 'heatproof', 'simple', 'dryskin',
			'download', 'ironfist', 'poisonheal', 'adaptability', 'skilllink', 'hydration', 'solarpower', 'quickfeet', 'normalize', 'sniper', 'magicguard', 'noguard', 'stall', 'technician', 'leafguard', 'klutz', 'moldbreaker',
			'superluck', 'aftermath', 'anticipation', 'forewarn', 'unaware', 'tintedlens', 'filter', 'slowstart', 'scrappy', 'stormdrain', 'icebody', 'solidrock', 'snowwarning', 'honeygather', 'frisk', 'reckless',
			'baddreams', 'pickpocket', 'sheerforce', 'contrary', 'unnerve', 'defiant', 'defeatist', 'cursedbody', 'healer', 'friendguard', 'weakarmor', 'heavymetal', 'lightmetal', 'multiscale', 'toxicboost', 'flareboost',
			'harvest', 'telepathy', 'moody', 'overcoat', 'poisontouch', 'regenerator', 'bigpecks', 'sandrush', 'wonderskin', 'analytic', 'illusion', 'infiltrator', 'mummy', 'moxie', 'justified', 'rattled', 'magicbounce',
			'sapsipper', 'prankster', 'sandforce', 'ironbarbs', 'victorystar',
		];
		const randAbilitiesGenderless = [
			'stench', 'drizzle', 'speedboost', 'battlearmor', 'sturdy', 'damp', 'limber', 'sandveil', 'static', 'voltabsorb', 'waterabsorb', 'cloudnine', 'compoundeyes', 'insomnia', 'colorchange', 'immunity', 'flashfire',
			'shielddust', 'owntempo', 'suctioncups', 'intimidate', 'shadowtag', 'roughskin', 'levitate', 'effectspore', 'synchronize', 'clearbody', 'naturalcure', 'lightningrod', 'serenegrace', 'swiftswim', 'chlorophyll',
			'trace', 'hugepower', 'poisonpoint', 'innerfocus', 'magmaarmor', 'waterveil', 'magnetpull', 'soundproof', 'raindish', 'sandstream', 'pressure', 'thickfat', 'earlybird', 'flamebody', 'runaway', 'keeneye',
			'hypercutter', 'pickup', 'truant', 'hustle', 'plus', 'minus', 'stickyhold', 'shedskin', 'guts', 'marvelscale', 'liquidooze', 'overgrow', 'blaze', 'torrent', 'swarm', 'rockhead', 'drought',
			'arenatrap', 'vitalspirit', 'whitesmoke', 'purepower', 'shellarmor', 'tangledfeet', 'motordrive', 'steadfast', 'snowcloak', 'gluttony', 'angerpoint', 'unburden', 'heatproof', 'simple', 'dryskin',
			'download', 'ironfist', 'poisonheal', 'adaptability', 'skilllink', 'hydration', 'solarpower', 'quickfeet', 'normalize', 'sniper', 'magicguard', 'noguard', 'stall', 'technician', 'leafguard', 'klutz', 'moldbreaker',
			'superluck', 'aftermath', 'anticipation', 'forewarn', 'unaware', 'tintedlens', 'filter', 'slowstart', 'scrappy', 'stormdrain', 'icebody', 'solidrock', 'snowwarning', 'honeygather', 'frisk', 'reckless',
			'baddreams', 'pickpocket', 'sheerforce', 'contrary', 'unnerve', 'defiant', 'defeatist', 'cursedbody', 'healer', 'friendguard', 'weakarmor', 'heavymetal', 'lightmetal', 'multiscale', 'toxicboost', 'flareboost',
			'harvest', 'telepathy', 'moody', 'overcoat', 'poisontouch', 'regenerator', 'bigpecks', 'sandrush', 'wonderskin', 'analytic', 'illusion', 'infiltrator', 'mummy', 'moxie', 'justified', 'rattled', 'magicbounce',
			'sapsipper', 'prankster', 'sandforce', 'ironbarbs', 'victorystar',
		];
		const abilityRank1 = [
			'drizzle', 'drought', 'sandstream', 'snowwarning', 'intimidate', 'prankster',
		];
		const abilityRank2 = [
			// major stat checks
			'multiscale', 'hugepower', 'purepower', 'guts', 'download', 'adaptability', 'tintedlens', 'sheerforce', 'moody', 'simple',
			// Speed control
			'swiftswim', 'chlorophyll', 'sandrush', 'speedboost', 'unburden',
			// anti-weather
			'cloudnine', 'airlock',
			// unique support
			'friendguard', 'regenerator', 'healer', 'noguard', 'scrappy', 'unnerve', 'telepathy', 'justified', 'rattled', 'angerpoint', 'illusion',
		];
		const abilityRank3 = [
			// anti-Intimidate
			'clearbody', 'whitesmoke', 'hypercutter', 'defiant', 'contrary', 'trace',
			// immunities
			'voltabsorb', 'waterabsorb', 'flashfire', 'lightningrod', 'stormdrain', 'motordrive', 'sapsipper', 'levitate', 'soundproof',
			// weather Abilities except Sand Veil and Snow Cloak (not interesting)
			'raindish', 'hydration', 'dryskin', 'solarpower', 'leafguard', 'harvest', 'sandforce', 'icebody',
			// anti-flinching
			'shielddust', 'innerfocus',
		];
		const abilityRank4 = [
			'pickup', 'frisk', 'normalize', 'klutz',
			'marvelscale', 'quickfeet', 'poisonheal', 'toxicboost', 'flareboost',
			'ironfist', 'reckless', 'technician', 'skilllink',
			'magicbounce', 'hustle', 'weakarmor', 'moldbreaker', 'pickpocket',
			'analytic', 'moxie', 'bigpecks',
			'plus', 'minus', 'steadfast',
		];
		const abilityRank5 = [
			// contact punishing
			'static', 'effectspore', 'poisonpoint', 'flamebody', 'cursedbody', 'poisontouch', 'aftermath',
			// damage resistance
			'thickfat', 'heatproof', 'filter', 'solidrock',
			// other
			'sturdy', 'compoundeyes', 'roughskin', 'synchronize', 'naturalcure', 'serenegrace', 'hustle',
		];
		const abilityRank6 = [
			// status immunities
			'limber', 'insomnia', 'vitalspirit', 'immunity', 'waterveil', 'owntempo',
			'honeygather', 'shedskin', 'gluttony',
		];
		const badAbilities = [
			'stench', 'battlearmor', 'damp', 'suctioncups', 'runaway', 'keeneye', 'cutecharm', 'stickyhold', 'shellarmor', 'tangledfeet', 'rivalry', 'snowcloak', 'stall', 'anticipation', 'forewarn', 'unaware', 'heavymetal',
			'lightmetal', 'overcoat', 'magmaarmor',
		];

// todo:
// - highlight TMs that are learned now, but weren't already in Gen V, if they were TMs at the time (for my own convenience) - done
// - shift each move to the lowest level it's ever learned pre-Gen VIII - done
// - delay early moves to evolution levels if the pre-evolution didn't have them - done
// - list all (non-TM) Egg moves, post-Gen VIII Egg/level-up additions, and the above postgameTms section at the end ("moves that can be assigned levels if I want") - done
// - forcibly remove all field move TMs and HMs from level-up!! - done

		let printno = 0;
		for (const id in this.dataCache.Pokedex) {
			const poke = this.dataCache.Pokedex[id];
			if (!poke || poke.evos) continue;
			if (poke.types && poke.types[0] === "Bird") continue; // sorry Missingno.
			if (!(this.dataCache.Learnsets[id] && this.dataCache.Learnsets[id].learnset)) {
				if (!(poke.baseSpecies && (["Hoopa", "Shaymin", "Deoxys"].includes(poke.baseSpecies)))) continue; // skip Megas and G-Maxes this time
			}
			if (poke.baseSpecies && ["Pikachu", "Pichu", "Eevee", "Greninja", "Vivillon", "Floette", "Magearna", "Calyrex", "Sinistcha"].includes(poke.baseSpecies)) continue;
			// I can do special handling for Calyrex in a later section
			if (poke.forme && (poke.forme === "Totem" || poke.forme === "Alola-Totem")) continue;
			if (poke.num && poke.num < 0) continue; // skip CAPs
			let future = false; // determine if something is Gen VIII or later
			if (poke.num && poke.num > 809) future = true;
			if (poke.forme && (poke.forme === "Galar" || poke.forme === "Hisui" || poke.baseSpecies === "Tauros")) future = true;

			// just for sanity checks and tracking later
			poke.listOfCertainMoves = [];

			// RANDOM ABILITY
			// todo:
			// - list eligible Abilities (no form-change Abilities, Wonder Guard) - done
			// - randomize 1 Ability and put it in slot 1 - done
			let randomForAbility = randAbilities[Math.floor(Math.random() * randAbilities.length)];
			if (!(poke.gender && poke.gender === "N")) randomForAbility = randAbilitiesGenderless[Math.floor(Math.random() * randAbilitiesGenderless.length)];
			poke.randAbilities = {0: abilityDex[randomForAbility].name};

			// decide slot 2 Ability
			if (poke.name === "Ditto") poke.randAbilities = {0: poke.randAbilities[0], 1: "Imposter"};
			if (poke.name === "Shedinja") poke.randAbilities = {0: poke.randAbilities[0], 1: "Wonder Guard"};
			if (poke.name === "Castform") poke.randAbilities = {0: poke.randAbilities[0], 1: "Forecast"};
			if (poke.name === "Cherrim") poke.randAbilities = {0: poke.randAbilities[0], 1: "Flower Gift"};
			if (poke.name === "Arceus") poke.randAbilities = {0: "Multitype"};
			if (poke.name === "Darmanitan") poke.randAbilities = {0: poke.randAbilities[0], 1: "Zen Mode"};

			const rank1options: string[] = [];
			const rank2options: string[] = [];
			const rank3options: string[] = [];
			const rank4options: string[] = [];
			const rank5options: string[] = [];
			const rank6options: string[] = [];
			const neutralOptions: string[] = [];
			const badOptions: string[] = [];

			for (const idNo in poke.abilities) {
				let id = this.toID(poke.abilities[idNo]);
				if (!abilityDex[id]) {
					console.log (id);
					continue;
				}
				if (abilityDex[id].num && abilityDex[id].num > 164) continue; // skip post-Gen V Abilities completely
				if (poke.randAbilities[0] && poke.randAbilities[0] === poke.abilities[idNo]) continue; // skip repeat Abilities
				if (abilityRank1.includes(id)) rank1options.push(poke.abilities[idNo]);
				else if (abilityRank2.includes(id)) rank2options.push(poke.abilities[idNo]);
				else if (abilityRank3.includes(id)) rank3options.push(poke.abilities[idNo]);
				else if (abilityRank4.includes(id)) rank4options.push(poke.abilities[idNo]);
				else if (abilityRank5.includes(id)) rank5options.push(poke.abilities[idNo]);
				else if (abilityRank6.includes(id)) rank6options.push(poke.abilities[idNo]);
				else if (badAbilities.includes(id)) badOptions.push(poke.abilities[idNo]);
				else neutralOptions.push(poke.abilities[idNo]);
			}
			// pick the highest-priority remaining Ability
			if (!poke.randAbilities[1]) {
				let chosenAbilities: string[] = [];
				if (badOptions.length) chosenAbilities = badOptions;
				if (neutralOptions.length) chosenAbilities = neutralOptions;
				if (rank6options.length) chosenAbilities = rank6options;
				if (rank5options.length) chosenAbilities = rank5options;
				if (rank4options.length) chosenAbilities = rank4options;
				if (rank3options.length) chosenAbilities = rank3options;
				if (rank2options.length) chosenAbilities = rank2options;
				if (rank1options.length) chosenAbilities = rank1options;
				if (chosenAbilities.length) {
					randomForAbility = Math.floor(Math.random() * chosenAbilities.length);
					poke.randAbilities = {0: poke.randAbilities[0], 1: chosenAbilities[randomForAbility]};
				}
			}

			// decide slot 3 Ability
			// pick the highest-priority remaining Ability again - exactly the same as above
			const HArank1options: string[] = [];
			const HArank2options: string[] = [];
			const HArank3options: string[] = [];
			const HArank4options: string[] = [];
			const HArank5options: string[] = [];
			const HArank6options: string[] = [];
			const HAneutralOptions: string[] = [];
			const HAbadOptions: string[] = [];

			for (const idNo in poke.abilities) {
				let id = this.toID(poke.abilities[idNo]);
				if (!abilityDex[id]) {
					console.log (id);
					continue;
				}
				if (abilityDex[id].num && abilityDex[id].num > 164) continue; // skip post-Gen V Abilities completely
				if (poke.randAbilities[0] && poke.randAbilities[0] === poke.abilities[idNo]) continue; // skip repeat Abilities
				if (poke.randAbilities[1] && poke.randAbilities[1] === poke.abilities[idNo]) continue; // skip repeat Abilities
				if (abilityRank1.includes(id)) HArank1options.push(poke.abilities[idNo]);
				else if (abilityRank2.includes(id)) HArank2options.push(poke.abilities[idNo]);
				else if (abilityRank3.includes(id)) HArank3options.push(poke.abilities[idNo]);
				else if (abilityRank4.includes(id)) HArank4options.push(poke.abilities[idNo]);
				else if (abilityRank5.includes(id)) HArank5options.push(poke.abilities[idNo]);
				else if (abilityRank6.includes(id)) HArank6options.push(poke.abilities[idNo]);
				else if (badAbilities.includes(id)) HAbadOptions.push(poke.abilities[idNo]);
				else HAneutralOptions.push(poke.abilities[idNo]);
			}
			// pick the highest-priority remaining Ability
			if (!poke.randAbilities[2]) {
				let chosenAbilities: string[] = [];
				if (HAbadOptions.length) chosenAbilities = HAbadOptions;
				if (HAneutralOptions.length) chosenAbilities = HAneutralOptions;
				if (HArank6options.length) chosenAbilities = HArank6options;
				if (HArank5options.length) chosenAbilities = HArank5options;
				if (HArank4options.length) chosenAbilities = HArank4options;
				if (HArank3options.length) chosenAbilities = HArank3options;
				if (HArank2options.length) chosenAbilities = HArank2options;
				if (HArank1options.length) chosenAbilities = HArank1options;
				if (chosenAbilities.length) {
					randomForAbility = Math.floor(Math.random() * chosenAbilities.length);
					poke.randAbilities = {0: poke.randAbilities[0], 1: poke.randAbilities[1], 2: chosenAbilities[randomForAbility]};
				}
			}

			// do not randomize anything for Slaking, Regigigas, Archeops, etc. - done
			if (["Slaking", "Archeops", "Regigigas"].includes(poke.name)) poke.randAbilities = poke.abilities;

			// setting aside this section to randomize extra Abilities for forms
			if (["Basculin"].includes(poke.name)) poke.randAbilities[3] = abilityDex[randAbilities[Math.floor(Math.random() * randAbilities.length)]].name;

			// - Legendaries and Mythicals have 1 Ability and starters only randomize HA - done
			if (["Overgrow", "Blaze", "Torrent"].includes(poke.abilities[0]) || poke.tags || (poke.baseSpecies && this.dataCache.Pokedex[this.toID(poke.baseSpecies)].tags)) poke.randAbilities = poke.randAbilities = {0: poke.randAbilities[0]};
			// executive decision: starters randomize the primary slot only, since I don't have Ability Capsules or Patches

			// - randomize a second Ability only for the crossgen output - done
			randomForAbility = randAbilities[Math.floor(Math.random() * randAbilities.length)];
			if (!(poke.gender && poke.gender === "N")) randomForAbility = randAbilitiesGenderless[Math.floor(Math.random() * randAbilitiesGenderless.length)];
			let crossgenAbility = abilityDex[randomForAbility].name;
			let overrodeRanking = false;
			poke.crossgenAbilities = {0: poke.randAbilities[0]};
			if (poke.randAbilities[1]) poke.crossgenAbilities[1] = poke.randAbilities[1];
			if (poke.randAbilities[2]) poke.crossgenAbilities[2] = poke.randAbilities[2];

			let slot = 1;
			let slot0rank = 0;
			let slot1rank = 0;

			// pick which slot to replace, but don't bother with the HA slot because this is for in-game
			if (abilityRank1.includes(this.toID(poke.randAbilities[0]))) slot0rank = 1;
			else if (abilityRank2.includes(this.toID(poke.randAbilities[0]))) slot0rank = 2;
			else if (abilityRank3.includes(this.toID(poke.randAbilities[0]))) slot0rank = 3;
			else if (abilityRank4.includes(this.toID(poke.randAbilities[0]))) slot0rank = 4;
			else if (abilityRank5.includes(this.toID(poke.randAbilities[0]))) slot0rank = 5;
			else if (abilityRank6.includes(this.toID(poke.randAbilities[0]))) slot0rank = 6;
			else if (badAbilities.includes(this.toID(poke.randAbilities[0]))) slot0rank = 8;
			else slot0rank = 7;
			if (poke.randAbilities[1]) {
				if (abilityRank1.includes(this.toID(poke.randAbilities[1]))) slot1rank = 1;
				else if (abilityRank2.includes(this.toID(poke.randAbilities[1]))) slot1rank = 2;
				else if (abilityRank3.includes(this.toID(poke.randAbilities[1]))) slot1rank = 3;
				else if (abilityRank4.includes(this.toID(poke.randAbilities[1]))) slot1rank = 4;
				else if (abilityRank5.includes(this.toID(poke.randAbilities[1]))) slot1rank = 5;
				else if (abilityRank6.includes(this.toID(poke.randAbilities[1]))) slot1rank = 6;
				else if (badAbilities.includes(this.toID(poke.randAbilities[1]))) slot1rank = 8;
				else slot1rank = 7;
				if (slot0rank > slot1rank) slot = 0;
			}
			if (poke.name === "Basculin") slot = 1; // forcing this because 0 is the slot that differentiates the forms
			poke.crossgenAbilities[slot] = abilityDex[randomForAbility].name;

			// - overwrite all Abilities with lower priority than that Ability with it
			// - if no Abilities have been overwritten, overwrite a random Ability with the same priority as it
			// - otherwise, ignore it

			// prevos now
			if (poke.prevo) {
				const poke2 = this.dataCache.Pokedex[this.toID(poke.prevo)];
				poke2.randAbilities = {0: poke.randAbilities[0]};
				if (poke.randAbilities[1]) {
					if (poke.abilities[0] && poke.randAbilities[1] === poke.abilities[0]) {
						if (poke2.abilities[0]) { // if the equivalent slot is empty in the pre-evolution, it stays that way for the randomizer
							if (poke2.abilities[0] === poke.abilities[0]) poke2.randAbilities[1] = poke.randAbilities[1]; // if they match, keep matching
							else poke2.randAbilities[1] = poke2.abilities[0]; // if they don't match, revert to vanilla
						}
					} else if (poke.abilities[1] && poke.randAbilities[1] === poke.abilities[1]) {
						if (poke2.abilities[1]) { // if the equivalent slot is empty in the pre-evolution, it stays that way for the randomizer
							if (poke2.abilities[1] === poke.abilities[1]) poke2.randAbilities[1] = poke.randAbilities[1]; // if they match, keep matching
							else poke2.randAbilities[1] = poke2.abilities[1]; // if they don't match, revert to vanilla
						}
					} else if (poke.abilities['H'] && poke.randAbilities[1] === poke.abilities['H']) {
						if (poke2.abilities['H']) { // if the equivalent slot is empty in the pre-evolution, it stays that way for the randomizer
							if (poke2.abilities['H'] === poke.abilities['H']) poke2.randAbilities[1] = poke.randAbilities[1]; // if they match, keep matching
							else poke2.randAbilities[1] = poke2.abilities['H']; // if they don't match, revert to vanilla
						}
					}
				}
				if (poke.randAbilities[2]) {
					if (poke.abilities[0] && poke.randAbilities[2] === poke.abilities[0]) {
						if (poke2.abilities[0]) { // if the equivalent slot is empty in the pre-evolution, it stays that way for the randomizer
							if (poke2.abilities[0] === poke.abilities[0]) poke2.randAbilities[2] = poke.randAbilities[2]; // if they match, keep matching
							else poke2.randAbilities[2] = poke2.abilities[0]; // if they don't match, revert to vanilla
						}
					} else if (poke.abilities[1] && poke.randAbilities[2] === poke.abilities[1]) {
						if (poke2.abilities[1]) { // if the equivalent slot is empty in the pre-evolution, it stays that way for the randomizer
							if (poke2.abilities[1] === poke.abilities[1]) poke2.randAbilities[2] = poke.randAbilities[2]; // if they match, keep matching
							else poke2.randAbilities[2] = poke2.abilities[1]; // if they don't match, revert to vanilla
						}
					} else if (poke.abilities['H'] && poke.randAbilities[2] === poke.abilities['H']) {
						if (poke2.abilities['H']) { // if the equivalent slot is empty in the pre-evolution, it stays that way for the randomizer
							if (poke2.abilities['H'] === poke.abilities['H']) poke2.randAbilities[2] = poke.randAbilities[2]; // if they match, keep matching
							else poke2.randAbilities[2] = poke2.abilities['H']; // if they don't match, revert to vanilla
						}
					}
				}
				if (poke2.prevo) {
					const poke3 = this.dataCache.Pokedex[this.toID(poke2.prevo)];
					poke3.randAbilities = {0: poke.randAbilities[0]};
					if (poke.randAbilities[1]) {
						if (poke.abilities[0] && poke.randAbilities[1] === poke.abilities[0]) {
							if (poke3.abilities[0]) { // if the equivalent slot is empty in the pre-evolution, it stays that way for the randomizer
								if (poke3.abilities[0] === poke.abilities[0]) poke3.randAbilities[1] = poke.randAbilities[1]; // if they match, keep matching
								else poke3.randAbilities[1] = poke3.abilities[0]; // if they don't match, revert to vanilla
							}
						} else if (poke.abilities[1] && poke.randAbilities[1] === poke.abilities[1]) {
							if (poke3.abilities[1]) { // if the equivalent slot is empty in the pre-evolution, it stays that way for the randomizer
								if (poke3.abilities[1] === poke.abilities[1]) poke3.randAbilities[1] = poke.randAbilities[1]; // if they match, keep matching
								else poke3.randAbilities[1] = poke3.abilities[1]; // if they don't match, revert to vanilla
							}
						} else if (poke.abilities['H'] && poke.randAbilities[1] === poke.abilities['H']) {
							if (poke3.abilities['H']) { // if the equivalent slot is empty in the pre-evolution, it stays that way for the randomizer
								if (poke3.abilities['H'] === poke.abilities['H']) poke3.randAbilities[1] = poke.randAbilities[1]; // if they match, keep matching
								else poke3.randAbilities[1] = poke3.abilities['H']; // if they don't match, revert to vanilla
							}
						}
					}
					if (poke.randAbilities[2]) {
						if (poke.abilities[0] && poke.randAbilities[2] === poke.abilities[0]) {
							if (poke3.abilities[0]) { // if the equivalent slot is empty in the pre-evolution, it stays that way for the randomizer
								if (poke3.abilities[0] === poke.abilities[0]) poke3.randAbilities[2] = poke.randAbilities[2]; // if they match, keep matching
								else poke3.randAbilities[2] = poke3.abilities[0]; // if they don't match, revert to vanilla
							}
						} else if (poke.abilities[1] && poke.randAbilities[2] === poke.abilities[1]) {
							if (poke3.abilities[1]) { // if the equivalent slot is empty in the pre-evolution, it stays that way for the randomizer
								if (poke3.abilities[1] === poke.abilities[1]) poke3.randAbilities[2] = poke.randAbilities[2]; // if they match, keep matching
								else poke3.randAbilities[2] = poke3.abilities[1]; // if they don't match, revert to vanilla
							}
						} else if (poke.abilities['H'] && poke.randAbilities[2] === poke.abilities['H']) {
							if (poke3.abilities['H']) { // if the equivalent slot is empty in the pre-evolution, it stays that way for the randomizer
								if (poke3.abilities['H'] === poke.abilities['H']) poke3.randAbilities[2] = poke.randAbilities[2]; // if they match, keep matching
								else poke3.randAbilities[2] = poke3.abilities['H']; // if they don't match, revert to vanilla
							}
						}
					}
				}
			}

			// for later reference
			const abilitySet: string[] = [];
			abilitySet.push(poke.randAbilities[0]);
			if (poke.randAbilities[1]) abilitySet.push(poke.randAbilities[1]);
			// if (poke.randAbilities[2]) abilitySet.push(poke.randAbilities[2]);
			// actually, I don't want to account for HA since the player usually won't have access to it
			if (poke.randAbilities[3]) abilitySet.push(poke.randAbilities[3]);






			// RANDOM TYPE
			// todo:
			// - randomize 2 types for single-types, 1 type for dual-types - done
			const chosenTypes: string[] = [];
			if (poke.types) {
				for (const type of poke.types) {
					if (poke.abilities && ["Overgrow", "Blaze", "Torrent"].includes(poke.abilities[0]) && !["Fire", "Water", "Grass"].includes(type)) continue;
					if ((poke.name === "Azumarill" || poke.name === "Whimsicott") && type === "Fairy") continue; // just a tiny bit of sleight of hand: on the small chance these lines get variants, it would be waaay funnier if it meant keeping Fairy a secret even longer
					if (poke.types[0] === "Normal" && poke.types[1] && poke.types[1] === "Flying" && type === "Normal") continue; // skip Normal in Normal/Flying
					chosenTypes.push(type);
				}
			}
			if (chosenTypes.length < 2) { // first pad types to 2
				const validTypes1: string[] = [];
				for (const type in this.dataCache.TypeChart) {
					if (chosenTypes.includes(type)) continue;
					if (poke.abilities && ["Overgrow", "Blaze", "Torrent"].includes(poke.abilities[0]) && ["Fire", "Water", "Grass"].includes(type)) continue;
					validTypes1.push(type);
				}
				let random1 = Math.floor(Math.random() * validTypes1.length);
				chosenTypes.push(validTypes1[random1]);
			}
			/*
			if (chosenTypes.length < 2) { // this was only possible when Fairy wasn't included
				const validTypes2: string[] = [];
				for (const type in this.dataCache.TypeChart) {
					if (chosenTypes.includes(type)) continue;
					if (poke.abilities && ["Overgrow", "Blaze", "Torrent"].includes(poke.abilities[0]) && ["Fire", "Water", "Grass"].includes(type)) continue;
					validTypes2.push(type);
				}
				let random2 = Math.floor(Math.random() * validTypes2.length);
				chosenTypes.push(validTypes2[random2]);
			}
	*/

			// - pool together all types including randomized types, base types, pre-evolutions and forms

			if (poke.prevo) {
				const poke2 = this.dataCache.Pokedex[this.toID(poke.prevo)];
				if (poke2.types) {
					for (const type of poke2.types) {
						if (chosenTypes.includes(type)) continue;
						if (poke.abilities && ["Overgrow", "Blaze", "Torrent"].includes(poke.abilities[0]) && !["Fire", "Water", "Grass"].includes(type)) continue;
						if (poke2.types[0] === "Normal" && poke2.types[1] && poke2.types[1] === "Flying" && type === "Normal") continue;
						chosenTypes.push(type);
					}
				}
				if (poke2.prevo) {
					const poke3 = this.dataCache.Pokedex[this.toID(poke2.prevo)];
					if (poke3.types) {
						for (const type of poke3.types) {
							if (chosenTypes.includes(type)) continue;
							if (poke.abilities && ["Overgrow", "Blaze", "Torrent"].includes(poke.abilities[0]) && !["Fire", "Water", "Grass"].includes(type)) continue;
							if (poke3.types[0] === "Normal" && poke3.types[1] && poke3.types[1] === "Flying" && type === "Normal") continue;
							chosenTypes.push(type);
						}
					}
				}
			}
			if (poke.otherFormes || poke.baseSpecies) {
				let pokeCheck = poke;
				if (poke.baseSpecies) {
					const poke5 = this.dataCache.Pokedex[this.toID(poke.baseSpecies)];
					if (poke5.types) {
						for (const type of poke5.types) {
							if (chosenTypes.includes(type)) continue;
							if (poke.abilities && ["Overgrow", "Blaze", "Torrent"].includes(poke.abilities[0]) && !["Fire", "Water", "Grass"].includes(type)) continue;
							if (poke5.types[0] === "Normal" && poke5.types[1] && poke5.types[1] === "Flying" && type === "Normal") continue;
							chosenTypes.push(type);
						}
					}
					pokeCheck = this.dataCache.Pokedex[this.toID(poke.baseSpecies)];
				}
				for (const form of pokeCheck.otherFormes) {
					const poke4 = this.dataCache.Pokedex[this.toID(form)];
					if (poke4.types) {
						for (const type of poke4.types) {
							if (chosenTypes.includes(type)) continue;
							if (poke.abilities && ["Overgrow", "Blaze", "Torrent"].includes(poke.abilities[0]) && !["Fire", "Water", "Grass"].includes(type)) continue;
							if (poke4.types[0] === "Normal" && poke4.types[1] && poke4.types[1] === "Flying" && type === "Normal") continue;
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
				// hard-coding for starters because they have more constraints on valid combinations later
				if (poke.name === "Charizard" && ["Fire", "Flying", "Dragon"].includes(type)) continue;
				if (poke.name === "Decidueye" && ["Grass", "Ghost", "Fighting"].includes(type)) continue;
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
			let topScore = -500; // oh this is why starters keep failing aksfjgh
			let loopCount = 0;
			for (const type1 of chosenTypes) {
				for (const type2 of chosenTypes) {
					let score = 0;
					let lowSynergy = false; // for a later step about evaluating setup; true for single-types or dual-types walled by one type
					let pokeCheck = poke;
					if (poke.baseSpecies) pokeCheck = this.dataCache.Pokedex[this.toID(poke.baseSpecies)];
					// automatically reject the base type
					let baseType = false;
					if (pokeCheck.types[1]) {
						if (type1 === pokeCheck.types[0] && type2 === pokeCheck.types[1]) baseType = true;
						if (type2 === pokeCheck.types[0] && type1 === pokeCheck.types[1]) baseType = true;
					} else {
						if (type1 === pokeCheck.types[0] && type2 === pokeCheck.types[0]) baseType = true;
					}

					// reject exact types already taken by other forms/variants
					if (pokeCheck.otherFormes) {
						for (const form of pokeCheck.otherFormes) {
							const poke4 = this.dataCache.Pokedex[this.toID(form)];
							if (poke4.types) {
								if (type1 === poke4.types[0] && ((poke4.types[1] && type2 === poke4.types[1]) || (!poke4.types[1] && type2 === type1))) baseType = true;
								if (type2 === poke4.types[0] && ((poke4.types[1] && type1 === poke4.types[1]) || (!poke4.types[1] && type2 === type1))) baseType = true;
							}
						}
					}
					if (baseType) continue;

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

					const types: string[] = [];
					types.push(type1);
					if (type2 !== type1) types.push(type2);
					// so I can just see if types includes something later (saves time)

					const doubleweaknesses: string[] = [];
					const weaknesses: string[] = [];
					const resistances: string[] = [];
					const immunities: string[] = [];

					// single-type version
					if (type2 === type1) {
						lowSynergy = true;

						// defensive:
						// +1 for non-neutral defensive matchups
						// +2 for double-weaknesses or immunities
						// +3 if one type has an immunity and the other has a weakness
						for (const type in this.dataCache.TypeChart) {
							if (this.dataCache.TypeChart[type1].damageTaken[type] === 1) { // weakness
								score++;
								weaknesses.push(type);
							} else if (this.dataCache.TypeChart[type1].damageTaken[type] === 2) { // resistance
								score++;
								resistances.push(type);
							} else if (this.dataCache.TypeChart[type1].damageTaken[type] === 3) { // immunity
								score += 2;
								immunities.push(type);
							}
						}
	
						// offensive:
						// +1 if one type is resisted and the other is SE
						// +2 if one type is resisted or worse and the other is neutral or worse, but one of the base types is SE
		 
						for (const type in this.dataCache.TypeChart) {
							if (this.dataCache.TypeChart[type].damageTaken[type1] > 1) { // STAB resisted
								if (abilitySet.includes('Tinted Lens')) score += 2;
								if (this.dataCache.TypeChart[type].damageTaken[poke.types[0]] === 1 || (poke.types[1] && this.dataCache.TypeChart[type].damageTaken[poke.types[1]] === 1)) {
									// one of the base types is SE
									score += 2;
								}
							}
						}

					} else { // dual-type version

						// defensive:
						// +1 for non-neutral defensive matchups
						// +2 for double-resistances or immunities
						// +3 for double-weaknesses or if one type has an immunity and the other has a weakness

						for (const type in this.dataCache.TypeChart) {
							if (this.dataCache.TypeChart[type1].damageTaken[type] === 1 || this.dataCache.TypeChart[type2].damageTaken[type] === 1) { // weakness
								if (this.dataCache.TypeChart[type1].damageTaken[type] === 3 || this.dataCache.TypeChart[type2].damageTaken[type] === 3) { // immunity
									score += 3; // weakness canceled by immunity
									immunities.push(type);
									continue;
								} else if (this.dataCache.TypeChart[type1].damageTaken[type] === 2 || this.dataCache.TypeChart[type2].damageTaken[type] === 2) { // neutrality
									continue;
								} else if (this.dataCache.TypeChart[type1].damageTaken[type] === 2 && this.dataCache.TypeChart[type2].damageTaken[type] === 2) { // double-weakness
									score += 3;
									doubleweaknesses.push(type);
								} else { // regular weakness
									score++;
								}
								weaknesses.push(type);
							} else if (this.dataCache.TypeChart[type1].damageTaken[type] === 2 || this.dataCache.TypeChart[type2].damageTaken[type] === 2) { // resistance
								if (this.dataCache.TypeChart[type1].damageTaken[type] === 3 || this.dataCache.TypeChart[type2].damageTaken[type] === 3) { // immunity
									score += 2; // regular immunity
									immunities.push(type);
									continue;
								} else if (this.dataCache.TypeChart[type1].damageTaken[type] === 1 || this.dataCache.TypeChart[type2].damageTaken[type] === 1) { // neutrality
									continue;
								} else if (this.dataCache.TypeChart[type1].damageTaken[type] === 2 && this.dataCache.TypeChart[type2].damageTaken[type] === 2) { // double-resistance
									score ++;
								}
								score++;
								resistances.push(type);
							} else if (this.dataCache.TypeChart[type1].damageTaken[type] === 3 || this.dataCache.TypeChart[type2].damageTaken[type] === 3) { // immunity
								score += 2;
								immunities.push(type);
							}
						}

						// offensive:
						// +1 if one type is resisted and the other is SE
						// +2 if one type is resisted or worse and the other is neutral or worse, but one of the base types is SE

						for (const type in this.dataCache.TypeChart) {
							if (this.dataCache.TypeChart[type].damageTaken[type1] > 1 && this.dataCache.TypeChart[type].damageTaken[type2] > 1) lowSynergy = true;
							// lowSynergy doesn't affect score, but if this type is picked, it opens more options for the stats stage later
							if (this.dataCache.TypeChart[type].damageTaken[type1] === 2 && this.dataCache.TypeChart[type].damageTaken[type2] === 2 && abilitySet.includes('Tinted Lens')) score += 2;
							if (this.dataCache.TypeChart[type].damageTaken[type1] > 1 || this.dataCache.TypeChart[type].damageTaken[type2] > 1) { // one STAB resisted
								if (this.dataCache.TypeChart[type].damageTaken[type1] === 1 || this.dataCache.TypeChart[type].damageTaken[type2] === 1) { // other STAB is SE
									score ++; // weakness canceled by immunity
								} else { // neither STAB SE
									if (this.dataCache.TypeChart[type].damageTaken[poke.types[0]] === 1 || (poke.types[1] && this.dataCache.TypeChart[type].damageTaken[poke.types[1]] === 1)) {
										// one of the base types is SE
										score += 2;
									}
								}
							}
						}

					}

					// Ability checks
					// I already have abilitySet established earlier, so I can reference it

					if (
						abilitySet.includes('Drizzle') || abilitySet.includes('Swift Swim') || abilitySet.includes('Rain Dish') || abilitySet.includes('Dry Skin') || abilitySet.includes('Hydration')
					) {
						if (weaknesses.includes("Fire")) score += 3;
					}
					if (
						abilitySet.includes('Drought') || abilitySet.includes('Chlorophyll') || abilitySet.includes('Leaf Guard') || abilitySet.includes('Solar Power') || abilitySet.includes('Harvest')
					) {
						if (weaknesses.includes("Water")) {
							if (types.includes("Fire")) {
								score += 2;
							} else {
								score += 3;
							}
						}
					}
					if (abilitySet.includes('Sand Stream')) {
						if (types.includes("Rock") || types.includes("Ground") || types.includes("Steel")) score += 3;
					}

					// these should be valued a lot, but *only* if the immunity Ability was randomized
					if (poke.randAbilities[0] === "Flash Fire") {
						if (types.includes("Fire") || resistances.includes("Fire")) score += 7;
					}
					if (poke.randAbilities[0] === "Lightning Rod" || poke.randAbilities[0] === "Motor Drive" || poke.randAbilities[0] === "Volt Absorb") {
						if (types.includes("Electric") || resistances.includes("Electric")) score += 7;
					}
					if (poke.randAbilities[0] === "Storm Drain" || poke.randAbilities[0] === "Dry Skin" || poke.randAbilities[0] === "Water Absorb") {
						if (types.includes("Water") || resistances.includes("Water")) score += 7;
					}
					if (poke.randAbilities[0] === "Sap Sipper") {
						if (types.includes("Grass") || resistances.includes("Grass")) score += 7;
					}

					// always discourage redundant immunities
					if (abilitySet.includes('Levitate')) {
						if (immunities.includes("Ground")) score -= 10;
					}
					if (abilitySet.includes('Water Veil') || abilitySet.includes('Flare Boost')) {
						if (resistances.includes("Water")) score += 4;
						if (resistances.includes("Fire")) score += 2;
						if (resistances.includes("Ground")) score += 1; // Scorching Sands is probably rare, but...
						if (types.includes("Fire")) score -= 20;
					}
					if (abilitySet.includes('Immunity') || abilitySet.includes('Toxic Boost') || abilitySet.includes('Poison Heal')) {
						if (resistances.includes("Poison") && !immunities.includes("Poison")) score += 5;
						if (types.includes("Steel") || types.includes("Poison")) score -= 20;
					}
					if (abilitySet.includes('Limber')) {
						if (resistances.includes("Electric")) score += 4; // the main one
						if (resistances.includes("Normal") && !immunities.includes("Normal")) score += 1; // Body Slam I guess
						// no type rejects this because nothing is immune to paralysis this Gen
					}
					if (abilitySet.includes('Magma Armor')) {
						if (resistances.includes("Ice")) score += 5;
						if (types.includes("Ice")) score -= 20;
					}
					if (abilitySet.includes('Overcoat')) {
						if (types.includes("Ice") && (types.includes("Rock") || types.includes("Ground") || types.includes("Steel"))) score -= 20;
					}

					// discourage neutralities for these
					if (abilitySet.includes('Justified')) {
						if (weaknesses.includes("Dark") || resistances.includes("Dark")) score += 5;
					}
					if (abilitySet.includes('Rattled')) {
						if (
							weaknesses.includes("Dark") || resistances.includes("Dark") || weaknesses.includes("Bug") || resistances.includes("Bug") || weaknesses.includes("Ghost") || resistances.includes("Ghost")
						) score += 5;
					}

					if (abilitySet.includes('Heatproof')) {
						if (weaknesses.includes("Fire")) score += 10;
						if (resistances.includes("Fire")) score -= 10;
					}
					if (abilitySet.includes('Thick Fat')) {
						if (weaknesses.includes("Fire") || weaknesses.includes("Ice")) score += 10;
						if (resistances.includes("Fire") && resistances.includes("Ice")) score -= 10;
					}

					if (abilitySet.includes('Filter') || abilitySet.includes('Solid Rock')) {
						if (doubleweaknesses.length) score += 10;
					}
					if (abilitySet.includes('Adaptability')) {
						if (type1 === type2) score += 6;
					}
					if (abilitySet.includes('Contrary')) {
						if (types.includes("Fire") || types.includes("Dragon") || types.includes("Fighting")) score -= 5;
					}
					if (abilitySet.includes('Stall')) {
						if (types.includes("Dark")) score += 5;
					}

					if (
						abilitySet.includes('Poison Point') || abilitySet.includes('Flame Body') || abilitySet.includes('Static') || abilitySet.includes('Cursed Body') || abilitySet.includes('Effect Spore')
					) {
						if (resistances.includes("Fighting")) score += 2;
						if (resistances.includes("Bug")) score += 2;
						if (resistances.includes("Dragon")) score += 2;
						if (resistances.includes("Dark")) score += 2;
					}
					if (abilitySet.includes('Flame Body')) {
						if (types.includes("Water") || types.includes("Rock") || types.includes("Ground")) score += 3;
					}
					if (abilitySet.includes('Poison Point')) {
						if (types.includes("Ground") || types.includes("Psychic")) score += 2;
						if (types.includes("Ground") || types.includes("Fire") || types.includes("Fighting")) score += 2;
					}
					if (abilitySet.includes('Liquid Ooze')) {
						if (resistances.includes("Grass")) score += 3; // extra points for Grass resist
						if (resistances.includes("Grass") || resistances.includes("Fighting") || resistances.includes("Bug")) score += 2;
					}
					if (abilitySet.includes('Shield Dust')) { // maximize the number of other relevant resistances
						if (resistances.includes("Poison")) score += 3;
						if (resistances.includes("Water")) score += 3;
						if (resistances.includes("Rock")) score += 3;
						if (resistances.includes("Electric")) score += 2;
						if (resistances.includes("Ice")) score += 2;
						if (resistances.includes("Bug")) score += 2;
						if (resistances.includes("Dark")) score += 2;
						if (resistances.includes("Fire")) score += 1;
						if (resistances.includes("Ground")) score += 1;
						if (resistances.includes("Normal")) score += 1;
						if (types.includes("Ghost")) score -= 5; // redundant but not useless
					}
					if (abilitySet.includes('Inner Focus') || abilitySet.includes('Steadfast')) {
						if (resistances.includes("Rock")) score += 5; // Rock Slideee
						if (types.includes("Ghost")) score -= 10; // very redundant
					}
					if (abilitySet.includes('Normalize')) {
						if (types.includes("Normal")) score += 10; // STAB
						if (types.includes("Ghost")) score -= 10; // danger of Skill Swap mostly
					}

					if (abilitySet.includes("Wonder Guard")) score += (4 * weaknesses.length);

					// reset all existing combinations if a higher-scoring one comes along
					if (!baseType) {
						if (score > topScore) {
							loopCount = 0;
							topScore = score;
							chosenCombinations = {};
						}
						// skip if there was already a higher-scoring one
						if (score < topScore) continue;
	
						chosenCombinations[loopCount] = {
								type1: [],
								type2: [],
						};
						chosenCombinations[loopCount].type1 = type1;
						chosenCombinations[loopCount].type2 = type2;
						chosenCombinations[loopCount].score = score;
						if (lowSynergy) chosenCombinations[loopCount].lowSynergy = true;
						loopCount++;
					}
				}
			}

			let randomType = Math.floor(Math.random() * loopCount);
			poke.chosenType = chosenCombinations[randomType];
			if (!chosenCombinations[randomType]) {
				console.log(poke.name + ` failed; list of valid types: ` + chosenTypes);
				poke.chosenType = {
					type1: [poke.types[0]],
					type2: [poke.types[1] ? poke.types[1] : poke.types[0]],
				};
			}
			if ((poke.types[0] === poke.chosenType.type2) || (poke.types[1] && poke.types[1] === poke.chosenType.type1)) {
				const secondType = poke.chosenType.type1;
				const firstType = poke.chosenType.type2;
				poke.chosenType.type1 = firstType;
				poke.chosenType.type2 = secondType;
			}

			if (poke.prevo) {
				const poke2 = this.dataCache.Pokedex[this.toID(poke.prevo)];
				poke2.chosenType = {
					type1: [poke.chosenType.type1],
					type2: [poke.chosenType.type2],
				};
				if (poke2.types[0] !== poke.types [0]) poke2.chosenType.type1 = poke2.types[0];
				if (poke2.types[1] && poke.types[1] && poke2.types[1] !== poke.types [1]) poke2.chosenType.type2 = poke2.types[1];
				if (!poke2.types[1] && poke.types[1]) poke2.chosenType.type2 = poke2.chosenType.type1;
				if (poke2.prevo) {
					const poke3 = this.dataCache.Pokedex[this.toID(poke2.prevo)];
					poke3.chosenType = {
						type1: [poke.chosenType.type1],
						type2: [poke.chosenType.type2],
					};
					if (poke3.types[0] !== poke.types [0]) poke3.chosenType.type1 = poke3.types[0];
					if (poke3.types[1] && poke.types[1] && poke3.types[1] !== poke.types [1]) poke3.chosenType.type2 = poke3.types[1];
					if (!poke3.types[1] && poke.types[1]) poke3.chosenType.type2 = poke3.chosenType.type1;
				}
			}

			// console.logging
			/*
			let samples: string[] = [poke.name + ` samples: `];
			if (chosenCombinations[0]) samples += chosenCombinations[0].score + chosenCombinations[0].type1 + ((chosenCombinations[0].type2 !== chosenCombinations[0].type1) ? `/` + chosenCombinations[0].type2 + `, ` : `, `);
			if (chosenCombinations[1]) samples += chosenCombinations[1].score + chosenCombinations[1].type1 + ((chosenCombinations[1].type2 !== chosenCombinations[1].type1) ? `/` + chosenCombinations[1].type2 + `, ` : `, `);
			if (chosenCombinations[2]) samples += chosenCombinations[2].score + chosenCombinations[2].type1 + ((chosenCombinations[2].type2 !== chosenCombinations[2].type1) ? `/` + chosenCombinations[2].type2 + `, ` : `, `);
			if (chosenCombinations[3]) samples += chosenCombinations[3].score + chosenCombinations[3].type1 + ((chosenCombinations[3].type2 !== chosenCombinations[3].type1) ? `/` + chosenCombinations[3].type2 + `, ` : `, `);
			if (chosenCombinations[4]) samples += chosenCombinations[4].score + chosenCombinations[4].type1 + ((chosenCombinations[4].type2 !== chosenCombinations[4].type1) ? `/` + chosenCombinations[4].type2 + `, ` : `, `);
			if (poke.chosenType) samples += `chosen: ` + poke.chosenType.score + poke.chosenType.type1 + ((poke.chosenType.type2 !== poke.chosenType.type1) ? `/` + poke.chosenType.type2 : ` `);
			console.log(samples);
			*/



			// RANDOM MOVES
			// todo:
			// - add universal moves to learnsets when randomizing (based on the new type) - done
			// - go through move substitutions by type, but keep the old move listed in the same row just in case (ex. "15 - Icy Wind -> Struggle Bug")
			// - possible: filter out moves that are already TMs if the player gets the TM earlier than the level-up move (save on space)
			// - possible: push one completely random (? within certain parameters?) extra move to the learnset

			if ((this.dataCache.Learnsets[id] && this.dataCache.Learnsets[id].learnset) || (poke.baseSpecies && (["Hoopa", "Shaymin", "Deoxys"].includes(poke.baseSpecies)))) {
				printno++;

				const learnsetTypes: string[] = [];
				learnsetTypes.push(poke.chosenType.type1);
				if (poke.chosenType.type2 !== poke.chosenType.type1) learnsetTypes.push(poke.chosenType.type2);

				const usedSecondMoves: string[] = []; // to avoid pushing the same one twice
				const alreadyLvUpMoves: string[] = []; // to avoid pushing the same one twice
				let earlyForcedMovesOptions: string[] = []; // to make sure you have at least *one* move with Ability synergy, since you can't do that while evaluating every move in order

				const moveAbilitySet: string[] = [];
				moveAbilitySet.push(poke.randAbilities[0]);
				if (poke.randAbilities[1]) moveAbilitySet.push(poke.randAbilities[1]);
				if (poke.randAbilities[2]) moveAbilitySet.push(poke.randAbilities[2]); // happy to account for HAs here because they can only make movepools even more diverse
				if (poke.randAbilities[3]) moveAbilitySet.push(poke.randAbilities[3]); // Basculin

				if (moveAbilitySet.includes("Drizzle") || moveAbilitySet.includes("Swift Swim") || moveAbilitySet.includes("Rain Dish") || moveAbilitySet.includes("Dry Skin") || moveAbilitySet.includes("Hydration") || moveAbilitySet.includes("Torrent")) learnsetTypes.push("Water");
				if (moveAbilitySet.includes("Drought") || moveAbilitySet.includes("Blaze") || moveAbilitySet.includes("Flash Fire")) learnsetTypes.push("Fire");
				if (moveAbilitySet.includes("Overgrow")) learnsetTypes.push("Grass");
				if (moveAbilitySet.includes("Swarm")) learnsetTypes.push("Bug");
				if (moveAbilitySet.includes("Sand Force")) {
					learnsetTypes.push("Rock");
					learnsetTypes.push("Ground");
					learnsetTypes.push("Steel");
				}

				poke.learnsetCumulative = {
							Moves: [],
							learnset: [],
				};
				poke.additionalTms = [];
				poke.recommendedLvUp = [];
				poke.forcedMoves = [];
				poke.backports = [];
				poke.extraLevelUpSpaces = 0; // add 1 to this every time a skippable move is included

				for (let i = 1; i < 102; i++) {
					poke.learnsetCumulative.learnset[i] = {
						movesLearned: [],
					}
				}
				// start with the vanilla learnset
				let learnset = null;
				if ((this.dataCache.Learnsets[id] && this.dataCache.Learnsets[id].learnset)) {
					learnset = this.modData('Learnsets', this.toID(id)).learnset;
				} else if ((poke.baseSpecies && (["Hoopa", "Shaymin", "Deoxys"].includes(poke.baseSpecies)))) {
					learnset = this.modData('Learnsets', this.toID(poke.baseSpecies)).learnset;
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

				// early forced move time
				let getsForcedMoveAlready = false;
				if (poke.randAbilities[0] === "Defeatist") earlyForcedMovesOptions = ['healorder', 'roost', 'recover', 'softboiled', 'milkdrink', 'slackoff', 'moonlight', 'synthesis', 'morningsun', 'wish'];
				if (poke.randAbilities[0] === "Bad Dreams") earlyForcedMovesOptions = ['grasswhistle', 'sleeppowder', 'sing', 'lovelykiss', 'hypnosis', 'yawn'];
				if (poke.randAbilities[0] === "Chlorophyll" || poke.randAbilities[0] === "Leaf Guard" || poke.randAbilities[0] === "Solar Power" || poke.randAbilities[0] === "Harvest") earlyForcedMovesOptions = ['growth', 'synthesis', 'morningsun', 'moonlight'];
				if (poke.randAbilities[0] === "Iron Fist") earlyForcedMovesOptions = ['bulletpunch', 'cometpunch', 'dizzypunch', 'drainpunch', 'firepunch', 'focuspunch', 'hammerarm', 'icehammer', 'icepunch', 'machpunch', 'megapunch', 'poweruppunch', 'shadowpunch', 'skyuppercut', 'thunderpunch', 'jetpunch', 'meteormash'];
				if (poke.randAbilities[0] === "Rock Head" || poke.randAbilities[0] === "Reckless") earlyForcedMovesOptions = ['doubleedge', 'flareblitz', 'headsmash', 'submission', 'woodhammer', 'wavecrash', 'wildcharge', 'bravebird', 'headcharge'];
				if (poke.randAbilities[0] === "Skill Link") earlyForcedMovesOptions = ['armthrust', 'bulletseed', 'iciclespear', 'pinmissile', 'rockblast', 'spikecannon', 'tailslap', 'bonerush', 'watershuriken'];
				if (poke.randAbilities[0] === "Sniper" || poke.randAbilities[0] === "Super Luck") earlyForcedMovesOptions = ['aircutter', 'aquacutter', 'attackorder', 'blazekick', 'crabhammer', 'crosschop', 'crosspoison', 'drillrun', 'esperwing', 'leafblade', 'nightslash', 'psychocut', 'shadowclaw', 'slash', 'snipeshot', 'stoneedge', 'triplearrows'];

				// first check if it already gets one of them
				for (const moveCheck in learnset) {
					if (earlyForcedMovesOptions.includes(moveCheck)) getsForcedMoveAlready = true;
					for (const source of learnset[moveCheck]) {
						if (source.charAt(1) === 'L') alreadyLvUpMoves.push(moveCheck);
					}
				}
				if (learnset2) {
					for (const moveCheck in learnset2) {
						if (earlyForcedMovesOptions.includes(moveCheck)) getsForcedMoveAlready = true;
						for (const source of learnset2[moveCheck]) {
							if (source.charAt(1) === 'L') alreadyLvUpMoves.push(moveCheck);
						}
					}
				}
				if (learnset3) {
					for (const moveCheck in learnset3) {
						if (earlyForcedMovesOptions.includes(moveCheck)) getsForcedMoveAlready = true;
						for (const source of learnset3[moveCheck]) {
							if (source.charAt(1) === 'L') alreadyLvUpMoves.push(moveCheck);
						}
					}
				}

				if (earlyForcedMovesOptions.length && !getsForcedMoveAlready) {
					// now pick one of them
					let earlyForcedMoveCandidates: string[] = [];
					// prioritize matching type
					for (const moveCheck in earlyForcedMoveCandidates) {
						if (!this.dataCache.Moves[moveid]) {
							console.log(moveid);
							continue;
						}
						const types: string[] = [];
						types.push(this.dataCache.Moves[moveid].type);
						if (moveid === 'recover') {
							types.push("Psychic");
							types.push("Water");
						} else if (moveid === 'moonlight') {
							types.push("Dark");
							types.push("Ghost");
						} else if (moveid === 'morningsun') {
							types.push("Psychic");
							types.push("Fire");
						} else if (moveid === 'lovelykiss') {
							types.push("Dark");
						} else if (moveid === 'hypnosis' || moveid === 'bonerush') {
							types.push("Ghost");
						} else if (moveid === 'iciclespear') {
							types.push("Water");
						} else if (moveid === 'spikecannon') {
							types.push("Steel");
						} else if (moveid === 'wish') {
							types.push("Fairy");
						}
						if (types.includes(poke.chosenType.type1) || types.includes(poke.chosenType.type2)) earlyForcedMoveCandidates.push(moveid);
					}
					// if no type-themed options are available, pick at complete random - all of the listed options are on the table
					if (!earlyForcedMoveCandidates.length) earlyForcedMoveCandidates = earlyForcedMovesOptions;
					if (earlyForcedMoveCandidates.length) poke.earlyForcedMove = earlyForcedMoveCandidates[Math.floor(Math.random() * earlyForcedMoveCandidates.length)];
				}

				// okay, now the real learnset work starts

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

					// universal moves
					let forceLearn = false;
					let synergyMove = 0;
					if ((!(poke.gender && poke.gender === "N")) && moveid === 'attract') forceLearn = true;
					if (universal.includes(moveid)) forceLearn = true;
					if (forceLearn) synergyMove = -1; // dismiss synergyMove if the move is universal; should be 0 now if not

					// early forced moves
					if (poke.earlyForcedMove && poke.earlyForcedMove === moveid) forceLearn = true;

					// Ability-based moves
					// these ones are only for the random Ability slot
					if ((poke.randAbilities[0] === "Drizzle" || poke.randAbilities[0] === "Swift Swim" || poke.randAbilities[0] === "Rain Dish" || poke.randAbilities[0] === "Dry Skin" || poke.randAbilities[0] === "Hydration") && (moveid === 'thunder' || moveid === 'hurricane' || moveid === 'weatherball')) forceLearn = true;
					if ((poke.randAbilities[0] === "Drought" || poke.randAbilities[0] === "Chlorophyll" || poke.randAbilities[0] === "Leaf Guard" || poke.randAbilities[0] === "Solar Power" || poke.randAbilities[0] === "Harvest") && (moveid === 'solarbeam' || moveid === 'solarblade' || moveid === 'weatherball')) forceLearn = true;
					if ((poke.randAbilities[0] === "Snow Warning" || poke.randAbilities[0] === "Snow Cloak" || poke.randAbilities[0] === "Ice Body") && (moveid === 'blizzard' || moveid === 'weatherball')) forceLearn = true;
					if ((poke.randAbilities[0] === "Sand Stream" || poke.randAbilities[0] === "Sand Rush" || poke.randAbilities[0] === "Sand Force" || poke.randAbilities[0] === "Sand Veil" || poke.randAbilities[0] === "Normalize") && moveid === 'weatherball') forceLearn = true;
					if ((poke.randAbilities[0] === "Truant" || poke.randAbilities[0] === "Defeatist" || poke.randAbilities[0] === "Slow Start" || poke.randAbilities[0] === "Stall" || poke.randAbilities[0] === "Klutz") && poke.name !== "Slaking" && poke.name !== "Regigigas" && poke.name !== "Archeops" && (moveid == 'skillswap' || moveid == 'entrainment')) forceLearn = true;
					if (poke.randAbilities[0] === "Klutz" && moveid == 'trick') forceLearn = true;
					if (poke.randAbilities[0] === "Gluttony" && moveid == 'recycle') forceLearn = true;
					if (poke.randAbilities[0] === "Contrary" && (moveid == 'superpower' || (learnsetTypes.includes(move.type) && (moveid == 'leafstorm' || moveid == 'icehammer' || moveid == 'hammerarm' || moveid == 'clangingscales' || moveid == 'makeitrain' || moveid == 'spinout')))) forceLearn = true; // feels disappointing without this
					if (poke.randAbilities[0] === "Frisk" && (moveid == 'trick' || moveid == 'thief' || moveid == 'covet')) forceLearn = true;
					if (poke.randAbilities[0] === "Stall" && (moveid == 'payback' || moveid == 'assurance' || moveid == 'pursuit' || moveid == 'metalburst')) forceLearn = true;
					if (poke.randAbilities[0] === "Mold Breaker" && moveid == 'earthquake') forceLearn = true;
					if (poke.randAbilities[0] === "Unburden" && moveid === 'acrobatics') forceLearn = true;
					// Ability- and type-based moves
					// these ones are for every Ability slot, because they care about the movepool types, too
					if (moveAbilitySet.includes("Serene Grace") && learnsetTypes.includes(move.type) && (move.secondary && move.secondary.chance && move.secondary.chance < 90 && move.secondary.chance > 10)) forceLearn = true;
					if (moveAbilitySet.includes("Iron Fist") && learnsetTypes.includes(move.type) && (move.flags['punch'])) forceLearn = true;
					if ((moveAbilitySet.includes("Rock Head") || moveAbilitySet.includes("Reckless")) && learnsetTypes.includes(move.type) && (move.recoil)) forceLearn = true;
					if (moveAbilitySet.includes("Skill Link") && learnsetTypes.includes(move.type) && (move.multihit)) forceLearn = true;
					if (moveAbilitySet.includes("Technician") && learnsetTypes.includes(move.type) && (move.basePower && move.basePower < 61 && move.basePower > 10)) forceLearn = true;
					if ((moveAbilitySet.includes("Sniper") || moveAbilitySet.includes("Super Luck")) && learnsetTypes.includes(move.type) && (move.critRatio)) forceLearn = true;
					if (moveAbilitySet.includes("Sniper") && learnsetTypes.includes(move.type) && (move.willCrit)) forceLearn = true;
					if ((moveAbilitySet.includes("No Guard") || moveAbilitySet.includes("Compound Eyes")) && learnsetTypes.includes(move.type) && (move.accuracy && move.accuracy < 95 && move.accuracy > 60)) forceLearn = true;
					if (moveAbilitySet.includes("No Guard") && learnsetTypes.includes(move.type) && (move.accuracy && move.accuracy === 50)) forceLearn = true;
					if ((moveAbilitySet.includes("Own Tempo") || moveAbilitySet.includes("Tangled Feet")) && learnsetTypes.includes(move.type) && (move.target === "randomNormal")) forceLearn = true;
					if (moveid === "struggle") forceLearn = false;
					// exclude Legendary signatures, too
					if ([
						'psystrike', 'aeroblast', 'sacredfire', 'lusterpurge', 'mistball', 'precipiceblades', 'originpulse', 'dragonascent', 'doomdesire', 'psychoboost',
						'roaroftime', 'spacialrend', 'shadowforce', 'magmastorm', 'lunardance', 'lunarblessing', 'crushgrip', 'mysticalpower', 'darkvoid', 'seedflare',
						'judgment', 'vcreate', 'searingshot', 'wildboltstorm', 'bleakwindstorm', 'sandsearstorm', 'fusionbolt', 'fusionflare', 'boltstrike', 'blueflare',
						'iceburn', 'freezeshock', 'glaciate', 'technoblast', 'relicsong', 'secretsword', 'geomancy', 'oblivionwing', 'landswrath', 'hyperspacehole',
						'hyperspacefury', 'diamondstorm', 'steameruption', 'sunsteelstrike', 'moongeistbeam', 'naturesmadness', 'prismaticlaser', 'photongeyser',
						'fleurcannon', 'spectralthief', 'plasmafists', 'doubleironbash', 'behemothbash', 'behemothblade', 'dynamaxcannon', 'eternabeam', 'junglehealing',
						'wickedblow', 'surgingstrikes', 'glaciallance', 'astralbarrage', 'freezingglare', 'thunderouskick', 'fierywrath', 'thundercage', 'dragonenergy',
						'collisioncourse', 'electrodrift', 'ruination', 'malignantchain', 'terastarstorm', 'heartswap', 'lightofruin', 'springtidestorm',
					].includes(moveid)) forceLearn = false;
					// I might be missing some but it's not important (but also: I do want UB/Paradox signatures to be allowed - that's on purpose)
					if (forceLearn && synergyMove === 0) synergyMove = 1; // count synergyMove if the move is non-universal and Ability-related
					// should be 0 now if not forced yet and -1 if universal

					// types
					if ((poke.chosenType.type1 === 'Fire' || poke.chosenType.type2 === 'Fire') && universalFire.includes(moveid)) forceLearn = true;
					if ((poke.chosenType.type1 === 'Water' || poke.chosenType.type2 === 'Water') && universalWater.includes(moveid)) forceLearn = true;
					if ((poke.chosenType.type1 === 'Electric' || poke.chosenType.type2 === 'Electric') && universalElectric.includes(moveid)) forceLearn = true;
					if ((poke.chosenType.type1 === 'Grass' || poke.chosenType.type2 === 'Grass') && universalGrass.includes(moveid)) forceLearn = true;
					if ((poke.chosenType.type1 === 'Ice' || poke.chosenType.type2 === 'Ice') && universalIce.includes(moveid)) forceLearn = true;
					if ((poke.chosenType.type1 === 'Fighting' || poke.chosenType.type2 === 'Fighting') && universalFighting.includes(moveid)) forceLearn = true;
					if ((poke.chosenType.type1 === 'Poison' || poke.chosenType.type2 === 'Poison') && universalPoison.includes(moveid)) forceLearn = true;
					if ((poke.chosenType.type1 === 'Ground' || poke.chosenType.type2 === 'Ground') && universalGround.includes(moveid)) forceLearn = true;
					if ((poke.chosenType.type1 === 'Flying' || poke.chosenType.type2 === 'Flying') && universalFlying.includes(moveid)) forceLearn = true;
					if ((poke.chosenType.type1 === 'Psychic' || poke.chosenType.type2 === 'Psychic') && universalPsychic.includes(moveid)) forceLearn = true;
					if ((poke.chosenType.type1 === 'Bug' || poke.chosenType.type2 === 'Bug') && universalBug.includes(moveid)) forceLearn = true;
					if ((poke.chosenType.type1 === 'Rock' || poke.chosenType.type2 === 'Rock') && universalRock.includes(moveid)) forceLearn = true;
					if ((poke.chosenType.type1 === 'Ghost' || poke.chosenType.type2 === 'Ghost') && universalGhost.includes(moveid)) forceLearn = true;
					if ((poke.chosenType.type1 === 'Dragon' || poke.chosenType.type2 === 'Dragon') && universalDragon.includes(moveid)) forceLearn = true;
					if ((poke.chosenType.type1 === 'Dark' || poke.chosenType.type2 === 'Dark') && universalDark.includes(moveid)) forceLearn = true;
					if ((poke.chosenType.type1 === 'Steel' || poke.chosenType.type2 === 'Steel') && universalSteel.includes(moveid)) forceLearn = true;
					if ((poke.chosenType.type1 === 'Fairy' || poke.chosenType.type2 === 'Fairy') && universalFairy.includes(moveid)) forceLearn = true;
					if ((poke.chosenType.type1 === 'Normal' || poke.chosenType.type2 === 'Normal') && universalNormal.includes(moveid)) forceLearn = true;
					// Egg groups
					if ((poke.eggGroups[0] === 'Monster' || (poke.eggGroups[1] && poke.eggGroups[1] === 'Monster')) && universalMonsterGroup.includes(moveid)) forceLearn = true;
					if ((poke.eggGroups[0] === 'Human-Like' || (poke.eggGroups[1] && poke.eggGroups[1] === 'Human-Like')) && universalHumanlikeGroup.includes(moveid)) forceLearn = true;
					if ((poke.eggGroups[0] === 'Water 1' || (poke.eggGroups[1] && poke.eggGroups[1] === 'Water 1')) && universalWater1Group.includes(moveid)) forceLearn = true;
					if ((poke.eggGroups[0] === 'Water 3' || (poke.eggGroups[1] && poke.eggGroups[1] === 'Water 3')) && universalWater3Group.includes(moveid)) forceLearn = true;
					if ((poke.eggGroups[0] === 'Bug' || (poke.eggGroups[1] && poke.eggGroups[1] === 'Bug')) && universalBugGroup.includes(moveid)) forceLearn = true;
					if ((poke.eggGroups[0] === 'Flying' || (poke.eggGroups[1] && poke.eggGroups[1] === 'Flying')) && universalFlyingGroup.includes(moveid)) forceLearn = true;
					if ((poke.eggGroups[0] === 'Amorphous' || (poke.eggGroups[1] && poke.eggGroups[1] === 'Amorphous')) && universalAmorphousGroup.includes(moveid)) forceLearn = true;
					if ((poke.eggGroups[0] === 'Field' || (poke.eggGroups[1] && poke.eggGroups[1] === 'Field')) && universalFieldGroup.includes(moveid)) forceLearn = true;
					if ((poke.eggGroups[0] === 'Water 2' || (poke.eggGroups[1] && poke.eggGroups[1] === 'Water 2')) && universalWater2Group.includes(moveid)) forceLearn = true;
					if ((poke.eggGroups[0] === 'Fairy' || (poke.eggGroups[1] && poke.eggGroups[1] === 'Fairy')) && universalFairyGroup.includes(moveid)) forceLearn = true;
					if ((poke.eggGroups[0] === 'Grass' || (poke.eggGroups[1] && poke.eggGroups[1] === 'Grass')) && universalGrassGroup.includes(moveid)) forceLearn = true;
					if ((poke.eggGroups[0] === 'Dragon' || (poke.eggGroups[1] && poke.eggGroups[1] === 'Dragon')) && universalDragonGroup.includes(moveid)) forceLearn = true;
					// (only some Egg groups have universal moves)
					if (forceLearn && synergyMove !== 1) synergyMove = -1; // dismiss synergyMove if the move is not already highlighted and is universal by type
					// should be 1 now if synergistic, 0 now if not forced yet, and -1 if universal

					// Bonus learnsetTypes but only for the randomized Ability
					if ((poke.randAbilities[0] === "Drought" || poke.randAbilities[0] === "Blaze" || poke.randAbilities[0] === "Flash Fire") && universalFire.includes(moveid) && move.type === "Fire" && move.category !== "Status") forceLearn = true;
					if ((poke.randAbilities[0] === "Drizzle" || poke.randAbilities[0] === "Swift Swim" || poke.randAbilities[0] === "Rain Dish" || poke.randAbilities[0] === "Dry Skin" || poke.randAbilities[0] === "Hydration" || poke.randAbilities[0] === "Torrent") && universalWater.includes(moveid) && move.type === "Water" && move.category !== "Status") forceLearn = true;
					if ((poke.randAbilities[0] === "Overgrow") && universalGrass.includes(moveid) && move.type === "Grass" && move.category !== "Status") forceLearn = true;
					if ((poke.randAbilities[0] === "Swarm") && universalBug.includes(moveid) && move.type === "Bug" && move.category !== "Status") forceLearn = true;
					if ((poke.randAbilities[0] === "Sand Force") && universalRock.includes(moveid) && move.type === "Rock" && move.category !== "Status") forceLearn = true;
					if ((poke.randAbilities[0] === "Sand Force") && universalGround.includes(moveid) && move.type === "Ground" && move.category !== "Status") forceLearn = true;
					if ((poke.randAbilities[0] === "Sand Force") && universalSteel.includes(moveid) && move.type === "Steel" && move.category !== "Status") forceLearn = true;
					if (forceLearn && synergyMove !== -1) synergyMove = 1;
					// mark moves as synergistic only if non-universal

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
					let asterisk = false;
					if (!learned || !include) {
						if (forceLearn) {
							asterisk = true;
							learned = true;
							include = true;
							if (genVTms.includes(moveid) && !postgameTms.includes(moveid)) learnedTm = true;
						} else {
							continue;
						}
					}
					// (copy the above when ready)
					if (!learnedLvUp && ['grasspledge', 'firepledge', 'waterpledge', 'hydrocannon', 'frenzyplant', 'blastburn'].includes(moveid)) continue;
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
					if (asterisk) moveName += `*`;
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

					// NEW SECTION: "SECOND MOVE"
					let secondMove = null;
					if (levelLearned < 101) {
						const eligibleMoves: string[] = [];
						for (const section in moveGroups) {
							if (eligibleMoves.length) continue;
							if (!moveGroups[section].includes(moveid)) continue;
							for (const altmoveid of moveGroups[section]) {
								if (hms.includes(altmoveid)) continue; // never add these to level-up
								if (usedSecondMoves.includes(altmoveid)) continue;

								/*
								// don't consider a move if you're just going to skip it later anyway
								if (levelLearned > 14 && ['frustration', 'workup'].includes(altmoveid)) continue;
								if (levelLearned > 20 && ['return', 'thief', 'rocksmash', 'venoshock'].includes(altmoveid)) continue;
								if (levelLearned > 27 && ['attract', 'rest', 'flash', 'strugglebug'].includes(altmoveid)) continue;
								if (levelLearned > 34 && ['dig', 'rocktomb', 'echoedvoice', 'thunderwave', 'gyroball', 'lightscreen', 'reflect', 'payback', 'snarl', 'voltswitch'].includes(altmoveid)) continue;
								if (levelLearned > 37 && ['embargo', 'covet', 'bugbite', 'drillrun', 'bounce', 'signalbeam', 'ironhead', 'superfang', 'uproar', 'seedbomb', 'dualchop', 'lowkick', 'gunkshot', 'thunderpunch', 'firepunch', 'icepunch', 'bulldoze'].includes(altmoveid)) continue;
								if (levelLearned > 44 && ['energyball', 'fling', 'torment', 'rockslide', 'hail', 'sunnyday', 'raindance', 'sandstorm', 'skydrop', 'xscissor', 'willowisp', 'shadowclaw', 'acrobatics'].includes(altmoveid)) continue;
								if (levelLearned > 55 && ['aerialace', 'chargebeam', 'shadowball', 'rockpolish', 'falseswipe', 'psychic', 'blizzard', 'thunder', 'fireblast', 'hyperbeam', 'gigaimpact', 'lastresort', 'irondefense', 'magnetrise', 'magiccoat', 'block', 'hypervoice', 'electroweb', 'icywind', 'aquatail', 'earthpower', 'zenheadbutt', 'foulplay', 'superpower', 'gravity', 'dragonpulse', 'darkpulse', 'dragontail'].includes(altmoveid)) continue;
								if (levelLearned > 58 && ['facade', 'bind', 'snore', 'healbell', 'knockoff', 'synthesis', 'roost', 'skyattack', 'roleplay', 'heatwave', 'gigadrain', 'drainpunch', 'painsplit', 'tailwind', 'scald'].includes(altmoveid)) continue;
								if (levelLearned > 66 && ['toxic', 'retaliate', 'icebeam', 'psyshock', 'flamethrower', 'roar', 'taunt', 'trickroom', 'honeclaws', 'wildcharge', 'thunderbolt'].includes(altmoveid)) continue;
								if (levelLearned > 70 && genVTms.includes(altmoveid)) continue;
								*/
								// actually, I don't want to enforce this because they can be good flavor - I prefer just marking them with the option to skip if I need more space

								// disallow post-Gen V moves that I don't think I can copy
								if (!this.dataCache.Moves[altmoveid]) console.log(altmoveid);
								if (this.dataCache.Moves[altmoveid] && this.dataCache.Moves[altmoveid].num && this.dataCache.Moves[altmoveid].num > 559 && !movesAfterGenV.includes(altmoveid)) continue;
								if (move.category && this.dataCache.Moves[altmoveid].category !== move.category) continue;
								// if (moveid === altmoveid) continue;
								// it's okay to randomize to the same thing, but...
								if (this.dataCache.Moves[altmoveid] && this.dataCache.Moves[altmoveid].type) {
									if (learnsetTypes.includes(this.dataCache.Moves[altmoveid].type)) eligibleMoves.push(altmoveid);
									else if (learnsetTypes.includes("Fighting") && (altmoveid === "meditate" || altmoveid === "workup" || altmoveid === "wideguard" || altmoveid === "acupressure" || altmoveid === "foresight" || altmoveid === "headlongrush" || altmoveid === "payback" || altmoveid === "chipaway" || altmoveid === "firepunch" || altmoveid === "icepunch" || altmoveid === "thunderpunch" || altmoveid === "poisonjab" || altmoveid === "bounce")) eligibleMoves.push(altmoveid);
									else if ((learnsetTypes.includes("Rock") || learnsetTypes.includes("Steel")) && (altmoveid === "sharpen" || altmoveid === "irondefense" || altmoveid === "selfdestruct" || altmoveid === "explosion" || altmoveid === "spikecannon" || altmoveid === "bulldoze")) eligibleMoves.push(altmoveid);
									else if (learnsetTypes.includes("Grass") && (altmoveid === "growth" || altmoveid === "sweetscent" || altmoveid === "ragepowder" || altmoveid === "sunnyday" || altmoveid === "poisonpowder" || altmoveid === "watersport" || altmoveid === "barrage" || altmoveid === "swordsdance" || altmoveid === "secretpower")) eligibleMoves.push(altmoveid);
									else if (learnsetTypes.includes("Ground") && (altmoveid === "rocktomb" || altmoveid === "rockslide" || altmoveid === "lavaplume")) eligibleMoves.push(altmoveid);
									else if (learnsetTypes.includes("Dark") && (altmoveid === "howl" || altmoveid === "mudslap") || altmoveid === "spiritbreak") eligibleMoves.push(altmoveid);
									else if ((learnsetTypes.includes("Fire") || learnsetTypes.includes("Poison")) && altmoveid === "smokescreen") eligibleMoves.push(altmoveid);
									else if (learnsetTypes.includes("Steel") && (altmoveid === "sonicboom" || altmoveid === "voltswitch" || altmoveid === "zapcannon" || altmoveid === "supercellslam" || altmoveid === "horndrill")) eligibleMoves.push(altmoveid);
									else if ((learnsetTypes.includes("Poison") || learnsetTypes.includes("Ghost")) && (altmoveid === "memento" || altmoveid === "meanlook")) eligibleMoves.push(altmoveid);
									else if ((learnsetTypes.includes("Flying") || learnsetTypes.includes("Electric")) && (altmoveid === "raindance")) eligibleMoves.push(altmoveid);
									else if ((learnsetTypes.includes("Ground") || learnsetTypes.includes("Steel")) && (altmoveid === "sandstorm")) eligibleMoves.push(altmoveid);
									else if (learnsetTypes.includes("Poison") && altmoveid === "glare") eligibleMoves.push(altmoveid);
									else if (learnsetTypes.includes("Electric") && (altmoveid === "signalbeam" || altmoveid === "sonicboom")) eligibleMoves.push(altmoveid);
									else if (learnsetTypes.includes("Fire") && altmoveid === "scorchingsands") eligibleMoves.push(altmoveid);
									else if (learnsetTypes.includes("Normal") && (altmoveid === "jumpkick" || altmoveid === "agility")) eligibleMoves.push(altmoveid);
									else if (learnsetTypes.includes("Bug") && altmoveid === "Guillotine") eligibleMoves.push(altmoveid);
									else if (learnsetTypes.includes("Ghost") && (altmoveid === "willowisp" || altmoveid === "skittersmack" || altmoveid === "suckerpunch")) eligibleMoves.push(altmoveid);
									else if (learnsetTypes.includes("Water") && (altmoveid === "iciclespear" || altmoveid === "icywind")) eligibleMoves.push(altmoveid);
									else if (learnsetTypes.includes("Psychic") && (altmoveid === "lovelykiss" || altmoveid === "mindreader" || altmoveid === "aurasphere")) eligibleMoves.push(altmoveid);
									else if (learnsetTypes.includes("Flying") && (altmoveid === "whirlwind" || altmoveid === "furyattack" || altmoveid === "uturn" || altmoveid === "drillrun" || altmoveid === "heatwave")) eligibleMoves.push(altmoveid);
									else if (learnsetTypes.includes("Fairy") && (altmoveid === "wish" || altmoveid === "captivate" || altmoveid === "healingwish" || altmoveid === "sing" || altmoveid === "healpulse" || altmoveid === "aromatherapy" || altmoveid === "present" || altmoveid === "covet" || altmoveid === "psyshock")) eligibleMoves.push(altmoveid);
								}
							}
							if (eligibleMoves.length) continue;
							for (const altmoveid of moveGroups[section]) {
								if (hms.includes(altmoveid)) continue; // never add these to level-up
								if (usedSecondMoves.includes(altmoveid)) continue;

								/*
								// don't consider a move if you're just going to skip it later anyway
								if (levelLearned > 14 && ['frustration', 'workup'].includes(altmoveid)) continue;
								if (levelLearned > 20 && ['return', 'thief', 'rocksmash', 'venoshock'].includes(altmoveid)) continue;
								if (levelLearned > 27 && ['attract', 'rest', 'flash', 'strugglebug'].includes(altmoveid)) continue;
								if (levelLearned > 34 && ['dig', 'rocktomb', 'echoedvoice', 'thunderwave', 'gyroball', 'lightscreen', 'reflect', 'payback', 'snarl', 'voltswitch'].includes(altmoveid)) continue;
								if (levelLearned > 37 && ['embargo', 'covet', 'bugbite', 'drillrun', 'bounce', 'signalbeam', 'ironhead', 'superfang', 'uproar', 'seedbomb', 'dualchop', 'lowkick', 'gunkshot', 'thunderpunch', 'firepunch', 'icepunch', 'bulldoze'].includes(altmoveid)) continue;
								if (levelLearned > 44 && ['energyball', 'fling', 'torment', 'rockslide', 'hail', 'sunnyday', 'raindance', 'sandstorm', 'skydrop', 'xscissor', 'willowisp', 'shadowclaw', 'acrobatics'].includes(altmoveid)) continue;
								if (levelLearned > 55 && ['aerialace', 'chargebeam', 'shadowball', 'rockpolish', 'falseswipe', 'psychic', 'blizzard', 'thunder', 'fireblast', 'hyperbeam', 'gigaimpact', 'lastresort', 'irondefense', 'magnetrise', 'magiccoat', 'block', 'hypervoice', 'electroweb', 'icywind', 'aquatail', 'earthpower', 'zenheadbutt', 'foulplay', 'superpower', 'gravity', 'dragonpulse', 'darkpulse', 'dragontail'].includes(altmoveid)) continue;
								if (levelLearned > 58 && ['facade', 'bind', 'snore', 'healbell', 'knockoff', 'synthesis', 'roost', 'skyattack', 'roleplay', 'heatwave', 'gigadrain', 'drainpunch', 'painsplit', 'tailwind', 'scald'].includes(altmoveid)) continue;
								if (levelLearned > 66 && ['toxic', 'retaliate', 'icebeam', 'psyshock', 'flamethrower', 'roar', 'taunt', 'trickroom', 'honeclaws', 'wildcharge', 'thunderbolt'].includes(altmoveid)) continue;
								if (levelLearned > 70 && genVTms.includes(altmoveid)) continue;
								*/
								// actually, I don't want to enforce this because they can be good flavor - I prefer just marking them with the option to skip if I need more space

								// disallow post-Gen V moves that I don't think I can copy
								if (!this.dataCache.Moves[altmoveid]) console.log(altmoveid);
								if (this.dataCache.Moves[altmoveid] && this.dataCache.Moves[altmoveid].num && this.dataCache.Moves[altmoveid].num > 559 && !movesAfterGenV.includes(altmoveid)) continue;
								if (this.dataCache.Moves[altmoveid] && this.dataCache.Moves[altmoveid].type) {
									if (learnsetTypes.includes(this.dataCache.Moves[altmoveid].type)) eligibleMoves.push(altmoveid);
									else if (learnsetTypes.includes("Fighting") && (altmoveid === "meditate" || altmoveid === "workup" || altmoveid === "wideguard" || altmoveid === "acupressure" || altmoveid === "foresight" || altmoveid === "headlongrush" || altmoveid === "payback" || altmoveid === "chipaway" || altmoveid === "firepunch" || altmoveid === "icepunch" || altmoveid === "thunderpunch" || altmoveid === "poisonjab" || altmoveid === "bounce")) eligibleMoves.push(altmoveid);
									else if ((learnsetTypes.includes("Rock") || learnsetTypes.includes("Steel")) && (altmoveid === "sharpen" || altmoveid === "irondefense" || altmoveid === "selfdestruct" || altmoveid === "explosion" || altmoveid === "spikecannon" || altmoveid === "bulldoze")) eligibleMoves.push(altmoveid);
									else if (learnsetTypes.includes("Grass") && (altmoveid === "growth" || altmoveid === "sweetscent" || altmoveid === "ragepowder" || altmoveid === "sunnyday" || altmoveid === "poisonpowder" || altmoveid === "watersport" || altmoveid === "barrage" || altmoveid === "swordsdance" || altmoveid === "secretpower")) eligibleMoves.push(altmoveid);
									else if (learnsetTypes.includes("Ground") && (altmoveid === "rocktomb" || altmoveid === "rockslide" || altmoveid === "lavaplume")) eligibleMoves.push(altmoveid);
									else if (learnsetTypes.includes("Dark") && (altmoveid === "howl" || altmoveid === "mudslap")) eligibleMoves.push(altmoveid);
									else if ((learnsetTypes.includes("Fire") || learnsetTypes.includes("Poison")) && altmoveid === "smokescreen") eligibleMoves.push(altmoveid);
									else if (learnsetTypes.includes("Steel") && (altmoveid === "sonicboom" || altmoveid === "voltswitch" || altmoveid === "zapcannon" || altmoveid === "supercellslam" || altmoveid === "horndrill")) eligibleMoves.push(altmoveid);
									else if ((learnsetTypes.includes("Poison") || learnsetTypes.includes("Ghost")) && (altmoveid === "memento" || altmoveid === "meanlook")) eligibleMoves.push(altmoveid);
									else if ((learnsetTypes.includes("Flying") || learnsetTypes.includes("Electric")) && (altmoveid === "raindance")) eligibleMoves.push(altmoveid);
									else if ((learnsetTypes.includes("Ground") || learnsetTypes.includes("Steel")) && (altmoveid === "sandstorm")) eligibleMoves.push(altmoveid);
									else if (learnsetTypes.includes("Poison") && altmoveid === "glare") eligibleMoves.push(altmoveid);
									else if (learnsetTypes.includes("Electric") && (altmoveid === "signalbeam" || altmoveid === "sonicboom")) eligibleMoves.push(altmoveid);
									else if (learnsetTypes.includes("Fire") && altmoveid === "scorchingsands") eligibleMoves.push(altmoveid);
									else if (learnsetTypes.includes("Normal") && (altmoveid === "jumpkick" || altmoveid === "agility")) eligibleMoves.push(altmoveid);
									else if (learnsetTypes.includes("Bug") && altmoveid === "Guillotine") eligibleMoves.push(altmoveid);
									else if (learnsetTypes.includes("Ghost") && (altmoveid === "willowisp" || altmoveid === "skittersmack" || altmoveid === "suckerpunch")) eligibleMoves.push(altmoveid);
									else if (learnsetTypes.includes("Water") && (altmoveid === "iciclespear" || altmoveid === "icywind")) eligibleMoves.push(altmoveid);
									else if (learnsetTypes.includes("Psychic") && (altmoveid === "lovelykiss" || altmoveid === "mindreader" || altmoveid === "aurasphere")) eligibleMoves.push(altmoveid);
									else if (learnsetTypes.includes("Flying") && (altmoveid === "whirlwind" || altmoveid === "furyattack" || altmoveid === "uturn" || altmoveid === "drillrun" || altmoveid === "heatwave")) eligibleMoves.push(altmoveid);
								}
							}
						}

						if (eligibleMoves.length) {
							// form change move security
							if (["Kyurem", "Kyurem-Black", "Kyurem-White"].includes(poke.name) && ["scaryface", "glaciate", "fusionflare", "fusionbolt", "iceburn", "freezeshock"].includes(moveid)) continue;
							if (["Hoopa", "Hoopa-Unbound"].includes(poke.name) && ["hyperspacehole", "hyperspacefury"].includes(moveid)) continue;
							if (["Calyrex", "Necrozma"].includes(poke.name) && moveid === "confusion") continue;
							if (poke.name === "Rotom" && moveid === "thundershock") continue;

							let randomMove = eligibleMoves[Math.floor(Math.random() * eligibleMoves.length)];
							// ... if you do randomize to the same thing, it doesn't count!
							if (randomMove !== moveid && !alreadyLvUpMoves.includes(randomMove)) {
								usedSecondMoves.push(randomMove);
								secondMove = this.dataCache.Moves[randomMove];
							}
						}
					}

					if (secondMove && genVTms.includes(this.toID(secondMove.name))) {
						let secondMoveName = secondMove.tmid ? secondMove.tmid : `x ` + secondMove.name;
						let secondMoveLearnedByTmAlready = false;
						if (learnset[this.toID(secondMove.name)]) {
							for (const source of learnset[this.toID(secondMove.name)]) {
								if (parseInt(source.charAt(0)) === 5 && (source.charAt(1) === 'T' || source.charAt(1) === 'M')) {
									secondMoveLearnedByTmAlready = true;
								}
							}
						}
						secondMoveName += `*`; // all of them are asterisks and missing it causes them to appear twice
						if (!secondMoveLearnedByTmAlready && !poke.additionalTms.includes(secondMoveName)) poke.additionalTms.push(secondMoveName);
					}

					// resume
					let levelUpSpaces = false;
					if (genVTms.includes(moveid)) {
						poke.listOfCertainMoves.push(moveid);
						moveName = move.tmid ? move.tmid : `x ` + move.name;
						if (asterisk) moveName += `*`;
						if (!genVLearnedTmAlready && !poke.additionalTms.includes(moveName)) poke.additionalTms.push(moveName); // make sure to identify TMs that need to be added manually
						if (levelLearned === 101 && !postgameTms.includes(moveid)) continue; // skip level 0 moves if they're on the Gen V TM/tutor list
						// reset the tmid label (thanks Raticate)
						moveName = move.name;
						if (asterisk) moveName += `*`;
					}
					if (move.num && move.num > 559) {
						if (movesAfterGenV.includes(moveid)) moveName = moveName + ` (new)`; // identify post-Gen V moves
						else {
							moveName = moveName + ` (x)`;
							if (!secondMove) levelUpSpaces = true;
						}
					}
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
						if (asterisk) moveName += `*`;
						if (move.num && move.num > 559) {
							if (movesAfterGenV.includes(moveid)) poke.backports.push(moveName);
						} else {
							if (pushLevelUp.includes(moveid) || (pushLevelUpPrankster.includes(moveid) && moveAbilitySet.includes("Prankster"))) {
								poke.recommendedLvUp.push(moveName);
							} else if (synergyMove === 1) {
								// forced moves
								poke.forcedMoves.push(move.name); // not moveName because everything in this section would have an asterisk anyway
							} else {
								poke.learnsetCumulative.learnset[levelLearned].movesLearned.push(moveName);
							}
						}
					} else {
						// if there's a second move
						if (secondMove) moveName += ` -> ` + secondMove.name;
						if (secondMove && secondMove.num && secondMove.num > 559) {
							if (movesAfterGenV.includes(this.toID(secondMove.name))) moveName = moveName + ` (new)`; // identify post-Gen V moves
							else {
								moveName = moveName + ` (x)`;
								levelUpSpaces = true;
							}
						}

						let skip = false;
						let skipMove = moveid;
						if (secondMove) skipMove = this.toID(secondMove.name);
						if (levelLearned > 14 && ['frustration', 'workup'].includes(skipMove)) skip = true;
						if (levelLearned > 20 && ['return', 'thief', 'rocksmash', 'venoshock'].includes(skipMove)) skip = true;
						if (levelLearned > 27 && ['attract', 'rest', 'flash', 'strugglebug'].includes(skipMove)) skip = true;
						if (levelLearned > 34 && ['dig', 'rocktomb', 'echoedvoice', 'thunderwave', 'gyroball', 'lightscreen', 'reflect', 'payback', 'snarl', 'voltswitch'].includes(skipMove)) skip = true;
						if (levelLearned > 37 && ['embargo', 'covet', 'bugbite', 'drillrun', 'bounce', 'signalbeam', 'ironhead', 'superfang', 'uproar', 'seedbomb', 'dualchop', 'lowkick', 'gunkshot', 'thunderpunch', 'firepunch', 'icepunch', 'bulldoze'].includes(skipMove)) skip = true;
						if (levelLearned > 44 && ['energyball', 'fling', 'torment', 'rockslide', 'hail', 'sunnyday', 'raindance', 'sandstorm', 'skydrop', 'xscissor', 'willowisp', 'shadowclaw', 'acrobatics'].includes(skipMove)) skip = true;
						if (levelLearned > 55 && ['aerialace', 'chargebeam', 'shadowball', 'rockpolish', 'falseswipe', 'psychic', 'blizzard', 'thunder', 'fireblast', 'hyperbeam', 'gigaimpact', 'lastresort', 'irondefense', 'magnetrise', 'magiccoat', 'block', 'hypervoice', 'electroweb', 'icywind', 'aquatail', 'earthpower', 'zenheadbutt', 'foulplay', 'superpower', 'gravity', 'dragonpulse', 'darkpulse', 'dragontail'].includes(skipMove)) skip = true;
						if (levelLearned > 58 && ['facade', 'bind', 'snore', 'healbell', 'knockoff', 'synthesis', 'roost', 'skyattack', 'roleplay', 'heatwave', 'gigadrain', 'drainpunch', 'painsplit', 'tailwind', 'scald'].includes(skipMove)) skip = true;
						if (levelLearned > 66 && ['toxic', 'retaliate', 'icebeam', 'psyshock', 'flamethrower', 'roar', 'taunt', 'trickroom', 'honeclaws', 'wildcharge', 'thunderbolt'].includes(skipMove)) skip = true;
						if (levelLearned > 70 && genVTms.includes(skipMove)) skip = true;
						if (hms.includes(skipMove)) skip = true;
						if (skip) {
							moveName += ` (can skip)`; // don't interfere with randomizing to it, but this is useful information for the spreadsheet
							levelUpSpaces = true;
						}

						if (secondMove) {
							moveName += ` ~ ` + secondMove.type;
							poke.listOfCertainMoves.push(this.toID(secondMove.name));
						} else {
							moveName += ` ~ ` + move.type;
							poke.listOfCertainMoves.push(moveid);
						}

						// either way
						if (levelUpSpaces) poke.extraLevelUpSpaces++;
						poke.learnsetCumulative.learnset[levelLearned].movesLearned.push(moveName);
					}
				}





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

				const pokeTypes: string[] = [];
				pokeTypes.push(poke.chosenType.type1);
				if (poke.chosenType.type2 !== poke.chosenType.type1) pokeTypes.push(poke.chosenType.type2);

				const abilityCheck: string[] = [];
				abilityCheck.push(poke.randAbilities[0]);
				if (poke.randAbilities[1]) abilityCheck.push(poke.randAbilities[1]);
				if (poke.randAbilities[3]) moveAbilitySet.push(poke.randAbilities[3]);

				poke.hpTarget = poke.baseStats.hp;
				poke.atkTarget = poke.baseStats.atk;
				poke.defTarget = poke.baseStats.def;
				poke.spaTarget = poke.baseStats.spa;
				poke.spdTarget = poke.baseStats.spd;
				poke.speTarget = poke.baseStats.spe;
				let hugePower = false;
				for (const idNo in poke.abilities) if (["Huge Power", "Pure Power"].includes(poke.abilities[idNo])) hugePower = true;
				if (hugePower) poke.atkTarget *= 2; // will be halved again later

				// step 1: surface-level type themes (optional but as many as I like)
				// there's plenty more randomization later, so these don't need a fixed total at all
				// actually, I think the less I do here, the more random the results get, which is probably more fun to be honest
				if (pokeTypes.includes("Fire")) {
					poke.defTarget += 10;
				}
				if (pokeTypes.includes("Water")) {
					poke.hpTarget += 10;
				}
				if (pokeTypes.includes("Electric") || pokeTypes.includes("Flying")) {
					poke.speTarget += 10;
				}
				if (pokeTypes.includes("Fighting")) {
					poke.atkTarget += 10;
					poke.defTarget += 10;
					poke.spaTarget -= 10;
					poke.spdTarget -= 10;
				}
				if (pokeTypes.includes("Poison")) {
					poke.defTarget += 10;
				}
				if (pokeTypes.includes("Ground")) {
					if (poke.spdTarget > 75 && (Math.random() > 0.5)) poke.spdTarget = 75;
				}
				if (pokeTypes.includes("Psychic")) {
					poke.atkTarget -= 10;
					poke.defTarget -= 10;
					poke.spaTarget += 10;
					poke.spdTarget += 10;
				}
				if (pokeTypes.includes("Rock")) {
					poke.defTarget += 20;
					poke.spdTarget -= 10;
					poke.speTarget -= 10;
				}
				if (pokeTypes.includes("Ghost")) {
					poke.hpTarget -= 10;
				}
				if (pokeTypes.includes("Steel")) {
					poke.defTarget += 10;
					poke.spdTarget += 10;
				}
				if (poke.chosenType.type1 === poke.chosenType.type2) poke.speTarget += 10;
				// these are basically just random examples to see what it looks like; they don't matter yet

				// step 2: mixed attacker-ification
				if (!(poke.eggGroups[0] === 'Bug' || (poke.eggGroups[1] && poke.eggGroups[1] === 'Bug'))) { // these guys can minmax I guess
					if (poke.atkTarget + 20 < poke.spaTarget) {
						poke.atkTarget = poke.spaTarget - 20;
					} else if (poke.spaTarget + 20 < poke.atkTarget) {
						poke.spaTarget = poke.atkTarget - 20;
					}
				}

				// step 3: randomizer stat moment
				const randomizerStatMoment: string[] = ['hpTarget', 'atkTarget', 'defTarget', 'spaTarget', 'spdTarget', 'speTarget'];
				poke[randomizerStatMoment[Math.floor(Math.random() * randomizerStatMoment.length)]] = (Math.floor(Math.random() * 240) + 5);

				// step 4: mechanics/balance pass
				if (poke.name === "Shedinja") poke.hpTarget = 1;

				// physical/special bias
				// this bit is a buff, not a nerf, so it values the random Ability only
				let bias = null;
				if (['Water Veil', 'Hyper Cutter', 'Clear Body', 'White Smoke', 'Defiant', 'Moxie', 'Justified', 'Sap Sipper', 'Anger Point', 'Guts', 'Toxic Boost', 'Hustle', 'Reckless', 'Iron Fist'].includes(poke.randAbilities[0])) bias = "Atk";
				if (['Skill Link'].includes(poke.randAbilities[0]) && !poke.listOfCertainMoves.includes('watershuriken')) bias = "Atk";
				if (['Own Tempo'].includes(poke.randAbilities[0]) && !poke.listOfCertainMoves.includes('petaldance')) bias = "Atk";
				if (['Lightning Rod', 'Storm Drain', 'Flare Boost', 'Solar Power', 'Plus', 'Minus'].includes(poke.randAbilities[0])) bias = "SpA";
				if ((bias === "Atk" && poke.atkTarget < poke.spaTarget) || (bias === "SpA" && poke.atkTarget > poke.spaTarget)) { // I HAD THIS BACKWARDS sjdfhgdmfngbh
					let newAtk = poke.spaTarget;
					let newSpA = poke.atkTarget;
					poke.atkTarget = newAtk;
					poke.spaTarget = newSpA;
				}

				if (pokeTypes.includes("Dragon") && poke.spaTarget < poke.atkTarget && poke.spaTarget < 80) poke.spaTarget = 80;
				if (pokeTypes.includes("Electric") && poke.spaTarget < poke.atkTarget && poke.spaTarget < 95) poke.spaTarget = 95;
				if (poke.randAbilities[0] === "Defeatist" && poke.speTarget < 115) poke.speTarget = 115;
				if (poke.randAbilities[0] === "Analytic" && poke.speTarget > 40) poke.speTarget = 40;

				// offense limits
				// only either Speed or offense has to adhere to the limits, not necessarily both
				let maxAtk = 250;
				let maxSpa = 250;
				let maxSpe = 250;
				if (!poke.chosenType.lowSynergy) {
					if (maxAtk > 109) maxAtk = 109;
					if (maxSpa > 109) maxSpa = 109;
					if (maxSpe > 109) maxSpe = 109;
				}
				if (abilityCheck.includes("Hustle")) {
					if (!poke.chosenType.lowSynergy) {
						if (maxAtk > 75) maxAtk = 75;
						if (maxSpe > 75) maxSpe = 75;
					} else {
						if (maxAtk > 109) maxAtk = 109;
						if (maxSpe > 109) maxSpe = 109;
					}
				}
				if (abilityCheck.includes("Guts") || abilityCheck.includes("Toxic Boost")) {
					if (!poke.chosenType.lowSynergy) {
						if (maxAtk > 90) maxAtk = 90;
						if (maxSpe > 60) maxSpe = 60;
					} else {
						if (maxAtk > 100) maxAtk = 100;
						if (maxSpe > 70) maxSpe = 70;
					}
				}
				if (abilityCheck.includes("Flare Boost") || abilityCheck.includes("Sheer Force")) {
					if (!poke.chosenType.lowSynergy) {
						if (maxSpa > 90) maxSpa = 90;
						if (maxSpe > 60) maxSpe = 60;
					} else {
						if (maxSpa > 100) maxSpa = 100;
						if (maxSpe > 70) maxSpe = 70;
					}
				}
				if (abilityCheck.includes("Adaptability")) {
					if (!poke.chosenType.lowSynergy) {
						if (maxAtk > 90) maxAtk = 90;
						if (maxSpa > 90) maxSpa = 90;
						if (maxSpe > 50) maxSpe = 50;
					} else {
						if (maxAtk > 95) maxAtk = 95;
						if (maxSpa > 95) maxSpa = 95;
						if (maxSpe > 90) maxSpe = 90;
					}
				}
				if (abilityCheck.includes("Simple")) {
					if (maxAtk > 90) maxAtk = 90;
					if (maxSpa > 90) maxSpa = 90;
					if (maxSpe > 90) maxSpe = 90;
					if (poke.listOfCertainMoves.includes('bulkup') || poke.listOfCertainMoves.includes('coil') || poke.listOfCertainMoves.includes('howl') || poke.listOfCertainMoves.includes('poweruppunch')) {
						if (poke.atkTarget > 90) poke.atkTarget = 90;
					}
					if (poke.listOfCertainMoves.includes('calmmind') || poke.listOfCertainMoves.includes('torchsong')) {
						if (poke.atkTarget > 90) poke.atkTarget = 90;
					}
					if (poke.listOfCertainMoves.includes('dragondance') || poke.listOfCertainMoves.includes('shiftgear') || poke.listOfCertainMoves.includes('tidyup') || poke.listOfCertainMoves.includes('victorydance')) {
						if (poke.atkTarget > 90) poke.atkTarget = 90;
						if (maxAtk > 50) maxAtk = 50;
						if (maxSpe > 50) maxSpe = 50;
					}
					if (poke.listOfCertainMoves.includes('quiverdance') || poke.listOfCertainMoves.includes('geomancy')) {
						if (poke.spaTarget > 90) poke.spaTarget = 90;
						if (maxSpa > 50) maxSpa = 50;
						if (maxSpe > 50) maxSpe = 50;
					}
				}
				if (abilityCheck.includes("Contrary")) {
					// Superpower is universal for this
					if (pokeTypes.includes("Fighting")) {
						if (maxAtk > 80) maxAtk = 80;
						if (maxSpe > 50) maxSpe = 50;
					}
					const spaContrary = ['dracometeor', 'overheat', 'leafstorm', 'makeitrain'];
					let hasMove = false;
					for (const moveCheck of spaContrary) if (poke.listOfCertainMoves.includes(moveCheck) && this.dataCache.Moves[moveCheck].type && pokeTypes.includes(this.dataCache.Moves[moveCheck].type)) hasMove = true;
					if (hasMove) {
						if (maxSpa > 75) maxSpa = 75;
						if (maxSpe > 45) maxSpe = 45;
					}
				}
				if (poke.speTarget > maxSpe && (poke.atkTarget > maxAtk || poke.spaTarget > maxSpa)) {
					if ((poke.speTarget - maxSpe > poke.atkTarget - maxAtk) && (poke.speTarget - maxSpe > poke.spaTarget - maxSpa)) {
						if (poke.atkTarget > maxAtk) poke.atkTarget = maxAtk;
						if (poke.spaTarget > maxSpa) poke.spaTarget = maxSpa;
					} else {
						poke.speTarget = maxSpe;
					}
				}

				if (abilityCheck.includes("Huge Power") || abilityCheck.includes("Pure Power")) {
					if (poke.spaTarget > poke.atkTarget) poke.atkTarget = poke.spaTarget; // didn't want to swap at the earlier opportunity because having SpA intact is cool
					poke.atkTarget /= 2; // this does *not* cancel out Huge Power completely, but that's on purpose
					if (50 > poke.atkTarget > 24.5) poke.atkTarget = 50; // if it was at least 50 before but isn't now, elevate to 50
					maxAtk /= 2;
					if (50 > maxAtk) maxAtk = 50;
				}

				// this bit is a buff, not a nerf, so it values the random Ability only
				if (['Speed Boost', 'Steadfast', 'Rattled', 'Motor Drive', 'Quick Feet', 'Weak Armor'].includes(poke.randAbilities[0]) && poke.speTarget < 85) poke.speTarget = 85; // +1 Abilities
				if (['Unburden', 'Chlorophyll', 'Swift Swim', 'Sand Rush'].includes(poke.randAbilities[0]) && poke.speTarget < 75) poke.speTarget = 75; // +2 Abilities
				if (poke.randAbilities[0] === "Weak Armor") poke.defTarget = poke.baseStats.def + 50; // and just for fun, let it max this out

				// step 5: stat increase assignment (mostly random)
				poke.randHp = poke.baseStats.hp;
				poke.randAtk = poke.baseStats.atk;
				poke.randDef = poke.baseStats.def;
				poke.randSpA = poke.baseStats.spa;
				poke.randSpD = poke.baseStats.spd;
				poke.randSpe = poke.baseStats.spe;

				poke.hpDelta = 0;
				poke.atkDelta = 0;
				poke.defDelta = 0;
				poke.spaDelta = 0;
				poke.spdDelta = 0;
				poke.speDelta = 0;

				for (let i = 0; i < 12; i++) { // repeat until +60 or until all stats have hit their targets
					let eligibleStats: string[] = [];
					if (poke.name !== "Shedinja" && poke.hpDelta < 40 && (poke.randHp + poke.hpDelta + 5 < poke.hpTarget + 3) && (poke.randHp + poke.hpDelta < 251)) eligibleStats.push('hpDelta');
					if (poke.atkDelta < 40 && (poke.randAtk + poke.atkDelta + 5 < poke.atkTarget + 3) && (poke.randAtk + poke.atkDelta < 243)) eligibleStats.push('atkDelta');
					if (poke.defDelta < 40 && (poke.randDef + poke.defDelta + 5 < poke.defTarget + 3) && (poke.randDef + poke.defDelta < 243)) eligibleStats.push('defDelta');
					if (poke.spaDelta < 40 && (poke.randSpA + poke.spaDelta + 5 < poke.spaTarget + 3) && (poke.randSpA + poke.spaDelta < 243)) eligibleStats.push('spaDelta');
					if (poke.spdDelta < 40 && (poke.randSpD + poke.spdDelta + 5 < poke.spdTarget + 3) && (poke.randSpD + poke.spdDelta < 243)) eligibleStats.push('spdDelta');
					if (poke.speDelta < 40 && (poke.randSpe + poke.speDelta + 5 < poke.speTarget + 3) && (poke.randSpe + poke.speDelta < 243)) eligibleStats.push('speDelta');

					if (!eligibleStats.length) break;
					poke[eligibleStats[Math.floor(Math.random() * eligibleStats.length)]] += 5;
				}

				// step 6: stat decrease assignment (mostly guided)
				for (let i = 0; i < 12; i++) { // repeat until -60 unconditionally
					let eligibleStats: string[] = [];
					let minStat: string[] = [];
					poke.diffHp = poke.hpTarget - (poke.randHp + poke.hpDelta);
					poke.diffAtk = poke.atkTarget - (poke.randAtk + poke.atkDelta);
					poke.diffDef = poke.defTarget - (poke.randDef + poke.defDelta);
					poke.diffSpA = poke.spaTarget - (poke.randSpA + poke.spaDelta);
					poke.diffSpD = poke.spdTarget - (poke.randSpD + poke.spdDelta);
					poke.diffSpe = poke.speTarget - (poke.randSpe + poke.speDelta);

					if (poke.name !== "Shedinja" && poke.hpDelta > -40 && (poke.randHp + poke.hpDelta > 30)) eligibleStats.push('diffHp');
					if (poke.atkDelta > -40 && (poke.randAtk + poke.atkDelta > 5)) eligibleStats.push('diffAtk');
					if (poke.defDelta > -40 && (poke.randDef + poke.defDelta > 5)) eligibleStats.push('diffDef');
					if (poke.spaDelta > -40 && (poke.randSpA + poke.spaDelta > 5)) eligibleStats.push('diffSpA');
					if (poke.spdDelta > -40 && (poke.randSpD + poke.spdDelta > 5)) eligibleStats.push('diffSpD');
					if (poke.speDelta > -40 && (poke.randSpe + poke.speDelta > 5)) eligibleStats.push('diffSpe');

					if (!eligibleStats.length) {
						console.log(`something has no eligible stats to lower`);
						break; // this... should never happen? I think?
					}
					let min = 1000;
					for (const statCheck of eligibleStats) {
						if (min && (min < poke[statCheck])) continue; // skip if it's not at least tied with min
						if (min > poke[statCheck]) { // if this is a new minimum, replace the set
							min = poke[statCheck];
							minStat = [];
						}
						minStat.push(statCheck);
					}
					let chosenStat = minStat[Math.floor(Math.random() * minStat.length)];
					if (!chosenStat) {
						console.log(`no chosen stat to lower`);
						break;
					}
					if (chosenStat === 'diffHp') poke.hpDelta -=5;
					else if (chosenStat === 'diffAtk') poke.atkDelta -=5;
					else if (chosenStat === 'diffDef') poke.defDelta -=5;
					else if (chosenStat === 'diffSpA') poke.spaDelta -=5;
					else if (chosenStat === 'diffSpD') poke.spdDelta -=5;
					else if (chosenStat === 'diffSpe') poke.speDelta -=5;
					else console.log(chosenStat);
				}

				// step 7: BST correction final pass (mostly guided)
				let skipMaxCheck = false; // (at this point, it becomes random)
				for (let i = 0; i < 12; i++) { // repeat until +60 or until all stats have hit their targets
					if ((poke.hpDelta + poke.atkDelta + poke.defDelta + poke.spaDelta + poke.spdDelta + poke.speDelta) > 0) {
						console.log(poke.name + ` didn't lower stats as much as it raised them`);
						break;
					}
					if (poke.hpDelta + poke.atkDelta + poke.defDelta + poke.spaDelta + poke.spdDelta + poke.speDelta === 0) break; // ideal end state

					let eligibleStats: string[] = [];
					let maxStat: string[] = [];
					let diffHp = poke.hpTarget - (poke.randHp + poke.hpDelta);
					let diffAtk = poke.atkTarget - (poke.randAtk + poke.atkDelta);
					let diffDef = poke.defTarget - (poke.randDef + poke.defDelta);
					let diffSpA = poke.spaTarget - (poke.randSpA + poke.spaDelta);
					let diffSpD = poke.spdTarget - (poke.randSpD + poke.spdDelta);
					let diffSpe = poke.speTarget - (poke.randSpe + poke.speDelta);

					if (poke.name !== "Shedinja" && poke.hpDelta < 40 && (poke.randHp + poke.hpDelta < 251)) eligibleStats.push('diffHp');
					if (poke.defDelta < 40 && (poke.randDef + poke.defDelta < 243)) eligibleStats.push('diffDef');
					if (poke.spdDelta < 40 && (poke.randSpD + poke.spdDelta < 243)) eligibleStats.push('diffSpD');
					// continue to respect max stats: if Speed is over its threshold, don't raise Attack or SpA more, and...
					if (poke.atkDelta < 40 && (poke.randAtk + poke.atkDelta < 243) && (poke.randSpe + poke.speDelta < maxSpe + 1)) eligibleStats.push('diffAtk');
					if (poke.spaDelta < 40 && (poke.randSpA + poke.spaDelta < 243) && (poke.randSpe + poke.speDelta < maxSpe + 1)) eligibleStats.push('diffSpA');
					// ... if Attack or SpA is over its threshold, don't raise Speed more
					if (poke.speDelta < 40 && (poke.randSpe + poke.speDelta < 243) && (poke.randAtk + poke.atkDelta < maxAtk + 1) && (poke.randSpA + poke.spaDelta < maxSpa + 1)) eligibleStats.push('diffSpe');

					if (!eligibleStats.length) {
						console.log(`something has no eligible stats to raise`);
						break; // this... should never happen? I think?
					}
					let max = -1000;
					for (const statCheck of eligibleStats) {
						if (max && (max > poke[statCheck])) continue; // skip if it's not at least tied with max
						if (poke[statCheck] > max) { // if this is a new maximum, replace the set
							max = poke[statCheck];
							maxStat = [];
						}
						maxStat.push(statCheck);
					}
					if (max < 5) skipMaxCheck = true; // all targets met

					let chosenStat = eligibleStats[Math.floor(Math.random() * eligibleStats.length)];
					if (!skipMaxCheck) chosenStat = maxStat[Math.floor(Math.random() * maxStat.length)];
					if (!chosenStat) {
						console.log(`no chosen stat to raise`);
						break;
					}
					if (chosenStat === 'diffHp') poke.hpDelta +=5;
					if (chosenStat === 'diffAtk') poke.atkDelta +=5;
					if (chosenStat === 'diffDef') poke.defDelta +=5;
					if (chosenStat === 'diffSpA') poke.spaDelta +=5;
					if (chosenStat === 'diffSpD') poke.spdDelta +=5;
					if (chosenStat === 'diffSpe') poke.speDelta +=5;
				}

				if (poke.hpDelta + poke.atkDelta + poke.defDelta + poke.spaDelta + poke.spdDelta + poke.speDelta !== 0) console.log(poke.name + ` somehow didn't get the right BST`);
				poke.randHp = poke.baseStats.hp + poke.hpDelta;
				poke.randAtk = poke.baseStats.atk + poke.atkDelta;
				poke.randDef = poke.baseStats.def + poke.defDelta;
				poke.randSpA = poke.baseStats.spa + poke.spaDelta;
				poke.randSpD = poke.baseStats.spd + poke.spdDelta;
				poke.randSpe = poke.baseStats.spe + poke.speDelta;

				// just for point of comparison right now
				poke.crossHp = poke.hpTarget;
				poke.crossAtk = poke.atkTarget;
				poke.crossDef = poke.defTarget;
				poke.crossSpA = poke.spaTarget;
				poke.crossSpD = poke.spdTarget;
				poke.crossSpe = poke.speTarget;

/*
				// CROSSGEN STATS
				// todo: Speed

				let maxbst = (poke.randHp + poke.randAtk + poke.randDef + poke.randSpA + poke.randSpD + poke.randSpe + 30);
				if (540 > maxbst) maxbst = 540;
				if (
					poke.chosenType.type1 === "Dragon" || poke.chosenType.type2 === "Dragon" ||
					poke.types[0] === "Dragon" || (poke.types[1] && poke.types[1] === "Dragon") ||
					poke.eggGroups[0] === 'Dragon' || (poke.eggGroups[1] && poke.eggGroups[1] === 'Dragon')
				) maxbst = 600; // okay? okay
				// hey Iris is the Champion anyway
				
				maxbst -= 20; // ... but actually I want a completely random +20 at the end so

				let bonusBoost = 0;
				if (poke.crossSpA > poke.crossAtk) { // if it's special
					if (poke.baseStats.spa > poke.crossSpA) poke.crossSpA = poke.baseStats.spa;
					poke.crossSpA += 10; // do this regardless of how high it is beforehand
					if (poke.crossSpA < 100) poke.crossSpA += 10;
					if (poke.crossSpA < 100) poke.crossSpA += 10;
					if (poke.crossSpA < 100) poke.crossSpA += 10; // do this 3 times for a max of +40
					bonusBoost = poke.crossSpA - poke.randSpA;
				} else { // if it's physical (or mixed)
					if (poke.baseStats.atk > poke.crossAtk) poke.crossAtk = poke.baseStats.atk;
					poke.crossAtk += 10; // do this regardless of how high it is beforehand
					if (poke.crossAtk < 100) poke.crossAtk += 10;
					if (poke.crossAtk < 100) poke.crossAtk += 10;
					if (poke.crossAtk < 100) poke.crossAtk += 10; // do this 3 times for a max of +40
					bonusBoost = poke.crossAtk - poke.randAtk;
				}

				// set poke.crossSpe to a specific value, but I haven't determined how yet
				// so far, we're ignoring maxbst
				// ignore concerns about setup for either offense if the offense in question is less than ~80
				// check poke.listOfCertainMoves for convenience

				// uhh... default to 120 or the prior stage's Speed (whichever is greater), but almost nothing is gonna stay there
				let targetSpe = 120;
				if (poke.randSpe > 120) targetSpe = poke.randSpe;

				// nerf to 110 if any usable offensive setup
				// nerf to 100 if setup and dual-typed (with decent synergy?)
				if (poke.crossAtk > 79) {
					const setup = ['bulkup', 'clangoroussoul', 'coil', 'dragondance', 'growth', 'howl', 'noretreat', 'shiftgear', 'tidyup', 'victorydance'];
					let hasMove = false;
					for (const moveCheck of setup) if (poke.listOfCertainMoves.includes(moveCheck)) hasMove = true;
					if (hasMove) {
						targetSpe = 110;
						if (!poke.chosenType.lowSynergy) targetSpe = 100;
					}
				}
				if (poke.crossSpA > 79) {
					const setup = ['calmmind', 'clangoroussoul', 'growth', 'noretreat', 'torchsong', 'quiverdance'];
					let hasMove = false;
					for (const moveCheck of setup) if (poke.listOfCertainMoves.includes(moveCheck)) hasMove = true;
					if (hasMove) {
						targetSpe = 110;
						if (!poke.chosenType.lowSynergy) targetSpe = 100;
					}
				}

				// nerf to 90 if setup and the offensive setup is +2
				if (poke.crossAtk > 79) {
					const setup = ['swordsdance', 'bellydrum'];
					let hasMove = false;
					for (const moveCheck of setup) if (poke.listOfCertainMoves.includes(moveCheck)) hasMove = true;
					if (hasMove) targetSpe = 90;
				}
				if (poke.crossSpA > 79) {
					const setup = ['nastyplot', 'tailglow'];
					let hasMove = false;
					for (const moveCheck of setup) if (poke.listOfCertainMoves.includes(moveCheck)) hasMove = true;
					if (hasMove) targetSpe = 90;
				}

				// nerf to 85 if an offense is ~130+
				if (poke.crossAtk > 129 || poke.crossSpA > 129) targetSpe = 85;
				// or if there's a matching physical STAB of 120 BP+
				if (poke.crossAtk > 99) {
					const setup = ['headsmash', 'highjumpkick', 'boltstrike', 'woodhammer', 'wavecrash', 'volttackle', 'thrash', 'outrage', 'ragingfury', 'shadowforce', 'pyroball', 'precipiceblades', 'powerwhip', 'megahorn', 'megakick', 'headlongrush', 'headcharge', 'gunkshot', 'glaiverush', 'glaciallance', 'flareblitz', 'dragonascent', 'doubleedge', 'closecombat', 'bravebird', 'axekick'];
					let hasMove = false;
					for (const moveCheck of setup) if (poke.listOfCertainMoves.includes(moveCheck) && this.dataCache.Moves[moveCheck].type && pokeTypes.includes(this.dataCache.Moves[moveCheck].type)) hasMove = true;
					if (hasMove) targetSpe = 85;
				}
				if (poke.crossSpA > 99) {
					const setup = ['waterspout', 'eruption', 'dragonenergy', 'chloroblast', 'mindblown', 'steelbeam', 'blueflare', 'petaldance', 'seedflare', 'makeitrain', 'astralbarrage', 'armorcannon'];
					let hasMove = false;
					for (const moveCheck of setup) if (poke.listOfCertainMoves.includes(moveCheck) && this.dataCache.Moves[moveCheck].type && pokeTypes.includes(this.dataCache.Moves[moveCheck].type)) hasMove = true;
					if (hasMove) targetSpe = 85;
				}
				if (poke.targetSpe > 85 && (poke.crossAtk > 99 || poke.crossSpA > 99)) {
					for (const abilCheck in poke.crossgenAbilities) {
						if (poke.crossgenAbilities[abilCheck] === "Drought") {
							if (pokeTypes.includes("Fire")) targetSpe = 85;
							else if (pokeTypes.includes("Grass") && poke.crossSpA > 99 && poke.listOfCertainMoves.includes('solarbeam')) targetSpe = 85;
							else if (pokeTypes.includes("Grass") && poke.crossAtk > 99 && poke.listOfCertainMoves.includes('solarblade')) targetSpe = 85;
						} else if (poke.crossgenAbilities[abilCheck] === "Drizzle") {
							if (pokeTypes.includes("Water")) targetSpe = 85;
							else if (pokeTypes.includes("Electric") && poke.crossSpA > 99 && poke.listOfCertainMoves.includes('thunder')) targetSpe = 85;
							else if (pokeTypes.includes("Flying") && poke.crossSpA > 99 && poke.listOfCertainMoves.includes('hurricane')) targetSpe = 85;
						}
					}
				}

				// nerf to 85ish if it has extremely strong priority and offensive setup that it can use together
				if (poke.crossAtk > 99 && targetSpe > 85) {
					const booster = ['Adaptability', 'Anger Point', 'Defiant', 'Guts', 'Huge Power', 'Hustle', 'Pure Power', 'Technician'];
					const setup = ['bulkup', 'clangoroussoul', 'coil', 'dragondance', 'growth', 'howl', 'noretreat', 'shiftgear', 'tidyup', 'victorydance'];
					const strongPrio = ['extremespeed', 'suckerpunch', 'jetpunch'];
					const prio = ['accelerock', 'aquajet', 'bulletpunch', 'iceshard', 'machpunch', 'quickattack', 'shadowsneak'];
					let hasBooster = false;
					let hasSetup = false;
					let hasPrio = false;

					for (const abilCheck in poke.crossgenAbilities) if (booster.includes(poke.crossgenAbilities[abilCheck])) hasBooster = true;
					for (const moveCheck of setup) if (poke.listOfCertainMoves.includes(moveCheck)) hasSetup = true;
					for (const moveCheck of strongPrio) if (poke.listOfCertainMoves.includes(moveCheck)) hasPrio = true;
					if (hasBooster) for (const moveCheck of prio) if (poke.listOfCertainMoves.includes(moveCheck) && this.dataCache.Moves[moveCheck].type && pokeTypes.includes(this.dataCache.Moves[moveCheck].type)) hasPrio = true;

					if (hasSetup && hasPrio) targetSpe = 85;
				}
				if (poke.crossSpA > 99 && targetSpe > 85) {
					const booster = ['Adaptability', 'Technician'];
					const setup = ['calmmind', 'clangoroussoul', 'growth', 'noretreat', 'torchsong', 'quiverdance'];
					const strongPrio = ['thunderclap'];
					const prio = ['vacuumwave', 'watershuriken'];
					let hasBooster = false;
					let hasSetup = false;
					let hasPrio = false;

					for (const abilCheck in poke.crossgenAbilities) if (booster.includes(poke.crossgenAbilities[abilCheck])) hasBooster = true;
					for (const moveCheck of setup) if (poke.listOfCertainMoves.includes(moveCheck)) hasSetup = true;
					for (const moveCheck of strongPrio) if (poke.listOfCertainMoves.includes(moveCheck)) hasPrio = true;
					if (hasBooster) for (const moveCheck of prio) if (poke.listOfCertainMoves.includes(moveCheck) && this.dataCache.Moves[moveCheck].type && pokeTypes.includes(this.dataCache.Moves[moveCheck].type)) hasPrio = true;

					if (hasSetup && hasPrio) targetSpe = 85;
				}

				// 85ish is established to be a good range for weatherspeed, too
				const weatherspeed = ['Swift Swim', 'Chlorophyll', 'Sand Rush'];
				let hasWeatherspeed = false;
				for (const abilCheck in poke.crossgenAbilities) if (weatherspeed.includes(poke.crossgenAbilities[abilCheck])) hasWeatherspeed = true;
				if (hasWeatherspeed) {
					let speedCheck = Math.floor(Math.random() * 30) + 80; // it's okay this is a randomizer
					if (speedCheck < targetSpe) targetSpe = speedCheck;
				}

				// nerf to 80 if the offensive setup includes +1 Spe
				if (poke.crossAtk > 79) {
					const setup = ['clangoroussoul', 'dragondance', 'noretreat', 'tidyup', 'victorydance'];
					let hasMove = false;
					for (const moveCheck of setup) if (poke.listOfCertainMoves.includes(moveCheck)) hasMove = true;
					if (hasMove) targetSpe = 80;
				}
				if (poke.crossSpA > 79) {
					const setup = ['clangoroussoul', 'noretreat', 'quiverdance'];
					let hasMove = false;
					for (const moveCheck of setup) if (poke.listOfCertainMoves.includes(moveCheck)) hasMove = true;
					if (hasMove) targetSpe = 80;
				}

				// nerf to 75 if setup *and also* a solid offense *and also* multiple unique, noteworthy tools
				// thinking like a crazy hodgepodge of relevant tools:
				// strong priority (or Fake Out / First Impression this time), spread, some kind of healing, pivoting?
				// hitting 3 of the 4 categories at least
				if (poke.crossAtk > 99) {
					const setup = ['bulkup', 'clangoroussoul', 'coil', 'dragondance', 'growth', 'howl', 'noretreat', 'shiftgear', 'tidyup', 'victorydance'];
					const strongPrio = ['extremespeed', 'suckerpunch', 'jetpunch', 'firstimpression', 'fakeout']; // don't care if STAB
					const prio = ['accelerock', 'aquajet', 'bulletpunch', 'iceshard', 'machpunch', 'quickattack', 'shadowsneak'];
					const spread = ['earthquake', 'petalblizzard', 'brutalswing', 'precipiceblades', 'glaciallance', 'diamondstorm', 'thousandarrows', 'thousandwaves', 'landswrath', 'rockslide', 'breakingswipe'];
					const heal = ['healorder', 'roost', 'recover', 'softboiled', 'milkdrink', 'slackoff', 'floralhealing', 'healpulse', 'lifedew', 'followme', 'ragepowder'];
					const drain = ['drainpunch', 'hornleech', 'leechlife', 'bitterblade'];
					const pivot = ['uturn', 'voltswitch', 'flipturn', 'batonpass', 'partingshot', 'teleport'];

					let hasSetup = false;
					let hasPrio = false;
					let hasSpread = false;
					let hasHeal = false;
					let hasPivot = false;
					let hodgepodgeScore = 0;

					for (const moveCheck of setup) if (poke.listOfCertainMoves.includes(moveCheck)) hasSetup = true;
					for (const moveCheck of strongPrio) if (poke.listOfCertainMoves.includes(moveCheck)) hasPrio = true;
					for (const moveCheck of prio) if (poke.listOfCertainMoves.includes(moveCheck) && this.dataCache.Moves[moveCheck].type && pokeTypes.includes(this.dataCache.Moves[moveCheck].type)) hasPrio = true;
					for (const moveCheck of spread) if (poke.listOfCertainMoves.includes(moveCheck) && this.dataCache.Moves[moveCheck].type && pokeTypes.includes(this.dataCache.Moves[moveCheck].type)) hasSpread = true;
					for (const moveCheck of heal) if (poke.listOfCertainMoves.includes(moveCheck)) hasHeal = true;
					for (const moveCheck of drain) if (poke.listOfCertainMoves.includes(moveCheck) && this.dataCache.Moves[moveCheck].type && pokeTypes.includes(this.dataCache.Moves[moveCheck].type)) hasHeal = true;
					for (const moveCheck of pivot) if (poke.listOfCertainMoves.includes(moveCheck)) hasPivot = true;

					if (hasSetup) {
						if (hasPrio) hodgepodgeScore++;
						if (hasSpread) hodgepodgeScore++;
						if (hasHeal) hodgepodgeScore++;
						if (hasPivot) hodgepodgeScore++;
					}
					if (hodgepodgeScore > 2) {
						targetSpe = 75;
						poke.crossgenGoldStar = true;
					}
				}
				if (poke.crossSpA > 99) {
					const setup = ['calmmind', 'clangoroussoul', 'growth', 'noretreat', 'torchsong', 'quiverdance'];
					const strongPrio = ['thunderclap'];
					const prio = ['vacuumwave', 'watershuriken'];
					const spread = ['boomburst', 'searingshot', 'sludgewave', 'surf', 'sparklingaria', 'lavaplume', 'discharge', 'paraboliccharge', 'waterspout', 'eruption', 'dragonenergy', 'makeitrain', 'astralbarrage', 'originpulse', 'clangingscales', 'blizzaard', 'wildboltstorm', 'springtidestorm', 'sandsearstorm', 'coreenforcer', 'bleakwindstorm', 'heatwave', 'muddywater', 'hypervoice', 'fierywrath', 'overdrive', 'matchagotcha', 'relicsong', 'glaciate', 'snarl', 'icywind', 'electroweb', 'strugglebug'];
					const heal = ['healorder', 'roost', 'recover', 'softboiled', 'milkdrink', 'slackoff', 'floralhealing', 'healpulse', 'lifedew', 'followme', 'ragepowder'];
					const drain = ['paraboliccharge', 'gigadrain', 'matchagotcha', 'drainingkiss'];
					const pivot = ['uturn', 'voltswitch', 'flipturn', 'batonpass', 'partingshot', 'teleport'];

					let hasSetup = false;
					let hasPrio = false;
					let hasSpread = false;
					let hasHeal = false;
					let hasPivot = false;
					let hodgepodgeScore = 0;

					for (const moveCheck of setup) if (poke.listOfCertainMoves.includes(moveCheck)) hasSetup = true;
					for (const moveCheck of strongPrio) if (poke.listOfCertainMoves.includes(moveCheck)) hasPrio = true;
					for (const moveCheck of prio) if (poke.listOfCertainMoves.includes(moveCheck) && this.dataCache.Moves[moveCheck].type && pokeTypes.includes(this.dataCache.Moves[moveCheck].type)) hasPrio = true;
					for (const moveCheck of spread) if (poke.listOfCertainMoves.includes(moveCheck) && this.dataCache.Moves[moveCheck].type && pokeTypes.includes(this.dataCache.Moves[moveCheck].type)) hasSpread = true;
					for (const moveCheck of heal) if (poke.listOfCertainMoves.includes(moveCheck)) hasHeal = true;
					for (const moveCheck of drain) if (poke.listOfCertainMoves.includes(moveCheck) && this.dataCache.Moves[moveCheck].type && pokeTypes.includes(this.dataCache.Moves[moveCheck].type)) hasHeal = true;
					for (const moveCheck of pivot) if (poke.listOfCertainMoves.includes(moveCheck)) hasPivot = true;

					if (hasSetup) {
						if (hasPrio) hodgepodgeScore++;
						if (hasSpread) hodgepodgeScore++;
						if (hasHeal) hodgepodgeScore++;
						if (hasPivot) hodgepodgeScore++;
					}
					if (hodgepodgeScore > 2) {
						targetSpe = 75;
						poke.crossgenGoldStar = true;
					}
				}

				// nerf to 65 if setup that includes +2 Speed and (a) also boosts an offense or (b) Attack is ~135+
				if (poke.crossAtk > 135 || poke.crossSpA > 135) {
					const setup = ['agility', 'autotomize', 'rockpolish', 'shiftgear'];
					let hasMove = false;
					for (const moveCheck of setup) if (poke.listOfCertainMoves.includes(moveCheck)) hasMove = true;
					if (hasMove) targetSpe = 65;
				}
				if (poke.crossAtk > 79) {
					const setup = ['shiftgear', 'filletaway', 'shellsmash'];
					let hasMove = false;
					for (const moveCheck of setup) if (poke.listOfCertainMoves.includes(moveCheck)) hasMove = true;
					if (hasMove) targetSpe = 65;
				}
				if (poke.crossSpA > 79) {
					const setup = ['geomancy', 'filletaway', 'shellsmash'];
					let hasMove = false;
					for (const moveCheck of setup) if (poke.listOfCertainMoves.includes(moveCheck)) hasMove = true;
					if (hasMove) targetSpe = 65;
				}

				if (poke.listOfCertainMoves.includes('spore')) {
					if (targetSpe > poke.crossSpe) {
						if (55 > poke.crossSpe) targetSpe = 55;
						else targetSpe = poke.crossSpe;
					}
				}

				// nerf to 50 if it seems like a wall type and has reliable recovery (???)

				// lower to sub-30 if it seems like it would be better for Trick Room anyway (list ways to tell?)
// ['adaptability', 'analytic', 'ironfist', 'reckless', 'sheerforce', 'toxicboost', 'flareboost', 'angerpoint', 'defiant', 'guts', 'hugepower', 'hustle', 'moxie', 'purepower']
// actually Ability checks should be capitalized (name, not ID)
// but realistically these have their own individual stat limits and concerns... I'll also want to handle offenses I think

				// maybe I should actually lowball all of these by at least 5 because the final step might randomize it further
				targetSpe -= 5;

				if (poke.crossSpe < targetSpe) {
					for (let i = 1; i < 20; i++) {
						if (poke.crossSpe >= targetSpe - 4) break;
						poke.crossSpe += 5;
					}
				} else {
					for (let i = 1; i < 20; i++) {
						if (poke.crossSpe <= targetSpe + 4) break;
						poke.crossSpe -= 5;
					}
				}

				// the fun thing is that...
				// I have no idea how much some of this works because there's so much randomization,
				// but never knowing what's gonna come out is half the fun anyway P:

				// next, set HP
				let sampleHp1 = (((poke.crossHp * 2 + 141) * (poke.crossDef * 2 + 36)) + ((poke.crossHp * 2 + 141) * (poke.crossSpD * 2 + 36))) * 4/3;
				let sampleHp2 = (((poke.crossHp * 2 + 141) * (poke.crossDef * 2 + 56)) + ((poke.crossHp * 2 + 141) * (poke.crossSpD * 2 + 56)));
				let targetHp = (((poke.crossHp * 2 + 141) * Math.sqrt(sampleHp1 / sampleHp2)) - 141) / 2;
				for (let i = 1; i < 20; i++) {
					if (poke.crossHp >= targetHp) break;
					if (poke.crossHp >= 250) break;
					// only keep going for as long as maxbst is okay with it
					if ((poke.crossHp + poke.crossAtk + poke.crossDef + poke.crossSpA + poke.crossSpD + poke.crossSpe + 5) > maxbst) break;
					poke.crossHp += 5;
				}

				// then, boost a second stat
				if ((poke.crossHp + poke.crossAtk + poke.crossDef + poke.crossSpA + poke.crossSpD + poke.crossSpe + bonusBoost) < (maxbst + 10)) {
					const unmoddedStats: string[] = [];
					if (poke.crossAtk === poke.randAtk) unmoddedStats.push('crossAtk');
					if (poke.crossDef === poke.randDef) unmoddedStats.push('crossDef');
					if (poke.crossSpA === poke.randSpA) unmoddedStats.push('crossSpA');
					if (poke.crossSpD === poke.randSpD) unmoddedStats.push('crossSpD');
					if (unmoddedStats.length) {
						let chosenStat = unmoddedStats[Math.floor(Math.random() * unmoddedStats.length)];
						poke[chosenStat] += bonusBoost;
					}
				}

				// boost the middle 4 stats in a random order until all of them have been touched once (the order being random is just in case they hit the BST limit early)
				for (let i = 1; i < 4; i++) {
					if ((poke.crossHp + poke.crossAtk + poke.crossDef + poke.crossSpA + poke.crossSpD + poke.crossSpe + 10) > maxbst) break;
					const unmoddedStats: string[] = [];
					if (poke.crossAtk === poke.randAtk) unmoddedStats.push('crossAtk');
					if (poke.crossDef === poke.randDef) unmoddedStats.push('crossDef');
					if (poke.crossSpA === poke.randSpA) unmoddedStats.push('crossSpA');
					if (poke.crossSpD === poke.randSpD) unmoddedStats.push('crossSpD');
					if (unmoddedStats.length) {
						let chosenStat = unmoddedStats[Math.floor(Math.random() * unmoddedStats.length)];
						poke[chosenStat] += 10;
					}
				}

				// finish off with two more fully random +10s
				const allStats: string[] = ['crossHp', 'crossAtk', 'crossDef', 'crossSpA', 'crossSpD'];
				if (!(poke.crossSpe < poke.randSpe)) allStats.push('crossSpe'); // only if it didn't already go down on purpose in an earlier step
				poke[allStats[Math.floor(Math.random() * allStats.length)]] += 10;
				poke[allStats[Math.floor(Math.random() * allStats.length)]] += 10;

*/


				// prevos are just the same changes as the final stage scaled down
				if (poke.prevo) {
					const poke2 = this.dataCache.Pokedex[this.toID(poke.prevo)];
					poke2.randHp = poke2.baseStats.hp + (poke.hpDelta * 0.6);
					poke2.randAtk = poke2.baseStats.atk + (poke.atkDelta * 0.6);
					poke2.randDef = poke2.baseStats.def + (poke.defDelta * 0.6);
					poke2.randSpA = poke2.baseStats.spa + (poke.spaDelta * 0.6);
					poke2.randSpD = poke2.baseStats.spd + (poke.spdDelta * 0.6);
					poke2.randSpe = poke2.baseStats.spe + (poke.speDelta * 0.6);
					if (poke2.prevo) {
						const poke3 = this.dataCache.Pokedex[this.toID(poke2.prevo)];
						poke3.randHp = poke3.baseStats.hp + (poke.hpDelta * 0.4);
						poke3.randAtk = poke3.baseStats.atk + (poke.atkDelta * 0.4);
						poke3.randDef = poke3.baseStats.def + (poke.defDelta * 0.4);
						poke3.randSpA = poke3.baseStats.spa + (poke.spaDelta * 0.4);
						poke3.randSpD = poke3.baseStats.spd + (poke.spdDelta * 0.4);
						poke3.randSpe = poke3.baseStats.spe + (poke.speDelta * 0.4);
					}
				}


				poke.learnsetCumulative.learnset.sort();
				if (!poke || !poke.learnsetCumulative.learnset) return;
				// finalize sheetOutput now.........
				let sheetOutput: string[] = [
					`\n\n`
				];

				let crossevo = true; // becomes false shortly if already a 3-stage line
				if (poke.tags || (poke.baseSpecies && this.dataCache.Pokedex[this.toID(poke.baseSpecies)].tags)) crossevo = false;
				// prevos when ready
				if (poke.prevo) {
					const poke2 = this.dataCache.Pokedex[this.toID(poke.prevo)];
					if (poke2.prevo) {
						const poke3 = this.dataCache.Pokedex[this.toID(poke2.prevo)];
						crossevo = false;
						// name, evo level
						sheetOutput += (poke3.evoLevel ? (poke3.name + ` // ` + poke3.evoLevel) : poke3.name) + ` ~ `;
						// types
						sheetOutput += poke3.chosenType.type1 + (poke3.chosenType.type2 === poke3.chosenType.type1 ? ` ~  ~ ` : ` ~ `+ poke3.chosenType.type2 + ` ~ `);
						// base stats, skipped if none generated yet
						if (poke3.randHp) sheetOutput += poke3.randHp + ` ~ ` + poke3.randAtk + ` ~ ` + poke3.randDef + ` ~ ` + poke3.randSpA + ` ~ ` + poke3.randSpD + ` ~ ` + poke3.randSpe + ` ~ ` + (poke3.randHp + poke3.randAtk + poke3.randDef + poke3.randSpA + poke3.randSpD + poke3.randSpe) + ` ~ `;
						// abilities
						sheetOutput += poke3.randAbilities[0] + (poke3.randAbilities[1] ? ` / `+ poke3.randAbilities[1] + ` ` : ` `) + (poke3.randAbilities[2] ? `// `+ poke3.randAbilities[2] + `\n` : `\n`);
					}
					// name, evo level
					sheetOutput += (poke2.evoLevel ? (poke2.name + ` // ` + poke2.evoLevel) : poke2.name) + ` ~ `;
					// types
					sheetOutput += poke2.chosenType.type1 + (poke2.chosenType.type2 === poke2.chosenType.type1 ? ` ~  ~ ` : ` ~ `+ poke2.chosenType.type2 + ` ~ `);
					// base stats, skipped if none generated yet
					if (poke2.randHp) sheetOutput += poke2.randHp + ` ~ ` + poke2.randAtk + ` ~ ` + poke2.randDef + ` ~ ` + poke2.randSpA + ` ~ ` + poke2.randSpD + ` ~ ` + poke2.randSpe + ` ~ ` + (poke2.randHp + poke2.randAtk + poke2.randDef + poke2.randSpA + poke2.randSpD + poke2.randSpe) + ` ~ `;
					// abilities
					sheetOutput += poke2.randAbilities[0] + (poke2.randAbilities[1] ? ` / `+ poke2.randAbilities[1] + ` ` : ` `) + (poke2.randAbilities[2] ? `// `+ poke2.randAbilities[2] + `\n` : `\n`);
				}

				// name, evo level
				sheetOutput += (poke.evoLevel ? (poke.name + ` // ` + poke.evoLevel) : poke.name) + ` ~ `;
				// types
				sheetOutput += poke.chosenType.type1 + (poke.chosenType.type2 === poke.chosenType.type1 ? ` ~  ~ ` : ` ~ `+ poke.chosenType.type2 + ` ~ `);
				// base stats, skipped if none generated yet
				if (poke.randHp) sheetOutput += poke.randHp + ` ~ ` + poke.randAtk + ` ~ ` + poke.randDef + ` ~ ` + poke.randSpA + ` ~ ` + poke.randSpD + ` ~ ` + poke.randSpe + ` ~ ` + (poke.randHp + poke.randAtk + poke.randDef + poke.randSpA + poke.randSpD + poke.randSpe) + ` ~ `;
				// abilities
				sheetOutput += poke.randAbilities[0] + (poke.randAbilities[1] ? ` / `+ poke.randAbilities[1] + ` ` : ` `) + (poke.randAbilities[2] ? `// `+ poke.randAbilities[2] + `\n` : `\n`);

				// Basculin moment
				if (poke.name === "Basculin" && poke.randAbilities[3]) {
					sheetOutput += (poke.evoLevel ? (poke.name + ` // ` + poke.evoLevel) : poke.name) + ` (Blue-Striped) ~ `;
					// types
					sheetOutput += poke.chosenType.type1 + (poke.chosenType.type2 === poke.chosenType.type1 ? ` ~  ~ ` : ` ~ `+ poke.chosenType.type2 + ` ~ `);
					// base stats, skipped if none generated yet
					if (poke.randHp) sheetOutput += poke.randHp + ` ~ ` + poke.randAtk + ` ~ ` + poke.randDef + ` ~ ` + poke.randSpA + ` ~ ` + poke.randSpD + ` ~ ` + poke.randSpe + ` ~ ` + (poke.randHp + poke.randAtk + poke.randDef + poke.randSpA + poke.randSpD + poke.randSpe) + ` ~ `;
					// abilities
					sheetOutput += poke.randAbilities[3] + (poke.randAbilities[1] ? ` / `+ poke.randAbilities[1] + ` ` : ` `) + (poke.randAbilities[2] ? `// `+ poke.randAbilities[2] + `\n` : `\n`);
				}

				// be ready to add a crossevo here
				if (crossevo && poke.name !== "Shedinja") {
					// name isn't randomly generated askdjfgh
					if (poke.crossgenGoldStar) sheetOutput += `Cool `; // I will forget I did this and be amused by it
					sheetOutput += `Crossgen ~ `;
					// types are the same
					sheetOutput += poke.chosenType.type1 + (poke.chosenType.type2 === poke.chosenType.type1 ? ` ~  ~ ` : ` ~ `+ poke.chosenType.type2 + ` ~ `);
					// base stats; skip if none generated yet
					if (poke.crossHp) sheetOutput += poke.crossHp + ` ~ ` + poke.crossAtk + ` ~ ` + poke.crossDef + ` ~ ` + poke.crossSpA + ` ~ ` + poke.crossSpD + ` ~ ` + poke.crossSpe + ` ~ ` + (poke.crossHp + poke.crossAtk + poke.crossDef + poke.crossSpA + poke.crossSpD + poke.crossSpe) + ` ~ `;
					// abilities
					sheetOutput += poke.crossgenAbilities[0] + (poke.crossgenAbilities[1] ? ` / `+ poke.crossgenAbilities[1] + ` ` : ` `) + (poke.crossgenAbilities[2] ? `// `+ poke.crossgenAbilities[2] + `\n` : `\n`);

					if (poke.name === "Basculin" && poke.randAbilities[3]) {
						if (poke.crossgenGoldStar) sheetOutput += `Cool `; // I will forget I did this and be amused by it
						sheetOutput += `Crossgen (Blue-Striped) ~ `;
						// types are the same
						sheetOutput += poke.chosenType.type1 + (poke.chosenType.type2 === poke.chosenType.type1 ? ` ~  ~ ` : ` ~ `+ poke.chosenType.type2 + ` ~ `);
						// base stats; skip if none generated yet
						if (poke.crossHp) sheetOutput += poke.crossHp + ` ~ ` + poke.crossAtk + ` ~ ` + poke.crossDef + ` ~ ` + poke.crossSpA + ` ~ ` + poke.crossSpD + ` ~ ` + poke.crossSpe + ` ~ ` + (poke.crossHp + poke.crossAtk + poke.crossDef + poke.crossSpA + poke.crossSpD + poke.crossSpe) + ` ~ `;
						// abilities
						sheetOutput += poke.randAbilities[3] + (poke.crossgenAbilities[1] ? ` / `+ poke.crossgenAbilities[1] + ` ` : ` `) + (poke.crossgenAbilities[2] ? `// `+ poke.crossgenAbilities[2] + `\n` : `\n`);
					}
				}

				// learnset
				let levelUpMovesCount = 0;
				for (const level in poke.learnsetCumulative.learnset) {
					if (parseInt(level) > 99) {
						if (poke.recommendedLvUp.length) {
							poke.recommendedLvUp.sort();
							sheetOutput += `\n~ Additional level-up candidates (pick up to ` + (22 - levelUpMovesCount + poke.extraLevelUpSpaces) + `)\n`
							for (const moveid of poke.recommendedLvUp) {
								if (usedSecondMoves.includes(moveid)) continue;
								sheetOutput += moveid + `, `;
							}
							sheetOutput += `~`;
							poke.recommendedLvUp = {};
						}
						if (poke.forcedMoves.length) {
							poke.forcedMoves.sort();
							sheetOutput += `\n~ Possible synergistic moves\n`
							for (const moveid of poke.forcedMoves) {
								if (usedSecondMoves.includes(moveid)) continue;
								sheetOutput += moveid + `, `;
							}
							sheetOutput += `~`;
							poke.forcedMoves = {};
						}
					}
					if (poke.learnsetCumulative.learnset[level].movesLearned.length) {
						poke.learnsetCumulative.learnset[level].movesLearned.sort();
						if (parseInt(level) > 99) {
							sheetOutput += `\n~ Additional moves\n`
							for (const moveid of poke.learnsetCumulative.learnset[level].movesLearned) {
								if (usedSecondMoves.includes(moveid)) continue;
								if (usedSecondMoves.includes(moveid + `*`)) continue;
								sheetOutput += moveid + `, `;
							}
							sheetOutput += `~`;
						} else {
							for (const moveid of poke.learnsetCumulative.learnset[level].movesLearned) {
								sheetOutput += `\n` + (parseInt(level) + 1) + ` - ` + moveid;
								levelUpMovesCount++;
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
