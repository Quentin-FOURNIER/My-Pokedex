import React, {StyleSheet, View} from 'react-native';
import {RouteProp, useRoute} from '@react-navigation/native';
import {getPokemon, getSpecie} from '../services/pokemonService';
import {useEffect, useState} from 'react';
import Stats from '../components/details/Stats';
import Name from '../components/details/Name';
import Types from '../components/details/Types';
import {RootStackParamList} from '../components/navigation/Navigation';
import SpritePokemon from '../components/details/SpritePokemon';
import SpritePokemonShiny from '../components/details/SpritePokemonShiny';
import Numero from '../components/details/Numero';
import Sexe from '../components/details/Sexe';

interface IPokemonDetails {
  forms: {
    name: string;
  }[];
  types: {
    type: {
      name: string;
    };
  }[];
  stats: {
    base_stat: number;
  }[];
}

const types = {
  bug: require('../assets/types/bug.webp'),
  dark: require('../assets/types/dark.webp'),
  dragon: require('../assets/types/dragon.webp'),
  electric: require('../assets/types/electric.webp'),
  fairy: require('../assets/types/fairy.webp'),
  fighting: require('../assets/types/fighting.webp'),
  fire: require('../assets/types/fire.webp'),
  flying: require('../assets/types/flying.webp'),
  ghost: require('../assets/types/ghost.webp'),
  grass: require('../assets/types/grass.webp'),
  ground: require('../assets/types/ground.webp'),
  ice: require('../assets/types/ice.webp'),
  normal: require('../assets/types/normal.webp'),
  poison: require('../assets/types/poison.webp'),
  psychic: require('../assets/types/psychic.webp'),
  rock: require('../assets/types/rock.webp'),
  steel: require('../assets/types/steel.webp'),
  water: require('../assets/types/water.webp'),
};

type DetailsScreenRouteProp = RouteProp<RootStackParamList, 'Details'>;

export default function DetailsScreen(): JSX.Element {
  const route: DetailsScreenRouteProp = useRoute();
  const [pokemonDetails, setPokemonDetails] = useState<IPokemonDetails>();
  const [specieDetails, setSpecieDetails] = useState();

  useEffect(() => {
    async function fetchData(): Promise<void> {
      const pokemonResult = await getPokemon(route.params.id);
      setPokemonDetails(JSON.parse(JSON.stringify(pokemonResult)));
      const specieResult = await getSpecie(route.params.id);
      setSpecieDetails(JSON.parse(JSON.stringify(specieResult)));
    }
    fetchData();
  }, [route.params.id]);

  if (!pokemonDetails) {
    return <View />;
  }

  let type1: any;
  switch (pokemonDetails.types[0].type.name) {
    case 'normal':
      type1 = types.normal;
      break;
    case 'fighting':
      type1 = types.fighting;
      break;
    case 'flying':
      type1 = types.flying;
      break;
    case 'poison':
      type1 = types.poison;
      break;
    case 'ground':
      type1 = types.ground;
      break;
    case 'rock':
      type1 = types.rock;
      break;
    case 'bug':
      type1 = types.bug;
      break;
    case 'ghost':
      type1 = types.ghost;
      break;
    case 'steel':
      type1 = types.steel;
      break;
    case 'fire':
      type1 = types.fire;
      break;
    case 'water':
      type1 = types.water;
      break;
    case 'grass':
      type1 = types.grass;
      break;
    case 'electric':
      type1 = types.electric;
      break;
    case 'psychic':
      type1 = types.psychic;
      break;
    case 'ice':
      type1 = types.ice;
      break;
    case 'dragon':
      type1 = types.dragon;
      break;
    case 'dark':
      type1 = types.dark;
      break;
    case 'fairy':
      type1 = types.fairy;
      break;
    default:
      type1 = null;
  }
  let type2: any;
  switch (pokemonDetails?.types[1]?.type?.name) {
    case 'normal':
      type2 = types.normal;
      break;
    case 'fighting':
      type2 = types.fighting;
      break;
    case 'flying':
      type2 = types.flying;
      break;
    case 'poison':
      type2 = types.poison;
      break;
    case 'ground':
      type2 = types.ground;
      break;
    case 'rock':
      type2 = types.rock;
      break;
    case 'bug':
      type2 = types.bug;
      break;
    case 'ghost':
      type2 = types.ghost;
      break;
    case 'steel':
      type2 = types.steel;
      break;
    case 'fire':
      type2 = types.fire;
      break;
    case 'water':
      type2 = types.water;
      break;
    case 'grass':
      type2 = types.grass;
      break;
    case 'electric':
      type2 = types.electric;
      break;
    case 'psychic':
      type2 = types.psychic;
      break;
    case 'ice':
      type2 = types.ice;
      break;
    case 'dragon':
      type2 = types.dragon;
      break;
    case 'dark':
      type2 = types.dark;
      break;
    case 'fairy':
      type2 = types.fairy;
      break;
    default:
      type2 = null;
  }

  return (
    <View style={styles.mainView}>
      <View style={styles.header}>
        <Name name={pokemonDetails.forms[0].name} />
        <Types type1={type1} type2={type2} />
      </View>

      <View style={styles.spritesView}>
        <SpritePokemon id={route.params.id} />
        <View style={styles.spritesBisView}>
          <Numero id={route.params.id} />
          <SpritePokemonShiny id={route.params.id} />
        </View>
      </View>

      <View style={styles.statsSexeView}>
        <Stats
          hp={pokemonDetails.stats[0].base_stat}
          attack={pokemonDetails.stats[1].base_stat}
          attackSpe={pokemonDetails.stats[3].base_stat}
          defenceSpe={pokemonDetails.stats[4].base_stat}
          defence={pokemonDetails.stats[2].base_stat}
        />
        <Sexe rate={specieDetails?.gender_rate} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainView: {
    bottom: 0,
    left: 0,
    position: 'absolute',
    right: 0,
    top: 0,
  },
  header: {
    width: '100%',
    height: 80,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  spritesView: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-around',
    marginTop: 10,
    width: '100%',
  },
  spritesBisView: {width: '40%', display: 'flex', justifyContent: 'flex-start'},
  statsSexeView: {
    display: 'flex',
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    //alignItems: 'center',
    //marginBottom: 10,
    marginTop: 20,
  },
});
