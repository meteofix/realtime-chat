import React, {useContext} from 'react';
import {Context} from "../index";
import {StyledFirebaseAuth} from "react-firebaseui";
//import * as firebaseui from "firebaseui";
// import 'firebaseui/dist/firebaseui.css'
import firebase from "firebase";
// import 'firebase/compat/auth'

//import { AuthCredential, GoogleAuthProvider, PhoneAuthProvider, EmailAuthProvider, GithubAuthProvider, SAMLAuthProvider, OAuthProvider, RecaptchaVerifier, Auth } from 'firebase/auth'
const LoginWithFirebaseUi = () => {
    const {app, auth} = useContext(Context)
    // const ui = new firebaseui.auth.AuthUI(auth);
    //
    // ui.start('#firebaseui-auth-container', {
    //     signInOptions: [
    //         firebase.auth.EmailAuthProvider.PROVIDER_ID
    //     ],
    //     // Other config options...
    // });
    const uiConfig = {
        // Popup signin flow rather than redirect flow.
        signInFlow: 'popup',
        // Redirect to /signedIn after sign in is successful. Alternatively you can provide a callbacks.signInSuccess function.
        //signInSuccessUrl: '/signedIn',
        // We will display Google and Facebook as auth providers.
        signInOptions: [
            firebase.auth.EmailAuthProvider.PROVIDER_ID,
            firebase.auth.PhoneAuthProvider.PROVIDER_ID,
            firebase.auth.GoogleAuthProvider.PROVIDER_ID,
            firebase.auth.GithubAuthProvider.PROVIDER_ID,
        ],
    };
    return (
        <div>
            <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={auth} />
        </div>
    );
};

export default LoginWithFirebaseUi;