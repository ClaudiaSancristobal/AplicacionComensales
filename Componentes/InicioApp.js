import React, { Component } from 'react';
import { StyleSheet, View, TouchableWithoutFeedback, Image } from 'react-native';

import Menu from '../Componentes/Menu'
import ListadoRestaurantes from '../Componentes/ListadoRestaurantes'

import SideMenu from 'react-native-side-menu'
import Icon from 'react-native-vector-icons/FontAwesome'


class InicioApp extends Component {

  constructor(props) {
    super(props)
    this.state = {
      isOpen: false
    }
  }

  abrirMenu() {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }

  actualizarMenu(isOpen) {
    this.setState({ isOpen })
  }
  render() {


    /*return (
      <View style={styles.container}>
        <SideMenu
          menu={<Menu />}
          isOpen={this.state.isOpen}
          onChange={(isOpen) => this.actualizarMenu(isOpen)}
        >
          <View style={styles.menu}>
            <TouchableWithoutFeedback onPress={this.abrirMenu.bind(this)}>
              <Icon
                name="bars"
                color="black"
                size={25}
              />
            </TouchableWithoutFeedback>
            <Image
              source={{ uri: 'data:image/png;base64,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' }}
              style={{ height: 70, width: 70 }}
            />
            <Icon
              name="search"
              color="black"
              size={25}
            />
          </View>
          <ListadoRestaurantes />
        </SideMenu>
      </View>
    );*/
  }
}








const styles = StyleSheet.create({
  container: {
    marginVertical: 30,
    paddingVertical: 15,
    flex: 1,
    backgroundColor: 'white',
  },
  menu: {
    flexDirection: 'row',
    height: 60,
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'white',
    paddingHorizontal: 15,
    marginVertical: 30




  },


});

export default InicioApp