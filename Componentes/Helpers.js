import * as firebase from 'firebase'

class Helpers {

     static getBarrioRestaurante (restId, callback){
                let userNamePath =  "/Restaurantes/" + restId + "details/barrio"
                firebase.database().ref(userNamePath).on('value', (snapshot) => {
                    let name = ''
                    if (snapshot.val()) {
                        name = snapshot.val()
                    }
                    callback(name)
                })
             

     }
     

}


export default Helpers
