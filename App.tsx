import React from 'react';
import {SafeAreaView} from 'react-native';
import {PaperProvider} from 'react-native-paper';
import IonIcon from 'react-native-vector-icons/Ionicons';
import {HomeworkScreen, PositionScreen} from './src/presentation/screens';
export const App = () => {
  return (
    <PaperProvider
      settings={{
        icon: props => <IonIcon {...props} />,
      }}>
      <SafeAreaView style={{flex: 1, backgroundColor: '#225453'}}>
        <HomeworkScreen />
      </SafeAreaView>
    </PaperProvider>
  );
};
