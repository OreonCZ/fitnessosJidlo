import { Link } from "react-router-dom"

export default function Profile(){
    return(
        <>
            <p>Profile</p>
            <p>Jmeno</p>
            <p>Badge</p>
            <p>Stats</p>
            <p>Fotka</p>
            <p>Banner</p>
            <p>Status -text</p>
            <p>Status -online-cvici-atd</p>
            <p>Bio</p>
            <p>Proklik na pratele</p>
            <p>Makro kalkulacka</p>
            <Link to="/">
                <p>zpet</p>
            </Link>
        </>
    )
}