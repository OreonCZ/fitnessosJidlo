<<<<<<< HEAD
import { Link } from "react-router-dom"

export default function Programs(){
    return(
        <>
        <h2>Uvodni pohled</h2>
        <p>Beginner | Medium | Grznar</p>
            <p>Programs</p>
            <p>Beginner</p>
            <p>Medium</p>
            <p>Grznar</p>
            <h2>Proklik</h2>
            <h3>Beginner</h3>
            <ul>
                <Link to={"/program"}>
                <li>
                    <p>Cvicime s Vojtou</p>
                    <p>Upvotu: 128</p>
                    <p>Downvotu: 12</p>
                </li>
                </Link>
            </ul>
            <Link to="/">
                <p>zpet</p>
            </Link>
        </>
    )
}
=======
import { Link } from "react-router-dom";

export function Programs() {
  return (
    <>
      <h2>Uvodni pohled</h2>
      <p>Beginner | Medium | Grznar</p>
      <p>Programs</p>
      <p>Beginner</p>
      <p>Medium</p>
      <p>Grznar</p>
      <h2>Proklik</h2>
      <h3>Beginner</h3>
      <ul>
        <Link to={"/program"}>
          <li>
            <p>Cvicime s Vojtou</p>
            <p>Upvotu: 128</p>
            <p>Downvotu: 12</p>
          </li>
        </Link>
        <li>
          <p>Cvicime s Vojtou</p>
          <p>Upvotu: 128</p>
          <p>Downvotu: 12</p>
        </li>
        <li>
          <p>Cvicime s Vojtou</p>
          <p>Upvotu: 128</p>
          <p>Downvotu: 12</p>
        </li>
      </ul>
      <Link to={"/"}>Go back</Link>
    </>
  );
}
>>>>>>> c3fe7dea4db082c607a4501beb4abefef2ef8fc3
