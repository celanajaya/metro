import {playModes} from "./PlayModes"
import {playbackModes} from "./PlaybackModes"
import { instruments } from "./InstrumentLib";


export const PresetsLib = [
    {
        title: "4 beats every 4 bars",
        beatsPerStep: 4,
        playMode: playModes.BY_BAR,
        interval: 4,
        bpmStep: 20,
        bpmRange: [100, 400],
        accents: [0, 1, 2, 1]
    },
    {
        title: "Jhaptal tabla",
        instrument: instruments.TABLA,
		beatsPerStep: 10,
		bpmRange: [200, 400],
        accents: [0, 1, 0, 0, 1, 2, 1, 0, 0, 1 ],
        playMode: playModes.BY_TIME,
        interval: 5*60,
        bpmStep: 10
    },
    {title: "Balkan 1", "bpmRange":[241,400],"beatsPerStep":7,"accents":[0,1,2,0,1,2,1],"instrument":"electrokit","playMode":"by_bar","interval":20,"bpmStep":30},
    {title: "Balkan 2", "bpmRange":[293,400],"beatsPerStep":7,"accents":[0,1,2,0,1,2,1],"instrument":"tabla","playMode":"by_bar","interval":300,"bpmStep":50},
    {title: "Groove 1", "bpmRange":[222,262],"beatsPerStep":8,"accents":[0,2,1,2,1,0,1,1],"instrument":"electrokit","playMode":"by_time","interval":600,"bpmStep":50},
    {title: "Groove 2", "bpmRange":[222,400],"beatsPerStep":8,"accents":[0,2,0,2,2,2,0,1],"instrument":"electrokit","playMode":"by_bar","interval":20,"bpmStep":50},


];

export const InitPreset = {
    title: "INIT",
    instrument: instruments.GAMELAN,
    beatsPerStep: 4,
    bpmRange: [90],
    accents: [1, 0, 0, 0],
    playMode: playModes.STABLE,
    playbackMode: playbackModes.STOP,
    interval: 10,
    bpmStep: 50,
    isHidden: true
}