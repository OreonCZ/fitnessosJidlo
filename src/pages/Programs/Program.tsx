import { Link } from "react-router-dom";

<<<<<<< HEAD
export default function Program(){
    return(
        <>
            <h2>Cvicime s Vojtou</h2>
            <p>Kliky na mysi: 3 serie po 12 opakovani</p>
            <p>OSU maniak: 6 pisnicek v rade</p>
            <p>Jedno vyherni lolecko - po prohre dalsi hra</p>
            <p>Upvote</p>
            <p>Downvote</p>
            <Link to={"/programs"}><p>Back to programs</p></Link>
            <Link to={"/"}><p>zpet</p></Link>
        </>
    )
}
=======
export function Program() {
  return (
    <>
      <h2>Cvicime s Vojtou</h2>
      <p>Kliky na mysi: 3 serie po 12 opakovani</p> 
      <p>OSU maniak: 6 pisnicek v rade</p> 
      <p>Jedno vyherni lolecko - pri prohre dalsi hra</p>
      <p>Upvote</p> 
      <p>Downvote</p> 
      <Link to={"/programs"}><p>Go back to programs</p></Link>
      <Link to={"/"}><p>Go back to dashboard</p></Link>
    </>
  );
}
>>>>>>> c3fe7dea4db082c607a4501beb4abefef2ef8fc3
