import { Link } from "react-router-dom"

export default function Achievements(){
    return(
        <>
        <p>Achievements</p>
        <input type="text" placeholder="Search"/>
        <button>Search</button>
        <h2>Beginner</h2>
        <ul>
            <li>
                <p>Beginner: First session!</p>
                <p>Description: Start your first session!</p>
                <p>Status: Unlocked</p>
            </li>
        </ul>
        <h2>Medium</h2>
        <ul>
            <li>
                <p>Medium: Šuba!</p>
                <p>Description: Eat 3 Paninis in a row!</p>
                <p>Status: Unlocked</p>
            </li>
        </ul>
        <h2>Extreme</h2>
        <ul>
            <li>
                <p>Extreme: Champions of pull-ups</p>
                <p>Description: Do 28 pull-ups in a row!</p>
                <p>Status: Locked</p>
            </li>
        </ul>
            <Link to="/">
                <p>zpet</p>
            </Link>
        </>
    )
}