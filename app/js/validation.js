var validaton = (function(){

	var init = function(){
		console.log('инициализация модуля validation');
		_setUpListners();
	},

	_imgPattern = /\.(jpeg|jpg|png|gif)$/i,
	//Проверяет что бы все поля формы были не пустыми. Если пустые вызывает тултипы
	validateForm = function(){
		console.log("Проверяем форму");

		var self = this, //что это такое? я про весь блок
			elements = form.find('input, textarea').not('input[type="hidden"], input[name="filename"]'),
			valid = true;

		$.each(elements, function(index, element){

			var $element = $(element),
				value = $element.val();

			if(!value.length){
				_addError($element);
				valid = false;
			}
		});

		return valid;

	},

	_addError = function(element){
		console.log('тут ошибка');
		element.addClass('has-error');
		_createQtip(element, element.attr('qtip-position'));
	},

	_createQtip = function(){
		console.log('Создаем тултип');

		//позиционируе 
		if(position === 'right'){
			position = {
				my: 'left center',
				at: 'right center'
				};
			} else{
				position = {
				my: 'right center',
				at: 'left center',
				adjust:{
					method: 'shift none'
				}
			  };
			}

		// иницифлизация тултипа
		element.qtip({
			content:{
				text: function(){
					return $(this).attr('qtip-content');
				}
			},
			show:{
				event: 'show'
			},
			hide: {
				event: 'keydown click hideTooltip'
			},
			position: position,
			style:{
				classes: 'qtip-mystyle qtip-rounded',
				tip: {
					height: 10,
					width: 10
				}
			}
		}).trigger('show');

	},

	//прослушивает все события!
	_setUpListners = function(){

	}


	return {
		init: init,
		validateForm: validateForm
	};
})();

validaton.init();
























/*$(document).ready(function(){
		
		bPopup_run.onclick = function(){
		$("#add_project_bPopup").bPopup();
	};

	$('#name_add_project').qtip({
		 content:  {... },
		position:{
			my: 'center right',
			at: 'center left'
		}

	});
});
*/