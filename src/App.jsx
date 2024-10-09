import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import MyHeader from "./components/MyHeader.jsx";
import Welcome from "./components/Welcome.jsx";
import { functionA, functionB } from "./utils.js";
import MyButton from "./components/MyButton.jsx";
import City from "./components/City.jsx";
import MoviesList from "./components/MovieList.jsx";
import MoodChanger from "./components/MoodChanger.jsx";
import Form from "./components/Form.jsx";
import BirthdayTranslator from "./components/BirthdayTranslator";
import Weather from "./components/Weather";
import LoginForm from "./components/LoginForm.jsx";
import AddMovieForm from "./components/MovieForm.jsx";
const movies = [
  {
    id: 1, // items in data collections need unique IDs
    title: "The Shawshank Redemption",
    year: 1994,
    synopsis: "Two imprisoned men find redemption.",
  },
  {
    id: 2, // unique ID
    title: "The Dark Knight",
    year: 2008,
    synopsis: "Batman fights the menace known as the Joker.",
  },
  {
    id: 3, // unique ID
    title: "Interstellar",
    year: 2014,
    synopsis: "Explorers travel through a wormhole in space.",
  },
];

function App() {
  const [count, setCount] = useState(0);
  const [bool, setBool] = useState(false);
  const [inputValue, setInputValue] = useState();

  const [movieList, setMovieList] = useState(movies);

  const [city, setCity] = useState({
    name: "Auckland",
    state: "Northland",
    country: "NZ",
  });

  const handleReverseMovies = () => {
    // first clone the original, so we don’t mutate it
    let newMovies = [...movieList];
    newMovies.reverse(); // 2. modify the clone
    // setMovieList(newMovies); // 3. set updated clone in state
  };

  const handleAddMovie = (newMovie) => {
    newMovie.id = movieList.length + 1; // unreliable but succinct
    setMovieList([...movieList, newMovie]);
  };

  const boolOnlick = () => {
    setBool(!bool);

    setCity(
      bool
        ? {
            name: "Auckland",
            state: "Northland",
            country: "NZ",
          }
        : {
            name: "Wellington",
            state: "Northland",
            country: "NZ",
          }
    );
  };
  return (
    <>
      <LoginForm />
      {/* <Weather></Weather>
      <Form></Form>
      <BirthdayTranslator></BirthdayTranslator>
      <Welcome name={"Kingsley"} customStyle={""}>
        <City name={city.name} state={city.state}></City>

        <div className="card">
          <input onKeyUp={(event) => setInputValue(event.target.value)} />
          {inputValue}
          <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </button>
          <button onClick={boolOnlick}>Bool</button>
          {bool ? <MoodChanger /> : <div>"No"</div>}

          {/* {bool && <div>Show this only true</div>}
          {!bool && <div>Show this only fasle</div>} */}
      {/* <p>
            Edit <code>src/App.jsx</code> and save to test HMR
          </p>
        </div>
      </Welcome> */}
      <AddMovieForm onAddMovie={handleAddMovie}></AddMovieForm>
      <MoviesList
        movies={movieList}
        onReverseClick={handleReverseMovies}
      ></MoviesList>

      <p className="read-the-docs backgroundWhite">
        Click on the Vite and React logos to learn more
      </p>
      {/* } */}
    </>
  );
}

export default App;
