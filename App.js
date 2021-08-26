/* eslint-disable prettier/prettier */
import React from 'react';
import { View, StyleSheet,ScrollView} from 'react-native';
import Header from './components/Header';
import WorkSpace from './components/WorkSpace';

const App = () => {
  return (

    <ScrollView> 
      <View style={styles.container}>
      <Header/>
        <WorkSpace />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
