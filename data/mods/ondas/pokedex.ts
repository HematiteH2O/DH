export const Pokedex: {[speciesid: string]: SpeciesData} = {

  lycanroc: {
    num: 745,
    name: "Lycanroc",
    baseForme: "Midday",
    types: ["Rock"],
    baseStats: {hp: 75, atk: 115, def: 65, spa: 55, spd: 65, spe: 112},
    abilities: {0: "Keen Eye"},
    tactics: ['intimidate', 'regenerator', 'unnerve', 'drought', 'leechseed'],
    heightm: 0.8,
    weightkg: 25,
    color: "Brown",
    prevo: "Rockruff",
    evoLevel: 25,
    evoCondition: "during the day",
    eggGroups: ["Field"],
    otherFormes: ["Lycanroc-Midnight", "Lycanroc-Dusk"],
    formeOrder: ["Lycanroc", "Lycanroc-Midnight", "Lycanroc-Dusk"],
  },

};
