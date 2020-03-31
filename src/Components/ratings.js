import React from 'react';

const Ratings = ({ title, getRatings }) => {
    return (
        <div>
            <h1>{title}</h1>
            <table>
                <tr>
                    <th>#</th>
                    <th>Ratings</th>
                </tr>
                {getRatings().map((obj, index) => {
                    return (
                        <tr>
                            <td>{index + 1}</td>
                            <td><b>{obj.Source} : </b>{obj.Value}</td>
                        </tr>
                    )
                })}
            </table>
        </div>
    );
}

export default Ratings