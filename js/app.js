const intro = document.querySelector('.intro');
const headline = intro.querySelector('h1');
const firstText = intro.querySelector(".firstText");

const end = document.querySelector('.end');

let tl = gsap.timeline({scrollTrigger: {
    trigger: intro,
    start: "top top",
    pin: true,
    scrub: true,
    markers: true,
    end: 4000,
    }}
    ); //create the timeline

//Timeline Punkte hinzufügen
//Headline ausfaden
tl.to(headline, {opacity: 0})
//From Werte definieren
.from(firstText, {scale: 4})
.from(firstText, {opacity: 0}, "<")
//Ersten textblock auf 1 Skalieren und Opacity hinzufügen
.to(firstText, {scale: 1})
.to(firstText, {opacity: 1}, "<");






/*ScrollTrigger.create({
    trigger: intro,
    start: "top top",
    end: 10000,
    pin: true,
    scrub: true,
    markers: true,
    //onToggle: , //self => console.log("toggled, isActive:", self.isActive),
    onUpdate: self => {
        video.currentTime = self.progress * 10;
    }
});

const sndsection = document.querySelector('.sndSection');
const div = sndsection.querySelector('div');

gsap.fromTo(div, {scale: 5}, {scale: 1, scrollTrigger: 
    {
    trigger: sndsection,
    start: "top top",
    pin: true,
    scrub: true,
    markers: true,
    end: 12000,
    }
});

*/