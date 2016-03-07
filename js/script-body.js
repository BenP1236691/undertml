// JavaScript functions for changing html tags in the <body>

// Replaces the entire <body> tag with what's stored in 'txt'
// <body> = txt
function setBody(txt) {
var body = document.createElement('link');
body.appendChild(txt)
document.appendChild(body);
}
