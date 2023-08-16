import { Project } from '../../components'
import { Project3 } from '../../constants/Data'

function ProjectContent3() {
  return (
    <>
    {
        Project3.map((data, index) => (
            <Project
            key={index}
            {...data}
             />
        ))
    }
</>
  )
}

export default ProjectContent3