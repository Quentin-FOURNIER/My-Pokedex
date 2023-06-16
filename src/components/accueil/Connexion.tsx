import React, {useState} from 'react';
import {View, Image, TouchableOpacity, StyleSheet} from 'react-native';
import firebase from '@react-native-firebase/app';
import '@react-native-firebase/auth';
import {GoogleSignin} from '@react-native-google-signin/google-signin';

const ProfileImage = () => {


  return (
    <View style={styles.container}>
        <TouchableOpacity >
          <Image
            source={require('../../assets/sex/male.png')}
            style={styles.profileImage}
          />
        </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
});

export default ProfileImage;
