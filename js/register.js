$('.sub_login').click(function() {

    if ($('#username').val() == "") {
        alert("请输入完整的用户名")
        return;
    }
    if ($('#password').val() == "") {
        alert("请输入完整的密码")
        return;
    }
    if ($('#phone').val() == "") {
        alert("请输入完整的手机号")
        return;
    }
    $.ajax({
        type: "get",
        url: "../success.json",
        dataType: "json",
        success: function(res) {
            if (res.code == 1) {
                alert("注册成功")
                location.href = "../login.html"
            } else {

            }
        }

    })



})