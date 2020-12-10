import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Image, Form, Label, Input } from 'react-native';
import PokeList from './pokeList';
import Pagination from './pagination';
import axios from 'axios';


class App extends React.Component {

    constructor(props) {
      super(props);
      this.state = {
        pokemon: [],
        loading: true,
        currentPageUrl: null,
        nextPageUrl: null,
        prevPageUrl: null
      }
    }

    componentDidMount() {
      axios.get('https://pokeapi.co/api/v2/pokemon/?limit=7').then(res => {

        this.setState({
            nextPageUrl: res.data.next,
            prevPageUrl: res.data.previous
        })
        res.data.results.forEach(pokemon => {
          axios.get(pokemon.url).then(res => {
            this.setState({ pokemon: [...this.state.pokemon, res.data] })
          })
        })
      })
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.state.pokemon !== prevState.pokemon) {
            if (this.state.pokemon.length === 7) {
                this.setState({ loading: false})
            }
        }
    }

    gotoNextPage() {
        this.setState({currentPageUrl: this.state.nextPageUrl})
    }

    gotoPrevPage() {
        this.setState({currentPageUrl: this.state.prevPageUrl})
    }

    render() {
        if (this.state.loading) return (
            <Image
                source={require('../assets/165.gif')}
            ></Image>
        )
        return (
            <View style={styles.pokesearch}>
                <PokeList pokemon={this.state.pokemon} />
                < Pagination
                    gotoNextPage={this.gotoNextPage}
                    gotoPrevPage={this.gotoPrevPage}
                />
            </View>
        );
    }
  }


const styles = StyleSheet.create({
    pokesearch: {
        width: 200
    }
})
export default App;