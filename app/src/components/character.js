import {Component} from 'react';
import React from 'react';

export class Character extends Component {
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
