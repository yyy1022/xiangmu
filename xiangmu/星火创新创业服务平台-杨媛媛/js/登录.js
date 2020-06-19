$(".one").click(function () {
  console.log(11111);
  $(this).addClass("select").siblings().removeClass("select");
  $(".boxBox>div").eq($(this).index()).show().siblings().hide();
});
console.log(localStorage.isLogin);
// 登录
// 密码登录
$("#btn").click(function () {
  console.log(11111);
  var userName = $("#userName").val();
  var passWord = $("#passWord").val();
  // console.log(userName);
  $.ajax({
    url: "http://59.111.92.205:13002/api//login",
    data: {
      username: userName,
      password: passWord,
      rememberMe: true,
    },
    type: "POST",
    success: function (res) {
      console.log(res);
      // localStorage.setItem("isLogin", true);

      if (res.code == 0) {
        alert("登陆成功");
        window.open("我要报名.html", "_blank");
        var value1 = JSON.stringify(res.userInf);
        localStorage.setItem("isLogin", true);
        localStorage.setItem("name", value1);
        console.log(localStorage.name);

        // console.log();
        localStorage.setItem("userInf", JSON.stringify(res.userInf));
      } else {
        alert("登陆失败");
        window.open("登录.html");
        localStorage.setItem("islogin", false);
      }
    },

    error: function (error) {
      console.log(error);
    },
  });
});
// 手机号
$("#btn2").click(function () {
  console.log(11111);
  var userName = $("#userName1").val();
  var passWord = $("#passWord1").val();
  console.log(userName);
  $.ajax({
    url: "http://59.111.92.205:13002/api//login",
    data: {
      username: userName,
      password: passWord,
      rememberMe: true,
    },
    type: "POST",
    success: function (res) {
      console.log(res);
      if (res.code == 0) {
        alert("登陆成功");
        window.open("../html/我要报名.html", "_blank");
        var value1 = JSON.stringify(res.userInf);
        localStorage.setItem("isLogin", true);
        localStorage.setItem("name", value1);
        console.log(localStorage.name);
      } else {
        alert("登陆失败");
        window.open("../html/登录.html");
      }
    },

    error: function (error) {
      console.log(error);
    },
  });
});
// 验证码
$("#btn1").click(function () {
  var wait = 60;
  // function
  var time = setInterval(function () {
    wait--;
    $("#btn1").attr("disabled", true);
    $("#btn1").val(wait + "获取验证码");

    if (wait == 0) {
      clearInterval(time);
      $("#btn1").attr("disabled", false);
      $("#btn1").val("获取验证码");
    }
  }, 1000);
});

// 登录与个人中心切换
if (localStorage.isLogin) {
  $("#li1").hide();
  $("#li2").show();
}

// $("#btn1").click(function () {
//   //   手机号

//   var number = $("#userName1").val();
//   $.ajax({
//     url: "http://59.111.92.205:13002/api/sendCode?mobile=" + number,
//     type: "get",
//     contentType: "application/json",

//     success: function (res) {
//       console.log(res);
//     },
//     error: function (err) {},
//   });
// });

// $("#btn").click(function () {
//   // 检查不为空
//   var userName = $("#userName1").val();
//   var passWord = $("#passWord1").val();
//   // if()

//   if (userName == "" || passWord == "") {
//     console.log("请正确填写账号密码");
//   } else {
//     // 模拟登录状态
//     console.log(localStorage.isLogin);
//     // localStorage.removeItem("isLogin");
//     localStorage.setItem("isLogin", true);
//     console.log(localStorage.isLogin);
//     // 到报名页面点击时判断
//     if (localStorage.isLogin) {
//       // 跳到报名详情页面
//       // console.log("跳到报名详情页面");
//       window.location.href = "../html/我要报名.html"; //相对路径
//       // window.open(
//       //   "file:///C:/Users/lenovo/Desktop/%E6%98%9F%E7%81%AB%E5%88%9B%E6%96%B0%E5%88%9B%E4%B8%9A%E6%9C%8D%E5%8A%A1%E5%B9%B3%E5%8F%B0-%E6%9D%A8%E5%AA%9B%E5%AA%9B/html/%E6%88%91%E8%A6%81%E6%8A%A5%E5%90%8D.html",
//       //   "_blank"
//       // );
//       // window.open("http://www.baidu.com", "_blank");
//     } else {
//       // 跳到登录页面
//       console.log("跳到登录页面");
//       window.location.href = "../href/登录.html";
//     }
//   }
// });
// // 判断密码是否正确
// // 倒计时

// console.log(btn);
// // 登录
// $("#btn").click(function () {
//   //   // 检查不为空
//   //   console.log(2222);
//   var userName = $("#userName").val();
//   var passWord = $("#passWord").val();
//   console.log(userName);
//   console.log(passWord);
//   if (userName == "" || passWord == "") {
//     console.log("请正确填写账号密码");
//     var loginUrl = "http://59.111.92.205:13002/api/login";

//     // 登录判断

//     //           } else {

//     // 模拟登录状态
//     console.log(localStorage.isLogin);
//     // localStorage.removeItem("isLogin");
//     localStorage.setItem("isLogin", true);
//     console.log(localStorage.isLogin);
//     // 到报名页面点击时判断
//     if (localStorage.isLogin) {
//       // 跳到报名详情页面

//       window.open("../html/我要报名.html", "_blank");
//     } else {
//       // 跳到登录页面
//       // $("#li1").show();
//       // $("#li2").hide();
//       window.location.href = "../html/登录.html";
//     }
//   }
// });
