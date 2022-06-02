import './Home.css'
import image from "./images/background.jpg";
import { Link } from 'react-router-dom';

const Home=()=>{
    return(
        <div className='main'>
        <div className="home" style={{backgroundImage:`url(${image})`}} >
            <div className='info'>
                <h2>Hello</h2>
            </div>
        </div>
        <div className='home-1'>
                <div className='home-1-1'>
                    <div >
                    <div className='text'><h1>Want to order? </h1></div>
                    <div className='btn'><button className='btn-1'><Link to="/Menu">Menu</Link></button></div>
                    </div>
                </div>
                <div className='home-1-1'>
                    <div >
                    <div className='text'><h1>Want to order? </h1></div>
                    <div className='btn'><button className='btn-1'><Link to="/Menu">Menu</Link></button></div>
                    </div>
                </div>
        </div>
        </div>
    )
}
export default Home;