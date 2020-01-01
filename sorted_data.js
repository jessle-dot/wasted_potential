<!DOCTYPE html>
<html>
<head>
<script src="http://code.jquery.com/jquery-3.2.1.min.js"></script>
</head>

<body>
  <script> $("#button").click(function(event) {
var text = $("#input").val(); $("#list").append('<li>' + text + '</li>');
});
</script>
