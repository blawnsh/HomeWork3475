const name = prompt("Input your name");
const weight = prompt("Input your weight");
const height = prompt("Input your height");

const BMR = parseInt(weight) / (parseFloat(height) * parseFloat(height));
console.log(BMR);

if (BMR < 18.5) {
    console.log(name + ",", "you are UNDERWEIGHT")
}
else if (BMR > 18.5 && BMR < 24.9) {
    console.log(name + ",", "you are NORMAL")
}
else if (BMR > 25 && BMR < 29.9) {
    console.log(name + ",",  "you are OVERWEIGHT")
}
else if (BMR > 30 && BMR < 34.9) {
    console.log(name + ",", "you are OBESE")
}
else {
    console.log(name + ",", "you are EXTREMELY OBESE")
}