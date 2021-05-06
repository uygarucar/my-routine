import React from 'react';
import { useEffect, useState } from 'react';
import { Text, TextInput, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import moment from 'moment';
import DateTimePicker from '@react-native-community/datetimepicker';


import { useThemedColors } from '../../Theming';
import getStyles from '../styles/RoutuneAddStyles';

import { Locales, tn, useLocale, useLocalization } from '../../Localization';
import { cn } from '../../Theming';


const RoutunePage = props => {

    const [todaydate, setDateToday] = useState('');
    const [date, setDate] = useState(new Date());
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);

    const loc = useLocalization();
    const themedColors = useThemedColors();
    const styles = getStyles(themedColors);
    const locale = useLocale();

    useEffect(() => {
        if (props.value !== undefined) {
            setDateToday(props.value)
        }
    }, [])

    const todaysDate = () => {
        if (locale === Locales.turkish) {
            setDateToday(moment().format('DD-MM-YYYY'))
        }
        else {
            setDateToday(moment().format('MM-DD-YYYY'))
        }

    }


    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShow(Platform.OS === 'ios');
        setDate(currentDate);
        console.log(date);
        setDateToday(moment(date).format('DD-MM-YYYY'))

    };


    const showMode = (currentMode) => {
        setShow(true);
        setMode(currentMode);
    };

    const showDatepicker = () => {
        showMode('date');
    };


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
                   <TouchableOpacity
                   style={styles.calendar}
                   onPress={showDatepicker}
                   >
                   <TextInput
                        style={[styles.textInput,styles.datetextInput]}
                        placeholder={loc.t(tn.startDate)}
                        placeholderTextColor={themedColors[cn.auth.inputPlaceholder]}
                        value={todaydate}
                        editable={false}
                    >
                    </TextInput>
                   </TouchableOpacity>

                    <TouchableOpacity style={styles.today} onPress={todaysDate}>
                        <Text style={styles.todayText}>{loc.t(tn.today)}</Text>
                    </TouchableOpacity>
                </View>

                {show && (
                    <DateTimePicker
                        testID="dateTimePicker"
                        value={date}
                        mode={mode}
                        is24Hour={true}
                        display="default"
                        onChange={onChange}
                    />
                )}

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
