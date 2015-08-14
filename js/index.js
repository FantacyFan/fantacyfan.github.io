var app = (function(){
	var homepage_preload = function(){
		$(".wrapper").load("home.html", function(){
		});
	};

	var load_homepage = function(){
		$(".wrapper").html("");
		$("#homepage").on("click", function() {
			$(".wrapper").load("home.html", function(){
			});
		});		
	};

	var load_about = function(){
		$(".wrapper").html("");
		$("#aboutpage").on("click", function() {
			$(".wrapper").load("about.html", function(){
			});
		});	
	};

	var load_skills = function(){
		$(".wrapper").html("");
		$("#my").ajaxStart(function(){
             $(this).show();
             console.log("ajax1");
         }).ajaxStop(function(){
           $(this).hide();
           console.log("ajax2");
         });
		$("#skillpage").on("click", function() {
			$(".wrapper").load("skills.html", function(){
			});
		});	

	};






	var load_projects = function(){
		$(".wrapper").html("");
		$("#projectpage").on("click", function() {
			$(".wrapper").load("projects.html", function(){
			});
		});	
		$("#my").ajaxStart(function(){
             $(this).show();
         }).ajaxStop(function(){
           $(this).hide();
         });
	};


	return {
		homepage_preload : homepage_preload,
		load_homepage : load_homepage,
		load_about : load_about,
		load_skills : load_skills,
		load_projects : load_projects
	}
}());

$(document).ready(function(){
	app.homepage_preload();
	app.load_homepage();
	app.load_about();
	app.load_skills();
	app.load_projects();
});