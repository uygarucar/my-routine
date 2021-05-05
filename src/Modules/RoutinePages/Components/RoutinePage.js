import React from 'react';
import { useEffect, useState } from 'react';
import {Text, TextInput, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import moment from 'moment';
import { useThemedColors } from '../../Theming';
import getStyles from '../styles/RoutuneAddStyles';

import { Locales, tn, useLocale, useLocalization } from '../../Localization';
import { cn } from '../../Theming';


const RoutunePage = props => {

    const [date, setDate] = useState('');

    const loc = useLocalization();
    const themedColors = useThemedColors();
    const styles = getStyles(themedColors);
    const locale = useLocale();

    useEffect(() => {
        if (props.value !== undefined) {
            setDate(props.value)
        }
    }, [])

    const TodaysDate = () => {
        if (locale === Locales.turkish) {
            setDate(moment().format('DD-MM-YYYY'))
        }
        else {
            setDate(moment().format('MM-DD-YYYY'))
        }

    }

    return (
        <>
            <View style={styles.RoutineContainer}>

                <View style={styles.ViewInput}>
                    <TextInput
                        style={styles.textInput}
                        placeholder={loc.t(tn.routineName)}
                        placeholderTextColor={themedColors[cn.auth.inputPlaceholder]}
                        numberOfLines={1}
                    ></TextInput>
                </View>

                <View style={styles.ViewInput}>
                    <TextInput
                        style={styles.textInput}
                        placeholder={loc.t(tn.startDate)}
                        placeholderTextColor={themedColors[cn.auth.inputPlaceholder]}
                        value={date}
                        editable={false}
                    >
                    </TextInput>
                    <TouchableOpacity style={styles.today} onPress={TodaysDate}>
                        <Text style={styles.todayText}>{loc.t(tn.today)}</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.ViewInput}>
                    <TextInput
                        style={styles.textInput}
                        placeholder={loc.t(tn.endDate)}
                        placeholderTextColor={themedColors[cn.auth.inputPlaceholder]}
                    ></TextInput>
                </View>

                <View style={styles.ViewInput}>
                    <TextInput
                        style={[styles.RoutineInput, styles.textInput]}
                        placeholder={loc.t(tn.routines)}
                        placeholderTextColor={themedColors[cn.auth.inputPlaceholder]}
                        multiline
                    ></TextInput>
                </View>

            </View>
        </>
      
    );
};

export default RoutunePage;
