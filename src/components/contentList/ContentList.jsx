import { ArrowLeft, ArrowRight } from "@material-ui/icons";
import { useState } from "react";
import { useRef } from "react";
import ContentItem from "./ContentItem";
import "./contentlist.scss";

const ContentList = () => {

  const [ transX, setTransX ] = useState(0);
  const contentListRef = useRef();

  const handleShift = (direction) => {
    console.log("hi")
    let x = 0;
    const item = contentListRef.current;
    if(direction === "left"){
        setTransX(transX => (transX + 15.5));
        // setTransX(transX + 15.5);
        x = transX + 15.5;
    } else if(direction === "right") {
      setTransX(transX - 15.5);
      x = transX - 15.5;
    }
    console.log(transX, x);
    item.style = `transform: translateX(${x}rem)`;
  }

  return (
    <div className="content-container">
      <h1>Continue Watching</h1>
      <ArrowLeft onClick={() => handleShift("left")} className="big-arrow" />
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
      <ArrowRight onClick={() => handleShift("right")} className="big-arrow big-arrow-right" />
    </div>
  )
}

export default ContentList
