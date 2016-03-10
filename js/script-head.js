// JavaScript functions for changing html tags in the <head>

// Replaces the entire <head> tag with what's stored in 'txt'
// <head> = txt
function setHead(txt) {
var head = document.createElement('head');
head.appendChild(txt)
document.appendChild(head);
}
// Links the shortcut icon to the url in 'v'
// Favicon URL = v
function setIcon(v) {
var link = document.createElement('link');
link.rel='shortcut icon';
link.href=v;
document.getElementsByTagName('head')[0].appendChild(link);
}
// Sets the <title> to the text in 'title'
// <title> = title
function setTitle(title) {
document.getElementsByTagName("title")[0].innerHTML = title; 
}
