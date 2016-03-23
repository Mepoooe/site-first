<?php
error_reporting('E_ALL');

	/*require_once 'php/config.php';*/

	if(!empty($_POST['data'])){
		parse_str($_POST['data'], $arr);
	}




	


	$data = array();

	

	if (empty($arr[name_friend]) or empty($arr[email_friend]) or empty($arr[text_friend])) {
		$data['status'] = 'error';
		$data['text'] = 'Заполните имя';

		
	}else{
		$data['status'] = 'Ok';
		$data['text'] = 'Да вы молодец';

		foreach($arr as $key => $value){
			$arr[$key] = strip_tags(trim($value));
		}

		

		foreach ($arr as $key => $value) {
			$body = '<p><strong>'.$key.'</strong>'.$value.'</p>';
		}

		require_once 'php/smtpMail.php';

		$result = sendEmail($arr[name_friend], $arr[email_friend], $arr[text_friend], $body);


		//2.58
	}


	echo json_encode($data);
	exit;
?>