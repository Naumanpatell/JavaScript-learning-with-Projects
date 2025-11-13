// console.log(`Nauman Patel`);
// // window.alert(`This is an alert`)

// document.getElementById("name").textContent="Nauman";
// document.getElementById("student").textContent="Computer Science Student"

//---VARIABLES-----
// let x;
// x = 100;
// console.log(x)

//---------INPUTS----------

// let username;
// document.getElementById("submit").onclick = function(){
//     username = document.getElementById("input").value;
//     document.getElementById("h1").textContent = `Hello ${username}`
// }

const pi = 3.14
let radius;
let circunference;


document.getElementById("submit").onclick = function() {
    radius = document.getElementById('radius').value;
    radius =  Number(radius)
    circumference = 2*pi*radius
    document.getElementById('h3').textContent = `The radius is ${circumference} cm`

}