// Your code goes here
const topNav = document.querySelectorAll('.nav a');
//1
topNav[0].addEventListener('keyup', event => {
    alert('Why do you want to go home? Don\'t you want to have fun on the Fun Bus?!')
    event.stopPropagation()
});
//2
topNav[1].addEventListener('keypress', event => {
    console.log(event)
    event.stopPropagation()
});
//3
topNav[2].addEventListener('keydown', event => {
    alert('Ouch! I jammed that key in a door the other day!!')
    event.stopPropagation()
});
//4
topNav[3].addEventListener('scroll', event => {
    console.log(event)
    event.stopPropagation()
});
//5
const container = document.querySelector('.container');
container.addEventListener("pointerdown", event => {
    console.log(event)
    event.stopPropagation()
})
//6
container.addEventListener("pointerup", event => {
    console.log(event)
    event.stopPropagation()
})
//7
//changes button color to random color when button is clicked
var buttonArray = document.querySelectorAll('.btn');

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
//8
// nav color
const paraL = document.querySelectorAll('.main-navigation');

for (let i = 0; i < paraL.length; i++) {
    paraL[i].addEventListener("mouseover", fire)
}

function fire(e){
    e.currentTarget.style.backgroundColor = "rgb("+rnd()+","+rnd()+","+rnd()+")";
  }
  //color randomizer 
  function rnd() {
      return Math.floor(Math.random() * (255 + 1)) ;
  }

//9
//bounce - animation end
const logoheading = document.querySelector('.logo-heading');
logoheading.addEventListener("mouseout", event => {
    console.log(event)
    TweenLite.to(logoheading, 2.5, { ease: Bounce.easeIn, y: -50 });
})
//10 bounce back in
const imgL = document.querySelector('.intro img');
imgL.addEventListener("mouseup", event => {
    console.log(event)
    TweenLite.to(logoheading, 2.5, { ease: Bounce.easeIn, y: 0 });
})