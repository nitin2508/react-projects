import axios from 'axios';
const API_KEY='61403d9f2c2be2c2ee9788b5c1ae3da1';
export const FETCH_WEATHER ='FEATCH_WEATHER';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export function fetchWeather(city){
    const url = `${ROOT_URL}&q=${city},IN`;
    const request =axios.get(url);
    return{
        type:FETCH_WEATHER,
        payload:request
    }
}
