import MenuItem from "./MenuItem";
import './Menu.css'
const MenuMap = (props) => {
  return (
    <div className="menu">
      <h2 className="heading">Menu</h2>
      <div className="menu-list">
        {props.item.map((items) => (
          <MenuItem
            key={items.id}
            image={items.image}
            name={items.name}
            price={items.price}
          />
        ))}
      </div>
    </div>
  );
};
export default MenuMap;
