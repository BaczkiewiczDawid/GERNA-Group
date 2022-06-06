const countUp = new CountUp('number', 0, 300000, 0, 1.5);
countUp.start();

const eCommerceCountUp = new CountUp('income__number', 0, 32000000)
eCommerceCountUp.start();

gsap.fromTo(".section__line--household", {width: 0}, {width: 80, duration: 0.8})

tl = new TimelineMax({});
tl.staggerFrom('.hidden__text', 1.5, {y:"100%", ease:Power4.easeOut}, 0.15, 0)

tla = new TimelineMax({});
tl.staggerFrom('.section__house-image', 1.5, { y:"100%", ease:Power4.easeOut}, 0, .6);

const throwSection = new TimelineMax();
const throwSectionController = new ScrollMagic.Controller();

throwSection.fromTo('.section__line--throw', 1, {width: 0}, {width: 80, duration: .8}, 0)

const throwSectionScene = new ScrollMagic.Scene({
    triggerElement: '.section__house-image'
})
.setTween(throwSection).addTo(throwSectionController)
