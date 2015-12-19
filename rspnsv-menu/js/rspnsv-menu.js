var ancho_btn_responsive = 52;
var speed = 400;

//VARIABLES PARA MENU HORIZONTAL
var menu_horizontal = $(".menu-horizontal");


$(document).ready(function(){

	/*var variable00 = 1;
	var variable01 = "mivariable_"+variable00;
	$(".box-title-menu").eq(0).addClass(variable01);

	var n_divs = $(".box-title-menu").eq(0).find("div").length;
	console.log(n_divs);
	*/

	for (var i = 0; i < menu_horizontal.length; i++) {
		menu_horizontal.eq(i).addClass("mh_"+i);

		var menu_i = $(".mh_"+i);

		console.log(menu_i.find("div").length);

		var tamanos_array = new Array();

		for (var i2 = 0; i2 < menu_i.find("div").length; i2++) {
			var each_width = menu_i.find("div").eq(i2).width();
			tamanos_array.push(each_width);
		}

		var border_right = menu_i.find("div").css('border-right-Width')[0];
		border_right = parseInt(border_right);


		var tamano_maximo = Math.max.apply(Math, tamanos_array);
		tamano_maximo = Math.round(tamano_maximo);
		tamano_maximo = parseInt(tamano_maximo);

		menu_i.find("div").css({
			"width": tamano_maximo + "px"
		});

		var width_final = (tamano_maximo + border_right) * menu_i.find("div").length;

		menu_i.css({
			"width":  width_final + "px"
		});
	}


	var menu_horizontal_fn = function(){
		var n_divs = $(".menu-horizontal").length;
		var tamanos_array = new Array();


		//CICLO PARA ASIGNARLE AL ARRAY (each_width) LOS ANCHOS DE CADA UNO DE LOS DIVS
		for(var i = 0; i < n_divs; i++){
			var each_width = $(".menu-horizontal").eq(i).width();
			tamanos_array.push(each_width);
		}

		var border_right = $(".menu-horizontal").css('border-right-Width')[0];
		border_right = parseInt(border_right);

		if (tamanos_array.length == 3) {


			var width_final = (tamano_maximo + border_right) * 3;

			console.log(tamano_maximo);

			$(".menu-horizontal").css({
				"width": tamano_maximo + "px"
			});

			$("#rspnsv-menu").find(".menu-horizontal").parent().css({
				"width":  width_final + "px"
			});

			console.log("tamano maximo " + tamano_maximo);
			console.log("borde " + border_right);
			console.log("width final " + width_final);
		}

	};

	//menu_horizontal_fn();

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

});
