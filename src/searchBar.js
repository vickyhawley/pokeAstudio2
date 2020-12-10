import React from 'react';
import { SafeAreaView, Dimensions, StyleSheet, TextInput, Image, TouchableHighlight, ScrollView} from 'react-native';
import { searchBar } from 'react-native-elements';
import { Value } from 'react-native-reanimated';
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;


class searchBar extends React.Component {
    constructor(props){
        super(props)
        this.state ={
            isFocused: false,
            keyword: '',
            profiles: []
        }

        this._input_box_translate_x = new Value(width)
        this._back_button_opacity = new Value(0)
        this._content_translate_y = new Value(height)
        this._content_opacity = new Value(0)
    }
    render(){
        return (
            <SafeAreaView style={StyleSheet.headerMain}>
             <View style={styles.header}>
                 <View style={styles.headerInner}>
                  <View>
                      <Image source={{ p }}/>
                  </View>
                 </View>
             </View>
            </SafeAreaView>
        )
    }

}

export default searchBar;

const styles = StyleSheet.create({
    headerMain: {
        zIndex: 1000
    },
    header: {
        height: 50,
        paddingHorizontal: 16
    },
    headerInner: {
      flex: 1,
      overflow: 'hidden',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      position: 'relative'
    }
})