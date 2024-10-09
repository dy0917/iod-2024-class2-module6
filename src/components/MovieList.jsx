import { useState } from "react";

function Movie({ title, synopsis, year }) {
  // const [movieTitle, setMovieTitle] = useState("title");
  return (
    <li>
      <h3>{title}</h3> <span>({year})</span>
      <div>{synopsis}</div>
    </li>
  );
}

function MoviesList({ movies, onReverseClick }) {
  return (
    <div className="MoviesList componentBox">
      <button onClick={onReverseClick}>Reverse</button>
      <ul>
        {" "}
        {/* iterate over each movie, print the title in a list */}
        {movies.map((movie, index) => (
          <Movie key={movie.id} {...movie}></Movie>
        ))}
      </ul>
    </div>
  );
}

export default MoviesList;
