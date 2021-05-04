import { StyleSheet } from 'react-native';
import { cn } from '../../Theming';
import { Metrics, Fonts } from '../../../StylingConstants';

export default Colors => StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors[cn.settings.background],
        padding: Metrics.marginHorizontal,
    },

    inputText:{
        fontSize: Fonts.size(16),
        fontFamily: Fonts.type.regular,
        borderRadius: Metrics.borderRadiusStandard,
        paddingHorizontal:Metrics.textMargin,
        alignItems: "center",
        borderColor: Colors[cn.home.routinesBorder],
        borderWidth: Metrics.borderWidth,
        color:Colors[cn.home.routinesText],
        marginBottom:Metrics.marginBottomTextinput,
    },
    buttonContainer:{
        width:20,
        /// burası ikon ile ilgili yer 
    }

});
