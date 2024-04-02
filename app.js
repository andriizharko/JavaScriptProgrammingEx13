let myPlayer = {
  firstname: "Galadrial",
  lastName: "Leaf",
  hitPoint: 30,
  weapon: "Bow",
  strength: 5,

  /**
   *
   * @returns
   */
  attack: function () {
    let baseAttack = Math.round(Math.random() * 10);
    return baseAttack + myPlayer.strength;
  },
};

console.log(myPlayer);

let playerName = `${myPlayer.firstname} ${myPlayer.lastName}`;

console.log(playerName);

let attackHp = myPlayer.attack();

console.log(attackHp);

myPlayer.strength = 88;

attackHp = myPlayer.attack();

console.log(attackHp);

myPlayer.mana = 30;
myPlayer["type"] = "Fighter";
myPlayer["weapon"] = "Sword";

console.log(myPlayer);

myPlayer.attack = "WHU!";

console.log(myPlayer);
