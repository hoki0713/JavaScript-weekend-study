function handleRice(rice, etc) {
  let riceCake = "riceCake";
  if (rice && etc) {
    riceCake = `${etc}Cake`;
    return riceCake
  } else if (rice) {
    return riceCake;
  }
}

function sum(a,b) {
  return a + b
}

const add3 = sum(1,2);
const add5 = sum(2,3);
const add8 = sum(add3, add5);

function foo(){
  return '안녕하세요.'
}

function consoleMsg(msg) {
  console.log(msg)
}

consoleMsg(foo());