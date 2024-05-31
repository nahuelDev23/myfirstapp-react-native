import React from 'react';
import {StyleSheet, Text, View, useWindowDimensions} from 'react-native';
//import {Dimensions} from 'react-native';

//no es automatico si giras el celu
//const {width, height} = Dimensions.get('window');

export const DimensionScreen = () => {
  const {width, height} = useWindowDimensions();
  return (
    <View>
      <View style={styles.container}>
        <View
          style={{
            ...styles.purpleBox,
            //60% de la pantalla (no del padre)
            width: width * 0.6,
          }}
        />
        <Text>DimensionScreen</Text>
      </View>
      <Text>
        w:{width},h: {height}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: 'red',
  },
  purpleBox: {
    backgroundColor: '#5856d5',
    height: '50%',
  },
});
