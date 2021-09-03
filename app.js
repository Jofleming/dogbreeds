var userAnswer;
function getUserPet(){
    let userPet = prompt('What is your favorite kind of dog?');

    if(userPet == 'Husky'){
    document.write('Ah I see you have wonderful taste');
    } else {
    document.write(`Welcome  ` + userPet + ` lover!`)
    }
}

function userAdoption(){
    userAnswer = prompt('Are you looking to adopt a dog?');
    console.log(userAnswer)
    while(userAnswer.toLowerCase() != "yes" && userAnswer.toLowerCase() != "no"){
        userAnswer = prompt('Are you looking to adopt a dog?');
    }
    
    if(userAnswer.toLowerCase() == 'yes'){
        let url = "https://images.unsplash.com/photo-1542715234-bd0adb4249b7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
        document.write('<img src="' + url + '">')
        } else{
        let url = "https://www.humanesociety.org/resources/top-reasons-adopt-pet"
        document.write('<a href="' + url + '">Why YOU should think about adoption.</a>')
    } 
}

function petAdoption(){
    if(userAnswer.toLowerCase() == 'yes'){
        let url = "https://www.petfinder.com/pet-adoption/dog-adoption/"
        document.write('<a href="' + url + '">HELP FIND THEM A HOME!</a>')
    };  
}

function puppyPictures() {
    let numOfImages = prompt('How many puppies would you like to see? Enter \n\    number from 1 and 5');

    while (numOfImages < 1 || numOfImages > 5) {
        alert("Error: please, enter a number from 1 and 5 ok to continue...");
        numOfImages = prompt('How many puppies would you like to see? Enter \n\
         number between 1 and 5');

    }
    for (let i = 0; i < numOfImages; i++) {
        let puppyPic = "https://images.unsplash.com/photo-1510337550647-e84f83e341ca?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1489&q=80"
        document.write('<img src="' + puppyPic + '">');
    }
}


// function userAdoption(){
//     let userAnswer = prompt('Are you looking to adopt a dog?');
//     console.log(userAnswer)

//     if(userAnswer.toLowerCase() == 'yes'){
//     let url = "https://images.unsplash.com/photo-1542715234-bd0adb4249b7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
//     document.write('<img src="' + url + '">')
//     } else{
//     let url = "https://www.humanesociety.org/resources/top-reasons-adopt-pet"
//     document.write('<a href="' + url + '">Why YOU should think about adoption.</a>')
//     return userAnswer;
//     } 
//     petAdoption(userAnswer);

// }

// function petAdoption(userAnswer){
//     if(userAnswer.toLowerCase() == 'yes'){
//         let url = "https://www.petfinder.com/pet-adoption/dog-adoption/"
//         document.write('<a href="' + url + '">ADOPT TODAY!</a>')
//     };  
// }

//let userPet = prompt('What is your favorite kind of dog?');

//if(userPet == 'Husky'){
 //   document.write('Ah I see you have wonderful taste');
//} else {
//    document.write(`Welcome  ` + userPet + ` lover!`)
//}     if(userAnswer.toLowerCase() == "yes" || userAnswer.toLowerCase() == "no"){
//     break;
// }