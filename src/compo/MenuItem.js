import './Menu.css'

const MenuItem = (props) => {
  const img=[props.image]
      return (
      
    <div className="menu-item">
      <div style={{ backgroundImage: `url(${img})` }}></div>
      <h1>{props.name}</h1>
      <p>{props.price}</p>
    </div>
  );
};
export default MenuItem;
