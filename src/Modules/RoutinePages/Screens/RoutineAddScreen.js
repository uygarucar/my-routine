import { useNavigation } from '@react-navigation/core';
import React, { useEffect, useState } from 'react';
import { SafeAreaView, Text, TextInput, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import moment from 'moment';


import { useThemedColors } from '../../Theming';
import getStyles from '../styles/RoutuneAddStyles';

import { tn, useLocalization } from '../../Localization';
import { cn, useThemedValues } from '../../Theming';


const RoutineAddScreen = props => {
    const [date, setDate] = useState('');

    const loc = useLocalization();
    const themedColors = useThemedColors();
    const styles = getStyles(themedColors);
    const navigation = useNavigation();

    const _onPress_add = () => {

    };
    

    useEffect(()=>{
        if(props.value !== undefined){
            setDate(props.value)
        }
    },[])

    return (
        <View style={styles.container}>
            <SafeAreaView style={{ flex: 1 }}>
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
                    <TouchableOpacity style={styles.today} onPress={()=>setDate(moment().format('YYYY-MM-DD'))}>
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
                <TouchableOpacity style={styles.addTouchable} onPress={_onPress_add}>
                    <Text style={styles.addText}>{loc.t(tn.add)}</Text>
                </TouchableOpacity>
            </SafeAreaView>

        </View>
    );
};

export default RoutineAddScreen;
