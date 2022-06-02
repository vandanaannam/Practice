import './Footer.css'
import { Instagram } from '@mui/icons-material';
import { WhatsApp } from '@mui/icons-material';
import { Twitter } from '@mui/icons-material';
import { Link } from 'react-router-dom';
const Footer=()=>{
    return(
        <div>
        <div className="footer">
            <div className='col-1-1'>
                <ul>
                    <li><p>Contact Us</p></li>
                <li><Instagram className='icon'/>
                <WhatsApp className='icon'/>
                <Twitter className='icon'/></li>
                </ul>
            </div>
        </div>
        </div>
    )
}
export default Footer;