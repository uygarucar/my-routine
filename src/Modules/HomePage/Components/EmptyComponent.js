import React from 'react';
import {Text, View} from 'react-native';
import {useLocalization, tn} from '../../Localization/index'

const EmptyComponent = props => {
    const loc= useLocalization();

    return(
    <View>
        <Text>{loc.t(tn.emptyList)}</Text>    
    </View>
    )
}
export default EmptyComponent