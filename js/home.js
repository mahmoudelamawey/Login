let welcomeMassage = document.getElementById("welcomeMassage")

if (JSON.parse( localStorage.getItem("loggedUser"))!=null){
    user = JSON.parse( localStorage.getItem("loggedUser"))
    welcomeMassage.innerHTML=`welcome ${user}`
}else{
    location.href="index.html"
}