import React from 'react';
import { useNavigate } from 'react-router-dom';
import {RootObject} from '../interfaces';

import './postsList.css'

interface PostsListProps{
    allPosts: RootObject | null
}

const PostsList:React.FC<PostsListProps> = ({allPosts}) => {
  
    console.log(allPosts?.bodies);

    const navigate = useNavigate();
    
    return (
            <>
                 <ul className="posts">
                  {allPosts?.bodies.map(planet =>(
                    <li key={planet.id} onClick={()=>navigate(`./${planet.id}`)}>
                        <h2>{planet.name}</h2>
                        <p>Voir</p>
                    </li>
                  ))}
                    
                </ul>
            </>
           
       
    );
};

export default PostsList;