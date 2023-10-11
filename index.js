
// asyncronous function

// document.querySelector(".w").addEventListener("click",wClicked);
// function wClicked(){
//     alert("W is Clicked.");
// }

// detects button pressed
for(var i =0; i<document.querySelectorAll(".drum").length;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",function(){
     // console.log(this.innerHTML);
     playSound(this.innerHTML);
     buttonAnimation(this.innerHTML);
     textColorAnimation(this.textContent);

  
   


        // if(this.innerHTML === "w"){
        //     var audio = new Audio('sounds/tom-1.mp3');
        //     audio.play();
        //     // document.querySelectorALL(".drum").style.color = "#ff0000";
        //     this.style.color = "#fff";
        // }else if(this.innerHTML === "a"){
        //     var audio = new Audio('sounds/tom-2.mp3');
        //     audio.play();
        //     this.style.color = "#fff";
        // }else if(this.innerHTML === "s"){
        //     var audio = new Audio('sounds/tom-3.mp3');
        //     audio.play();
        //     this.style.color = "#fff";
        // }else if(this.innerHTML === "d"){
        //     var audio = new Audio('sounds/tom-4.mp3');
        //     audio.play();
        //     this.style.color = "#fff";
        // }else if(this.innerHTML === "j"){
        //     var audio = new Audio('sounds/snare.mp3');
        //     audio.play();
        //     this.style.color = "#fff";
        // }else if(this.innerHTML === "k"){
        //     var audio = new Audio('sounds/crash.mp3');
        //     audio.play();
        //     this.style.color = "#fff";
        // }else if(this.innerHTML === "l"){
        //     var audio = new Audio('sounds/kick-bass.mp3');
        //     audio.play();
        //     this.style.color = "#fff";
        // }

    });

}

// detects key Pressed
document.addEventListener("keypress",function(event){
    // alert("hhhh"+ event.key);
    // console.log(event);
    playSound(event.key);
    buttonAnimation(event.key);
    textColorAnimation(event.key);

});


function playSound(keyPressed){

    switch(keyPressed){
        case "w":
            var audio = new Audio('sounds/tom-1.mp3');
            audio.play(); 
            break;
        case "a":
            var audio = new Audio('sounds/tom-2.mp3');
            audio.play();
        break;
        case "s":
            var audio = new Audio('sounds/tom-3.mp3');
            audio.play();
        break;
        case "d":
            var audio = new Audio('sounds/tom-4.mp3');
            audio.play();
        break;
        case "j":
            var audio = new Audio('sounds/snare.mp3');
            audio.play();
        break;
        case "k":
            var audio = new Audio('sounds/crash.mp3');
            audio.play();
        break;
        case "l":
            var audio = new Audio('sounds/kick-bass.mp3');
            audio.play();
        break;
        default:
            console.log("No audio for this key");
    }
}

function buttonAnimation(pressedKey){

    var activeButton=document.querySelector("."+pressedKey);
    activeButton.classList.add("pressed");

    setTimeout(function(){
        activeButton.classList.remove("pressed");
    },300);
}

function textColorAnimation(pressedKey){
    
    document.querySelector("."+pressedKey).style.color = "#fff";
    setTimeout(function(){
        document.querySelector("."+pressedKey).style.color = "#DA0463";  
    },300);

}


// document.addEventListener("keypress",function(event){
// alert(document.querySelector("h1").textContent = event.key);
// });

// $(document).keypress(function(event){
    // $("h1").text(event.key);
// });
