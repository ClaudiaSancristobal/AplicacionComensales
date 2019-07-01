import React, { Component } from 'react';
import { StyleSheet, ImageBackground, View, FlatList, Text } from 'react-native';

import * as firebase from 'firebase';
import 'firebase/firestore';
import { TouchableHighlight } from 'react-native-gesture-handler';

const firestore = firebase.firestore();

//console.disableYellowBox = ['Remote Debugger'];


class ListadoRestaurantes extends Component {

    constructor(props) {
        super(props);
        this.state = {
            restaurantes: []
        }
    }
    componentDidMount() {
        this._getRealTimeData();
        //this._getNormalData();
    }


    render() {
        //console.log(this.state.restaurantes)
        return (
            <View style={styles.container}>
                <Text>Listado Restaurantes</Text>
                <FlatList
                    ItemSeparatorComponent={() => <View style={{height: 10, width: '100%', backgroundColor: 'white'}}/>}
                    renderItem={
                        ({ item }) =>
                            <ImageBackground style={{ width: '100%', height: 180 }} source={{ uri: item.fotos }}>
                               <Text style={{ color: 'white', fontSize:25}}>{item.nombre}</Text>                            
                            </ImageBackground>
                    }
                    data={this.state.restaurantes}
                />
            </View>
        );
    }

    _getRealTimeData = () => {

        /*const realTimeDatabaseRef = firestore.collection("Usuarios").doc("KarinaFernandez");

        realTimeDatabaseRef.onSnapshot(doc => {

            console.log('--------------- Realtime Database ---------------');

            if (doc.exists) console.log(doc.data());
            else console.log('El documento no existe');

            console.log('-----------------------------------------------');
By
        })*/

        firestore.collection("Restaurantes").orderBy("calificacion", "desc").get().then((querySnapshot) => {
            const rest = [];

            querySnapshot.forEach((doc) => {
                console.log(doc.data().nombre);
                const { nombre, calificacion, fotos } = doc.data();
                rest.push({
                    key: doc.id,
                    //doc, // DocumentSnapshot
                    nombre,
                    calificacion,
                    fotos
                });


            });
            this.setState({
                restaurantes: rest,
            });
            console.log(this.state.restaurantes);
        })
    }

    seleccionarRestaurante(id) {

        alert(id);

    }

    /*_getNormalData = () => {
 
        const no
        rmalDatabseRef = firestore.collection("Usuarios").doc("KarinaFernandez");
 
        normalDatabseRef.get().then(doc => {
 
            console.log('--------------- Normal Database ---------------');
 
            if (doc.exists) console.log(doc.data());
            else console.log('El documento no existe');
 
            console.log('-----------------------------------------------');
 
 
        }).catch(function (error) {
            console.log("Error getting document:", error);
        });
 
 
    }*/

}//class

const styles = StyleSheet.create({
    container: {
        flex: 1,

    },

});

export default ListadoRestaurantes


