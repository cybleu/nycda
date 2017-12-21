$("#btn").click(function() {
	var total= 0;
	$("#items").html ("");

if($("#wholeWheat").is(":checked")){
	total = total + 3.99;
	$("#items").append("Whole Wheat bread - $3.99 <br>");
	}
	$("#totalCost").html("The Total Cost is $"+ total);

	if($("#whiteBread").is(":checked")){
	total = total + 3.59;
	$("#items").append("White bread - $3.59 <br>");
	}
	$("#totalCost").html("The Total Cost is $"+ total);

	if($("#potatoBread").is(":checked")){
	total = total + 2.99;
	$("#items").append("Potato bread - $2.99 <br>");
	}
	$("#totalCost").html("The Total Cost is $"+ total);

	if($("#eggs").is(":checked")){
	total = total + 2.99;
	$("#items").append("Eggs - $2.99 <br>");
	}
	$("#totalCost").html("The Total Cost is $"+ total);

	if($("#Milk").is(":checked")){
	total = total + 3.25;
	$("#items").append("Milk - $2.99 <br>");
	}
	$("#totalCost").html("The Total Cost is $"+ total);

	if($("#Water").is(":checked")){
	total = total + 1.99;
	$("#items").append("Water - $1.99 <br>");
	}
	$("#totalCost").html("The Total Cost is $"+ total);

	




})