import {combineReducers} from 'redux';
import {selectSong} from "../actions";

const songReducer = () => {
    return [
        {title: 'Numb', duration: '3:47'},
        {title: 'Faint', duration: '4:25'},
        {title: 'What I\'ve Done', duration: '3:52'},
        {title: 'Papercut', duration: '4:12'}
    ]
};

const selectedSongReducer = (selectedSong=null, action) => {
    if(action.type === 'SONG_SELECTED') {
        return action.payload;
    }
    return selectedSong;
};

export default combineReducers({
   songs: songReducer,
   selectedSong: selectedSongReducer
});

