import React, {Image, StyleSheet, Switch, View} from 'react-native';
import {useState} from 'react';

export default function SpritePokemon({id}: {id: number}) {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
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
      <Switch
        style={styles.switch}
        trackColor={{false: '#767577', true: '#81b0ff'}}
        thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
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
