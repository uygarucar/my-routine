import React, { useEffect, useState } from 'react';
import Modal from 'react-native-modal';
import RoutinesListModal from '../../HomePage/Components/RoutinesListModal';

import { FlatList, SafeAreaView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { cn, useThemedColors } from '../../Theming';
import { Svgs } from '../../../StylingConstants';
import getStyles from '../styles/HomeScreenStyles';
import Icon from '../../../Components/Icon';
import { useDispatch } from 'react-redux';
import { changeMode } from '../../RoutinePages/Redux/RoutineRedux';
import Item from '../Components/Item';
import { subscribeToItemData } from '../../RoutinePages/API/Firebase';
import { useLocalization ,tn} from '../../Localization';




const HomeScreen = props => {
    const [itemList, setItemList] = useState(null);
    const [isModalVisible, setIsModalVisible] = useState(false);

    const themedColors = useThemedColors();
    const styles = getStyles(themedColors);
    const loc = useLocalization();

    const dispatch = useDispatch();

    const _onPress_Add = () => {

        const addMode = changeMode(true);
        dispatch(addMode);
        props.navigation.navigate('routineAdd-screen')
    }
    const _onPress_Edit = item => {
        const addMode = changeMode(false);
        dispatch(addMode);
        console.log("--------------------------------")
        props.navigation.navigate('routineAdd-screen', { itemKey:item.key })
    }
    useEffect(() => {
        // subscribe
        const off = subscribeToItemData(data => {
            setItemList(data);
        });

        // unsubscribe
        return () => {
            off();
        }
    }, []);

    const _render_Item = ({ item }) => {
        // item'e basıldığında id'sini gönderiyoruz
        return (
           <View style={{flex:1}}>
                <Item
                onPress={()=>_onPress_Edit(item)}
                item={item}
            >
            </Item>
           </View>
        )
    }
    const emptydata=itemList===null;
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.container}>
                {
                    emptydata ?
                    <Text>{loc.t(tn.emptyList)}</Text>
                    :
                    <FlatList
                    style={{ flexShrink: 1, flexGrow: 1 }}
                    data={itemList}
                    renderItem={_render_Item}
                    keyExtractor={item => item.key}

                />
               
                }
               
                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.addbuttonTouchable} onPress={_onPress_Add} >
                        <Icon svg={Svgs.Addbutton} iconStyle={{ color: themedColors[cn.header.background] }}></Icon>
                    </TouchableOpacity>
                </View>
            </View>

        </SafeAreaView>






    );

};


export default HomeScreen;