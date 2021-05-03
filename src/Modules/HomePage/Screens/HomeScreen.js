import React from 'react';
import { SafeAreaView, Text, TouchableOpacity, View } from 'react-native';
import { useDispatchChangeTheme, useTheme, useThemedColors, useThemeOptions } from '../../Theming';
import { useLocalization, tn, useLocaleOptions, useLocale, useDispatchChangeLocale } from '../../Localization';
import  {Svgs} from '../../../StylingConstants';
import getStyles from '../styles/HomeScreenStyles';
import HomePage from '../Components/HomePage';


const HomeScreen = props => {

    const currentTheme=useTheme();
    const themedColors = useThemedColors();
    const styles = getStyles(themedColors);
    const themeOptions=useThemeOptions();
    const changeTheme = useDispatchChangeTheme();

    const currentLocale=useLocale();
    const loc=useLocalization();
    const localeOptions=useLocaleOptions();
    const changeLocale=useDispatchChangeLocale();


    const _onSelect_Theme = (key) => {
        changeTheme(key);
    }

    const _onSelect_Locale = (key) => {
        changeLocale(key);
    }

    

    return (
        <View style={styles.container}>
            <SafeAreaView style={{ flex: 1 }}>
                <Text style={styles.routineText}>Sabah</Text>
                <Text style={styles.routineText}>İsten dönerken</Text>
                <Text style={styles.routineText}>Sabah</Text>
                <Text style={styles.routineText}>İsten dönerken</Text>
                <View style={styles.menusContainer}>
                </View>
                
            </SafeAreaView>
        </View>

        
    );
    
};


export default HomeScreen;