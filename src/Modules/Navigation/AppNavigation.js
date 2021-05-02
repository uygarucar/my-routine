import React from 'react';
import { Text } from 'react-native';
import { Fonts, Metrics } from '../../StylingConstants';
import { createStackNavigator } from '@react-navigation/stack';

import SettingsScreen from '../Settings/Screens/SettingsScreen';
import AuthScreen from '../Auth/Screens/AuthScreen';
import MainScreen from '../Main/Screens/MainScreen'


import { cn, useThemedColors } from '../Theming';
import { useLocalization, tn } from '../Localization';

const AppStack = createStackNavigator();

const AppNavigation = props => {

    const colors = useThemedColors();
    const loc = useLocalization();
    return (
        <AppStack.Navigator>
            <AppStack.Screen
                name="main-screen"
                component={MainScreen}
                options={{
                    title:'Anasayfa'
                }}
            />
            <AppStack.Screen
                name="setting-screen"
                component={SettingsScreen}
                options={{
                    title: loc.t(tn.settings),
                    headerStyle: {
                        backgroundColor: colors[cn.header.background],
                    },
                    headerTitleAlign: 'center',
                    headerTitleStyle: {
                        fontFamily: Fonts.type.bold,
                        fontSize: Fonts.size(18),
                        color: colors[cn.header.text],
                    },
                    headerBackTitleVisible: false,
                    headerLeftContainerStyle: {
                        marginLeft: Metrics.marginHorizontal * 0.1,
                    },
                    headerTintColor: colors[cn.header.backIcon]
                }}
            />


        </AppStack.Navigator>
    );
};

export default AppNavigation;
