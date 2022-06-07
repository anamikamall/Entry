// increment value when increment button is pressed
let a=0;
const incr=()=>{
  console.log(a++);
  //change the inner text of p tag and store a there
  n.innerText=a;
}

//count element is called in this function [hoisting]
let n=document.getElementById("count");
// n.value or n.innerText return the text in the tag
// console.log(n.innerText);


let s=document.getElementById("saved-ele");
  // console.log(s)

const save=()=>{
  s.innerText+=(a+"-");
  a=0;
  n.innerText=a;
}

//Template string
let name="Anamika", age=20, msg="Hlo";
console.log(msg+" "+name+" whose age is "+age);
console.log(`${msg} ${name} whose age is ${age}`)

// document.write("Hi");
const err=()=> {
  // console.log("hi");
  //alert function syntax 
//    alert("msg");
  alert("Oops! Error occured");
  let emsg=document.getElementById("msg");
  emsg.innerText="Error aa gye :(";
}

//object
const obj={
  name: "aditya",
  age: 20,
  subj: ["coa","mp","os"],
  fun: function() {
  console.log(name);
},
  
}
