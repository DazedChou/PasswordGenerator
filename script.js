//Password Generator
var pwdGen = document.querySelector("#button");

pwdGen.addEventListener("click",function(){
    //Prompt for Password length criteria
    var num = prompt("Please enter your desired Password length","Enter a number between 1 and 128");
    //Condition check 
    while(num < 8 || num > 128 ){
        num = prompt("Please enter your desired Password length","Please enter a valid number between 1 and 128");
    }

    //Ask for Desired Character types
    var items = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*";
    var itemsArray = items.split('')

    confirm("Do you want to include lowercase characters?");
    confirm("Do you want to include uppercase characters?");
    confirm("Do you want to include numeric characters?");
    confirm("Do you want to include special characters?");

    //create empty password
    var password =[];

})
