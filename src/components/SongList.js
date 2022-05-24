import React from "react";
import { selectSong } from "../actions";
import { connect } from "react-redux";
const SongList = ({ songs, selectSong }) => {
  const renderSongs = songs.length
    ? songs.map((song) => (
        <div key={song.id} onClick={() => selectSong(song)}>
          <h2>{song.title}</h2>
          <p>Duration: {song.duration}</p>
        </div>
      ))
    : null;

  return <div>{renderSongs}</div>;
};

export default connect(null, { selectSong })(SongList);
