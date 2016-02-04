<?php
	
	$name = $_POST['name_add'];
	$data = array();

	

	if ($name === '') {
		$data['status'] = 'error';
		$data['text'] = "<h1>Заполните имя</h1>";
	}else{
		$data['status'] = 'Ok';
		$data['text'] = 'Да вы молодец';
	}

	header("Content-Type: application/json");
	echo json_encode($data);
	exit;
?>