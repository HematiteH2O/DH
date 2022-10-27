export const Items: {[itemid: string]: ModdedItemData} = {
	cursedportrait: {
		name: "Cursed Portrait",
		spritenum: 385,
		fling: {
			basePower: 70,
		},
		onDamagingHitOrder: 1,
		onDamagingHit(damage, target, source, move) {
			if (!target.hp) {
				if (target.hasType('Ghost')) source.addVolatile('curse');
				// if (target.species.baseSpecies === 'Gardevoir') target.formeChange('Possessevoir', this.effect, true);
				// this will look like Primal Reversion so I would need to change it
			}
		},
		num: -1,
		gen: 8,
		desc: "A Ghost-type holder curses the attacker when it faints.",
	},
	drampaniteaged: {
		name: "Drampanite-Aged",
		spritenum: 586,
		megaStone: "Drampa-Mega-Aged",
		megaEvolves: "Drampa",
		itemUser: ["Drampa"],
		onTakeItem(item, source) {
			if (item.megaEvolves === source.baseSpecies.baseSpecies) return false;
			return true;
		},
		num: -2,
		gen: 8,
		desc: "If held by a Drampa, this item allows it to Mega Evolve in battle.",
	},
	drampaniteuntimely: {
		name: "Drampanite-Untimely",
		spritenum: 586,
		megaStone: "Drampa-Mega-Untimely",
		megaEvolves: "Drampa",
		itemUser: ["Drampa"],
		onTakeItem(item, source) {
			if (item.megaEvolves === source.baseSpecies.baseSpecies) return false;
			return true;
		},
		num: -3,
		gen: 8,
		desc: "If held by a Drampa, this item allows it to Mega Evolve in battle.",
	},
	hatofdisguise: {
		name: "Hat of Disguise",
		spritenum: 385,
		fling: {
			basePower: 70,
		},
		onBeforeSwitchIn(pokemon) {
			if (pokemon.ability === 'illusion') return;
			pokemon.illusion = null;
			let i;
			for (i = pokemon.side.pokemon.length - 1; i > pokemon.position; i--) {
				if (!pokemon.side.pokemon[i]) continue;
				if (!pokemon.side.pokemon[i].fainted) break;
			}
			if (!pokemon.side.pokemon[i]) return;
			if (pokemon === pokemon.side.pokemon[i]) return;
			pokemon.illusion = pokemon.side.pokemon[i];
			pokemon.setAbility('illusion');
		},
		onDamagingHit(damage, target, source, move) {
			if (target.illusion) {
				target.useItem();
				target.setAbility(target.baseAbility);
			}
		},
		onFaint(pokemon) {
			if (target.illusion) {
				target.useItem();
				target.setAbility(target.baseAbility);
			}
		},
		num: -4,
		gen: 8,
		desc: "The holder's Ability is Illusion. Consumed when the Illusion is broken.",
	},
};
