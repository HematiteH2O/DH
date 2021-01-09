export const Conditions: {[k: string]: ConditionData} = {

	intimidate: {
		condition: {
			onStart(pokemon) {
				let activated = false;
				for (const target of pokemon.side.foe.active) {
					if (!target || !this.isAdjacent(target, pokemon)) continue;
					if (!activated) {
						this.add('-ability', pokemon, 'Intimidate', 'boost');
						activated = true;
					}
					if (target.volatiles['substitute']) {
						this.add('-immune', target);
					} else {
						this.boost({atk: -1}, target, pokemon, null, true);
					}
				}
			}
		},
	},
	unnerve: {
		condition: {
			onPreStart(pokemon) {
				this.add('-ability', pokemon, 'Unnerve', pokemon.side.foe);
			},
			onFoeTryEatItem: false,
		},
	},
	drought: {
		condition: {
			onStart(source) {
				for (const action of this.queue) {
					if (action.choice === 'runPrimal' && action.pokemon === source && source.species.id === 'groudon') return;
					if (action.choice !== 'runSwitch' && action.choice !== 'runPrimal') break;
				}
				this.field.setWeather('sunnyday');
			}
		},
	},
	regenerator: {
		condition: {
			onSwitchOut(pokemon) {
				pokemon.heal(pokemon.baseMaxhp / 3);
			},
		},
	},

};
