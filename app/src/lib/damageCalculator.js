'use strict';
/*module.exports = {
  calculateDamage:function(ap, damage, characters) {
    var newCharacters =characters.map(function(character) {
      var armor = character.armor - ap;
      armor = armor < 0 ? 0 : armor;
      var taken = damage - (character.toughness + armor) ;
      character.overflow = taken;
      character.wounds = taken / 4;
      return character;
    });
    return newCharacters;
  }
};
*/
export function calculateDamage(ap, damage, characters) {
  var newCharacters =characters.map(function(character) {
    var armor = character.armor - ap;
    armor = armor < 0 ? 0 : armor;
    var taken = damage - (character.toughness + armor) ;
    character.overflow = taken;
    character.wounds = taken / 4;
    return character;
  });
  return newCharacters;
}
