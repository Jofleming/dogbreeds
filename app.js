function getUserPet(){
    let userPet = prompt('What is your favorite kind of dog?');

    if(userPet == 'Husky'){
    document.write('Ah I see you have wonderful taste');
    } else {
    document.write(`Welcome  ` + userPet + ` lover!`)
    }
}
var userAnswer = prompt('Are you looking to adopt a dog?');

function userAdoption(){


    if(userAnswer.toLowerCase() == 'yes'){
        console.log("Made it to selection")
    let url = "https://images.unsplash.com/photo-1542715234-bd0adb4249b7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
    document.write('<img src="' + url + '">')
    } else{
    let url = "https://www.humanesociety.org/resources/top-reasons-adopt-pet"
    document.write('<a href="' + url + '">Why YOU should think about adoption.</a>')
    return userAnswer;
    } 

}

function petAdoption(){
    console.log(userAnswer)
    if(userAnswer.toLowerCase() == 'yes'){
        let url = "https://www.petfinder.com/pet-adoption/dog-adoption/"
        document.write('<a href="' + url + '">ADOPT TODAY!</a>')
    };  
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
//} 