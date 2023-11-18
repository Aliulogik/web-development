// const userAge = document.querySelector('#userAge')

// userAge.addEventListener('change', ageChecker)

// function ageChecker(){
//     age= userAge.value
//     if(age>17){
//         prompt('You are Valid to vote')
//     }
//     else if(age<18){
//         prompt('Sorry!!! you are not valid to vote')
//     }
// }

// const userName = document.getElementById('userName')

// userName.addEventListener('change', Name)

// function Name(){
//     if(userName==" "){
//         prompt("Thank you",userName)
//     }
//     else if (userName!=" ")
//         prompt('Please Enter your name')
// }

great = document.querySelector('#great')
great.addEventListener('click',greatingFunc)

function greatingFunc(){
    let name = prompt('Enter Your Name')
    if(name==''){
        alert("Name is needed")
    }
    else{alert(`Hello ${name}`)}
}