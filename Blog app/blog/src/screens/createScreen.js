import React, { useContext, useState } from 'react';
import { StyleSheet } from 'react-native';
import { Context } from '../context/blogContext';
import BlogPostForm from '../component/BlogPostForm';
const CreateScreen = ({ navigation }) => {
    const { addBlogPosts } = useContext(Context);

    return (
        <BlogPostForm
            onButtonPress={(title, content) => {
                addBlogPosts(title, content, () => navigation.navigate('Index'))
            }}>
        </BlogPostForm>
    );
}


const styles = StyleSheet.create({});

export default CreateScreen;