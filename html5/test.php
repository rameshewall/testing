<?php
	$title = 'test';
?>
<!DOCTYPE html>
<html>
	<head>
		<title><?php echo $title; ?></title>
	</head>
	<body>
		<canvas id="canvas1" height="500" width="300" style="border:1px solid; padding: 5px;">
		Your browser does not support the HTML5 canvas tag.
		</canvas>
		
		<script>
			var can = document.getElementById('canvas1');
			var con = can.getContext("2d");
			con.beginPath();
			con.lineWidth=10;
			con.lineJoin = 'round';
			con.moveTo(30,200);
			con.lineTo(30,150);
			con.lineTo(70,150);
			con.lineTo(70,100);
			con.lineTo(110,100);
			con.stroke();
		</script>
	</body>
</html>

http://drupal.org/node/1246602