// Ali code



link = "https://api.openweathermap.org/data/2.5/weather?q=Amsterdam&appid=404c06892ba05219fddc565047c32644&units=metric";
var request = new XMLHttpRequest();
request.open('GET',link,true);
request.onload = function(){
    var obj = JSON.parse(this.response);
    let milliSecondsSindsEpoch = obj.sys.sunrise * 1000;
    let milliSecondsSindsEpoch1 = obj.sys.sunset * 1000;
    datum = new Date(milliSecondsSindsEpoch);
    datum2 = new Date(milliSecondsSindsEpoch1);
    document.getElementById('location1').innerHTML = obj.name;
    document.getElementById('sunset').innerHTML = datum2.toLocaleTimeString('nl-NL', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' } )
    document.getElementById('sunrise1').innerHTML = datum.toLocaleTimeString('nl-NL', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' } )
    console.log(obj)
}

if (request.status==200){
    console.log("ERROR");
}

request.send();
let datum2;
const URL = 'https://api.openweathermap.org/data/2.5/weather?q=Amsterdam&appid=404c06892ba05219fddc565047c32644&units=metric';
fetch(URL)
    .then(response => response.json())
    .then(weather => {
        console.log(weather);
        let milliSecondsSindsEpoch = weather.sys.sunrise * 1000;
        datum2 = new Date(milliSecondsSindsEpoch);
        console.log(datum2.toLocaleString());
    });


    request.send();
    let datum1;
    const URL1 = 'https://api.openweathermap.org/data/2.5/weather?q=Amsterdam&appid=404c06892ba05219fddc565047c32644&units=metric';
    fetch(URL)
        .then(response => response.json())
        .then(weather => {
            console.log(weather);
            let milliSecondsSindsEpoch1 = weather.sys.sunset * 1000;
            datum1 = new Date(milliSecondsSindsEpoch1);
            console.log(datum.toLocaleString());
        });
