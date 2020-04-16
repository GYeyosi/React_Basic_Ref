import React from "react";
import LifeCycleDemo from "./LifeCycleDemo/LifeCycleDemo.jsx";
import Calculator from "./Calculator/Calculator.jsx";
// import Movie from "./Movie/Movie.jsx"; // This is to import a new component
import Movies from "./Movies/Movies.jsx";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

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
      {/* <Calculator />
      <LifeCycleDemo />
      <Movies /> */}
      <div className="router">
        {/* These below can be kept in seperate components and extracted here  */}
        <Router>
          <div className="links">
            <Link to="/Movies"> MOVIES </Link> <br />
            <Link to="/calc"> CALCULATOR </Link> <br />
            <Link to="/Lifecycledemo"> LIFECYCLEDEMO </Link>
          </div>

          <Route path="/Movies" component={Movies} />
          <Route path="/calc" component={Calculator} />
          <Route path="/Lifecycledemo" component={LifeCycleDemo} />
        </Router>
      </div>
    </div>
  );
}

export default App;
