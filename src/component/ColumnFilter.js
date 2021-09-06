import React from "react";
export const ColumnFilter = ({ column}) =>{
    const {filterValue,setFilter} =column ;
    return(
        <span>
            Search:{ ' '}
            <input value ={filterValue || ''} onChange ={(e) =>setFilter(e.target.value)} size={4}/>
        </span>
    )
}