import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'

function Navbar() {
  const [searchQuery, setSearchQuery] = useState('') 
  const history = useHistory()
  function handleSearchQuery(e) {
    setSearchQuery(e.target.value)
  } 

  function goToAnimeList(e) {
    e.preventDefault()
    history.push(`/`)
  }

  function goToSearchAnime(e) {
    e.preventDefault()
    history.push(`/anime-search/${searchQuery}`)
  }

  return (
    <nav className="navbar navbar-light bg-light">
      <a onClick={ (e) => goToAnimeList(e) } href="/#" className="navbar-brand" >Nime Site</a>
      <form onSubmit={ (e) => goToSearchAnime(e) } className="form-inline">
        <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"
          value={ searchQuery }
          onChange={(e) => handleSearchQuery(e)}
        />
        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
      </form>
    </nav>
  )
}

export default Navbar