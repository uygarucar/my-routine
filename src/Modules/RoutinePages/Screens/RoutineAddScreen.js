import { useNavigation } from '@react-navigation/core';
import React from 'react';
import { SafeAreaView, Text, TextInput, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useThemedColors } from '../../Theming';
import getStyles from '../styles/RoutuneAddStyles';

import { tn, useLocalization } from '../../Localization';
import { cn, useThemedValues } from '../../Theming';


const RoutineAddScreen = props => {

    const loc = useLocalization();    
    const themedColors=useThemedColors();
    const styles=getStyles(themedColors);
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
             <SafeAreaView style={{ flex: 1 }}>
                <TextInput
                style={styles.textInput}
                placeholder={loc.t(tn.routineName)}
                placeholderTextColor={themedColors[cn.auth.inputPlaceholder]}
                ></TextInput>
                 <TextInput
                style={styles.textInput}
                placeholder={loc.t(tn.startDate)}
                placeholderTextColor={themedColors[cn.auth.inputPlaceholder]}
                ></TextInput>
                 <TextInput
                style={styles.textInput}
                placeholder={loc.t(tn.endDate)}
                placeholderTextColor={themedColors[cn.auth.inputPlaceholder]}
                ></TextInput>
                <TouchableOpacity onPress={()=>navigation.navigate("setting-screen")}>
                    <Text>
                        ayarlara git
                    </Text>
                </TouchableOpacity>
            </SafeAreaView>
            
        </View>
    );
};

export default RoutineAddScreen;
