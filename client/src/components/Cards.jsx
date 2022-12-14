import React from "react";
import "./Styleds/CardHome.css"
import {
  ContImagen,
  TituloCard,
  Div,
  TituloContainer,
  Cards,
  Imagen,
} from "./Styleds/CardsStyled";

function Card({ name, img, id }) {
  return (
   
 <div className="div-cards-home">
      <Cards>
        <TituloCard>{id}</TituloCard>

        <TituloCard>{name}</TituloCard>

        <ContImagen>
          <Imagen src={img} />
        </ContImagen>
      </Cards>
    </div>
   
   
  );
}

export default Card;
