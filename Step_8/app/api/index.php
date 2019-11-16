<?php
$htmlfiles = glob("../../*.html");
$response = [];

foreach ($htmlfiles as $file) {
    array_push($response, basename($file));
}

echo json_encode($response);