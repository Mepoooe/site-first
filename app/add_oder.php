<?php
	
	$name = $_POST['name-friend'];
	$data = array();

	

	if ($name === '') {
		$data['status'] = 'error';
		$data['text'] = 'Заполните имя';
	}else{
		$data['status'] = 'Ok';
		$data['text'] = 'Да вы молодец';
	}

	header("Content-Type: application/json");
	echo json_encode($data);
	exit;
?>