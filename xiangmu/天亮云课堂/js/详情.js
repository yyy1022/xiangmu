// tab 切换
console.log($("#catalogue>ul> li"));
$(".m-box1Nav>li").click(function () {
  $(this).addClass("active3").siblings().removeClass("active3");
  $(".boxBig>div").eq($(this).index()).show().siblings().hide();
});
// 收藏
$(".m-box1Right2").click(function () {
  $(this).addClass("active4");
  // $(".show1").attr("display", block);
  // $(".hide1").attr("display", none);
  $(this).find(".hide1").show();
  $(this).find(".show1").hide();
});
console.log(localStorage.id);
//
$.ajax({
  url: "http://59.111.104.104:8086/pc/course/detail/" + localStorage.id,
  type: "get",
  contentType: "application/json;charset=UTF-8",
  success: function (res) {
    console.log(res);
    // 课程描述
    $(".m-box1Img >img").attr("src", res.data.coverFileUrl);
    $(".h2").text(res.data.courseTitle);
    $(".participationsCount").text(res.data.participationsCount);
    $(".m-box1-text").html(res.data.courseDetail);
    // $(".evaluate-box3-left").html(res.data.createdBy);
    // 动态创建目录;
    var box = document.getElementById("catalogue");
    // 目录
    for (var i = 0; i < res.data.sections.length; i++) {
      var title = res.data.sections[i].sectionName;
      var tableobj = document.createElement("ul");
      box.appendChild(tableobj);
      var h4Obj = document.createElement("h4");
      tableobj.appendChild(h4Obj);

      var box1 = document.createElement("div");
      h4Obj.appendChild(box1);

      var text1 = res.data.sections[i].subSections;

      for (var j = 0; j < res.data.sections[i].subSections.length; j++) {
        var liObj = document.createElement("li");
        tableobj.appendChild(liObj);
        var box2 = document.createElement("div");
        liObj.appendChild(box2);
        // console.log($("#catalogue ul li div"));
        var iconfont2 =
          '<div><svg class="icon" aria-hidden="true"><use xlink:href="#icon-xiazai"></use></svg>下载</div>';
        var iconfont3 =
          ' <p style="float: right;"><span class="font"><svg class="icon" aria-hidden="true"><use xlink:href="#icon-kaishi"></use></svg></span><span class="watch" style="display: none;">观看</span></p>';
      }
    }

    for (var i = 0; i < res.data.sections.length; i++) {
      var title = res.data.sections[i].sectionName;

      $($("h4")[i]).html(
        i + 1 + "." + res.data.sections[i].sectionName + iconfont2
      );
      for (var j = 0; j < res.data.sections[i].subSections.length; j++) {
        $($($("#catalogue  ul")[i]).children("li")[j]).html(
          i +
            1 +
            "-" +
            (j + 1) +
            "&nbsp;&nbsp" +
            res.data.sections[i].subSections[j].sectionName +
            iconfont3
        );
        // $(
        //   $($($("#catalogue  ul")[i]).children("li")[j]).children("div")[j]
        // ).html(观看);
      }
    }
  },
  error: function (err) {},
});
// 获取课程评论
$.ajax({
  url:
    "http://59.111.104.104:8086/pc/comment/commentList/course/" +
    localStorage.id,

  contentType: "application/json;charset=UTF-8",
  type: "get",
  contentType: "application/json;charset=UTF-8",
  success: function (res) {
    console.log(res);
    if (res.rows.length > 0) {
      for (var i = 0; i < res.rows.length; i++) {
        var box = document.getElementById("evaluate-box3");
        var box1 = document.createElement("div");
        box.appendChild(box1);
        var pObj = document.createElement("p");
        box.appendChild(pObj);
        $("#evaluate-box3>p").html(
          res.rows[i].createdTime + "&nbsp;" + "&nbsp;" + "回复"
        );
        var iconfont =
          ' <svg class="icon" aria-hidden="true" class="font1"><use xlink:href="#icon-ren"></use></svg>';
        var iconfont1 =
          '<svg class="icon" aria-hidden="true"><use xlink:href="#icon-xingxing"></use></svg><svg class="icon" aria-hidden="true"><use xlink:href="#icon-xingxing"></use></svg><svg class="icon" aria-hidden="true"><use xlink:href="#icon-xingxing"></use></svg><svg class="icon" aria-hidden="true"><use xlink:href="#icon-xingxing"></use></svg><svg class="icon" aria-hidden="true"><use xlink:href="#icon-xingxing"></use></svg>';
        var p1 = document.createElement("p");
        box1.appendChild(p1);
        $("#evaluate-box3 >div> p").html(
          iconfont + "&nbsp; &nbsp;" + res.rows[i].user.nickname
        );
        var fontBox = document.createElement("div");
        box1.appendChild(fontBox);
        console.log($("#evaluate-box3 >div>div"));
        $("#evaluate-box3 >div>div").html(iconfont1);

        var p2 = document.createElement("span");
        box1.appendChild(p2);
        $("#evaluate-box3 >div >span").html(res.rows[i].commentContent);
        var p3 = document.createElement("p");
      }
    } else {
      $(".evaluate-box3-left").html(null);
    }
  },
  error: function (err) {},
});
