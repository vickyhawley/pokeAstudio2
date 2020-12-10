import React, { useState } from 'react';
import { View, Image, Text, StyleSheet, TouchableOpacity} from 'react-native';

export default function PokeList({ pokemon }) {
    return (
        <View>
          {pokemon.map((p, index) => (
              <View key={index}>
                  <View style={styles.container}>
                    <TouchableOpacity>
                  <View style={styles.textCont}><Text style={styles.poketext}>{p.name}</Text></View></TouchableOpacity>
                  <View style={styles.imgCont}><Image style={styles.image} source={{uri: p.sprites? p.sprites.back_default : null}}></Image></View>
                  </View>
                </View>
          ) )}
          </View>
     )
          
}

const styles = StyleSheet.create({
    poketext: {
        padding: 0,
        fontSize: 20,
        textAlign: 'center',
    },
    container: {
      height: 50,
      width: 200
    },
    textCont: {
      marginLeft: 65
    },
    image: {
        height: 70,
        width: 70,
        marginTop: -50,
        marginBottom: 25,
        marginRight: 20
    },
    imgCont: {
        marginBottom: 25,
        marginRight: 50,
    }
})
