<?php
$nazwa = "konwersacja.txt";
$plik = fopen($nazwa, "a");
$licznik = count(file($nazwa));
$tekst = $_GET["nick"].": ".$_GET["message"]."\n";
fwrite($plik, $tekst);
fclose($plik);

while ($licznik > 14) {
	$plik = file($nazwa);
	unset($plik[0]);
	file_put_contents($nazwa, $plik);
	$licznik--;
}
?>
