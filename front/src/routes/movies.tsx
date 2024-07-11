import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

interface Movie {
  // Adicione propriedades específicas do objeto Movie aqui
  id: number;
  title: string;
  director: string;
}

const Movies = () => {
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    const headers = new Headers();
    headers.append("Content-Type", "application/json");

    const requestOptions = {
      method: "GET",
      headers: headers,
    };

    fetch(`http://localhost:8080/movies`, requestOptions)
      .then((response) => response.json())
      .then((data) => {
        setMovies(data);
      })
      .catch((err) => {
        console.error("Failed to fetch movies:", err);
      });
  }, []); // Adicionado array vazio para execução única após montagem

  return (
    <div>
      <h1>Movies</h1>
      {movies.map((movie) => (
        <div key={movie.id}>
          <h3>{movie.title}</h3>
          <p>Directed by: {movie.director}</p>
        </div>
      ))}
    </div>
  );
};

export default Movies;
