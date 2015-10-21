import React from 'react';
import {Component} from 'react';
import ReactDOM from 'react-dom';
import {calculateDamage} from './lib/damageCalculator';
import {_} from 'lodash';
import {createStore} from 'redux';
import { Provider } from 'react-redux';
import { connect } from 'react-redux';

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

var initialState = function() {
  return {
    ap: 0,
    damage: 0,
    characters: characters,
    enemies: enemies
  };
};

function characterList(state=initialState(), action) {
  var newCharacters;
  var newEnemies;
  console.log('store called with:' + action.type);
  switch(action.type) {
    case 'AP':
      newCharacters = calculateDamage(action.ap, state.damage, state.characters);
      newEnemies = calculateDamage(action.ap, state.damage, state.enemies);
      return _.assign({}, state, {
        ap: action.ap,
        characters: newCharacters,
        enemies: newEnemies,
      });
    case 'DAMAGE':
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

var store = createStore(characterList);
store.subscribe(()=> console.log(store.getState()));

class HeaderRow extends Component{
  render() {
    return(
      <div className="row item item-divider">
        <div className="col col-33">Name</div>
        <div className="col">T</div>
        <div className="col">A</div>
        <div className="col">OF</div>
        <div className="col">WND</div>
      </div>
    )
  }
}

class CharacterList extends Component {
  render() {
    var characterNodes = this.props.characters.map(function(character) {
      return (
        <Character key={character.key} name={character.name} toughness={character.toughness} wounds={character.wounds} overflow={character.overflow} armor={character.armor}/>
      );
    });
    return (
      <div className="list">
        <HeaderRow />
        {characterNodes}
      </div>
    );
  }
}

class Character extends Component{
  render() {
    return(
      <div className="row item">
        <div className="col col-33">{this.props.name}</div>
        <div className="col">{this.props.toughness}</div>
        <div className="col">{this.props.armor}</div>
        <div className="col">{this.props.overflow}</div>
        <div className="col">{this.props.wounds}</div>
      </div>
    );
  }
}

class Input extends Component {
  render() {
    return (
      <label className="item-input">
        <span className="input-label">{this.props.label}</span>
        <input type="number" placeholder={this.props.hint} onChange={this.props.changed} ></input>
      </label>
    );
  }
}
function mapStateToProps(state) {
  return {
    characters: state.characters,
    enemies: state.enemies,
    damage: state.damage,
    ap:state.ap
  };
}

function mapDispatchToProps(dispatch) {
  return {
    damageEntered: (evt)=>dispatch({type: 'DAMAGE', damage: evt.target.value}),
    apEntered: (evt)=>dispatch({type:'AP', ap: evt.target.value})
  };
}

var dispatch = {
    damageEntered: (damage)=>dispatch({type: 'DAMAGE', damage: damage}),
    apEntered: (ap)=>dispatch({type:'AP', ap: ap})
};

class DamageCalculatorR extends Component {
  render() {
    console.log(this.props.damageEntered);
    console.log(this.props.apEntered);
    return (
      <div>
        <Input label="Damage" hint="Enter Damage" changed={this.props.damageEntered} />
        <Input label="AP" hint="Enter AP" changed={this.props.apEntered}/>
        <CharacterList characters={this.props.characters} />
        <CharacterList characters={this.props.enemies} />
      </div>
    );
  }
}
var DamageCalcRR = connect(mapStateToProps, mapDispatchToProps)(DamageCalculatorR);


ReactDOM.render(
  <Provider store={store}>
    <DamageCalcRR />
  </Provider>,
  document.getElementById('character-list')
);
