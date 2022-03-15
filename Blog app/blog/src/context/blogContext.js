import createDataContext from './createDataContext';
import jsonServer from '../api/jsonServer';
const blogReducer = (state, action) => {
    switch (action.type) {
        case 'get_blogpost':
            return action.payload
        case 'edit_blogpost':
            return state.map(blogPost => {
                return blogPost.id === action.payload.id ? action.payload : blogPost
                // console.log(action.payload.id, action.payload.title, action.payload.content)
                // return blogPost
            });
        // return state;
        case 'add_blogpost':
            return [...state, {
                id: Math.floor(Math.random() * 9999),
                title: action.payload.title,
                content: action.payload.content
            }];
        case 'delete_blogpost':
            return state.filter((blogPost) => blogPost.id !== action.payload)
        default:
            return state;
    }
}

getBlogPosts = disptach => {
    return async () => {
        const response = await jsonServer.get('blogposts');
        disptach({type: 'get_blogpost', payload: response.data})
    }
}

addBlogPosts = dispatch => {
    return (title, content, callback) => {
        // dispatch({ type: 'add_blogpost', payload: { title, content } });
        jsonServer.post('/blogposts', {title, content})
        if (callback) {
            callback();
        }
    }
}

deleteBlogPosts = dispatch => {
    return async (id) => {
        await jsonServer.delete(`/blogposts/${id}`)
        dispatch({ type: 'delete_blogpost', payload: id })
    }
}

editBlogPosts = dispatch => {
    return async (id, title, content, callback) => {
        await jsonServer.put(`/blogposts/${id}`, {title, content})
        // dispatch({ type: 'edit_blogpost', payload: { id, title, content } });
        if (callback) {
            callback();
        }
    }
}

export const { Context, Provider } = createDataContext(blogReducer, { addBlogPosts, deleteBlogPosts, editBlogPosts, getBlogPosts }, []);