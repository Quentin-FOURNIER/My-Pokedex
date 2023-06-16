import React, { useState } from "react";
import {View, TouchableOpacity, Text} from 'react-native';
import {pokedexRef} from './services/database';
import {set} from 'firebase/database';
import Navigation from "./components/navigation/Navigation";

// export default function app(): React.JSX.Element {
//   const [a, b] = useState('caca')
//   set(pokedexRef, {
//     // Les données que vous souhaitez écrire dans la base de données
//     // Par exemple :
//     name: 'Pikachu',
//     type: 'Electric',
//     level: 25,
//   }).then(r => {
//     b('pipi');
//   });
//
//   return <View />;
// }

export default function App() {
  return <Navigation />;
}
