var validation = (function(){

	var init = function(){
		console.log('инициализация модуля validation');
		_setUpListners();
	},

	placeholder = function(){
		console.log('Placeholder for IE8');

		$('input, textarea').placeholder();


	},

	_imgPattern = /\.(jpeg|jpg|png|gif)$/i,
	//Проверяет что бы все поля формы были не пустыми. Если пустые вызывает тултипы
	validateForm = function(form){
		console.log("Проверяем форму");

		var self = this, //что это такое? я про весь блок
			elements = form.find('input, textarea').not('input[type="hidden"], input[name="filename"], input[name="add_project_picture"]'),
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

	_createQtip = function(element, position){
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
				classes: 'qtip-mystyle qtip-rounded qtip-red',
				tip: {
					height: 10,
					width: 10
				}
			}
		}).trigger('show');

	},
  //очищает форму
  _clearForm = function(e){
    console.log('очищает форму');

    var form = $(this);
    form.find('.inputs_add_project, .input_name, .textarea_style, .input_chek').trigger('hideTooltip');
    form.find('.has-error').removeClass('has-error');
  },

	//прослушивает все события!
	_setUpListners = function(){
    $('form').on('keyDown', ".has-error", _removeError);//Убирает красную обводку у эл-та
    $('form').on('click', ".has-error", _removeError);//Убирает красную обводку у эл-та при клике
    $('form').on('reset', _clearForm);///Убирает красную обводку и тултипы у эл-тов при сбросе
	},

  //Убирает красную обводку у элементов форм
  _removeError = function(e){
    $(this).removeClass('has-error');
  };


	return {
		init: init,
		placeholder: placeholder,
		validateForm: validateForm,
	};
})();

if ($('form').length > 0) {
	validation.init();
	validation.placeholder();
};

