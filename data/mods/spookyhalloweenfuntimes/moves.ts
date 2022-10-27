export const Moves: {[moveid: string]: ModdedMoveData} = {
	jumpscare: {
		shortDesc: "Hits first. First turn out only. 100% flinch chance.",
		num: -1,
		accuracy: 100,
		basePower: 40,
		category: "Special",
		name: "Jump Scare",
		pp: 10,
		priority: 3,
		flags: {contact: 1, protect: 1, mirror: 1},
		onTry(pokemon, target) {
			if (pokemon.activeMoveActions > 1) {
				this.attrLastMove('[still]');
				this.add('-fail', pokemon);
				this.hint("Jump Scare only works on your first turn out.");
				return null;
			}
		},
		onPrepareHit: function(target, source, move) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "Astonish", target);
		},
		secondary: {
			chance: 100,
			volatileStatus: 'flinch',
		},
		target: "normal",
		type: "Ghost",
		contestType: "Clever",
	},
	spectralweb: {
		shortDesc: "Creates a 'hazard' that fully restores only Hauntarant's HP on entry.",
		num: -2,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Spectral Web",
		pp: 2,
		noPPBoosts: true,
		priority: 0,
		flags: {snatch: 1},
		sideCondition: 'spectralweb',
		condition: {
			onStart(side) {
				this.add('-sidestart', side, 'move: Spectral Web');
			},
			onSwitchIn(pokemon) {
				if (pokemon.species.name !== 'Hauntarant') return;
				if (pokemon.hasItem('heavydutyboots')) return;
				pokemon.heal(pokemon.maxhp);
				this.add('-heal', pokemon, pokemon.getHealth, '[from] move: Spectral Web');
			},
		},
		onPrepareHit: function(target, source, move) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "Sticky Web", target);
		},
		secondary: null,
		target: "allySide",
		type: "Ghost",
		zMove: {boost: {spe: 1}},
		contestType: "Cute",
	},
	exitsmiling: {
		shortDesc: "Sets a layer of Spikes and pivots out. Changes Roserade's form.",
		num: -3,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Exit Smiling",
		pp: 10,
		priority: 0,
		flags: {reflectable: 1, nonsky: 1},
		sideCondition: 'spikes',
		selfSwitch: true,
		onHit(target, pokemon, move) {
			if (pokemon.baseSpecies.baseSpecies === 'Roserade' && !pokemon.transformed) {
    	  const roseradeForme = pokemon.species.id === 'roseradestagehand' ? '' : '-Stagehand';
				pokemon.formeChange('Roserade' + roseradeForme, this.effect, true, '[msg]');
			}
		},
		onPrepareHit: function(target, source, move) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "Encore", source);
		},
		secondary: null,
		target: "foeSide",
		type: "Normal",
		zMove: {boost: {def: 1}},
		contestType: "Cute",
	},
	forcefulburial: {
		shortDesc: "Hits adjacent Pokémon; power doubles if target HP <1/2; boosts Atk, SpA on KO.",
		num: -4,
		accuracy: 100,
		basePower: 75,
		category: "Physical",
		name: "Forceful Burial",
		pp: 10,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		onBasePower(basePower, pokemon, target) {
			if (target.hp * 2 <= target.maxhp) {
				return this.chainModify(2);
			}
		},
		onAfterMoveSecondarySelf(pokemon, target, move) {
			if (!target || target.fainted || target.hp <= 0) this.boost({atk: 1, spa: 1}, pokemon, pokemon, move); // not sure how to make this apply to each target
		},
		onPrepareHit: function(target, source, move) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "Rock Tomb", target);
		},
		secondary: null,
		target: "allAdjacent",
		type: "Dark",
		contestType: "Tough",
	},
	stealthrock: { // edited for Crocs
		inherit: true,
		condition: {
			// this is a side condition
			onStart(side) {
				this.add('-sidestart', side, 'move: Stealth Rock');
			},
			onSwitchIn(pokemon) {
				if (pokemon.hasItem('heavydutyboots')) return;
				const typeMod = this.clampIntRange(pokemon.runEffectiveness(this.dex.getActiveMove('stealthrock')), -6, 6);
				if (pokemon.hasItem('crocs') {
					this.damage(pokemon.maxhp * Math.pow(2, typeMod) / 4);
				} else {
					this.damage(pokemon.maxhp * Math.pow(2, typeMod) / 8);
				}
			},
		},
	},
	spikes: { // edited for Crocs
		inherit: true,
		condition: {
			// this is a side condition
			onStart(side) {
				this.add('-sidestart', side, 'Spikes');
				this.effectData.layers = 1;
			},
			onRestart(side) {
				if (this.effectData.layers >= 3) return false;
				this.add('-sidestart', side, 'Spikes');
				this.effectData.layers++;
			},
			onSwitchIn(pokemon) {
				if (!pokemon.isGrounded()) return;
				if (pokemon.hasItem('heavydutyboots')) return;
				const damageAmounts = [0, 3, 4, 6]; // 1/8, 1/6, 1/4
				if (pokemon.hasItem('crocs')) {
					this.damage(damageAmounts[this.effectData.layers] * pokemon.maxhp / 12);
				} else {
					this.damage(damageAmounts[this.effectData.layers] * pokemon.maxhp / 24);
				}
			},
		},
	},
	toxicspikes: { // edited for Crocs
		inherit: true,
		condition: {
			// this is a side condition
			onStart(side) {
				this.add('-sidestart', side, 'move: Toxic Spikes');
				this.effectData.layers = 1;
			},
			onRestart(side) {
				if (this.effectData.layers >= 2) return false;
				this.add('-sidestart', side, 'move: Toxic Spikes');
				this.effectData.layers++;
			},
			onSwitchIn(pokemon) {
				if (!pokemon.isGrounded()) return;
				if (pokemon.hasType('Poison')) {
					this.add('-sideend', pokemon.side, 'move: Toxic Spikes', '[of] ' + pokemon);
					pokemon.side.removeSideCondition('toxicspikes');
				} else if (pokemon.hasType('Steel') || pokemon.hasItem('heavydutyboots')) {
					return;
				} else if (this.effectData.layers >= 2 || pokemon.hasItem('crocs')) {
					pokemon.trySetStatus('tox', pokemon.side.foe.active[0]);
				} else {
					pokemon.trySetStatus('psn', pokemon.side.foe.active[0]);
				}
			},
		},
	},
	stickyweb: { // edited for Crocs
		inherit: true,
		condition: {
			onStart(side) {
				this.add('-sidestart', side, 'move: Sticky Web');
			},
			onSwitchIn(pokemon) {
				if (!pokemon.isGrounded()) return;
				if (pokemon.hasItem('heavydutyboots')) return;
				this.add('-activate', pokemon, 'move: Sticky Web');
				if (pokemon.hasItem('crocs')) {
					this.boost({spe: -2}, pokemon, this.effectData.source, this.dex.getActiveMove('stickyweb'));
				} else {
					this.boost({spe: -1}, pokemon, this.effectData.source, this.dex.getActiveMove('stickyweb'));
				}
			},
		},
	},
	gmaxsteelsurge: { // edited for Crocs
		inherit: true,
		condition: {
			onStart(side) {
				this.add('-sidestart', side, 'move: G-Max Steelsurge');
			},
			onSwitchIn(pokemon) {
				if (pokemon.hasItem('heavydutyboots')) return;
				// Ice Face and Disguise correctly get typed damage from Stealth Rock
				// because Stealth Rock bypasses Substitute.
				// They don't get typed damage from Steelsurge because Steelsurge doesn't,
				// so we're going to test the damage of a Steel-type Stealth Rock instead.
				const steelHazard = this.dex.getActiveMove('Stealth Rock');
				steelHazard.type = 'Steel';
				const typeMod = this.clampIntRange(pokemon.runEffectiveness(steelHazard), -6, 6);
				if (pokemon.hasItem('crocs')) {
					this.damage(pokemon.maxhp * Math.pow(2, typeMod) / 4);
				} else {
					this.damage(pokemon.maxhp * Math.pow(2, typeMod) / 8);
				}
			},
		},
	},
	rapidspin: { // edited for Spectral Web
		inherit: true,
		onAfterHit(target, pokemon) {
			if (pokemon.hp && pokemon.removeVolatile('leechseed')) {
				this.add('-end', pokemon, 'Leech Seed', '[from] move: Rapid Spin', '[of] ' + pokemon);
			}
			const sideConditions = ['spikes', 'toxicspikes', 'stealthrock', 'stickyweb', 'gmaxsteelsurge', 'spectralweb'];
			for (const condition of sideConditions) {
				if (pokemon.hp && pokemon.side.removeSideCondition(condition)) {
					this.add('-sideend', pokemon.side, this.dex.getEffect(condition).name, '[from] move: Rapid Spin', '[of] ' + pokemon);
				}
			}
			if (pokemon.hp && pokemon.volatiles['partiallytrapped']) {
				pokemon.removeVolatile('partiallytrapped');
			}
		},
		onAfterSubDamage(damage, target, pokemon) {
			if (pokemon.hp && pokemon.removeVolatile('leechseed')) {
				this.add('-end', pokemon, 'Leech Seed', '[from] move: Rapid Spin', '[of] ' + pokemon);
			}
			const sideConditions = ['spikes', 'toxicspikes', 'stealthrock', 'stickyweb', 'gmaxsteelsurge', 'spectralweb'];
			for (const condition of sideConditions) {
				if (pokemon.hp && pokemon.side.removeSideCondition(condition)) {
					this.add('-sideend', pokemon.side, this.dex.getEffect(condition).name, '[from] move: Rapid Spin', '[of] ' + pokemon);
				}
			}
			if (pokemon.hp && pokemon.volatiles['partiallytrapped']) {
				pokemon.removeVolatile('partiallytrapped');
			}
		},
	},
	defog: { // edited for Spectral Web
		inherit: true,
		onHit(target, source, move) {
			let success = false;
			if (!target.volatiles['substitute'] || move.infiltrates) success = !!this.boost({evasion: -1});
			const removeTarget = [
				'reflect', 'lightscreen', 'auroraveil', 'safeguard', 'mist', 'spikes', 'toxicspikes', 'stealthrock', 'stickyweb', 'gmaxsteelsurge', 'spectralweb',
			];
			const removeAll = [
				'spikes', 'toxicspikes', 'stealthrock', 'stickyweb', 'gmaxsteelsurge', 'spectralweb',
			];
			for (const targetCondition of removeTarget) {
				if (target.side.removeSideCondition(targetCondition)) {
					if (!removeAll.includes(targetCondition)) continue;
					this.add('-sideend', target.side, this.dex.getEffect(targetCondition).name, '[from] move: Defog', '[of] ' + source);
					success = true;
				}
			}
			for (const sideCondition of removeAll) {
				if (source.side.removeSideCondition(sideCondition)) {
					this.add('-sideend', source.side, this.dex.getEffect(sideCondition).name, '[from] move: Defog', '[of] ' + source);
					success = true;
				}
			}
			this.field.clearTerrain();
			return success;
		},
	},
	gmaxwindrage: { // edited for Spectral Web
		inherit: true,
		self: {
			onHit(source) {
				let success = false;
				const removeTarget = [
					'reflect', 'lightscreen', 'auroraveil', 'safeguard', 'mist', 'spikes', 'toxicspikes', 'stealthrock', 'stickyweb', 'spectralweb',
				];
				const removeAll = ['spikes', 'toxicspikes', 'stealthrock', 'stickyweb', 'gmaxsteelsurge', 'spectralweb'];
				for (const targetCondition of removeTarget) {
					if (source.side.foe.removeSideCondition(targetCondition)) {
						if (!removeAll.includes(targetCondition)) continue;
						this.add('-sideend', source.side.foe, this.dex.getEffect(targetCondition).name, '[from] move: G-Max Wind Rage', '[of] ' + source);
						success = true;
					}
				}
				for (const sideCondition of removeAll) {
					if (source.side.removeSideCondition(sideCondition)) {
						this.add('-sideend', source.side, this.dex.getEffect(sideCondition).name, '[from] move: G-Max Wind Rage', '[of] ' + source);
						success = true;
					}
				}
				this.field.clearTerrain();
				return success;
			},
		},
	},
	courtchange: { // edited for Spectral Web
		inherit: true,
		onHitField(target, source) {
			const sourceSide = source.side;
			const targetSide = source.side.foe;
			const sideConditions = [
				'mist', 'lightscreen', 'reflect', 'spikes', 'safeguard', 'tailwind', 'toxicspikes', 'stealthrock', 'waterpledge', 'firepledge', 'grasspledge', 'stickyweb', 'spectralweb', 'auroraveil', 'gmaxsteelsurge', 'gmaxcannonade', 'gmaxvinelash', 'gmaxwildfire',
			];
			let success = false;
			for (const id of sideConditions) {
				const effectName = this.dex.getEffect(id).name;
				if (sourceSide.sideConditions[id] && targetSide.sideConditions[id]) {
					[sourceSide.sideConditions[id], targetSide.sideConditions[id]] = [
						targetSide.sideConditions[id], sourceSide.sideConditions[id],
					];
					this.add('-sideend', sourceSide, effectName, '[silent]');
					this.add('-sideend', targetSide, effectName, '[silent]');
				} else if (sourceSide.sideConditions[id] && !targetSide.sideConditions[id]) {
					targetSide.sideConditions[id] = sourceSide.sideConditions[id];
					delete sourceSide.sideConditions[id];
					this.add('-sideend', sourceSide, effectName, '[silent]');
				} else if (targetSide.sideConditions[id] && !sourceSide.sideConditions[id]) {
					sourceSide.sideConditions[id] = targetSide.sideConditions[id];
					delete targetSide.sideConditions[id];
					this.add('-sideend', targetSide, effectName, '[silent]');
				} else {
					continue;
				}
				let sourceLayers = sourceSide.sideConditions[id] ? (sourceSide.sideConditions[id].layers || 1) : 0;
				let targetLayers = targetSide.sideConditions[id] ? (targetSide.sideConditions[id].layers || 1) : 0;
				for (; sourceLayers > 0; sourceLayers--) {
					this.add('-sidestart', sourceSide, effectName, '[silent]');
				}
				for (; targetLayers > 0; targetLayers--) {
					this.add('-sidestart', targetSide, effectName, '[silent]');
				}
				success = true;
			}
			if (!success) return false;
			this.add('-activate', source, 'move: Court Change');
		},
	},
	hyperspacefury: { // edited for Cozminea
		inherit: true,
		onTry(pokemon) {
			if (pokemon.species.name === 'Hoopa-Unbound' || pokemon.species.name === 'Cozminea-True' || pokemon.species.name === 'Cozminevil') {
				return;
			}
			this.hint("Only a Pokemon whose form is Hoopa Unbound, Cozminea-True or Cozminevil can use this move.");
			if (pokemon.species.name === 'Hoopa' || pokemon.species.name === 'Cozminea' || pokemon.species.name === 'Cozminea-Hallowed') {
				this.add('-fail', pokemon, 'move: Hyperspace Fury', '[forme]');
				return null;
			}
			this.add('-fail', pokemon, 'move: Hyperspace Fury');
			return null;
		},
	},
};
