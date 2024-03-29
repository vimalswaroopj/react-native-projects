import React, { useEffect, useState } from 'react';
import { requestForegroundPermissionsAsync, requestPermissionsAsync, watchPositionAsync, Accuracy } from 'expo-location';

export default (shouldTrack, callback) => {
    const [err, setErr] = useState(null);
    
    useEffect(() => {
        let subscriber;
        const startWatching = async () => {
            try {
                const { granted } = await requestPermissionsAsync();
                subscriber = await watchPositionAsync({
                    accuracy: Accuracy.BestForNavigation,
                    timeInterval: 1000,
                    distanceInterval: 10
                }, callback);
                if (!granted) {
                    setErr(e);
                    // console.log('permission not granted')
                    throw new Error('Location permission not granted');
                } else {
                    console.log('permission granted')
                }
            } catch (e) {
                setErr(e);
            }
        };

        if (shouldTrack) {
            startWatching()
        } else {
            if (subscriber) {
                subscriber.remove();
            }
            subscriber = null;
        }
        return () => {
            if (subscriber) {
                subscriber.remove();
            }
        }
    }, [shouldTrack, callback]);

    return [err]
}
