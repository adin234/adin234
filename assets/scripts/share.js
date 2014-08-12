link = window.location.href;
document.querySelectorAll("#facebookShareTrigger span .count").innerHTML = "0";
document.querySelectorAll("#googleShareTrigger span .count").innerHTML = "0";
// ajax.get('http://graph.facebook.com/'+encodeURIComponent(link), {}, function(e) {
// 	document.querySelectorAll("#facebookShareTrigger span .count").innerHTML = e.shares;
// }, 'json');
// ajax.get('http://54.255.176.250/zh/index.php/pages/youtubers/?gplus=1&url='+encodeURIComponent(link), {},function(e) {
// 	document.querySelectorAll("#googleShareTrigger span .count").innerHTML = e;
//});
//gapi.plus.render("gplusShare", {action: "share", href: link});
console.log(link);
document.getElementById("googleShareTrigger").onclick = function() {
	window.open("https://plus.google.com/share?url="+link, "_blank", "toolbar=yes, scrollbars=yes, resizable=yes, width=550, height=500");
	return false;
};
document.getElementById("facebookShareTrigger").onclick = function() {
	window.open("http://www.facebook.com/sharer/sharer.php?u="+link, "_blank", "toolbar=yes, scrollbars=yes, resizable=yes, width=600, height=500");
	return false;
};