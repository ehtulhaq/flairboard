import React from 'react'
import { NavigationMain } from '../../components'

/**
 * BasePage class that is 'extended' by every page
 * includes common components that appear on all pages
 * 
 * @author [Ehtesham Mohammed]
 */
export default class BasePage extends React.Component {
  render () {
    return (
      <div>
        <NavigationMain />
      </div>
    )
  }
}
