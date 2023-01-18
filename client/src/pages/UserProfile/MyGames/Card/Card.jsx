import React from "react";
import style from "../Card/Card.module.css";
import { Link } from "react-router-dom";
import { platformImage } from "../../../CardDetail/utils/utils";
import { saveAs } from 'file-saver';
export default function Card(props) {

  var imagen = props.image;

const handleDownload = () => {

  const blob = new Blob([imagen], { type: "image/jpeg" });
  saveAs(blob, `imagen ${props.name}`);
}

  return (
    <div className={style.conteiner}>
      <div className={style.divImg}>
        <img
          className={style.img}
          src={props.image}
          alt={props.name}
          width="150px"
          height="90px"
        />
      </div>

      <div className={style.div}>
        <Link className={style.Link} to={`/game/${props.id}`}>
          {props.name}
        </Link>
      </div>

      <div className={style.div}>
        {props.platforms ? (
          props.platforms
            .slice(0, 3)
            .map((el) => <span key={el}>{platformImage(el)}</span>)
        ) : (
          <span className={style.text}>No available for plataforms</span>
        )}
      </div>

      <button onClick={handleDownload}>

      <div className={style.divDowload}>
          <i class="fa-solid fa-download"></i>
        </div>

      </button>

      {/* <button onClick={handleDownload}>Download</button> */}

      {/* <a     className={style.icon}   download={props.name} href="https://res.cloudinary.com/dj8p0rdxn/video/upload/v1673797875/AndromedaGames/ncuz3w8gdvfrmqdam7wb.mp4">
        <div className={style.divDowload}>
          <i class="fa-solid fa-download"></i>
        </div>
      </a> */}

      <div className={style.divButton}>
        <button className={style.button}>✔️</button>
      </div>
    </div>
  );
}
