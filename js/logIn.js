
let passwordLoginInput = document.getElementById("passwordLoginInput");
let emailLoginInput = document.getElementById("emailLoginInput");
let inputs = document.querySelectorAll("input")
let loginBtn = document.getElementById("loginBtn")

inputs.forEach(ele=>
    ele.addEventListener("input",function(){
    validateInput(this)
}
))
let users;
let loggedUser;
if (JSON.parse(localStorage.getItem("users")) !== null) {
    users = JSON.parse(localStorage.getItem("users"))
} else {
    users = [];
}
const regex = {
    passwordLoginInput: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
    emailLoginInput: /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/gm
}
function validateInput(input) {
    // console.log(input);
    input.classList.remove("is-valid");
    input.classList.remove("is-invalid");
    let isValid = regex[input.id].test(input.value);
    if (isValid) {
        input.classList.add("is-valid");
        input.nextElementSibling.classList.replace("d-block", "d-none")
    }
    else {
        input.classList.add("is-invalid");
        input.nextElementSibling.classList.replace("d-none", "d-block")
    }
    return isValid
}

function validation() {
    console.log("full Valid");
    
    if (validateInput(emailLoginInput) && validateInput(passwordLoginInput)) {
        return true
    }
    else {
        return false
    }
}

function login() {
    console.log(validation()
    );
    
    if (validation()) {
        console.log("validated");
        
        if (isExist()) {
            console.log("Exist");
            
            alertMassage.classList.replace("d-none", "d-block")
            alertMassage.classList.add("text-success")
            alertMassage.innerHTML = "success , u will be redirect to home page"
            localStorage.setItem("loggedUser" , JSON.stringify(loggedUser))
            setTimeout(function () {
                location.href = "home.html"
                // loginBtn.setAttribute("href" , "home.html")
            }, 800)
        }

    }

    else{

}}


function isExist() {
    let exist = false;
    //   console.log(exist);
    //  console.log(users);

    // let exist = users.find(ele=>ele.email==email)
    for (let i = 0; i < users.length; i++) {
        if (users[i].email.toLowerCase() == emailLoginInput.value.toLowerCase() &&
            users[i].password== passwordLoginInput.value) {
            exist = true;
            loggedUser=users[i].name
            // console.log(exist);
        }
    }
    return exist
}