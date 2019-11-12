let myMap;
let canvas;
let canvas2;
let myImage;
let myImage2;
let myImage3;
let myImage4;
let myImage5;
let myImage6;
let myImage7;

var position;
var date, hours, minutes, seconds;

const mappa = new Mappa('MapboxGL',
"pk.eyJ1IjoiY2VjaWdldGEiLCJhIjoiY2sydnIxcTdhMDM2cDNjcGQ4dmpuM3ZmcSJ9.FsdNQQ6ihMvSTP-PClIoog");

var euLat = 54.5260;
var euLon = 15.2551;

var chLat = 35.8617;
var chLon = 104.1954;

var usLat = 37.0902;
var usLon = -95.7129;

var ruLat = 61.5240;
var ruLon = 105.3188;

var auLat = -25.2744;
var auLon = 133.7751;

var afLat = -6.6111;
var afLon = 20.9394;

var saLat = -8.7832;
var saLon = -55.4915;

const options = {
  lat: 20,
  lng: 0,
  zoom: 1.5,
  style: "mapbox://styles/mapbox/light-v8"
}

function preload() {
  myImage = loadImage("Risorsa 1.png");
  myImage2 = loadImage("Risorsa 1.png");
  myImage3 = loadImage("Risorsa 1.png");
  myImage4 = loadImage("Risorsa 1.png");
  myImage5 = loadImage("Risorsa 1.png");
  myImage6 = loadImage("Risorsa 1.png");
  myImage7 = loadImage("Risorsa 1.png");

  position = getCurrentPosition();
}

function setup() {
  canvas = createCanvas(windowWidth,windowHeight);

  myMap = mappa.tileMap(options);
  myMap.overlay(canvas);


    date = new Date(position.timestamp);
    hours = date.getHours();
    minutes = "0" + date.getMinutes();
    seconds = "0" + date.getSeconds();

    var formattedTime = hours + ":" + minutes.substr(-2) + ':' + seconds.substr(-2);
    createElement("p", "  Latitude: " + position.latitude);
    createElement("p", "  Longitude: " + position.longitude);
    createElement("p", "  Time: " + formattedTime);
    createElement("p", "                   Italy produces 0.13 kg of plastic per person everyday");


}

function draw() {
  clear();


  var point = myMap.latLngToPixel(position.latitude, position.longitude);
  fill('red');
  stroke("pink");
  strokeWeight(7)
  ellipse(point.x, point.y, 10);

  imageMode(CENTER);

  var point2 = myMap.latLngToPixel(euLat, euLon);
  image(myImage, point2.x, point2.y,  myImage.width*0.5, myImage.height*0.5);

  var point3 = myMap.latLngToPixel(chLat, chLon);
  image(myImage2, point3.x, point3.y, myImage2.width*2, myImage2.height*2 );

  var point4 = myMap.latLngToPixel( usLat, usLon);
  imageMode(CENTER);
  image(myImage3, point4.x, point4.y, myImage3.width*2, myImage3.height*2 );

  var point5 = myMap.latLngToPixel( ruLat, ruLon);
  imageMode(CENTER);
  image(myImage4, point5.x, point5.y, myImage4.width*1.5, myImage4.height*1.5 );

  var point6 = myMap.latLngToPixel( auLat, auLon);
  imageMode(CENTER);
  image(myImage5, point6.x, point6.y, myImage5.width*0.2, myImage5.height*0.2 );

  var point7 = myMap.latLngToPixel( afLat, afLon);
  imageMode(CENTER);
  image(myImage6, point7.x, point7.y, myImage6.width*0.3, myImage6.height*0.3 );

  var point8 = myMap.latLngToPixel( saLat, saLon);
  imageMode(CENTER);
  image(myImage7, point8.x, point8.y, myImage7.width*1.5, myImage7.height*1.5 );

}
