import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { FlatList } from 'react-native-gesture-handler';
import ResultDetails from './resultDetails';
import { withNavigation } from 'react-navigation'
const ResultsList = ({ title, results, navigation }) => {
    if (!results.length) {
        return null
    }
    return <View style={styles.container}>
        <Text style={styles.title}>{title}</Text>
        <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            keyExtractor={() => results.id}
            data={results}
            renderItem={({ item }) => {
                return (
                    <TouchableOpacity onPress={() => {
                        return navigation.navigate('Results', { id: item.id })
                    }}>
                        <ResultDetails results={item} />
                    </TouchableOpacity>
                )
            }}
        />
    </View>
}

const styles = StyleSheet.create({
    container: {
        marginBottom: 10
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 15,
        marginBottom: 5
    },
})
export default withNavigation(ResultsList);