
const docOne = document.querySelector (".docOne");
docOne.addEventListener("click", startAnimation);
function startAnimation () {
    gsap.to(".docOne", {scale:2, duration:0.2})
}

docOne.addEventListener("dblclick", finishAnimation);
function finishAnimation () {
    gsap.to(".docOne", {scale:1, duration:0.2})
}

const docTwo = document.querySelector (".docTwo");
docTwo.addEventListener("click", startAnimationTwo);
function startAnimationTwo () {
    gsap.to(".docTwo", {scale:2, duration:0.2})
}

docTwo.addEventListener("dblclick", finishAnimationTwo);
function finishAnimationTwo () {
    gsap.to(".docTwo", {scale:1, duration:0.2})
}

const docThree = document.querySelector (".docThree");
docThree.addEventListener("click", startAnimationThree);
function startAnimationThree () {
    gsap.to(".docThree", {scale:2, duration:0.2})
}

docThree.addEventListener("dblclick", finishAnimationThree);
function finishAnimationThree () {
    gsap.to(".docThree", {scale:1, duration:0.2})
}

const docFour = document.querySelector (".docFour");
docFour.addEventListener("click", startAnimationFour);
function startAnimationFour () {
    gsap.to(".docFour", {scale:2, duration:0.2})
}

docFour.addEventListener("dblclick", finishAnimationFour);
function finishAnimationFour () {
    gsap.to(".docFour", {scale:1, duration:0.2})
}

const docFive = document.querySelector (".docFive");
docFive.addEventListener("click", startAnimationFive);
function startAnimationFive () {
    gsap.to(".docFive", {scale:2, duration:0.2})
}

docFive.addEventListener("dblclick", finishAnimationFive);
function finishAnimationFive () {
    gsap.to(".docFive", {scale:1, duration:0.2})
}


gsap.to(".name", {
text: "Butylava Aksana",
duration:2,
delay:1.3,
repeat:-1,
yoyo: true
})

gsap.from(".photoTwo", {
    x: 300,
    opacity:0,
    duration: 1,
    delay:2,
})

gsap.from(".itemLink", {
    opacity:0,
    stagger:.3,
    duration: 1,
    delay:1,
    repeat:-1
})

gsap.from(".workFirst", {
    opacity:0,
    stagger: 0.8,
    duration: 5,
    delay:3,
    repeat:-1
})


gsap.from(".buttonFirst", {
    opacity:0,
    duration: 2.5,
    delay:2,
    repeat:-1
})

gsap.from(".certificateOne", {
    x: -300,
    opacity:0,
    duration: 1,
    delay:1.5,
})

gsap.from(".certificateThree", {
    x: 300,
    opacity:0,
    duration: 1,
    delay:1.5,
})

gsap.from(".certificateTwo", {
    y: -300,
    opacity:0,
    duration: 1,
    delay:1,
})


gsap.from(".buttonSecond", {
    opacity:0,
    duration: 3,
    delay:1,
    repeat:-1
})


gsap.from(".photoThree", {
    y: 800,
    opacity:0,
    duration: 1.5,
    delay:2,
})

gsap.from(".mail", {
    x: -400,
    opacity: 0,
    duration: 0.5,
    delay:2,
})

gsap.from(".text", {
    x: 800,
    opacity:0,
    duration: 1.8,
    delay:2,
})

gsap.from(".buttonThree", {
    opacity:0,
    duration: 3,
    delay:2.8,
    repeat:-1
})

