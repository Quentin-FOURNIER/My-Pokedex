import {initializeApp} from 'firebase/app'; // no compat for new SDK
import {getDatabase, ref} from 'firebase/database';

let config = {
  apiKey: 'AIzaSyBvkvjU127NRd6_AJZz8SUrfkm7K--spfA',
  authDomain: 'mypokedex-b75d5.firebaseapp.com',
  databaseURL:
    'https://mypokedex-b75d5-default-rtdb.europe-west1.firebasedatabase.app/',
  projectId: 'mypokedex-b75d5',
  storageBucket: 'mypokedex-b75d5.appspot.com',
  messagingSenderId: '632104915748',
  appId: '1:632104915748:android:0e7836cca0a12a071059b1',
};

const app = initializeApp(config);

const database = getDatabase(app);

export const pokedexRef = ref(database, 'pokedex');
