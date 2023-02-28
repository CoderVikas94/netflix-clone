import Iframe from "react-iframe";
import "./frame.css";
import videos from '../../assets/Narcos - Netflix.mp4'
import {GrPlayFill} from 'react-icons/gr'
import {RiInformationFill} from 'react-icons/ri'
import {VscUnmute} from 'react-icons/vsc'

const Frame = () => {
  return (
    <div className="frame_box">
     <video autoPlay  loop muted id="myVideo" width={"100%"} className="Iframe" >
                <source src={videos} type="video/mp4" />
                {/* <button className='mute-unmute-button' onClick={handleToggleMute}> {muted ? <BiVolumeMute/> : <VscUnmute/>} </button> */}
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
