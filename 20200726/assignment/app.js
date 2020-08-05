const screen = document.getElementById("screen");
const button = document.createElement("button");
button.setAttribute("class","on");
button.innerText = "토글";
screen.appendChild(button);

const createdBtn = document.querySelector(".on")[0];

createdBtn.addEventListener("click", function(){
  console.log("click");
});