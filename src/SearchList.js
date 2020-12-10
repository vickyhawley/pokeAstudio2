import React from 'react';
import { View, Text, Header, Item, Input, Icon, StyleSheet } from 'react-native';
import { SearchBar } from 'react-native-elements';
import axios from 'axios';
import PokeLoader from './pokeLoader';
import SearchBody from './searchBody';

export default class SearchList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        pokeSearch: "",
        data: {}
    };}

    searchPoke = ( ) => {
        let self = this;
        axios.get("http://pokeapi.co/api/v2/pokemon/"+this.state.pokeSearch.toLowerCase())
        .then(function(response){
            console.log(response.data);
            self.setState({data: response.data});
        })
        .catch(function(error){
            console.log(error)
        })
    };
    renderBody = () => {
        return(
            <SearchBody  data={this.state.data}/>
        )
    }

    render(){
        return(
     <View style={styles.pokelist}>
            
             <SearchBar style={styles.searchBar} placeholder="Type Pokemon Name Here..."
             onChangeText={(pokeSearch)=>this.setState({pokeSearch})}
             platform="android" 
             value={this.state.pokeSearch} 
             containerStyle={{width: 320, borderRadius: 25, borderWidth: 7, borderColor: 'black'}}
             />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    pokelist:{
    margin: 16,
    },
 
})