import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

import BorderedBox from '../../../Components/BorderedBox';
import { useThemedStyles, useThemedValues, cn, useThemedColors } from '../../Theming';

import getStyles from '../styles/AuthButtonStyles';

const AuthButton = (props) => {
    const styles = useThemedStyles(getStyles);
    const colors = useThemedColors(getStyles);

    return (
        <BorderedBox
            borderColor={colors[cn.auth.inputBorder]}
            backgroundColor={colors[cn.auth.coloredButtonBackground]}>
            <TouchableOpacity
                style={styles.touchable}
                onPress={props.onPress}
                disabled={props.disabled}>
                <Text style={styles.text}>{props.text.toLocaleUpperCase('tr')}</Text>
            </TouchableOpacity>
        </BorderedBox>
    );
};

export default AuthButton;
