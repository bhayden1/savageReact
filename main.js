var React = require('react');
var ReactDOM = require('react-dom');

var Header = React.createClass({
  render: function() {
    return (
      <h1>{this.props.text}</h1>
    );
  }
});

var characters = [
  {name: "Kyden", job: "Paladin"},
  {name: "Frey", job: "Scholar"},
  {Name: "BT", job: "Dragoon"}
]

var CharacterList = React.createClass({
  render:function() {
    var characterNodes = this.props.characters.map(function(character) {
      return (
        <Character name={character.name} class={character.job}/>
      )
    });
    return (
      <div className="character">
        <Header text="Characters"/>
        {characterNodes}
      </div>
    )
  }
});

var Character = React.createClass({
  render:function() {
    return(
      <div className="character">
        <strong>{this.props.name}</strong>
        {this.props.class}
      </div>
    )
  }
});

ReactDOM.render(
  <CharacterList characters={characters} />,
  document.getElementById('character-list')
);
