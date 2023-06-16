import React, {useState} from 'react';
import {TouchableOpacity, Image} from 'react-native';
import {update} from 'firebase/database';
import {pokedexRef} from '../../services/database';

interface PokemonCaptureButtonProps {
  pokemonId: string;
}

const PokemonCaptureButton: React.FC<PokemonCaptureButtonProps> = ({
  pokemonId,
}) => {
  const [captured, setCaptured] = useState(false);

  const updateFirebase = (isCaptured: boolean) => {
    const updates: Partial<Record<string, any>> = {};
    updates[`${pokemonId}/captured`] = isCaptured;
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
