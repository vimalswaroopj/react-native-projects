import React, { useContext } from 'react';
import { StyleSheet, View, Text, ActivityIndicator } from 'react-native';
import MapView, { Polyline, Circle } from 'react-native-maps';
import { Context as LocationContext } from '../context/locationContext';

const MapScreen = () => {
    // let points = []
    // for (let i = 0; i < 20; i++) {
    //     points.push({
    //         latitude: 37.33233 + i * 0.001,
    //         longitude: -122.03121 + i * 0.001
    //     })
    // }
    const { state: { currentLocation, locations } } = useContext(LocationContext)
    if (!currentLocation) {
        return <ActivityIndicator size="large" style={{ marginTop: 200 }} />
    }
    return (
        <View>
            <Text>MapScreen</Text>
            <MapView
                style={styles.map}
                initialRegion={{
                    ...currentLocation.coords,
                    latitudeDelta: 0.01,
                    longitudeDelta: 0.01
                }}
            >
                <Circle radius={30} center={currentLocation.coords} strokeColor="rgba(158, 158, 255, 1.0)" fillColor="rgba(158, 158, 255, 0.3)"></Circle>
                <Polyline coordinates={locations.map(loc => loc.coords)} />
            </MapView>
        </View>
    )
}

const styles = StyleSheet.create({
    map: {
        height: 300,
        width: '100%'
    }
})

export default MapScreen