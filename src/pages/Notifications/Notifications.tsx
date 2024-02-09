<<<<<<< HEAD
import { Link } from "react-router-dom"

export default function Notifications(){
    return(
        <>
            <p>Notifications</p>
            <ul>
                <li>New alert: Vojta ma nekopara polstar</li>
                <li>New alert: Vojta je pes</li>
                <li>New alert: Fanda je pes</li>
                <li>New alert: Michal neni pes</li>
                <li>New alert: Michal je kdo</li>

            </ul>

            <Link to="/">
                <p>zpet</p>
            </Link>
        </>
    )
}
=======
import { Link } from "react-router-dom";

export function Notifications() {
  return (
    <>
      <p>Notifications</p>
      <ul>
        <li>New alert: Vojta je pejsek</li>
        <li>New alert: Vojta ma nekopara polstar</li>
        <li>New alert: Lorel borem</li>
        <li>New alert: Lorem porem</li>
        <li>New alert: Jasd</li>
        <li>New alert: Pqwepoi</li>
      </ul>
      <Link to={"/"}>Go back</Link>
    </>
  );
}
>>>>>>> c3fe7dea4db082c607a4501beb4abefef2ef8fc3
