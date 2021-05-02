import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigation from './AppNavigation';
import AuthNavigation from './AuthNavigation';


const MainNavigation = (props) => {
    return (
        <NavigationContainer>
            <AppNavigation/>
        </NavigationContainer>
    );
};

export default MainNavigation;
