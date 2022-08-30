import React from 'react';
import {Body} from '../interfaces';
import './postDetails.css'

interface PlanetDetailsProps {
    onePlanet : Body | null
}

const PlanetDetails: React.FC<PlanetDetailsProps> = ({onePlanet}) => {

    console.log(onePlanet?.name);
    

    return (
        <div className='post'>
            <h1>{onePlanet?.name}</h1>
        </div>
    );
};

export default PlanetDetails;