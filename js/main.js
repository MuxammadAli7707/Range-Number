const range = document.getElementById("range");
const text = document.getElementById("text");

range.addEventListener("input", ()=> {
  let value = range.value;
  console.log(value);
  text.innerText = value;
});