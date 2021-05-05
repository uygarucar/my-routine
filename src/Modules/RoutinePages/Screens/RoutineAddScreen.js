import React from 'react';
import { SafeAreaView, Text, TouchableOpacity, View } from 'react-native';


import { useThemedColors } from '../../Theming';
import getStyles from '../styles/RoutuneAddStyles';

import { tn, useLocalization } from '../../Localization';

import RoutinePage from '../Components/RoutinePage'
import { useSelector } from 'react-redux';
import { useAddEditSelectors } from '../Redux/RoutineRedux';

const RoutineAddScreen = props => {

    const loc = useLocalization();
    const themedColors = useThemedColors();
    const styles = getStyles(themedColors);

    const addMode = useSelector(useAddEditSelectors);

    const _onPress_add = () => {

    };
    const _onPress_edit = () => {

    };

    return (
        <View style={styles.container}>
            <SafeAreaView style={{ flex: 1 }}>

                <RoutinePage />

                {
                    addMode ?
                        <TouchableOpacity style={styles.addTouchable} onPress={_onPress_add}>
                            <Text style={styles.addText}>{loc.t(tn.add)}</Text>
                        </TouchableOpacity>
                        :
                        <TouchableOpacity style={styles.addTouchable} onPress={_onPress_add}>
                            <Text style={styles.addText}>{loc.t(tn.edit)}</Text>
                        </TouchableOpacity>}

            </SafeAreaView>
        </View>

    );
};

export default RoutineAddScreen;
