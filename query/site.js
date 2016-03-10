// Edits the main UNDERTML site pages
// vars
var title = q('title')
var icon = q('icon')
var soul = q('soul')

// scripts
if (title != 'err404') {
  setTitle(title);
}
if (soul !='err404') {
  var iconURL = 'sprite/soul'+soul+'.png';
  var logoURL = 'logo/logo_undertml'+soul+'.png';
  setIcon(iconURL);
  setImg(logoURL,'logo','siteheader');
}
