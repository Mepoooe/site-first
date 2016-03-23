<?php

class Person{
	public $name = "Eric";
	public $age = "23";
	public $job = "web-dev";

	public function greeting(){
		return "Hello, ".$this->age;
	}
}
  $eric = new Person ();
  echo $eric->greeting();
?>