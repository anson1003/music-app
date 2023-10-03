import React from "react";
import HomeCards from "./HomeCards";
import PopularWeek from "./PopularWeek";

const HomePage = () => {
  return (
    <div className="container-fluid bg-black text-white">
      <div className="row">
        <div className="col-md-6 p-5">
          <h1 className="display-1">
            <strong>
              Share{" "}
              <span
                style={{
                  background: "linear-gradient(to right, #279EFF, #0C356A)",
                  WebkitBackgroundClip: "text",
                  color: "transparent",
                }}
              >
                Your
              </span>
            </strong>
          </h1>
          <h1 className="display-1">
            <strong>
              Love for{" "}
              <span
                style={{
                  background: "linear-gradient(to right, #279EFF, #0C356A)",
                  WebkitBackgroundClip: "text",
                  color: "transparent",
                }}
              >
                {" "}
                Music
              </span>
            </strong>
          </h1>
          <h1 className="display-1">
            <strong>
              with{" "}
              <span
                style={{
                  background: "linear-gradient(to right, #279EFF, #0C356A)",
                  WebkitBackgroundClip: "text",
                  color: "transparent",
                }}
              >
                Friends
              </span>
            </strong>
          </h1>
          <p>
            RateSync is a social platform that allows you to keep track of all
            the music you listen to and Write reviews, rate albums, and compile
            lists in music's fastest growing community.
          </p>
        </div>
        <div className="col-md-6 p-5">
          <img
            src="/images/homeimg3.png"
            alt="Music"
            className="rounded-start-pill"
          />
        </div>

        <HomeCards />

        <PopularWeek />
      </div>
    </div>
  );
};

export default HomePage;
