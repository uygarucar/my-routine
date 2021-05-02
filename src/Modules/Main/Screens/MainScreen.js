import React from 'react';
import { Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const MainScreen = props => {
    return (
        <TouchableOpacity onPress={()=>props.navigation.navigate("setting-screen")}>
            <Text>Anasayfa</Text>
        </TouchableOpacity>
    );
};

export default MainScreen;
