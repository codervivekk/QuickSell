import React from "react";
import { BsExclamationSquareFill } from "react-icons/bs";
import "../styles/Card.css";

const Card = ({ id, title, tags, status }) => {
  return (
    <div className="container">
      <div className="cardHeading2" style={{ justifyContent: "space-between" }}>
        <span style={{ textTransform: "uppercase", color: "darkgrey" }}>
          {id}
        </span>

        <div className="image" style={{backgroundColor:"white"}}>
          <img
            src="https://th.bing.com/th/id/OIG.zlSRiFw0UkCaAQRoMz3R?pid=ImgGn"
            alt="QuickSell"
          />

          <div className="status"></div>

        </div>
      </div>
      <p>{title}</p>

      <div className="tags">
        <div className="tag" style={{backgroundColor:"white"}}>
          <BsExclamationSquareFill style={{backgroundColor:"white"}}/>
        </div>
        {tags?.map((element, index) => {
          return (
            <div key={index} className="tag">
              <span style={{backgroundColor:"white"}}>●</span> {element}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Card;
