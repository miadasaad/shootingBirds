// find elements !#$&*()1234567890
let userName = document.querySelector(".name");
let scoreShow = document.querySelector("#score");
let time = document.querySelector("#time");
let killedBirdsShow = document.querySelector("#killedBirds");
let startBtn = document.querySelector("#start");
let gameStartDiv = document.querySelector(".game");
let imgsContainer = document.querySelector(".images");
let bombImg = document.querySelector(".bomb");
let birds = document.querySelectorAll(".bird");
let showScore = document.querySelector(".showScore");
let headingScore = document.querySelector(".showScore h2");
let res = document.querySelector(".showScore p");
let playAgain = document.querySelector(".showScore button");
let imgScore = document.querySelector(".showScore img");
userName.innerText=location.search.slice(location.search.indexOf("?")+7);
document.querySelectorAll(".name")[1].innerText=location.search.slice(location.search.indexOf("?")+7);

//check if he plays for the first time or not
if (localStorage.getItem('lastScore') && localStorage.getItem('lastDate') ) {
   document.querySelector(".lastScore").innerText="your last score is "+localStorage.getItem('lastScore');
   document.querySelector(".lastTime").innerText="your last time is "+localStorage.getItem('lastDate'); 
}

 startBtn.addEventListener("click", function () {
   
    // hide the box
    gameStartDiv.classList.add("hidden");
    // start timer
    timer();    
    //random falling bomb
    fallBomb(bombImg);
    //random flying birds
    flyingBrds();
    //show result
    setTimeout(() => {
   
       localStorage.setItem('lastScore', scoreShow.innerHTML);
       localStorage.setItem('lastDate', new Date().toLocaleDateString());

      showScore.classList.remove("hidden");
      if (parseInt(scoreShow.innerHTML)>50) {
         headingScore.innerHTML="You Won,Congrats";
         res.innerText = "your score is "+scoreShow.innerHTML;
         imgScore.src="imgs/happyBird.jfif";
      }
      else{
         headingScore.innerHTML="You Lost";
         res.innerText = "your score is "+scoreShow.innerHTML;
         imgScore.src="imgs/sadBird.jfif";
      }
}, 60000);
 })
 //playing again
 playAgain.addEventListener("click",function () {
   location.reload();
 })

