import React from "react";
import circle from "../images/circleImg.jpg";
import rat from "../images/Rat.jpg";
import style from "../Styles/HoleCaed.module.css";

export default function HoleCard({ img }) {
  return (
    <div className={style.box}>
      <div className={style.innerBox}>
        <div className={style.imgBox}>
          {/* {
            <img
              src={rat}
              alt=""
              width="100px"
              height="100px"
              className={style.rat}
            />
          } */}
          {img}
        </div>
      </div>
    </div>
  );
}
