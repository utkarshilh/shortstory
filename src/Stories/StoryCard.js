import { response } from 'express';
import React from 'react';


export default function StoryCard(res) {

    // async function generateAudio({ title, author, story, moral }) {
    //     console.log("this is pressed detail", title, author, story, moral)
    //     try {
    //         response = await axios.post('/generateAudio', {
    //             title,
    //             author,
    //             story,
    //             moral,
    //         });
    //         console.log('this is the data from the backend ', response)

    //     } catch (error) {
    //         console.log("failed to send data at backend")
    //     }
    // }
    // console.log(res)
    return (
        <div>
            <div className="card m-3 shadow-sm">
                <div className="card-body">
                    <h2 className="card-title">{res.title}</h2>
                    <h4 className="text-muted">By:{res.author}</h4>
                    <p className="card-text">{res.story}</p>
                    <p className="fw-bold">Moral: {res.moral}</p>
                    {/* <button onClick={() => generateAudio(title, author, story, moral)}>Click Here to Generate Audio </button> */}
                </div>
            </div>
        </div>
    )
}
