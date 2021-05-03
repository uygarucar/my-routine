import { StyleSheet } from 'react-native';
import { cn } from '../../Theming';
import { Metrics, Fonts } from '../../../StylingConstants';

export default Colors => StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors[cn.settings.background],
        padding: Metrics.marginHorizontal,
    },

    inputText: {
        fontSize: Fonts.size(16),
        fontFamily: Fonts.type.regular,
        marginHorizontal: 10,
        marginVertical: 10,
        borderRadius: 4,
        alignItems: "center",
        paddingHorizontal: 20,
        borderColor: 'black',
        borderWidth: 1,


    },

});
