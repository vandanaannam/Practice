import imageb from './images/logo.jpg'
import MenuMap from './MenuMap'
import './Menu.css'
const Menu=()=>{
    const list=[
        {id:'1',name:'xyz',price:520,image:imageb },
        {id:'2',name:'xyz',price:520,image:imageb },
        {id:'3',name:'xyz',price:520,image:{imageb} },
        {id:'4',name:'xyz',price:520,image:{imageb} },
        {id:'5',name:'xyz',price:520,image:{imageb} },
        {id:'6',name:'xyz',price:520,image:{imageb} }
    ]
    return(
            <MenuMap item={list}></MenuMap>
    )
}
export default Menu;