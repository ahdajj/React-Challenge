import SignupComponent from "../Components/SignupComponent"
import LoginComponent from "../Components/LoginComponent"

function HomePage (){
    return(
        <div className="HomePage">
            <h1>Welcom to linked in a social network for professionals</h1>
            <SignupComponent/>
            <LoginComponent/>
        </div>
    )
}
export default HomePage