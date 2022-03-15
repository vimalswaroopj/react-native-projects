import React, { useContext } from 'react';
import { View, StyleSheet } from 'react-native';
import { NavigationEvents } from 'react-navigation';
import { Context as AuthContext } from '../context/authContext';
import AuthForm from '../components/authForm';
import NavLink from '../components/navLink';

const SigninScreen = ({ navigation }) => {
    const { state, signIn, clearErrorMessage } = useContext(AuthContext);
    return (
        <View style={styles.container}>
            <NavigationEvents
                onWillFocus={clearErrorMessage}
            />
            <AuthForm
                headerText="Sign In to your Account"
                errorMessage={state.errorMessage}
                submitButtonText="Sign In"
                onSubmit={signIn}
            >
            </AuthForm>
            <NavLink text={"Dont have an account ? Go back to Sign Up"} routeName={"Signup"}></NavLink>

        </View>
    )
}

SigninScreen.navigationOptions = () => {
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

export default SigninScreen