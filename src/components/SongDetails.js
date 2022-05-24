import React from "react";
import { connect } from "react-redux";

const SongDetails = (props) => {
  const renderSong = props.song ? (
    <>
      <h2>{props.song.title}</h2>
      <p>{props.song.duration}</p>
    </>
  ) : null;

  return <div>{renderSong}</div>;
};

const mapStateToProps = (state) => {
  console.log("__STATE__", state);
  return {
    song: state.song
  };
};
export default connect(mapStateToProps)(SongDetails);
