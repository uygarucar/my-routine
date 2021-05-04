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
        paddingVertical:10,
        marginTop:10,
    },

    buttonContainer:{
        flex:1,
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
     
     },

     addbuttonTouchable:{
        width: Metrics.width * 0.20,
        height: undefined,
        aspectRatio: 1,
        padding: Metrics.width * 0.02,
       
     },

 })
