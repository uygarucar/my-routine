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
    const [endDate, setDateEnd] = useState('');

    const [emptyDate, setemptyDate] = useState(true);
    const [emptyDateEnd, setemptyDateEnd] = useState(true);



    const [date, setDate] = useState(new Date());
    const [dateEnd, setEndDate] = useState(new Date());


    const [mode, setMode] = useState('date');

    const [show, setShow] = useState(false);
    const [showEnd, setShowEnd] = useState(false);

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

        if (event.type === 'dismissed') {
            setShow(false);
            setemptyDate(true);

        }

        else {

            const currentDate = selectedDate;
            setShow(Platform.OS === 'ios');
            setDate(currentDate);
            setDateToday(moment(currentDate).format('DD-MM-YYYY'))

        }
    };

    const onChangeEnd = (event, selectedDate) => {
        if (event.type === 'dismissed') {
            setShowEnd(false);
            setemptyDateEnd(true);

        }

        else {
            const currentDate = selectedDate;
            setShowEnd(Platform.OS === 'ios');
            setEndDate(currentDate);
            setDateEnd(moment(currentDate).format('DD-MM-YYYY'))

        }
    };

    const showMode = () => {
        setShow(true);
        setMode('date');
        setemptyDate(false);

    };

    const showModeEnd = () => {
        setShowEnd(true);
        setMode('date');
        setemptyDateEnd(false);

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
                        onPress={showMode} >
                        <Text
                            style={[styles.datetextInput, { color: emptyDate ? themedColors[cn.auth.inputPlaceholder] : themedColors[cn.home.routinesText] }]}
                        >{
                                emptyDate ?
                                    loc.t(tn.startDate) :
                                    todaydate
                            }

                        </Text>
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
                    <TouchableOpacity
                        style={styles.calendar}
                        onPress={showModeEnd} >
                        <Text
                            style={[styles.datetextInput, { color: emptyDateEnd ? themedColors[cn.auth.inputPlaceholder] : themedColors[cn.home.routinesText] }]}
                        >{
                                emptyDateEnd ?
                                    loc.t(tn.endDate) :
                                    endDate
                            }

                        </Text>
                    </TouchableOpacity>
                </View>
                {showEnd && (
                    <DateTimePicker
                        testID="dateTimePicker"
                        value={dateEnd}
                        mode={mode}
                        is24Hour={true}
                        display="default"
                        onChange={onChangeEnd}
                    />
                )}

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
