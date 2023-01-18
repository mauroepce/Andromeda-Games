import React from "react";
import style from "./NavAdmin.module.css";
import LogoPanel from "../../../svg/Logos/LogoPanel";
import { Link } from "react-router-dom";
// import icons
import BannerIcon from "../AdminSvg/BannersNav"
import DashboardIcon from "../AdminSvg/DashboardNav"
import GamesIcon from "../AdminSvg/GamesNav"
import SettingsIcon from "../AdminSvg/SettingsNav"
import UserIcon from "../AdminSvg/UserNav"

export default function NavAdmin() {
  return (
    <div className={style.nav}>
      <div className={style.Logo}>
        <LogoPanel />
      </div>

      <div className={style.MetaContainer}>
      <div  className={style.container}>
      <DashboardIcon />
        <p className={style.p}>Dashboard</p>
      </div>
   <div  className={style.container}>
   <UserIcon  />
        <p className={style.p}>Admin. de Usuarios</p>
      </div>
      <div  className={style.container}>
      <GamesIcon />
        <p className={style.p}>Admin. de Games</p>
      </div>
      <div  className={style.container}>
      <BannerIcon/>
        <p className={style.p}>Admin. de Banners</p>
      </div>


      <div  className={style.container}>
      <SettingsIcon />
        <p className={style.p}>Settings</p>
      </div>

     
      </div>
   
    </div>
  );
}
