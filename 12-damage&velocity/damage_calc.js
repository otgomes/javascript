// Name and attack power of the attacker character
const nameCharacter1 = prompt("Insert the name of the attacker character:");
const attackLvl = parseFloat(prompt("Insert the attack level:"));

// Name, hitpoints and defense level of the defensive character
const nameCharacter2 = prompt("Insert the name of the defensive character:");
let hitpointsLvl = parseFloat(prompt("Insert the amount of hitpoints:"));
const defenseLvl = parseFloat(prompt("Insert the defense level"));
const shield = confirm("Does the defensive character have a shield?") ? "Yes" : "No";
let damageDealt = 0

// Calculation of the damage dealt based on rules
if (attackLvl > defenseLvl && shield === "No") {
    damageDealt = attackLvl - defenseLvl
}    else if (attackLvl > defenseLvl && shield === "Yes") {
        damageDealt = (attackLvl - defenseLvl) / 2
}

hitpointsLvl -= damageDealt

// Show characters info and damage dealt
console.log(nameCharacter1 + " attacked and dealt " + damageDealt + " in " + nameCharacter2)
console.log(
    nameCharacter1 + "\nAttack Level: " + attackLvl + "\n\n" +
    nameCharacter2 + "\nHitpoints: " + hitpointsLvl +
    "\nDefense Level: " + defenseLvl + "\nHave a shield? " + shield
)

alert(nameCharacter1 + " attacked and dealt " + damageDealt + " damage in " + nameCharacter2)
alert(
    nameCharacter1 + "\nAttack Level: " + attackLvl + "\n\n" +
    nameCharacter2 + "\nHitpoints: " + hitpointsLvl +
    "\nDefense Level: " + defenseLvl + "\nHave a shield? " + shield
)