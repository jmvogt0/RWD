const intro = document.querySelector('.intro');
const video = intro.querySelector('video');
const text = intro.querySelector('h1');
//END SECTION
const section = document.querySelector('section');
const end = section.querySelector('h1');

ScrollTrigger.create({
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
const h2 = sndsection.querySelector('h2');

gsap.fromTo(h2, {scale: 5}, {scale: 1, scrollTrigger: 
    {
    trigger: sndsection,
    start: "top top",
    pin: true,
    scrub: true,
    markers: true,
    end: 12000,
    }
});

