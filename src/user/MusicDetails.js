import React, { useState } from "react";
import { useParams } from "react-router";
import sampleMusicData from "../MusicData";

const MusicDetails = () => {
  // Sample music details data (replace with your actual data)
  const { id } = useParams();

  const selectedMusic = sampleMusicData.find(
    (music) => music.id === parseInt(id)
  );
  console.log(`${selectedMusic.image}`);

  const [myRating, setMyRating] = useState(0);

  const handleRatingChange = (event) => {
    const rating = event.target.value;
    setMyRating(rating);
  };

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6">
          <img
            src={selectedMusic.image}
            alt={selectedMusic.musicName}
            className="img-fluid"
          />
          <h3>{selectedMusic.musicName}</h3>
          <p>{selectedMusic.albumName}</p>
          <p>{selectedMusic.artistName}</p>
        </div>
        <div className="col-md-6">
          <h4>Total Rating: {selectedMusic.totalRating}</h4>
          <h4>Average Rating: {selectedMusic.averageRating}</h4>
          <h4>My Rating: {myRating}</h4>
          <input
            type="range"
            min="1"
            max="5"
            step="0.1"
            value={myRating}
            onChange={handleRatingChange}
          />
          <button className="btn btn-primary mt-2">Sign Up to Rate</button>
        </div>
      </div>
    </div>
  );
};

export default MusicDetails;
