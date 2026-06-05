import './App.css';
import { BrowserRouter , Routes , Route } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import MembersPage from './Pages/MembersPage';
import ProfilePage from './Pages/ProfilePage';
function App (){
  return(
    <BrowserRouter>
    <div className='App'>
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/members' element={<MembersPage/>}/>
          <Route path='/profile' element={<ProfilePage/>}/>
        </Routes>
    </div>
    </BrowserRouter>
  )
}
export default App 