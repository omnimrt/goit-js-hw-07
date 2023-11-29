const input = document.querySelector("#name-input");
const output = document.querySelector("#name-output");

input.addEventListener("input", (e) => {
  if (input.value === "") {
    output.textContent = "Anonymys";
  } else {
    output.textContent = e.currentTarget.value;
  }
});
