const Dice = require('./Tools/Dice');
const Character = require('./Models/Character');

class Human extends Character {
    // Constructeur
    constructor() {
        // Appel du constructeur de la classe parent Character
        super();

        // Propriétés privées propres à la classe Human
        // this._name = prompt("Entrez votre nom : ");
        this._strength = this.statCalc() + 1;
        this._endurance = this.statCalc() + 1;
        this._pv = this.modifierCalc(this._endurance);
        this._currentPv = this._pv;
        this._gold = 0;
    }

    // Getters et setters propres à la classe Human
    get currentPv() {
        return this._currentPv;
    }

    set currentPv(value) {
        this._currentPv -= value;
    }

    get damage() {
        return this._damage;
    }

    set damage(value) {
        this._damage = value;
    }

    get gold() {
        return this._gold;
    }

    set gold(value) {
        this._gold = value;
    }



    // Méthodes propres à la classe Human
    statCalc() {
        // Appel de la méthode statCalc de la classe parent Character
        return super.statCalc();
    }

    modifierCalc(value) {
        let pvBonus = 0;
        if (value < 5) {
            pvBonus -= 1;
        } else if (value < 10) {
            pvBonus += 0;
        } else if (value < 15) {
            pvBonus += 1;
        } else {
            pvBonus += 2;
        }
        value += pvBonus;
        return value;
    }

    showStat() {
        let msg = `${this._name} l'humain \n`;
        msg += `force :${this._strength}\n`;
        msg += `endurance :${this._endurance}\n`;
        msg += `PV :${this._currentPv}/${this._pv}\n`;
        msg += `Or : ${this._gold}\n`;

        console.log(msg);
        return msg;
    }

    giveDamage() {
        const d4 = new Dice();
        this._damage = d4.throwDice(4) + 1;
        this.modifierCalc(this._damage);
        console.log(`${this._name} inflige ${this._damage} dégats`);
        return this._damage;
    }

    takeDamage(value) {
        this._currentPv -= value;
        return this._currentPv;
    }

    retrieve(AI) {
        // Appel de la méthode retrieve de la classe parent Character
        return super.retrieve(AI);
    }
}

// Exportation de la classe Human pour pouvoir l'utiliser dans d'autres fichiers
module.exports = Human;
