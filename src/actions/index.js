import types from "./types";

export const selectSong = (song) => {
  console.log("__Action__", song);
  return {
    type: types.SELECT_SONG,
    payload: song
  };
};
