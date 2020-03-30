import React from 'react';

const Movies = ({ titles, setMovieSelection, setDisplayMode }) => {
    return (
        <div className='Movies'>
            <table>
                <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Navigation</th>
                </tr>
                {titles.map((titleName, index) => {
                    return (
                        <tr>
                            <td>{index + 1}</td>
                            <td>{titleName}</td>
                            <td>
                                <button
                                    name={titleName}
                                    value='People'
                                    onClick={(e) => {
                                        setMovieSelection(e.target.name);
                                        setDisplayMode(e.target.value)
                                    }}
                                >People</button>
                                <button
                                    name={titleName}
                                    value='Poster'
                                    onClick={(e) => {
                                        setMovieSelection(e.target.name);
                                        setDisplayMode(e.target.value)
                                    }}
                                >Poster</button>
                                <button
                                    name={titleName}
                                    value='Ratings'
                                    onClick={(e) => {
                                        setMovieSelection(e.target.name);
                                        setDisplayMode(e.target.value)
                                    }}
                                >Ratings</button>
                            </td>
                        </tr>
                    )
                })}
            </table>
        </div>
    );
}

export default Movies