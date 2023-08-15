import './Quality.scss'
import  PropTypes  from 'prop-types'

function Quality({icon, title, description}) {
  return (
    <article className='quality'>
        <i className="icon">
            {icon}
        </i>
        <h3 className="quality-title">
            {title}
        </h3>
        <p className="description">
            {description}
        </p>
    </article>
  )
}

Quality.propTypes = {
    icon: PropTypes.any.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
}

export default Quality