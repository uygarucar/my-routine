import React, { useEffect, useState } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import Modal from 'react-native-modal';

import { errorCodeSelector, setErrorCodeAC } from './ErrorRedux';
import Icon from '../../Components/Icon';

import getStyles from './styles/ErrorManagerStyles';
import { cn, useThemedColors, useThemedStyles } from '../Theming/index'

import { Svgs } from '../../StylingConstants/index';
import { errorList, tn, useLocalization } from '../Localization/index'


const ErrorManager = props => {

    const errorCode = useSelector(errorCodeSelector);
    const [errorState, setErrorState] = useState(errorCode);
    let isVisible = errorCode.length !== 0;

    const dispatch = useDispatch();

    useEffect(() => {
        setErrorState(errorCode);
    }, [errorCode])

    const styles = useThemedStyles(getStyles);
    const loc = useLocalization();
    const colors = useThemedColors();

    const _onPress_OK = () => {
        isVisible = false;
        dispatch(setErrorCodeAC(''));
        setErrorState('');
    }
    return (
        <Modal isVisible={isVisible} backdropColor='grey' style={styles.modal}>
            <View style={styles.errorTextContainer}>
                <Text style={styles.errorText}>{loc.t(tn.error)}</Text>
            </View>
            <View style={styles.container}>
                <TextInput
                    numberOfLines={4}
                    multiline
                    value={loc.t(errorList.error[errorState])}
                    editable={false}
                    style={styles.messageText} />
                <TouchableOpacity style={styles.buttonContainer} onPress={_onPress_OK}>
                    <Icon svg={Svgs.OkayButton} iconStyle={styles.iconStyle} />
                </TouchableOpacity>
            </View>

        </Modal>
    )
}

export default ErrorManager