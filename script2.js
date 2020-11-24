const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');



//function to show the errors during form submission
function showError(input,message){
    const formControl = input.parentElement;
    formControl.className = 'form-class error';
    const small = formControl.querySelector('small');
    small.innerHTML = message;
}

showSuccess = (input) =>{
    const formControl = input.parentElement;
    formControl.className = 'form-class success';   
}

checkEmail = (input) =>{
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    console.log(re.test(input))
   // return re.test(String(email).toLowerCase());
   if(re.test(input.value.trim())){
        showSuccess(input);
   }
   else{  
       showError(input,'Email is not valid');
   }
}

checkRequired = (inputArr) =>{
    inputArr.forEach(input => {
        if(input.value.trim() ===''){
            showError(input,`${getFieldName(input)} is Required`);
        }
        else{
            showSuccess(input);
        }
    });
}

passwordMatch = (input1,input2) =>{
    if(input1.value !== input2.value){
        showError(input2,'Passwords do not match');
    }
}


getFieldName = (input) =>{
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}


form.addEventListener('submit',function(e){
    e.preventDefault();
    checkRequired([username,email,password,password2]);
    passwordMatch(password,password2);
    
    checkEmail(email);
});