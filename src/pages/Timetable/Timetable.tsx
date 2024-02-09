import { Link } from "react-router-dom";

export default function Timetable(){
    return(
        <>
            <p>Timetable</p>
            <p>Rozvrh</p>
            <Link to={"/"}>
                <p>Go back</p>
            </Link>
        </>
    )
}