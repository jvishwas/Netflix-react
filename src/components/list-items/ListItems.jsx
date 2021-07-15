import { React, useState } from "react";
import "./list_items.scss";

import {
  Add,
  PlayArrow,
  ThumbDownAltOutlined,
  ThumbUpAltOutlined,
} from "@material-ui/icons";

export default function ListItems({ index, movie }) {
  const [isHovered, setIsHovered] = useState(false);
  const trailler = "../assets/movies-pic/Johnny-Depp-long-ranger.mp4";

  return (
    <div
      className="list-items"
      style={{ left: isHovered && index * 225 - 50 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img
        src="../assets/movies-pic/the-lone-ranger.png"
        alt="user pic"
        className="movie-pic"
      />
      {isHovered && (
        <>
          <video src={trailler} autoPlay={true} loop alt="vedio uploading" />
          <div className="item-info">
            <div className="icons">
              <PlayArrow className="icon" />
              <Add className="icon" />
              <ThumbUpAltOutlined className="icon" />
              <ThumbDownAltOutlined className="icon" />
            </div>
            <div className="item-info-top">
              <span className=""> 1 hour 14 mins</span>
              <span className="limit">+16</span>
              <span>1999</span>
            </div>
            <div className="desc">
              This is Action movie and Jonny Deep doing murder and robbery in
              the flim.
            </div>
            <div className="genre">Action</div>
          </div>
        </>
      )}
    </div>
  );
}
