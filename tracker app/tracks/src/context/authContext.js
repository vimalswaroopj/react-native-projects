import createDataContext from './createDataContext';
import trackerApi from '../api/tracker';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { navigate } from '../navigationRef';
const authReducer = (state, action) => {
    switch (action.type) {
        case 'add_error':
            return { ...state, errorMessage: action.payload }
        case 'signin':
            return { errorMessage: '', token: action.payload.token }
        case 'clear_error_message':
            return { ...state, errorMessage: '' }
        case 'signout':
            return { token: null, errorMessage: '' }
        default:
            return state
    }
}

const tryLocalSignin = dispatch => async () => {
    const token = await AsyncStorage.getItem('token');
    dispatch({ type: 'signin', payload: { token } })
    if (token) {
        navigate('TrackList')
    } else {
        navigate('Signup')
    }
}

const signUp = (dispatch) => async ({ email, password }) => {
    console.log(email, password)
    try {
        const response = await trackerApi.post('/signup', { email, password });
        await AsyncStorage.setItem('token', response.data.token);
        dispatch({ type: 'signin', payload: { token: response.data.token } })
        navigate('TrackList')
    } catch (error) {
        console.log(error.response.data)
        dispatch({ type: 'add_error', payload: 'Something went wrong with sign up' })
    }
}


const signIn = (dispatch) => async ({ email, password }) => {
    console.log(email, password)
    try {
        const response = await trackerApi.post('/signin', { email, password });
        await AsyncStorage.setItem('token', response.data.token);
        dispatch({ type: 'signin', payload: { token: response.data.token } })
        navigate('TrackList')
    } catch (error) {
        console.log(error.response.data)
        dispatch({ type: 'add_error', payload: 'Something went wrong with sign in' })
    }
}

const clearErrorMessage = (dispatch) => () => {
    dispatch({ type: 'clear_error_message' })
}


const signOut = (dispatch) => async () => {
    await AsyncStorage.removeItem('token');
    dispatch({type: 'signout'});
    navigate('loginFlow')
}


export const { Provider, Context } = createDataContext(authReducer, { signIn, signUp, signOut, tryLocalSignin, clearErrorMessage }, { token: null })