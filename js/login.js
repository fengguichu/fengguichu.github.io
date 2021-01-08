$('.sub_login').click(function() {

    if ($('#username').val() == "") {
        alert("请输入完整的用户名和密码")
        return;
    }
    if ($('#password').val() == "") {
        alert("请输入完整的用户名和密码")
        return;
    }
    $.ajax({
        type: "get",
        url: "../success.json",
        dataType: "json",
        success: function(res) {
            if (res.code == 1) {
                alert("登录成功")
                location.href = "../shopcart.html"
            } else {

            }
        }

    })



})