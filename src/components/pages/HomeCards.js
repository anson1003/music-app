import React from "react";
// import "./Pages.css";
const HomeCards = () => {
  return (
    <div>
      <h5 className="mt-5">RateSync Lets You...</h5>

      <div className="row mt-4">
        {/* Card 1 */}
        <div className="col-md-4 mb-4">
          <div
            className="card text-center  text-white "
            style={{ background: "#001c30" }}
          >
            <div className="card-body">
              <i className="bi bi-music-note h5 mb-3"></i>
              <p className="card-text">Discover New Music</p>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="col-md-4 mb-4">
          <div
            className="card text-center text-white"
            style={{ background: "#001c30" }}
          >
            <div className="card-body">
              <i className="bi bi-heart h5 mb-3"></i>
              <p className="card-text">Connect with Artists</p>
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="col-md-4 mb-4">
          <div
            className="card text-center  text-white"
            style={{ background: "#001c30" }}
          >
            <div className="card-body">
              <i className="bi bi-star h5 mb-3"></i>
              <p className="card-text">Rate Albums</p>
            </div>
          </div>
        </div>

        {/* Card 4 */}
        <div className="col-md-4 mb-4">
          <div
            className="card text-center  text-white"
            style={{ background: "#001c30" }}
          >
            <div className="card-body">
              <i className="bi bi-pencil h5 mb-3"></i>
              <p className="card-text">Write Reviews</p>
            </div>
          </div>
        </div>

        {/* Card 5 */}
        <div className="col-md-4 mb-4">
          <div
            className="card text-center text-white"
            style={{ background: "#001c30" }}
          >
            <div className="card-body">
              <i className="bi bi-list-ul h5 mb-3"></i>
              <p className="card-text">Compile Lists</p>
            </div>
          </div>
        </div>

        {/* Card 6 */}
        <div className="col-md-4 mb-4">
          <div
            className="card text-center  text-white"
            style={{ background: "#001c30" }}
          >
            <div className="card-body">
              <i className="bi bi-people h5 mb-3"></i>
              <p className="card-text">Connect with Friends</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeCards;
