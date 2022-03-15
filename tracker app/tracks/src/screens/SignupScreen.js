import React, { useContext, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import { NavigationEvents } from 'react-navigation';
import { Context as AuthContext } from '../context/authContext';
import AuthForm from '../components/authForm';
import NavLink from '../components/navLink';
const SignupScreen = ({ navigation }) => {
    const { state, signUp, clearErrorMessage, tryLocalSignin } = useContext(AuthContext);
    useEffect(() => {
        tryLocalSignin();
    }, [])
    return (
        <View style={styles.container}>
            <NavigationEvents
                onWillFocus={clearErrorMessage}
            />
            <AuthForm
                headerText="Sign Up for Tracker"
                errorMessage={state.errorMessage}
                submitButtonText="Sign Up"
                onSubmit={signUp}
            >
            </AuthForm>
            <NavLink text={"Already have an account ? Sign In insted"} routeName={"Signin"}></NavLink>

        </View>
    )
}

SignupScreen.navigationOptions = () => {
    return {
        header: null
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        marginBottom: 200
    },

    link: {
        color: 'blue'
    }
});

export default SignupScreen