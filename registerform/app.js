const form=document.getElementById('form');
const username=document.getElementById('username');
const email=document.getElementById('email');
const phone=document.getElementById('phonenumber');
const password=document.getElementById('password');
const password2=document.getElementById('password2');

// form error
function showError(input,message){
    const formControl=input.parentElement;
    formControl.className='form-control error';
    const small=formControl.querySelector('small');
    small.innerText=message;

}
// form success
function showSuccess(input){
    const formControl=input.parentElement;
    formControl.className='form-control success';
}

// email valid
function isValidEmail(email){
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());

}

function isValidPhone(phone) {
   const number=/^\(?\d{3}\)?[-. ]?\d{3}[-. ]?\d{4}$/;
   return number.test(parseInt(phone));
  }
// event listner
form.addEventListener('submit',function(e){
    e.preventDefault();

    if(username.value===''){
        showError(username,'username is required');
    }else{
        showSuccess(username);
    }

    if(email.value===''){ 
        showError(email,'email is required');
        
    }else if(!isValidEmail(email.value)){
        showError(email,'valid email is required');
    }
    else{
        showSuccess(email);
    }

    if(phone.value===''){ 
        showError(phone,'phone number is required');
    }
    else if(!isValidPhone(phone.value)){
        showError(phone,'please enter a valid phonenumber');

    }
    else{
        showSuccess(phone);
    }

    if(password.value===''){ 
        showError(password,'password is required');
    }else{
        showSuccess(password);
    }
    if(password2.value===''){ 
        showError(password2,'re-enter password again');
    }else{
        showSuccess(password2);
    }
    
})