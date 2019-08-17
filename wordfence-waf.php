<?php
// Before removing this file, please verify the PHP ini setting `auto_prepend_file` does not point to this.

// This file was the current value of auto_prepend_file during the Wordfence WAF installation (Wed, 07 Aug 2019 07:01:10 +0000)
if (file_exists('C:\\xampp\\htdocs\\jyllandteodosio/wordfence-waf.php')) {
	include_once 'C:\\xampp\\htdocs\\jyllandteodosio/wordfence-waf.php';
}
if (file_exists('C:\\xampp\\htdocs\\jyllandteodosio\\wp-content\\plugins\\wordfence/waf/bootstrap.php')) {
	define("WFWAF_LOG_PATH", 'C:\\xampp\\htdocs\\jyllandteodosio/wp-content/wflogs/');
	include_once 'C:\\xampp\\htdocs\\jyllandteodosio\\wp-content\\plugins\\wordfence/waf/bootstrap.php';
}
?>