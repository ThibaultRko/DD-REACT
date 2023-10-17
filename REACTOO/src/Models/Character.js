// Importation de la classe Dice depuis le module Dice
const Dice = require('./Tools/Dice');

class Character {
    // Constructeur
    constructor() {
        // Propriétés privées
        this._strength = 0;
        this._endurance = 0;
        this._pv = this._endurance;
    }

    // Getters
    get strength() {
        return this._strength;
    }

    get endurance() {
        return this._endurance;
    }

    get pv() {
        return this._pv;
    }

    // Méthodes

    // Méthode pour calculer les statistiques
    statCalc() {
        let i = 0;
        const d6 = new Dice();
        const result = [];

        while (i < 4) {
            result.push(d6.throwDice(6));
            i++;
        }

        // Suppression du plus petit résultat
        result.splice(result.indexOf(Math.min(...result)), 1);
        const sumResult = result.reduce((acc, val) => acc + val, 0);

        return sumResult;
    }

    // Méthode pour calculer le modificateur
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

    // Méthode pour afficher les statistiques
    showStat() {
        let msg = `force: ${this._strength}\n`;
        msg += `endurance: ${this._endurance}\n`;
        msg += `pv: ${this._pv}\n`;

        console.log(msg);
        return msg;
    }

    // Méthode à implémenter : donner des dégâts
    giveDamage() {
        // Implémenter cette méthode en fonction de la logique de ton jeu
    }

    // Méthode à implémenter : subir des dégâts
    takeDamage(value) {
        // Implémenter cette méthode en fonction de la logique de ton jeu
    }

    // Méthode pour le combat
    fight(AI) {
        console.log("Le combat commence");

        while (this._pv > 0 && AI._pv > 0) {
            AI.takeDamage(this.giveDamage());
            AI.showStat();

            if (AI._pv <= 0) {
                console.log("MONSTER IS DEAD");
                this.retrieve(AI);
                break;
            }

            this.takeDamage(AI.giveDamage());
            this.showStat();

            if (this._pv <= 0) {
                console.log("GAME OVER");
            }
        }
    }

    // Méthode pour récupérer des récompenses après le combat
    retrieve(AI) {
        this._gold += AI._gold;
        this._leather += AI._leather;
        return [this._gold, this._leather];
    }
}

// Exportation de la classe pour pouvoir l'utiliser dans d'autres fichiers
module.exports = Character;
