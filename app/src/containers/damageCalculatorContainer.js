import { connect } from 'react-redux';
import {damage} from '../actions/damageCalculatorActions';
import {ap} from '../actions/damageCalculatorActions';
import {DamageCalculator} from '../components/damageCalculator';
import React from 'react';

export function mapStateToProps(state) {
  console.log('map to props')
  console.log(state);
  return {
    characters: state.characters,
    enemies: state.enemies,
    damage: state.damage,
    ap:state.ap
  };
}

export function mapDispatchToProps(dispatch) {
  return {
    damageEntered: (evt)=>dispatch(ap(evt.target.value)),
    apEntered: (evt)=>dispatch(damage(evt.target.value))
  };
}

export var container = connect(mapStateToProps, mapDispatchToProps)(DamageCalculator);
