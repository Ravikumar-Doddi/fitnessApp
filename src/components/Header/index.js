import {Component} from 'react'
import {Link} from 'react-router-dom'

import './index.css'

class Header extends Component{
    render(){
        return(
            <>
            <nav className='nav-cont'>
            <img src = "https://www.steelgym.in/hyderabad/images/logo.png" className='gym-logo'/>
           <ul className='list-cont'>
            <Link to = "/"><li className='home'>Home </li></Link>
            <Link to = "/results"><li className='home'>Results</li></Link>
            <Link to = "/exercises"><li className='home'>Exercises</li></Link>
            <Link to = "/quaries"><li className='home'>Queries</li></Link>
           </ul>
           </nav>
            
           </>
        )
    }
}

export default Header
