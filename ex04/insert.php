<?php
	function insert($args) {
		$fp = fopen('list.csv', 'w');
		fputcsv($fp, $args);
		fclose($fp);
	}
?>
