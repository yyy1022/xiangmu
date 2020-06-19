if (localStorage.isLogin) {
  $("#li1").hide();
  $("#li2").show();
}
//  阅读全文
$.ajax({
  url: " http://59.111.92.205:13002/api/innovation/notice/detail",
  type: "post",
  contentType: "application/json",
  data: JSON.stringify({
    id: localStorage.id,
  }),
  success: function (res) {
    console.log(res);
    $("#title").html(res.data.title);
    $("#content").html(res.data.content);
    $("#time").html(res.data.time);
  },
  error: function (err) {
    console.log(err);
  },
});
