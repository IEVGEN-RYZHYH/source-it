    $(document).ready(function(){
        //# ������ PopUp ��� �������� ��������    
        $(".popup").hide();
    });
    //# ������� ����������� PopUp c ������� �������� ������ ������������
    function PopUpShow(){
		var sh =$(".popup").fadeIn(300);

		function no() {
		PopUpHide();
		return console.log('false');
		};
		function yes() {
		PopUpHide();
		return console.log('true');
		};
		
		$('.no, .close').on('click',no);
		$('.yes').on('click',yes);
		return (yes || no);
    };
	//# ���������� ������� � �������� ���������
	$('.container').on('click',PopUpShow);
	
	
    //# ������� ������� PopUp ��������� ��� ������� �� ������
    function PopUpHide(){
        $(".popup").fadeOut(200);
    };
	//=================================================
/* var popup = {
show:function PopUpShow(){
        $(".popup").show();
		function no() {
		PopUpHide();
		return console.log('false');
		};
		function yes() {
		PopUpHide();
		return console.log('true');
		};
		$('.no').on('click',no);
		$('.yes').on('click',yes);
		return (yes || no);
    },
hide:function PopUpHide(){
        $(".popup").hide();
    },
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
helper.$('.block'); */