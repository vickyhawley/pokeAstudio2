import React from 'react';
import { Platform, Text, View, ImageBackground, StyleSheet, ScrollView } from 'react-native';
import AwesomeButtonCartman from "react-native-really-awesome-button";
import Pokedex from './pokedex';

const pokedex = Pokedex;

const myBackground = require('../assets/pikachu.jpg');

const home = ({ navigation }) => {
  return (
        <View style={styles.container}>
      
            <ImageBackground style={styles.image} source={myBackground}>
       
                    <View style={styles.textDirect}>
                        <View style={styles.buttonCont}>
                            <Text style={styles.text}>Pikka Pikka!</Text>
                            <View style={styles.speech}
                        ></View>
                        </View>
                        <View style={styles.button}></View>
        
      
                    </View>
            <View style={styles.openPokedex}>
            <AwesomeButtonCartman
                style={{ borderRadius: 20, width: 100, height: 70, paddingHorizontal: 12, paddingTop: 0}}
                type="primary"
                backgroundColor="red"
                backgroundActive="#F20505"
                backgroundDarker="#01B3FA"
                backgroundShadow="black"
                progress
                onPress={() => navigation.navigate('pokedex', { name: 'pokedex'})}>

                     <Text style={styles.pokedexText}>Pokedex</Text>
            </AwesomeButtonCartman>
            </View>
            </ImageBackground>
        </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Platform.OS === "android" ? 24 : 0,

  },
  textDirect: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  speech: {
      height: 20,
      width: 20,
      backgroundColor: 'white',
      elevation: 10,
      transform: [{ rotate: '45deg' }],
      marginTop: 7,
      marginLeft: 35,
      marginBottom: 115,
  },
  openPokedex: {
    alignItems: 'center',
    zIndex: 5,
    marginBottom: 100
  },
  pokedexText: {
    fontSize: 20,
    color: 'white',
    alignItems: 'center',
    textAlign: 'center',
    zIndex: 500
  },
  pokedexButton: {
     height: 100
  },
  text: {
    color: '#4556C3',
    alignItems: 'center',
    fontSize: 30,
    marginLeft: 15,
    marginTop: 10
  },
  buttonCont: {
    width: 250,
    height: 68,
    borderRadius: 20,
    borderColor: '#CEDADB',
    borderWidth: 1,
    backgroundColor: 'white',
    elevation: 10,
    marginRight: 55,
    position: 'relative',
    marginBottom: 400,
    zIndex: 300
  },
  
  image: {
    flex: 1,
    width: 500,
    resizeMode: "cover",
    justifyContent: "center"
  }
});

export default home;