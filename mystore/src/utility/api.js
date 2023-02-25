import axios from "axios";
const STRAPI_ACCESS_KEY = "c719f1d1132d62ec258b82b38f69ae654289ee511b035ba921c5270f6d05f1cb7154f454584b597c0fadcaac6a13d8bb5c5ac8bce8c6ad4eb664648d724a617c5be188ad191de3632e41cfe67ab796fe3a74301f878ada0adc48d6504d53763bd4a6ee8c1cb31725f12f8c43690b0cb66c671fbea3119d870c577b84f0d3a9c4"
const STRAPI_URL = "http://localhost:1337"

export const gamesDatafromApi = async (url) => {
    try {
        const gameData = await axios.get(`http://localhost:1337/api/games?populate=*`, {
            headers: {
                Authorization: "bearer " + STRAPI_ACCESS_KEY
            }
        })
        // console.log(gameData);
        return gameData;
    } catch (err) {
        console.log(err);
        return err
    }
}
