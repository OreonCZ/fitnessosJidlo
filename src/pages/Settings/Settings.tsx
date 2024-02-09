import { Link } from "react-router-dom"

export default function Settings(){
    return(
        <>
                <p>Settings</p>
                <p>Themes</p>
                <p>Jazyk</p>
                <p>Toggle notifikace</p>
                <p>O nás</p>
            <Link to="/appreview">
                <p>App review</p>
            </Link>
            <Link to="/policy">
                <p>Policy/GDPR</p>
            </Link>
            <Link to="/">
                <p>zpet</p>
            </Link>
        </>
    )
}