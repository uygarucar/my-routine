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
      paddingHorizontal: Metrics.textMargin,
      color: Colors[cn.home.routinesText],
      marginBottom: Metrics.marginBottomTextinput,
      paddingVertical: Metrics.width * 0.0001,
      paddingHorizontal: 10,
      marginTop: 10,
   },

   buttonContainer: {
      justifyContent: 'flex-end',
      alignItems: 'flex-end',
      marginTop: Metrics.width * 0.03,
   },

   addbuttonTouchable: {
      width: Metrics.width * 0.20,
      height: undefined,
      aspectRatio: 1,
      padding: Metrics.width * 0.02,
   },
   modal: {
      justifyContent: 'center',
      alignItems: 'center',
   },

   editbuttonView: {
      width: Metrics.width * 0.06,
      aspectRatio: 1,
      height: undefined,
      justifyContent: 'center',
      alignSelf: 'center',
      marginHorizontal: Metrics.marginHorizontal,

   },
   iconTouchable: {
      flex: 0.1,
      justifyContent: 'center',
      paddingHorizontal: Metrics.width * 0.02,
   },

   touchButton: {
      //   borderRadius: Metrics.borderRadiusStandard,
      //   borderColor: Colors[cn.home.routinesBorder],
      //   borderWidth: Metrics.borderWidth,
      paddingHorizontal: 10,
      flex: 0.9,


   },
   textContainer: {
      flexDirection: 'row',
      borderRadius: Metrics.borderRadiusStandard,
      borderColor: Colors[cn.home.routinesBorder],
      borderWidth: Metrics.borderWidth,
      justifyContent: 'space-between',
      marginBottom: Metrics.marginBottomTextinput,
   },
   searchIcon: {
      color: Colors[cn.searchBar.icon]
   },
   searchBarInputContainer:{
      backgroundColor: Colors[cn.searchBar.inputContainerBackground],
      //borderColor: Colors[cn.searchBar.inputContainerBorderColor],
      //borderWidth: 1
   },
   searchBarContainer:{
      backgroundColor: Colors[cn.searchBar.containerBackgroundColor],
      //borderColor: Colors[cn.searchBar.containerBorderColor],
      //borderWidth: StyleSheet.hairlineWidth,
      marginTop: 0,
      marginBottom: 1,
      marginHorizontal: -4, 
   },
   leftIconContainer: {
      backgroundColor: Colors[cn.searchBar.leftIconContainer]
   },
   
   

})
