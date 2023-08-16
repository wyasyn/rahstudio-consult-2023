import './Title.scss'
import PropTypes from 'prop-types'

function Title({title}) {
  return (
    <article className='main-title'>
        <h2>
            {title}
        </h2>
    </article>
  )
}
Title.propTypes = {
    title: PropTypes.string.isRequired
}

export default Title