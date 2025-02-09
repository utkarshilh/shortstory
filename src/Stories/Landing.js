import React, { useState, useEffect } from "react";
import axios from "axios";
import StoryCard from './StoryCard';

export default function Landing() {
    const [storiesList, setStoriesList] = useState([])

    useEffect(() => {
        async function fetchStories() {
            try {
                const response = await axios.get("http://localhost:9000/api/stories")
                setStoriesList(response.data)
            } catch (error) {
                console.log(error)
                alert("Unable to fetch")
            }
        }
        fetchStories();
    }, [])


    return (
        <div className="container mt-4">
            <h1 className="text-center mb-4">Story Collection</h1>
            <div className="row">
                {storiesList.map((story, index) => (
                    <div className="col-12" key={index}>  {/* Takes full width on all screen sizes */}
                        <StoryCard
                            title={story.title}
                            author={story.author}
                            moral={story.moral}
                            story={story.story}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}
