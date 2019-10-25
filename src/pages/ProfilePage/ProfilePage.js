import { BasePage } from '../../pages'
import React from 'react'

/**
 * ProfilePage is a sample profile page that includes BasePage
 * 
 * @author [Ehtesham Mohammed]
 */
export default class ProfilePage extends React.Component {
  render () {
    return (
      <div>
        {/* Adding basePage to inherit everything that is common */}
        <BasePage />
        <h1>Welcome To your Profile Page</h1>
      </div>
    )
  }
}
