console.log(1111);
// 免费课程切换
$(".lesson-right>ul>li").mouseover(function () {
  $(this).addClass("select1").siblings().removeClass("select1");
  $(".inner").eq($(this).index()).show().siblings().hide();
});

// 轮播图
$.ajax({
  url: "http://59.111.104.104:8086/weChat/applet/course/banner/list",
  type: "get",
  data: {
    number: "5",
  },
  success: function (res) {
    console.log(res);
    $(".item1").css({
      backgroundImage: "url(" + res.data[0].imgUrlPc + ")",
    });
    $(".item2").css({
      backgroundImage: "url(" + res.data[1].imgUrlPc + ")",
    });
    $(".item3").css({
      backgroundImage: "url(" + res.data[2].imgUrlPc + ")",
    });
    $(".item4").css({
      backgroundImage: "url(" + res.data[3].imgUrlPc + ")",
    });
    $(".item5").css({
      backgroundImage: "url(" + res.data[4].imgUrlPc + ")",
    });
  },
  error: function (err) {},
});
//底部
$.ajax({
  url: "http://59.111.104.104:8086/system/dict/data/list/open",
  type: "post",
  contentType: "application/x-www-form-urlencoded",
  data: {
    dictType: "blogroll",
    pageNum: "1",
    pageSize: "10",
    orderByColumn: "dictSort",
    isAsc: "asc",
  },
  success: function (res) {
    // console.log(res);
    $("#dictLabel1").text(res.rows[0].dictLabel);
    $("#dictLabel1").attr("href", res.rows[0].dictValue);
    $("#dictLabel2").text(res.rows[1].dictLabel);
    $("#dictLabel2").attr("href", res.rows[1].dictValue);
    $("#dictLabel3").text(res.rows[2].dictLabel);
    $("#dictLabel3").attr("href", res.rows[2].dictValue);
    $("#dictLabel4").text(res.rows[3].dictLabel);
    $("#dictLabel4").attr("href", res.rows[3].dictValue);
    $("#dictLabel5").text(res.rows[4].dictLabel);
    $("#dictLabel5").attr("href", res.rows[4].dictValue);
  },
  error: function (err) {},
});
//免费
$.ajax({
  url: "http://59.111.104.104:8086/weChat/applet/course/list/type",
  type: "post",
  contentType: "application/x-www-form-urlencoded",
  data: {
    type: "free",
    pageNum: "1",
    pageSize: "10",
  },
  success: function (res) {
    // console.log(res);
    $($(".courseTitle")[0]).html(res.rows[0].courseTitle);
    $($(".courseTitle")[1]).html(res.rows[1].courseTitle);
    $($(".courseTitle")[2]).html(res.rows[2].courseTitle);
    $($(".courseTitle")[3]).html(res.rows[3].courseTitle);
    $($(".courseTitle")[4]).html(res.rows[4].courseTitle);
    $($(".courseTitle")[5]).html(res.rows[5].courseTitle);
    $($(".courseTitle")[6]).html(res.rows[6].courseTitle);
    $($(".courseTitle")[7]).html(res.rows[7].courseTitle);
    $($(".courseTitle")[8]).html(res.rows[8].courseTitle);
    $($(".courseTitle")[9]).html(res.rows[9].courseTitle);
    $($(".subSectionNum")[0]).text(res.rows[0].subSectionNum);
    $($(".subSectionNum")[1]).text(res.rows[1].subSectionNum);
    $($(".subSectionNum")[2]).text(res.rows[2].subSectionNum);
    $($(".subSectionNum")[3]).text(res.rows[3].subSectionNum);
    $($(".subSectionNum")[4]).text(res.rows[4].subSectionNum);
    $($(".subSectionNum")[5]).text(res.rows[5].subSectionNum);
    $($(".subSectionNum")[6]).text(res.rows[6].subSectionNum);
    $($(".subSectionNum")[7]).text(res.rows[7].subSectionNum);
    $($(".subSectionNum")[8]).text(res.rows[8].subSectionNum);
    $($(".subSectionNum")[9]).text(res.rows[9].subSectionNum);
    $($(".learningNum")[0]).text(res.rows[0].learningNum);
    $($(".learningNum")[1]).text(res.rows[1].learningNum);
    $($(".learningNum")[2]).text(res.rows[2].learningNum);
    $($(".learningNum")[3]).text(res.rows[3].learningNum);
    $($(".learningNum")[4]).text(res.rows[4].learningNum);
    $($(".learningNum")[5]).text(res.rows[5].learningNum);
    $($(".learningNum")[6]).text(res.rows[6].learningNum);
    $($(".learningNum")[7]).text(res.rows[7].learningNum);
    $($(".learningNum")[8]).text(res.rows[8].learningNum);
    $($(".learningNum")[9]).text(res.rows[9].learningNum);
    $($(".bannerFileUrlPc")[0]).attr("src", res.rows[0].coverFileUrl);
    $($(".bannerFileUrlPc")[1]).attr("src", res.rows[1].coverFileUrl);
    $($(".bannerFileUrlPc")[2]).attr("src", res.rows[2].coverFileUrl);
    $($(".bannerFileUrlPc")[3]).attr("src", res.rows[3].coverFileUrl);
    $($(".bannerFileUrlPc")[4]).attr("src", res.rows[4].coverFileUrl);
    $($(".bannerFileUrlPc")[5]).attr("src", res.rows[5].coverFileUrl);
    $($(".bannerFileUrlPc")[6]).attr("src", res.rows[6].coverFileUrl);
    $($(".bannerFileUrlPc")[7]).attr("src", res.rows[7].coverFileUrl);
    $($(".bannerFileUrlPc")[8]).attr("src", res.rows[8].coverFileUrl);
    $($(".bannerFileUrlPc")[9]).attr("src", res.rows[9].coverFileUrl);
    $($(".courseId")[0]).attr("name", res.rows[0].courseId);
    $($(".courseId")[1]).attr("name", res.rows[1].courseId);
    $($(".courseId")[2]).attr("name", res.rows[2].courseId);
    $($(".courseId")[3]).attr("name", res.rows[3].courseId);
    $($(".courseId")[4]).attr("name", res.rows[4].courseId);
    $($(".courseId")[5]).attr("name", res.rows[5].courseId);
    $($(".courseId")[6]).attr("name", res.rows[6].courseId);
    $($(".courseId")[7]).attr("name", res.rows[7].courseId);
    $($(".courseId")[8]).attr("name", res.rows[8].courseId);
    $($(".courseId")[9]).attr("name", res.rows[9].courseId);
    for (var i = 0; i < 10; i++) {
      var a = $($(".courseId")[0 + i]).attr("name", res.rows[i].courseId);
      // console.log(a);
    }
  },
  error: function (err) {},
});

//精品
$.ajax({
  url: "http://59.111.104.104:8086/weChat/applet/course/list/type",
  type: "post",
  contentType: "application/x-www-form-urlencoded",
  data: {
    type: "boutique",
    pageNum: "1",
    pageSize: "5",
  },
  success: function (res) {
    console.log(res);
    $($(".courseTitle")[10]).html(res.rows[0].courseTitle);
    $($(".courseTitle")[11]).html(res.rows[1].courseTitle);
    $($(".courseTitle")[12]).html(res.rows[2].courseTitle);
    $($(".courseTitle")[13]).html(res.rows[3].courseTitle);
    $($(".courseTitle")[14]).html(res.rows[4].courseTitle);

    $($(".subSectionNum")[10]).text(res.rows[0].subSectionNum);
    $($(".subSectionNum")[11]).text(res.rows[1].subSectionNum);
    $($(".subSectionNum")[12]).text(res.rows[2].subSectionNum);
    $($(".subSectionNum")[13]).text(res.rows[3].subSectionNum);
    $($(".subSectionNum")[14]).text(res.rows[4].subSectionNum);

    $($(".learningNum")[10]).text(res.rows[0].learningNum);
    $($(".learningNum")[11]).text(res.rows[1].learningNum);
    $($(".learningNum")[12]).text(res.rows[2].learningNum);
    $($(".learningNum")[13]).text(res.rows[3].learningNum);
    $($(".learningNum")[14]).text(res.rows[4].learningNum);

    $($(".bannerFileUrlPc")[10]).attr("src", res.rows[0].coverFileUrl);
    $($(".bannerFileUrlPc")[11]).attr("src", res.rows[1].coverFileUrl);
    $($(".bannerFileUrlPc")[12]).attr("src", res.rows[2].coverFileUrl);
    $($(".bannerFileUrlPc")[13]).attr("src", res.rows[3].coverFileUrl);
    $($(".bannerFileUrlPc")[14]).attr("src", res.rows[4].coverFileUrl);
    $($(".discountDesc")[0]).html(res.rows[0].discountDesc);
    $($(".courseId")[10]).attr("name", res.rows[0].courseId);
    $($(".courseId")[11]).attr("name", res.rows[1].courseId);
    $($(".courseId")[12]).attr("name", res.rows[2].courseId);
    $($(".courseId")[13]).attr("name", res.rows[3].courseId);
    $($(".courseId")[14]).attr("name", res.rows[4].courseId);
    for (var i = 0; i < 5; i++) {
      var a = $($(".courseId")[10 + i]).attr("name", res.rows[i].courseId);
      // console.log(a);
    }
    $(".courseId").click(function () {
      var idValue = $(this).attr("name");
      console.log(11111);

      console.log(idValue);
      localStorage.setItem("id", idValue);
      window.open("../html/详情.html");
    });
    // $(".courseId").mouseover(function () {
    //   var idValue = $(this).attr("name");
    //   console.log(11111);

    //   console.log(idValue);
    // });
  },
  error: function (err) {},
});
//限时折扣
$.ajax({
  url: "http://59.111.104.104:8086/weChat/applet/course/list/type",
  type: "post",
  contentType: "application/x-www-form-urlencoded",
  data: {
    type: "discount",
    pageNum: "1",
    pageSize: "5",
  },
  success: function (res) {
    console.log(res);
    $($(".courseTitle")[15]).html(res.rows[0].courseTitle);
    $($(".courseTitle")[16]).html(res.rows[1].courseTitle);
    $($(".courseTitle")[17]).html(res.rows[2].courseTitle);
    $($(".courseTitle")[18]).html(res.rows[3].courseTitle);
    $($(".courseTitle")[19]).html(res.rows[4].courseTitle);

    for (var i = 0; i < 5; i++) {
      var a = $($(".courseId")[15 + i]).attr("name", res.rows[i].courseId);
      // console.log(a);
    }

    $($(".subSectionNum")[15]).text(res.rows[0].subSectionNum);
    $($(".subSectionNum")[16]).text(res.rows[1].subSectionNum);
    $($(".subSectionNum")[17]).text(res.rows[2].subSectionNum);
    $($(".subSectionNum")[18]).text(res.rows[3].subSectionNum);
    $($(".subSectionNum")[19]).text(res.rows[4].subSectionNum);

    $($(".learningNum")[15]).text(res.rows[0].learningNum);
    $($(".learningNum")[16]).text(res.rows[1].learningNum);
    $($(".learningNum")[17]).text(res.rows[2].learningNum);
    $($(".learningNum")[18]).text(res.rows[3].learningNum);
    $($(".learningNum")[19]).text(res.rows[4].learningNum);

    $($(".bannerFileUrlPc")[15]).attr("src", res.rows[0].coverFileUrl);
    $($(".bannerFileUrlPc")[16]).attr("src", res.rows[1].coverFileUrl);
    $($(".bannerFileUrlPc")[17]).attr("src", res.rows[2].coverFileUrl);
    $($(".bannerFileUrlPc")[18]).attr("src", res.rows[3].coverFileUrl);
    $($(".bannerFileUrlPc")[19]).attr("src", res.rows[4].coverFileUrl);
    $($(".discountDesc")[0]).html(res.rows[0].discountDesc);
    console.log(res.rows[0].courseId);

    $($(".courseId")[15]).attr("name", res.rows[0].courseId);
    $($(".courseId")[16]).attr("name", res.rows[1].courseId);
    $($(".courseId")[17]).attr("name", res.rows[2].courseId);
    $($(".courseId")[18]).attr("name", res.rows[3].courseId);
    $($(".courseId")[19]).attr("name", res.rows[4].courseId);
  },
  error: function (err) {},
});

$(".courseId").click(function () {});
// 专题
$.ajax({
  url: "http://59.111.104.104:8086/weChat/applet/subject/list",
  type: "post",
  contentType: "application/json",
  data: JSON.stringify({
    enable: "1",
  }),
  success: function (res) {
    console.log(res);
    // console.log(res.rows[i]);
    var box = document.getElementById("box1");

    for (var i = 0; i < res.rows.length; i++) {
      var liObj = document.createElement("li");
      box.appendChild(liObj);
      var aObj = document.createElement("a");
      liObj.appendChild(aObj);
      // console.log(aObj);
      $($("#box1 >  li >a")[i]).text(res.rows[i].subjectTitle);
      // console.log($("#box1 li >a"));
      // console.log();
      var name = res.rows[i].subjectId;
      console.log(name);
      $($("#box1 > li>a")[i]).attr("name", name);
      console.log($($("#box1 > li>a")[i]).attr("name"));
      var name = $($("#box1 > li>a")[i]).attr("name");
      console.log(name);
    }
    $("#box1 > li>a").click(function () {
      localStorage.setItem("subjectId", $(this).attr("name"));
      localStorage.setItem("text", $("#iptBtn").val());
      location.href = "../html/搜索.html";
    });
  },
  error: function (err) {},
});

// 进入搜索页
$("#btn button").click(function () {
  // console.log(12);

  localStorage.setItem("text", $("#iptBtn").val());
  localStorage.setItem("searchZ", true);
  localStorage.setItem("subjectId", "");

  console.log(localStorage.text);
  // debugger;
  // window.open = "../html/搜索.html";
  // location.href = "../html/搜索.html";
  // location.href = "../html/搜索.html";
  window.open("../html/搜索.html");
});
