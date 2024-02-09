import { Link } from "react-router-dom"

export default function AppReview(){
    return(
        <>
        <h2>GDPR/Policy</h2>
            <p>
                review form
            </p>
            <Link to="/settings">
                <p>Settings</p>
            </Link>
            <Link to="/">
                <p>zpet</p>
            </Link>
        </>
    )
}