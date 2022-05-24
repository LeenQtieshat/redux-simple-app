import types from "../actions/types";
import { combineReducers } from "redux";

const selectSongReducer = (song = null, action) => {
  console.log("_Reducer__", true);
  if (action.type == types.SELECT_SONG) {
    console.log("_Reducer__", true);
    return { ...action.payload };
  }
  return song;
};

export default combineReducers({
  song: selectSongReducer
});
