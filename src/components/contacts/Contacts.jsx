// import operation && hooks --> 
import { useSelector, useDispatch } from "react-redux";
import { deleteContact, } from "redux/contactsOperation";
// import styles && photo -->
import css from "./contacts.module.css";
import userPhoto from './img/user.png'


export default function Contacts() {
   const isLoggedIn = useSelector(state => state.auth.isLoggedIn)
   const dispatch = useDispatch()
   const contacts = useSelector(state => state.contacts.items);
   const filter = useSelector(state => state.filter);
      
    const onClickDel = (id) => {
        console.log(id)
        dispatch(deleteContact(id))
    }
    return (
        isLoggedIn && (
              contacts.length === 0 ? (
                <h1 className={css.message}> Oops, your contacts are empty!</h1>
            )
                : (
                <div className={css.container}>
                  <ul className={css.list}>
                    {
                        contacts.filter((elem => elem.name.toLowerCase().includes(filter.toLowerCase())))
                        .map(elem => (<li className={css.item} key={elem.id}>
                            <div className={css.contact_box}>
                                <div className={css.user_box}>
                                    <img src={userPhoto} alt="kartinka" className={css.userPhoto} />
                                    <p className={css.name}>{elem.name}:</p> <p className={css.number}>{elem.number}</p>
                                </div>
                                <button type="button" className={css.button} onClick={() => onClickDel(elem.id)}>
                                    <svg className={css.icon} version="1.1" xmlns="http://www.w3.org/2000/svg" width="24" height="20" viewBox="0 0 32 32">
                                        <path d="M6 32h20l2-22h-24zM20 4v-4h-8v4h-10v6l2-2h24l2 2v-6h-10zM18 4h-4v-2h4v2z"></path>
                                    </svg>
                                </button>
                                       </div>
                                
                               </li>))}
                   </ul>
                
            </div>    
            ) 
        )
    )

}