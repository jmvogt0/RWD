const intro = document.querySelector('.container');

const firstScreen = document.querySelector('.firstScreen');
const secondScreen = document.querySelector('.secondScreen');

const mainContent = document.querySelector('.main');

//First Screen
const headline = firstScreen.querySelector('.headlineContainer');
const firstText = firstScreen.querySelector(".firstText");

//Second Screen
const firstText2 = secondScreen.querySelector(".firstText");

const end = document.querySelector('.end');

let tl = gsap.timeline({scrollTrigger: {
    trigger: intro,
    start: "top top",
    pin: true,
    scrub: true,
    markers: false,
        //end:4000,
    end: () => window.innerHeight*7,
    //end: () => window.innerHeight*3,
    }}
    ); //create the timeline


//Timeline Punkte hinzufügen
//Headline ausfaden
tl.to(headline, {opacity: 0})
//From Werte definieren
.from(firstText, {scale: 4})
.from(firstText, {opacity: 0}, "<")
//Ersten textblock auf 1 Skalieren und Opacity hinzufügen
.to(firstText, {scale: 0.3})
.to(firstText, {opacity: -1}, "<")


.from(firstScreen, {opacity: 1}, "<<")
.to(firstScreen, {opacity: 0}, "<<")
    .to(firstScreen, {display: "none"})
    .from(secondScreen, {opacity: 0}, "<")
    .to(secondScreen, {opacity: 1})
    .from(firstText2, {scale: 4})
    .from(firstText2, {opacity: 0}, "<")
    //Zweiten textblock auf 1 Skalieren und Opacity hinzufügen
    .to(firstText2, {scale: 0.3})
    .to(firstText2, {opacity: -1}, "<")
    .to(secondScreen, {opacity: 0})
;