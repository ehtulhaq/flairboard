import { BasePage } from '../../pages'
import React from 'react'

/**
 * DashboardPage is a sample dashboard page that includes BasePage
 * 
 * @author [Ehtesham Mohammed]
 */
export default class DashboardPage extends React.Component {
  render () {
    return (
      <div>
        {/* Adding basePage to inherit everything that is common */}
        <BasePage />
        <h1>Welcome To DashboardPage</h1>
      </div>
    )
  }
}
