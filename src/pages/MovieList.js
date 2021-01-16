import React, { useState, useEffect } from "react";
import { Card, Container } from "react-bootstrap";
import "../App.css";

const API_KEY = "3f8af128099b08ebdb593c5711c409c3";
const API_URL = "https://api.themoviedb.org/3";

const MovieList = ({ type }) => {
  const [movies, setMovies] = useState([]);
  // const [searchTerm, setSearchTerm] = useState("")

  useEffect(() => {
    const fetchData = async () => {
      let endpoint = "now_playing";
      if (type === "top_rated") {
        endpoint = "top_rated";
      }
      if (type === "upcoming") {
        endpoint = "upcoming";
      }
      const url = `${API_URL}/movie/${endpoint}?api_key=${API_KEY}`;
      console.log(url);
      const respone = await fetch(url);
      const data = await respone.json();
      setMovies(data.results);
      console.log(movies);
    };
    fetchData();
  }, [type]);

  // const handleSearchTermChange = (e)=>{
  //   setSearchTerm(e.target.value)
  //   console.log(e.target.value);
  // }
  // useEffect (()=>{
  //   const newMovies = movies.filter(m=> m.title.startWith(searchTerm));
  //   setMovies(newMovies)
  // },[searchTerm])

  return (
    <div>
      <Container className="d-flex flex-wrap justify-content-between">
      {movies.map((movie) => (
          <div>
            <Card key={movie.id} className=" col-md-6 col-lg-4 mt-5" style={{ width:"18em" }}>
              <Card.Img
                variant="top"
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              />
              <Card.Body>
                <Card.Title>{movie.title}</Card.Title>
                <Card.Text>
                  <span>{movie.release_date.substring(0, 4)}</span>
                </Card.Text>
                <Card.Text>
                  <span style={{ color: "red" }}>♥ </span>{" "}
                  <span>{movie.popularity}</span>
                  <span className="ml-3" style={{ color: "red" }}>
                    ⭐{" "}
                  </span>{" "}
                  <span>{movie.vote_average}</span>
                </Card.Text>
              </Card.Body>
            </Card>
     
        
          </div>
        ))}
     </Container>
    </div>
  );
};

export default MovieList;
