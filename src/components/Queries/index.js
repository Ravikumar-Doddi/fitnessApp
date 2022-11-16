import { Component } from "react";
import Header from "../Header"
import {v4} from 'uuid'
import QuerieItem from "../QuerieItem";
import './index.css'
class Queries extends Component{
    state = {isSubmitted : false,queriesList : [],name : '',querie : '',nameRequired : false,querieRequire : false}

    verifyName = () =>{
        const {name} = this.state
        return name !== ''
    }

    verifyQuerie = () =>{
        const {querie} = this.state
        return querie !== ''
    }

     handleSubmit = (e) =>{
        e.preventDefault();
        const {name,querie} = this.state
        
        const validName = this.verifyName()
        const validQuerie = this.verifyQuerie()

        if(validName && validQuerie){
            const newQuerie = {
                id : v4(),
                name : name,
                querie : querie,
            }
            
            this.setState(previous => ({
                queriesList : [...previous.queriesList,newQuerie],name : "",querie : '',nameRequired :false,querieRequire : false
            }))
        }
        else{
            this.setState({nameRequired : true,querieRequire :true})
        }

     }

     handleName =(e) =>{
        this.setState({name :e.target.value})
     }

     handleQuerie = (e) =>{
        this.setState({querie : e.target.value})
     }

     handleDelete = (id) =>{
        const {queriesList} = this.state
        const filterList = queriesList.filter(eachItem => (
            eachItem.id !== id
        ))
            this.setState({queriesList : filterList})
     }

    render(){
        const {name,querie,queriesList,nameRequired,querieRequire} = this.state
        

    return(
        <>
        <Header/>
            <section className="section-center">
            <form onSubmit={this.handleSubmit} >
            <label>Name</label>
            <input placeholder="Name" className="input-ele" onChange={this.handleName} value = {name}/>
            {nameRequired && <div className="require">*Require</div>}
            <label>Your Querie</label>
            <input placeholder="Write your Querie Here" onChange={this.handleQuerie} value = {querie} className="input-ele"/>
           {querieRequire && <div className="require">*Require</div>}
            <button type="submit">Submit</button>
            </form>
            <h1 className="query-head">Queries</h1>
            {queriesList.map(eachOne => (
                <QuerieItem details = {eachOne} key = {eachOne.id} handleDelete = {this.handleDelete}/>
    ))}
            </section>

        </>
    )
    }
}
export default Queries
