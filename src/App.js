import './App.css';
import axios from 'axios'
import { useState } from 'react';
import { useEffect } from 'react';


function App() {
  const [user , setUser]=useState({})
  const [repo , setRepo]=useState(null)
  const [usergit , setUsergit] = useState('ahdajj')
  const [search , setSearch] = useState('')


  useEffect(()=>{
    axios.get(`https://api.github.com/users/${usergit}?client_id=eee86342c449de584006&client_secret=0bbf33bb85e02e46d2b94cd7639a77d025dcb28d&sort=created`)
   .then (res => {
         axios.get(`${res.data.repos_url}`)
          .then (res2 => setRepo(res2.data))
          .catch (err => console.log(err))
          setUser(res.data)  
    })
         
   .catch (err => console.log(err))
},[usergit]);

const userset = (e) =>{
  setUsergit(search)
  e.preventDefault()
}

  return (
    <div className="App">

      <div className='input'>
        <h4>please type user name to view his page </h4>
      <form >
        <input name='search' value={search} onChange={ e => setSearch(e.target.value)} />
        <button type='submit'onClick={(e)=> userset(e)} >submit</button>
      </form>
      </div>

      <div className='profile'>
          <img src={user?.avatar_url} alt='no image to display' />
          <div>
              <h4>User Name: {user?.login} </h4>
              <h4>User ID:  {user?.id}</h4>
              {user?.name && <h4>User Fullname: {user?.name}</h4> }
              <h4>Location: {user?.location}</h4>
              <h4>Email Adress: {user?.email}</h4>
          </div>
      </div>

      <h2>User Reposotories :</h2>

      <div className='repos'>
          <ul className='repos-list'>
            {repo?.map((item,index) => 
            <li key={item?.id}><h3>{item?.name} : </h3> {item.description ? item.description :'no description availabel' }</li>
            )}
          </ul>
      </div>

    </div>
    
  );
}

export default App;
