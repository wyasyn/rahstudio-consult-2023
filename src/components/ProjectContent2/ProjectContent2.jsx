import { Project } from '../../components'
import { Project2 } from '../../constants/Data'

function ProjectContent2() {
  return (
     <>
        {
            Project2.map((data, index) => (
                <Project
                key={index}
                {...data}
                 />
            ))
        }
    </>
  )
}

export default ProjectContent2