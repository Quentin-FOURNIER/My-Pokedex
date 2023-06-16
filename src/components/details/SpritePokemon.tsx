import React, {Image, StyleSheet, Switch, View} from 'react-native';
import {useState} from 'react';
import PokedexRegionScreen from "../../screens/Pokedex";
import PokemonCaptureButton from "./PokemonCaptureButton";

export default function SpritePokemon({id}: {id: number}) {
  return (
    <View style={styles.mainView}>
      <Image
        style={styles.sprite}
        source={{
          uri:
            'https://raw.githubusercontent.com/PokeAPI/' +
            'sprites/master/sprites/pokemon/other/official-artwork/' +
            id +
            '.png',
        }}
      />
      <PokemonCaptureButton pokemonId={id.toString()} shiny={false}></PokemonCaptureButton>
    </View>
  );
}

const styles = StyleSheet.create({
  mainView: {
    display: 'flex',
    directionFlex: 'column',
    alignItems: 'center',
    justifyContent: 'flex-end',
    width: '50%',
  },
  sprite: {width: '100%', aspectRatio: 1},
  switch: {marginBottom: 7},
});
