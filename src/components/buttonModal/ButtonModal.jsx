import React from "react";
import css from "./buttonModal.module.css"
import { useDispatch } from "react-redux";
import { activeAction } from "redux/activeSlice";
import { useSelector } from "react-redux";

export default function ButtonModal() {
   const isLoggedIn = useSelector(state => state.auth.isLoggedIn); 
   const name = useSelector(state => state.auth.user.name);

   const upfirstLetterName = () => {
      return name[0].toUpperCase() + name.slice(1);
   }
   const dispatch = useDispatch();
   const openModal = () => {
   dispatch(activeAction(true));
  

    document.getElementsByName('name')[0].focus()
  }
   return (
   
      isLoggedIn && (
      <div>
         <div className={css.container}>
               <h1 className={css.title}>
                  {upfirstLetterName()}, welcome to your personal phoone book!
               </h1>
                  <button type="button" onClick={openModal} className={css.button}>Add Contact</button>
               
         </div>
          {/* <FormInput/> */}
      </div>
      )       
       )
}
