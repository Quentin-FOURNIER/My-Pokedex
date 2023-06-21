import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Image, StyleSheet} from 'react-native';
import Home from '../../screens/Home';
import PokedexScreen from '../../screens/Pokedex';
import Metamorphe from '../../screens/Metamorphe';
import DetailsScreen from '../../screens/DetailsScreen';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import Game from "../../screens/Game";

const Tab = createBottomTabNavigator();

export type RootStackParamList = {
  Details: {id: number};
};

export default function Navigation(): React.JSX.Element {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarStyle: {
            backgroundColor: '#3B556D',
            borderRadius: 30,
            position: 'absolute',
            left: 20,
            right: 20,
            bottom: 20,
            elevation: 0,
            shadowOpacity: 0,
          },
          headerShown: false,
          tabBarLabel: () => null,
          tabBarIcon: ({focused}) => {
            let logoPath;

            if (route.name === 'Informations') {
              logoPath = focused
                ? require('../../assets/bottomNavigator/home-focused.png')
                : require('../../assets/bottomNavigator/home.png');
            } else if (route.name === 'Pokedex') {
              logoPath = focused
                ? require('../../assets/bottomNavigator/pokedex-focused.png')
                : require('../../assets/bottomNavigator/pokedex.png');
            } else if (route.name === 'Metamorphe') {
              logoPath = focused
                ? require('../../assets/bottomNavigator/splash-focused.png')
                : require('../../assets/bottomNavigator/splash.png');
            } else if (route.name === 'Details') {
              logoPath = focused
                ? require('../../assets/bottomNavigator/pokedex-focused.png')
                : require('../../assets/bottomNavigator/pokedex.png');
            } else if (route.name === 'Game') {
              logoPath = focused
                ? require('../../assets/bottomNavigator/pokedex-focused.png')
                : require('../../assets/bottomNavigator/pokedex.png');
            }
            return <Image source={logoPath} style={styles.logo} />;
          },
        })}>
        <Tab.Screen name={'Metamorphe'} children={() => <Metamorphe />} />
        <Tab.Screen name="Informations" children={() => <Home />} />
        <Tab.Screen name="Pokedex" children={() => <PokedexScreen />} />
        <Tab.Screen name="Game" children={() => <Game />} />

        <Tab.Screen
          name={'Details'}
          children={() => <DetailsScreen />}
          options={{tabBarItemStyle: {display: 'none'}}}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  logo: {width: 25, height: 25},
});
