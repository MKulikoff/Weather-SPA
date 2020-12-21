function weather () {
 const myIcon = L.icon({
   iconUrl: 'images/map.png',
   iconSize:     [38, 38],
   iconAnchor:   [19, 38],
 });
 navigator.geolocation.getCurrentPosition(async (event) => {
   const mymap = L.map('map').setView([event.coords.latitude, event.coords.longitude], 13);
   L.marker([event.coords.latitude, event.coords.longitude], {icon: myIcon}).addTo(mymap)
   .addTo(mymap).bindPopup("<b>I am here</b>").openPopup();
   L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(mymap); 

 }, () => {
   alert("Не удалось получить текущую позицию. Возможно стоит проверить настройки геолокации")
 }, {enableHighAccuracy: true});
}
weather();
const url = "api.openweathermap.org/data/2.5/weather?q={city name}&appid=38a8a021935609be9139b32150d8bd17"


	let response = await fetch(url)
	if (response.ok) { // если HTTP-статус в диапазоне 200-299
  // получаем тело ответа (см. про этот метод ниже)
  let json = await response.json();
} else {
  alert("Ошибка HTTP: " + response.status);
}



