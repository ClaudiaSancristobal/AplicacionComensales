/*import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Navigator from 'react-navigation'

import Login from './Componentes/Login'
import Inicio from './Componentes/Inicio'

import firebase from 'firebase';




class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      initialView: null,
      userLoaded: false
    }
    this.getInitialView()
    this.getInitialView = this.getInitialView.bind(this)
  }



  getInitialView() {

    firebase.initializeApp({
      apiKey: "AIzaSyBMksn7U5ySu0rnQtBFtg-wfhQ4qvs_GJ8",
      authDomain: "reservas-2019.firebaseapp.com",
      databaseURL: "https://reservas-2019.firebaseio.com",
      projectId: "reservas-2019",
      storageBucket: "reservas-2019.appspot.com",
      messagingSenderId: "295243413282",
      appId: "1:295243413282:web:47e69fca1eb318e7"
    });

    firebase.auth().onAuthStateChanged((user) => {
      let initialView = user ? 'Inicio' : 'Login'

      this.setState({
        userLoaded: true,
        initialView: initialView
      })
    })
  }

  configureScene(route) {
    if (route.sceneConfig) {
      return route.sceneConfig
    }
    else {
      return ({
        ...Navigator.sceneConfig.HorizontalSwipeJumpFromRigth,
      })
    }

  }

  renderScene(route, navigator) {
    var globalProps = { navigator }
    switch (route.id) {
      case 'Inicio':
        return (
          <Inicio navigator={navigator} />
        )
      case 'Login':
        return (
          <Login navigator={navigator} />
        )

    }


  }
  render() {
    if (this.state.userLoaded) {
      return (
        <View >
          <Navigator
            initialRoute={{
              id: this.state.initialView
            }}
            renderScene={this.renderScene}
            configureScene={this.configureScene}
          />

        </View>
      );
    }
    else {
      return null
    }
  }
}

const styles = StyleSheet.create({

});

export default App*/



import React from 'react';
import DrawerNavigator from './Componentes/DrawerNavigator'


import Login from './Componentes/Login'
import InicioApp from './Componentes/InicioApp'

/*
import SideMenu from 'react-native-side-menu'
import Icon from 'react-native-vector-icons/FontAwesome'*/
import { createStackNavigator, createAppContainer, } from 'react-navigation'
import { StyleSheet, Text, View } from 'react-native';

const RootStack = createStackNavigator(
  {
    
    Login: Login,
    DrawerNavigator: DrawerNavigator
  },

);

const Contenedor = createAppContainer(RootStack);

export default class App extends React.Component {

  render() {
    return (
      <View>
        
        <DrawerNavigator/> 
      </View>
    );
  }
}



