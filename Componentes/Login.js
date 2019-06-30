import React, { Component } from 'react'
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  TextInput
} from 'react-native'

import { config, settings } from "../firebaseConfig";
import firebase from 'firebase';

firebase.initializeApp(config);




class Login extends Component {

  constructor(props) {
    super(props);
    this.state = {
      email: 'claudia@gmail.com',
      psw: 'W29119Jgmail',
      response: ''
    }
    this.onPressLogin = this.onPressLogin.bind(this)
    this.onPressRegistrarse = this.onPressRegistrarse.bind(this)

  }
  componentWillMount() {

   

    /*firebase.auth().onAuthStateChanged((user)=>{
      if(user != null){
          console.log(user)
      }
      else console.log("no hay nadie logueado")
      
    })*/
  }


  onPressLogin() {
    console.log(this.state.email)
    console.log(this.state.psw)
    firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.psw)
      .then(
        () => this.setState({ response: "Se logueo ok" }),
        this.props.navigation.navigate('Dashboard')
      )
    
      .catch(error => this.setState({ response: error.message }))
    console.log(this.state.response)

  }

  onPressRegistrarse() {
    console.log(this.state.email)
    console.log(this.state.psw)
    firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.psw)
      .then(() =>{ this.setState({ response: "Se registro correctamente" });alert(this.state.response)})
      .catch(error => {this.setState({ response: error.message });alert("No se pudo registrar")})
   
  }

   
  render() {
    return (
      <View style={styles.container}>
        
        <Image
          source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScoWXolY9RY1gGDlXt_m4O4oSrh6MVRc8bAe2gnjyMUxHaO5Pa' }}
          style={styles.image}
        />
          <View style={styles.contenedor}>
            <TextInput
              placeholderTextColor="grey"
              placeholder="Email"
              style={styles.input}
              onChangeText={(email) => this.setState({ email })}
              value={this.state.email}
            />
            <TextInput
              placeholderTextColor="grey"
              placeholder="Password"
              style={styles.input}
              password={true}
              onChangeText={(psw) => this.setState({ psw })}
              value={this.state.psw}
              
            />
          </View>
          <TouchableOpacity
            style={styles.button}
            onPress={this.onPressLogin}
          >
            <Text> Login </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={this.onPressRegistrarse}
          >
            <Text> Registrarse </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={this.onPressLoginGoogle}
          >
            <Text> Login con Google </Text>
          </TouchableOpacity>
          
      
        <TouchableOpacity onPress={() => this.props.navigation.navigate('Dashboard')}>
        <View
          style={{
            width: '98%',
            height: '4%',
            alignSelf: 'center',
            borderRadius: 4,
            padding: 24,
            backgroundColor: '#3B5998',
          }}>
          <Text style={{ color: 'white', fontWeight: 'bold' }}>
            Login con Facebook
          </Text>
        </View>
      </TouchableOpacity>
  
    </View>

    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  },
  button: {
    backgroundColor: '#f6b93b',
    borderRadius: 5,
    padding: 10,
    margin: 5,
  },
  input: {
    height: 50,
    borderWidth: 1,
    borderColor: 'grey',
    paddingHorizontal: 20,
    paddingVertical: 10,
    color: 'black'

  },
  contenedor: {
    marginTop: 20,
    

  },
  image: {
    
    justifyContent: 'center',
    width: '100%', 
    height: '30%', 

  },
  

});


export default Login










