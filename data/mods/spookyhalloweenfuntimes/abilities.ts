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
					if (target.hasType('Ghost')) return;
					if (!target.addType('Ghost')) return;
					this.add('-start', target, 'typeadd', 'Ghost', '[from] Ability: Afterimage', '[of] ' + this.effectData.source);
				}
			},
		},
		name: "Afterimage",
		rating: 3,
		num: -2,
	},
};
