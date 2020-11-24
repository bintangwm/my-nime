import React from 'react'

function Navbar(props) {
  const { searchAnime, proceedSearchAnime, changeSearchAnime } = props

  return (
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand" >Nime Site</a>
      <form onSubmit={ (e) => proceedSearchAnime(e) } className="form-inline">
        <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"
          value={ searchAnime }
          onChange={(e) => changeSearchAnime(e)}
        />
        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
      </form>
    </nav>
  )
}

export default Navbar