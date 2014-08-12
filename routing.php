<?php
// www/routing.php
if (file_exists(__DIR__ . '/' . explode('?', $_SERVER['REQUEST_URI'])[0])) {
     return false; // serve the requested resource as-is.
} else {
 include_once '404.html';
}