import React from 'react';
import { SafeAreaView, Text, TouchableOpacity, View } from 'react-native';
import { useDispatchChangeTheme, useTheme, useThemedColors, useThemeOptions } from '../../Theming';
import { useLocalization, tn, useLocaleOptions, useLocale, useDispatchChangeLocale } from '../../Localization';
import getStyles from '../styles/SettingsScreenStyles';
import OptionMenu from '../Components/OptionMenu';


const SettingsScreen = props => {

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
                <Text style={styles.nameText}>Fatma nur </Text>
                <Text style={styles.emailText}>fatmanur@gmail.com</Text>
                <View style={styles.menusContainer}>
                <OptionMenu 
                        options={themeOptions} // option seçenekleri
                        menuTitle={loc.t(tn.colorTheme)}
                        selectedOptionKey={currentTheme}
                        onSelect={_onSelect_Theme} // seçilen değere göre theme i update etmek için fonksiyon çalıştırır
                   />
                        <OptionMenu 
                        options={localeOptions}
                        menuTitle={loc.t(tn.language)}
                        selectedOptionKey={currentLocale}
                        onSelect={_onSelect_Locale}
                    />
                </View>
                <TouchableOpacity style={styles.signOutTouchable}>
                    <Text style={styles.signOutText}>{loc.t(tn.signOut)}</Text>
                </TouchableOpacity>
            </SafeAreaView>
        </View>
    );
};

export default SettingsScreen;
