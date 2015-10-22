export var damageCalculatorActions = {
  damage: 'damage',
  ap: 'ap'
}

export function damage(damage) {
  return {
    type: damageCalculatorActions.damage,
    damage: damage
  };
}

export function ap(ap) {
  return {
    type: damageCalculatorActions.ap,
    ap: ap
  };
}
