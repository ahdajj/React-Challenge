import { useEffect, useState } from "react"
import { Link, Navigate } from "react-router-dom"
import LogoutComponent from "../Components/LogoutComponent"
export default function MembersPage() {
    const [Members , setMembers]=useState([])
    const [user , setUser]=useState('')

    useEffect(()=>{
        const users=JSON.parse(localStorage.getItem('Users'))
        const currentuser = localStorage.getItem('Logged')
        setMembers(users)
        setUser(currentuser)
    },[])
    if(!localStorage.getItem('Logged')){
        return <Navigate to='/'/>
    }
  return (
    <div>
        <h1>Hello {user}</h1>
        {Members?.map((item ,index)=>(
            <div className="Members" key={index}>
                <h1>{item.name}</h1>
                <Link to='/profile' state={item}>View Profile</Link>
            </div>
        ))}
        <LogoutComponent/>
    </div>
  )
}
