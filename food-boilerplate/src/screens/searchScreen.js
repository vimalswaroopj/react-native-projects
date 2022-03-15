import React, { useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import SearchBar from '../components/searchBar'
import useResults from '../hooks/useResults'
import ResultsList from '../components/resultsList'
import { ScrollView } from 'react-native-gesture-handler'
const SearchScreen = () => {
    const [term, setTerm] = useState('')
    const [searchApi, results, errorMessage] = useResults()
    const findeItemByPrice = (price) => {
        return results.filter(result => {
            return result.price === price
        })
    }
    return (
        <View style={styles.container}>
            <SearchBar term={term}
                onTermChange={newTerm => setTerm(newTerm)}
                onTermSubmit={() => searchApi(term)}
            />
            {errorMessage ? <Text>{errorMessage}</Text> : null}
            <ScrollView>
                <ResultsList results={findeItemByPrice('$')} title="Cost Effective" />
                <ResultsList results={findeItemByPrice('$$')} title="Bir Pricier" />
                <ResultsList results={findeItemByPrice('$$$$')} title="Big Spender" />
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFFFFF',
        flex: 1
    }
})

export default SearchScreen