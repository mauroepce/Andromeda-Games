import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getGameDetail } from "../../middleware";
import { Link, useParams } from "react-router-dom";

import Loading from "../../components/Loading/Loading.jsx";
import DetailSlider from "./DetailSlider/DetailSlider";
import GamesActionsContainer from "./GameActionsContainer/GameActionsContainer";
import MetaContainer from "./MetaContainer/MetaContainer";

// Utils
import { platformImage } from "./utils/utils";

// Css
import "./CardDetail.css";
import { cleanDetails } from "../../reducers/prueba/pruebaSlider";

export default function CardDetail() {
    const { id } = useParams();
    const dispatch = useDispatch();
    const { gameDetail, isLoader } = useSelector((state) => state.prueba);
    // const [loading, setLoading] = useState(true);
console.log(gameDetail.price)
    useEffect(() => {
    dispatch(getGameDetail(id));
    
      return () => {
        dispatch(cleanDetails())
      }
    }, [])

    if(gameDetail) window.scroll({top: 0})

    return (
        <>
            <div className="main-detail-container">
                {isLoader && !gameDetail.hasOwnProperty("name") ? (
                    <div className="loading">{<Loading />}</div>
                ) : (
                    <div className="detail-container">
                        {/* Left Card Detail Container */}
                        <div className="left-container">
                            {/* Navigation, Title and Rating container */}
                            <div className="navigation-title-rating-container">
                                <div className="navigation-title-container">
                                    <Link to="/home">
                                        <i className="fa-solid fa-arrow-left fa-xl"></i>
                                    </Link>
                                    <h1 className="detail-title">
                                        {gameDetail.name}
                                    </h1>
                                </div>
                                <div className="rating-website-container">
                                    <div className="rating-container">
                                        <i className="fa-solid fa-star fa-lg star"></i>{" "}
                                        {gameDetail.rating}
                                    </div>
                                    <div className="website-container">
                                        <i className="fa-solid fa-link fa-lg"></i>
                                        <a
                                            href={gameDetail.website}
                                            target="blank"
                                        >
                                            visit the website
                                        </a>
                                    </div>
                                </div>
                            </div>
                            {/* Slider with Game Screenshots */}
                            <div className="detail-slider-container">
                                <DetailSlider
                                    screenshots={gameDetail.screenshot}
                                    trailer={gameDetail.trailer}
                                />
                            </div>

                            {/* Game Description Container */}
                            <div className="description-container">
                                <h2>About this Game</h2>
                                <div className="description">
                                    <p>{gameDetail.description_raw}</p>
                                </div>
                            </div>
                            {/* Games Meta Information */}
                            <div className="juego">
                                <MetaContainer
                                    platforms={gameDetail.parent_platforms}
                                    genres={gameDetail.genres}
                                    released={gameDetail.released}
                                    developers={gameDetail.developers}
                                />
                            </div>
                        </div>
                        {/* Righ Card Detail Container */}
                        <div className="right-container">
                            <div className="games-actions-container">
                                <GamesActionsContainer
                                    priceGame={gameDetail.rating}
                                    name={gameDetail.name}
                                    img={gameDetail.background_image}
                                    id={id}
                                    price={gameDetail.price}
                                    genres={gameDetail.genres}
                                    description={gameDetail.description}
                                />
                            </div>

                        </div>
                    </div>
                )}
            </div>
        </>
    );
}
