import React, {useEffect, useState} from 'react';
import {TouchableOpacity, Image} from 'react-native';
import {update, get, ref} from 'firebase/database';
import {database, pokedexRef} from '../../services/database';

interface PokemonCaptureButtonProps {
  pokemonId: string;
  shiny: boolean;
}

const PokemonCaptureButton: React.FC<PokemonCaptureButtonProps> = ({
  pokemonId,
  shiny,
}) => {
  const word = shiny ? 'shiny' : 'classic';
  const pokemonRef = ref(database, `pokedex/${pokemonId}/${word}`);
  const [captured, setCaptured] = useState(false);
  get(pokemonRef).then(snapshot => {
    if (snapshot.exists()) {
      const isCatched = snapshot.val();
      console.log(isCatched);
      setCaptured(isCatched || false);
    } else {
      setCaptured(false);
    }
  });

  const updateFirebase = (isCaptured: boolean) => {
    const updates: Partial<Record<string, any>> = {};
    !shiny
      ? (updates[`${pokemonId}/classic`] = isCaptured)
      : (updates[`${pokemonId}/shiny`] = isCaptured);
    update(pokedexRef, updates);
  };

  const toggleCapture = () => {
    const newCapturedState = !captured;
    setCaptured(newCapturedState);
    updateFirebase(newCapturedState);
  };

  return (
    <TouchableOpacity onPress={toggleCapture}>
      <Image
        source={
          captured
            ? require('../../assets/capture/catched.png')
            : require('../../assets/capture/notCatched.png')
        }
        style={{width: 80, height: 80}}
      />
    </TouchableOpacity>
  );
};

export default PokemonCaptureButton;
