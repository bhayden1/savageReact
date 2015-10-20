var React = require('react');
var ReactDOM = require('react-dom');
var calculator = require('./lib/damageCalculator.js');

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

var HeaderRow = React.createClass({
  render: function() {
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
});

var DividerRow = React.createClass({
  render: function() {
    return (
      <div className="row item item-divider">
      </div>
    )
  }
});

var CharacterList = React.createClass({
  render:function() {
    var characterNodes = this.props.characters.map(function(character) {
      return (
        <Character key={character.key} name={character.name} toughness={character.toughness} wounds={character.wounds} overflow={character.overflow} armor={character.armor}/>
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
        <div className="col">{this.props.armor}</div>
        <div className="col">{this.props.overflow}</div>
        <div className="col">{this.props.wounds}</div>
      </div>
    )
  }
});

var Input = React.createClass({
  changed: function(evt) {
    this.props.changed(evt.target.value);
  },
  render: function() {
    return (
      <label className="item-input">
        <span className="input-label">{this.props.label}</span>
        <input type="number" placeholder={this.props.hint} onChange={this.changed} ></input>
      </label>
    )
  }
});

var DamageCalculator = React.createClass({
  loadCharacters: function() {
    var timeout = (function() {
      this.setState({characters: characters});
      this.setState({enemies: enemies});
    }).bind(this)
    setTimeout(timeout, 1000);
  },
  damageEntered: function(damage) {
    var ap = this.state.ap || 0;    
    var newCharacters = calculator.calculateDamage(ap, damage, this.state.characters);
    var newEnemies = calculator.calculateDamage(ap, damage, this.state.enemies);
    this.setState({characters: newCharacters, damage: damage, enemies: newEnemies});
  },
  apEntered: function(ap) {
    var damage = this.state.damage || 0;
    var newCharacters = calculator.calculateDamage(ap, damage, this.state.characters);
    var newEnemies = calculator.calculateDamage(ap, damage, this.state.enemies);
    this.setState({characters: newCharacters, ap: ap, enemies: newEnemies});
  },
  getInitialState: function() {
    return {characters: [], enemies: [], damage: 0, ap: 0};
  },
  componentDidMount: function() {
    this.loadCharacters();
  },
  render: function() {
    return (
      <div>
        <Input label="Damage" hint="Enter Damage" changed={this.damageEntered} />
        <Input label="AP" hint="Enter AP" changed={this.apEntered}/>
        <CharacterList characters={this.state.characters} />
        <CharacterList characters={this.state.enemies} />
      </div>
    )
  }
});

ReactDOM.render(
  <DamageCalculator characters={characters} />,
  document.getElementById('character-list')
);
