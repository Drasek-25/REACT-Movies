import React from 'react';

const Poster = ({ title, getPoster }) => {
    return (
        <div>
            <h1>{title}</h1>
            <h2>Movie Poster</h2>
            <img src={getPoster()}></img>
        </div>
    );
}

export default Poster