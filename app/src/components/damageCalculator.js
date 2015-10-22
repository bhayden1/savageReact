import {Component} from 'react';
import {Input} from './numericInput';
import {CharacterList} from './characterList';
import React from 'react';

export class DamageCalculator extends Component {
  render() {
    console.log('rendering damage calculator');
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
