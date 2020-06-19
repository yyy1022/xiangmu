// 报名弹框
console.log(localStorage.isLogin);
$("#p2").click(function () {
  // localStorage.setItem("isLogin", true);
  //   if (localStorage.isLogin == "true") {
  //     localStorage.isLogin;
  //     window.open("../html/我要报名.html");
  //   } else {
  alert("未登录或登录超时，请重新登录！");
  window.open("../html/登录.html");
  //   }
});

// 个人中心与登录切换
if (localStorage.isLogin) {
  $("#li1").hide();
  $("#li2").show();
}
