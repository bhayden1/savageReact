var React = require('react');
var ReactDOM = require('react-dom');

var HeaderRow = React.createClass({
  render: function() {
    return(
      <div className="row item item-divider">
        <div className="col col-33">Name</div>
        <div className="col">T</div>
      </div>
    )
  }
})

var characters = [
  {name: "Kyden", job: "Paladin", toughness: 11, key: 1},
  {name: "Frey", job: "Scholar", toughness: 6, key: 2},
  {name: "BT", job: "Dragoon", toughness: 8, key: 3}
]

var CharacterList = React.createClass({
  render:function() {
    var characterNodes = this.props.characters.map(function(character) {
      return (
        <Character key={character.key} name={character.name} toughness={character.toughness}/>
      )
    });
    return (
      <div className="list">
        <HeaderRow />
        {characterNodes}
      </div>
    )
  }
});

var Character = React.createClass({
  render:function() {
    return(
      <div className="row item">
        <div className="col col-33">{this.props.name}</div>
        <div className="col">{this.props.toughness}</div>
      </div>
    )
  }
});

var Input = React.createClass({
  render: function() {
    return (
      <label className="item-input">
        <span className="input-label">{this.props.label}</span>
        <input type="text" placeholder={this.props.hint}></input>
      </label>
    )
  }
});

var DamageCalculator = React.createClass({
  render: function() {
    return (
      <div>
        <Input label="Damage" hint="Enter Damage" />
        <Input label="AP" hint="Enter AP" />
        <CharacterList characters={this.props.characters} />
      </div>
    )
  }
});

ReactDOM.render(
  <DamageCalculator characters={characters} />,
  document.getElementById('character-list')
);
