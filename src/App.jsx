import { Route, Routes } from 'react-router-dom'
import LayOut from './LayOut/LayOut'
import './App.scss'
import { ProjectContent1, ProjectContent2, ProjectContent3 } from './components'

function App() {


  return (
      <div  className='App'>
          <Routes>
            <Route path='/' element={ <LayOut /> }>
              <Route path='/'>
                <Route index element={ <ProjectContent1 /> } />
                <Route path='interior' element={ <ProjectContent2 /> } />
                <Route path='construction' element={ <ProjectContent3 /> } />
              </Route>
            </Route>
          </Routes>
      </div>
  )
}

export default App
