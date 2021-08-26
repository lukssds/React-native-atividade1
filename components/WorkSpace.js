/* eslint-disable prettier/prettier */
/* eslint-disable no-trailing-spaces */
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import Products from './Products';

const WorkSpace = () => {
    return (

            <View style={styles.container}>
                <View style={styles.containerTitle}>
                    <Text style={styles.title}>Lighteria</Text>
                    <TouchableOpacity style={styles.sacolaBackground}>
                        <Image style={styles.sacola} source={require('../images/icone-sacola.png')} />
                    </TouchableOpacity>
                </View>
                <View style={styles.categoriaContainer}>
                    <View style={styles.categoriaContainerText}>
                        <Text style={styles.categoria}>Categorias</Text>
                    </View>
                </View>
                <View style={styles.row}>
                    <Products name="Abajur" image={require('../images/01-tablelamps.png')} />
                    <Products name="Lâmpada de teto" image={require('../images/02-ceilinglamps.png')} />
                    <Products name="Arandela" image={require('../images/03-sconces.png')} />
                    <Products name="Luminária de chão" image={require('../images/04-floorlamps.png')} />
                    <Products name="Lâmpada 5" image={require('../images/05-lightdecor.png')} />
                    <Products name="Lâmpada 6" image={require('../images/06-garlands.png')} />
                </View>
            </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'rgb(242,242,242)',
        paddingLeft: 10,
        paddingTop: 20,
        paddingBottom: 10,
    },
    title: {
        fontWeight: 'bold',
        fontSize: 30,
        marginLeft: 10,
    },

    sacola: {
        width: 30,
        height: 30,
        marginLeft: 15,
        marginTop: 15,
    },
    row: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        paddingBottom: 10,
    },
    containerTitle: {
        flexDirection: 'row',
    },
    sacolaBackground: {
        width: 60,
        height: 60,
        backgroundColor: 'white',
        borderRadius: 100 / 2,
        marginLeft: 140,
    },
    categoria: {
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold',
        color: 'rgb(195,195,195)',
    },
    categoriaContainer: {
        marginTop: 20,
        borderColor: '#333',
        borderWidth: 1,
        borderBottomWidth: 0,
        borderLeftWidth: 0,
        borderRightWidth: 0,
        width: '90%',
        marginLeft: 10,
    },
    categoriaContainerText: {
        width: 130,
        top: -15,
        backgroundColor: 'rgb(242,242,242)',
        left: 92.5,
        textAlign: 'center',
    },
});
export default WorkSpace;