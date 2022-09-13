const panel = document.getElementsByClassName("panel");
const colors = ["#ff8b64", "#56c2e6", "#ff5e7d", "#4bcf83", "#7235d2", "#f1c75b"];
const options = document.getElementsByClassName("options");
const current = document.getElementsByClassName("current");
const prev = document.getElementsByClassName("prev");


let flag = "weekly";


for(let i=0; i<3; i++){
  options[i].addEventListener("click", ()=>{
    flag = options[i].innerHTML.toLowerCase();
    
    options[i].style.color = "white";
    for(let j=0; j<3; j++){
      if(i!=j){
        options[j].style.color = "#7074b2";
      }
    }

    fetch("./data.json")
    .then((response)=>{
      return response.json();
    })
    .then((jsondata) => {
      for(let k=0; k<6; k++){
        current[k].innerHTML = `${jsondata[k]["timeframes"][flag]["current"]}Hrs`;
        prev[k].innerHTML = `Last Week - ${jsondata[k]["timeframes"][flag]["previous"]}hrs`;
      }
    })
    
  })
}

for(let i=0; i<6; i++){
  panel[i].style.backgroundColor = colors[i];
}