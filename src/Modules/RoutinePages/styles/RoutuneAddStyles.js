import { StyleSheet } from 'react-native';
import { cn } from '../../Theming';
import { Metrics, Fonts } from '../../../StylingConstants';




export default Colors => StyleSheet.create({



    container: {
        flex: 1,
        backgroundColor: Colors[cn.settings.background],
        padding: Metrics.marginHorizontal,

    },
    RoutineContainer: {
        flexGrow: 1,
        // flexShrink:1,

    },
    // textInput:{
    //     fontSize: Fonts.size(16),
    //     fontFamily: Fonts.type.regular,
    //     borderRadius: Metrics.borderRadiusStandard,
    //     paddingHorizontal:Metrics.textMargin,
    //     borderColor: Colors[cn.home.routinesBorder],
    //     borderWidth: Metrics.borderWidth,
    //     color:Colors[cn.home.routinesText],
    //     marginBottom:Metrics.marginBottomTextinput,
    //     // alignItems: "center",

    // },

    ViewInput: {
        fontSize: Fonts.size(16),
        fontFamily: Fonts.type.regular,
        borderRadius: Metrics.borderRadiusStandard,
        borderColor: Colors[cn.home.routinesBorder],
        borderWidth: Metrics.borderWidth,
        color: Colors[cn.home.routinesText],
        marginBottom: Metrics.marginBottomTextinput,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: "space-between",


    },
    textInput: {
        fontSize: Fonts.size(16),
        fontFamily: Fonts.type.regular,
        borderRadius: Metrics.borderRadiusStandard,
        paddingHorizontal: Metrics.textMargin,
        color: Colors[cn.home.routinesText],
        // alignItems: "center",
        flexGrow: 1,//
    },
    datetextInput: {
        fontSize: Fonts.size(16),
        fontFamily: Fonts.type.regular,
        borderRadius: Metrics.borderRadiusStandard,
        paddingHorizontal: Metrics.textMargin,
        // alignItems: "center",
        height: Metrics.width * 0.13,
        flexGrow: 0.1,
        paddingRight: 0,
        textAlignVertical:'center',
    },


    RoutineInput: {
        minHeight: Metrics.width * 0.5,
        textAlignVertical: "top",
        maxHeight: Metrics.width * 0.8,
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
    },
    today: {
        width: Metrics.width * 0.15,
        marginRight: Metrics.width * 0.015,

    },
    todayText: {
        color: Colors[cn.auth.background],
        fontWeight: 'bold',

    },
    calendar: {
        flexDirection: 'row',
        width: Metrics.width * 0.72,
        
    }
});
