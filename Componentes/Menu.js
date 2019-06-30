import React, { Component } from 'react'
import {
    Dimensions,
    View,
    StyleSheet,
    Text,
    ScrollView,
    Image

} from 'react-native'

import Icon from 'react-native-vector-icons/FontAwesome'
import IonIcons from 'react-native-vector-icons/Ionicons'

const { width, height } = Dimensions.get('window')

class Menu extends Component {

    render() {
        return (
            <View style={styles.menu}>
                <View style={styles.avatarContainer}>
                    <View style={styles.avatarImage}>
                        <Image
                            style={styles.avatar}
                            source={require('../Images/user.png')}

                        />
                        <Text >Claudia</Text>

                        <Text style={styles.text} >Reservar</Text>

                        <Text style={styles.text} >Mis Reservas</Text>

                        <Text style={styles.text} >Puntuar Resturante</Text>


                        


                        
                    </View>

                </View>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    menu: {
        flex: 1,
        width: width,
        height: height,
        backgroundColor: 'white',
    },
    avatarContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: width / 2 + 55,
        borderColor: '#000',

        paddingHorizontal: 20,
        paddingVertical: 50
    },
    avatar: {
        height: 20,
        width: 20
    }, 
    text:{
        marginVertical:30
        
    }
    



});

export default Menu
