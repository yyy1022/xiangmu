// 大学生注册

$("#btn1").click(function () {
  console.log(1111);
  //   用户名
  var loginName = $("#loginName").val();
  localStorage.setItem("loginName", loginName);
  //   密码
  var password = $("#password").val();
  //   在次输入密码
  var password1 = $("#password1").val();
  //   真实姓名
  var userName = $("#userName").val();
  localStorage.setItem("userName", userName);
  //   身份证号码
  var idNumber = $("#idNumber").val();
  localStorage.setItem("idNumber", idNumber);
  //   学校
  var school = $("#school").val();
  localStorage.setItem("school", school);
  //   邮箱
  var email = $("#email").val();
  localStorage.setItem("email", email);
  // 年级
  var grade = $("#grade").val();
  localStorage.setItem("grade", grade);
  //   手机号
  var phonenumber = $("#phonenumber").val();
  // 验证码
  var code = $("#code").val();

  $.ajax({
    url: " http://59.111.92.205:13002/api/register",
    type: "post",
    contentType: "application/json",
    data: JSON.stringify({
      loginName: loginName,
      password1: password1,
      idNumber: idNumber,
      school: school,
      password: password,
      userName: userName,
      email: email,
      grade: grade,
      phonenumber: phonenumber,
      code: code,
    }),
    success: function (res) {
      console.log(res);
      alert("注册成功");
    },
    error: function (err) {},
  });
});
//获取验证码
console.log($("#btn2"));

// 倒计时

$("#btn2").click(function () {
  var wait = 60;
  // function
  var time = setInterval(function () {
    wait--;
    $("#btn2").attr("disabled", true);
    $("#btn2").val(wait + "获取验证码");

    if (wait == 0) {
      clearInterval(time);
      $("#btn2").attr("disabled", false);
      $("#btn2").val("获取验证码");
    }
  }, 1000);
});
