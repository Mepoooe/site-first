(function() {
  'use strict';
  var my = {};
  publicInterface();
  init();
  addListener();

  function addListener() {
    $('#form_add_project').on('submit', submitForm);
  }

  function submitForm(e) {
    var form = $(this),
      url = '',
      defObject = ajaxForm(form, url);
    e.preventDefault();
    console.log("отработала форма");

  }

  function ajaxForm(form, url) {

    if (!validation.validateForm(form)) return false; // Возвращает false, если не проходит валидацию
    var data = form.serialize(); // собираем данные из формы в объект data

  }

  function init() {
    console.log("Инициализация модуля");
    my.publicMethod();
  }

  function publicInterface() {
    my = {
      publicMethod: function() {
        console.log("Публичный метод");
      }
    };
  }
  window.qtp = my;
})();
