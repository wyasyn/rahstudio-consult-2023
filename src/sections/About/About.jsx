import './About.scss'
import { Quality, Title } from '../../components'
import { QualitiesData } from '../../constants/Data'
import {images} from '../../constants/images'

function About() {
  return (
    <section id="about" className="about">
        <div className="about-container container">
            <div className="qualities">
                {
                    QualitiesData.map((data, index) => (
                        <Quality
                        key={index}
                        {...data}
                         />
                    ))
                }
            </div>
            <div className="about-content">
                <Title
                title='About Us'
                 />
                 <div className="row">
                 <div className="col-1">
                    <div className="about-info">
                        <h3>
                        Empowering Spaces, Inspiring Design: Unveiling RAHSTUDIO.
                        </h3>
                        <p>
                         Welcome to RahStudio, where innovation and creativity converge to shape remarkable environments that leave an indelible mark on the world. With a passion for design excellence and an unwavering commitment to our clients, we are more than architects, we are the curators of dreams turned into reality.
                        </p>
                    </div>
                </div>
                <div className="col-2">
                    <img src={images.about} alt="about pic" />
                </div>
                 </div>
            </div>
        </div>
    </section>
  )
}

export default About