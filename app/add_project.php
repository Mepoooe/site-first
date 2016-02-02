<?php
	
	$name = $_Post['name_add'];
	$data = array();

	if ($name === '') {
		$data["status"] = "error";
		$data['text'] = 'Заполните имя!';
	}esle{
		$data["status"] = "Ok";
		$data['text'] = 'Спасибо!';
	}

	header("Content-Type:application/json");
	echo json_encode($data);
	exit;
?>