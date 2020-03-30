import React from 'react';

const NavBar = ({ handleSetDisplayMode }) => {
    return (
        <div className='NavBar'>
            <button
                className='btn btn-primary submit-button'
                name='Movies'
                onClick={handleSetDisplayMode}
            >Movies</button>
            <button
                className='btn btn-primary submit-button'
                name='People'
                onClick={handleSetDisplayMode}
            >People</button>
            <button
                className='btn btn-primary submit-button'
                name='Poster'
                onClick={handleSetDisplayMode}
            >Poster</button>
            <button
                className='btn btn-primary submit-button'
                name='Ratings'
                onClick={handleSetDisplayMode}
            >Ratings</button>
        </div>
    );
}

export default NavBar