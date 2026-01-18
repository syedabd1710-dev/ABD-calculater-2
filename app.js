var inputget = document.getElementById("getinp");

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
