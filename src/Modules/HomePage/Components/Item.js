import React, { useState } from 'react';
import { Text, SafeAreaView, TouchableOpacity, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import getStyles from '../styles/HomeScreenStyles';
import RoutinesListModal from './RoutinesListModal';
import DummyData from './DummyData';
import Icon from '../../../Components/Icon';
import { Svgs } from '../../../StylingConstants';

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
    const _onPress_Edit = () => {
        props.onPress()
    }
    const _onPress_Delete = () => {
        props.onPress()
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

                        {/* çöp ikonu aşaya gelicek, ikon rengi colors a eklenecek gri */}
                        <TouchableOpacity style={styles.iconTouchable}
                            onPress={_onPress_Delete}>
                            <View style={styles.editbuttonView}>
                                <Icon svg={Svgs.Editbutton} iconStyle={{ color: themedColors[cn.home.routinesText] }}></Icon>
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
