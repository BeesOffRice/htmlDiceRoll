
document.querySelector("#diceImage").onclick =function(){rollTheDice()};
var diceInterval;

var click=0;

function changeImage(a){
    document.querySelector("#diceImage").src=a;
}

function changeH2Text(a){
    document.querySelector("h2").innerHTML= "you rolled a "+ a;
}

function rollTheDice(){

    console.log(click);
    let stink = Math.floor(Math.random()*6)+1;

  if(click==0){
    var i=1
        diceInterval = setInterval(function(){
            
            changeImage("images/dice"+i+".png");
            i=i+1;

            if(i==7){
                i=1;
            }

            console.log(i);
        },50);
  } else if(click == 1){
    clearInterval(diceInterval);

    switch(stink){
        case 1:
            changeImage("images/dice1.png");
            changeH2Text(1);
            break;
        case 2:
            changeImage("images/dice2.png");
            changeH2Text(2);
            break;
        case 3:
            changeImage("images/dice3.png");
            changeH2Text(3);
            break;
        case 4:
            changeImage("images/dice4.png");
            changeH2Text(4);
            break;
        case 5:
            changeImage("images/dice5.png");
            changeH2Text(5);
            break;
        case 6:
            changeImage("images/dice6.png");
            changeH2Text(6);
            break;
        default:
            console.log("image did not work");
            break;
    }
  } else{
    console.log("button already clicked");

  }

    click++;
}