const intro = document.querySelector('.container');

const firstScreen = document.querySelector('.firstScreen');
const secondScreen = document.querySelector('.secondScreen');

const mainContent = document.querySelector('.main');

//First Screen
const headline = firstScreen.querySelector('.headlineContainer');
const firstText = firstScreen.querySelector(".firstText");



const end = document.querySelector('.end');

let tl = gsap.timeline({scrollTrigger: {
    trigger: firstScreen,
    start: "top top",
    pin: true,
    scrub: true,
    markers: false,
            end:10000,
        pinSpacing: true,
    //end: () => window.innerHeight*7,
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
;

const video = secondScreen.querySelector('#video');
//Second Screen
const firstText2 = secondScreen.querySelector(".firstText");

let tl2 = gsap.timeline({scrollTrigger: {
    trigger: secondScreen,
    start: "top top",
    end: 16000,
    pin: true,
    scrub: true,
    markers: false,
    //onToggle: , //self => console.log("toggled, isActive:", self.isActive),
    onUpdate: self => {
        video.currentTime = self.progress * 10;
    },
    }}
    );

tl2.from(firstText2, {scale: 4})
.from(firstText2, {opacity: 0}, "<")
//Zweiten textblock auf 1 Skalieren und Opacity hinzufügen
.to(firstText2, {scale: 0.3})
.to(firstText2, {opacity: -1}, "<");

//.to(firstScreen, {display: "none"})
//.from(secondScreen, {opacity: 0}, "<")
//.to(secondScreen, {opacity: 1})
//.from(firstText2, {scale: 4})
//.from(firstText2, {opacity: 0}, "<")
//Zweiten textblock auf 1 Skalieren und Opacity hinzufügen
//.to(firstText2, {scale: 0.3})
//.to(firstText2, {opacity: -1}, "<")
//.to(secondScreen, {opacity: 0})

//Fade-in Animations for Images
let images = document.querySelector('.images');
let image1 = images.querySelector('.imageContainer1');
let image2 = images.querySelector('.imageContainer2');

/*
let tl3 = gsap.timeline({scrollTrigger: {
        trigger: image1,
        start: "100 bottom",
        pin: false,
        scrub: true,
        markers: false,
        end: "500 bottom",
        pinSpacing: true,
        //end: () => window.innerHeight*7,
        //end: () => window.innerHeight*3,
    }}
); //create the timeline
tl3.from(image1, {scale: 0.7})
    .from(image1, {opacity: 0.7}, "<")
    .to(image1, {scale: 1})
    .to(image1, {opacity: 1}, "<");


let tl4 = gsap.timeline({scrollTrigger: {
        trigger: image2,
        start: "bottom bottom",
        pin: false,
        scrub: true,
        markers: false,
        end: "100 100",
        pinSpacing: true,
        //end: () => window.innerHeight*7,
        //end: () => window.innerHeight*3,
    }}
); //create the timeline
tl4.from(image2, {scale: 0.7})
    .from(image2, {opacity: 0.7})
    .to(image2, {scale: 1})
    .to(image2, {opacity: 1});*/




//Functions for Image Reveal on Scroll

function animateFrom(elem, direction) {
    direction = direction || 1;
    var x = 0,
        y = direction * 100;
    if(elem.classList.contains("gs_reveal_fromLeft")) {
        x = -100;
        y = 0;
    } else if (elem.classList.contains("gs_reveal_fromRight")) {
        x = 100;
        y = 0;
    }
    elem.style.transform = "translate(" + x + "px, " + y + "px)";
    elem.style.opacity = "0";
    gsap.fromTo(elem, {x: x, y: y, autoAlpha: 0, scale: 0.5}, {
        duration: 2.0,
        x: 0,
        y: 0,
        autoAlpha: 1,
        scale: 1,
        ease: "expo",
        overwrite: "auto"
    });
}

function hide(elem) {
    gsap.set(elem, {autoAlpha: 0});
}

document.addEventListener("DOMContentLoaded", function() {
    gsap.registerPlugin(ScrollTrigger);

    gsap.utils.toArray(".imageContainerElem").forEach(function(elem) {
        hide(elem); // assure that the element is hidden when scrolled into view

        ScrollTrigger.create({
            trigger: elem,
            onEnter: function() { animateFrom(elem) },
            //onEnterBack: function() { animateFrom(elem, -1) },
            //onLeave: function() { hide(elem) } // assure that the element is hidden when scrolled into view
        });
    });
});

//Functions for Text Reveal on Scroll

function animateFromText(elem, direction) {
    direction = direction || 1;
    //var x = 0,
    //    y = direction * 100;
    //elem.style.transform = "translate(" + x + "px, " + y + "px)";
    elem.style.opacity = "0";
    gsap.fromTo(elem, {opacity: 0, autoAlpha: 0}, {
        duration: 3.5,
        opacity: 1.0,
        autoAlpha: 1,
        ease: "expo",
        overwrite: "auto"
    });
}

function hideText(elem) {
    gsap.set(elem, {autoAlpha: 0});
    gsap.set(elem, {opacity: 0});
}

document.addEventListener("DOMContentLoaded", function() {
    gsap.registerPlugin(ScrollTrigger);

    gsap.utils.toArray(".textReveal").forEach(function(elem) {
        hide(elem); // assure that the element is hidden when scrolled into view

        ScrollTrigger.create({
            trigger: elem,
            onEnter: function() { animateFromText(elem) },
            onEnterBack: function() { animateFromText(elem, -1) },
            onLeave: function() { hideText(elem) } // assure that the element is hidden when scrolled into view
        });
    });
});

