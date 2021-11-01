const docReady = function() {
  if (document.readyState === ('complete')) {
    init();
  }
  else {
    document.addEventListener ('DOMContentLoaded', init)
  }
}
docReady();