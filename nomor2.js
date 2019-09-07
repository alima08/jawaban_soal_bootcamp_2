<script type="text/javascript" charset="utf-8">
function validasi_username(is_username_valid) {
	var Regex1 = /^([a-z]{5,9})$/i;
	return Regex1.test(is_username_valid);
}

function validasi_password(is_password_valid){
	var Regex2 = /^([a-z]{6,)+([\.A-Z0-9]{1,)$/;
	return Regex2.test(is_password_valid);
}

if(validasi_username("cod3r")){
	alert("username valid");
}else{
	alert ("username salah");
}

if(validasi_username("siska")){
	alert("username valid");
}else{
	alert ("username salah");
}

if(validasi_password("p4s$gW")){
	alert("password valid");
}else{
	alert ("password salah");
}

if(validasi_password("codeYourFuture!123")){
	alert("password valid");
}else{
	alert ("password salah");
}


</script>
