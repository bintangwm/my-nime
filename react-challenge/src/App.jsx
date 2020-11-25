import React from 'react'
import { AnimeDetails, AnimeList, AnimeSearch, AnimeFavorites } from './pages/index'
import { Navbar } from './components/index'
import { Switch, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store'

function App() {

  return (
    <Provider store={ store }>
      <Switch>
        <Route exact path="/">
          <Navbar/>
          <AnimeList/>
        </Route>
        <Route path="/anime/:id">
          <Navbar/>
          <AnimeDetails/>
        </Route>
        <Route path="/favorites">
          <Navbar/>
          <AnimeFavorites/>
        </Route>
        <Route path="/anime-search/:query">
          <Navbar/>
          <AnimeSearch/>
        </Route>
      </Switch>
    </Provider>
  )
}

export default App