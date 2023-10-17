import React, { useEffect } from 'react';
import Phaser from 'phaser';

const AnimatedImageWarrior = () => {
  useEffect(() => {
    let game;

    const config = {
      type: Phaser.AUTO,
      width: window.innerWidth / 5,
      height: window.innerWidth / 5,
      scene: {
        preload: preload,
        create: create,
      },
      parent: 'phaser-container', // Indique à Phaser où rendre le jeu
    };

    function preload() {
      for (let i = 1; i <= 6; i++) {
        this.load.image(`frame${i}`, `/assets/idle-with-weapon-${i}.png`);
      }
    }

    function create() {
      // Crée une animation en utilisant les images chargées
      this.anims.create({
        key: 'monAnimation',
        frames: [
          { key: 'frame1' },
          { key: 'frame2' },
          { key: 'frame3' },
          { key: 'frame4' },
          { key: 'frame5' },
          { key: 'frame6' },
          // Ajoute d'autres images de la séquence au besoin
        ],
        frameRate: 3, // Nombre d'images par seconde
        repeat: -1, // -1 pour une répétition infinie
      });

      const animatedImage = this.add.sprite(config.width / 2, config.height / 2, 'frame1').play('monAnimation');

      const scale = Math.min(config.width / animatedImage.width, config.height / animatedImage.height);
      animatedImage.setScale(scale);
    }

    game = new Phaser.Game(config);

    return () => {
      // Nettoyage des ressources Phaser lors du démontage du composant
      game.destroy(true);
    };
  }, []); // Assure-toi que useEffect s'exécute seulement une fois au montage

  return <div id="phaser-container"></div>;
};

export default AnimatedImageWarrior;
