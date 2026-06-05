import { useState } from "react"
function SignupComponent (){
    const [newUser , setnewUser] = useState({name:'',email:'',password:'',confpassword:'',job:''})
    const [error , setError]=useState('')
    const ChangeHandler=(e)=>{
        const name =e.target.name
        const value = e.target.value
        setnewUser((prev)=>({...prev , [name]:value}))
    }
    const SubmitHandler=(e)=>{
        e.preventDefault()
        if(newUser.name!=='' && newUser.email!=='' && newUser.password!=='' && newUser.confpassword!==''&& newUser.job!==0){
            if(newUser.password===newUser.confpassword){
                const users=JSON.parse(localStorage.getItem('Users')) || []
                const Exist = users.some((item)=>item.email===newUser.email)
                if(!Exist){
                    users.push({name:newUser.name ,email:newUser.email ,password:newUser.password ,job:newUser.job})
                    localStorage.setItem('Users',JSON.stringify(users) )
                }else {
                    setError('User already Exist')
                }
            } else {
                setError('Passowrd and confirmation doest match')
            }
        } else {
            setError('Please fill all fields')
        }
    }
    return(
        <div className="Signup">
            <form>
                <label>Name</label>
                <input type="text" name="name" value={newUser.name}  onChange={ChangeHandler}/>
                <label>Email</label>
                <input type="email" name="email" value={newUser.email}  onChange={ChangeHandler}/>
                <label>Password</label>
                <input type="password" name="password" value={newUser.password}  onChange={ChangeHandler}/>
                <label>Confirm password</label>
                <input type="password" name="confpassword" value={newUser.confpassword}  onChange={ChangeHandler}/>
                <label>Job Title</label>
                <input type="text" name="job" value={newUser.job}  onChange={ChangeHandler}/>
                <button onClick={SubmitHandler}>SignUp</button>
            </form>
            {error && <h1>{error}</h1>}
        </div>
    )
}
export default SignupComponent