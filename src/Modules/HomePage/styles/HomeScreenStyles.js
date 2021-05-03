import { StyleSheet } from 'react-native';
import { cn } from '../../Theming';
import {  Metrics,Fonts } from '../../../StylingConstants';

export default Colors => StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: Colors[cn.settings.background],
            padding: Metrics.marginHorizontal,
    },

    routineText: {
        fontFamily: Fonts.type.regular,
        padding: 5,
    },
    
});
