import { motion } from 'framer-motion'
import './Testimony.scss'
import PropTypes from 'prop-types'

function Testimony({ image, name, title, review }) {
  return (
    <motion.article
        whileInView={{ x: [200,0], opacity: [0, 1] }}
        transition={{ duration: 1, ease: 'easeInOut' }}
     className="testimony">
        <div className="col-1">
            <div className="image">
                <img src={image} alt="image" />
                <p className="info">
                    <span className="name">
                        {name}
                    </span>
                    <span className="title">
                        {title}
                    </span>
                </p>
            </div>
        </div>
        <div className="col-2">
            {review}
        </div>
    </motion.article>
  )
}
Testimony.propTypes = {
    image: PropTypes.any.isRequired,
    name: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    review: PropTypes.string.isRequired,
}

export default Testimony