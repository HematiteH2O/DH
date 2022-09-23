export const Abilities: {[abilityid: string]: ModdedAbilityData} = {
	almsgiver: {
		shortDesc: "On switching out, shares a copy of its item with its replacement.",
		onSwitchOut(pokemon) {
			if (pokemon.item && pokemon.side.addSlotCondition(pokemon, 'almsgiver')) {
				Object.assign(pokemon.side.slotConditions[pokemon.position]['almsgiver'], {
					item: pokemon.item,
				});
			}
		},
		condition: {
			onSwap(target) {
				target.side.removeSlotCondition(target, 'almsgiver'); // always remove immediately even if it doesn't activate (you can remove this if you want it to be stored like Healing Wish)
				if (!target.fainted) {
					if (!target.item && this.effectData.item && target.setItem(this.effectData.item)) {
						this.add('-ability', this.effectData.source, 'Alms Giver');
						this.add('-item', target, this.dex.getItem(this.effectData.item), '[from] Ability: Alms Giver', '[of] ' + this.effectData.source);
					}
				}
			},
		},
		name: "Alms Giver",
		rating: 3,
		num: -1,
	},
	illusion: {
		inherit: true,
		onEnd(pokemon) {
			if (pokemon.illusion) {
				this.debug('illusion cleared');
				pokemon.illusion = null;
				const details = pokemon.species.name + (pokemon.level === 100 ? '' : ', L' + pokemon.level) +
					(pokemon.gender === '' ? '' : ', ' + pokemon.gender) + (pokemon.set.shiny ? ', shiny' : '');
				this.add('replace', pokemon, details);
				this.add('-end', pokemon, 'Illusion');
        if (pokemon.species.teraType) this.add('-start', pokemon, 'typechange', pokemon.species.types.join('/'), '[silent]');
			}
		},
	},
	angershell: {
		shortDesc: "When this Pokémon reaches 1/2 or less of its max HP: +1 Atk/SpA/Spe, -1 Def/SpD.",
		onAfterMoveSecondary(target, source, move) {
			if (!source || source === target || !target.hp || !move.totalDamage) return;
			const lastAttackedBy = target.getLastAttackedBy();
			if (!lastAttackedBy) return;
			const damage = move.multihit ? move.totalDamage : lastAttackedBy.damage;
			if (target.hp <= target.maxhp / 2 && target.hp + damage > target.maxhp / 2) {
				// this.boost({atk: 1, def: -1, spa: 1, spd: -1, spe: 1});
				// the above works, but it takes forever! let's make it a shorter display:
				const angerShellBoost: SparseBoostsTable = {};
				angerShellBoost.def = -1;
				angerShellBoost.spd = -1;
				angerShellBoost.atk = 1;
				angerShellBoost.spa = 1;
				angerShellBoost.spe = 1;
				this.boost(angerShellBoost);
			}
		},
		name: "Anger Shell",
		rating: 4,
		num: -1001,
	},
};
