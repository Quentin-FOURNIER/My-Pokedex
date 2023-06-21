import React from 'react';
import {Image, StyleSheet, View} from 'react-native';

export default function Types({
  type1,
  type2,
}: {
  type1: any;
  type2: any;
}): React.JSX.Element {
  return (
    <View style={styles.mainView}>
      {type1 && (
        <View style={styles.typeView}>
          <Image style={styles.typeImage} source={type1} />
        </View>
      )}
      {type2 && (
        <View style={styles.typeView}>
          <Image style={styles.typeImage} source={type2} />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  mainView: {
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    flexDirection: 'row',
    marginRight: 5,
  },
  typeView: {
    height: '70%',
    aspectRatio: 1,
    borderRadius: 50,
    marginRight: 10,
    marginTop: '7%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
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
  typeImage: {height: '70%', aspectRatio: 1},
});
