const logg = document.getElementById("submit");
const logout = document.getElementById("logout");
const welcome = document.getElementById("welcome");
const form = document.getElementById("form");

const username = document.getElementById("username");
const password = document.getElementById("password");

const newUsername = document.getElementById("newusername");
const newPassword = document.getElementById("newpassword");
const newUserBtn = document.getElementById("newuserbtn");
const createForm = document.getElementById("create");


logout.style.display = "none";

let myArray =  [ 
    {
        personalname: "Fredrik",
        personalpassword: "12345",
    },
    {
        personalname: "Elin",
        personalpassword: "121212",
    },
    {
        personalname: "Anna",
        personalpassword: "898",
    },

    
]


const lsArray = localStorage.setItem("lsArray", JSON.stringify(myArray))



function init() {
    if(localStorage.getItem("userNames","username.value")) {
        
        loginSucess();
   
}
}
init();






logg.addEventListener("click", checkin);



function checkin() {

    //  //här måste jag hämta lista från local storage

       for (loginUser of myArray) {
        
        if (username.value == loginUser.personalname && password.value == loginUser.personalpassword) {
        
         localStorage.setItem("userNames", username.value)

    loginSucess();
            return
    } 
}

loginFail();

}

function loginFail() {
    document.getElementById("welcome").innerHTML = "Fel användarnamn eller lösenord, försök igen";
    
    username.value = "";
    password.value = "";
}
   




function loginSucess(){

 form.style.display = "none";
 logout.style.display = "block";
 createForm.style.display = "none";

 const welcomeName = localStorage.getItem("userNames")

 welcome.innerHTML = welcomeName + ", " + "Du är nu inloggad!";

 document.getElementById("welcomenew").style.display = "none";

}





logout.addEventListener("click", checkout);

function checkout() {
    form.style.display = "block";
    createForm.style.display = "block";
    welcome.innerHTML = "Välkommen till min hemsida!! Du måste logga in";
    logout.style.display = "none"
    username.value = "";
    password.value = "";
     localStorage.removeItem("userNames");
} 


newUserBtn.addEventListener("click", makeNewUser);





function makeNewUser() {

    const newUsers = {
     personalname: newUsername.value,
       personalpassword: newPassword.value
    }
    
    
    const newArray = JSON.parse(localStorage.getItem("lsArray")); 
    
    
    
   newArray.push(newUsers);
    localStorage.setItem("newArray", JSON.stringify(newArray));
    
    
    document.getElementById("welcomenew").innerHTML = "Välkommen" + " " + newUsername.value + " " + "ny användare är registrerad, du kan nu logga in";
    
    newUsername.value = " ";
    newPassword.value = " ";
    }
    

