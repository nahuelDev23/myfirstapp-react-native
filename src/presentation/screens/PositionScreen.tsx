import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export const PositionScreen = () => {
  return (
    <View style={styles.container}>
      <Text>PositionScreen</Text>

      <View style={styles.greenBox} />
      <View style={styles.purpleBox} />
      <View style={styles.orangeBox} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#28c2d9',
  },
  purpleBox: {
    width: 100,
    height: 100,
    backgroundColor: 'white',
    borderWidth: 10,
    top: 50,
  },
  orangeBox: {
    width: 100,
    height: 100,
    backgroundColor: 'orange',
    borderWidth: 10,
  },
  greenBox: {
    backgroundColor: 'green',
    ...StyleSheet.absoluteFillObject,
  },
});
