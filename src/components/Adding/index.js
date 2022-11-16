import React, { useEffect, useState } from 'react';
import List from '../List/list';
import Alert from '../Alert';
import Header from '../Header';
import './index.css';


const getLocalStorage = ()=>{
    let list = localStorage.getItem("list");
    if(list){
        return(list= JSON.parse(localStorage.getItem("list")))
    }else{
        return [];
    }

}

 const Adding = () => {
    const [name, setName] = useState("");
    const [list, setList] = useState(getLocalStorage());
    const [isEditing, setIdEditing] = useState(false);
    const [editId, setEditID] = useState(null);
    const [alert, setAlert] = useState({show: false, msg:"",type:""});

    useEffect(() =>{
        localStorage.setItem("list", JSON.stringify(list))
    }, [list]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if(!name) {
            showAlert(true, "danger", "please Enter Value")
        }else if(name && isEditing) {
            setList(
                list.map((item) =>{
                    if(item.id ===editId) {
                        return {...item, title: name}
                    }
                    return item;
                })
            );
            setName("")
            setAlert(null);
            setIdEditing(false);
            showAlert(true, "success", "value Change");
        } else {
            setAlert(true, "success", "Item Added to the List");
            const newItem ={id: new Date().getTime().toString(), title:name};
            setList([...list, newItem]);
            setName("");
        }
    };
    const showAlert = (show = false, type="", msg="") => {
        setAlert({show, type, msg});

    };
    const removeItem = (id) => {
        showAlert(true, "danger", "Item Removed")
        setList(list.filter((item) =>  item.id !== id));

    };
    const editItem = (id) => {
        const editItem = list.find((item) => item.id === id);
        setIdEditing(true);
        setEditID(id);
        setName(editItem.title);
    };
    const clearlist = () => {
    showAlert(true, "danger", "Empty List")
    setList([])
    };
  return (
    <>
    <Header/>
    
    <section className='section-center'>
        <form onSubmit={handleSubmit}>
            {alert.show && <Alert {...alert} removeAlert={showAlert} list={list}/>}
            <div className='date-cont'>
            <h1 className='exercises-head'>
                Exercises 
            </h1> 
            <input type="date" className='date'/>
            </div>
            <div className='mb-3 form'>
                <input
                type="text"
                className='form-control'
                placeholder='e.g. walking'
                onChange={(e) => setName(e.target.value)}
                value={name}
                />
                <button type='"submit' className='btn btn-success'>
                    {isEditing ? "Edit" : "sumbit"}
                </button>
            </div>
        </form>
        {list.length> 0 && (
            <div>
                <List items={list} removeItem={removeItem} editItem={editItem} />
               
                    <button className='clear-btn' onClick={clearlist}>
                        clear Items
                    </button>
                
            </div>
        
        )}

    </section>
    </>
  )
}
export default Adding;
