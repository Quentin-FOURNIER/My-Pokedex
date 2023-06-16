import React, {StyleSheet, Text} from 'react-native';

export default function Numero({id}: {id: number}) {
  return <Text style={styles.numero}>N° {id}</Text>;
}

const styles = StyleSheet.create({
  numero: {
    color: '#1C2942',
    fontSize: 24,
    fontFamily: 'Roboto',
    marginBottom: 25,
  },
});
