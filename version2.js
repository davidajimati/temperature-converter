// function updateBoxFar() {
//     const boxCelsius = document.getElementById("celsius")
//     const boxFar = document.getElementById("far")
//     boxFar.value = (boxCelsius - 32) * (5 / 9)
// }

// updateBoxCelsius

// function updateBoxCelsius() {
//     const boxCelsius = document.getElementById("celsius")
//     const boxFar = document.getElementById("far")
//     boxCelsius.value = (num * 9 / 5) + 32
// }


const boxCelsius = document.getElementById("celsius");
const boxFar = document.getElementById("far");

boxCelsius.addEventListener("input", () => {
    boxFar.value = (boxCelsius.value * 9 / 5) + 32;
});

boxFar.addEventListener("input", () => {
    boxCelsius.value = (boxFar.value - 32) * (5 / 9);
});