import React from "react";
import css from "./search.module.css";
import { useDispatch } from "react-redux";
import { filterAction } from "redux/filtersSlice";


export default function Search() {
  const dispatch = useDispatch()
    const onSearch = (evnt) => {
     const value = evnt.currentTarget.value;
     dispatch(filterAction(value));
  }
     return (
            <div className={css.container}>
         <input type="text" onChange={onSearch} className={css.search} placeholder="search contact"/>
            </div>
        )
}