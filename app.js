TweenMax.from(".logo", 1, {
    delay: 1.4,
    opacity: 0,
    y: 20,
    ease: Expo.easeInOut
})

TweenMax.from(".nav p", 1, {
    delay: 1.4,
    opacity: 0,
    y: 20,
    ease: Expo.easeInOut
})

TweenMax.staggerFrom(".nav ul li", 1, {
    delay: 1.5, opacity: 0, y: 20, ease: Expo.easeInOut
}, 0.1)

TweenMax.from(".cart h2", 1, {
    delay: 1.9, opacity: 0, y: 20, ease: Expo.easeInOut
})

TweenMax.staggerFrom(".cart ul li", 1, {
    delay: 1.8, opacity: 0, y: 20, ease: Expo.easeInOut
}, 0.2)

TweenMax.from(".about-text h1", 1, {
    delay: 1.6,
    opacity: 0,
    y: 40,
    ease: Expo.easeInOut
})

TweenMax.from(".about-text p", 1, {
    delay: 1.7,
    opacity: 0,
    y: 40,
    ease: Expo.easeInOut
})

TweenMax.from(".about-text button", 0.5, {
    delay: 1.7,
    opacity: 0,
    y: 20,
    ease: Expo.easeInOut
})

TweenMax.from(".product", 1, {
    delay: 1.7,
    opacity: 0,
    y: 20,
    ease: Expo.easeInOut
})

TweenMax.staggerFrom(".product div", 1, {
    delay: 1.5,
    opacity: 0,
    y: 10,
    ease: Expo.easeInOut
}, 0.1)

TweenMax.to(".overlay h1", 2, {
    opacity: 0,
    y: -80,
    ease: Expo.easeInOut
})

TweenMax.to(".overlay ", 1, {
    delay: 1,
    opacity: 0,
    top: "-100%",
    ease: Expo.easeInOut
})

