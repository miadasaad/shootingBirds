// find elements !#$&()1234567890
let goButton = document.querySelector("button[type=submit]");
let nameText = document.querySelector("input[type=text]");


// add event in name
nameText.addEventListener("input", function (e) {
    if(e.target.value.length != 0){
        goButton.classList.remove("disabled");
        goButton.disabled=false;
    }
    else{
        goButton.classList.add("disabled");
        goButton.disabled=true;
    }
})

