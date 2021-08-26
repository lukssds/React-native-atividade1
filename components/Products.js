/* eslint-disable prettier/prettier */
/* eslint-disable no-dupe-keys */

import React, { Component } from 'react';
import {Text, StyleSheet,Image,TouchableOpacity} from 'react-native';

const Products = (props) => { 
    return (
        <TouchableOpacity style={styles.container}>
            <Image style={styles.img} source={props.image} />
            <Text style={styles.text}>{props.name}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        marginTop: 15,
        width: 150,
        height: 150,
        backgroundColor: 'white',
        marginRight: 15,
        borderRadius: 6,
        display: 'flex',
        flexDirection: 'column',

    },
    text:{
        textAlign: 'center',
        fontSize: 15,
        textAlign: 'center',
        fontSize: 15,
        fontWeight: '400',
        top: 25,
        color:'#808080'
    },

    img: {
        width: 50,
        height: 90,
        left: 50,
        top: 20,
    },
});
export default Products;