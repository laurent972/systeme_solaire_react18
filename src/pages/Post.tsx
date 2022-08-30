import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {Body} from '../interfaces';
import './posts.css';
import PlanetDetails from '../components/PlanetDetails';

type PlanetParams = {
    id : string;
}

const Post = () => {

    const {id} = useParams<PlanetParams>();
    const [onePlanet,setOnePlanet] = useState<Body | null>(null);

    console.log(onePlanet);
    
    useEffect(()=>{
       const getThePlanet = async () => {
            const response = await fetch(`https://api.le-systeme-solaire.net/rest/bodies/${id}`)
            const data: Body = await response.json()
            setOnePlanet(data)
        }
        getThePlanet()
    },[id])
    
    return (
        <div>
            <div className="post-container">
                <h1>Détail Publication</h1>
                <PlanetDetails onePlanet={onePlanet} />
            </div>
        </div>
    );
};

export default Post;