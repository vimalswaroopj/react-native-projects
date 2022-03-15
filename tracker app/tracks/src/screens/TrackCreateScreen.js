import '../_mockLocation';
import React, { useContext, useCallback } from 'react';
import { Text, StyleSheet } from 'react-native';
import { SafeAreaView, withNavigationFocus } from 'react-navigation';
import MapScreen from '../components/map';
import {Context as LocationContext} from '../context/locationContext';
import useLocation from '../hooks/useLocation';
import TrackForm from '../components/trackForm';
import {FontAwesome} from '@expo/vector-icons';
const TrackCreateScreen = ({isFocused}) => {
    const {state: {recording}, addLocation} = useContext(LocationContext);
    const callback = useCallback(location => {addLocation(location, recording)}, [recording])
    const [err] = useLocation(isFocused || recording, callback);
    // console.log(isFocused);
    return (
        <SafeAreaView forceInset={{ top: 'always' }}>
            <Text>TrackCreateScreen</Text>
            <MapScreen />
            {err ? <Text>Please enable location services</Text> : null}
            <TrackForm/>
        </SafeAreaView>
    )
};

TrackCreateScreen.navigationOptions = () => {
    return {
        title: 'Add Track',
        tabBarIcon: <FontAwesome name="plus" size={20}></FontAwesome>
    }
}

const styles = StyleSheet.create({});

export default withNavigationFocus(TrackCreateScreen)
