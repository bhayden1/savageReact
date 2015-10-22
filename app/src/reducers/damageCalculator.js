import {damageCalculatorStore} from '../store/damageCalculatorStore';
import {damageCalculatorActions} from '../actions/damageCalculatorActions';
import {calculateDamage} from '../lib/damageCalculator';
import {_} from 'lodash';

export function damageCalculatorReducers(state=damageCalculatorStore(), action) {
  var newCharacters;
  var newEnemies;
  console.log('store called with:' + action.type);
  switch(action.type) {
    case damageCalculatorActions.ap:
      newCharacters = calculateDamage(action.ap, state.damage, state.characters);
      newEnemies = calculateDamage(action.ap, state.damage, state.enemies);
      return _.assign({}, state, {
        ap: action.ap,
        characters: newCharacters,
        enemies: newEnemies,
      });
    case damageCalculatorActions.damage:
      newCharacters = calculateDamage(state.ap, action.damage, state.characters);
      newEnemies = calculateDamage(state.ap, action.damage, state.enemies);
      return _.assign({}, state, {
        damage: action.damage,
        characters: newCharacters,
        enemies: newEnemies,
      });
    default:
      return state;
  }
}
