import React, {useContext} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {Context} from '../context/blogContext';
import {EvilIcons} from '@expo/vector-icons';
const ShowScreen = ({navigation}) => {
    console.log(navigation.getParam('id'));
    const {state} = useContext(Context);
    const blogPost = state.find((blogPost) => blogPost.id === navigation.getParam('id'))
    return (
        <View>
            <Text>{blogPost.title}</Text>
            <Text>{blogPost.content}</Text>
        </View>
    );
}

ShowScreen.navigationOptions = ({ navigation }) => {
    return {
        headerRight: () => <TouchableOpacity onPress={() => navigation.navigate('Edit', {id: navigation.getParam('id')})}>
            <EvilIcons name="pencil" size={35}></EvilIcons>
        </TouchableOpacity>
    }
}

export default ShowScreen;