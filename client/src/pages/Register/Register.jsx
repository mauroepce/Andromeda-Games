import React from "react";
import "./Formulario/FormRegister.css";
import FormRegister from "./Formulario/FormRegister";
import { Link } from "react-router-dom";
import LogoLogin from "../../svg/LogoLogin";
import { Imagen } from "../Login/css/Img";
import backgroundImg from "../../assets/fondoLOGIN.png"
export default function Register() {
  return (
    <>
      <Imagen src={backgroundImg} alt="backgr" />
      <div className="overlay-register">
        <div className="container-form-login-register">
          <div className="Logo-div-register">
            <LogoLogin />
          </div>
          <FormRegister />

          <div className="container-singnup">
            <div className="singnup">
              <p className="label-register-login">Do you already have an account ?</p>
              <div className="register-container">
                <Link className="link" to={"/login"}>
                  <p> Login now</p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}