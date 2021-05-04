import React from 'react';
import { View, FlatList, Text } from 'react-native';
import styles from '../styles/RoutinesListModalStyles'
import DummyData from './DummyData'
import {useTheme, useThemedColors, useThemeOptions } from '../../Theming/index';
import getStyles from '../styles/RoutinesListModalStyles'


const RoutinesListModal = props => {

    //const currentTheme=useTheme();
    const themedColors = useThemedColors();
    const styles = getStyles(themedColors);

    return (
        <View style={styles.container}>
            <View style={styles.titleContainer}>
                <Text style={styles.titleText}>{DummyData[1].routineName}</Text>
            </View>
            <View style={styles.itemsContainer}>
                <Text>{DummyData[0].routines[0]}</Text>
                <Text>{DummyData[0].routines[1]}</Text>
            </View>
        </View>
    )

}

export default RoutinesListModal;