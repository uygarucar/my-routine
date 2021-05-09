import React, { useState } from 'react';
import { Text, SafeAreaView, TouchableOpacity, View } from 'react-native';
import getStyles from '../styles/HomeScreenStyles';
import RoutinesListModal from './RoutinesListModal';
import DummyData from './DummyData';
import Icon from '../../../Components/Icon';
import { Svgs } from '../../../StylingConstants';
import {deleteItem} from '../../RoutinePages/API/Firebase';

import { cn, useThemedColors } from '../../Theming';
import Modal from 'react-native-modal';

const Item = props => {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [editMode, setEditMode] = useState(false);


    const themedColors = useThemedColors();
    const styles = getStyles(themedColors);

    const _onPress_Edit_Mode = () => {
        setEditMode(true)
    }
    const _onPress_Edit = (itemKey) => {
        props.onPress(itemKey)
    }
    const _onPress_Delete = () => {
        // deleteItem(item.key);
    }

    const _onPress_RoutinesListModal = () => {
        setIsModalVisible(true)
    }

    const _onPress_ModalBackdrop = () => {
        setIsModalVisible(false)
    }
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.textContainer}>
                <TouchableOpacity
                    style={styles.touchButton}
                    onPress={_onPress_RoutinesListModal}
                    onLongPress={_onPress_Edit_Mode}
                >
                    <Text style={styles.inputText}>{DummyData[0].routineName}</Text>
                </TouchableOpacity>

                {
                    editMode ?
                    <>
                        <TouchableOpacity style={styles.iconTouchable}
                            onPress={_onPress_Edit}>
                            <View style={styles.editbuttonView}>
                                <Icon svg={Svgs.Editbutton} iconStyle={{ color: themedColors[cn.header.background] }}></Icon>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.iconTouchable}
                            onPress={_onPress_Delete}>
                            <View style={styles.editbuttonView}>
                                <Icon svg={Svgs.Deletebutton} iconStyle={{ color: themedColors[cn.home.trashiconColor] }}></Icon>
                            </View>
                        </TouchableOpacity>
                        </>
                        :
                        null}
            </View>
            <Modal
                isVisible={isModalVisible}
                // arkaplana tıklayınca fonksiyonu
                onBackdropPress={_onPress_ModalBackdrop}
                style={styles.modal}
                // açılış animasyonu
                animationIn="bounceIn"
                // kapanış animasyonu
                animationOut="bounceOut"
                // açılış animasyon süresi
                animationInTiming={300}
                // kapanış animasyon süresi
                animationOutTiming={600}
                // açılış arkaplan kararma süresü
                backdropTransitionInTiming={3000}
                // arkaplan rengi
                backdropColor={'black'}
                // arkaplan opaklık
                backdropOpacity={0.5}
            >
                <RoutinesListModal />
            </Modal>
        </SafeAreaView>
    );
};

export default Item;
