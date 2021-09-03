import "./coverpage.scss";
import coverImg from "../../staticfolder/images/108_original.png";

const CoverPage = () => {
  return (
    <>
      <div className="cover-img">
        <img width="100%" height="100%" src={coverImg} alt="CoverImage" />
      </div>
      <div className="cover-text">
        <h1>MATRIX</h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam, quasi exercitationem temporibus corporis quas maxime.
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam, quasi exercitationem temporibus corporis quas maxime.
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam, quasi exercitationem temporibus corporis quas maxime.
        </p>
        <div>
          <button className="btn btn-white">Play</button>
          <button className="btn btn-gray">info</button>
        </div>
      </div>
    </>
  )
}

export default CoverPage;
