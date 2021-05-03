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
        flex:0.08,
        fontSize: Fonts.size(16),
        fontFamily: Fonts.type.regular,
        marginHorizontal: 10,
        marginVertical: 10,
        borderRadius: 4,
        backgroundColor: 'lightgrey',
        alignItems: "center",
        paddingHorizontal: 20,
        
    },
    
});
