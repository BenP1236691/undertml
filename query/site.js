// Edits the main UNDERTML site pages
// vars
var title = q('title')
var icon = q('icon')
var soul = q('soul')

// scripts
if (title != 'err404') {
  setTitle(title);
}
if (icon != 'err404') {
  setIcon(icon);
}
if (soul !='err404') {
  var directory = 'sprite';
  var soulURL = directory+'/soul'+soul+'.png';
  setIcon(soulURL);
}
