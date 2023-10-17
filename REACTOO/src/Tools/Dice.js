// Classe Dice
class Dice {
    // Constructeur
    constructor() {
        this._min = 1;
        this._max = 0;
    }

    // Getters propres à la classe Dice
    get min() {
        return this._min;
    }

    get max() {
        return this._max;
    }

    // Méthode pour lancer le dé
    throwDice(value) {
        // Utilisation de Math.random() pour simuler le comportement de random.randint() en Python
        const result = Math.floor(Math.random() * (value - this._min + 1)) + this._min;
        // console.log(result);
        return result;
    }
}

// Exportation de la classe Dice pour pouvoir l'utiliser dans d'autres fichiers
module.exports = Dice;
