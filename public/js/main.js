let h3= document.querySelector("h3")
let div=document.querySelector(".jeu")
h3.addEventListener("click", function () {
    div.style.display="flex"
    div.style.flexDirection= "column";
    div.style.justifyContent="center";
    div.style.alignItems= "center";
    div.style.gap= "20px";
    
})


let src1 = "./public/img/one.webp"
let src2 = "./public/img/two.webp"
let src3 = "./public/img/three.webp"
let src4 = "./public/img/four.webp"
let src5 = "./public/img/five.webp"
let src6 = "./public/img/six.webp"
let src7 = "./public/img/seven.webp"
let sevenCards = [src1, src2, src3, src4, src5, src6, src7]
// ------choix des cartes------------------
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
    if (pairs[0]!= pairs[1]) {
        return true;
    }
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
                // console.log(cards)
                pairs.push(item.src)
                
                if (pairs.length == 2) {
                    console.log(pairs);
                    if (verify(pairs) == true) {
                        item.style.opacity = "0.5"
                        console.log(item.previousElementSibling.previousElementSibling.previousElementSibling)
                        console.log(item)
                        console.log("tu as trouvé une pairs")
                    }
                }

            }
            if (item.classList.contains("backImg")) {
                item.style.display = "none"

            }
         

        })
    })
})


