import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export const BoxObjectModelScreen = () => {
  return (
    <View style={styles.container}>
      {/*
<Text style={styles.title}>BoxObjectModelScreen</Text>
      */}
      <View style={styles.purpleBox}>
        <Text style={{color: 'white'}}>holus</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
  },
  title: {
    fontSize: 30,
    paddingHorizontal: 30,
    paddingVertical: 10,
    borderWidth: 10,
  },
  purpleBox: {
    height: 400,
    margin: 20,
    backgroundColor: 'purple',
  },
});
