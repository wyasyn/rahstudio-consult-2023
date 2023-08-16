import './Projects.scss'
import { Title } from '../../components'
import { NavLink, Outlet } from 'react-router-dom'

function Projects() {
  return (
    <section id="projects" className="projects">
        <div className="projects-container container">
            <Title
            title='Projects'
             />
              <nav>
                    <ul className='flex'>
                        <li>
                            <NavLink className="P-link" to="/">Architecture</NavLink>
                        </li>
                        <li>
                            <NavLink className="P-link" to="interior">Interior</NavLink>
                        </li>
                        <li>
                            <NavLink className="P-link" to="construction">Construction</NavLink>
                        </li>
                    </ul>
                </nav>
             <div className="projects-content">
               <Outlet />
             </div>
        </div>
    </section>
  )
}

export default Projects