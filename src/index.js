import ReactDOM from 'react-dom'
import { ApplicationRoutes } from './routes'
import { initializeIcons } from 'office-ui-fabric-react'

/**
 * Getting the application routes where all the routes are defined and including it to the main dom
 *
 * @author [Ehtesham Ul Haq]
 */
initializeIcons()
let applicationRoutes = new ApplicationRoutes()
ReactDOM.render(applicationRoutes.getRoutes(), document.getElementById('root'))
