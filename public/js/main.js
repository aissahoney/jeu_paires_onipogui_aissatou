let src1="./public/img/one.webp"
let src2="./public/img/two.webp"
let src3="./public/img/three.webp"
let src4="./public/img/four.webp"
let src5="./public/img/five.webp"
let src6="./public/img/six.webp"
let src7="./public/img/seven.webp"

let sevenCards=[src1,src2,src3,src4,src5,src6,src7]
let cardsOfThree=[]
let i=0
while (i<3) {
    let indexElement= Math.floor(Math.random()*sevenCards.length)
    let y=sevenCards.splice(indexElement,1)[0]
    sevenCards.pop(y)
    cardsOfThree.push(y)
i++
}
let cards=cardsOfThree.concat(cardsOfThree)
console.log(cards)

let col=document.querySelectorAll(".col");
// console.log(col)
let img= document.querySelectorAll("img")
// console.log(img)

col.forEach(element => {
    element.addEventListener("click", function () {
        // console.log(element)
        let images= element.children
        // console.log(images)
        Array.from(images).forEach( item=> {
            if (item.classList.contains("backImg")) {
                item.style.display="none"
                
            } 
            if(item.classList.contains("frontImg")) {
                item.src = cards[Math.floor(Math.random()*cards.length)]
                item.style.display="block"
                // console.log(item)
            }
            
        }); 

    })
})
