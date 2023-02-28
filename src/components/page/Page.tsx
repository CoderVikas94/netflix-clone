import  './page.css'
import { Modal } from 'antd';
import { useSelector } from 'react-redux';
import {AiOutlinePlus} from 'react-icons/ai'

const Page = ({open,hideModal}:any) => {
    const ImgData = useSelector(
        (state: any) => state?.movie?.movieData
        );

let urlImage:any = `https://image.tmdb.org/t/p/original/${ImgData?.backdrop_path
    }`



   
   
  return (
    <div className='Modal_box' >
         <Modal
        open={open}
        onOk={hideModal}
        onCancel={hideModal}
        footer={null}

       className="modal"
      >
        <div className='movie__box' style={{backgroundImage:`url(${urlImage})`}}>
        <div className='text_box'>
            <h1>{ImgData?.name||ImgData?.title}</h1>
            <span><p>Ratings : {Number(ImgData?.vote_average*10)?.toFixed(2)}%</p>
            <p>Release Date: {ImgData?.release_date}</p>
            <p>Run Time: {ImgData?.runtime} min.</p>
            </span>
            <p>{ImgData?.overview}</p>
            <div className='modal_box_btn'>
                <button>PLAY</button>
                <button><AiOutlinePlus/>MY LIST</button>
            </div>
            </div>
         
        </div>
       </Modal>
    </div>
  )
}

export default Page