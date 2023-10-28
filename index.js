let container = document.querySelector("#container");
let copyBtn = document.querySelector("#cpy-button");
let outputCode = document.querySelector("#output-code");
let generateBtn = document.querySelector("#generate");

let hexString = "123456789abcdef";

const randomColor = () => {
  let hexCode = "#";
  for (i = 0; i < 6; i++) {
    hexCode += hexString[Math.floor(Math.random() * hexString.length)];
  }
  return hexCode;
};

const onClickGenerate = () => {
  const colorF = randomColor();
  const colorS = randomColor();
  const randomAngle = Math.floor(Math.random() * 360);
  container.style.background = `linear-gradient(${randomAngle}deg, ${colorF}, ${colorS})`;
  outputCode.value = `background: linear-gradient(${randomAngle}deg, ${colorF}, ${colorS});`;
};

copyBtn.addEventListener("click", () => {
  outputCode.select();
  document.execCommand("copy");
  copyBtn.classList.add("active");
  setTimeout(() => {
    copyBtn.classList.remove("active");
    outputCode.blur()
  }, 3000);
});

generateBtn.addEventListener("click", onClickGenerate);
window.onload = () => {
  container.style.background = "linear-gradient(255deg, #8d2a5a, #e79e86)";

  outputCode.value = "background: linear-gradient(255deg, #8d2a5a, #e79e86);";
};
