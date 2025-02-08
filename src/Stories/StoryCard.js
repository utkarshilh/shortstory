import React from 'react'

export default function StoryCard(res) {
    console.log(res)
    return (
        <div>
            <div className="card m-3 shadow-sm">
                <div className="card-body">
                    <h2 className="card-title">{res.title}</h2>
                    <h4 className="text-muted">By:{res.author}</h4>
                    <p className="card-text">{res.story}</p>
                    <p className="fw-bold">Moral: {res.moral}</p>
                </div>
            </div>
        </div>
    )
}
