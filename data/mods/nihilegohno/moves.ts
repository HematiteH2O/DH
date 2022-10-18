export const Moves: {[k: string]: ModdedMoveData} = {
	uncannysynergism: {
		num: -793,
		accuracy: true,
		basePower: 160,
		category: "Special",
		isNonstandard: "Past",
		name: "Uncanny Synergism",
		pp: 1,
		priority: 0,
		flags: {},
		isZ: "nihilegiumz",
		onPrepareHit(target, source, move) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "Acid Downpour", target);
		},
		self: {
			onHit(source) {
				for (const pokemon of source.side.active) {
					let statName = 'atk';
					let bestStat = 0;
					let s: StatNameExceptHP;
					for (s in pokemon.storedStats) {
						if (pokemon.storedStats[s] > bestStat) {
							statName = s;
							bestStat = pokemon.storedStats[s];
						}
					}
					this.boost({[statName]: 1}, pokemon);
				}
			},
		},
		target: "allAdjacentFoes",
		type: "Poison",
		contestType: "Clever",
	},
};
