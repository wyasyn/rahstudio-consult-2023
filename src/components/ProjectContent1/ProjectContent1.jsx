import { Project } from '../../components'
import { Project1 } from '../../constants/Data'

function ProjectContent1() {
  return (
    <>
        {
            Project1.map((data, index) => (
                <Project
                key={index}
                {...data}
                 />
            ))
        }
    </>
  )
}

export default ProjectContent1