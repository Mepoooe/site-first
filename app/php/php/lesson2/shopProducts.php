<?php

class shopProducts{
    public $title = "Какой то товар";
    public $lastName = "фамилия";
    public $firstName = "Имя";
    public $price = "0";
    
    /*создадим функцию конструктор */
    function __construct($title, $lastName, $firstName, $price){
        $this->title = $title;
        $this->lastName = $lastName;
        $this->firstName = $firstName;
        $this->price = $price;
        
        
        echo $this->getAllView();
    }
    /*создадим функцию деструктор */
    function __destruct(){
        echo $this->title. "был занесен в базу данных <br />";
    }
    
    function getAllView(){
        return "Автор: {$this->firstName} {$this->lastName}<br />
        Название: {$this->title}<br />
        Цена: {$this->price}<hr />";
    }
}
/*создадим несколько объектов из нашего класса */

$tovar1 = new shopProducts("Мастер и Маргарита", "Булгаков", "Михаил", "25");

$tovar2 = new shopProducts("Милый друг", "Мопасан", "Ги-Де", "50");

?>