// 我要报名
$("#btn1").click(function () {
  // 作品名称
  var worksTitle = $("#worksTitle").val();
  //作品方向
  var projectCategory = $("#projectCategory").val();
  // 所属行业
  var industry = $("#industry").val();
  //   	指导老师
  var instructor = $("#instructor").val();
  // 创新点
  var innovationPoint = $("#innovationPoint").val();
  //   推广应用价值
  var applicationWhere = $("#applicationWhere").val();
  //   作品简介
  var worksBrief = $("#worksBrief").val();
  //   参赛者
  var name1 = $("#name1").val();
  var job1 = $("#job1").val();
  var gender1 = $("#gender1").val();
  var age1 = $("#age1").val();
  var idNumber1 = $("#idNumber1").val();
  var phoneNumber1 = $("#phoneNumber1").val();
  var name2 = $("#name2").val();
  var job2 = $("#job2").val();
  var gender2 = $("#gender2").val();
  var age2 = $("#age2").val();
  var idNumber2 = $("#idNumber2").val();
  var phoneNumber2 = $("#phoneNumber2").val();
  var name3 = $("#name3").val();
  var job3 = $("#job3").val();
  var gender3 = $("#gender3").val();
  var age3 = $("#age3").val();
  var idNumber3 = $("#idNumber3").val();
  var phoneNumber3 = $("#phoneNumber3").val();
  $.ajax({
    url: " http://59.111.92.205:13002/api/innovation/project/add",
    type: "post",
    contentType: "application/x-www-form-urlencoded",
    data: {
      worksTitle: worksTitle,
      projectCategory: projectCategory,
      industry: industry,
      instructor: instructor,
      innovationPoint: innovationPoint,
      applicationWhere: applicationWhere,
      worksBrief: worksBrief,
    },
    data: JSON.stringify({
      name1: name1,
      job1: job1,
      gender1: gender1,
      age1: age1,
      idNumber1: idNumber1,
      phoneNumber1: phoneNumber1,
      name2: name2,
      job2: job2,
      gender1: gender1,
      age2: age2,
      idNumber2: idNumber2,
      phoneNumber2: phoneNumber2,
      name3: name3,
      job3: job3,
      gender3: gender3,
      age3: age3,
      idNumber2: idNumber3,
      phoneNumber3: phoneNumber3,
    }),
    success: function (res) {
      console.log(res);
      alert("提交成功");
    },
    error: function (err) {
      console.log(err);
    },
  });
});
if (localStorage.isLogin) {
  $("#li1").hide();
  $("#li2").show();
}
