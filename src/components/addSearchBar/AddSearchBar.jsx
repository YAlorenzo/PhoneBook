// import hooks && action --> 
import { useDispatch } from "react-redux";
import { activeAction } from "redux/activeSlice";
// import components --> 
import Search from "components/search/Search";
import FormInput from "components/formInput/FormInput";
// import styles -->
import css from './AddSearchBar.module.css'; 

export default function AddSearchBar() {
    const dispatch = useDispatch(); 
    
    const openModal = () => {
    dispatch(activeAction(true));
    document.getElementsByName('name')[0].focus()
  }
    return (
         <div className={css.cont_sear}> 
                    <>
                        <div><Search/></div>
                        <button className={css.add_button} onClick={openModal}>add contact</button>  
                    </>
                        <FormInput/>  
                </div>
    )
}