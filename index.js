const rule = CSSRulePlugin.getRule("span::after");

const tl = gsap.timeline({ defaults: { ease: "power4.out", duration: 1 } });

tl.from(".anim1", { y: 50, stagger: 0.3, opacity: 0 })
  .to(rule, { duration: 1.8, cssRule: { scaleY: 0 } }, "-=1.2")
  .from("aside", { backgroundPosition: "200px 0px", opacity: 0 }, "-=1.5")
  .from("img", { y: 50, opacity: 0 }, "-=1");

document.getElementById("cta").addEventListener("click", () => {
  tl.reversed() ? tl.play() : tl.reverse();
});

// gsap.from(".anim1", {
//   opacity: 0,
//   duration: 1,
//   y: -50,
//   ease: "power4.out",
//   stagger: 0.6,
// });

// gsap.from("img", {
//   duration: 1,
//   y: 30,
//   opacity: 0,
//   delay: 1.4,
// });

// gsap.from("aside", {
//   duration: 1,
//   backgroundPosition: "200px 0px",
//   opacity: 0,
//   delay: 1.1,
// });

// gsap.to(rule, { duration: 1.8, cssRule: { scaleY: 0 } });
