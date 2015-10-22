import {Component} from 'react';
import React from 'react';

export class Input extends Component {
  render() {
    return (
      <label className="item-input">
        <span className="input-label">{this.props.label}</span>
        <input type="number" placeholder={this.props.hint} onChange={this.props.changed} ></input>
      </label>
    );
  }
}
