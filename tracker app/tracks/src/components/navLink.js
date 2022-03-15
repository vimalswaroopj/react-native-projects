import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import Spacer from './spacer';
import { withNavigation } from 'react-navigation'
import { Text } from 'react-native-elements';
const NavLink = ({ navigation, text, routeName }) => {
    return (
        <TouchableOpacity onPress={() => {
            return navigation.navigate(routeName)
        }}>
            <Spacer>
                <Text style={styles.link}>{text}</Text>
            </Spacer>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    link: {
        color: 'blue'
    }
});

export default withNavigation(NavLink);