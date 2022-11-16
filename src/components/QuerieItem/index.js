import React from "react"
import {FaEdit, FaTrash} from "react-icons/fa";
import './index.css'

const QuerieItem = (props) =>{
    const {details,handleDelete } = props
    const {id} = details

    const deletebtn = () =>{
        handleDelete(id)
    }
    
    return(
        <>
        <div className="queries-cont">
        <div>
        <div className="name">Name : {details.name}</div>
        <div className="name">Querie : {details.querie}</div>
        </div>
        <button onClick={deletebtn}><FaTrash/></button>
        </div>
        </>
    )
}

export default QuerieItem

