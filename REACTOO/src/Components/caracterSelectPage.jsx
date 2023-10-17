import React from 'react';
import AnimatedImageWarrior from '../Phaser/CharacterSelectHuman';
import InputDynamic from  './InputComponent'


const CharacterSelectPage = () => {
  return (
    <div>
      <h1>CharacterSelectPage</h1>
      <AnimatedImageWarrior />
      <InputDynamic />
    </div>
  );
};

export default CharacterSelectPage;
