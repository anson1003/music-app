import React from "react";
import { Link } from "react-router-dom";
import MusicCard from "./MusicCard"; // Import the MusicCard component
import sampleMusicData from "../MusicData";

const MusicList = () => {
  return (
    <div className="row mt-4">
      {sampleMusicData.map((song) => (
        <div key={song.id} className="col-md-2 mb-2">
          <Link to={`/music-details/${song.id}`}>
            <MusicCard key={song.id} music={song} />
          </Link>
        </div>
      ))}
    </div>
  );
};

export default MusicList;
