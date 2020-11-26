import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { NavLink } from 'react-router-dom'

function Navbar() {
  const [searchQuery, setSearchQuery] = useState('') 
  const history = useHistory()
  function handleSearchQuery(e) {
    setSearchQuery(e.target.value)
  } 

  function goToSearchAnime(e) {
    e.preventDefault()
    history.push(`/anime-search/${searchQuery}`)
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <span className="navbar-brand" >@nime</span>
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav">
          <li className="nav-item">
            <NavLink exact to="/" className="nav-link">
              Anime List
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/favorites" className="nav-link">
              Favorites
            </NavLink></li>
        </ul>
        <form onSubmit={ (e) => goToSearchAnime(e) } className="form-inline">
          <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"
            value={ searchQuery }
            onChange={(e) => handleSearchQuery(e)}
            />
          <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
        </form>
      </div>
    </nav>
  )
}

export default Navbar