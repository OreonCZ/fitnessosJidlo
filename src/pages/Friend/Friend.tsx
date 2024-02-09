import { Link } from "react-router-dom"

export default function Friend(){
    return(
        <>
            <p>Friend</p>
            <p>Profilovka</p>
            <p>Jmeno</p>
            <p>Badges</p>
            <p>Status</p>
            <p>Bio</p>
            <p>Seznam pratel</p>

            <Link to="/friends">
                <p>zpet na pratele</p>
            </Link>
            <Link to="/">
                <p>zpet do dashboard</p>
            </Link>
        </>
    )
}