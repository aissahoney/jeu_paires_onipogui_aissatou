let src1="./public/img/one.webp"
let src2="./public/img/two.webp"
let src3="./public/img/three.webp"
let src4="./public/img/four.webp"
let src5="./public/img/five.webp"
let src6="./public/img/six.webp"
let src7="./public/img/seven.webp"

let cards=[src2,src3,src4];
console.log(cards)

let place=[];
    for (let i = cards.length-1; cards.length>0; i--) {
        place.push(cards[i])
        cards.splice(i,1)
    }
console.log(cards) 
console.log(place)



let lineOne= document.querySelector(".first-line")
let lineTwo= document.querySelector(".second-line")
