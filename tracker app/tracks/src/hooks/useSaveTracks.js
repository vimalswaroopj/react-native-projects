import {useContext} from 'react';
import { NavigationEvents } from 'react-navigation';
import {Context as LocationContext} from '../context/locationContext';
import {Context as TrackContext} from '../context/trackContext';
import {navigate} from '../navigationRef';
export default () => {
    const {state: {name, locations}, reset} = useContext(LocationContext);
    const {createTrack} = useContext(TrackContext);
    const saveTrack = async () => {
        await createTrack(name, locations);
        reset();
        navigate('TrackList')
    }
    return [saveTrack]
}