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

//  check required fields
function checkRequired(input){
    input.forEach(item => {
       if(item.value.trim()===''){

       showError(item,`${getFieldName(item)} is required`)
       }else{
           showSuccess(item)
       }
        });

} 
// get fieldname
function getFieldName(item){
    return item.id.charAt(0).toUpperCase()+item.id.slice(1);

}
// event listner
form.addEventListener('submit',function(e){
    e.preventDefault();

   
    checkRequired([username,email,phone,password,password2]);
})