function move(interval) {
var begin = 0;
setInterval(function (begin){
	var 
	runner = $('.runner'),
	runner.style.marginLeft = begin + "px";
	return = begin++;
},
interval);	
};

$('.runner').css("margin-left":"10px");
	