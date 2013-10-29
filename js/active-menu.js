$(document).ready(function(){
	//Get current location
	var cur = location.hash;
	//alert(cur);
	
	//At Start
	if( cur == "" || cur == null || cur == "#s1"){
		$("#l1").addClass("active");	
	}
	if(cur == "#s2"){
		$("#l2").addClass("active");
	}
	if(cur == "#s3"){
		$("#l3").addClass("active");
	}	
	if(cur == "#s4"){
		$("#l4").addClass("active");
	}
	
	//Menu Click
	$("#l1").click(function(){
		$("#menu nav a li").removeClass("active");
		$("#l1").addClass("active");
	});
	$("#l2").click(function(){
		$("#menu nav a li").removeClass("active");
		$("#l2").addClass("active");
	});	
	$("#l3").click(function(){
		$("#menu nav a li").removeClass("active");
		$("#l3").addClass("active");
	});	
	$("#l4").click(function(){
		$("#menu nav a li").removeClass("active");
		$("#l4").addClass("active");
	});			 
});