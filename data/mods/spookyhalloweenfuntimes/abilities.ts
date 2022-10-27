export const Abilities: {[abilityid: string]: ModdedAbilityData} = {
	nightshift: {
		onStart(pokemon) {
			if (pokemon.baseSpecies.baseSpecies !== 'Groabat' || pokemon.transformed) return;
			if (pokemon.hp > pokemon.maxhp / 4) {
				if (pokemon.species.id === 'groabat') {
					pokemon.formeChange('Groabat-Waking');
				}
			} else {
				if (pokemon.species.id === 'groabatwaking') {
					pokemon.formeChange('Groabat');
				}
			}
		},
		onResidualOrder: 27,
		onResidual(pokemon) {
			if (
				pokemon.baseSpecies.baseSpecies !== 'Groabat' ||
				pokemon.transformed || !pokemon.hp
			) return;
			if (pokemon.hp > pokemon.maxhp / 4) {
				if (pokemon.species.id === 'groabat') {
					pokemon.formeChange('Groabat-Waking');
				}
			} else {
				if (pokemon.species.id === 'groabatwaking') {
					pokemon.formeChange('Groabat');
				}
			}
		},
		onWeather(target, source, effect) {
			if (target.hasItem('utilityumbrella')) return;
			if (effect.id === 'sunnyday' || effect.id === 'desolateland') {
				this.damage(target.baseMaxhp / 8, target, target);
			}
		},
		isPermanent: true,
		name: "Night Shift",
		rating: 3,
		num: -1,
	},
	afterimage: {
		onFaint(pokemon) {
			pokemon.side.addSlotCondition(pokemon, 'afterimage');
		},
		condition: {
			onSwap(target) {
				target.side.removeSlotCondition(target, 'afterimage');
				if (!target.fainted) {
					target.m.afterimage = true;
					// return to this don't actually add a sub
					if (target.addVolatile('substitute')) {
						target.volatiles['substitute'].hp = this.effectData.hp;
						this.add('-anim', target, "Substitute", target);
					}
				}
			},
		},
		name: "Afterimage",
		rating: 3,
		num: -2,
	},
};
