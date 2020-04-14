import * as React from "react";
import "./style.css";

// function Movie() {
//   return (
//     <div className="movie-card">
//       <img
//         src="https://www.filmibeat.com/wimgm/1366x70/desktop/2019/05/maharshi_1557295639170.jpg"
//         alt=""
//       />
//       <label> 12.3k Maharshi </label>
//     </div>
//   );
// }

// function Movie(props) {
//   return (
//     <div className="movie-card">
//       <img src={props.banner} alt="" />
//       <label>
//         {props.likes} {props.name} {props.heroname}
//       </label>
//     </div>
//   );
// }

// changing this to a class component.

class Movie extends React.Component {
  render() {
    return (
      <div className="movie-card">
        <img src={this.props.banner} alt="" />
        <label>
          {this.props.likes} {this.props.name} {this.props.heroname}
        </label>
      </div>
    );
  }
}

export default Movie; // we need to export it definetly to use it.
