import { Route, Routes } from 'react-router-dom'
import LayOut from './LayOut/LayOut'
import './App.scss'

function App() {


  return (
      <div  className='App'>
          <Routes>
            <Route path='/' element={ <LayOut /> }>
            </Route>
          </Routes>
      </div>
  )
}

export default App
