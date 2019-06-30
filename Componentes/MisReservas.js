import React, { Component } from 'react'
import {
    Text,
    View,
    StyleSheet,
    TouchableWithoutFeedback,
    Image,
    FlatList
} from 'react-native'
import Header from '../Componentes/Header'

import Icon from 'react-native-vector-icons/FontAwesome'

class MisReservas extends Component {


    /*constructor(props) {
        super(props);

        this.state = {
            loading: false,
            pokemons: [],
            url: 'http://192.168.1.8:3000/Restaurantes'

        }
    }

    componentDidMount() {
        this.getPokemons();

    }

    getPokemons = () => {
        this.setState({ loading: true })
        //realiza la peticion
        fetch(this.state.url)
            .then(res => res.json())
            .then(res => {
                this.setState({
                    pokemons: res.results,
                    url: res.next,
                    loading: false
                })
            });
    }*/


    render() {

        return (

            <View style={styles.container}>
                <Text>Listado de Mis Reservas</Text>
               
            </View>
        );
    }
}





const styles = StyleSheet.create({
    container: {

        justifyContent: 'space-between',
        backgroundColor: 'white',
        paddingHorizontal: 15,
        marginVertical: 1


    },
    imagen: {
        marginVertical: 10,
        height: 100,
        width: '100%'
    }
})

export default MisReservas


