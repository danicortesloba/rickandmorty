import { useEffect, useState } from "react";
import { useLocation } from 'react-router-dom';
import axios from "axios";

const Card = () => {
const location = useLocation();
const { type, id } = location.state || {};
const [info, setInfo] = useState({})


    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`https://rickandmortyapi.com/api/${type}/${id}`);
                setInfo(response.data)
                console.log(info)
                
            } catch (error) {
                console.error('Error al obtener la imagen:', error);
            } 
        }
        fetchData()
       }, [id, type])


    return (
        <div className="card">
            <h1>{info.name}</h1>
            {type === "character" &&
            <div>
            <img src={info.image} alt={info.name} />
            <h2>Species: {info.species}</h2>
            <h2>Gender: {info.gender}</h2>
            </div>}
            {type === "location" &&
            <div>
            <h2>Type: {info.type}</h2>
            <h2>Dimension: {info.dimension}</h2>
            </div> }
            {type === "episode" &&
            <div>
            <h2>Name: {info.name}</h2>
            <h2>Air date: {info.air_date}</h2>
            <h2>Episode: {info.episode}</h2>
            </div> }
        </div>
        
    )
}
 
export default Card