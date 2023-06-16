import React, {Image, StyleSheet, Text, View} from 'react-native';

export default function Sexe({rate}: {rate: number}) {
  if (rate === -1) {
    return (
      <View style={styles.mainView}>
        <View style={styles.assexualView}>
          <Image
            style={styles.unisexImage}
            source={require('../../assets/sex/assexue.png')}
          />
          <Text style={styles.text}>Asexual</Text>
        </View>
      </View>
    );
  } else {
    return (
      <View style={styles.mainView}>
        <View style={styles.sexView}>
          <Image
            style={styles.sexImage}
            source={require('../../assets/sex/male.png')}
          />
          <Text style={styles.text}>{100 - (rate / 8) * 100} %</Text>
        </View>
        <View style={styles.sexView}>
          <Image
            style={styles.sexImage}
            source={require('../../assets/sex/female.png')}
          />
          <Text style={styles.text}>{(rate / 8) * 100} %</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainView: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '35%',
    height: 140,
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
  sexView: {
    width: '45%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  assexualView: {
    width: '80%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  sexImage: {
    width: '100%',

  },
  unisexImage: {
    height: '60%',
    aspectRatio: '1/1',
  },
  text: {
    color: '#1C2942',
    fontFamily: 'Roboto',
  },
});
