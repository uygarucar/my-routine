import React from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';
import Modal from 'react-native-modal';
import { useSelector } from 'react-redux';
import { isLoadingSelector } from './LoadingRedux';
import LottieView from 'lottie-react-native';
import { Metrics } from '../../StylingConstants';

const styles = StyleSheet.create({
    modal: {

    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'transparent'
    }
})

const LoadingManager = props => {

    const isLoading = useSelector(isLoadingSelector);

    return (
        <Modal
            isVisible={isLoading}
            style={styles.modal}
            animationIn="bounceIn"
            // kapanış animasyonu
            animationOut="bounceOut"
        >
            <View style={styles.container}>
                {/* <ActivityIndicator color="white" size="large" /> */}
                <LottieView
                    style={
                        {
                            width: Metrics.width * 1
                        }
                    }

                    source={require('./animation.json')} autoPlay loop />

            </View>
        </Modal>
    )
}

export default LoadingManager;