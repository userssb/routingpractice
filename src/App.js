import {Route, Switch} from 'react-router-dom'
// import {Fragment} from 'react'

import './App.css'

import About from './components/About'
import Contact from './components/Contact'
import Header from './components/Header'
import Home from './components/Home'
import NotFound from './components/NotFound'

const App = () => (
  <div className="bg-cont">
    <div className="app-cont">
      <Header />
      <div className="app-body">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Contact} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </div>
  </div>
)
export default App
