import React, { useState } from 'react';
import { SafeAreaView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { cn, useDispatchChangeTheme, useTheme, useThemedColors, useThemeOptions } from '../../Theming';
import { useLocalization, tn, useLocaleOptions, useLocale, useDispatchChangeLocale } from '../../Localization';
import { Svgs } from '../../../StylingConstants';
import getStyles from '../styles/HomeScreenStyles';
import Modal from 'react-native-modal';
import Icon from '../../../Components/Icon';
import RoutinesListModal from '../Components/RoutinesListModal'
import { useDispatch } from 'react-redux';
import { changeMode } from '../../RoutinePages/Redux/RoutineRedux';
import DummyData from '../Components/DummyData'
import { addItem } from '../API/Firebase'
import Item from '../Components/Item';




const HomeScreen = props => {

    const themedColors = useThemedColors();
    const styles = getStyles(themedColors);
    
    const dispatch = useDispatch();

    const _onPress_Add = () => {

        const addMode = changeMode(true);
        dispatch(addMode);
        props.navigation.navigate('routineAdd-screen')
    }
    const _onPress_Edit = (itemKey) => {
        const addMode = changeMode(false);
        dispatch(addMode);
        props.navigation.navigate('routineAdd-screen')
    }
  
    return (
        <View style={styles.container}>
           
            <Item
                onPress={ _onPress_Edit }
            ></Item>


            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.addbuttonTouchable} onPress={_onPress_Add} >
                    <Icon svg={Svgs.Addbutton} iconStyle={{ color: themedColors[cn.header.background] }}></Icon>
                </TouchableOpacity>
            </View>
        </View>







    );

};


export default HomeScreen;