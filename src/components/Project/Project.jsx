import './Project.scss'
import { PropTypes } from 'prop-types'

function Project({image}) {
  return (
    <a href={image} className='project' target='_blank' rel='noreferrer'>
        <img src={image} alt="image" />
    </a>
  )
}

Project.propTypes = {
    image: PropTypes.string.isRequired,
}

export default Project