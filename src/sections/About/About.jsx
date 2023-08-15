import './About.scss'
import { Quality } from '../../components'
import { QualitiesData } from '../../constants/Data'

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
        </div>
    </section>
  )
}

export default About