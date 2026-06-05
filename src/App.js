import './App.css';
import { useState } from 'react';



function App() {
const [title,settitle]=useState('')
const [description,setdescription]=useState('')
const [Todos,setTodos]=useState([])
const [filterTodo , setfilterTodo]= useState([])

const ChangeTitle=(e)=>{
  settitle(e.target.value)
}

const Changedescription=(e)=>{
  setdescription(e.target.value)
}

const Submit=(e)=>{
  e.preventDefault()
  setTodos((prev)=>([...prev,{title:title,description:description ,iscomplete:false }]))
  settitle('')
  setdescription('')
}

const FilterHandler =()=>{
    const newtodo = Todos.filter((todo)=> todo.iscomplete === true)
    setfilterTodo(newtodo)
}

const DoneHandler = (index)=>{
  let newTodo = [...Todos]
  newTodo[index]={...newTodo[index] , iscomplete:!newTodo[index].iscomplete}
  setTodos(newTodo)
 console.log(newTodo[index])
} 
  return (
    <div className="App">
      <form>
        <input
           type="text"
           placeholder="Task Title" 
           name='Title' value={title} 
           onChange={ChangeTitle} />
        <input 
           type="text"
           placeholder="Task description"
           name='description' value={description} 
           onChange={Changedescription} />

        <button onClick={Submit}>Submit</button>
      </form>
      <button onClick={FilterHandler} >Filter by Done</button>
      <button onClick={()=> setfilterTodo([])} >Clear Filter</button>
      {filterTodo.length === 0 ?
      <div>
        {Todos?.map((item ,index)=>{
          return(
            <div className='Todo' key={index}>
              <div>
                <h1 >{item.title}:</h1>
                <p>{item.description}</p>
              </div>
              <input 
                  type='checkbox' 
                  name='iscomplete' 
                  checked={item.iscomplete} 
                  onChange={()=> DoneHandler(index)}/>
            </div>

          )
        })}
      </div>
      :
       <div>
        {filterTodo?.map((item ,index)=>{
          return(
            <div className='Todo'>
              <div>
                <h1 key={index}>{item.title}:</h1>
                <p>{item.description}</p>
              </div>
              <input type='checkbox' name='iscomplete' checked={item.iscomplete}/>
            </div>
          )
        })}
      </div>
      }
    </div>
  );
}


export default App;
