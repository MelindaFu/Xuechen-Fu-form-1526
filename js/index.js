let pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

//get the element
let fn = document.getElementById('fname');
let em = document.getElementById('email');
let mes = document.getElementById('message');

//event-target object
let fm = document.getElementById('contact-form');

//event-handler
function formValidator(e){
    e.preventDefault();
    //collect data and error-message
    let data = {};
    let errors = [];
    
    //validating full name
    if(fn.value){
        data.fullname = fn.value;
    }else{
        errors.push("Full name has to be added!");
    }
    
    //validating email
    if(em.value){
        if(pattern.test(em.value.toLowerCase())){
            data.email = em.value;
        }
        else{
            errors.push("Invalid email!");
        }
        data.email = em.value;
    }else{
        errors.push("Email has to be added!");
    }
    
    //validating message
    if(mes.value){
        data.message = mes.value;
    }else{
        errors.push("message name is missing!");
    }
    
    //Handle the feedback
    if(errors.length === 0){
        fm.reset();
    }
    
    console.log(data, errors);
}

//submit button for click event
fm.addEventListener('submit', formValidator);