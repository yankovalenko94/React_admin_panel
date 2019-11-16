<?php
$file = "../../yfuy1g221ub_hhg44.html";

if (file_exists($file)) {
    unlink($file);
} else {
    header("HTTP/1.0 400 Bad Request");
}