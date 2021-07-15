const closeBtn = document.getElementById("close");
const contactform = document.getElementById("contact-box");
const orEl = document.getElementById("or");
closeBtn.addEventListener('click', () => {
    
    
    console.log('clicked');
    //contactform.classList.remove('contact-box');
    contactform.classList.add('hide');
    orEl.classList.add('hide');


});