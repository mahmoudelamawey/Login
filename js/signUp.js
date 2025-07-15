let userNameInput = document.getElementById("userNameInput");
let passwordInput = document.getElementById("passwordInput");
let emailInput = document.getElementById("emailInput");
let inputs = document.querySelectorAll("input")


let alertMassage = document.getElementById("alertMassage")
console.log(userNameInput , passwordInput , emailInput);
let users;

inputs.forEach(ele=>
    ele.addEventListener("input",function(){
    validateInput(this)
}
))
const regex = {
    userNameInput:/^[A-Za-z][a-z]{2,10}$/,
    passwordInput:/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
    emailInput:/[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/gm,
}

if(JSON.parse(localStorage.getItem("users"))!==null){
users = JSON.parse(localStorage.getItem("users"))
}else{
    users=[];
}


function validateInput(input){
    input.classList.remove("is-valid");
    input.classList.remove("is-invalid");
    let isValid = regex[input.id].test(input.value);
    if(isValid){
        
        input.classList.add("is-valid");
        input.nextElementSibling.classList.replace("d-block","d-none")
    }
    else{
        input.classList.add("is-invalid");
        input.nextElementSibling.classList.replace("d-none","d-block")
    }
    return
}   

function validation(){
    if(validateInput(userNameInput) && validateInput(emailInput) && validateInput(passwordInput)){
        return true
    }
    else{
        return false
    }
}

 function signup(){
    alertMassage.classList.remove("text-danger","text-sucess")
    if( (userNameInput.value===""|| passwordInput===""|| emailInput==="" ) || !validation ){
        alertMassage.classList.replace("d-none","d-block")
        alertMassage.classList.add("text-danger")
        alertMassage.innerHTML="you must fill all inputs"
    }
   else if(isExist()){
        console.log(isExist(emailInput.value));
        alertMassage.classList.replace("d-none","d-block")
        alertMassage.classList.add("text-danger")
        alertMassage.innerHTML="email already exist"
    }
    else{
        
        let user ={
        name: userNameInput.value,
        password: passwordInput.value,
        email: emailInput.value
        
    }
    console.log(isExist(user.email));
    alertMassage.classList.replace("d-none","d-block")
    alertMassage.classList.add("text-success")
    alertMassage.innerHTML="success , u will be redirect to login page"
     updateUsers(user);

    setTimeout(function(){
        location.href="index.html"
     },800)
    }
        
   
    
    
    
 }

 function updateUsers(data){
    users.push(data);
    localStorage.setItem("users",JSON.stringify(users))
 }

 function isExist(){
  let exist = false;
//   console.log(exist);
//  console.log(users);
 
// let exist = users.find(ele=>ele.email==email)
    for(let i = 0 ; i < users.length; i++){
        if( users[i].email.toLowerCase()==emailInput.value.toLowerCase()){
            exist = true;
            // console.log(exist);
        }
    }
    return exist
 }