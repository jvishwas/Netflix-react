import React from "react";
import "./list.scss";
import { useRef, useState } from "react";
import {
  ArrowBackIosOutlined,
  ArrowForwardIosOutlined,
  ContactSupportOutlined,
} from "@material-ui/icons";
import ListItems from "../list-items/ListItems";

export default function List() {
  const [slideNumber, setsliderNumber] = useState(0);
  const [IsMover, setIsMover] = useState(false);
  const listRef = useRef();
  const handleClick = (direction) => {
    setIsMover(true);
    let distance = listRef.current.getBoundingClientRect().x - 50;
    if (direction === "right" && slideNumber > 0) {
      setsliderNumber(slideNumber - 1);
      listRef.current.style.transform = `translateX(${225 + distance}px)`;
    }
    if (direction === "left" && slideNumber < 10) {
      setsliderNumber(slideNumber + 1);
      listRef.current.style.transform = `translateX(${-230 + distance}px)`;
    }
    console.log(distance);
  };

  return (
    <div className="list">
      <span className="list-title">Continue to watch</span>
      <div className="wrapper">
        <ArrowBackIosOutlined
          className="sliderArrow left"
          onClick={() => handleClick("left")}
        />
        <div className="container" ref={listRef}>
          <ListItems index={0} />
          <ListItems index={1} />
          <ListItems index={2} />
          <ListItems index={3} />
          <ListItems index={4} />
          <ListItems index={5} />
          <ListItems index={6} />
          <ListItems index={7} />
          <ListItems index={8} />
          <ListItems index={9} />
        </div>
        <ArrowForwardIosOutlined
          className="sliderArrow right"
          onClick={() => handleClick("right")}
          style={{ display: !IsMover && "none" }}
        />
      </div>
    </div>
  );
}
