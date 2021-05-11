import React, { useEffect, useState } from 'react';
import { View, FlatList, Text } from 'react-native';
import { getItemDetail } from '../../RoutinePages/API/Firebase';
import {useTheme, useThemedColors, useThemeOptions } from '../../Theming/index';
import getStyles from '../styles/RoutinesListModalStyles'


const RoutinesListModal = props => {
    const [itemRoutines, setItemRoutines] = useState('');
    const key=props.item.key;
    const themedColors = useThemedColors();
    const styles = getStyles(themedColors);
    // console.log("rutin",props.item.todayDate);
    // console.log("bitiş",props.item.EndDate);
    // console.log("başlık",props.item.title);

    useEffect(() => {
        if (key) {
            // dispatc(setIsLoadingAC(false));  //loading modalı kapanır

            getItemDetail(key, item => {

                setItemRoutines(item.routines);
            });
        }
    }, []);


    
    return (
        
        <View style={styles.container}>
            <View style={styles.titleContainer}>
                <Text style={styles.titleText}>{props.item.title}</Text>

            </View>
            <View style={styles.itemsContainer}>
                <Text style={styles.routinesText}>{itemRoutines}</Text>
                {/* <Text style={styles.routinesText}>Rutin 2</Text> */}

                {/* for (const key in object) {
                    if (Object.hasOwnProperty.call(object, key)) {
                        const element = object[key];
                        
                    }
                } */}
          
            </View>

        </View>
    )

}

export default RoutinesListModal;