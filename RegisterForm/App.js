const username=document.querySelector("username")
const form=document.getElementById("form")
const email=document.querySelector('#email')
const password=document.querySelector('#password')
const cpassword=document.getElementById("cpassword")
let success=true

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    validateInputes()
})

function validateInputes(){
    const userval=username.value.trim()
    const emailval=email.value.trim()
    const passval=password.value.trim()
    const cpassval=cpassword.value.trim()

    if(username===''){
        setError(username,"Enter your Name")
    }
    else{
        setSuccess(username)
    }
    if(email==='')
    {
        setError(email,"Emter Your Email")
    }
    else if(!validateemail(emailval)){
        setError(email,"Enter valid Email")
    }
    else{
        setSuccess(email)
    }
    
}
function setError(element,message){
    const inputGroup=element.parentElement()
    const errorElement=inputGroup.getElementById("error") 
    errorElement.innerText=message;

}
function setSuccess(element){
    const inputGroup=element.parentElement()
    const errorElement=inputGroup.getElementById("error")
    errorElement.innerText='';

}
function validateemail(){

}