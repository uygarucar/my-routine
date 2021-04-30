import React from 'react';
import { Text } from 'react-native';

import { createStackNavigator } from '@react-navigation/stack';

//import SettingsScreen from '../Settings/Screens/SettingsScreen';
import AuthScreen from '../Auth/Screens/AuthScreen';

const AppStack = createStackNavigator();

const AppNavigation = props => {
    return (
        <AppStack.Navigator>
            {/* <AppStack.Screen
                name="setting-screen"
                component={SettingsScreen}
                /> */}
                <AppStack.Screen
                name="auth-screen"
                component={AuthScreen}
                />

        </AppStack.Navigator>
    );
};

export default AppNavigation;
