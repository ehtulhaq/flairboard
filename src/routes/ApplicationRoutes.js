import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { LoginPage, BoardDetailsPage, BoardsPage } from '../pages'

/**
 * Place to construct all application routes
 *
 * @author [Ehtesham Ul Haq]
 */
class ApplicationRoutes {
  getRoutes() {
    return (
      <Router>
        <Route exact path='/' component={LoginPage} />
        <Route exact path='/boards' component={BoardsPage} />
        <Route exact path='/board-details' component={BoardDetailsPage} />
        <Route exact path='/chat' component={BoardsPage} />
        <Route exact path='/reports' component={BoardsPage} />
        <Route exact path='/templates' component={BoardsPage} />
        <Route exact path='/settings' component={BoardsPage} />
        <Route exact path='/help' component={BoardsPage} />
      </Router>
    )
  }
}

export default ApplicationRoutes