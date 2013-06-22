function HTML5ColorSwitch(html5idgroup,html5idcolor,colR,colV,colB,colname){
	var canvas = document.getElementById('canvas'+html5idgroup);
	var ctx = canvas.getContext('2d');
	var imgd = ctx.getImageData(0, 0, 330, 248);
	var pix = imgd.data;
   for (var i = 0, n = pix.length; i <n; i += 4) {
     pix[i] = colR; pix[i+1] = colV; pix[i+2] = colB;
   }
	ctx.putImageData(imgd, 0, 0);

	$('[id^=Color_'+html5idgroup+'_]').css('border-color', '#f0f0f0');
	$('[id=Color_'+html5idgroup+'_'+html5idcolor+']').css('border-color', '#000000');
	if(html5idgroup == 0){
	}else{
		$("#Html5Groupname_"+html5idgroup+"").text(colname);						
		$("#group_"+html5idgroup+"").val(html5idcolor);
	}
}

function HTML5ColorFlipAround(){
	if($('#MyProductColorSwitcher').length > 0 && typeof(HTML5AttributeGroup) != 'undefined' && HTML5canFlip == true){	
		var invert = $('#buy_block [name=group_7]').val();
		if((HTML5isFlip == false && invert == 101) || (HTML5isFlip == true && invert == 100)){
			if(invert == 101)
				HTML5isFlip = true;
			else
				HTML5isFlip = false;
				
			for(k in HTML5AttributeGroup){
				var canvas = document.getElementById('canvas'+k);
				ctx = canvas.getContext('2d');
				var imgd = ctx.getImageData(0, 0, 330, 248);
				for (i=0; i<imgd.height; i++){
					for (j=0; j<imgd.width/2; j++){
						var index=(i*4)*imgd.width+(j*4);
						var mirrorIndex=((i+1)*4)*imgd.width-((j+1)*4);
						for (p=0; p<4; p++){
							var temp=imgd.data[index+p];
							imgd.data[index+p]=imgd.data[mirrorIndex+p];
							imgd.data[mirrorIndex+p]=temp;
						}
					}
				}
				ctx.putImageData(imgd,0,0,0,0, 330, 248);
			}
		}
	}
}