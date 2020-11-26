import React from 'react'
import { AnimeDetails, AnimeList, AnimeSearch, AnimeFavorites } from './pages/index'
import { Navbar } from './components/index'
import { Switch, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store'
import './App.css';

function App() {

  return (
    <Provider store={ store }>
      <Navbar/>
      <Switch>
        <Route exact path="/">
          <AnimeList/>
        </Route>
        <Route path="/anime/:id">
          <AnimeDetails/>
        </Route>
        <Route path="/favorites">
          <AnimeFavorites/>
        </Route>
        <Route path="/anime-search/:query">
          <AnimeSearch/>
        </Route>
      </Switch>
    </Provider>
  )
}

export default App