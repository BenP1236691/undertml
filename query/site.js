// Edits the main UNDERTML site pages
// vars
var title = q('title')
var soul = q('soul')

// scripts
if (title != 'err404') {
  document.getElementsByTagName("title")[0].innerHTML = title;
}
if (soul !='err404') {
  var directory = 'images';
  var soulURL = directory+'/soul'+soul+'.png';
  setIcon(soulURL);
}
