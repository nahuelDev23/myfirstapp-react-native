import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

interface Props {
  name?: string;
}
export const HelloWordScreen = ({ name = 'World' }: Props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title} numberOfLines={1} ellipsizeMode="tail">
        Hola,{name}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'purple',
  },
  title: {
    fontSize: 45,
    textAlign: 'center',
    color: 'black',
    padding: 20,
  },
});
