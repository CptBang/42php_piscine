<?php
	function delete($args) {
		$fp = fopen('list.csv', 'rw');
		if (!$fp) {
			echo "help";
			return;
		}

		$new = fgetcsv($fp);
		echo $new[0];
		fputcsv($fp, array(array('aba', 'eee', '1111'), array('haha ee')));
		fclose($fp);
	}

	delete("hello");
?>
