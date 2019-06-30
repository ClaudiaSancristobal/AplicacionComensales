import React, { Component } from 'react';
import { View, Text, StyleSheet, Button, TouchableHighlight, Image } from 'react-native';
import Icon from '@expo/vector-icons/Ionicons';
console.disableYellowBox = ['Remote Debugger']
/**
 * - AppSwitchNavigator
 *    - WelcomeScreen
 *      - Login Button
 *      - Sign Up Button
 *    - AppDrawerNavigator
 *          - Dashboard - DashboardStackNavigator(needed for header and to change the header based on the                     tab)
 *            - DashboardTabNavigator
 *              - Tab 1 - FeedStack
 *              - Tab 2 - ProfileStack
 *              - Tab 3 - SettingsStack
 *            - Any files you don't want to be a part of the Tab Navigator can go here.
 */

import {
    createSwitchNavigator,
    createAppContainer,
    createDrawerNavigator,
    createBottomTabNavigator,
    createStackNavigator
} from 'react-navigation';


import Login from './Componentes/Login'
import ListadoRestaurantes from './Componentes/ListadoRestaurantes';
import Puntuar from './Componentes/Puntuar'
import MisReservas from './Componentes/MisReservas'


class App extends Component {
    render() {
        return <AppContainer />;
    }
}

export default App;



class Feed extends Component {
    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>Feed</Text>
            </View>
        );
    }
}

class Settings extends Component {
    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>Settings</Text>
            </View>
        );
    }
}


class Profile extends Component {


}

const DashboardTabNavigator = createBottomTabNavigator(
    {
        Feed,
        Profile,
        Settings
    },
    {
        navigationOptions: ({ navigation }) => {
            const { routeName } = navigation.state.routes[navigation.state.index];
            return {
                headerTitle: routeName
            };
        }
    }
);
const DashboardStackNavigator = createStackNavigator(
    {
        DashboardTabNavigator: DashboardTabNavigator
    },
    {
        defaultNavigationOptions: ({ navigation }) => {
            return {
                headerLeft: (
                    <Icon
                        style={{ paddingLeft: 10 }}
                        onPress={() => navigation.openDrawer()}
                        name="md-menu"
                        size={30}
                    />
                )
            };
        }
    }
);

const ListadoStackNavigator = createStackNavigator(
    {
        DashboardTabNavigator: ListadoRestaurantes
    },
    {
        defaultNavigationOptions: ({ navigation }) => {
            return {
                headerLeft: (
                    <Icon
                        style={{ paddingLeft: 10 }}
                        onPress={() => navigation.openDrawer()}
                        name="md-menu"
                        size={30}
                    />
                )
            };
        }
    }
);

const MisReservasStackNavigator = createStackNavigator(
    {
        DashboardTabNavigator: MisReservas
    },
    {
        defaultNavigationOptions: ({ navigation }) => {
            return {
                headerLeft: (
                    <Icon
                        style={{ paddingLeft: 10 }}
                        onPress={() => navigation.openDrawer()}
                        name="md-menu"
                        size={30}
                    />
                )
            };
        }
    }
);

const PuntuarStackNavigator = createStackNavigator(
    {
        DashboardTabNavigator: Puntuar
    },
    {
        defaultNavigationOptions: ({ navigation }) => {
            return {
                headerLeft: (
                    <Icon
                        style={{ paddingLeft: 10 }}
                        onPress={() => navigation.openDrawer()}
                        name="md-menu"
                        size={30}
                    />
                )
            };
        }
    }
);


//Menu lateral
const AppDrawerNavigator = createDrawerNavigator({

    Reservar: {
        screen: DashboardStackNavigator
    },
    Puntuar: {
        screen: PuntuarStackNavigator
    },
    MisReservas: {
        screen: MisReservasStackNavigator
    },
    ListadoRestaurantes: {
        screen: ListadoStackNavigator
    }
}, {
        drawerBackgroundColor: 'white',
        contentOptions: {
            activeTintColor: 'black'
        }
    }

);

//rutas de la app
const AppSwitchNavigator = createSwitchNavigator({
    Login: { screen: Login },
    Dashboard: { screen: AppDrawerNavigator },
    Puntuar: { screen: Puntuar },
    MisReservas: { screen: MisReservas },
    ListadoRestaurantes: { screen: ListadoRestaurantes }

});

const AppContainer = createAppContainer(AppSwitchNavigator);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});




