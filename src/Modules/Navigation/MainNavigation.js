import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import DummyNavigation from './DummyNavigation';
import AuthNavigation from './AuthNavigation';

const MainNavigation = (props) => {
    return (
        <NavigationContainer>
            <DummyNavigation />
            :
            <AuthNavigation />
        </NavigationContainer>
    );
};

export default MainNavigation;
