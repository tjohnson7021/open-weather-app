import { useState } from "react";
import axios from "axios";
import WeatherCard from "./WeatherCard";

const WeatherForecast = () => {
    const [weather, setWeather] = useState<any>(null);
    const [zip, setZip] = useState("");

    const fetchWeather = async () => {
        try {
            const response = await axios.get(
                `https://open-weather-app-dev.onrender.com/weather/${zip}`
            );
            setWeather(response.data.list);
        } catch (error) {
            console.error("Error fetching weather:", error);
        }
    };

    return (
        <div>
            <input
                type="text"
                value={zip}
                onChange={(e) => setZip(e.target.value)}
                placeholder="Enter ZIP Code"
            />
            <button onClick={fetchWeather}>Get Weather</button>
            {weather &&
                weather.map((day: any) => <WeatherCard key={day.dt} day={day} />)}
        </div>
    );
};

export default WeatherForecast;
