let src1="./public/img/one.webp"
let src2="./public/img/two.webp"
let src3="./public/img/three.webp"
let src4="./public/img/four.webp"
let src5="./public/img/five.webp"
let src6="./public/img/six.webp"
let src7="./public/img/seven.webp"

let cards=[src2,src3,src4];
// let srcRandom=cards[Math.floor(Math.random()*cards.length)]
// console.log(srcRandom)

// let place=[];
//     for (let i = cards.length-1; cards.length>0; i--) {
        
//         cards.splice(i,1)
//     }
// console.log(cards) 
// console.log(place)



let col=document.querySelectorAll(".col");
// console.log(col)
let img= document.querySelectorAll("img")
// console.log(img)

col.forEach(element => {
    element.addEventListener("click", function (e) {
        col= e.target
        console.log(element)
        Array.from(element).forEach(items => {
            console.log(items)
            // if (element.src=="back-img") {
            //     element.style.display="none"
            
            // } 
            // if(element.src == "") {
            //     element.src = cards[Math.floor(Math.random()*cards.length)]
            //     element.style.display="block"
            // }
            
        });
       
        // let img = element.childNodes
        // console.log(img)
        // for (let i = 0; i < img.length; i++) {
        //     console.log(img[i].src)
        //     // if (i==0) {
        //     //     console.log(img[i])
        //     // //    img[i].style.display= "none"
        //     // }
        //     // if (i==1) {
        //     //     console.log(img[i])
        //     //     // img[i].src=cards[Math.floor(Math.random()*cards.length)]
        //     //     // img[i].style.display = "block"  
        //     // }
        // }
    })
})
