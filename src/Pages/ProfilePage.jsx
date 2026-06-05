import { useLocation,Link ,Navigate} from "react-router-dom"
import LogoutComponent from "../Components/LogoutComponent"
export default function ProfilePage() {
    const user =useLocation().state
     if(!localStorage.getItem('Logged')){
        return <Navigate to='/'/>
    }
  return (
    <div className="Profile">
        <h1>{user?.name}</h1>
        <h1>{user?.email}</h1>
        <h1>{user?.job}</h1>
        <LogoutComponent/>
        <Link to='/members'>Go back to members</Link>
    </div>
  )
}
