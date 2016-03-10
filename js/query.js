function q(variable) {
       var query = window.location.search.substring(1);
       var vars = query.split("&");
       for (var i=0;i<vars.length;i++) {
               var pair = vars[i].split("=");
               if(pair[0] == variable){return pair[1];}
       }
       return('err404');
}
// Carry query with action
function (thelink,thelocation) {
       window.open(thelink+location.search,'thelocation');
}

// Carry query auto
var x = document.getElementsByTagName("a"); var i; for (i = 0; i < x.length; i++) {x[i].href = +window.location.search;}
