import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigation from './AppNavigation';
import AuthNavigation from './AuthNavigation';
import { userSelector } from '../Auth/Redux/UserRedux'
import { useSelector } from 'react-redux'


const MainNavigation = (props) => {

    let loggedInUser = useSelector(userSelector);


    return (
        <NavigationContainer>
            {
                loggedInUser ?
                    <AppNavigation />
                    :
                    <AuthNavigation />
            }
        </NavigationContainer>
    );
};

export default MainNavigation;
