import React, { Component } from 'react';
import { StyleSheet, Image, View, FlatList, Text } from 'react-native';

import * as firebase from 'firebase';
import 'firebase/firestore';

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
                <Image
                    source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQPJBOLTwqXJfC976g3SlYiTHY5K6P-87HjRbmGpfYco21IJ93' }}
                    style={styles.imagen}
                />
                <Image
                    source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrUu0lBh5ChFbCEKsmmrjPNCvXHstP08s6pJpHz36cRyqvbI2h' }}
                    style={styles.imagen}
                />
                <Image
                    source={{ uri: 'https://i.pinimg.com/originals/93/30/ad/9330ad855473ceb63ef7a5f35ec3312b.jpg' }}
                    style={styles.imagen}
                />

                <View style={styles.listado}>
                    <Text>Listado Restaurantes</Text>
                    <FlatList
                        
                        data={this.state.restaurantes}
                        renderItem={
                            ({ item }) => <Text> {item.nombre} </Text>

                        }
                    />
                </View>

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
                const { nombre, calificacion } = doc.data();
                rest.push({
                    key: doc.id,
                    //doc, // DocumentSnapshot
                    nombre,
                    calificacion,
                });


            });
            this.setState({
                restaurantes: rest,
            });
            console.log(this.state.restaurantes);
        })
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
        backgroundColor: '#fff',
    },
    listado: {
        backgroundColor: 'red',
        color:'white'
    },
   
    imagen: {

        justifyContent: 'center',
        width: '98%',
        height: '25%',

    },
});

export default ListadoRestaurantes


