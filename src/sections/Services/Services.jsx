import './Services.scss'
import {Title, Service} from '../../components'
import { ServicesData } from '../../constants/Data'


function Services() {
  return (
    <section id="services" className="services">
        <div className="services-container container">
            <Title 
                title='Services'
             />
             <div className="services-content">
                {
                    ServicesData.map((data, index) => (
                        <Service
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

export default Services