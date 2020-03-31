import React from 'react';

const Movies = ({ titles, setMovieSelection, setDisplayMode }) => {
    return (
        <div className='Movies'>
            <table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Navigation</th>
                    </tr>
                </thead>
                <tbody>
                    {titles.map((titleName, index) => {
                        return (
                            <tr>
                                <td>{index + 1}</td>
                                <td>{titleName}</td>
                                <td>
                                    <button
                                        className='btn btn-people'
                                        name={titleName}
                                        value='People'
                                        onClick={(e) => {
                                            setMovieSelection(e.target.name);
                                            setDisplayMode(e.target.value)
                                        }}
                                    >People</button>
                                    <button
                                        className='btn btn-poster'
                                        name={titleName}
                                        value='Poster'
                                        onClick={(e) => {
                                            setMovieSelection(e.target.name);
                                            setDisplayMode(e.target.value)
                                        }}
                                    >Poster</button>
                                    <button
                                        className='btn btn-ratings'
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
                </tbody>
            </table>
        </div>
    );
}

export default Movies