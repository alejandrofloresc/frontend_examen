import React from 'react'

export const Card = ({

  mostrarData,
  weather,
  forecast
}
) => {

  var today = new Date();
  var day = today.getDate();
  var month = today.getMonth() + 1;
  var year = today.getFullYear();
  var date = day + '/' + month + '/' + year;
  var url = "";
  var urlIcon = "";
  var urlImg = "";

  var hr2 = "";
  var hr4 = "";
  var hr6 = "";

  var forecastDate2 = "";
  var forecastDate4 = "";
  var forecastDate6 = "";


  if (mostrarData) {
    //Mostrar imagen del clima
    urlImg = `../img/${weather.weather[0].main}.jpg`
    //mostrar icono del clima de openweather
    url = "http://openweathermap.org/img/w/";
    urlIcon = url + weather.weather[0].icon + ".png";

    //clima de las siguientes hrs
    hr2 = url + forecast.list[1].weather[0].icon + ".png";
    hr4 = url + forecast.list[2].weather[0].icon + ".png";
    hr6 = url + forecast.list[3].weather[0].icon + ".png";

    forecastDate2 = forecast.list[1].dt_txt.substring(8, 10) + '/' + forecast.list[1].dt_txt.substring(5, 7) + '/' + forecast.list[1].dt_txt.substring(0, 4) + ' ' + forecast.list[1].dt_txt.substring(11, 13);
    forecastDate4 = forecast.list[2].dt_txt.substring(8, 10) + '/' + forecast.list[2].dt_txt.substring(5, 7) + '/' + forecast.list[2].dt_txt.substring(0, 4) + ' ' + forecast.list[2].dt_txt.substring(11, 13);
    forecastDate6 = forecast.list[3].dt_txt.substring(8, 10) + '/' + forecast.list[3].dt_txt.substring(5, 7) + '/' + forecast.list[3].dt_txt.substring(0, 4) + ' ' + forecast.list[3].dt_txt.substring(11, 13);




  }

  return (
    <div className='mt-5'>

      {
        mostrarData === true ? (

          <div className='container'>

            <div className='card mb-3 mx-auto bg-light text-dark'>
              <div className='row g-0'>
                <div className='col-md-4'>

                  <h3 className='card-title mx-auto text-light'> {weather.name}</h3>

                  <p className='card-date text-light'>{date}</p>
                  <h2 className='card-temp text-light'>{(weather.main.temp - 273.15).toFixed(1)}°C</h2>
                  <p className='card-desc text-light'><img className='img-temp' src={urlIcon} alt='icon'></img>{weather.weather[0].description}</p>

                  <img src={urlImg} className="img-fluid rounded-start" alt='imagen del tiempo'></img>


                </div>
                <div className='col-md-8'>

                  <div className='card-body text-start mt-2'>

                    <h5 className='card-text'>Temperatura máxima: {(weather.main.temp_max - 273.15).toFixed(1)}°C</h5>
                    <h5 className='card-text'>Temperatura mínima: {(weather.main.temp_min - 273.15).toFixed(1)}°C</h5>
                    <h5 className='card-text'>Sensación térmica: {(weather.main.feels_like - 273.15).toFixed(1)}°C</h5>
                    <h5 className='card-text'>Humedad: {weather.main.humidity}%</h5>
                    <h5 className='card-text'>Velocidad del viento: {weather.wind.speed}m/s</h5>



                  </div>

                  <hr />

                  <div className='row mt-4'>
                    <div className='col'>
                      <p>{forecastDate2}hr</p>
                      <p className='description'><img src={hr2} alt='icon'></img>{forecast.list[1].weather[0].description}</p>
                      <p className='temp'>{(forecast.list[1].main.temp - 273.15).toFixed(1)}°C</p>
                    </div>
                    <div className='col'><p>{forecastDate4}hr</p>
                      <p className='description'><img src={hr4} alt='icon'></img>{forecast.list[2].weather[0].description}</p>
                      <p className='temp'>{(forecast.list[2].main.temp - 273.15).toFixed(1)}°C</p>
                    </div>
                    <div className='col'><p>{forecastDate6}hr</p>
                      <p className='description'><img src={hr6} alt='icon'></img>{forecast.list[3].weather[0].description}</p>
                      <p className='temp'>{(forecast.list[3].main.temp - 273.15).toFixed(1)}°C</p>
                    </div>
                  </div>

                </div>

              </div>

            </div>

          </div>

        ) : (

          <h2 className="text-dark"> Ingresa la ciudad para conocer su clima </h2>

        )
      }

    </div >
  );
}

export default Card;

