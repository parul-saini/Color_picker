
function generateRandomNumberBetween(min,max){
    return min + Math.floor(Math.random()*(max-min+1));
}
//console.log(generateRandomNumberBetween(2,7));

function generateRandomRgbColor(){
   let red = generateRandomNumberBetween(0,255);
   let green = generateRandomNumberBetween(0,255);
   let blue= generateRandomNumberBetween(0,255);
   return `rgb(${red}, ${green}, ${blue})`;
}

const colorCode = document.getElementById("color-code");
const colorContainer= document.getElementById("color-container");
const result= document.getElementById("result");
let showColor = null;

// colorContainer.innerText = showColor
// colorContainer.style.background = showColor;

function validateTheResult(targetDiv){
    console.log(targetDiv.target);
    if(showColor.toString() === targetDiv.target.style.backgroundColor.toString()){
    result.innerHTML= "<h1>You Won :) </h1>";
    }
    else{
    result.innerHTML= "<h1>You Loose :( </h1>"; 
    }
    startgame();
}
// function selected(elem){
//  elem.target.classList.add("selected");
// }

function startgame(){
    colorContainer.innerHTML= null;
    showColor =  generateRandomRgbColor();
    colorCode.innerText = showColor;

    const ansIndex= generateRandomNumberBetween(0,5);

    for(let i=0;i<6;i++)
    {
      const div = document.createElement('div');
      const div1 = document.createElement('div');
      div.addEventListener("click",validateTheResult);
     // div.addEventListener("mouseover", selected);
      div.style.backgroundColor = (ansIndex===i)? showColor : generateRandomRgbColor();
      div1.appendChild(div);
      colorContainer.appendChild(div1);
    }

}

window.addEventListener("load",() => startgame() );


