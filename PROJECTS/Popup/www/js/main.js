    $(document).ready(function(){
        //# Скрыть PopUp при загрузке страницы    
        PopUpHide();
    });
    //# Функция отображения PopUp c выводом значения выбора пользователя
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
	//# Првязываем событие к элементу документа
	$('.container').on('click',PopUpShow);
	
    //# Функция скрытия PopUp Закрываем при нажатии на кнопку
    function PopUpHide(){
        $(".popup").hide();
    }