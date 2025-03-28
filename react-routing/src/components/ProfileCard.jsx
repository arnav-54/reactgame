import { useParams } from "react-router-dom";
export default function ProfileCard() {
  const { userid, postid } = useParams();

  return (
    <h1>
      This is the Profile of : {userid} and post is {postid}
    </h1>
  );
}
