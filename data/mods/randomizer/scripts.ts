// TODO:
// - base stats
// - evolution lines (including correct Abilities and stats for crossgens)
// - stop the same move from showing up twice in TM list (looks like secondMoves are showing up once with and once without an asterisk)

const pushLevelUp = [
	'accelerock', 'acid', 'acidspray', 'acupressure', 'afteryou', 'aircutter', 'allyswitch', 'appleacid', 'aquajet', 'aquastep', 'astralbarrage', 'aurawheel', 'babydolleyes', 'batonpass', 'bellydrum', 'bitterblade', 'bittermalice',
	'bleakwindstorm', 'blizzard', 'boomburst', 'breakingswipe', 'brutalswing', 'bubble', 'bulkup', 'bulldoze', 'bulletpunch', 'burningjealousy', 'calmmind', 'captivate', 'chargebeam', 'charm', 'chillingwater', 'clangingscales',
	'clangoroussoul', 'coil', 'coreenforcer', 'cottonspore', 'counter', 'curse', 'darkvoid', 'dazzlinggleam', 'decorate', 'destinybond', 'diamondstorm', 'disable', 'disarmingvoice', 'discharge', 'dragondance', 'dragonenergy',
	'drainpunch', 'dreameater', 'drumbeating', 'earthquake', 'eerieimpulse', 'electroweb', 'encore', 'endeavor', 'entrainment', 'eruption', 'esperwing', 'expandingforce', 'explosion', 'extremespeed', 'fakeout', 'faketears',
	'featherdance', 'feint', 'fierydance', 'fierywrath', 'firstimpression', 'flamecharge', 'flipturn', 'followme', 'foulplay', 'geomancy', 'gigadrain', 'glaciallance', 'glaciate', 'glare', 'grasswhistle', 'gravapple', 'gravity',
	'growl', 'growth', 'haze', 'healpulse', 'heatwave', 'helpinghand', 'hornleech', 'howl', 'hurricane', 'hypervoice', 'hypnosis', 'iceshard', 'icywind', 'incinerate', 'inferno', 'jetpunch', 'knockoff', 'landswrath', 'lavaplume',
	'leechlife', 'leechseed', 'leer', 'lightscreen', 'lovelykiss', 'lowsweep', 'luminacrash', 'lunge', 'machpunch', 'makeitrain', 'matchagotcha', 'memento', 'metalburst', 'metalsound', 'mindblown', 'mirrorcoat', 'moonlight',
	'morningsun', 'mortalspin', 'mudshot', 'mudsport', 'muddywater', 'mysticalfire', 'nastyplot', 'noretreat', 'nobleroar', 'nuzzle', 'oblivionwing', 'originpulse', 'overdrive', 'paraboliccharge', 'partingshot', 'perishsong',
	'petalblizzard', 'poisongas', 'pounce', 'powdersnow', 'poweruppunch', 'precipiceblades', 'quickattack', 'quickguard', 'quiverdance', 'ragepowder', 'razorleaf', 'razorwind', 'reflect', 'relicsong', 'rockslide', 'rocktomb',
	'sacredfire', 'sandsearstorm', 'scaryface', 'screech', 'searingshot', 'selfdestruct', 'shadowsneak', 'shellsmash', 'shelltrap', 'shiftgear', 'shoreup', 'signalbeam', 'silktrap', 'simplebeam', 'sing', 'skillswap', 'skittersmack',
	'skydrop', 'sleeppowder', 'sludgewave', 'snarl', 'soak', 'solarbeam', 'solarblade', 'sparklingaria', 'spicyextract', 'spikes', 'spore', 'springtidestorm', 'stealthrock', 'stickyweb', 'stringshot', 'strugglebug', 'stunspore',
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
	'firstimpression', 'spiritshackle', 'darkestlariat', 'icehammer', 'highhorsepower', 'solarblade', 'anchorshot', 'lunge', 'firelash',
	'powertrip', 'smartstrike', 'tropkick', 'clangingscales', 'dragonhammer', 'brutalswing', 'psychicfangs', 'shadowbone', 'accelerock', 'liquidation',
	'tearfullook', 'zingzap', 'mindblown',
	'snipeshot', 'decorate', 'drumbeating', 'snaptrap', 'pyroball', 'breakingswipe', 'overdrive', 'appleacid', 'lifedew', 'falsesurrender',
	'meteorassault', 'skittersmack', 'coaching', 'flipturn', 'dualwingbeat', 'scorchingsands', 'mysticalpower', 'ragingfury', 'wavecrash', 'chloroblast',
	'mountaingale', 'victorydance', 'headlongrush', 'barbbarrage', 'esperwing', 'bittermalice', 'shelter', 'infernalparade', 'bleakwindstorm',
	'wildboltstorm', 'sandsearstorm',
	'axekick', 'luminacrash', 'jetpunch', 'spicyextract', 'spinout', 'populationbomb', 'tripledive', 'kowtowcleave', 'flowertrick', 'torchsong',
	'aquastep', 'makeitrain', 'pounce', 'trailblaze', 'chillingwater', 'hyperdrill', 'twinbeam', 'armorcannon', 'bitterblade', 'comeuppance', 'aquacutter',
	'matchagotcha', 'thunderclap', 'mightycleave', 'tachyoncutter', 'hardpress', 'supercellslam', 'malignantchain',
	'eerieimpulse', 'steelbeam',
	'noretreat', 'clangoroussoul', // worth a shot? modifying Charge and Belly Drum might make these doable
	// 'leafage', 'branchpoke', // these moves are easy enough to copy over, but they're redundant so it's unhelpful to see them highlighted so often
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
	79: ['incinerate', 'razorleaf', 'aircutter'],
	80: ['bugbite', 'pluck'],
	81: ['thief', 'covet'],
	82: ['feintattack', 'aerialace', 'shadowpunch', 'magnetbomb', 'shockwave', 'magicalleaf', 'swift'],
	83: ['feintattack', 'aerialace', 'shadowpunch', 'magnetbomb', 'shockwave', 'magicalleaf', 'swift', 'smartstrike'],
	84: ['revenge', 'avalanche'],
	85: ['payback', 'assurance', 'revenge', 'avalanche'],
	86: ['stormthrow', 'frostbreath', 'flowertrick'],
	87: ['forcepalm', 'flamewheel', 'dragonbreath', 'waterpulse', 'spark', 'sludge'],
	88: ['needlearm', 'heartstamp', 'steamroller', 'boneclub', 'stomp'],
	89: ['swift', 'incinerate', 'razorleaf', 'aircutter', 'strugglebug', 'snarl', 'breakingswipe', 'electroweb', 'icywind', 'bulldoze'],
	90: ['barbbarrage', 'infernalparade'],
	91: ['partingshot', 'batonpass', 'flipturn', 'uturn', 'voltswitch'],
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
	110: ['drainpunch', 'hornleech', 'gigadrain', 'leechlife', 'bitterblade'],
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
	146: ['leaftornado', 'mudbomb', 'aurorabeam', 'psybeam', 'mirrorshot', 'octazooka', 'bubblebeam', 'forcepalm', 'flamewheel', 'dragonbreath', 'waterpulse', 'spark', 'sludge', 'needlearm', 'heartstamp', 'steamroller', 'boneclub', 'stomp', 'leaftornado', 'mudbomb', 'aurorabeam', 'psybeam', 'mirrorshot', 'octazooka', 'bubblebeam', 'wingattack', 'hornattack', 'feintattack', 'aerialace', 'shadowpunch', 'magnetbomb', 'shockwave', 'magicalleaf', 'swift', 'incinerate', 'razorleaf', 'aircutter', 'strugglebug', 'snarl', 'breakingswipe', 'electroweb', 'icywind', 'bulldoze', 'acidspray', 'chillingwater', 'pounce', 'mudshot', 'rocktomb', 'lowsweep', 'knockoff', 'silverwind', 'ominouswind', 'ancientpower'],
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
			'friendguard', 'regenerator', 'healer', 'noguard', 'scrappy', 'unnerve', 'telepathy', 'justified', 'rattled', 'angerpoint',
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
			if (!(this.dataCache.Learnsets[id] && this.dataCache.Learnsets[id].learnset)) continue; // skip Megas and G-Maxes this time
			if (poke.baseSpecies && (poke.baseSpecies === "Pikachu" || poke.baseSpecies === "Pichu" || poke.baseSpecies === "Eevee" || poke.baseSpecies === "Floette")) continue;
			if (poke.forme && (poke.forme === "Totem" || poke.forme === "Alola-Totem")) continue;
			if (poke.num && poke.num < 0) continue; // skip CAPs
			let future = false; // determine if something is Gen VIII or later
			if (poke.num && poke.num > 809) future = true;
			if (poke.forme && (poke.forme === "Galar" || poke.forme === "Hisui" || poke.baseSpecies === "Tauros")) future = true;

			// RANDOM ABILITY
			// todo:
			// - list eligible Abilities (no form-change Abilities, Wonder Guard) - done
			// - randomize 1 Ability and put it in slot 1 - done
			let randomForAbility = randAbilities[Math.floor(Math.random() * randAbilities.length)];
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

			// - Legendaries and Mythicals have 1 Ability and starters only randomize HA - done
			if (["Overgrow", "Blaze", "Torrent"].includes(poke.abilities[0]) || poke.tags) poke.randAbilities = poke.randAbilities = {0: poke.randAbilities[0]};
			// executive decision: starters randomize the primary slot only, since I don't have Ability Capsules or Patches

			// - randomize a second Ability only for the crossgen output - done
			randomForAbility = randAbilities[Math.floor(Math.random() * randAbilities.length)];
			let crossgenAbility = {0: abilityDex[randomForAbility].name};
			poke.crossgenAbilities = poke.randAbilities;

			// - overwrite all Abilities with lower priority than that Ability with it
			// - if no Abilities have been overwritten, overwrite a random Ability with the same priority as it
			// - otherwise, ignore it

			// prevos now
			let slot1 = -1;
			let slotH = -1;
			if (poke.randAbilities[1] && poke.abilities[0] && poke.randAbilities[1] === poke.abilities[0]) slot1 = 0;
			if (poke.randAbilities[1] && poke.abilities[1] && poke.randAbilities[1] === poke.abilities[1]) slot1 = 1;
			if (poke.randAbilities[1] && poke.abilities['H'] && poke.randAbilities[1] === poke.abilities['H']) slot1 = 'H';
			if (poke.randAbilities[1] && poke.abilities['S'] && poke.randAbilities[1] === poke.abilities['S']) slot1 = 'S';
			if (poke.randAbilities[2] && poke.abilities[0] && poke.randAbilities[2] === poke.abilities[0]) slotH = 0;
			if (poke.randAbilities[2] && poke.abilities[1] && poke.randAbilities[2] === poke.abilities[1]) slotH = 1;
			if (poke.randAbilities[2] && poke.abilities['H'] && poke.randAbilities[2] === poke.abilities['H']) slotH = 'H';
			if (poke.randAbilities[2] && poke.abilities['S'] && poke.randAbilities[2] === poke.abilities['S']) slotH = 'S';

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






			// RANDOM TYPE
			// todo:
			// - randomize 2 types for single-types, 1 type for dual-types - done
			const chosenTypes: string[] = [];
			if (poke.types) {
				for (const type of poke.types) {
					if (type === "Fairy") continue;
					if (poke.abilities && ["Overgrow", "Blaze", "Torrent"].includes(poke.abilities[0]) && !["Fire", "Water", "Grass"].includes(type)) continue;
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
						if (poke.abilities && ["Overgrow", "Blaze", "Torrent"].includes(poke.abilities[0]) && !["Fire", "Water", "Grass"].includes(type)) continue;
						if (poke2.types[0] === "Normal" && poke2.types[1] && poke2.types[1] === "Flying" && type === "Normal") continue;
						chosenTypes.push(type);
					}
				}
				if (poke2.prevo) {
					const poke3 = this.dataCache.Pokedex[this.toID(poke2.prevo)];
					if (poke3.types) {
						for (const type of poke3.types) {
							if (chosenTypes.includes(type) || type === "Fairy") continue;
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
							if (chosenTypes.includes(type) || type === "Fairy") continue;
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
							if (chosenTypes.includes(type) || type === "Fairy") continue;
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
					let score = 0;
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

						// defensive:
						// +1 for non-neutral defensive matchups
						// +2 for double-weaknesses or immunities
						// +3 if one type has an immunity and the other has a weakness
						for (const type in this.dataCache.TypeChart) {
							if (type === "Fairy") continue;
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
							if (type === "Fairy") continue;
							if (this.dataCache.TypeChart[type].damageTaken[type1] > 1) { // STAB resisted
								if (this.dataCache.TypeChart[type].damageTaken[poke.types[0]] === 1 || (poke.types[1] && this.dataCache.TypeChart[type].damageTaken[poke.types[1]] === 1)) {
									// one of the base types is SE
									score += 2;
								} else {
									if (abilitySet.includes('Tinted Lens')) score += 2;
								}
							}
						}

					} else { // dual-type version

						// defensive:
						// +1 for non-neutral defensive matchups
						// +2 for double-resistances or immunities
						// +3 for double-weaknesses or if one type has an immunity and the other has a weakness

						for (const type in this.dataCache.TypeChart) {
							if (type === "Fairy") continue;
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
							if (type === "Fairy") continue;
							if (this.dataCache.TypeChart[type].damageTaken[type1] > 1 || this.dataCache.TypeChart[type].damageTaken[type2] > 1) { // one STAB resisted
								if (this.dataCache.TypeChart[type].damageTaken[type1] === 1 || this.dataCache.TypeChart[type].damageTaken[type2] === 1) { // other STAB is SE
									score ++; // weakness canceled by immunity
								} else { // neither STAB SE
									if (abilitySet.includes('Tinted Lens')) score += 2;
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
						if (types.includes("Fire")) score -= 10;
					}
					if (abilitySet.includes('Immunity') || abilitySet.includes('Toxic Boost')) {
						if (types.includes("Steel") || types.includes("Poison")) score -= 10;
					}
					if (abilitySet.includes('Magma Armor')) {
						if (types.includes("Ice")) score -= 10;
					}
					if (abilitySet.includes('Overcoat')) {
						if (types.includes("Ice") && (types.includes("Rock") || types.includes("Ground") || types.includes("Steel"))) score -= 10;
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
					if (abilitySet.includes('Inner Focus') || abilitySet.includes('Shield Dust')) {
						if (types.includes("Ghost")) score -= 4; // redundant
					}
					if (abilitySet.includes('Normalize')) {
						if (types.includes("Normal")) score += 10;
						if (types.includes("Ghost")) score -= 10; // danger
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

			if (this.dataCache.Learnsets[id] && this.dataCache.Learnsets[id].learnset) {
				printno++;

				const learnsetTypes: string[] = [];
				learnsetTypes.push(poke.chosenType.type1);
				if (poke.chosenType.type2 !== poke.chosenType.type1) learnsetTypes.push(poke.chosenType.type2);

				const usedSecondMoves: string[] = []; // to avoid pushing the same one twice
				const alreadyLvUpMoves: string[] = []; // to avoid pushing the same one twice

				const moveAbilitySet: string[] = [];
				moveAbilitySet.push(poke.randAbilities[0]);
				if (poke.randAbilities[1]) moveAbilitySet.push(poke.randAbilities[1]);
				if (poke.randAbilities[2]) moveAbilitySet.push(poke.randAbilities[2]);

				if (moveAbilitySet.includes("Drizzle") || moveAbilitySet.includes("Swift Swim") || moveAbilitySet.includes("Rain Dish") || moveAbilitySet.includes("Dry Skin") || moveAbilitySet.includes("Hydration") || moveAbilitySet.includes("Torrent")) learnsetTypes.push("Water");
				if (moveAbilitySet.includes("Drought") || moveAbilitySet.includes("Chlorophyll") || moveAbilitySet.includes("Leaf Guard") || moveAbilitySet.includes("Solar Power") || moveAbilitySet.includes("Harvest") || moveAbilitySet.includes("Blaze") || moveAbilitySet.includes("Flash Fire")) learnsetTypes.push("Fire");
				if (moveAbilitySet.includes("Overgrow")) learnsetTypes.push("Grass");
				if (moveAbilitySet.includes("Swarm")) learnsetTypes.push("Bug");
				if (moveAbilitySet.includes("Sand Force")) learnsetTypes.push("Rock");
				if (moveAbilitySet.includes("Sand Force")) learnsetTypes.push("Ground");
				if (moveAbilitySet.includes("Sand Force")) learnsetTypes.push("Steel");

				poke.learnsetCumulative = {
							Moves: [],
							learnset: [],
				};
				poke.additionalTms = [];
				poke.recommendedLvUp = [];
				poke.forcedMoves = [];
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

				for (const moveCheck in learnset) {
					for (const source of learnset[moveCheck]) {
						if (source.charAt(1) === 'L') alreadyLvUpMoves.push(moveCheck);
					}
				}
				if (learnset2) {
					for (const moveCheck in learnset2) {
						for (const source of learnset2[moveCheck]) {
							if (source.charAt(1) === 'L') alreadyLvUpMoves.push(moveCheck);
						}
					}
				}
				if (learnset3) {
					for (const moveCheck in learnset3) {
						for (const source of learnset3[moveCheck]) {
							if (source.charAt(1) === 'L') alreadyLvUpMoves.push(moveCheck);
						}
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

					// universal moves
					let forceLearn = false;
					let synergyMove = 0;
					if ((!(poke.gender && poke.gender === "N")) && moveid === 'attract') forceLearn = true;
					if (universal.includes(moveid)) forceLearn = true;
					if (forceLearn) synergyMove = -1; // dismiss synergyMove if the move is universal; should be 0 now if not

					// Ability-based moves
					// these ones are only for the random Ability slot
					if ((poke.randAbilities[0] === "Drizzle" || poke.randAbilities[0] === "Swift Swim" || poke.randAbilities[0] === "Rain Dish" || poke.randAbilities[0] === "Dry Skin" || poke.randAbilities[0] === "Hydration") && (moveid === 'thunder' || moveid === 'hurricane' || moveid === 'weatherball')) forceLearn = true;
					if ((poke.randAbilities[0] === "Drought" || poke.randAbilities[0] === "Chlorophyll" || poke.randAbilities[0] === "Leaf Guard" || poke.randAbilities[0] === "Solar Power" || poke.randAbilities[0] === "Harvest") && (moveid === 'solarbeam' || moveid === 'solarblade' || moveid === 'weatherball')) forceLearn = true;
					if ((poke.randAbilities[0] === "Snow Warning" || poke.randAbilities[0] === "Snow Cloak" || poke.randAbilities[0] === "Ice Body") && (moveid === 'blizzard' || moveid === 'weatherball')) forceLearn = true;
					if ((poke.randAbilities[0] === "Sand Stream" || poke.randAbilities[0] === "Sand Rush" || poke.randAbilities[0] === "Sand Force" || poke.randAbilities[0] === "Sand Veil" || poke.randAbilities[0] === "Normalize") && moveid === 'weatherball') forceLearn = true;
					if ((poke.randAbilities[0] === "Truant" || poke.randAbilities[0] === "Defeatist" || poke.randAbilities[0] === "Slow Start" || poke.randAbilities[0] === "Stall" || poke.randAbilities[0] === "Klutz") && poke.name !== "Slaking" && poke.name !== "Regigigas" && poke.name !== "Archeops" && (moveid == 'skillswap' || moveid == 'entrainment')) forceLearn = true;
					if (poke.randAbilities[0] === "Klutz" && moveid == 'trick') forceLearn = true;
					if (poke.randAbilities[0] === "Gluttony" && moveid == 'recycle') forceLearn = true;
					if (poke.randAbilities[0] === "Contrary" && moveid == 'superpower') forceLearn = true; // feels disappointing without this
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
						'collisioncourse', 'electrodrift', 'ruination', 'malignantchain', 'terastarstorm', 'heartswap',
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
					if ((poke.randAbilities[0] === "Drought" || poke.randAbilities[0] === "Chlorophyll" || poke.randAbilities[0] === "Leaf Guard" || poke.randAbilities[0] === "Solar Power" || poke.randAbilities[0] === "Harvest" || poke.randAbilities[0] === "Blaze" || poke.randAbilities[0] === "Flash Fire") && universalFire.includes(moveid) && move.type === "Fire" && move.category !== "Status") forceLearn = true;
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
								if (usedSecondMoves.includes(altmoveid)) continue;
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
							if (eligibleMoves.length) continue;
							for (const altmoveid of moveGroups[section]) {
								if (usedSecondMoves.includes(altmoveid)) continue;
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
					if (genVTms.includes(moveid)) {
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
						else moveName = moveName + ` (x)`;
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
							else moveName = moveName + ` (x)`;
						}
						// either way
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

				let hpDelta = 0;
				let atkDelta = 0;
				let defDelta = 0;
				let spaDelta = 0;
				let spdDelta = 0;
				let speDelta = 0;

				poke.randHp = poke.baseStats.hp + hpDelta;
				poke.randAtk = poke.baseStats.atk + atkDelta;
				poke.randDef = poke.baseStats.def + defDelta;
				poke.randSpA = poke.baseStats.spa + spaDelta;
				poke.randSpD = poke.baseStats.spd + spdDelta;
				poke.randSpe = poke.baseStats.spe + speDelta;

				if (poke.prevo) {
					const poke2 = this.dataCache.Pokedex[this.toID(poke.prevo)];
					poke2.randHp = poke2.baseStats.hp + (hpDelta / 2);
					poke2.randAtk = poke2.baseStats.atk + (atkDelta / 2);
					poke2.randDef = poke2.baseStats.def + (defDelta / 2);
					poke2.randSpA = poke2.baseStats.spa + (spaDelta / 2);
					poke2.randSpD = poke2.baseStats.spd + (spdDelta / 2);
					poke2.randSpe = poke2.baseStats.spe + (speDelta / 2);
					if (poke2.prevo) {
						const poke3 = this.dataCache.Pokedex[this.toID(poke2.prevo)];
						poke3.randHp = poke3.baseStats.hp + (hpDelta / 2);
						poke3.randAtk = poke3.baseStats.atk + (atkDelta / 2);
						poke3.randDef = poke3.baseStats.def + (defDelta / 2);
						poke3.randSpA = poke3.baseStats.spa + (spaDelta / 2);
						poke3.randSpD = poke3.baseStats.spd + (spdDelta / 2);
						poke3.randSpe = poke3.baseStats.spe + (speDelta / 2);
					}
				}


				poke.learnsetCumulative.learnset.sort();
				if (!poke || !poke.learnsetCumulative.learnset) return;
				// finalize sheetOutput now.........
				let sheetOutput: string[] = [
					`\n\n`
				];

				let crossevo = true; // becomes false shortly if already a 3-stage line
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

				// be ready to add a crossevo here
				/*
				if (crossevo) {
				}
				*/

				// learnset
				let levelUpMovesCount = 0;
				for (const level in poke.learnsetCumulative.learnset) {
					if (parseInt(level) > 99) {
						if (poke.recommendedLvUp.length) {
							poke.recommendedLvUp.sort();
							sheetOutput += `\n~ Additional level-up candidates (pick ` + (22 - levelUpMovesCount) + `)\n`
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
