function timer() {
  // timer
  let countDownTimer = new Date().getTime() + 60000;
  let x = setInterval(function () {
    let now = new Date().getTime();
    let distance = countDownTimer - now;

    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);
    time.innerHTML = minutes + ":" + seconds;
    if (distance < 0) {
      time.innerHTML = "0:0";
      clearInterval(x);
    }
  }, 1000);
 
}


function fallBomb(bombImg) {

    let score=0; 
    let killed=0;
  let y = setInterval(() => {
    let newBombImg = bombImg.cloneNode(true);
    imgsContainer.append(newBombImg);
    //show img
    newBombImg.classList.remove("hidden");
    // random left
    let leftImg = Math.floor(Math.random() * 10) * 100;
    newBombImg.style.left = leftImg + "px";
    // constant top
    let topImg = -10;
    newBombImg.style.top = topImg + "px";

    let x = setInterval(() => {
      topImg += 20;
      if (topImg + newBombImg.height < innerHeight) {
        newBombImg.style.top = topImg + "px";
        //click event on bomb
        newBombImg.addEventListener("click", function () {
          let currImg = document.querySelectorAll(".bird:not(.hidden)");
          let killedBrd=[];
          // get let,top for bottom
          let bombLeft = parseInt(this.style.left.slice(0,this.style.left.indexOf("px")));
          let bombTop = parseInt(this.style.top.slice(0,this.style.top.indexOf("px")));

         for (let i = 0; i < currImg.length; i++) {
          //check if bird surrounds the bomb
            if (currImg[i].getBoundingClientRect().left+ currImg[i].width>= bombLeft &&
                currImg[i].getBoundingClientRect().left <= bombLeft+this.width/2 &&
                currImg[i].getBoundingClientRect().top+ currImg[i].height>= bombTop &&
                currImg[i].getBoundingClientRect().top <= bombTop+this.height/2) {
                killedBrd.push(currImg[i]);

                //currImg[i].src = http://127.0.0.1:5500/imgs/bird2.gif
                if (currImg[i].src.slice(currImg[i].src.indexOf("imgs"))=="imgs/bird3.gif") {
                   score += 5; 
                }
                else if(currImg[i].src.slice(currImg[i].src.indexOf("imgs"))=="imgs/bird2.gif") {
                    score += 10; 
                 }
                 else if(currImg[i].src.slice(currImg[i].src.indexOf("imgs")=="imgs/bird1.gif")){
                    score -= 10;
                 }
                 scoreShow.innerHTML=score;
                 killed += killedBrd.length
                 killedBirdsShow.innerHTML=killed;
                 currImg[i].remove();
            }            
         }
          this.remove();
        });

      } else {
        newBombImg.remove();
      }

    }, 200);
    setTimeout(() => { 
      clearInterval(x);
    }, 58000);
    
  }, 2000);
  setTimeout(() => {
    let disAppearBomb = document.querySelectorAll(".bomb:not(.hidden)");
    for (let i = 0; i < disAppearBomb.length; i++) {
      disAppearBomb[i].remove();        
    }
    clearInterval(y);
  }, 59000);
   
  
}

// creating,moving birds
function flyingBrds() {
  let m = setInterval(() => {
    let leftBrd = -10;
    let topBrd;
    let randomNum = randomIndex(0, 2);

    let newBird = birds[randomNum].cloneNode(true);
    imgsContainer.append(newBird);
    topBrd = Math.floor(Math.random() * 10) * 60;
    newBird.style.left = leftBrd + "px";
    newBird.style.top = topBrd + "px";
    newBird.classList.remove("hidden");

    let z = setInterval(() => {
      leftBrd += 5 * randomIndex(1, 3);
      if (leftBrd < innerWidth - newBird.width) {
        newBird.style.left = leftBrd + "px";
       
      } else {
        newBird.classList.add("hidden");
        newBird.remove();
      }
    }, 80);
    setTimeout(() => {
      clearInterval(z);
    }, 59000);
  }, 2000);
  setTimeout(() => {
      let disAppearBrd = document.querySelectorAll(".bird:not(.hidden)");
      for (let i = 0; i < disAppearBrd.length; i++) {
        disAppearBrd[i].remove();        
      }
    clearInterval(m);
  }, 59000);
}

function randomIndex(min, max) {
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
}
