var characters = [
  {name: "Kyden", job: "Paladin", toughness: 11, key: 1, overflow: 0, wounds: 0, armor: 6},
  {name: "Frey", job: "Scholar", toughness: 6, key: 2, overflow: 0, wounds: 0, armor: 2},
  {name: "BT", job: "Dragoon", toughness: 8, key: 3, overflow: 0, wounds: 0, armor: 4}
];

var enemies = [
  {name: "Bahamut", job: "Paladin", toughness: 11, key: 1, overflow: 0, wounds: 0, armor: 6},
  {name: "Shiva", job: "Scholar", toughness: 6, key: 2, overflow: 0, wounds: 0, armor: 2},
  {name: "Ifrit", job: "Dragoon", toughness: 8, key: 3, overflow: 0, wounds: 0, armor: 4}
];

export function damageCalculatorStore() {
  return {
    ap: 0,
    damage: 0,
    characters: characters,
    enemies: enemies
  };
}
