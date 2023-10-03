import React from "react";
import MusicList from "../../user/MusicList";

const PopularWeek = () => {
  const popularSongs = [
    {
      id: 1,
      image: "./images/dummy.png",
      musicName: "Song 1",
      artistName: "Artist 1",
    },
    {
      id: 2,
      image: "./images/dummy.png",
      musicName: "Song 2",
      artistName: "Artist 2",
    },
    {
      id: 3,
      image: "./images/dummy.png",
      musicName: "Song 3",
      artistName: "Artist 3",
    },
    {
      id: 4,
      image: "./images/dummy.png",
      musicName: "Song 4",
      artistName: "Artist 4",
    },
    {
      id: 5,
      image: "./images/dummy.png",
      musicName: "Song 5",
      artistName: "Artist 5",
    },
    {
      id: 6,
      image: "./images/dummy.png",
      musicName: "Song 6",
      artistName: "Artist 6",
    },
  ];

  return (
    <div>
      <h5 className="mt-5">Popular this week</h5>

      {/* Popular songs section */}
      <div className="row mt-4 mb-4">
        <div className="col-md-12">
          <MusicList songs={popularSongs} />
          {/* <div className="card bg-dark text-white"> 
            
            {/* <div className="card-body">
              <div className="row">
                {popularSongs.map((song) => (
                  <div key={song.id} className="col-md-2">
                    <div className="card text-center bg-dark text-white">
                      <img
                        src={song.image}
                        alt={song.musicName}
                        className="card-img-top"
                      />
                      <div className="card-body">
                        <h5 className="card-title">{song.musicName}</h5>
                        <p className="card-text">{song.artistName}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div> 
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default PopularWeek;
