import ReactDOM from 'react-dom'
import { ApplicationRoutes } from './routes'

/**
 * Getting the application routes where all the routes are defined and including it to the main dom
 *
 * @author [Ehtesham Mohammed]
 */
let applicationRoutes = new ApplicationRoutes()
ReactDOM.render(applicationRoutes.getRoutes(), document.getElementById('root'))
