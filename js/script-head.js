// JavaScript functions for changing html tags in the <head>
// Favicon URL = v
function setfavicon(v) {
var link = document.createElement('link');
link.rel='shortcut icon';
link.href=v;
document.getElementsByTagName('head')[0].appendChild(link);
}
