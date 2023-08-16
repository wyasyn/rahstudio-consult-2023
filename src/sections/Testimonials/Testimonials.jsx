import './Testimanials.scss'
import { Testimony, Title } from '../../components'
import { Reviews } from '../../constants/Data'
import { useState } from 'react'
import { FaArrowLeft, FaArrowRight, FaCircle } from 'react-icons/fa';


function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

    const updateIndex = (newIndex) => {
    if (newIndex < 0) {
      newIndex = 0;
    }
    else if (newIndex >= Reviews.length) {
      newIndex = Reviews.length - 1;
    }
    setActiveIndex(newIndex)
  }

  return (
    <section id="testimonials" className="testimonials">
        <div className="testimonials-container container">
            <Title
            title='Testimonials'
             />
             <div className="testimonials-content">
                {
                    Reviews.map((data, index) => (
                      <div 
                          key={index}>
                            { index === activeIndex && (
                        <Testimony
                        {...data}
                         />
                           )
                          }
                      </div>
                    ))
                }
             </div>
               <div className="arrow-left" 
        onClick={()=>{
          updateIndex(activeIndex - 1)
        }}
        >
          <FaArrowLeft />
        </div>
        <div className="indicators">
          {
            Reviews.map((data,index) => (
              <div className={index===activeIndex? "test-btn active" : "test-btn"} key={index} 
              onClick={()=>{
                updateIndex(index)
              }}
              >
                <FaCircle />
              </div>
            ))
          }
        </div>
        <div className="arrow-right"
         onClick={()=>{
          updateIndex(activeIndex + 1)
        }}
        >
            <FaArrowRight />
        </div>
        </div>
    </section>
  )
}

export default Testimonials