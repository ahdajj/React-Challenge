import { useState } from "react"
import { useNavigate } from "react-router-dom"

function LoginComponent (){
    const [user , setuser]=useState({email:'' , password:''})
    const [error , setError]=useState('')
    const navigate=useNavigate()

    const ChangeHanler=(e)=>{
        e.preventDefault()
        const name = e.target.name
        const value = e.target.value
        setuser((prev)=>({...prev , [name]:value}))

    }
    const SubmitHandler=(e)=>{
        e.preventDefault()
        if(user.email!=='' && user.password!==''){
            const localuser = JSON.parse(localStorage.getItem('Users'))
            const Exist = localuser.find((item)=>item.email===user.email)
            if(Exist){
                if(Exist.password===user.password){
                    localStorage.setItem('Logged' , Exist.name)
                    navigate('/members')
                } else {
                    setError('Password is Wrong')
                }
            } else {
                setError('User doesnt Exist')
            }
        } else {
            setError('Please fill all fields')
        }
    }
    return(
        <div className="Login">
            <h1>Login</h1>
            <form onSubmit={SubmitHandler}>
                <label>Email</label>
                <input type="email" name="email" value={user.email} onChange={ChangeHanler}/>
                <label>Password</label>
                <input type="password" name="password" value={user.password} onChange={ChangeHanler}/>
                <button>Login</button>
            </form>
            {error && <h1>{error}</h1>}
        </div>
    )
}
export default LoginComponent