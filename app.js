// var spec = prompt("Your Species?", "Human")


// var numberofcats = prompt("How many cats")
// var toomanycats = numberofcats + 1
// console.log(toomanycats)

var paper = false

if (paper == false) {
    console.log("Document Submitted");
}
else{
    console.log("Document UnSubmitted");
}

var maths = +prompt("maths marks")
var English = +prompt("English marks")
var Urdu = +prompt("Urdu marks")
var Computer = +prompt("Computer marks")
var Pst = +prompt("Pst marks")

var obtained = maths+English+Urdu+Computer+Pst;
var totalmarks = 500 

var percentage = (obtained / totalmarks * 100)
console.log(percentage)


console.log(obtained / totalmarks * 100)

if (percentage > 50 && percentage < 60 ){
    console.log("D")
}
else if(percentage > 60 && percentage < 70){
    console.log("C")
}
else if(percentage > 70 && percentage < 80){
    console.log("B")
}
else if(percentage > 80 && percentage < 90){
    console.log("A")
}
else if(percentage > 90){
    console.log("A1")
}
else{
    console.log("failed")
}
