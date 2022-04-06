var checkx = false

function check(submit){
	var text = document.getElementById(submit.id).value;
	if (submit.id == "Username")
	{
		if ((text.length < 8) || (text.length > 30))
		{
			document.getElementById('checktext').className = "open";
				document.getElementById('checktext').innerHTML = 
			"Please retype the username! You must use username with 8-30 characters!";
			checkx = false;
			return false;
		}
		else
		{
			document.getElementById('checktext').className = "close";
			checkx = true;
			return true;
		}
	}
	else
	{
		if ((text.length < 8) || (text.length > 30))
		{
			document.getElementById('checkagain').className = "open";
				document.getElementById('checkagain').innerHTML = 
			"Please retype the username! You must use username with 8-30 characters!";
			checkx = false;
			return false;
		}
		else
		{
			document.getElementById('checkagain').className = "close";
			checkx = true;
			return true;
		}
	}
}

function checkequal(){
	if (checkx == true)
	{
		if (document.getElementById('Username').value == document.getElementById('Re-user').value)
		{
			document.getElementById('submittext').innerHTML = "";
			document.getElementById('submittext').className = "close";
			return true;
		}
		else
		{
			document.getElementById('submittext').className = "open";
			document.getElementById('submittext').innerHTML = 
			"Two usernames must be the same!"; 
		}
	}
	else
	{
		document.getElementById('submittext').className = "open";
		document.getElementById('submittext').innerHTML = 
		"Please recheck the above submit username that match the username form!"; 
	}
}
