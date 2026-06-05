import './App.css';
import { useState , useEffect } from 'react';
import axios from 'axios';

function App() {
  const [qute, setqute] = useState('');

  const fetchData =()=>{ 
    axios.get(`https://dummyjson.com/quotes/random`)
   .then((res)=>{
     console.log(res.data)
     setqute(res.data)
    })
     
   .catch((err)=>{console.log(err)})}

  useEffect(()=>{
      fetchData()    
  }
,[])

const handleclick=()=>{
  fetchData()  
}
  return (
    <div className="App">
      <button onClick={handleclick}><span>Generate quote</span></button>
      <h1>{qute.quote}</h1>
      <p>Written by : {qute.author}</p>
    </div>
  );
}

export default App;


