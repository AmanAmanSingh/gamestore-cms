import { gamesDatafromApi } from "../../utility/api";
import React, { useContext, useEffect } from "react";
import "./home.css"
import { cartContext } from "../cartcontext";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const STRAPI_ACCESS_KEY = "c719f1d1132d62ec258b82b38f69ae654289ee511b035ba921c5270f6d05f1cb7154f454584b597c0fadcaac6a13d8bb5c5ac8bce8c6ad4eb664648d724a617c5be188ad191de3632e41cfe67ab796fe3a74301f878ada0adc48d6504d53763bd4a6ee8c1cb31725f12f8c43690b0cb66c671fbea3119d870c577b84f0d3a9c4"
const STRAPI_URL = "http://localhost:1337";

const Home = () => {
    const games = useContext(cartContext);
    const navigate = useNavigate()
    // console.log(games)
    const gamesDatafromApi = async (url) => {
        try {
            const gameData = await axios.get(`http://localhost:1337/api/games?populate=*`, {
                headers: {
                    Authorization: "bearer " + STRAPI_ACCESS_KEY
                }
            })
            // console.log(gameData);
            await games.setGameCart([...games.gameCart, gameData.data.data])

            return gameData;
        } catch (err) {
            console.log(err);
            return err
        }
    }

    useEffect(() => {
        gamesDatafromApi()
    }, []);

    const handleBuy = (game) => {
        games.setCartItem([...games.cartItem, game]);
        navigate("/cart")
    }

    return (
        <section className="home-container">
            <div className="game-list">
                {games?.gameCart[0]?.map((game) => {
                    return (
                        <div key={game.id} className="game-item">
                            <img src={STRAPI_URL + game?.attributes?.image?.data?.attributes?.url} alt={game.title} />
                            <h2>{game.attributes.title} </h2>
                            <p>{game.attributes.desc}</p>
                            <p>Price: ${game.attributes.price}</p>
                            <div className="btn">
                                <button onClick={() => { handleBuy(game) }}>Buy Now</button>
                            </div>
                        </div>
                    )
                })}
            </div>
        </section>
    );
}

export default Home;
