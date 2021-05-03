import React from 'react';
// import { connect } from 'react-redux';
import AuthScreenUI from './AuthScreenUI';
// import { signIn, signUp } from '../../Redux/AuthRedux';
import { Alert, View, Text } from 'react-native';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { signInRequest, signUpRequest, setUserAC } from '../Redux/UserRedux';
import { isValidEmail } from '../Utils/AuthValidations';

const AuthScreen = props => {

    const [isLogin, setIsLogin] = useState(true);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');
    const [name, setName] = useState('');

    const dispatch = useDispatch();

    const _onPress_SignUp = () => {
        console.log("Username", name);
        console.log("Email", email);
        console.log("Password", password);

        /*
         if (email.length === 0 || password.length === 0 || name.length === 0) {
             Alert.alert('Uyarı', 'Lütfen tüm alanları doldurun.');
         }
         else if (!isValidEmail(email)) {
             Alert.alert('Uyarı', 'Lütfen e-posta adresinizi kontrol edin.');
         }
         else {
             dispatch(signUpRequest(email, password, name));
         }
         */
    }

    const _onPress_SignIn = () => {

        if (password == 1234 & email == 'admin') {
            dispatch(setUserAC(true))
        }
        console.log("Email", email);
        console.log("Password", password);
        /*
        if (email.length === 0 || password.length === 0) {
            Alert.alert('Uyarı', 'Lütfen tüm alanları doldurun.');
        }
        else {
            dispatch(signInRequest(email, password))
        }
        */
    }

    return (
        <>
            <AuthScreenUI
                emailValue={email}
                passwordValue={password}
                passwordConfirmValue={passwordConfirm}
                nameValue={name}
                onChangeText_Email={setEmail}
                onChangeText_Password={setPassword}
                onChangeText_PasswordConfirm={setPasswordConfirm}
                onChangeText_Name={setName}
                onPress_SignUp={_onPress_SignUp}
                onPress_SignIn={_onPress_SignIn}
            />


        </>
    );

}

export default AuthScreen;
