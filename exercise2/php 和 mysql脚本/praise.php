<?php
Class Zan{
	public $conn;
	public function __construct($host, $dbname, $username, $password) {
		$this->conn = $this->connect($host, $username, $password);
		$this->selDb($dbname);
		// $this->setChar('utf8');
	}

	public function connect($host, $username, $password){
		$conn = mysql_connect($host, $username, $password);
		if(!$conn){
			$err = new Exception('链接失败');
			throw $err;
		}
		return $conn;
	}

	public function selDb($dbname){
		$sql = 'use '.$dbname;
		mysql_query($sql, $this->conn);
	}

	/*设置字符集*/
	public function setChar($char){
		$sql = 'set names '.$char;
		mysql_query($sql, $this->conn);
	}

	public function update(){
		$sql = "update likes set num = num + 1 where id = 1";
		$res = mysql_query($sql, $this->conn);
		if ($res) {
			$data['success'] = true;
			echo json_encode($data);
		} else {
			$data['success'] = true;
			echo json_encode($data);
		}
	}
}

$zan = new Zan('localhost', 'exercise', 'root', 'root');
$zan->update();
?>