import React from 'react';
import {Text, View} from 'react-native';
import { Metrics } from '../../../StylingConstants';
import {useLocalization, tn} from '../../Localization/index'
import { useThemedColors,cn } from '../../Theming';

const EmptyComponent = props => {
    const loc= useLocalization();
    const themedColors = useThemedColors();

    return(
    <View >
        <Text style={{
            color:themedColors[cn.modal.title],
            fontSize:Metrics.width*0.05,
            height:Metrics.width*0.2
        }}>{loc.t(tn.emptyList)}</Text>    
    </View>
    )
}
export default EmptyComponent