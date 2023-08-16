import './Service.scss'
import PropTypes from 'prop-types'


function Service({image, icon, title, description}) {
  return (
    <article className="service">
        <div className="service-photo">
            <img src={image} alt="service photo" />
        </div>
        <div className="service-content">
            <div className="icon center">
                {icon}
            </div>
            <h4>{title}</h4>
            <p>
                {description}
            </p>
        </div>
    </article>
  )
}
Service.propTypes = {
    image: PropTypes.any.isRequired,
    icon: PropTypes.any.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
}

export default Service