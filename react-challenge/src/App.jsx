import React from 'react'
import { AnimeDetails, AnimeList, AnimeSearch } from './pages/index'
import { Navbar } from './components/index'
import { Switch, Route } from 'react-router-dom'

function App() {

  return (
    <Switch>
      <Route exact path="/">
        <Navbar/>
        <AnimeList/>
      </Route>
      <Route path="/anime/:id">
        <Navbar/>
        <AnimeDetails/>
      </Route>
      <Route path="/anime-search/:query">
        <Navbar/>
        <AnimeSearch/>
      </Route>
    </Switch>
  )
}

export default App