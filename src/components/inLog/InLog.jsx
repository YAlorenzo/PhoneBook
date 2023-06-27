// import hooks&&operation --> 
import { useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logOut } from "redux/auth/operations";
import { fetchContacts } from "redux/contactsOperation";
//import styles -->
import css from "./style.module.css"


    export default function InLog() {
    
    const dispatch = useDispatch();
    const navigete = useNavigate();
    
    useEffect(() => {
        navigete('./home');
         dispatch(fetchContacts());
         // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    function onLogOut() {
        dispatch(logOut());
        navigete('/singIn');
    }
  
    return (
        <div className={css.header}>
        <h2 className={css.logo}>PhoneBook</h2>
       <div className={css.nav}>
            <div className={css.links_box}>
                <NavLink to="/home" className={css.link}>Home</NavLink>
                <NavLink to="/contacts" className={css.link}>Contacts</NavLink>
            </div>
            <button type="button" onClick={onLogOut} className={css.logOut_button}>Log Out</button>
        </div>
        </div>
        
        
    )
}