        let input = document.getElementById("inp-box");
        let Search = document.getElementById("src-btn");
        let time = document.getElementById("time");
        let tmp = document.getElementById("tmp");
        let tm = document.getElementById("tm");
        let status =document.getElementById("status")
        let country=document.getElementById("country");
        let wn_speed =document.getElementById("speed")
        let humidty=document.getElementById("humidity")
        async function getinfo(cityName){
           promise = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=df2657cb58694f56b49132400250607&q=${cityName}&days=6&aqi=yes&alerts=yes`);
            response= await promise.json();
            time.innerHTML=response.location.name+","
            country.innerText=response.location.country
            tmp.innerText=  response.current.temp_c+"°C"
            tm.src=  response.current.condition.icon
            status.innerText=response.current.condition.text
            wn_speed.innerText=response.current.wind_kph+"km/h"
            humidty.innerText=response.current.humidity
            console.log(response)


        }
        Search.addEventListener("click", ()=>{
            name = input.value
            getinfo(name)
        });