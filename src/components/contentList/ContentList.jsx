import { ArrowBackIosOutlined, ArrowForwardIosOutlined } from "@material-ui/icons";
import { useState } from "react";
import { useRef } from "react";
import ContentItem from "./ContentItem";
import "./contentlist.scss";

const ContentList = () => {

  const [ slideNo, setSlideNo ] = useState(0);
  const [ transX, setTransX ] = useState(0);
  const contentListRef = useRef();

  const handleShift = (direction) => {
    console.log("hi")
    let x = 0;
    const item = contentListRef.current;
    if(direction === "left" && slideNo > 0){
      setSlideNo(slideNo - 1);
        setTransX(transX => (transX + 15.5));
        // setTransX(transX + 15.5);
        x = transX + 15.5;
        console.log(transX, x, slideNo);
    item.style = `transform: translateX(${x}rem)`;
    } else if(direction === "right" && slideNo < 5) {
      setSlideNo(slideNo + 1);
      setTransX(transX - 15.5);
      x = transX - 15.5;
      console.log(transX, x, slideNo);
    item.style = `transform: translateX(${x}rem)`;
    }
  }

  return (
    <div className="content-container">
      <h1>Continue Watching</h1>
      <ArrowBackIosOutlined onClick={() => handleShift("left")} className="big-arrow"
        style={{display : slideNo === 0 ? "none" : "block"}}
      />
      <div ref={contentListRef} className="content-list">
        <ContentItem />
        <ContentItem />
        <ContentItem />
        <ContentItem />
        <ContentItem />
        <ContentItem />
        <ContentItem />
        <ContentItem />
        <ContentItem />
        <ContentItem />
      </div>
      <ArrowForwardIosOutlined onClick={() => handleShift("right")} className="big-arrow big-arrow-right" 
      style={{display : slideNo > 4 ? "none" : "block"}}
      />
    </div>
  )
}

export default ContentList
