import {Component} from 'react';
import React from 'react';

export class HeaderRow extends Component{
  render() {
    return(
      <div className="row item item-divider">
        <div className="col col-33">Name</div>
        <div className="col">T</div>
        <div className="col">A</div>
        <div className="col">OF</div>
        <div className="col">WND</div>
      </div>
    );
  }
}
