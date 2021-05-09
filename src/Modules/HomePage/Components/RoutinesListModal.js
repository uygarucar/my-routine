import React from 'react';
import { View, FlatList, Text } from 'react-native';
import DummyData from './DummyData'
import {useTheme, useThemedColors, useThemeOptions } from '../../Theming/index';
import getStyles from '../styles/RoutinesListModalStyles'


const RoutinesListModal = props => {

    const themedColors = useThemedColors();
    const styles = getStyles(themedColors);

    return (
        <View style={styles.container}>
            <View style={styles.titleContainer}>
                <Text style={styles.titleText}>{DummyData[0].routineName}</Text>
            </View>
            <View style={styles.itemsContainer}>
                <Text style={styles.routinesText}>{DummyData[0].routines[0]}</Text>
                <Text style={styles.routinesText}>{DummyData[0].routines[1]}</Text>
            </View>
        </View>
    )

}

export default RoutinesListModal;