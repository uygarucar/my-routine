import React from 'react';
import { SafeAreaView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useDispatchChangeTheme, useTheme, useThemedColors, useThemeOptions } from '../../Theming';
import { useLocalization, tn, useLocaleOptions, useLocale, useDispatchChangeLocale } from '../../Localization';
import { Svgs } from '../../../StylingConstants';
import getStyles from '../styles/HomeScreenStyles';
import Modal from 'react-native-modal';
import Icon from '../../../Components/Icon';



const HomeScreen = props => {

    const currentTheme = useTheme();
    const themedColors = useThemedColors();
    const styles = getStyles(themedColors);
    const themeOptions = useThemeOptions();
    const changeTheme = useDispatchChangeTheme();

    const currentLocale = useLocale();
    const loc = useLocalization();
    const localeOptions = useLocaleOptions();
    const changeLocale = useDispatchChangeLocale();


    const _onSelect_Theme = (key) => {
        changeTheme(key);
    }

    const _onSelect_Locale = (key) => {
        changeLocale(key);
    }


    

    return (
        <View style={styles.container}>
            <SafeAreaView style={{ flex: 1 }}>
            <TouchableOpacity style={styles.touchButton}>
                    <Text style={styles.inputText}  
                underlineColorAndroid='transparent'></Text>
                </TouchableOpacity>
                
                <View style={styles.buttonContainer}> 
                    <Icon svg={Svgs.Addbutton} iconStyle={{color:'blue'}}></Icon>
                </View>
            </SafeAreaView>
        </View>

        
        

        


    );

};


export default HomeScreen;