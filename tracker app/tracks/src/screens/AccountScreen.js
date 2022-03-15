import React, { useContext, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';
import Spacer from '../components/spacer';
import { SafeAreaView } from 'react-navigation';
import { Context as AuthContext } from '../context/authContext';
import {FontAwesome} from '@expo/vector-icons';
const AccountScreen = () => {
    const { signOut } = useContext(AuthContext)
    return (
        <SafeAreaView forceInset={{ top: 'always' }}>
            <Text>Account Screen</Text>
            <Spacer>
                <Button title="Sign Out" onPress={signOut} />
            </Spacer>
        </SafeAreaView>
    )
}

AccountScreen.navigationOptions = () => {
    return {
        title: 'Account',
        tabBarIcon: <FontAwesome name="gear" size={20}/>
    }
}


const styles = StyleSheet.create({});

export default AccountScreen
