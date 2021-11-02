// when the form '.email-submission' is submitted
const emailSubmission = document.querySelector('.email-submission');

const emailInput = document.querySelector('.subscribe-email');





function init(){
  emailSubmission.addEventListener('submit', function(e){
    e.preventDefault();
  
    // clear the input
    emailInput.value = '';
  
    // create an alert that says 'thank you for subscribing'
    alert("Thank you for subscribing!");
  })
};

const docReady = function() {
  if (document.readyState === ('complete')) {
    init();
  }
  else {
    document.addEventListener ('DOMContentLoaded', init)
  }
}
docReady();