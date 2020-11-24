const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');
console.log(password2);
console.log(password)


//function to show the errors during form submission
function showError(input,message){
    const formControl = input.parentElement;
    formControl.className = 'form-class error';
    const small = formControl.querySelector('small');
    console.log(small);
    console.log(message);
    small.innerHTML = message;
}

showSuccess = (input) =>{
    const formControl = input.parentElement;
    formControl.className = 'form-class success';   
}

isValidEmail = (email) =>{
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}




form.addEventListener('submit',function(e){
    e.preventDefault();
    if(username.value === ''){
        showError(username,'Username is required!')
    }
    else{
        showSuccess(username);
    }

    if(email.value === ''){
        showError(email,'Email is required!')
    }
    else if(!isValidEmail(email.value)){
        showError(email,'Email is not valid!')
    }
    else{
        showSuccess(email);
    }

    if(password.value === ''){
        showError(password,'Password is required!')
    }
    else{
        showSuccess(password);
    }

    if(password2.value === ''){
        showError(password2,'Password is required!')
    }
    else{
        showSuccess(password2);
    }
});