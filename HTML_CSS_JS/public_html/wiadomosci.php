<?php
$nazwa = "konwersacja.txt";
if (!file_exists($nazwa)) {
	$plik = fopen($nazwa, "w");
	fclose($plik);
} else {
	$plik = fopen($nazwa, "r");
	$tekst = fread($plik, filesize($nazwa));
	fclose($plik);
	echo $tekst;
}
?>
