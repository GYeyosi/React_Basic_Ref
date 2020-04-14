import React from "react";
import Calculator from "./Calculator/Calculator.jsx";
// import Movie from "./Movie/Movie.jsx"; // This is to import a new component
// import Movies from "./Movies/Movies.jsx";

function App() {
  const HelloWorld = <h1>Hello World!!!</h1>; //feature of jsx that can store html in variables   alsoe<!--  HTML can directly be written here cz of jsx -->
  return (
    <div className="App">
      {HelloWorld}
      {/* <p>Hello World!!!</p> */}
      {/* <Movie/> */}
      {/* <Movie
        name="Maharshi"
        likes="123.0k"
        banner="https://www.filmibeat.com/wimgm/1366x70/desktop/2019/05/maharshi_1557295639170.jpg"
        heroname="MaheshBabu"
      /> */}
      {/* <Movies /> */}
      <Calculator />
    </div>
  );
}

export default App;
