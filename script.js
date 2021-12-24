//Password Generator
var pwdGen = document.querySelector("#button");

pwdGen.addEventListener("click",function(){
    //Prompt for Password length criteria
    var num = prompt("Please enter your desired Password length","Enter a number between 1 and 128");
    //Condition check 
    while(num < 1 || num > 128){
        num = prompt("Please enter your desired Password length","Please enter a valid number between 1 and 128");
    }

})
