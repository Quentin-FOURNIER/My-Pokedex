import React, {StyleSheet, Text} from 'react-native';

function capitalize(str: string | null): string | null {
  if (!str) {
    return null;
  }
  return str.charAt(0).toUpperCase() + str.slice(1);
}
export default function Name({name}: {name: string}): JSX.Element {
  return <Text style={styles.name}>{capitalize(name)}</Text>;
}

const styles = StyleSheet.create({
  name: {
    color: '#1C2942',
    fontSize: 24,
    fontFamily: 'Roboto',
    marginTop: 5,
    marginLeft: '10%',
    fontWeight: 'bold',
  },
});
