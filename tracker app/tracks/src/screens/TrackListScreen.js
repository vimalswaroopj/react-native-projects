import React, { useContext } from 'react';
import { Text, StyleSheet, Button, FlatList, TouchableOpacity } from 'react-native';
import { ListItem } from 'react-native-elements'
import { SafeAreaView } from 'react-navigation';
import { NavigationEvents } from 'react-navigation';
import { Context as TrackContext } from '../context/trackContext';
const TrackListScreen = ({ navigation }) => {
    const { state, fetchTracks } = useContext(TrackContext);
    return (
        <>
        <NavigationEvents onWillFocus={fetchTracks} />
        <SafeAreaView forceInset={{ top: 'always' }}>
            <FlatList
                data={state}
                keyExtractor={(item) => item._id}
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity onPress={() => {
                            navigation.navigate('TrackDetail', {_id: item._id})
                        }}>
                            <ListItem>
                                <ListItem.Content>
                                    <ListItem.Title>{item.name}</ListItem.Title>
                                </ListItem.Content>
                                <ListItem.Chevron />
                            </ListItem>
                        </TouchableOpacity>
                    );
                }}
            />
        </SafeAreaView>
        </>
    )
}

TrackListScreen.navigationOptions = () => {
    return {
        title: 'Tracks'
    }
}

const styles = StyleSheet.create({});

export default TrackListScreen