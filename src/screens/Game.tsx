import React, { useEffect, useRef, useState } from "react";
import { View, Image, StyleSheet, Animated } from "react-native";

const groundImage = require("../assets/game/fond.jpeg");

const Game: React.FC = () => {
  const translateY = useRef(new Animated.Value(0)).current;
  const groundWidth = 336; // Largeur de l'image du sol
  const animationDuration = 2000; // Durée de l'animation en millisecondes
  const [isJumping, setIsJumping] = useState(false);

  useEffect(() => {
    const moveGround = () => {
      Animated.timing(translateY, {
        toValue: -groundWidth,
        duration: animationDuration,
        useNativeDriver: true,
      }).start(({ finished }) => {
        if (finished) {
          translateY.setValue(0);
          moveGround();
        }
      });
    };

    moveGround();

    return () => {
      translateY.stopAnimation();
    };
  }, []);

  const handleScreenPress = () => {
    if (!isJumping) {
      setIsJumping(true);
      Animated.timing(translateY, {
        toValue: -200,
        duration: 500,
        useNativeDriver: true,
      }).start(() => {
        Animated.timing(translateY, {
          toValue: 0,
          duration: 500,
          useNativeDriver: true,
        }).start(() => {
          setIsJumping(false);
        });
      });
    }
  };

  return (
    <View style={styles.container} onTouchStart={isJumping ? undefined : handleScreenPress}>
      <Image source={require('../assets/game/fond.jpeg')} style={styles.groundImage}/>
      <Animated.Image source={require('../assets/game/pikachu.gif')} style={[styles.pikachu, { transform: [{ translateY }] }]}/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    overflow: "hidden",
  },
  groundImage: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    top: 0,
    width: "100%",
    height: "100%",
  },
  pikachu: {
    position: "absolute",
    bottom: 155,
    left: 30,
    width: 100,
    height: 70,
  }
});

export default Game;
