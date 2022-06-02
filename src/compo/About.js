import "./About.css";
import img from './images/background.jpg'
const About = () => {
  return (
    <div className="about">
      <h2 className="heading">Queries</h2>
      <div className="box">
        <div className="image" style={{ backgroundImage: `url(${img})`}}></div>
        <div className="contact">
            <div className="col-1">
                <div className="col-1-3"> Name</div>
                <div className="col-1-2"><input type="text" className="inp"></input></div>
            </div>
            <div className="col-1">
                <div className="col-1-3">E-mail</div>
                <div className="col-1-2"><input type="E-mail" className="inp"></input></div>
            </div>
            <div className="col-2">
                <div className="col-2-3">Question</div>
                <div className="col-2-2"><input type="text" className="inp"></input></div>
            </div>
            <div className="col-1">
                <button className="btn">Submitted</button>
            </div>
        </div>
      </div>
    </div>
  );
};
export default About;
