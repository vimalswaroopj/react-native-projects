import {useEffect, useState} from 'react'
import yelp from '../api/yelp'
export default () => {
    const [results, setResults] = useState([])
    const [errorMessage, setErrorMessage] = useState('')

    const searchApi = async (searchTerm) => {
        try {
            const response = await yelp.get('/search', {
                params: {
                    limit: 20,
                    term: searchTerm,
                    location: 'san jose'
                }
            })
            // console.log('response: ',response)
            setResults(response.data.businesses)
            setErrorMessage('')
        } catch(error) {
            console.log('error: ', error)
            setErrorMessage('Something went wrong')
        }
    }
    useEffect(() => {
        searchApi('pizza')
        console.log('Hi there!')
    }, [])
    return [searchApi, results, errorMessage]
}