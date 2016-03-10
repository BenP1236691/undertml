// JavaScript functions for changing html tags in the <body>

// Replaces the entire <body> tag with what's stored in 'txt'
// <body> = txt
function setBody(txt) {
var body = document.createElement('body');
body.appendChild(txt);
document.appendChild(body);
}
function setImg(imgURL,imgClass,imgId) {
document.querySelectorAll("img[class="+imgClass+"][id="+imgId+"]") = imgURL
}
