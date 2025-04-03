type WeatherProps = {
    day: {
        dt: number;
        dt_txt: string;
        main: {
            temp: number;
        };
    };
};

const WeatherCard = ({ day }: WeatherProps) => (
    <div>
        <h3>{day.dt_txt}</h3>
        <p>Temp: {day.main.temp}°C</p>
    </div>
);

export default WeatherCard;
