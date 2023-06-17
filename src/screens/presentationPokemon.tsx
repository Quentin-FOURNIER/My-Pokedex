import React, {View, StyleSheet, Image} from 'react-native';
import Gif from 'react-native-gif';

export default function MyScreen(): JSX.Element {
  return (
    <View style={styles.vue}>
      <View style={styles.welcomeView}>
        <Image
          style={styles.welcome}
          source={require('../assets/home/Welcome.png')}
        />
      </View>
      <View style={styles.grand_cadre}>
        <Image
          style={styles.image_grand_cadre}
          source={require('../assets/home/carapuceGang.gif')}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  vue: {
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
  fond: {
    width: '100%',
    height: '100%',
    position: 'absolute',
  },
  petit_cadre: {
    width: '46%',
    height: '27%',
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 6,
    backgroundColor: '#fff',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  grand_cadre: {
    width: '94%',
    height: 250,
    // borderRadius: 15,
    // shadowColor: '#000',
    // shadowOffset: {
    //   width: 0,
    //   height: 0,
    // },
    // shadowOpacity: 0.2,
    // shadowRadius: 3,
    // elevation: 6,
    // backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image_petit_cadre: {
    width: '80%',
    height: '80%',
  },
  image_grand_cadre: {
    height: '80%',
    aspectRatio: '540/304',
  },
  welcomeView: {
    width: '90%',
    height: 250,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50,
  },
  welcome: {
    height: '55%',
    aspectRatio: '511/264',
  }
});
