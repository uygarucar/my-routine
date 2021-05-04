import { StyleSheet } from 'react-native';
import { cn } from '../../Theming';
 import {  Metrics,Fonts } from '../../../StylingConstants';

export default Colors=> StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors[cn.settings.background],
        padding: Metrics.marginHorizontal,
            
    },
    RoutineContainer: {
        flexGrow: 1,
     
    },
    textInput:{
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
    RoutineInput:{
        fontSize: Fonts.size(16),
        fontFamily: Fonts.type.regular,
        borderRadius: Metrics.borderRadiusStandard,
        paddingHorizontal:Metrics.textMargin,
        textAlignVertical:"top",
        borderColor: Colors[cn.home.routinesBorder],
        borderWidth: Metrics.borderWidth,
        color:Colors[cn.home.routinesText],
        marginBottom:Metrics.marginBottomTextinput,
        minHeight:Metrics.width*0.5,

    },
    addTouchable: {
        height: Metrics.boxNormalHeight,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: Metrics.borderRadiusStandard,
        borderWidth: 2,
        borderColor: Colors[cn.settings.signOutButtonBorder],
        backgroundColor: Colors[cn.settings.signOutButtonBackground],

    },
    addText: {
        fontSize: Fonts.size(18),
        color: Colors[cn.settings.signOutButtonText],
    }
});
