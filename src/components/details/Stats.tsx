import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default function Stats({
  hp,
  attack,
  attackSpe,
  defence,
  defenceSpe,
}: {
  hp: number;
  attack: number;
  attackSpe: number;
  defence: number;
  defenceSpe: number;
}) {
  return (
    <View style={styles.mainView}>
      <Text style={styles.text}>HP: {hp}</Text>
      <Text style={styles.text}>Attack: {attack}</Text>
      <Text style={styles.text}>Special Attack: {attackSpe}</Text>
      <Text style={styles.text}>Defense: {defence}</Text>
      <Text style={styles.text}>Special Defense: {defenceSpe}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  mainView: {
    display: 'flex',
    flexDirection: 'column',
    width: '57%',
    padding: 15,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 6,
    backgroundColor: '#fff',
  },
  text: {
    color: '#1C2942',
    fontSize: 16,
    fontFamily: 'Roboto',

  },
});
