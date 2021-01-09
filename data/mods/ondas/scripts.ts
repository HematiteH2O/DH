export const Scripts: {[k: string]: ModdedBattleScriptsData} = {
  onBeforeSwitchIn(pokemon) {
    const tactics = pokemon.species.tactics && this.dex.getSpecies(pokemon.baseSpecies.tactics);
    if (tactics) {
      for (const tactic of tactics) {
        pokemon.addVolatile(tactic);
      }
    }
  },
};
