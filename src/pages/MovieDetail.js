import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Container, Media } from "react-bootstrap";

const API_KEY = "3f8af128099b08ebdb593c5711c409c3";
const API_URL = "https://api.themoviedb.org/3";

const MovieDetail = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const url = `${API_URL}/movie/${id}?api_key=${API_KEY}`;
      const respone = await fetch(url);
      const data = await respone.json();
      setMovie(data);
      console.log(movie);
    };
    fetchData();
  }, []);
  return (
    <div className="mt-5">
      <Container className="" >
        <Media style={{backgroundColor:"white"}}>
          <img
          width={300}
            className="mr-3"
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt="Generic placeholder"
          />
          <Media.Body>
            <h2><strong>{movie.title}{movie.title}<span>({movie.release_date.substring(0, 4)})</span></strong></h2>
            {movie.genres.map(e=><span>{e.name}</span>)}
          </Media.Body>
        </Media>
      </Container>

    </div>
  );
};

export default MovieDetail;
