// This is a class component with many movies
import React from "react";
import Movie from "../Movie/Movie.jsx";
import "./styles.css";
import movies from "./movies.js";

class Movies extends React.Component {
  // state = movies;
  state = { ...movies }; //This brings only inner things keys, values

  // getMovie = (name, likes, banner) => {
  //   return <Movie name={name} likes={likes} banner={banner} />;
  // };

  getMovie = (movie) => {
    return (
      <Movie name={movie.name} likes={movie.likes} banner={movie.banner} />
    );
  };

  //   getAlert = () => {
  //     alert("HI");
  //   };

  render() {
    // {
    //   this.getAlert();
    // }
    return (
      <div className="movies-section">
        {/* <Movie
          name="Maharshi"
          likes="123.0k"
          banner="https://www.filmibeat.com/wimgm/1366x70/desktop/2019/05/maharshi_1557295639170.jpg"
          //   heroname="MaheshBabu"
        />

        <Movie
          name="Avengers"
          likes="103.0k"
          banner="https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fblogs-images.forbes.com%2Fscottmendelson%2Ffiles%2F2019%2F03%2FPayoff_1-Sht_Online_v6_Domestic_Lg-1200x675.jpg"
          //   heroname="MaheshBabu"
        />

        <Movie
          name="Maharshi"
          likes="123.0k"
          banner="https://www.filmibeat.com/wimgm/1366x70/desktop/2019/05/maharshi_1557295639170.jpg"
          //   heroname="MaheshBabu"
        /> */}

        {/* {this.getMovie(
          "Maharshi",
          "123.0k",
          "https://www.filmibeat.com/wimgm/1366x70/desktop/2019/05/maharshi_1557295639170.jpg"
        )}
        {this.getMovie(
          "Avengers",
          "103.0k",
          "https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fblogs-images.forbes.com%2Fscottmendelson%2Ffiles%2F2019%2F03%2FPayoff_1-Sht_Online_v6_Domestic_Lg-1200x675.jpg"
        )}
        {this.getMovie(
          "Maharshi",
          "123.0k",
          "https://www.filmibeat.com/wimgm/1366x70/desktop/2019/05/maharshi_1557295639170.jpg"
        )}
         */}
        {/* {this.getMovie(this.state.maharshi)}
        {this.getMovie(this.state.avengers)}
        {this.getMovie(this.state.maharshi)} */}
        {Object.keys(this.state).map((x) => {
          return this.getMovie(this.state[x]);
        })}
      </div>
    );
  }
}

export default Movies;
