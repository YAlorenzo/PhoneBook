
import css from "./contacts.module.css";
import { deleteContact,} from "redux/contactsOperation";
import { useSelector, useDispatch } from "react-redux";
import { activeAction } from "redux/activeSlice";
import userPhoto from './img/user.png'
import FormInput from "components/formInput/FormInput";


export default function Contacts({ children}) {
   const isLoggedIn = useSelector(state => state.auth.isLoggedIn)
   const dispatch = useDispatch()
   const contacts = useSelector(state => state.contacts.items);
   const filter = useSelector(state => state.filter);
      
    const onClickDel = (id) => {
        console.log(id)
        dispatch(deleteContact(id))
    }

    const openModal = () => {
    dispatch(activeAction(true));
    document.getElementsByName('name')[0].focus()
  }
    return (
        isLoggedIn && (
            
            contacts.length === 0 ? (
                <h1 className={css.message}> Oops, your contacts are empty!</h1>
            )
                : (
                     <div className={css.container}>
                <div className={css.cont_sear}> 
                    <>
                        <div>{children}</div>
                        <button className={css.add_button} onClick={openModal}>add contact</button>  
                    </>
                          
                </div>
                <ul className={css.list}>
             {
                        contacts.filter((elem => elem.name.toLowerCase().includes(filter.toLowerCase())))
                                    .map(elem => (<li className={css.item} key={elem.id}>
                                        <div className={css.contact_box}>
                                            <div className={css.user_box}>
                                              <img src={userPhoto} alt="kartinka" className={css.userPhoto} />
                                               <p className={css.name}>{elem.name}:</p> <p className={css.number}>{elem.number}</p>
                                            </div>
                                            <button type="button"
                                    className={css.button} onClick={() => onClickDel(elem.id)}>✖
                                </button>
                                       </div>
                                
                               </li>)) 
               }
                </ul>
                <FormInput/>
            </div>    
            )
           
           
        )
    )

}