import React from "react";
import MusicList from "./MusicList";

const MusicPage = () => {
  return (
    <div
      className="container-fluid bg-black text-white p-5"
      style={{ minHeight: "100vh" }}
    >
      <MusicList />
    </div>
  );
};

export default MusicPage;
