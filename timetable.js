window.onload=function(){
///Lecture Links
	let EmeLink = "<a href='https://meet.google.com/lookup/dhngb2hxlr'>Link</a>";
	let BeeLink = "<a href='https://meet.google.com/lookup/fplxqs3u5q'>Link</a>";
	let CsLink = "<a href='https://meet.google.com/rbd-nsqw-siq'>Link</a>";
	let WsLink = "<a href='https://meet.google.com/lookup/dpeoxx2eru'>Link</a>";
	let IctLink = "<a href='https://meet.google.com/sne-axfr-ubj'>Link</a>";
	let MathLink= "<a href='https://meet.google.com/lookup/fqte77ij25'>Link</a>";
	let ActLink = "<a href='https://meet.google.com/lookup/dhngb2hxlr'>Link</a>";
	let EsLink = "<a href='https://meet.google.com/lookup/betya6vavr'>Link</a>";
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
	document.getElementById("Subject1").innerHTML = "BEE";
	document.getElementById("Link1").innerHTML = BeeLink;

	document.getElementById("Subject3").innerHTML = "Maths";
	document.getElementById("Link3").innerHTML = MathLink;

    document.getElementById("Subject4").innerHTML = "ES";
	document.getElementById("Link4").innerHTML = EsLink;
}

else if( day == "Tuesday"){
document.getElementById("Subject1").innerHTML = "Maths";
	document.getElementById("Link1").innerHTML = MathLink;

	document.getElementById("Subject2").innerHTML = "BEE(SP)";
	document.getElementById("Link2").innerHTML = BeeLink;

	document.getElementById("Subject3").innerHTML = "EME";
	document.getElementById("Link3").innerHTML = EmeLink;

}


else if( day == "Wednesday"){
    document.getElementById("Subject1").innerHTML = "ES";
	document.getElementById("Link1").innerHTML = EsLink;

	document.getElementById("Subject2").innerHTML = "Maths";
	document.getElementById("Link2").innerHTML = MathLink;

	document.getElementById("Subject3").innerHTML = "BEE";
	document.getElementById("Link3").innerHTML = BeeLink;
}
 
else if( day == "Thursday"){
	document.getElementById("Subject1").innerHTML = "1A3-1:EME <br> 1A3-2:BEE";
	document.getElementById("Link1").innerHTML = "1A3-1:" + EmeLink + "<br>" +"1A3-2:" + BeeLink;

	
	document.getElementById("Subject3").innerHTML = "ICT";
	document.getElementById("Link3").innerHTML = IctLink;

    document.getElementById("Subject4").innerHTML = "EME";
	document.getElementById("Link4").innerHTML = EmeLink;

}

else if( day == "Friday"){
	document.getElementById("Subject1").innerHTML = "1A3-1:WS <br> 1A3-2:EME";
	document.getElementById("Link1").innerHTML = "1A3-1:" + WsLink + "<br>" +"1A3-2:" + EmeLink;

	
	document.getElementById("Subject3").innerHTML = "ICT";
	document.getElementById("Link3").innerHTML = IctLink;

    document.getElementById("Subject4").innerHTML = "BEE";
	document.getElementById("Link4").innerHTML = BeeLink;

	document.getElementById("Subject5").innerHTML = "1A3-1:Maths <br> 1A3-2:CS";
	document.getElementById("Link5").innerHTML ="1A3-1:" + MathLink + "<br>" +"1A3-2:" + CsLink;
}

else if( day == "Saturday"){
	document.getElementById("Subject1").innerHTML = "1A3-1:CS <br> 1A3-2:Maths";
	document.getElementById("Link1").innerHTML = "1A3-1:" + CsLink + "<br>" +"1A3-2:" + MathLink;

	document.getElementById("Subject2").innerHTML = "1A3-1:CS <br> 1A3-2:Maths"
	document.getElementById("Link2").innerHTML = "1A3-1:" + CsLink + "<br>" +"1A3-2:" + MathLink;

	document.getElementById("Subject3").innerHTML = "ICT";
	document.getElementById("Link3").innerHTML = IctLink;

    document.getElementById("Subject4").innerHTML = "EME";
	document.getElementById("Link4").innerHTML = EmeLink;

	document.getElementById("Subject5").innerHTML = "1A3-1:BEE <br> 1A3-2:WS";
	document.getElementById("Link5").innerHTML = "1A3-1:" + BeeLink + "<br>" +"1A3-2:" + WsLink;
}

else if( day == "Sunday"){
	document.getElementById("Subject1").innerHTML = "Hoilday 😛";
	document.getElementById("Link1").innerHTML = "Hoilday 😛";

	document.getElementById("Subject2").innerHTML = "Hoilday 😛";
	document.getElementById("Link2").innerHTML = "Hoilday 😛";

	document.getElementById("Subject3").innerHTML = "Hoilday 😛";
	document.getElementById("Link3").innerHTML = "Hoilday 😛";

    document.getElementById("Subject4").innerHTML = "Hoilday 😛";
	document.getElementById("Link4").innerHTML = "Hoilday 😛";

	document.getElementById("Subject5").innerHTML = "Hoilday 😛";
	document.getElementById("Link5").innerHTML = "Hoilday 😛";

	document.getElementById("Subject6").innerHTML = "Hoilday 😛";
	document.getElementById("Link6").innerHTML = "Hoilday 😛";

}

///Extra Lecture
var extralec = "xxxx";
var extralectime = "xxxx";
var extraleclink = "<a href='#'></a>";

document.getElementById("extralec").innerHTML = extralectime + extralec + extraleclink;

}
