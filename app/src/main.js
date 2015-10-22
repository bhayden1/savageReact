import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import { Provider } from 'react-redux';
import { connect } from 'react-redux';
import {mapStateToProps, mapDispatchToProps, container} from './containers/damageCalculatorContainer';
import {DamageCalculator} from './components/damageCalculator';
import {damageCalculatorReducers} from './reducers/DamageCalculator';

var store = createStore(damageCalculatorReducers);
store.subscribe(()=> console.log(store.getState()));

//TODO - why does this work but container does not?
var DamageCalcRR = connect(mapStateToProps, mapDispatchToProps)(DamageCalculator);

ReactDOM.render(
  <Provider store={store}>
    <DamageCalcRR />
  </Provider>,
  document.getElementById('character-list')
);
