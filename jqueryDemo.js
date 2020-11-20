$("#button1,#button2").click(function(){
    var nameValue = $('#name').val(); 
    var name_re = /^[A-Za-z- ]+$/;
    if (nameValue.match(name_re) == null) 
    {
	    alert("Name must be right");
    	return false;
	}

	var emailValue = $('#email').val(); 
    var email_re = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
    if (emailValue.match(email_re) == null) 
    {
    	alert("Email must be in right form");
    	return false;
	}

	var numberValue = $('#number').val(); 
    var numbers_re = /^\+[91]{2}-?[0-9]{10}$/;
    if (numberValue.match(numbers_re) == null) 
    {
    	alert("Phone no must be in right form");
    	return false;
	}
	var n =  $('#entryTable').find('tr').length;
	if($(this).prop("id")== "button2"){
		n = currentRow.prop("id");
		console.log(n);
		var markup = "<tr id=" + n + "><td>" + n + "</td><td>" + nameValue + "</td><td>" + emailValue + "</td><td>"+ 
				 numberValue + "</td><td>" + $(':checked').val() + "</td><td><button class='edit'>Edit</button></td></tr>";
		var element = $('tr[id='+n+']');
		$(markup).insertAfter(element);
		element.remove();
	    $("#button1").show();
	    $("#button2").hide();
	}else{
		var markup = "<tr id=" + n + "><td>" + n + "</td><td>" + nameValue + "</td><td>" + emailValue + "</td><td>"+ 
				 numberValue + "</td><td>" + $(':checked').val() + "</td><td><button class='edit'>Edit</button></td></tr>";
	    $("#entryTable").append(markup);
	}
	$("#forms")[0].reset();
});

$("#res").click(function(){
	$("#forms")[0].reset();
});

$("#entryTable").on("click", ".edit", function(e){
	window.currentRow=$(this).closest("tr");
	window.col2=currentRow.find("td:eq(1)").html();
	$("#name").val(col2);
	window.col3=currentRow.find("td:eq(2)").html();
	$("#email").val(col3);
	window.col4=currentRow.find("td:eq(3)").html();
	$("#number").val(col4);
	window.col5=currentRow.find("td:eq(4)").html();
	if (col5 == "Male") {
		$('#male').prop('checked', true);
	} else {
		$('#female').prop('checked', true);
	}
    $("#button1").hide();
    $("#button2").show();
});
