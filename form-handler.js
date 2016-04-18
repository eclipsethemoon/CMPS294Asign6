var resForm = '<tr><td><label for = "name">Name:</label></td> ' +
							'<td><input type = "text" name = "name" id = "name"></td></tr> </br>' +
							'<tr><td><label for="email">Email:</label>'+
							'<td><input type = "text" name = "email" id = "email"</td></tr>'+
							'<tr><td colspan="2"><input type = "submit" value="Submit"></input></td></tr>';
var busForm = '<tr><td><label for = "busname">Business name:</label></td> ' +
							'<td><input type = "text" name = "busname" id = "busname"></td></tr></br>' +
							'<tr><td><label for="url">Business Website URL:</label></td>'+
							'<td><input type = "text" name = "url" id = "url"</td></tr>'+
							'<tr><td><label for = "taxid">Business Tax ID: </label></td>' +
							'<td><input type = "text" name = "taxid" id = "taxid"</td></tr>' +
							'<tr><td colspan="2" ><input type = "submit" value="Submit"></input></tr></td>';
var isChecked = "";
function bus() {
	document.getElementById("Addto").innerHTML = busForm;
	isChecked = "bus";
}
function res(){
	document.getElementById("Addto").innerHTML = resForm;
	isChecked = "res";

}
function checkselect(){
	if(isChecked == "bus")
	{
		return true;
	}
	else if (isChecked == "res") {
		return false;
	}

}
function validateForm() {
	var returnvalue = true;
	var errormessage = "";
	var name = document.getElementById('name').value;
	//var company = document.getElementById('company').value;
	var email = document.getElementById('email').value;
	//var phoneNum = document.getElementById('phoneNumber').value;
	//var website = document.getElementById('website').value;
	if(name == ""){
		console.log("name function");
		errormessage += "Enter your Name \n";
		document.getElementById('name').style.borderColor = "red";
		returnvalue = false;
	}
	else if(email == ""){
		console.log("email");
		errormessage += "Enter your email \n";
		document.getElementById('email').style.borderColor = "red";
		returnvalue = false;
	}
	/*if(website == ""){
		errormessage += "Enter your website \n";
		document.getElementById('website').style.borderColor = "red";
		returnvalue = false;
	}*/
	if (errormessage != "") {
		console.log("error message");
		alert(errormessage);
		return false;

	}

	if(!validateEmail(email)){
		console.log("email regex checker");
		errormessage +="Email address is not valid \n";
		document.getElementById('email').style.borderColor = "red";
		returnvalue = false;
	}

	/*if(!validateWebsite(website)){
		errormessage += "Website is not valid \n";
		document.getElementById('website').style.borderColor = "red";
		returnvalue = false;
	}*/
	if (errormessage != "") {
		console.log("final error check");
		alert(errormessage);
		return false;
	}
	var url = "http://www.southeastern.edu/";
	window.open(url,"","height=400,width=400,scrollbars=no,menubar=no,status=no");
	return returnvalue;
}
function validateEmail(inputvalue){
	var emailRegExp = /[\w\.\S]+@\w+\.\S+/igm;
	return emailRegExp.test(inputvalue);
}
function validatePhoneNumber(inputvalue) {
	var phoneRegExp =/\(?(\d{3})\)?[\s-]?\d{3}[\s-]?\d{4}/igm;
	return phoneRegExp.test(inputvalue);
}
function validateWebsite(inputvalue){
	var websiteRegExp = /www\.(\S+).(com|edu|org|net)/igm;
	return websiteRegExp.test(inputvalue);
}
