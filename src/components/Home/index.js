
import Header from '../Header'
import './index.css'
import { Link } from 'react-router-dom'
const Home = () =>{
    
        return(
            <>
            <Header/>
            <div className='main-cont'>
            
            <div>
                <h1 className='head'>India's No.1 <span className='span'>Personal Training System</span></h1>
            </div>
            <div>
            <img src = "https://img.freepik.com/premium-photo/bodybuilder-posing-fitness-muscled-man-dark-scene_136403-4206.jpg?w=2000" alt = "" className='body-builders'/>
            <img src = "https://images.pexels.com/photos/1431282/pexels-photo-1431282.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt = "" className='body-builders'/>
            <img src = "https://st3.depositphotos.com/1001959/14541/i/1600/depositphotos_145412973-stock-photo-shirtless-bearded-bodybuilder.jpg" alt = "" className='body-builders'/>
            <img src = "https://thumbs.dreamstime.com/b/male-bodybuilder-opening-his-shirt-revealing-muscular-torso-male-bodybuilder-opening-his-shirt-revealing-muscular-torso-black-106175847.jpg" alt = "" className='body-builders'/>
            <img src = "https://thumbs.dreamstime.com/b/bodybuilder-isolated-white-muscle-man-perfectly-torso-34244102.jpg" alt = "" className='body-builders'/>
            <img src = "https://thumbs.dreamstime.com/b/bodybuilder-flexing-his-muscles-16864226.jpg" alt = "" className='body-builders'/>
            <img src = "https://thumbs.dreamstime.com/b/szeged-hungary-szept-plumbas-adam-participates-pca-bodybuilding-championship-bodybuilder-198817217.jpg" alt = "" className='body-builders'/>
           </div>
           <Link to = "/date"><button className='schedule'>Let's Schedule Your Day</button></Link>
           </div>
           
           </>

        )
        }

export default Home
