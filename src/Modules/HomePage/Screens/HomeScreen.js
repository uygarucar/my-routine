import React, { useEffect, useState } from 'react';
import { FlatList, SafeAreaView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { cn, useThemedColors } from '../../Theming';
import { Svgs } from '../../../StylingConstants';
import getStyles from '../styles/HomeScreenStyles';
import Icon from '../../../Components/Icon';
import { useDispatch } from 'react-redux';
import { changeMode } from '../../RoutinePages/Redux/RoutineRedux';
import Item from '../Components/Item';
import EmptyComponent from '../Components/EmptyComponent'
import { subscribeToItemData } from '../../RoutinePages/API/Firebase';
import { setIsLoadingAC } from '../../Loading/LoadingRedux';

import LottieView from 'lottie-react-native';



const HomeScreen = props => {
    const [itemList, setItemList] = useState([]); ///------------------------------------------------------------------------
    const themedColors = useThemedColors();
    const styles = getStyles(themedColors);
    const [editMode, setEditMode] = useState(false);

    const dispatch = useDispatch();

    const _onPress_Add = () => {

        const addMode = changeMode(true);
        dispatch(addMode);
        props.navigation.navigate('routineAdd-screen')
    }
    const _onPress_Edit = item => {
        dispatch(setIsLoadingAC(true)); //loading modalı açılır
        const addMode = changeMode(false);
        dispatch(addMode);
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
    const onlongPress=(val)=>{
        setEditMode(val)
    }

    const _render_Item = ({ item }) => {
        // item'e basıldığında id'sini gönderiyoruz
        return (
           <TouchableOpacity style={{flex:1}}           
           >
                <Item
                onPress={()=>_onPress_Edit(item)}
                item={item}
                onlongPress={(val)=>onlongPress(val)}
                editMode={editMode}
            >
            </Item>
           </TouchableOpacity>
        )
    }
    
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.container}>
                    <FlatList
                    style={{ flexShrink: 1, flexGrow: 1 }}
                    data={itemList}
                    renderItem={_render_Item}
                    keyExtractor={item => item.key}
                    ListEmptyComponent = {EmptyComponent}


                />
                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.addbuttonTouchable} onPress={_onPress_Add} >
                        <Icon svg={Svgs.Addbutton} iconStyle={{ color: themedColors[cn.header.background] }}></Icon>
                    </TouchableOpacity>
                </View>
            </View>
            <LottieView source={require('./animation.json')} autoPlay loop />
        </SafeAreaView>






    );

};


export default HomeScreen;