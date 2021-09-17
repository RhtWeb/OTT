import "./contentlist.scss";
import cntImg from "../../staticfolder/images/59_original.png";
import { Add, PlayArrow, ThumbDownAltOutlined, ThumbUpAltOutlined } from "@material-ui/icons";

const ContentItem = () => {


  return (
    <div className="content-item">
      <div className="hover-content">
        <img src={cntImg} alt="conten-item" />

        <div className="content-info"> 
          <div className="icon-grp">
            <PlayArrow />
            <Add />
            <ThumbUpAltOutlined />
            <ThumbDownAltOutlined />
          </div>
          <div className="content-info-top">
            <span>2 hour 30 min</span>
            <span>+16</span>
            <span>1994</span>
          </div>
          <div className="desc">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni eligendi dignissimos esse nostrum nam eveniet.
          </div>
          <div className="genre">Action</div>
        </div>
      </div>
    </div>
  )
}

export default ContentItem
