var inputget = document.getElementById("getinp");

function checkLetters() {
  if (/[a-zA-Z]/.test(inputget.value)) {
    alert("Please enter numbers only");
    inputget.value = inputget.value.replace(/[a-zA-Z]/g, "");
  }
}

function RoundOff(){
  inputget.value = Math.round(inputget.value)
}

function setValue(a) {
  inputget.value += a;
}

function clearValue() {
  inputget.value = "";
}
function deletee() {
  inputget.value = inputget.value.slice(0, inputget.value.length - 1);
}

function Total() {
  inputget.value = eval(inputget.value);

  if (inputget.value === "undefined") {
    inputget.value = "";
  }
}
