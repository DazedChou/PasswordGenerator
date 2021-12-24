//Password Generator
var pwdGen = document.querySelector("#button");

pwdGen.addEventListener("click",function(){
    //Prompt for Password length criteria
    var num = prompt("Please enter your desired Password length","Enter a number between 1 and 128");
    //Condition check 
    if(num === null){
        return;
    }
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
    var passwordChoice=[];
    //To make sure that atleast 1 char of desired choice is in password
    if(lower){
        tempPassword.push(lowerArray[Math.floor(Math.random()*26)]);
        passwordChoice.push(lowerArray);
    }
    if(upper){
        tempPassword.push(upperArray[Math.floor(Math.random()*26)]);
        passwordChoice.push(upperArray);
    }
    if(numeral){
        tempPassword.push(numArray[Math.floor(Math.random()*10)]);
        passwordChoice.push(numArray);
    }
    if(special){
        tempPassword.push(specArray[Math.floor(Math.random()*8)]);
        passwordChoice.push(specArray);
    }
    //convert 2D array into 1D array
    //passwordchoice contains user selected characters
    passwordChoice = passwordChoice.flat();

    //change length of iteration based on selected choices
    if(lower && upper && numeral && special){
        num = num - 4;
    }else if( (lower && upper && numeral) || (lower && upper && special) || (upper && numeral && special) || (lower && special && numeral)){
        num = num - 3;
    }else if( (lower && upper) || (lower && numeral) || (lower && special) || (upper && numeral) || (upper && special) || (numeral && special)){
        num = num - 2;
    }else{
        num = num - 1;
    }

    //generating random characters for password and pushing it into tempPassword
    for(var i = 0 ; i < num ; i++){
        tempPassword.push(passwordChoice[Math.floor(Math.random()*passwordChoice.length)])
    }

    //scramble array 
    //since the first characters will always be a lowercase, uppercase, numeral and special char in that order.

    for(var j = 0; j < 4 ; j++){
        var k = tempPassword[j];
        var l = Math.floor(Math.random()*tempPassword.length)
        tempPassword[j] = tempPassword[l];
        tempPassword[l] = k;
    }

    //Changing array to string
    var password = tempPassword.toString();
    //remove all occurrences of ',' within password string
    password = password.replaceAll(",","");


})
