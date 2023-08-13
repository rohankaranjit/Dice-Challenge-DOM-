//First Dice

var randomNumber = Math.floor(Math.random()*6)+1;

var printedImage = "images/dice" + randomNumber + ".png"

var AttributeSet = document.querySelectorAll("img")[0]

var FinalSet = AttributeSet.setAttribute("src",printedImage);



//Second Dice
var randomNumber1 = Math.floor(Math.random()*6)+1;

var printedImage1 = "images/dice" + randomNumber1 + ".png"


var AttributeSet1 = document.querySelectorAll("img")[1]

var FinalSet2 = AttributeSet1.setAttribute("src",printedImage1);

//Who won IF/Else

if (randomNumber > randomNumber1) {
    document.querySelector("h1").innerHTML = "Player One wins   🚩 " ;
    
}

else if (randomNumber1 > randomNumber) {
    
    document.querySelector("h1").innerHTML = "Player Two wins   🚩 "; 
}

else{
    
    document.querySelector("h1").innerHTML = "Draw. Restart Again." ;
}
