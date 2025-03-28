import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

export default function MovieDetails() {
  const { movieid } = useParams();
  const navigate = useNavigate();
  const [details, setDetails] = useState(null);

  useEffect(() => {
    fetch(`http://www.omdbapi.com/?apikey=5941fb3&i=${movieid}`)
      .then((res) => res.json())
      .then((data) => {
        setDetails(data);

        setTimeout(() => navigate("/", { replace: true }), 2000);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      {details == null ? (
        <h1>Please Wait ....</h1>
      ) : (
        <div className="flex">
          <div>
            <img src={details.Poster} />
          </div>
          <div>
            <h3>{details.Title}</h3>
            <p>Released: {details.Released} </p>
            <p>Genere: {details.Genre}</p>
            <p>Plot: {details.Plot} </p>
            <p>Imdb Rating: {details.imdbRating} </p>
          </div>
        </div>
      )}
    </div>
  );
}
