    $(document).ready(function(){
        //# ������ PopUp ��� �������� ��������    
        PopUpHide();
    });
    //# ������� ����������� PopUp c ������� �������� ������ ������������
    function PopUpShow(){
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
    };
	//# ���������� ������� � �������� ���������
	$('.container').on('click',PopUpShow);
	
    //# ������� ������� PopUp ��������� ��� ������� �� ������
    function PopUpHide(){
        $(".popup").hide();
    }