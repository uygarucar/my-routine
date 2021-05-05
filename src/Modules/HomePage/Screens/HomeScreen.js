import React, { useState } from 'react';
import { SafeAreaView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { cn, useDispatchChangeTheme, useTheme, useThemedColors, useThemeOptions } from '../../Theming';
import { useLocalization, tn, useLocaleOptions, useLocale, useDispatchChangeLocale } from '../../Localization';
import { Svgs } from '../../../StylingConstants';
import getStyles from '../styles/HomeScreenStyles';
import Modal from 'react-native-modal';
import Icon from '../../../Components/Icon';
import RoutinesListModal from '../Components/RoutinesListModal'
import { useDispatch } from 'react-redux';
import { changeMode } from '../../RoutinePages/Redux/RoutineRedux';






const HomeScreen = props => {

    const currentTheme = useTheme();
    const themedColors = useThemedColors();
    const styles = getStyles(themedColors);
    const themeOptions = useThemeOptions();
    const changeTheme = useDispatchChangeTheme();

    const currentLocale = useLocale();
    const loc = useLocalization();
    const localeOptions = useLocaleOptions();
    const changeLocale = useDispatchChangeLocale();
    const [isModalVisible, setIsModalVisible] = useState(false)


    const dispatch=useDispatch();

    const _onPress_Edit = () => {
        let changemode=changeMode(false);

        dispatch(changemode);
        props.navigation.navigate('routineAdd-screen')
    }

    const _onPress_Add = () => {

   const changemode=changeMode(true);

        dispatch(changemode); 
        props.navigation.navigate('routineAdd-screen')
       }

    const _onPress_RoutinesListModal  = () => {
        setIsModalVisible(true)
    }

    const _onPress_ModalBackdrop = () => {
        setIsModalVisible(false)
    }

    return (
        <View style={styles.container}>
            <SafeAreaView style={{ flex: 1 }}>
                <View style={styles.textContainer}>
                    <TouchableOpacity style={styles.touchButton} onPress={_onPress_RoutinesListModal}>
                        <Text style={styles.inputText}></Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.touchButton} onPress={_onPress_Edit}>
                        <Text style={styles.inputText}>Edit</Text>
                    </TouchableOpacity>
                    
                    
                </View>

                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.addbuttonTouchable} onPress={_onPress_Add} >
                        <Icon svg={Svgs.Addbutton} iconStyle={{ color: themedColors[cn.header.background]}}></Icon>
                    </TouchableOpacity>
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
        </View>







    );

};


export default HomeScreen;