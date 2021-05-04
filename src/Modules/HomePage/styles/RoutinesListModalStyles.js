import { StyleSheet } from 'react-native';
import {Colors, Fonts, Metrics} from '../../../StylingConstants/';
import { cn } from '../../Theming';

export default Colors => StyleSheet.create({
    container: {
        width: Metrics.width * 0.8,
        minHeight: Metrics.height * 0.25,
        borderRadius: Metrics.borderRadiusStandard,
        backgroundColor: 'white',
        padding: Metrics.width * 0.05,
        //Widthe göre yap
        paddingTop: 9,
        justifyContent: 'space-between',
        flexDirection:'column',
        alignItems: 'center',
        borderColor: Colors[cn.modal.modalBorder]
    },
    titleContainer: {
        marginBottom: Metrics.marginVertical * 0.3,
    },
    titleText:{
        color: Colors[cn.modal.title],
        fontSize: Fonts.size(15) 
    },
    itemsContainer:{
        borderWidth: Metrics.borderWidth,
        borderColor: Colors[cn.modal.routinesBorder],
        minHeight: Metrics.height * 0.2,
        minWidth: Metrics.width * 0.6,
        borderRadius: Metrics.borderRadiusStandard * 0.5,
        
    }
    /*,
    cityNameText: {
        fontFamily: Fonts.Families.regular,
        fontSize: Fonts.Sizes.eighteen,
        color: 'black',
        paddingLeft: Metrics.width * 0.02
    },
    
    separator: {
        height: StyleSheet.hairlineWidth,
        width: '100%',
        backgroundColor: Colors.lightGrey,
        marginVertical: Metrics.width * 0.02,
    },
    */
});