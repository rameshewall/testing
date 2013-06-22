$(document).ready(function(){
	var color = $('#color');
	var paint = $('#paint');
	var ctxColor = color.get(0).getContext('2d');
	drawGradients(ctxColor);
	var ctxPaint = paint.get(0).getContext('2d');
	
	function drawGradients() {
		var grad = ctxColor.createLinearGradient(20, 0, canvasColor.width - 20, 0);
		grad.addColorStop(0, 'red');
		grad.addColorStop(2 / 6, 'yellow');
		grad.addColorStop(3 / 6, 'green')
		grad.addColorStop(4 / 6, 'aqua');
		grad.addColorStop(5 / 6, 'blue');
		grad.addColorStop(1, 'purple');
		ctxColor.fillStyle=grad;
		ctxColor.fillRect(0, 0, canvasColor.width, canvasColor.height);
	}
});

