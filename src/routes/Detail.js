import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Detail() {
  const [loading, setLoading] = useState(true);
  const [movieInfo, setMovieInfo] = useState([]);

  const { id } = useParams();
  const getMovies = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    setMovieInfo(json);
    setLoading(false);
  };

  useEffect(() => {
    getMovies();
  }, []);

  console.log(movieInfo);
  return (
    <div>
      <img src={movieInfo.data.movie.large_cover_image} />
      <h1>{movieInfo.data.movie.title}</h1>
      <p>{movieInfo.data.movie.description_full}</p>
    </div>
  );
}

export default Detail;
