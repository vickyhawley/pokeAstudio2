import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ReactActivityDelegate from 'react-native-gesture-handler';
import ReactRootView from 'react-native-gesture-handler';
import RNGestureHandlerEnabledRootView from 'react-native-gesture-handler';

const Stack = createStackNavigator();

import Home from './src/home';
import Pokedex from './src/pokedex';
import searchList from './src/SearchList';
import PokeLoader from './src/pokeLoader';
import SearchBody from './src/searchBody';
import PokeList from './src/pokeList';
import Apps from './src/App';
import Pagination from './src/pagination';


const home = Home;
const pokedex = Pokedex;
const SearchList = searchList;
const pokeLoader = PokeLoader;
const searchBody = SearchBody;
const pokelist = PokeList;
const apps = Apps;
const pagination = Pagination;

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="home" screenOptions={{headerShown: false}}>
        <Stack.Screen
        name="home"
        component={home}
        navigationOptions={{ headerShown: false, title: 'home'}}
        
        />
        <Stack.Screen
        name="pokedex"
        component={pokedex}
        options={{ title: 'pokedex'}}
        />
        <Stack.Screen
        name="SearchList"
        component={SearchList}
        options={{ title: 'SearchList'}}
        />
        <Stack.Screen
        name="searchBody"
        component={searchBody}
        options={{ title: 'searchBody'}}
        />
        <Stack.Screen
        name="pokeLoader"
        component={pokeLoader}
        options={{ title: 'pokeLoader'}}
        />
        <Stack.Screen
        name="pagination"
        component={pagination}
        options={{ title: 'pagination'}}
        />
        <Stack.Screen
        name="pokelist"
        component={pokelist}
        options={{ title: 'pokelist'}}
        />
        <Stack.Screen
        name="apps"
        component={apps}
        options={{ title: 'apps'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
};

export default App;
