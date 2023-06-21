import React, {Image, StyleSheet, View} from 'react-native';
import PokemonCaptureButton from './PokemonCaptureButton';

export default function SpritePokemonShiny({id}: {id: number}) {
  return (
    <View style={styles.mainView}>
      <Image
        style={styles.sprite}
        source={{
          uri:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/' +
            id +
            '.png',
        }}
      />
      <PokemonCaptureButton pokemonId={id.toString()} shiny={true} />
    </View>
  );
}

const styles = StyleSheet.create({
  mainView: {
    display: 'flex',
    directionFlex: 'column',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  sprite: {width: '100%', aspectRatio: 1},
  switch: {marginBottom: 7},
});
