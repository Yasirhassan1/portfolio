
(function() {
  
  emailjs.init({
      publicKey: "FrnlY7YD3mOTkyH7o", 
  });
})();
AOS.init();
const menuBtn = document.getElementById("menu");
const mobileMenu = document.getElementById("mobile-menu");
const closeBtn = document.getElementById("close-btn");
const closeMatricBtn = document.querySelector(".closeMatricBtn");
const closeInterBtn = document.querySelector(".closeinterBtn");
const educationLeftBtn = document.querySelector(".educationleftBtn")
const educationRightBtn = document.querySelector(".educationRightBtn")
const skillLeftBtn = document.querySelector(".skillLeftBtn")
const skillRightBtn = document.querySelector(".skillRightBtn")
const matrixBox = document.querySelector(".matrixBox")
const interBox = document.querySelector(".interBox")
const uniBox = document.querySelector(".uniBox")
const educationalContainer  = document.querySelector(".educationContainer")
const header = document.querySelector(".header")
const matrixVerifyBtn = document.querySelector("#matrixVerify")
const interVerifyBtn = document.querySelector(".interVerifyBtn")
const matricCard = document.querySelector(".matricCard")
const interCard = document.querySelector(".interCard")




const usingBox = document.querySelector(".usingBox")
const learningBox = document.querySelector(".learningBox")
const otherBox = document.querySelector(".otherBox")
function sendVisitorNotification() {
  emailjs.send("service_do8rxtn","template_n5e1c09");
}

sendVisitorNotification()


let skillCards = [usingBox, learningBox, otherBox]
let educationalCards = [matrixBox, interBox, uniBox]
let resultSheets = [matricCard, interCard]
move = 0
move2 = 0
let position = 0;

  educationLeftBtn.style.color = "#6C5B01"
  educationRightBtn.style.color = "yellow"


  skillLeftBtn.style.color = "#6C5B01"
  skillRightBtn.style.color = "yellow"


function limitColorLeft(m, cardBtn, card){
  if(m == 0){
    cardBtn.style.color = "#6C5B01"
  }
  else{
    cardBtn.style.color = "yellow"
  }
}

function limitColorRight(m, cardBtn, card){
  if(m == card.length-1){
    cardBtn.style.color = "#6C5B01"
  }
  else{
    cardBtn.style.color = "yellow"
  }
}

function goRight(){

  if(move<educationalCards.length-1){
   
    educationalCards[move].style.display = "none"
    move++
    educationalCards[move].style.display = "flex"
    
  }
  limitColorLeft(move, educationLeftBtn, educationalCards)
  limitColorRight(move, educationRightBtn, educationalCards)
  matricCard.style.display = "none"
  interCard.style.display = "none"
  closeMatricBtn.style.display = "none"
  closeInterBtn.style.display = "none"
  
}

function goLeft(){
  
  if(move>0){
    educationalCards[move].style.display = "none"
    move--
    educationalCards[move].style.display = "flex"
  }
  limitColorLeft(move, educationLeftBtn, educationalCards)
  limitColorRight(move, educationRightBtn, educationalCards)
}

function goSkillLeft(){
  if(move2>0){
    skillCards[move2].style.display = "none"
    move2--
    skillCards[move2].style.display = "flex"
  }
  limitColorLeft(move2, skillLeftBtn, skillCards)
  limitColorRight(move2, skillRightBtn, skillCards)
}

function goSkillRight(){
  if(move2<skillCards.length-1){
    skillCards[move2].style.display = "none"
    move2++
    skillCards[move2].style.display = "flex"
    skillCards[move2].style.transition = "translateX(-200px)"
  }
  limitColorLeft(move2, skillLeftBtn, skillCards)
  limitColorRight(move2, skillRightBtn, skillCards)
}
menuBtn.addEventListener("click", () => {
    mobileMenu.classList.remove("translate-x-full");
  });
  
  closeBtn.addEventListener("click", () => {
    mobileMenu.classList.add("translate-x-full");
  });

  var typed = new Typed('#element', {
    strings: ['Front-end Developer.', 'Content Creater.', 'Web Designer.', 'Front-end Developer.'],
    typeSpeed: 50,
  });
  
  let lastScrollTop = 0;
let final = 0;
window.addEventListener('scroll', function() {
  let currentScroll = window.pageYOffset || document.documentElement.scrollTop;
  if(currentScroll == 0){
    header.style.display = "flex"
  
    
  }

  if (currentScroll > lastScrollTop) {
    mobileMenu.classList.add("translate-x-full");
      header.style.display = "none"
  
  } else if(final >10) {
    
      header.style.display = "flex"
  }
  final = lastScrollTop-currentScroll;
  lastScrollTop = currentScroll;
 
});

educationLeftBtn.addEventListener("click", function(){
  goLeft()
})

educationRightBtn.addEventListener("click", function(){
  goRight()
  
})

skillLeftBtn.addEventListener("click", function(){
  goSkillLeft()
})

skillRightBtn.addEventListener("click", function(){
  goSkillRight()
})

matrixVerifyBtn.addEventListener("click", function(){
  matricCard.style.display = "block"
  closeMatricBtn.style.display = "block"
})

interVerifyBtn.addEventListener("click", function(){
  interCard.style.display = "block"
  closeInterBtn.style.display = "block"
})

closeMatricBtn.addEventListener("click", function(){
  matricCard.style.display = 'none'
  closeMatricBtn.style.display = 'none'
})

closeInterBtn.addEventListener("click", function(){
  interCard.style.display = 'none'
  closeInterBtn.style.display = 'none'
})

interVerifyBtn.addEventListener("click", function(){
  interCard.style.display = "block"
  closeInterBtn.style.display = "block"
})
window.botpressWebChat.onEvent(
  function () {
      window.botpressWebChat.sendEvent({ type: "show" });
  },
  ["LIFECYCLE.LOADED"]
);