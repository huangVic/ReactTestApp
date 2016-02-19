

$(document).ready(function () {
    console.log(" [auth] document ready!");
	
    $("form").submit(function (e) {
		e.preventDefault();
		//console.log("submit ");
		var username = $("#inputUserName").val().trim();
		var password = $("#inputPassword").val().trim();
		//console.log("password: " + password)
		password = btoa(password)
		//console.log("password encode: " + password)

		if (username != "" && password != "") {
			var params = {
				username: username,
				password: password
			}
			$.post("/Auth/login", params, function (result) {
				//console.log(" >>> auth/login result: ")
				//console.log(result)
				if (result.is_login == false) {
					alert("登入失敗!!")
					$("form")[0].reset();
					return;
				}
                window.location.href = "/";
			})
		}
	})
    
    $(".login-panel-backHome").on("click", function (e) {
        e.preventDefault();
        window.location.href = "/";
    })
});