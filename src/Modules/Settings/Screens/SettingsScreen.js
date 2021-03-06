import React from 'react';
import { SafeAreaView, Text, TouchableOpacity, View } from 'react-native';
import { useDispatchChangeTheme, useTheme, useThemedColors, useThemeOptions } from '../../Theming';
import { useLocalization, tn, useLocaleOptions, useLocale, useDispatchChangeLocale } from '../../Localization';
import getStyles from '../styles/SettingsScreenStyles';
import OptionMenu from '../Components/OptionMenu';

import {userSelector,signOutRequest} from '../../Auth/Redux/UserRedux';
import { useSelector,useDispatch } from 'react-redux';


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

    const user =useSelector(userSelector);
    const dispatch = useDispatch();
    
    const _onPress_SignOut = () => {
        dispatch(signOutRequest());
    }

    const _onSelect_Theme = (key) => {
        changeTheme(key);
    }

    const _onSelect_Locale = (key) => {
        changeLocale(key);
    }

    return (
        <View style={styles.container}>
            <SafeAreaView style={{ flex: 1 }}>
                <Text style={styles.nameText}>{user.displayName}</Text>
                <Text style={styles.emailText}>{user.email}</Text>
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
                <TouchableOpacity style={styles.signOutTouchable} onPress={_onPress_SignOut}>
                    <Text style={styles.signOutText}>{loc.t(tn.signOut)}</Text>
                </TouchableOpacity>
            </SafeAreaView>
        </View>
    );
};

export default SettingsScreen;
