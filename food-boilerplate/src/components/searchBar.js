import React from 'react'
import { View, StyleSheet, Text, TextInput } from 'react-native'
import { Feather } from '@expo/vector-icons'
const SearchBar = (props) => {
    return (
        <View style={styles.backgroundStyle}>
            <Feather style={styles.iconStyle} name='search' size={30} />
            <TextInput value={props.term}
                autoCapitalize="none"
                autoCorrect={false}
                onChangeText={props.onTermChange}
                style={styles.inputStyle}
                placeholder="Search" 
                onEndEditing={props.onTermSubmit}
                />
        </View>
    )
}

const styles = StyleSheet.create({
    backgroundStyle: {
        backgroundColor: '#F0EEEE',
        height: 50,
        borderRadius: 5,
        marginHorizontal: 15,
        flexDirection: 'row',
        marginVertical: 10,
    },
    iconStyle: {
        fontSize: 35,
        alignSelf: 'center',
        marginHorizontal: 15
    },
    inputStyle: {
        flex: 1,
        fontSize: 18
    }

});

export default SearchBar