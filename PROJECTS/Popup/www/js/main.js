var popup = {
	show: function(){},
	hide:function(){},
	addEventBtn: function(event, fn){},
	appendTo: function(selector){}
};
var helper = {
	$: function(selector, context){
		return (context || document).querySelectorAll(selector);
	},
	hide: function(elm){
		elm.style.display = 'none';
		}.
	show: function (elm){
		elm.style.display = 'block';
	}
};
helper.$('.block');
