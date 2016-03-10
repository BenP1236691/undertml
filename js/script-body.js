// JavaScript functions for changing html tags in the <body>

// Replaces the entire <body> tag with what's stored in 'txt'
// <body> = txt
function setBody(txt) {
var body = document.createElement('body');
body.appendChild(txt);
document.appendChild(body);
}
function setImg(imgURL,imgClass,imgId) {
var byClass = document.getElementsByClassName(imgClass);
var byId = byClass.getElementById(imgId);
byId.src = imgURL;
}
function setSprite(sprURL,sprClass,sprId) {
document.querySelectorAll("div[class="+sprClass+"][id="+sprId+"]","span[class="+sprClass+"][id="+sprId+"]").style.background-image = sprURL
}
