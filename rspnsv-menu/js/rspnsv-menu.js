var ancho_btn_responsive = 52;
var speed = 400;



$(document).ready(function(){

	var n_divs = $(".menu-horizontal").length;


	var menu_horizontal_fn = function(){
		var n_divs = $(".menu-horizontal").length;
		var tamanos_array = new Array();

		for(var i = 0; i < n_divs; i++){
			var each_width = $(".menu-horizontal").eq(i).width();
			tamanos_array.push(each_width);
		}

		if (tamanos_array.length == 3) {
			var tamano_maximo = Math.max.apply(Math, tamanos_array);

			console.log(tamano_maximo);

			$(".menu-horizontal").css({
				"width": tamano_maximo + "px"
			});

			$("#rspnsv-menu").find(".menu-horizontal").parent().css({
				"width": tamano_maximo * 3 + "px"
			});

		}
		console.log(tamanos_array);
	};

	menu_horizontal_fn();

	$("#rspnsv-menu > ul > li > ul").css({
		"display":"none",
		"margin-top":"0"
	});



	$("#rspnsv-menu > ul > li").hover(function() {
		$(this).find("ul").slideDown();
	}, function() {
		$(this).find("ul").stop();
		$(this).find("ul").slideUp();
	});


	var activate_button = 0;

	$(".btn_rspnsv").click(function() {
		if(activate_button == 0){
			$("#rspnsv-menu").animate({
				width: "100%"
			}, speed, function() {
				$("#rspnsv-menu > ul").slideDown(speed);
			});
			activate_button ++;
			console.log("activado" + activate_button);
		}else{
			$("#rspnsv-menu > ul").slideUp(speed, function(){
				$("#rspnsv-menu").animate({
					width: ancho_btn_responsive
				}, speed);
			});
			activate_button --;
			console.log("desactivado" + activate_button);
		}
	});


	// var ancho_menu_horizontal = $(".menu-horizontal").width() * 3;
	//
	// $("#rspnsv-menu").find(".menu-horizontal").parent().css({
	// 	"width": ancho_menu_horizontal + "px"
	// });







});
