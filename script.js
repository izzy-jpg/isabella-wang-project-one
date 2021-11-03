
const submitEmail = function () {

  // selects <form> email-submission and <input> subscribe-email
  const emailSubmission = document.querySelector('.email-submission');
  const emailInput = document.querySelector('.subscribe-email');

  // when the <form> '.email-submission' is submitted
  emailSubmission.addEventListener('submit', function (e) {
    e.preventDefault();

    // clear the input
    emailInput.value = '';

    // create an alert that says 'Thank you for subscribing!'
    alert("Thank you for subscribing!");
  });
};






const addSearchBar = function () {

  // selects <i> fa-search and <li> search
  const searchIcon = document.querySelector('.fa-search');
  const search = document.querySelector('.search');

  // when the <i> '.fa-search' is clicked
  searchIcon.addEventListener('click', function () {
  
    // creates a form
    const searchBar = document.createElement('form');
  
    // adds the .search-bar class (which has the css for the bar on it)
    searchBar.classList.add('search-bar');
  
    // selects the .search-bar class we just created
    const searchBarClass = document.querySelector('.search-bar');
  
    // if the .search-bar class does not exist, do the following (will only append once)
    if (searchBarClass === null) {
      searchBar.innerHTML = `<input type="text" name="searchBar" id="searchBar" class="searchBar" placeholder="Search" required>
    <label for="searchBar" class="sr-only">Enter your search query</label>
    <button type="submit"><i class="fas fa-long-arrow-alt-right"></i></button>`;
      search.appendChild(searchBar);
    } else {
      // if the search-bar class exists, remove it
      searchBarClass.remove();
    }
  });
};





// initializes
function init() {

  // calls submitEmail and addSearchBar functions
  submitEmail();
  addSearchBar();
};


// when the document is ready, run init()
const docReady = function () {
  if (document.readyState === ('complete')) {
    init();
  }
  else {
    document.addEventListener('DOMContentLoaded', init)
  }
}
docReady();