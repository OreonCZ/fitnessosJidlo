import { Link } from "react-router-dom"

export default function Friends(){
    return(
        <>
            <p>Friends</p>
            <input type="text" placeholder="Hledání přítele"/>
            <button>Vyhledat</button>
            <ul>
                <li>
                    <p>Ikonka</p>
                    <p>Misako1</p>
                    <Link to="/friend">
                <p>Přejít</p>
                    </Link>
                    
                </li>
                <li>
                    <p>Ikonka</p>
                    <p>VojtaKdo</p>
                    <Link to="/friend">
                <p>Přejít</p>
                    </Link>
                </li>
            </ul>
            <Link to="/">
                <p>zpet do dashboard</p>
            </Link>
        </>
    )
}
