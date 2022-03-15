import React, { useContext, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { Context } from '../context/blogContext'
import { Feather } from '@expo/vector-icons'
import { TouchableOpacity } from 'react-native-gesture-handler';

const IndexScreen = ({ navigation }) => {
    const { state, deleteBlogPosts, getBlogPosts } = useContext(Context)
    useEffect(() => {
        getBlogPosts();
        const listener = navigation.addListener('didFocus', () => {
            getBlogPosts()
        });
        return () => {
            listener.remove();
        }
    }, []);
    return <View>
        <FlatList
            data={state}
            keyExtractor={(data) => data.title}
            renderItem={({ item }) => {
                return (
                    <TouchableOpacity onPress={() => navigation.navigate('Show', { id: item.id })
                    }>
                        <View style={styles.row}>
                            <Text style={styles.title}>{item.title} - {item.id}</Text>
                            <TouchableOpacity onPress={() =>
                                deleteBlogPosts(item.id)
                            }>
                                <Feather style={styles.icon} name="trash"></Feather>
                            </TouchableOpacity>
                        </View>
                    </TouchableOpacity>
                )
            }}
        />
    </View>
}

IndexScreen.navigationOptions = ({ navigation }) => {
    return {
        headerRight: () => <TouchableOpacity onPress={() => navigation.navigate('Create')}>
            <Feather name="plus" size={30} style={styles.addIcon}></Feather>
        </TouchableOpacity>
    }
}

const styles = StyleSheet.create({
    row: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 20,
        borderTopWidth: 1,
        borderColor: 'grey'
    },
    title: {
        fontSize: 18
    },
    icon: {
        fontSize: 24
    },
    addIcon: {
        marginRight: 8
    }
});

export default IndexScreen