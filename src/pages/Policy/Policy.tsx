import { Link } from "react-router-dom"

export default function Policy(){
    return(
        <>
        <h2>GDPR/Policy</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis sunt nesciunt, dolores 
                cupiditate doloribus libero id quae a maxime molestiae voluptates neque in quam enim 
                labore placeat dolorum optio eligendi.
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