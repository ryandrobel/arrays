var name = "Bob";
var isRaining = true;
var hasPet = false;
var job = "Web Developer";
var cash = 100;

if(isRaining){
  console.log("I NEED a coat!");
  cash -= 50;
  isRaining = false;
}
if(name != "Bob"){
    console.log("Hello stranger.");
}
else if(name == "Bob"){
    console.log("Hello Bob.");
}
if(job == "Web Developer"){
    console.log("Keep up the good work");
    cash += 500;
    job = "Senior Web Developer";
}
if(hasPet){
    hasPet = true;
    cash -= 1200;
}
if(cash > 1000){
    console.log("Vacation Time!");
    cash -= 1200;
}
cash += 2000;

console.log("Payday!");
console.log(name);
console.log(isRaining);
console.log(hasPet);
console.log(job);
console.log(cash);

