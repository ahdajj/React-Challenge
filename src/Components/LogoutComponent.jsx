import { useNavigate } from "react-router-dom"

export default function LogoutComponent() {
    const navigate=useNavigate()
    const HandleClick=(e)=>{
        e.preventDefault()
        localStorage.removeItem('Logged')
        navigate('/')
    }
  return (
    <div className='Logout'>
      <button onClick={HandleClick}>Logout</button>
    </div>
  )
}
