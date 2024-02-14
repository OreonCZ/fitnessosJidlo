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
