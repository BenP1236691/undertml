// JavaScript functions for changing html tags in the <body>

// Replaces the entire <body> tag with what's stored in 'txt'
// <body> = txt
function setBody(txt) {
var body = document.createElement('body');
body.appendChild(txt);
document.appendChild(body);
}
function setImg(imgURL,imgClass,imgId) {
var cssQuery = document.querySelectorAll("div[class="+sprClass+"][id="+sprId+"],span[class="+sprClass+"][id="+sprId+"]");
cssQuery.src = imgURL;
}
function setSprite(sprURL,sprClass,sprId) {
document.querySelectorAll("div[class="+sprClass+"][id="+sprId+"]","span[class="+sprClass+"][id="+sprId+"]").style.background-image = sprURL
}
function setBodyCSS(csstxt) {
  document.body.style = csstxt;
}
function setBgColor(bgcolor) {
  document.body.style.backgroundColor = bgcolor;
}
function setBgImg(bgurl) {
  document.body.style.backgroundImage = url(bgurl);
}
function setCursor(curlsor) {
  document.body.style.cursor = url(curlsor),auto;
}
