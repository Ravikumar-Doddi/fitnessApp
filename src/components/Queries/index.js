import { Component } from "react";
import Header from "../Header"
import './index.css'
class Queries extends Component{
    state = {isSubmitted : false}

     handleSubmit = (e) =>{
        e.preventDefault();
        this.setState({isSubmitted : true})

    }
    render(){
        const {isSubmitted} = this.state

    return(
        <>
        <Header/>
         {isSubmitted &&
         <section className="section-center"><h1>Your Query recorded successfully</h1></section>}
          {!isSubmitted && <section className="section-center">
         <form onSubmit={this.handleSubmit} >
         <input placeholder="Write your Querie Here" className="input-ele"/>
         <button type="submit">Submit</button>
         </form>
         </section>}
        </>
        
    )
    }
}
export default Queries
