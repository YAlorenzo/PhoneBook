
import { useState } from "react";
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css'
import css from "./formInput.module.css";
import { nanoid } from 'nanoid';
import { useDispatch, useSelector } from "react-redux";
import { addContact } from "redux/contactsOperation";
import { useNavigate } from "react-router-dom";
import { activeAction } from "redux/activeSlice";

export default function FormInput({ active, }) {
    const navigete = useNavigate();
    const dispatch = useDispatch();
    const contacts = useSelector(state => state.contacts.items);
    const activeState = useSelector(state => state.active);

    const [number, setNumber] = useState('');
    const [name, setName] = useState('');


    const onSubmit = (evnt, numberValue) => {
    evnt.preventDefault();
    const form = evnt.currentTarget;
    const name = form.elements.name.value;
    const number = numberValue;
        
    const contact = {
      name,
      number,
      id: nanoid(10),
    }
    if (contacts.some(elem => elem.name.includes(contact.name))) {
          alert('a contact with the same name already exists!')
    }
    else {
        dispatch(addContact(contact));
        dispatch(activeAction(false));
    }
    }
    
  const onClickModal = () => {
     dispatch(activeAction(false));
  }
   
   

     
   

  const onChange = (evnt) => {
        switch (evnt.currentTarget.name) {
            case 'name':
                setName(evnt.currentTarget.value);
                break;
            
            default:
                return;
        }
    }

    const onChangePhone = (value) => {
        setNumber(value)
    }


    const onSubmitForm = (evnt) => {
        onSubmit(evnt, number);
        navigete('/contacts')
        setName('')
        setNumber('')
   }
     
    
    return (
            <div className={activeState ?  css.active  : css.modal} onClick={onClickModal}>
              
               <form onSubmit={onSubmitForm} className={css.from} onClick={e => e.stopPropagation()}>
                    <h1>Add Contact</h1>
                     <p>Name</p>
                        <label htmlFor="name">
                    <input
                       
                 type="text"
                        name="name"
                        value={name}
                 pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                 title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                        required
                        onChange={onChange}
                        className={css.input_name}
                    />
                    </label>
                    <p>Phone</p>
                <label htmlFor="number">
                      
                    <PhoneInput
                        country={'us'}
                        value={number}
                        name="number"
                        onChange={onChangePhone}
                        className="gg"
                        inputClass="my-input-class"
                        inputStyle={{
                        width: '404px'
  }}
                    />


                </label> 
               <button type="submit" className={css.buttonAdd} onClick={active}>Add</button>
            </form>
            </div>
           
        )

}