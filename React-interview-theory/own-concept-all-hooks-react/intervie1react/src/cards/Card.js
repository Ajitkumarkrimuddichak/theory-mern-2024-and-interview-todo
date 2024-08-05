import React from "react";

const Card = (props) => {
  return (
    <>
      <div>
        <div>
          <img src={props.imgsrc} alt="mypic" />
          <div>
            <span>{props.title}</span>
            <h3>{props.sname}</h3>
            <a href={props.link}>
              <button>Watch New</button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
