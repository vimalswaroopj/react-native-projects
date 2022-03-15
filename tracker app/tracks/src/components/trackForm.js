import React, {useContext} from 'react';
import {Input, Button} from 'react-native-elements';
import Spacer from './spacer';
import {Context as LocationContext} from '../context/locationContext';
import useSaveTrack from '../hooks/useSaveTracks';
const TrackForm = () => {
    const { state: {name, recording, locations},startRecording, stopRecording, changeName} = useContext(LocationContext);
    const [saveTrack] = useSaveTrack();
    return (
        <>
            <Spacer>
                <Input placeholder="Enter name" value={name} onChangeText={changeName}/>
            </Spacer>
            <Spacer>
            {
            !recording 
            ? <Button title="Start Recording" onPress={startRecording}/> 
            : <Button title="Stop" onPress={stopRecording}/> 
            }
            </Spacer>
            {
                !recording && locations.length ?
                <Spacer>
                <Button title={"Save recording"} onPress={saveTrack}/>
                </Spacer> : null
            }
        </>
    )
}

export default TrackForm