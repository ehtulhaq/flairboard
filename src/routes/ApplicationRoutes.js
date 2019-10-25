import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { DashboardPage, ProfilePage } from '../pages'

/**
 * Place to construct all application routes
 *
 * @author [Ehtesham Mohammed]
 */
export default class ApplicationRoutes {
  getRoutes () {
    return (
      <Router>
        <Route exact path='/' component={DashboardPage} />
        <Route exact path='/profile' component={ProfilePage} />
      </Router>
    )
  }
}
