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
    end: 1200,
    }}
    ); //create the timeline
tl.to(headline, {opacity: 0})
.from(firstText, {scale: 4}, )
.to(firstText, {scale: 1});






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