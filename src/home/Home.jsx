import NavBar from '../components/navbar/NavBar';
import './home.scss';

import coverImg from "../staticfolder/images/108_original.png";


const Home = () => {
  return (
    <div className="home">
      <NavBar />
      {/* <div> */}
        <img width="100%" src={coverImg} alt="" />
      {/* </div> */}
    </div>
  )
}

export default Home
