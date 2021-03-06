window.onload=function(){
var d = new Date();
var weekday = new Array(7);
weekday[0] = "Sunday";
weekday[1] = "Monday";
weekday[2] = "Tuesday";
weekday[3] = "Wednesday";
weekday[4] = "Thursday";
weekday[5] = "Friday";
weekday[6] = "Saturday";
var day = weekday[d.getDay()];
document.getElementById("day").innerHTML = day +"😇";;
document.getElementById("Date").innerHTML = d;


if( day == "Monday"){
	document.getElementById("Subject1").innerHTML = "Activity(303)";
	
	document.getElementById("Subject2").innerHTML = "Maths-2 (303)";

    document.getElementById("Subject3").innerHTML = "2A21:FOP (374) & 2A22:BE";

    document.getElementById("Subject4").innerHTML = "2A21:FOP (374) & 2A22:BE";
	
	document.getElementById("Subject5").innerHTML = "Physics (303)";

    document.getElementById("Subject6").innerHTML = "BE (303)"; 

}

else if( day == "Tuesday"){
	document.getElementById("Subject1").innerHTML = "2A21:EG (334) & 2A22:EG (336)";
	
	document.getElementById("Subject2").innerHTML = "2A21:EG (334) & 2A22:EG (336)";

    document.getElementById("Subject3").innerHTML = "Maths-2 (303)";

    document.getElementById("Subject4").innerHTML = "Activity (303)";
	
	document.getElementById("Subject5").innerHTML = "FOP (303)";

    document.getElementById("Subject6").innerHTML = "Physics (303)"; 

}


else if( day == "Wednesday"){
  	document.getElementById("Subject1").innerHTML = "Physics (303)";
	
	document.getElementById("Subject2").innerHTML = "EG (303)";

    document.getElementById("Subject3").innerHTML = "2A21:CS (303) & 2A22 :Maths-2 (304)";

    document.getElementById("Subject4").innerHTML = "2A21:CS (303) & 2A22 :Maths-2 (304)";
	
	document.getElementById("Subject5").innerHTML = "2A21:Physics (140) & 2A22 : FOP (374)";

    document.getElementById("Subject6").innerHTML = "2A21:Physics (140) & 2A22 : FOP (374)"; 
}
 
else if( day == "Thursday"){
	document.getElementById("Subject1").innerHTML = "2A21:EG (334) & 2A22:CS (303)";
	
	document.getElementById("Subject2").innerHTML = "2A21:EG (334) & 2A22:CS (303)";

    document.getElementById("Subject3").innerHTML = "2A21:BE (303) & 2A22:EG (334)";

    document.getElementById("Subject4").innerHTML = "2A21:BE (303) & 2A22:EG (334)";
	
	document.getElementById("Subject5").innerHTML = "Library";

    document.getElementById("Subject6").innerHTML = "Library"; 


}

else if( day == "Friday"){
	document.getElementById("Subject1").innerHTML = "Physics (303)";
	
	document.getElementById("Subject2").innerHTML = "Maths-2 (303)";

    document.getElementById("Subject3").innerHTML = "BE (303)";

    document.getElementById("Subject4").innerHTML = "EG (303)";
	
	document.getElementById("Subject5").innerHTML = "Activity (303)";

    document.getElementById("Subject6").innerHTML = "Activity (303)"; 

}

else if( day == "Saturday"){
	document.getElementById("Subject1").innerHTML = "2A21:Maths-2 (303) & 2A22:FOP (374)";
	
	document.getElementById("Subject2").innerHTML = "2A21:Maths-2 (303) & 2A22:FOP (374)";

    document.getElementById("Subject3").innerHTML = "BE (303)";

    document.getElementById("Subject4").innerHTML = "FOP (303)";
	
	document.getElementById("Subject5").innerHTML = "2A21:FOP (374) & 2A22:Physics (140)";

    document.getElementById("Subject6").innerHTML = "2A21:FOP (374) & 2A22:Physics (140)"; 
	
}

else if( day == "Sunday"){
	document.getElementById("Subject1").innerHTML = "Hoilday 😛";

	document.getElementById("Subject2").innerHTML = "Hoilday 😛";


	document.getElementById("Subject3").innerHTML = "Hoilday 😛";

    document.getElementById("Subject4").innerHTML = "Hoilday 😛";

	document.getElementById("Subject5").innerHTML = "Hoilday 😛";
	
	document.getElementById("Subject6").innerHTML = "Hoilday 😛";
	
}

///Extra Lecture
var extralec = "xxxx";
var extralectime = "xxxx";

document.getElementById("extralec").innerHTML = extralectime + extralec ;

}
