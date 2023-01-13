import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { traerGenero } from "../../middleware";
import { traerPlatforms } from "../../middleware";
import style from "./filters.module.css";
import { Filters } from "../../reducers/prueba/pruebaSlider";

import React from "react";

export default function GameFilters() {
  const dispatch = useDispatch();
  const { genre, platforms } = useSelector((state) => state.prueba);
  const [gender, setGender] = useState({
    genere: [],
  });

  const [platform, setPlatform] = useState({
    platformarray: [],
  });

  const defaultValueSelect = {
    ASC: "ASC",
    DESC: "DESC",
    MAYOR: "MAYOR",
    LOW: "LOW",
  };

 let parent_platforms = ["PC", "PlayStation", "Xbox", "Apple Macintosh","Android","Linux","iOS"];
  const handlerChangePrice = (event) => {
    console.log(event.target.value);
    let prices = event.target.value;
    let actions = {
      price: prices,
      type: "FILTER_BY_PRICE",
    };
    dispatch(Filters(actions));
  };

  const handlerChangeOrden = (event) => {
    console.log(event.target.value);
    let orders = event.target.value;
    let actions = {
      order: orders,
      type: "FILTER_BY_ORDER",
    };
    dispatch(Filters(actions));
  };

  const handlerGender = (event) => {
    console.log(event.target.value);
    let genders = event.target.value;
    let actions = {
      gender: genders,
      type: "FILTER_BY_GENDER",
    };
    dispatch(Filters(actions));
  };

  const handlerPlatforms = (event) => {
    let platforms = event.target.value;
    let actions = {
      platform: platforms,
      type: "FILTER_BY_PLATFORM",
    };
    dispatch(Filters(actions));
  };

  useEffect(() => {
    dispatch(traerGenero());
    dispatch(traerPlatforms());
  }, []);

  return (
    <>
      <div className={style.divSelect}>
        <label className={style.labels}> Game genere </label>
        <select className={style.Select} onChange={handlerGender}>
          {genre &&
            genre.map((g, i) => (
              <option value={g} key={i}>
                {g}
              </option>
            ))}
        </select>
      </div>
      <div className={style.gnreContairner}>
        {gender.genere.map((el, i) => (
          <div className={style.gnreCard} key={i}>
            <p className={style.gnreP}>{el}</p>
            <button
              className={style.gnreButton}
              onClick={() => handleDelete(el)}
            >
              X
            </button>
          </div>
        ))}
      </div>

      <div className={style.divSelect}>
        <label className={style.labels}> Platforms</label>
        <select className={style.Select} onChange={handlerPlatforms}>
          {platforms &&
            platforms.map((p, i) => (
              <option value={p} key={i}>
                {p}
              </option>
            ))}
        </select>
      </div>
      {platform.platformarray.map((el, i) => (
        <div key={i}>
          <p>{el}</p>
          <button className="" onClick={() => handleDeletedos(el)}>
            X
          </button>
        </div>
      ))}
      <div className={style.divSelect}>
        <label className={style.labels}> Order </label>
        <select onChange={handlerChangeOrden} className={style.Select}>
          <option value={defaultValueSelect.ASC}>Order A-Z</option>
          <option value={defaultValueSelect.DESC}>Order Z-A</option>
        </select>
      </div>

      <div className={style.divSelect}>
        <label className={style.labels}> Price </label>
        <select onChange={handlerChangePrice} className={style.Select}>
          <option value={defaultValueSelect.MAYOR}>Mayor price </option>
          <option value={defaultValueSelect.LOW}>Low price</option>
        </select>
      </div>
    </>
  );
}
