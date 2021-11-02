// when the form '.email-submission' is submitted
const emailSubmission = document.querySelector('.email-submission');

const emailInput = document.querySelector('.subscribe-email');

// when the li '.search' is clicked
const search = document.querySelector('.search');
console.log(search)

search.addEventListener('click', function(){
  console.log('clicky clicky');
  // creates a form
  const searchBar = document.createElement('form');
  // adds the .search-bar class
  searchBar.classList.add('search-bar');
  // selects the .search-bar class
  const searchBarClass = document.querySelector('.search-bar');
  // if the .search-bar class does not exist, do the following (will only append once)
  if (searchBarClass === null){
  searchBar.innerHTML = `<input type="text" name="searchBar" id="searchBar" class="searchBar" placeholder="Search" required>
  <label for="searchBar" class="sr-only">Enter your search query</label>
  <button type="submit"><i class="fas fa-long-arrow-alt-right"></i></button>`;
  search.appendChild(searchBar);
  } else{
    // if the search-bar class exists, remove it
    searchBarClass.remove();
  }
});




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