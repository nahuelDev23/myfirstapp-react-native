import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {FAB} from 'react-native-paper';
import {globalStyles} from '../theme/global.styles';
export const CounterM3Screen = () => {
  const [count, setCount] = useState(0);
  return (
    <View style={globalStyles.centerContainer}>
      <Text style={globalStyles.title}>{count}</Text>
      <FAB
        onPress={() => setCount(count + 1)}
        onLongPress={() => setCount(0)}
        style={styles.fab}
        icon="add-outline"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  fab: {
    position: 'absolute',
    bottom: 14,
    right: 14,
  },
});
