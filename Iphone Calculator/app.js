/* A: butonlara tıklayınca input(type(text)) içerisinde gözüksün */
/* B: input text içerisinde görünen sayıların operatorlerle birlikte işleme girsin */
/* C: +/- butonuna tıklayınca value'nin önüne - eksi getir */
const result = document.getElementById("result");
const buttons = document.getElementById("buttons");


//A
function display(val) {

  result.value += val;
}

//B
function solve() {
let x = result.value;
let y = eval(x);
result.value = y;
}

function resetInput() {
  result.value = '';
}

//C
function addSub() {
  if(result.value >= 0){
    result.value = "-" + result.value;
  }
}

function swipeUp() {
  $("#buttons").slideToggle();
  
  var x = document.getElementById("swipe-completed");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
  
}

setInterval(() => {
  $("#swipe").addClass("swipe-up");
}, 2500);
setInterval(() => {
  $("#swipe").removeClass("swipe-up");
}, 3000);

/* SWIPE UP REMINDER */
/* setTimeout(() => {
  result.value = "swipe up";
}, 2000); */

/* SWIPE CODE TAKEN FROM GIVANSE https://stackoverflow.com/users/7852/givanse */
document.getElementById("swipe").addEventListener('touchstart', handleTouchStart, false);        
document.getElementById("swipe").addEventListener('touchmove', handleTouchMove, false);

var xDown = null;                                                        
var yDown = null;

function getTouches(evt) {
  return evt.touches ||             // browser API
         evt.originalEvent.touches; // jQuery
}                                                     
                                                                         
function handleTouchStart(evt) {
    const firstTouch = getTouches(evt)[0];                                      
    xDown = firstTouch.clientX;                                      
    yDown = firstTouch.clientY;                                      
};                                                
                                                                         
function handleTouchMove(evt) {
    if ( ! xDown || ! yDown ) {
        return;
    }

    var xUp = evt.touches[0].clientX;                                    
    var yUp = evt.touches[0].clientY;

    var xDiff = xDown - xUp;
    var yDiff = yDown - yUp;
    
                                                                         
    if ( Math.abs( xDiff ) > Math.abs( yDiff ) ) {/*most significant*/
        if ( xDiff > 0 ) {
            /* right swipe */ 
        } else {
            /* left swipe */
        }                       
    } else {
        if ( yDiff > 0 ) {
            /* down swipe */ 
            $("#buttons").slideToggle();
            var x = document.getElementById("swipe-completed");
            if (x.style.display === "block") {
              x.style.display = "none";
            } else {
              x.style.display = "block";
            }
        } else { 
            /* up swipe */
            $("#buttons").slideToggle();
            var x = document.getElementById("swipe-completed");
            if (x.style.display === "block") {
              x.style.display = "none";
            } else {
              x.style.display = "block";
            }
        }                                                                 
    }
    /* reset values */
    xDown = null;
    yDown = null;                                             
};