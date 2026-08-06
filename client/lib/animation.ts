export const ANIMATION = {
  reveal: {
    x: 0,
    y: 30,
    duration: 0.55,
    ease: "power2.out",
    start: "top 90%",
    once: true,
  },

  stagger: {
    x: 0,
    y: 30,
    duration: 0.55,
    stagger: 0.08,
    ease: "power2.out",
    start: "top 90%",
    once: true,
  },

  floating: {
    duration: 3,
    y: -6,
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut",
  },

  parallax: {
    yPercent: -15,
    ease: "none",
    start: "top bottom",
    end: "bottom top",
    scrub: true,
  },

  counter: {
    duration: 1.5,
    ease: "power2.out",
    start: "top 90%",
    once: true,
  },
} as const;