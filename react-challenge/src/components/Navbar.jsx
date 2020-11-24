import React from 'react'

function Navbar(props) {
  const { goToSearchAnime, handleSearchQuery, searchQuery, changePage } = props

  return (
    <nav className="navbar navbar-light bg-light">
      <a onClick={ (e) => changePage(e, 'AnimeList') } href="/#" className="navbar-brand" >Nime Site</a>
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