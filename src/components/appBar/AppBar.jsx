// import hooks --> 
import { useSelector } from "react-redux";
// import components && page --> 
import InLog from "components/inLog/InLog";
import SingIn from "pages/SingIn";


export default function AppBar() {
    const isLoggedIn = useSelector(state => state.auth.isLoggedIn)
    return (
        isLoggedIn ? (
            <InLog/> 
        )
            : (
                
            <SingIn/>
        )
    )
}