import Iframe from "react-iframe";
import "./frame.css";
import videos from '../../assets/Narcos - Netflix.mp4'
import {GrPlayFill} from 'react-icons/gr'
import {RiInformationFill} from 'react-icons/ri'

const Frame = () => {
  return (
    <div className="frame_box">
     <video autoPlay  loop muted id="myVideo" width={"100%"} className="Iframe">
                <source src={videos} type="video/mp4" />
            </video>
      <div className="frame_text_box">
        <h1>Narcos</h1>
        <p>
          A gritty chronicle of the war against Colombia's infamously
          violent and powerful drug cartels.
        </p>
        <div className="control__btn">
        <button><GrPlayFill/>Play</button>
        <button><RiInformationFill style={{color:"white"}}/>More Info</button>
        </div>
      </div>
    </div>
  );
};

export default Frame;
