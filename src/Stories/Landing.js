import React from 'react';
import StoryCard from './StoryCard';

export default function Landing() {
    const stories_list = [
        {
            title: "The Lion and the Mouse",
            author: "Aesop",
            moral: "Kindness is never wasted.",
            story: "A lion spares a mouse and later, the mouse repays the kindness by freeing the lion from a trap."
        },
        {
            title: "The Tortoise and the Hare",
            author: "Aesop",
            moral: "Slow and steady wins the race.",
            story: "A hare mocks a slow tortoise. They race, and the tortoise wins due to perseverance."
        },
        {
            title: "The Boy Who Cried Wolf",
            author: "Aesop",
            moral: "Lying breaks trust.",
            story: "A shepherd boy falsely cries wolf for fun. When a real wolf appears, no one believes him."
        },
        {
            title: "The Ant and the Grasshopper",
            author: "Aesop",
            moral: "Work today for a better tomorrow.",
            story: "An ant works hard in summer storing food, while a grasshopper wastes time. In winter, the grasshopper suffers."
        }
    ];

    return (
        <div className="container mt-4">
            <h1 className="text-center mb-4">Story Collection</h1>
            <div className="row">
                {stories_list.map((story, index) => (
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
