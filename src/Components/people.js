import React from 'react';

const People = ({ title, getPeople }) => {
    let index = 1
    const people = getPeople()
    return (
        <div>
            <h1>{title}</h1>
            <table>
                <tr>
                    <th>#</th>
                    <th>People</th>
                </tr>
                {people.Director.map((person) => {
                    return (
                        <tr>
                            <td>{index++}</td>
                            <td><b>Director: </b> {person}</td>
                        </tr>
                    )
                })}
                {people.Writer.map((person) => {
                    return (
                        <tr>
                            <td>{index++}</td>
                            <td><b>Writer: </b> {person}</td>
                        </tr>
                    )
                })}
                {people.Actors.map((person) => {
                    return (
                        <tr>
                            <td>{index++}</td>
                            <td><b>Actor: </b> {person}</td>
                        </tr>
                    )
                })}
            </table>
        </div>
    );
}

export default People