const  c=document.querySelector("section")
let abtn=document.querySelectorAll(".btn")
abtn.forEach((bt)=>
bt.addEventListener("click",()=>{console.log(bt.id)
        if(window.innerWidth>600){
                    c.scrollLeft+=bt.id=="left" ?-1000:1000}
                    else{
                        c.scrollLeft+=bt.id=="left" ?-innerWidth+60:innerWidth-60
                    }
}
))

gsap.from("#top h2",{
    y:100,
    opacity:0,
    delay:0.5,
    duration:0.8,
    stagger:0.3,
})
gsap.from("#page1 .btn2",{
    scale:0,
    opacity:1,
    delay:0.5,
    duration:0.8,
    stagger:0.3,
})
gsap.from("#page1 .clr",{
    x:-200,
    opacity:0,
    delay:0.5,
    duration:0.8,
    stagger:0.3,
})
gsap.from("#top2",{
    x:200,
    opacity:0,
    delay:0.5,
    duration:0.8,
    stagger:0.3,
})
gsap.from("section",{
    scale:0.5,
    opacity:0.3,
    delay:0.5,
    duration:0.8,
    stagger:0.3,
})
// let nav1=document.querySelector("#st4")
// let nav2=document.querySelector("#st5")
// if(window.innerWidth<600){
//     nav1.style.opacity=1
//     nav2.style.opacity=0
// }
// let clr=document.querySelector(".clr")
// setInterval(clrchange,3000)
// function clrchange(){
//     r=Math.random()*255
//     g=Math.random()*255
//     b=Math.random()*255
  
//     clr.style.backgroundColor=`rgb(${r},${g},${b})`
    
// }
let nbtn=document.querySelector("#nbtn")
let cbtn=document.querySelector("#cut")
let npage=document.querySelector(".dpage")
nbtn.addEventListener("click",()=>{
    
    npage.style.marginLeft="5px"
})
cut.addEventListener("click",()=>{
    
    npage.style.marginLeft="-1500px"
})
ScrollTrigger.refresh();
function animation(){
    gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});





// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

}
animation()
gsap.to("nav",{
    transform:"translate(0,-200%)",
    scrollTrigger:{
        trigger:"#page1",
        scroller:"#main",
        marker:true,
        start:"top 0%",
        end:"top -5%",
        scrub:true,
    }

})

