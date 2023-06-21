import React, {StyleSheet, Text} from 'react-native';

export default function Number({id}: {id: number}) {
  return <Text style={styles.number}>N° {id}</Text>;
}

const styles = StyleSheet.create({
  number: {
    color: '#1C2942',
    fontSize: 24,
    fontFamily: 'Roboto',
    marginBottom: 25,
  },
});
