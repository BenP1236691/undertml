// Edits the main UNDERTML site pages
// vars
var title = q('title')
var soul = q('soul')

// scripts
if (title != 'err404') {
  setTitle(title)
}
if (soul !='err404') {
  var directory = 'images';
  var soulURL = directory+'/soul'+soul+'.png';
  setIcon(soulURL);
}
