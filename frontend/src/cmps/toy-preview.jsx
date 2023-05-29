import { Link } from "react-router-dom";




export function ToyPreview({ toy }) {
    console.log(toy.name);
    console.log('toy preview', toy);
    return <article>
        <h4>{toy.name}</h4>
        
        <p>Price: <span>{toy.price.toLocaleString()}$</span></p>
        <p>Age: <span>{toy.age.toLocaleString()}</span></p>
        

        {toy.owner && <p>Owner: <Link to={`/user/${toy.owner._id}`}>{toy.owner.fullname}</Link></p>}
        <hr />
        <Link to={`/toy/${toy._id}`}>Details</Link> | 
        <Link to={`/toy/edit/${toy._id}`}>Edit</Link> 

    </article>
}

