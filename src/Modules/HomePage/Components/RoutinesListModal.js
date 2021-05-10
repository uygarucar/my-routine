import React from 'react';
import { View, FlatList, Text } from 'react-native';
import {useTheme, useThemedColors, useThemeOptions } from '../../Theming/index';
import getStyles from '../styles/RoutinesListModalStyles'


const RoutinesListModal = props => {

    const themedColors = useThemedColors();
    const styles = getStyles(themedColors);

    return (
        <View style={styles.container}>
            <View style={styles.titleContainer}>
                <Text style={styles.titleText}>Rutin adı</Text>
            </View>
            <View style={styles.itemsContainer}>
                <Text style={styles.routinesText}>Rutin 1</Text>
                <Text style={styles.routinesText}>Rutin 2</Text>
          
            </View>

        </View>
    )

}

export default RoutinesListModal;