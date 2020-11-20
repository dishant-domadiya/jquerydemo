function validateForm() {
  var names = document.forms["myForm"]["name"].value;
  var name_re = /^[A-Za-z- ]+$/;
  if (names.match(name_re) == null) 
  {
    alert("Name must be right");
    return false;
  }

  var emails = document.forms["myForm"]["email"].value;
  var email_re = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
  if (emails.match(email_re) == null) 
  {
    alert("Email must be in right form");
    return false;
  }

  var numbers = document.forms["myForm"]["number"].value;
  var numbers_re = /^\+[91]{2}-?[0-9]{10}$/;
  if (numbers.match(numbers_re) == null) 
  {
    alert("Phone no must be in right form");
    return false;
  }

  var table = document.getElementById("entryTable");
  var row = table.insertRow(-1);
  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);
  var cell3 = row.insertCell(2);
  var cell4 = row.insertCell(3);

  cell1.innerHTML = names;
  cell2.innerHTML = emails;
  cell3.innerHTML = numbers;
  cell4.innerHTML = document.forms["myForm"]["gender"].value;
  document.getElementById("forms").reset();
}

