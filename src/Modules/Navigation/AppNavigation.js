import React from 'react';
import { Text } from 'react-native';
import { Fonts, Metrics } from '../../StylingConstants';
import { createStackNavigator } from '@react-navigation/stack';

import SettingsScreen from '../Settings/Screens/SettingsScreen';
import AuthScreen from '../Auth/Screens/AuthScreen';
import HomeScreen from '../HomePage/Screens/HomeScreen';
import RoutineAdd from '../RoutinePages/Screens/RoutineAddScreen';
import SettingsIcon from './SettingsIcon'

import { cn, useThemedColors } from '../Theming';
import { useLocalization, tn } from '../Localization';

const AppStack = createStackNavigator();

const AppNavigation = props => {

    const colors = useThemedColors();
    const loc = useLocalization();
    return (
        <AppStack.Navigator>
           <AppStack.Screen
                name="homepage-screen"
                component={HomeScreen}
                options={{
                    title: loc.t(tn.home),
                    headerStyle: {
                        backgroundColor: colors[cn.header.background],
                    },
                    headerTitleAlign: 'center',
                    headerTitleStyle: {
                        fontFamily: Fonts.type.bold,
                        fontSize: Fonts.size(18),
                        color: colors[cn.header.text],
                        textTransform: 'uppercase',
                    },
                    headerBackTitleVisible: false,
                    headerLeftContainerStyle: {
                        marginLeft: Metrics.marginHorizontal * 0.1,
                    },
                    headerTintColor: colors[cn.header.backIcon],
                    headerRight: SettingsIcon
                }}
            /> 
        
           <AppStack.Screen
                name="routineAdd-screen"
                component={RoutineAdd}
                options={{
                    title: loc.t(tn.addNew),
                    headerStyle: {
                        backgroundColor: colors[cn.header.background],
                    },
                    headerTitleAlign: 'center',
                    headerTitleStyle: {
                        fontFamily: Fonts.type.bold,
                        fontSize: Fonts.size(18),
                        color: colors[cn.header.text],
                        textTransform: 'uppercase',
                    },
                    headerBackTitleVisible: false,
                    headerLeftContainerStyle: {
                        marginLeft: Metrics.marginHorizontal * 0.1,
                    },
                    headerTintColor: colors[cn.header.backIcon],
                    headerRight: SettingsIcon

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
                        textTransform: 'uppercase',
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
