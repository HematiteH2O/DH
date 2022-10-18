export const Moves: {[k: string]: ModdedMoveData} = {
	uncannysynergism: {
		num: -793,
		accuracy: true,
		basePower: 160,
		category: "Special",
		isNonstandard: "Past",
		name: "Uncanny Synergism",
		shortDesc: "Boosts the user and its allies' highest stat by 1 stage. Hits adjacent foes.",
		pp: 1,
		priority: 0,
		flags: {},
		isZ: "nihilegiumz",
		onPrepareHit(target, source, move) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "Acid Downpour", target);
		},
		self: {
			onAfterMove(pokemon) {
				for (const ally of pokemon.side.active) {
					let statName = 'atk';
					let bestStat = 0;
					let s: StatNameExceptHP;
					for (s in ally.storedStats) {
						if (ally.storedStats[s] > bestStat) {
							statName = s;
							bestStat = ally.storedStats[s];
						}
					}
					this.boost({[statName]: 1}, ally);
				}
			},
		},
		target: "allAdjacentFoes",
		type: "Poison",
		contestType: "Clever",
	},
};
