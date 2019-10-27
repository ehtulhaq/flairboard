import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { DashboardPage, LoginPage } from '../pages'

/**
 * Place to construct all application routes
 *
 * @author [Ehtesham Ul Haq]
 */
export default class ApplicationRoutes {
  getRoutes() {
    return (
      <Router>
        <Route exact path='/' component={LoginPage} />
        <Route exact path='/dashboard' component={DashboardPage} />
        <Route exact path='/tasks' component={DashboardPage} />
        <Route exact path='/reports' component={DashboardPage} />
        <Route exact path='/templates' component={DashboardPage} />
        <Route exact path='/settings' component={DashboardPage} />
        <Route exact path='/help' component={DashboardPage} />
      </Router>
    )
  }
}
