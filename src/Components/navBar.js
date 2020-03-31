import React from 'react';

const NavBar = ({ handleSetDisplayMode }) => {
    return (
        <div className='NavBar'>
            <button
                className='btn btn-movies'
                name='Movies'
                onClick={handleSetDisplayMode}
            >Movies</button>
            <button
                className='btn btn-people'
                name='People'
                onClick={handleSetDisplayMode}
            >People</button>
            <button
                className='btn btn-poster'
                name='Poster'
                onClick={handleSetDisplayMode}
            >Poster</button>
            <button
                className='btn btn-ratings'
                name='Ratings'
                onClick={handleSetDisplayMode}
            >Ratings</button>
        </div>
    );
}

export default NavBar