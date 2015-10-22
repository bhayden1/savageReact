import {Component} from 'react';
import React from 'react';
import {HeaderRow} from './headerRow';
import {Character} from './character';

export class CharacterList extends Component {
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
