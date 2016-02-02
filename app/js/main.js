var myModule = (function(){
	var init = function(){
		_setUpListners();
		//то что должно произойти сразу
	};

	var _setUpListners = function(){
		//прослушка событий
		$('#bPopup_run').on('click', showModale); // открыть модальное окно
		$('#form_add_project').on('submit', addProject);//добавление проекта
	};

	var showModale = function(e){
		console.log("Привет ");

		e.preventDefault();

		$('#add_project_bPopup').bPopup();
	};

	var addProject = function(e){
		console.log("привет от формы");
		e.preventDefault();
//наши переменные
		var form = $(this),
			url = "add_project.php",
			data = form.serialize();

			console.log(data);

//Ajax запрос на сервер
		$.ajax({
			url: url,
			type: 'POST',
			dataType: 'json',
			data: data,
		})
		.done(function(ans) { 	//ответ от сервера
			console.log(ans);
			if(ans.status==='Ok'){
				console.log('Все хорошо!')
				form.find('.success-mes').text(ans.text);
			}else{
				form.find('.error-mes').text(ans.text);
			}
		})
		.fail(function() {
			console.log("error");
		});
	
	}

	return{
		init: init
	};

})();

myModule.init();

//40 минута























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