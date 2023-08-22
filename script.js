function init(){
    gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector(".main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the ".main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy(".main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
});


// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();

}
init()

var crs = document.querySelector(".cursor");
var main = document.querySelector(".main");
document.addEventListener("mousemove",function(dets){
  crs.style.left = dets.x+20+"px"; 
  crs.style.top = dets.y+20+"px"; 
})

var vid = document.querySelector(".main video");
vid.addEventListener("mouseenter",function(){
  vid.style.filter = "blur"
})
vid.addEventListener("mouseleave",function(){
  vid.style.filter ="none"
})
var tl = gsap.timeline({
    scrollTrigger :{
        trigger : ".page1 h1",
        scroller : ".main",
        // markers : true,
        start : "top 20",
        end : "top 0%",
        scrub : 3
    }
})
tl.to(".page1 h1",{
    x : -80,
    duration : 1,
    
    
},"amin")
tl.to(".page1 h2",{
    x : 100
},"amin")
tl.to(".page1 video",{
    width :"90%"
},"amin")

var tl2 = gsap.timeline({
  scrollTrigger :{
      trigger : ".page1 h1",
      scroller : ".main",
      // markers : true,
      start : "top -115%",
      end : "top -120%",
      scrub : 3
  }
})
tl2.to(".main",{
  backgroundColor : "#fff"
})

var tl3 = gsap.timeline({
  scrollTrigger: {
      trigger: ".page1 h1",
      scroller: ".main",
      // markers:true,
      start: "top -280%",
      end: "top -310%",
      scrub: 3
  }
})

tl3.to(".main",{
  backgroundColor:"#0F0D0D"
},"maam")
tl3.to(".page3",{
  backgroundColor:"#0F0D0D"
},"maam")

var boxes = document.querySelectorAll(".box");
boxes.forEach(function(elem){
  elem.addEventListener("mouseenter",function(){
    var att = elem.getAttribute("data-image")
    crs.style.width = "300px"
    crs.style.height = "250px"
    crs.style.borderRadius = "0"
    crs.style.backgroundImage = `url(${att})`
  })
  elem.addEventListener("mouseleave",function(){
    var att = elem.getAttribute("data-image")
    crs.style.width = "20px"
    crs.style.height = "20px"
    crs.style.borderRadius = "50%"
    crs.style.backgroundImage = `none`
  })
})

var purple = document.querySelector(".purple");
var h4 = document.querySelectorAll(".nav h4");

// h4.forEach(function(elem){
//   elem.addEventListener("mouseenter",function(){
//     purple.style.display = "block"
//     purple.style.opacity = "1"
//     hh.innerHTML = "work"
//   })
//   elem.addEventListener("mouseleave",function(){
//     purple.style.display = "none"
//     purple.style.opacity = "0"
//   })
// })

var hom = document.querySelector(".nav #hom");
var wrk = document.querySelector(".nav #wrk");
var cnt = document.querySelector(".nav #cnt");
var sup = document.querySelector(".nav #sup");

var home = document.querySelector("#home");
var work = document.querySelector("#work");
var contact = document.querySelector("#contact");
var support = document.querySelector("#support");

hom.addEventListener("mouseenter",function(){
  home.style.display = "block"
  home.style.opacity = "1"
  
})
hom.addEventListener("mouseleave",function(){
  home.style.display = "none"
  home.style.opacity = "0"
})


wrk.addEventListener("mouseenter",function(){
  work.style.display = "block"
  work.style.opacity = "1"
  
})
wrk.addEventListener("mouseleave",function(){
  work.style.display = "none"
  work.style.opacity = "0"
})


cnt.addEventListener("mouseenter",function(){
  contact.style.display = "block"
  contact.style.opacity = "1"
  
})
cnt.addEventListener("mouseleave",function(){
  contact.style.display = "none"
  contact.style.opacity = "0"
})


sup.addEventListener("mouseenter",function(){
  support.style.display = "block"
  support.style.opacity = "1"
  
})
sup.addEventListener("mouseleave",function(){
  support.style.display = "none"
  support.style.opacity = "0"
})