import React, { useState } from 'react';
import { Text, SafeAreaView, TouchableOpacity, View } from 'react-native';
import getStyles from '../styles/HomeScreenStyles';
import DummyData from './DummyData';
import Icon from '../../../Components/Icon';
import { Svgs } from '../../../StylingConstants';
import { deleteItem } from '../../RoutinePages/API/Firebase';

import { cn, useThemedColors } from '../../Theming';
import Modal from 'react-native-modal';
import RoutinesListModal from './RoutinesListModal';

const Item = props => {

    const [isModalVisible, setIsModalVisible] = useState(false);
    const [editMode, setEditMode] = useState(false);


    const themedColors = useThemedColors();
    const styles = getStyles(themedColors);

    const _onPress_Edit_Mode = () => {
        setEditMode(true)
    }
    const _onPress_Edit = (item) => {
        props.onPress(item.key)
    }
    const _onPress_Delete = (item) => {
        deleteItem(item.key);
    }

    const _onPress_RoutinesListModal = () => {
        setIsModalVisible(true)
    }

    const _onPress_ModalBackdrop = () => {
        setIsModalVisible(false)
    }
    return (
        <View style={styles.textContainer}>
            <TouchableOpacity
                style={styles.touchButton}
                onPress={_onPress_RoutinesListModal}
                onLongPress={_onPress_Edit_Mode}
            >
                <Text style={styles.inputText}>{props.item.title}</Text>
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
                            onPress={() => _onPress_Delete(props.item)}>
                            <View style={styles.editbuttonView}>
                                <Icon svg={Svgs.Deletebutton} iconStyle={{ color: themedColors[cn.home.trashiconColor] }}></Icon>
                            </View>
                        </TouchableOpacity>
                    </>
                    :
                    null}
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
                <RoutinesListModal/>
            </Modal>
        </View>

    );
};

export default Item;
