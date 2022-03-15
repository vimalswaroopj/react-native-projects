import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Button, StyleSheet } from 'react-native';

const BlogPostForm = ({ onButtonPress, initialValues }) => {
    const [title, setTitle] = useState(initialValues.title);
    const [content, setContent] = useState(initialValues.content);
    return (
        <View>
            <Text style={styles.label}>Enter Title:</Text>
            <TextInput style={styles.input} value={title} onChangeText={(text) => setTitle(text)}></TextInput>

            <Text style={styles.label}>Enter Content:</Text>
            <TextInput style={styles.input} value={content} onChangeText={(text) => setContent(text)}></TextInput>
            <Button title={'Save Post'} onPress={() => onButtonPress(title, content)}></Button>
        </View>
    )
}

BlogPostForm.defaultProps = {
    initialValues: {
        title: '',
        content: ''
    }
};

const styles = StyleSheet.create({
    label: {
        fontSize: 20,
        marginBottom: 5
    },
    input: {
        fontSize: 20,
        borderWidth: 1,
        padding: 5,
        margin: 5
    }
});

export default BlogPostForm;