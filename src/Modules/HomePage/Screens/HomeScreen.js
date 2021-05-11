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
import EmptyComponent from '../Components/EmptyComponent'
import { subscribeToItemData } from '../../RoutinePages/API/Firebase';
import { useLocalization ,tn} from '../../Localization';
import { setIsLoadingAC } from '../../Loading/LoadingRedux';




const HomeScreen = props => {
    const [itemList, setItemList] = useState([]); ///------------------------------------------------------------------------
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
        dispatch(setIsLoadingAC(true)); //loading modalı açılır
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
           <TouchableOpacity style={{flex:1}}           
           >
                <Item
                onPress={()=>_onPress_Edit(item)}
                item={item}
            >
            </Item>
           </TouchableOpacity>
        )
    }
    
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.container}>
                    <FlatList
                    ListEmptyComponent = {EmptyComponent}
                    style={{ flexShrink: 1, flexGrow: 1 }}
                    data={itemList}
                    renderItem={_render_Item}
                    keyExtractor={item => item.key}
                    
                />
                 {/* <Modal
                isVisible={isModalVisible}
                // arkaplana tıklayınca fonksiyonu
                onBackdropPress={_onPress_ModalBackdrop}
                style={styles.modal}
                // açılış animasyonu
                animationIn="bounceIn"
                // kapanış animasyonu
                animationOut="bounceOut"
                // açılış animasyon süresi
                animationInTiming={100}
                // kapanış animasyon süresi
                animationOutTiming={300}
                // açılış arkaplan kararma süresü
                backdropTransitionInTiming={1500}
                // arkaplan rengi
                backdropColor={'black'}
                // arkaplan opaklık
                backdropOpacity={0.5}
            >
                <RoutinesListModal/>
            </Modal>
                */}
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