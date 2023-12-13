let divBg = document.querySelector(".blackBg")
// let divTitle=document.querySelector(".title")

let h3 = document.querySelector("h3")
let input = document.querySelector("input")
let pseudo = input.value
let divJeu = document.querySelector(".jeu")
h3.addEventListener("click", function () {
    divBg.style.display = "none";
    divJeu.style.display = "flex";
    divJeu.style.flexDirection = "column";
    divJeu.style.justifyContent = "center";
    divJeu.style.alignItems = "center";
    divJeu.style.gap = "15px";
})
// ---------timer------------------
let m = 0;
let s = 0;
let ms = 0;
let intervalMiliseconde;
let intervalSeconde;
let intervalMinute;
let intervalHeure;

function setMiliseconde() {

    if (ms == 999) {
        ms = 0;
    }
    ms++
    document.getElementById("ms").innerHTML = ms + " ms"
}
function setSeconde() {

    if (s == 59) {
        s = 0;
    }
    s++
    document.getElementById("s").innerHTML = s + " s"
}
function setMinute() {

    if (m == 59) {
        m = 0;
    }
    m++

    document.getElementById("m").innerHTML = m + " m"
}

function start() {
    intervalMinute = setInterval(setMinute, 60000);
    intervalSeconde = setInterval(setSeconde, 1000);
    intervalMiliseconde = setInterval(setMiliseconde, 1);
}
let divScore = document.querySelector(".score")
function stop() {
    clearInterval(intervalMinute)
    clearInterval(intervalSeconde)
    clearInterval(intervalMiliseconde)
    divJeu.style.display = "none";
    divScore.style.display = "flex";
    divScore.style.flexDirection = "column";
    divScore.style.justifyContent = "center";
    divScore.style.alignItems = "center";
    divScore.style.height="250px"
    divScore.style.width="500px"
    divScore.style.border="5px solid red"


}
function reset() {
    m = 0;
    s = 0;
    ms = 0;
    document.getElementById("m").innerHTML = "0 m"
    document.getElementById("ms").innerHTML = "0 ms"
    document.getElementById("s").innerHTML = "0 s"
}
// --------------------------------


// ------choix des cartes------------------
let src1 = "./public/img/one.webp"
let src2 = "./public/img/two.webp"
let src3 = "./public/img/three.webp"
let src4 = "./public/img/four.webp"
let src5 = "./public/img/five.webp"
let src6 = "./public/img/six.webp"
let src7 = "./public/img/seven.webp"
let sevenCards = [src1, src2, src3, src4, src5, src6, src7]

let cardsOfThree = []
let i = 0
while (i < 3) {
    let indexElement = Math.floor(Math.random() * sevenCards.length)
    let y = sevenCards.splice(indexElement, 1)[0]
    sevenCards.pop(y)
    cardsOfThree.push(y)
    i++
}
let cards = cardsOfThree.concat(cardsOfThree) //pour avoir chaque element en double dans tableau
// console.log(cards)         



// ----------repartion des cases--------------
let img = document.querySelectorAll("img")
// console.log(img)
img.forEach(element => {
    if (element.classList.contains("frontImg")) {
        element.src = cards.splice(Math.floor(Math.random() * cards.length), 1);
        // console.log(cards)
    }
});


// ---------verifier les paires-----------------
let pairs = [];
function verify(pairs) {
    if (pairs[0].src == pairs[1].src) {
        pairs[0].style.opacity = "0.2"
        // pairs[0].style.border = "1px solid red"
        pairs[1].style.opacity = "0.2"
        // pairs[1].style.border= "1px solid red"

        // return true
    }
    else {
        pairs[0].style.display = "none"
        pairs[0].previousElementSibling.style.display = "block"
        pairs[1].style.display = "none"
        pairs[1].previousElementSibling.style.display = "block"
    }
    pairs.pop()
    pairs.pop()
}

// ---------------remplace les paires trouvées-----------------
// let replacePair=document.createElement("img")
// img.className="red"

let col = document.querySelectorAll(".col");
// console.log(col) 


col.forEach(element => {
    element.addEventListener("click", function () {
        // console.log(element)
        let images = element.children
        // console.log(images)
        Array.from(images).forEach(item => {
            if (item.classList.contains("frontImg")) {
                item.style.display = "block"
                pairs.push(item)
                console.log(pairs);
                setTimeout(() => {
                    verify(pairs)
                }, 1200)
            }
            if (item.classList.contains("backImg")) {
                item.style.display = "none"
            }
        })
    })
})

