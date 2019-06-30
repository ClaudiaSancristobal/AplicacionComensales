import React, { Component } from 'react';
import { StyleSheet, Image, View } from 'react-native';

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

        })*/

        firestore.collection("Restaurantes").get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                console.log(doc.data());

            });
        });
        //this.setState({ restaurantes : doc.data() });
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
        imagen: {

            justifyContent: 'center',
            width: '98%',
            height: '30%',

        },
    });

    export default ListadoRestaurantes


