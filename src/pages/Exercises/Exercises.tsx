import { Link } from "react-router-dom"

export default function Exercises(){
    return(
        <>
        <h2>Exercises</h2>
        <input type="text" placeholder="Vyhledat cviky"/>
        <button>Hledat cviky</button>
        <ul>
            <li>
                <p>Kliky</p>
                <p>Prejit</p>
            </li>
            <li>
                <p>Drepy</p>
                <p>Prejit</p>
            </li>
            <li>
                <p>Benchpress</p>
                <p>Prejit</p>
            </li>
        </ul>
            <Link to="/">
                <p>zpet</p>
            </Link>
        </>
    )
}
