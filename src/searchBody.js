import React from 'react';
import { ScrollView, Text , StyleSheet} from 'react-native';

const searchBody = () => {
        return(
            <ScrollView style={{flex: 1}}>
                <Text style={styles.header}>Data</Text>
            </ScrollView>
        )
    };
const styles= StyleSheet.create({
    header: {
       fontSize: 30,
       color: 'red',
       textAlign: 'center'
        
    }
}
)

export default searchBody;