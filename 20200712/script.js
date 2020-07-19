const btn = document.getElementById('calculateBtn');
btn.addEventListener("click", function(e){
  e.preventDefault();
  app(prompt(message));
});


const message = "1~100까지의 수를 입력하세요";

function app(params) {
  let radius = parseInt(params);
  function areaOfCircle(radius) {
    return radius*radius*3.14;
  }
  alert(areaOfCircle(radius));
}

