const submit = document.getElementById("btn");
const errorMessage = document.getElementById("error");
const errorIcon = document.getElementById("icon-error");
submit.addEventListener("click", () => {
    validateEmail();
})

function validateEmail() {
    const email = document.getElementById('email');

    var regx = /^([a-zA-Z0-9\._]+)@([a-zA-Z0-9]+)([.])([a-z]+)(.[a-z]+)?$/;

    if(regx.test(email.value)){
        email.style.border = '1px solid hsl(0, 36%, 70%)';
        errorMessage.style.display = 'none';
        errorIcon.style.display = 'none';
        email.value = " ";
    }else{
        email.style.border = '1px solid hsl(0, 93%, 68%)';
        errorMessage.style.display = 'block';
        errorIcon.style.display = 'block';
    }
}