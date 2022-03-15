import React, { useContext } from 'react';
import { StyleSheet } from 'react-native';
import { Context } from '../context/blogContext';
import BlogPostForm from '../component/BlogPostForm';
const EditScreen = ({ navigation }) => {
    const id = navigation.getParam('id');
    const { state, editBlogPosts } = useContext(Context);
    const blogPost = state.find((blogPost) => blogPost.id === id)

    return <BlogPostForm 
        initialValues={{ title: blogPost.title, content: blogPost.content, id: navigation.getParam('id')}}
        onButtonPress={(title, content)=> {
            editBlogPosts(id, title, content, () => {
                navigation.pop()
            })
        }}
    />
}

const styles = StyleSheet.create({});

export default EditScreen;