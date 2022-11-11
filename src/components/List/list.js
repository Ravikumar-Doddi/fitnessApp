import React from 'react';
import {FaEdit, FaTrash} from "react-icons/fa";
import './list.css'

const List = ({items, removeItem, editItem}) => {
  return (
    <div className='container'>
        {items.map((item) =>{
            const {id, title} = item;
            return (
                <ul className='ul-cont' key={id}>
                    <li className='list-item'>
                        {title}
                        <div style={{float: "right"}}>
                            <button type="button" className='edit-btn' onClick={() => editItem(id)}>
                                <FaEdit/>
                            </button>
                            <button type="button" className='delete-btn' onClick={() => removeItem(id)}>
                                <FaTrash/>
                            </button>

                        </div>

                    </li>
                     
                </ul>
            )
        })}

    </div>
  )
}

export default List; 
