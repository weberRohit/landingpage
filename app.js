const toggleButton = document.getElementById('nav-toggle');
const navLinks = document.getElementById('nav-links');

toggleButton.addEventListener('click',() => {
  navLinks.classList.toggle('active');
})

var timeline = gsap.timeline();

timeline.from("nav",{
    opacity:0,
    delay:1,
    
})

timeline.from("nav .club-logo,.nav-links ul li a",{
    y:-80,
    opacity:0,
    duration:0.5,
    // stagger:0.3,
})

timeline.from(".header-left h1",{
    x:-500,
    opacity:0,
    duration:0.5,
    stagger:0.3,
})

timeline.from(".header-right img",{
    scale:0.5,
    opacity:0,
    duration:2,
})

timeline.from(".header-left p , .small-bold-text",{
    opacity:0,
    stagger:0.5,
})
