/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Header = () => {
  return (
    <View>
      <Text style={styles.text}>Lista Produtos</Text>
    </View>
  );
};

const styles= StyleSheet.create(
{ 
  text:{
    fontSize: 18,
    marginLeft: 10,
    marginTop: 10,
    marginBottom: 20,
   }
 }
);
export default Header;
