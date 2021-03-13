
const loginButton = document.querySelector('.login-button');

let usernameInput = document.getElementById("userName");
let passwordInput = document.querySelector("#password")
loginButton.addEventListener("click",(e)=>loginHandler(e));
let isButtonClicked = false;
function loginHandler (e){
    isButtonClicked = true;
    e.preventDefault();
    let userName = usernameInput.value ;
    let password = passwordInput.value;
    if(userName){
        if(password){
              if(isButtonClicked){
                  window.location.href="https://akash-singh-portfolio.netlify.app/" 
              }
        }
    }
   
}