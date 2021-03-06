link = "https://api.openweathermap.org/data/2.5/weather?q=Amsterdam&appid=35c621e8046ba673b4c87627b96fc479";
var request = new XMLHttpRequest();
request.open('Get',link,true);
request.onload = function(){
    var obj = JSON.parse(this.response);
    console.log(obj);
    document.getElementById('weather').innerHTML = obj.weather[0].description;
    document.getElementById('location').innerHTML = obj.name;
  document.getElementById('temp').innerHTML = obj.main.temp - 273.15;
    document.getElementById('icon').src = "http://openweathermap.org/img/w/"+obj.weather[0].icon+".png";
}
if(request.status==200){
    console.log("ERROR");
}
request.send();