import { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
const Navbar = () => {
    const [id, setId] = useState("")
    const [type, setType] = useState("character")
    const navigate = useNavigate()

    const goToCard = (e) =>{
        e.preventDefault();
        navigate(`/${type}/${id}`, { state: { id, type} });
    }

    return (
        <form className="navbar" onSubmit={goToCard}>
            <label htmlFor="id">
                <input
                placeholder="id"
                className="input"
                id="id"
                type="text"
                name="id"
                onChange={(e)=> setId(e.target.value)}
                value={id}
                />
            </label>
            <label htmlFor="type">
                <select
                className="input"
                id="type"
                name="type"
                onChange={(e) => setType(e.target.value)}
                value={type}
                >
                <option value="character">Character</option>
                <option value="location">Location</option>
                <option value="episode">Episode</option>
                </select>
            </label>
            <button
            className="submit"
            type="submit"
            >Submit</button>
            <Link className="link" to="/">Home</Link>
        </form>
    )
}

export default Navbar