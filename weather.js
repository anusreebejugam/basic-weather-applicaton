document.getElementById('img1').setAttribute('disabled', 'disabled');
function onClick() {
    let request = new XMLHttpRequest();
    
    //open a connection
    let place = document.getElementById('location');
    console.log(place.value)
    let url = 'https://api.openweathermap.org/data/2.5/weather?q=' + place.value + '&appid=93f26e3c57081a6210de53b8dcfdfea4';
    console.log(url)
    //request.open('GET','https://api.openweathermap.org/data/2.5/weather?q=hyderabad&appid=93f26e3c57081a6210de53b8dcfdfea4',true);
    request.open('GET', url, true);
    request.onload = function() {
        if( request.status >=200 && request.status < 400) {
            //get the data
            console.log(" success!!!");
            let data = JSON.parse( request.responseText);
            console.log(request);
            let imgsrc = 'https://openweathermap.org/img/w/'+data.weather[0].icon+'.png';
            document.getElementById('mypara').innerHTML = data.main.temp+'F';
            document.getElementById('myimg').src= imgsrc;
            document.getElementById('speed').innerHTML = 'Wind Speed: '+ data.wind.speed+'km/h';
            document.getElementById('humidity').innerHTML = 'Humidity: '+ data.main.humidity+'%';
            document.getElementById('des').innerHTML = data.weather[0].main;
            document.getElementById('pressure').innerHTML = 'Pressure: '+ data.main.pressure+'Pa';
            console.log(data);
        }
        else {
            console.log(" could not connect to server")
        }  
    }
    // error
    request.onerror = function() {
        console.log("error!!")
    }
    
    //send the request
    request.send();

}