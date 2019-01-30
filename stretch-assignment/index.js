

const blocksArr = Array.from(document.querySelectorAll('.block'));

for (let i = 0; i < blocksArr.length; i++) {
    blocksArr[i].addEventListener("click", event => {
        TweenLite.to(blocksArr[i], 2.5, { ease: Power2.easeOut, x: 200 });
        TweenLite.to(blocksArr[i], 2.5, { ease: Power2.easeOut, y: -500 });
        TweenLite.to(blocksArr[i], 2.5, { ease: Power2.easeOut, x: 500 });
        console.log(event)
    })
    }


/*
let nodesArr = [].slice.call(document.querySelectorAll(".block"));

for (let i = 0; i < nodesArr.length; i++) {
    nodesArr[i].addEventListener("click", event => {
        nodesArr.unshift(nodesArr[i])
        console.log(event)
    })
    }

*/


/*
TweenLite.to(blocksArr[i], 2.5, { ease: Power2.easeOut, x: 200 });
        TweenLite.to(blocksArr[i], 2.5, { ease: Power2.easeOut, y: -500 });
        TweenLite.to(blocksArr[i], 2.5, { ease: Power2.easeOut, x: -500 });
*/



/*
const logoheading = document.querySelector('.logo-heading');
logoheading.addEventListener("mouseout", event => {
    console.log(event)
    TweenLite.to(logoheading, 2.5, { ease: Bounce.easeIn, y: -50 });
})
ar buttonArray = document.querySelectorAll('.btn');

for(var i=0; i<buttonArray.length; i++){
  buttonArray[i].addEventListener("click", fire);
}
function fire(e){
  e.currentTarget.style.backgroundColor = "rgb("+rnd()+","+rnd()+","+rnd()+")";
}
//color randomizer 
function rnd() {
    return Math.floor(Math.random() * (255 + 1)) ;
}
*/