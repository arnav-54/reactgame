import { Link } from "react-router-dom";
export default function MovieCard({ title, image, movieId }) {
  return (
    <Link to={"/movie/" + movieId}>
      <div className="card">
        <img src={image} />
        <h2> {title} </h2>
      </div>
    </Link>
  );
}
