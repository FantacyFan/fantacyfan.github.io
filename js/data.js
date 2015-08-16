var app = (function(){
	var flight_preload = function(){
		$(".wrapper").load("./flight/flight.html", function(){
		});
	};

	var load_flight = function(){
		$(".wrapper").html("");
		$("#flight").on("click", function() {
			$(".wrapper").load("./flight/flight.html", function(){
			});
		});		
	};

	var load_death = function(){
		$(".wrapper").html("");
		$("#death").on("click", function() {
			$(".wrapper").load("./death/death.html", function(){
			});
		});		
	};

	var load_emp = function(){
		$(".wrapper").html("");
		$("#employment").on("click", function() {
			$(".wrapper").load("./employment/employment.html", function(){
			});
		});		
	};


	return {
		flight_preload : flight_preload,
		load_flight : load_flight,
		load_death : load_death,
		load_emp : load_emp
	}
}());

$(document).ready(function(){
	app.flight_preload();
	app.load_flight();
	app.load_death();
	app.load_emp();
});