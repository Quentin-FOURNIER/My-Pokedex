import React, {useEffect, useState} from 'react';
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {getDitto} from '../services/pokemonService';
import {useNavigation} from '@react-navigation/native';

export default function Metamorphe() {
  const [dittoForm, setDittoForm] = useState('');
  const navigation = useNavigation();
  useEffect(() => {
    async function fetchData() {
      const result = await getDitto();
      setDittoForm(result);
    }
    fetchData();
  }, []);

  return (
    <View style={styles.mainView}>
      <View style={styles.separation}>
        <Text style={styles.region}>Ditto transformations</Text>
      </View>
      <FlatList
        style={styles.flatList}
        data={Object.keys(dittoForm)}
        numColumns={2}
        renderItem={({item}) => (
          <View style={styles.imageShadow}>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('Details', {
                  id: item,
                })
              }>
              <Image
                source={{
                  uri:
                    'https://raw.githubusercontent.com/PokeAPI/' +
                    'sprites/master/sprites/pokemon/other/official-artwork/' +
                    item +
                    '.png',
                }}
                style={styles.sprite}
              />
            </TouchableOpacity>
          </View>
        )}
        keyExtractor={(item: string, index: number) => index.toString()}
        horizontal={false}
        scrollEnabled={true}
        contentContainerStyle={styles.listView}
        contentInset={{bottom: 100}}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  mainView: {
    display: 'flex',
  },
  region: {
    color: '#1C2942',
    fontSize: 24,
    fontFamily: 'Roboto',
    marginTop: 5,
  },
  separation: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    flexDirection: 'row',
    height: 80,
  },
  back: {
    marginTop: 7,
    marginLeft: 7,
    width: 30,
    aspectRatio: 1,
  },
  sprite: {
    height: '80%',
    aspectRatio: 1,
    marginLeft: '25%',
    marginTop: '5%'
  },
  listView: {
    paddingBottom: 80,
  },
  flatList: {
    width: '100%',
    paddingBottom: 100,
  },
  safeArea: {
    flex: 1,
  },
  imageShadow: {
    width: '45%',
    marginLeft: '2.5%',
    marginRight: '2.5%',
    marginTop: '1.5%',
    marginBottom: '1.5%',
    height: 125,
    borderRadius: 10,
    display: 'flex',
    justifyContent: 'center',
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
});
