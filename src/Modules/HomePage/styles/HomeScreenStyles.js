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
        paddingHorizontal:Metrics.textMargin,
        color:Colors[cn.home.routinesText],
        marginBottom:Metrics.marginBottomTextinput,
        paddingVertical:Metrics.width * 0.0001,
        paddingHorizontal: 10,
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
     modal:{
        justifyContent: 'center',
        alignItems: 'center',
     },

     editbuttonTouchable:{
        width: Metrics.width * 0.06,
        aspectRatio: 1,
        height: undefined,
        justifyContent: 'center',
        alignSelf: 'center',  
        marginHorizontal:Metrics.marginHorizontal     
   
     }, 
     iconStyle:{

     },

     touchButton: {
      //   borderRadius: Metrics.borderRadiusStandard,
      //   borderColor: Colors[cn.home.routinesBorder],
      //   borderWidth: Metrics.borderWidth,
        paddingHorizontal: 10,
        flex:0.9
      
      
     },
     textContainer:{
        flexDirection:'row',
        borderRadius: Metrics.borderRadiusStandard,
        borderColor: Colors[cn.home.routinesBorder],
        borderWidth: Metrics.borderWidth,
        justifyContent: 'space-between',

     }

    })
