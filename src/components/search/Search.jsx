import React from "react";
//import hooks&&action --> 
import { useDispatch } from "react-redux";
import { filterAction } from "redux/filtersSlice";
//import styles -->
import css from "./search.module.css";

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