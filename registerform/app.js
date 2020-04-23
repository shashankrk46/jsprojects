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
function checkEmail(input){
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(re.test(String(input.value.trim()).toLowerCase())){
        showSuccess(input)
    }else{
        showError(input,'Email is not valid')
    }

}

function checkPhone(phone) {
   const number=/^\(?\d{3}\)?[-. ]?\d{3}[-. ]?\d{4}$/;
   return number.test(parseInt(phone));
  }

//  check required fields
function checkRequired(inputArr){
    inputArr.forEach(item => {
       if(item.value.trim()===''){

       showError(item,`${getFieldName(item)} is required`)
       }else{
           showSuccess(item)
       }
        });

} 
// check input lenght
function checkLength(input,min,max){
    if(input.value.length<min){
        showError(input,`${getFieldName(input)} must be at least ${min}`)
    }else if(input.value.length>max){
        showError(input,`${getFieldName(input)} must be less than ${max}`)
    }else{
        showSuccess(input);
    }
}

// check passwprds match
function checkPasswordMatch(input1,input2){
    if(input1.value!==input2.value){
        showError(input2,'Passwords do not match')
    }
}

// get fieldname
function getFieldName(item){
    return item.id.charAt(0).toUpperCase()+item.id.slice(1);

}
// event listner
form.addEventListener('submit',function(e){
    e.preventDefault();

   
    checkRequired([username,email,phone,password,password2]);
    checkLength(username,3,15);
    checkLength(password,6,25);
    checkEmail(email);
    checkPasswordMatch(password,password2)

})