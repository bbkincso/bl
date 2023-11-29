const form = document.querySelector('#myForm');
const nameInput = document.getElementById('full-name');
const nameError = document.getElementById('name-error');
const  emailInput= document.getElementById('email');
const  emailError= document.getElementById('email-error');
const  phoneInput= document.getElementById('');
const  phoneError= document.getElementById('');
const  dateInput= document.getElementById('');
const  dateError= document.getElementById('');
const  ticketError= document.getElementById('');
const  ticketInput_1= document.getElementById('');
const  ticketInput_2= document.getElementById('');
const  ticketInput_3= document.getElementById('');
const  button= document.getElementById('my-button');




    



nameInput.addEventListener('input', validateField.bind(null, nameInput));
emailInput.addEventListener('input', validateField.bind(null, emailInput));




// function validateField(field){

//     if(field.validity.valid){
//         field.style.borderColor = "#555"; 
//     } else {
//         field.style.borderColor = "red";
//     }

// }



function validateField(field) {
    if(nameInput.validity.valid){
        console.log("valid");
        nameInput.textContent = '';

      } else {
        nameInput.textContent = '*';
      }
  }
  