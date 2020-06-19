// var email = $("#email").text;
// var passWord = $("#passWord").text;
// var technicalSupport = $("#technicalSupport").text;

// var internetContentProvider = $("#internetContentProvider").text;
$.ajax({
  url: " http://59.111.92.205:13002/api/innovation/footerInfo/list",
  type: "post",
  contentType: "application/x-www-form-urlencoded",
  data: JSON.stringify({
    id: "1",
  }),
  success: function (res) {
    console.log(res);
    $("#email").text(res.rows[0].email);
    $("#technicalSupport").text(res.rows[0].technicalSupport);
    $("#internetContentProvider").text(res.rows[0].internetContentProvider);
    $("#websiteId").text(res.rows[0].websiteId);
    // $("#technicalSupport").attr("src", res.rows[0].coverUrl);
    // console.log(res.rows[0].coverUrl);
  },
  error: function (err) {
    console.log(err);
  },
});
