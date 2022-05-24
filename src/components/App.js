import React, { useState } from "react";

import SongList from "./SongList";
import SongDetails from "./SongDetails";

const SONGS = [
  { id: 1, title: "snowman", duration: "3.00" },
  { id: 2, title: "counting stars", duration: "5.00" },
  { id: 3, title: "Dusk till down", duration: "4.00" },
  { id: 4, title: "Prank", duration: "2.00" }
];

export default function App() {
  return (
    <div className="App" style={{ display: "flex" }}>
      <SongList songs={SONGS} />
      <SongDetails />
    </div>
  );
}
