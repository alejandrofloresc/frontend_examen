import React, { useState } from "react";
import Card from "./Card";
import NavBar from "./NavBar";
const Weather = () => {

    let urlOpenWeather = "http://api.openweathermap.org/data/2.5/weather?appid=f9da347e0387a19bb592f9df3f60b775&lang=es";
    let urlCiudad = "&q=";
    let urlForecast = "http://api.openweathermap.org/data/2.5/forecast?&appid=f9da347e0387a19bb592f9df3f60b775&lang=es";

    const [tiempo, setTiempo] = useState([]);
    const [pronos, setPronos] = useState([]);
    const [mostrar, setMostrar] = useState(false);
    const [location, setLocation] = useState("");

    const getLocation = async (loc) => {

        setLocation(loc);


        urlOpenWeather = urlOpenWeather + urlCiudad + loc;
        await fetch(urlOpenWeather).then((response) => {

            if (!response.ok) throw { response }
            return response.json();
        }).then((weatherData) => {
          
            setTiempo(weatherData);



        }).catch(error => {
            console.log(error);

                alert('Ciudad no encontrada');
            //setMostrar(false);
        });




        urlForecast = urlForecast + urlCiudad + loc;

        await fetch(urlForecast).then((response) => {

            if (!response.ok) throw { response }
            return response.json();
        }).then((forecastData) => {
          
            setPronos(forecastData);

            setMostrar(true);



        }).catch(error => {
            console.log(error);
           
            //setMostrar(false);
        });


    }

    return (

        <React.Fragment>
            <NavBar
                newLocation={getLocation}
            />
            <Card
                mostrarData={mostrar}
                weather={tiempo}
                forecast={pronos}
            />

        </React.Fragment>

    );


}

export default Weather;