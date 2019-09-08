import React from "react";
import { View, StyleSheet } from "react-native";

const Bullet = ({ size }) => {
  const computeSize = () => {
    return StyleSheet.flatten([
      { width: size, height: size, borderRadius: size / 2 },
      styles.bullet
    ]);
  };
  // console.log(computeSize());
  return <View style={computeSize()}></View>;
};

const styles = StyleSheet.create({
  bullet: {
    backgroundColor: "#030303",
    // alignSelf: "center",
    marginLeft: 5
  }
});

export default Bullet;
