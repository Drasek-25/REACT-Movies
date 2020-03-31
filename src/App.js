import React, { useState } from 'react';
import './App.css';
import Data from './data'
import Movies from './Components/movies'
import People from './Components/people'
import Poster from './Components/poster'
import Ratings from './Components/ratings'
import NavBar from './Components/navBar'

function App() {
  const [displayMode, setDisplayMode] = useState('Movies')
  const [movieSelection, setMovieSelection] = useState('')

  const handleSetDisplayMode = (e) => {
    movieSelection === '' && alert('Please select a movie from the navigation bar below')
    movieSelection !== '' && setDisplayMode(e.target.name)
  }

  const movieName = Data.map(obj => obj.Title)

  const getCurrentMovieObj = () => {
    const movieObj = Data.filter(obj => obj.Title === movieSelection)
    return movieObj[0]
  }

  const getPoster = () => {
    const movieObj = getCurrentMovieObj()
    return movieObj.Poster
  }
  const getPeople = () => {
    const movieObj = getCurrentMovieObj()
    const people = {
      Director: movieObj.Director.split(','),
      Writer: movieObj.Writer.split(','),
      Actors: movieObj.Actors.split(',')
    }
    return people
  }
  const getRatings = () => {
    const movieObj = getCurrentMovieObj()
    return movieObj.Ratings
  }

  const getDisplay = () => {
    switch (displayMode) {
      case 'Movies':
        return <Movies
          titles={movieName}
          setDisplayMode={setDisplayMode}
          setMovieSelection={setMovieSelection}

        />;
        break;
      case 'People':
        return <People
          title={movieSelection}
          getPeople={getPeople}
        />;
        break;
      case 'Poster':
        return <Poster
          title={movieSelection}
          getPoster={getPoster}
        />;
        break;
      case 'Ratings':
        return <Ratings
          title={movieSelection}
          getRatings={getRatings}
        />;
        break;
      default:
        return <Movies />;
        break;
    }
  }
  return (
    <div className="App">
      <div className="Wrapper">
        <NavBar handleSetDisplayMode={handleSetDisplayMode} />
        <div className="Display">
          {getDisplay()}
        </div>
      </div>
    </div >
  );
}

export default App;
