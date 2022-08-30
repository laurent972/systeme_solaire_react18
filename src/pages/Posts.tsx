import { useEffect, useState } from "react";
import PostsList from "../components/PostsList";
import {RootObject} from '../interfaces'

const Posts : React.FC = ()=>{

    const [allPosts, setAllPosts] = useState <RootObject | null>(null);

    useEffect(() => {
        const getPosts = async() =>{
            const response = await fetch('https://api.le-systeme-solaire.net/rest/bodies/')
            const data: RootObject = await response.json()  
            setAllPosts(data)
        };
        getPosts();
    },[])

    return (
        <div className="post-container">
            <h1>page principale</h1>
            <div style={{display:'flex', flexDirection:'column'}}>                
                <PostsList allPosts = {allPosts} />
            </div>
        </div>
    )
};

export default Posts;