import React, { useState } from "react";
import { useSelector } from "react-redux";
import NavAdmin from "../NavAdmin/NavAdmin";
import style from "./AdminBanners.module.css";
// import TextBanners from '../../../components/HomeSlider/TextBanners';
import TextinBanners from "./BannersFlow/TextinBanners";
import UnploadBanner from "./BannersFlow/UnploadImgBanner/UnploadBannerImg";
import UnploadBannerLogo from "./BannersFlow/UnploadImgBannerLogo/UnploadBannerLogo";
export default function AdminBanners() {
  const [Next, setNext] = useState(false);
  const [Info, setInfo] = useState({
    imageBanner: "",
    imageLogo: "",
    dataText: "",
  });
  const handlerNext = () => {
    setNext(true);
  };
  const handlerPrevius = () => {
    setNext(false);
  };



  const unploadImageLogo = (urlLogo) => {
    setInfo({
      ...Info,
      imageLogo: urlLogo
    })
  };

  const UnploadImageBanner = (ImagesURL) => {
    setInfo({
      ...Info,
      imageBanner: ImagesURL

    })
  };

  // const HandlerText = (data) => {
  //  dataText = data;
  //  console.log( dataText)
  // };

  const Onsubmit = async () => {
    let gameInfo = { imageBanner, imageLogo };
    console.log(gameInfo);
    // dispatch(CreateGame(gameInfo, userId));
    // setCreated(true);
  };






  return (
    <>
      <div className={style.Layout}>
        <div className={style.Contairner}>
          <NavAdmin />
          <div className={style.content_Banner}>
            <div className={style.divSelect}>
              <select>
                <option>Create Banners</option>
                <option>Delete Banners</option>
              </select>
            </div>
            <div className={style.content}>
              <div className={style.HeaderText}>
                <h1>Create Banners </h1>
                <p className={style.pHeader}>
                  In this section, you can create your custom banners.
                </p>
              </div>

              {Next ? (
                <TextinBanners />
              ) : (
                <div className={style.header}>
                  <UnploadBanner UnploadImageBanner={() => UnploadImageBanner()}/>
                  <UnploadBannerLogo unploadImageLogo={() => unploadImageLogo()}/>
                </div>
              )}
            </div>
            <div className={style.divBotones}>
              {Next && (
                <button onClick={handlerPrevius} className={style.btn}>
                  {" "}
                  Previus{" "}
                </button>
              )}
              {Next && (
                <button onSubmit={Onsubmit} className={style.btn}>
                  Create Banner
                </button>
              )}

              {Next === false && (
                <button onClick={handlerNext} className={style.btn}>
                  {" "}
                  Next{" "}
                </button>
              )}
            </div>

            {/*  */}
          </div>
        </div>
      </div>
    </>
  );
}
