import React from "react";

const MusicCard = ({ music }) => {
  return (
    // <div className="col-md-2 mb-2">
    <div className="card text-center bg-light">
      <img src={music.image} alt={music.musicName} className="card-img-top" />
      <div className="card-body">
        <h5 className="card-title">{music.musicName}</h5>
        <p className="card-text">{music.artistName}</p>
      </div>
    </div>
    // </div>
  );
};

export default MusicCard;
