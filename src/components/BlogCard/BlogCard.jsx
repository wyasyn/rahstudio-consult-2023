import './BlogCard.scss'
import PropTypes from 'prop-types'
import { FaArrowRight } from 'react-icons/fa'

function BlogCard({ image, description, link }) {
  return (
    <article className="blog-card">
        <img src={image} alt="image" className="image" />
        <div className="content">
            <p>
                {description}
            </p>
            <a href={link} className="link">Read more <FaArrowRight /> </a>
        </div>
    </article>
  )
}

BlogCard.propTypes = {
    image: PropTypes.any.isRequired,
    description: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired
}

export default BlogCard