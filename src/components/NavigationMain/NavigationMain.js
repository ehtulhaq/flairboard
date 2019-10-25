import React from 'react'
import { Link } from 'react-router-dom'

/**
 * Navigation component that sticks on the top with all navigation links
 *
 * @author [Ehtesham Mohammed]
 */
export default class NavigationMain extends React.Component {
  render () {
    return (
      <div>
        <nav className='navbar navbar-expand-lg navbar-dark bg-primary'>
          <span className='navbar-brand'>Toist</span>
          <div className='collapse navbar-collapse' id='navbarNav'>
            <ul className='navbar-nav'>
              <li className='nav-item'>
                <Link to='/' className='nav-link'>
                  Dashboard
                </Link>
              </li>
              <li className='nav-item'>
                <Link to='/profile' className='nav-link'>
                  Profile
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    )
  }
}
