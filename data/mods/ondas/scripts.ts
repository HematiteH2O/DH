export const Scripts: {[k: string]: ModdedBattleScriptsData} = {
	onBeforeSwitchIn(pokemon) {
		const tactics = pokemon.species.tactics && this.dex.getSpecies(pokemon.baseSpecies.tactics);
		console.log(tactics);
		if (tactics) {
			for (const tactic of tactics) {
				console.log(tactic);
				pokemon.addVolatile(tactic);
				console.log(pokemon.volatiles);
			}
		}
	},
};
