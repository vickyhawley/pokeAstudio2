import React from 'react';
import { View, Button, StyleSheet } from 'react-native';



export default function Pagination({ gotoNextPage, gotoPrevPage}) {
    return(
        <View style={styles.pagination}>
           {gotoPrevPage && < Button  onPress={gotoPrevPage} title="Previous"></Button>}
           {gotoNextPage && < Button  onPress={gotoNextPage} title="Next"></Button>}
        </View>
    )
}

const styles = StyleSheet.create({
    pagination: {
       marginVertical: 50,
       justifyContent: 'center',
    },
    pokeBtn: {
        width: 70,
        height: 70
    }
})