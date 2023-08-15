import './Hero.scss'

function Hero() {
  return (
    <div className='hero'>
        <div className="hero-container container">
            <h2>
                Architects with <br /> a different approach
            </h2>
            <div className="hero-cta flex">
                <a href="#projects" className="btn">Our Projects</a>
                <a href="#contact" className="btn secondary">Contact Us</a>
            </div>
        </div>
    </div>
  )
}

export default Hero