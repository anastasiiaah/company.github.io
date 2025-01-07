jQuery(document).ready(function(){
		const progress = document.querySelector('.Progress');
		
		window.addEventListener('scroll', progressBar);

		function progressBar(e){
			let windowScroll = document.body.scrollTop || document.documentElement.scrollTop;
			let windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
			let per = windowScroll / windowHeight * 100;
			progress.style.width = per + '%';
			}
		$('.burger-menu').click(function(e) {
			$('.burger-menu, .menu').toggleClass('active');
			$('body').toggleClass('lock');
		});
		$('.topbar').click(function(e){
			$('.menu').toggleClass('active');
			$('.burger-menu').removeClass('active');
		});

});

function Off (e){
		event.preventDefault();
}
function scrollSlow(id){
	var offset = 0;
	$('html, body').animate({
		scrollTop: $(id).offset ().top - offset
	}, 500);
	return false;
}	 
let btn_send = document.getElementById('btn_send');
var ms = {
	mail: null, 
	message: null
};
btn_send.addEventListener('click', function(){
	swal('Введите Вашу почту:',{
 		 content: 'input',
 		 button: 'Далее'
	})
	.then((valueMail) => {
		swal('Введите Ваше сообщение...', {
			content: 'input',
			button: 'Далее',
		})
		.then((valueMess) => {
				swal('Ваше сообщение готово!', {
				icon: 'success',
				button: 'Отправить',
			})
			ms.mail = valueMail;
			ms.message = valueMess;			
		})
	});
});
