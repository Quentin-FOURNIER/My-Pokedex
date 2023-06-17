import React, {View, StyleSheet, Image} from 'react-native';

export default function Home() {
  return (
    <View style={styles.mainView}>
      <View style={styles.welcomeView}>
        <Image
          style={styles.welcomeImage}
          source={require('../assets/home/Welcome.png')}
        />
      </View>
      <View style={styles.gifView}>
        <Image
          style={styles.gifImage}
          source={require('../assets/home/carapuceGang.gif')}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainView: {
    display: 'flex',
    flexDirection: 'row',
    alignContent: 'space-around',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
    position: 'absolute',
    top: 0,
    right: 0,
    left: 0,
    bottom: 80,
    paddingTop: 100,
    paddingBottom: 100,
  },
  welcomeView: {
    width: '90%',
    height: 250,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50,
  },
  welcomeImage: {
    height: '55%',
    aspectRatio: '511/264',
  },
  gifView: {
    width: '94%',
    height: 250,
    justifyContent: 'center',
    alignItems: 'center',
  },
  gifImage: {
    height: '80%',
    aspectRatio: '540/304',
  }
});
