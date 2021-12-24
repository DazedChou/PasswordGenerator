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
    // var items = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*";
    // var itemsArray = items.split('')
    var lowerItems = "abcdefghijklmnopqrstuvwxyz";
    var lowerArray = lowerItems.split('')
    var upperItems = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var upperArray = upperItems.split('');
    var numItems = "0123456789";
    var numArray = numItems.split('');
    var specialItems = "!@#$%^&*";
    var specArray = specialItems.split('');

    var lower = confirm("Do you want to include lowercase characters?");
    var upper = confirm("Do you want to include uppercase characters?");
    var numeral = confirm("Do you want to include numeric characters?");
    var special = confirm("Do you want to include special characters?");

    //Creating password and store into array
    //create empty password
    var tempPassword =[];

    //To make sure that atleast 1 char of desired choice is in password
    if(lower){
        tempPassword.push(lowerArray[Math.floor(Math.random()*26)]);
    }
    if(upper){
        tempPassword.push(upperArray[Math.floor(Math.random()*26)]);
    }
    if(numeral){
        tempPassword.push(numArray[Math.floor(Math.random()*10)]);
    }
    if(special){
        tempPassword.push(specArray[Math.floor(Math.random()*8)]);
    }
})
