var email = document.getElementById("field1")
var errl = document.getElementById("err1")
var pwd = document.getElementById("field2")
var err2 = document.getElementById("err2")
var ph = document.getElementById("field3")
var err3 = document.getElementById("err3")

var regex =/^([A-Za-z0-9\-#_.]+)@([A-Za-z0-9\-]+).([a-z]{2,3}).([a-z]{2,3})?$/
var pass =/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/
var phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
function validateEmail(){
//alert("hi")
if (email.value.trim()==''){
    err1.innerText="field cannot be empty"
    email.style.border='1px solid red'
    return false

}
else if (!email.value.match(regex)){
errl.innerText="email is not in correct format";
email.style.border='5px solid red'
return false
}
else{
    errl.innerText="";
email.style.border='5px solid green'
return true
}
}




function validatePassword(){
    if (pwd.value.trim()==''){
        err2.innerText="field cannot be empty"
        pwd.style.border='1px solid red'
        return false
    
    }
    else if (!pwd.value.match(pass)){
        err2.innerText="password is not in correct format";
        pwd.style.border='5px solid red'
        return false
        }
    
    else{
        err2.innerText="";
    pwd.style.border='5px solid green'
    return true
    }
    
}




function validatephoneno(){
    if (ph.value.trim()==''){
        err3.innerText="field cannot be empty"
        ph.style.border='5px solid red'
        return false
}

else if (!ph.value.match(phoneno)){
    err3.innerText="ph is not in correct format";
    ph.style.border='5px solid red'
    return false
    }



else if (ph.value.length!=10){
    err3.innerText="ph is not in correct format";
    ph.style.border='5px solid red'
    return false
}
else{
    err3.innerText="";
ph.style.border='5px solid green'
return true
}
}
function verify(){

}
