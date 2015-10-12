var $out=false;
var $out2=false;
$(document).ready(function(){
	
	$(".about-info-top").hide();
    $(".smile-container").click(function(){
		if($out==false){
			if($(this).hasClass("back")){
				$(this).removeClass("back");
			}
			$(this).addClass("move")
			.delay(1000)
			.queue(function(next){
				$("#btn").css("backgroundImage","none").animate({"padding":"170px"},1000,"linear");
				$(".about-word").hide(1500,function(){
						$(".about-info-top").slideDown(2500);
					});
				
				next();
			});
			$out=true;
		}
		else{
			back();
			
		}
    });
	$(".about-info-top").click(function(){
		back();
	});
	$(".about-info-top").hover(function(){
		$("#btn").css("borderColor","#FFFF00");
	},function(){
		$("#btn").css("borderColor","#ed3bed");
	});
	
	
}); 

function back(){
	$(".about-info-top").slideUp('3000',function(){
				$("#btn").animate({"padding":"30px"},1000,"linear")
				.delay(500)
				.queue(function(next){
					$(".about-word").show(1500);
					$(".smile-container").addClass("back")
					$(".smile-container").removeClass("move");
					
					next();
					$("#btn").css("backgroundImage","url(img/earth.jpg)");
				});
				$out=false;
			});
}
function move_btn2(){
	$(".photo-container").click(function(){
		if($out2==false){
			if($(this).hasClass("back")){
				$(this).removeClass("back");
			}
			$(this).addClass("move-btn2")
			.delay(1000)
			.queue(function(next){
				$("#btn2").css("backgroundImage","none").animate({"padding":"100px"},1000,"linear",function(){
					
						
					$(".photo-word").hide(1500);
				});
				
				
				next();
			});
			$out2=true;
		}
		else{
			//back();
			
		}
    });
}