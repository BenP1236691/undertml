// Edits the main UNDERTML site pages
// vars
var title = q('title')

// scripts
if (title != 'err404') {
  document.getElementsByTagName("title")[0].innerHTML = title; 
}
