import React, { Component } from 'react'
import {
    Text,
    View,
    StyleSheet,
    TouchableWithoutFeedback,
    Image
} from 'react-native'
import Header from '../Componentes/Header'

import Icon from 'react-native-vector-icons/FontAwesome'

class Puntuar extends Component {
   

    render() {
        return (
            <View style={styles.container}>
               
                <Text> Puntuar Restaurantes </Text>
               

            </View>
        )
    }

}

const styles = StyleSheet.create({
    container: {
        
        justifyContent: 'space-between',
        backgroundColor: 'white',
        paddingHorizontal: 15,
        marginVertical: 1


    },
    imagen:{
        marginVertical:10,
         height:100,
         width: '100%'
    }
})

export default Puntuar
