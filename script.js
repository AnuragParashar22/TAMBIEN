function show(){
    gsap.registerPlugin(ScrollTrigger);
    const locoScroll = new LocomotiveScroll({
      el: document.querySelector("#main"),
      smooth: true
    });
    locoScroll.on("scroll", ScrollTrigger.update);
     ScrollTrigger.scrollerProxy("#main", {
      scrollTop(value) {
        return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
      }, 
         getBoundingClientRect() {
        return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
      },
      pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
    });
     ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
     ScrollTrigger.refresh();
}
show();

gsap.to(".page7imgbox",{
  width:"100%",
  ease: "power1.out",
  stagger:2,
  delay:2,
  duartion:2,
  repeat:-1
})

window.addEventListener("load",function(){
  console.log(document.querySelector("#page5").offsetWidth);
  var wd =  document.querySelector("#page5>#page5container>img").offsetWidth;
  
  wd = Number(wd-document.querySelector("#page5").offsetWidth);
  console.log(wd);
  gsap.to("#page5>#page5container>img",{
      x:-(wd),
      ease:"none",
      scrollTrigger:{
          trigger:"#page5",
          scroller:"#main",
          pin:true,
          scrub:true,
          start:"top top",
          end:"+=100%"
      }
  })
  
})


// gsap.from("#page3>p",{
//   y:50,
//   stagger:0.5,
//   opacity:0,
//   scrollTrigger:{
//     trigger:"#page3",
//     scroller:"#main",
//     // markers:true,
//     start:"top 40%"
//   }
// })
// gsap.from("#page3bottom",{
//   y:50,
//   stagger:1.5,
//   opacity:0,
//   scrollTrigger:{
//     trigger:"#page3",
//     scroller:"#main",
//     // markers:true,
//     start:"top 20%"
//   }
// })

gsap.from("#textbox>h6",{
 
  yoyo:true,

  repeat:-1,
rotate:3
})
var tl = gsap.timeline();
tl

.to("#loadertext>h4",{
  delay:2,
  y:-70,
  stagger:0.2
})

.to("#loader",{
 
  translateY:"-100%",
  duartion:5
})
.from("#p1first",{
  y:30,
  ease:Power1,
  opacity:0
})
.from("#textbox",{
  y:30,
  opacity:0,
  ease:Power1
})
.from("#p1second",{
  y:30,
  opacity:0,
  ease:Power1
})
