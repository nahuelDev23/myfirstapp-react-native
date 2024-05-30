import React from 'react';
import {Platform, Pressable, StyleSheet, Text} from 'react-native';

interface Props {
  label: string;
  onPress?: () => void;
  onLongPress?: () => void;
}
export const PrimaryButton = ({onPress, onLongPress, label}: Props) => {
  return (
    <Pressable
      style={({pressed}) => [styles.button, pressed && styles.buttonPressed]}
      onLongPress={() => onLongPress && onLongPress()}
      onPress={() => onPress && onPress()}>
      <Text style={styles.buttonText}>{label}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 80,
    textAlign: 'center',
    color: 'black',
    padding: 20,
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: Platform.OS === 'android' ? '#5856d6' : 'white',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 7,
  },
  buttonText: {
    color: Platform.OS === 'android' ? 'white' : '#4746AB',
  },
  buttonPressed: {
    backgroundColor: Platform.OS === 'android' ? '#4746AB' : 'white',
  },
});
