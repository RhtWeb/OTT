import "./coverpage.scss";
import coverImg from "../../staticfolder/images/108_original.png";
import { InfoOutlined, PlayArrow } from "@material-ui/icons";

const CoverPage = ({ type }) => {
  return (
    <div className="cover">
      <div className="cover-img">
        <img width="100%" height="100%" src={coverImg} alt="CoverImage" />

          {type && (
            <div className="category">
              <span>{type === "movie" ? "Movies" : "Series"}</span>
              <select name="genre" id="genre">
                <option>Genre</option>
                <option value="adventure">Adventure</option>
                <option value="comedy">Comedy</option>
                <option value="crime">Crime</option>
                <option value="fantacy">Fantacy</option>
                <option value="historical">Historical</option>
                <option value="horror">Horror</option>
                <option value="romance">Romance</option>
                <option value="sci-fi">Sci-fi</option>
                <option value="thriller">Thriller</option>
                <option value="western">Western</option>
                <option value="animation">Animation</option>
                <option value="drama">Drama</option>
                <option value="documentary">Documentary</option>
              </select>
            </div>
          )}
      
        <div className="cover-text">
          <h1>MATRIX</h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam, quasi exercitationem temporibus corporis quas maxime.
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam, quasi exercitationem temporibus corporis quas maxime.
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam, quasi exercitationem temporibus corporis quas maxime.
          </p>
          <div className="btn-grp">
            <button className="btn btn-white"><PlayArrow /> Play</button>
            <button className="btn btn-gray"><InfoOutlined /> info</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CoverPage;
