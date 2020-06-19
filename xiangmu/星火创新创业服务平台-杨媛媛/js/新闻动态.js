console.log(5555);
// $("#s-nav>li"){

// // }
// 通知公告，创新公告，荣誉榜
$.ajax({
  url: " http://59.111.92.205:13002/api/innovation/notice/list",
  type: "post",
  contentType: "application/json",
  data: JSON.stringify({
    type: "1",
  }),
  success: function (res) {
    console.log(res);
    $("#content1").html(res.rows[0].describe);
    $("#time1").html(res.rows[0].createTime);
    $("#title1").html(res.rows[0].title);
    $("#img1").attr("src", res.rows[0].coverUrl);
    // localStorage.setItem("isLogin1", res.rows[0].id);
    $($(".p1")[0]).attr("name", res.rows[0].id);
    $(".p1").click(function () {
      var idValue = $(this).attr("name");
      console.log(11111);

      console.log(idValue);
      localStorage.setItem("id", idValue);
      location.href = "../html/阅读全文.html";
    });
  },
  error: function (err) {
    console.log(err);
  },
});
// 创新公告，
$.ajax({
  url: " http://59.111.92.205:13002/api/innovation/notice/list",
  type: "post",
  contentType: "application/json",
  data: JSON.stringify({
    type: "2",
  }),
  success: function (res) {
    console.log(res);
    // $("#title2").html(res.rows[0].title);
    $("#content2").html(res.rows[0].describe);
    $("#time2").html(res.rows[0].createTime);
    $("#title2").html(res.rows[0].title);
    $("#img2").attr("src", res.rows[0].coverUrl);
    console.log(res.rows[0].coverUrl);
    // localStorage.setItem("isLogin1", res.rows[0].id);
    $($(".p1")[1]).attr("name", res.rows[0].id);
  },
  error: function (err) {
    console.log(err);
  },
});
// ，荣誉榜
$.ajax({
  url: " http://59.111.92.205:13002/api/innovation/notice/list",
  type: "post",
  contentType: "application/json",
  data: JSON.stringify({
    type: "3",
  }),
  success: function (res) {
    console.log(res);
    // $("#title2").html(res.rows[0].title);
    $("#content3").html(res.rows[0].describe);
    $("#time3").html(res.rows[0].createTime);
    $("#title3").html(res.rows[0].title);
    $("#img3").attr("src", res.rows[0].coverUrl);
    console.log(res.rows[0].coverUrl);
    // localStorage.setItem("isLogin1", res.rows[0].id);
    $($(".p1")[2]).attr("name", res.rows[0].id);
  },
  error: function (err) {
    console.log(err);
  },
});
