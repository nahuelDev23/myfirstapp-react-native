import React from 'react';
import {StyleSheet, View} from 'react-native';

export const HomeworkScreen = () => {
  return (
    <View style={styles.container}>
      <View style={[styles.box, styles.purple]} />
      <View style={[styles.box, styles.orange]} />
      <View style={[styles.box, styles.blue]} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#28425b',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column-reverse',
  },
  box: {
    width: 100,
    height: 100,
    borderWidth: 10,
    borderColor: 'white',
  },
  purple: {
    backgroundColor: 'purple',
  },
  orange: {
    backgroundColor: 'orange',
    right: -100,
  },
  blue: {
    top: -100,
    backgroundColor: 'blue',
  },
});
