// alert("This is a JavaScript text");
let x = document.getElementById ("myEl")
x.innerHTML="JavaScript Test";

let xl = document.getElementsByClassName ("myClass");
xl.innerHTML = "def";


let arr = ["David","Alex","Kamau"];

for(let index =0; index < arr.length; index++) {
    const element = arr[index];
    console.log("element " + element);
}

console.log ("-----------------");
arr.forEach(
    element=> {
        console.log(`element ${element}`) ;
    }
)