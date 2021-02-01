//create map
const map = L.map('mapid').setView([-29.9715426,-51.6285619], 15)

//create and add tilelayers
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map)

//create icon
const icon =  L.icon({
    iconUrl: ".public/images/map-marker.svg",
    iconsize: [58,68],
    iconAnchor: [29, 68],
    popupAnchor: [170,2]
})
//create popup overlay
const popup = L.popup({
    closeButton:false,
    className: "map-popup",
    minWidth: 240,
    minHeight: 240
}).setContent('Lar das meninas <a href="orphanage.html?id=1" class="choose-orphanege"> <img src="./public/images/arrow-white.svg" ></a>')

//create amd add marker
L
.marker([-29.9715426,-51.6285619], {icon})
.addTo(map)
.bindPopup(poopup)