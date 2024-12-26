document.addEventListener("DOMContentLoaded", function() {
    Shery.mouseFollower();
    Shery.makeMagnet("#right .magnet");
    Shery.makeMagnet("#left img");
    
    const tl = gsap.timeline({ defaults: { ease: "expo.out" } });
    tl.from("#page-2 video", {
        y: 200,
        opacity: 0
    })
    .from("#heading h1", {
        y: 30,
        clipPath: "inset(0 0 100% 0)", 
        ease: "power2.out",
        duration: 2
    })
    .from("#right a", {
        y: 30,
        opacity: 0,
        duration: 1
    }, "-=1.8");

    Shery.hoverWithMediaCircle(".hvr", {videos: ["./assets/hneg.mp4"] });

    const videos = document.querySelectorAll("#fright .images video");
    const sections = document.querySelectorAll(".fleftelem");

    gsap.to(".fleftelem", {
        scrollTrigger: {
            trigger: "#fimages",
            pin: true,
            start: "top top",
            end: "bottom bottom", 
            endTrigger: ".last",
            scrub: 1,
        },
        y: "-300%",
        ease: "none"
    });

    sections.forEach((section, index) => {
        ScrollTrigger.create({
            trigger: section,
            start: "top center",
            onEnter: () => {
                videos.forEach((video, videoIndex) => {
                    video.style.opacity = videoIndex === index ? "1" : "0";
                });
            }
        });
    });

    Shery.imageEffect("#fright .images", {
        style: 4,
        config: {
            onMouse: {value: 1},
            "zindex": {"value": "999999", "range": [-9999999, 9999999]}
        },
        slideStyle: (setScroll) => {
            sections.forEach(function(section, index) {
                ScrollTrigger.create({
                    trigger: section,
                    start: "top top",
                    scrub: 1,
                    onUpdate: function(prog) {
                        setScroll(prog.progress + index);
                    },
                });
            });
        },
    });

    const marquee = document.querySelector('.marquee');
    marquee.innerHTML += marquee.innerHTML;

    gsap.to('.marquee', {
        xPercent: -50,
        duration: 20,
        ease: 'none',
        repeat: -1
    });

});
