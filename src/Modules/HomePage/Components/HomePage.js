import React from 'react';
import { SafeAreaView, Text, TouchableOpacity, View } from 'react-native';

import Icon from '../../../Components/Icon';
import { Svgs } from '../../../StylingConstants'
import { cn, useThemedColors, useThemedStyles, useThemedValues } from '../../Theming';

import getStyles from '../styles/HomeScreenStyles';


const HomePage = props => {

    const colors = useThemedColors();
    const styles = getStyles(colors);

    const renderHomePage = () => { // menüdeki seçenek sayı bilinmediği içinn kullanılan fonk.
        return props.options.map((option, index) => {

            const isChecked = option.key === props.selectedOptionKey;
            const svg = isChecked ? Svgs.RadioChecked : Svgs.RadioUnchecked;
            const iconStyle = {
                color: isChecked ? colors[cn.settings.radioButtonSelectedIcon]
                    : colors[cn.settings.radioButtonUnselectedIcon],

            }
        })
    }

    return (

        <>

        <View style={styles.container}>
            <Text style={styles.titleText}>{props.menuTitle}</Text>
            {renderHomePage}
        </View>
        <SafeAreaView style={styles.container}>
            <View style={styles.addbuttonTouchable} onPress={_onPress_AddRoutine}>
                <Icon svg={Svgs.addbutton} iconStyle={{color: 'blue'}} />
            </View>

        </SafeAreaView>

        
        </>
    );

};

export default HomePage;

