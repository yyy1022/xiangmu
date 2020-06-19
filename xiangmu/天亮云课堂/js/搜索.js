var page = 1;

// 搜索框保存value值

$("#btn1").click(function () {
  // console.log($("#btn").val());
  localStorage.setItem("text", $("#btn").val());
});
// console.log(localStorage.text);

// 判断是怎米进来.
if (localStorage.searchZ == "true") {
  // id值
  localStorage.setItem("nameValue", "");

  fn1(1, "", "");
  // localStorage.removeItem("text");
} else {
  fn1(1, localStorage.text, localStorage.nameValue);
}
// 专题分类
$.ajax({
  url: "http://59.111.104.104:8086/weChat/applet/subject/list",
  type: "post",
  contentType: "application/json",
  data: JSON.stringify({
    enable: "1",
  }),
  success: function (res) {
    // console.log(res);

    var box = document.getElementsByClassName("m-list1Box")[0];
    // 渲染span数据
    for (var i = 0; i < res.rows.length; i++) {
      var spanObj = document.createElement("span");
      box.appendChild(spanObj);
      var aObj = document.createElement("a");
      spanObj.appendChild(aObj);

      $($(".m-list1Box>span")[i + 1]).text(res.rows[i].subjectTitle);

      $($(".m-list1Box>span")[i + 1]).attr("name", res.rows[i].subjectId);
      // var nameValue = $($(".m-list1Box>span")[i + 1]).attr("name");
      // if (nameValue == localStorage.subjectId) {
      //   $($(".m-list1Box>span")[i + 1])
      //     .addClass("active")
      //     .siblings()
      //     .removeClass("active");
      // }
      // localStorage.setItem("subjectId", "");
    }
    // 点击span添加样式
    $(".m-list1Box span").click(function () {
      $(this).addClass("active").siblings().removeClass("active");
      fn1(1, localStorage.text, $(this).attr("name"));
      localStorage.setItem("nameValue", $(this).attr("name"));
    });

    console.log(localStorage.subjectId);
    $(".m-list1Box span").each(function () {
      if ($(this).attr("name") == localStorage.subjectId) {
        // console.log($(this));
        $(this).addClass("active").siblings().removeClass("active");
        fn1(1, localStorage.text, $(this).attr("name"));
      }
    });
    $("#box1 >li").click(function () {
      $($("#box1 > li")[i]).attr("name", name);
      console.log($($("#box1 > li")[i]).attr("name"));
      var name = $($("#box1 > li")[i]).attr("name");
      console.log(name);
      localStorage.setItem("text", $("#Btn").val());
    });
  },
  error: function (err) {},
});

// 搜索

function fn1(x, y, z) {
  $.ajax({
    url: "http://59.111.104.104:8086/pc/course/search/keyword",
    type: "get",
    contentType: "application/json",
    data: {
      pageNum: x, //页数
      pageSize: 10,
      keyword: y, //关键字
      subjectId: z, //id
    },
    success: function (res) {
      if ($("#m-BigBox1").children().length > 0) {
        $("#m-BigBox1").empty();
      }
      if ($("#m-BigBox>ul").length > 0) {
        $("#m-BigBox>ul").empty();
      }
      // console.log(res);

      var boxBig = document.getElementById("m-BigBox");
      var box1 = document.getElementById("m-BigBox1");
      var box2 = document.createElement("div");

      // 页面渲染
      if (res.courseList.length != 0) {
        for (var i = 0; i < res.courseList.length; i++) {
          var box2 = document.createElement("div");
          box1.appendChild(box2);
          var imgObj = document.createElement("img");
          box2.appendChild(imgObj);
          $($("#m-BigBox1>div>img")[i]).attr(
            "src",
            res.courseList[i].coverFileUrl
          );
          var pObj = document.createElement("h4");
          box2.appendChild(pObj);
          $($("#m-BigBox1>div>h4")[i]).html(res.courseList[i].courseTitle);
          var p1Obj = document.createElement("p");
          box2.appendChild(p1Obj);
          var text1 = "<span>共</span><span>节课</span>";
          $($("#m-BigBox1>div>p")[i]).html(
            "<span>共</span>" +
              res.courseList[i].subSectionNum +
              "<span>节课|</span>" +
              res.courseList[i].participationsCount +
              "<span>人报名</span>"
          );
          // console.log(res.courseList[i].courseId);
          // 进入缓冲页
          var b = $($("#m-BigBox1>div")[i]).attr(
            "name",
            res.courseList[i].courseId
          );
          $("#m-BigBox1>div").click(function () {
            var idValue = $(this).attr("name");
            // console.log(11111);

            // console.log(idValue);
            localStorage.setItem("id", idValue);
            window.open("../html/详情.html");
          });
        }
      } else {
        $("#m-BigBox1").html("暂无相关搜索结果，换个关键词试试吧 : ");
      }
      // 跳热到详情页
      // res.courseList[i].courseId;
      // console.log(res.courseList[i].courseId);
      var btn1 =
        '<li id="leftBtn" class=""><svg class="icon" aria-hidden="true"><use xlink:href="#icon-arrow-right-copy-copy"></use>/svg></li>';
      var btn2 =
        '<li id="rightBtn" class=""><svg class="icon" aria-hidden="true"><use xlink:href="#icon-arrow-right-copy"></use></svg></li>';
      // 页码
      if (res.total % 10 != 0 && res.total % 10 > 0) {
        var a = Math.floor(res.total / 10 + 1);
        // console.log(a);
      } else {
        var a = Math.floor(res.total / 10);
      }
      $("#bottomPage").append(btn1);
      for (var i = 0; i < a; i++) {
        $("#bottomPage").append("<li class='pageVal'></li>");
        $($("#m-BigBox >ul>.pageVal")[i]).html(i + 1);
      }
      $("#bottomPage").append(btn2);
      // console.log($("#m-BigBox >ul>li"));
      $("#m-BigBox >ul>.pageVal").click(function () {
        // debugger;
        // console.log($(this).html());
        var liText = Number($(this).html());
        console.log(typeof sstta);
        page = liText;
        fn1(liText, localStorage.text, localStorage.nameValue);
        // console.log($(this).text());

        // $(this).text().addClass("active1").siblings().removeClass("active1");
      });
      // 右按钮

      $("#rightBtn").click(function () {
        if (page < a) {
          page += 1;

          fn1(page, localStorage.text, localStorage.nameValue);
          // 禁用not-click
          $("#leftBtn").removeClass("not-click");
        } else {
          $("#rightBtn").addClass("not-click");
        }
      });
      // 左按钮
      $("#leftBtn").click(function () {
        if (page > 1) {
          page -= 1;
          fn1(page, localStorage.text, localStorage.nameValue);
          $("#rightBtn").removeClass("not-click");
        } else {
          $(this).addClass("not-click");
        }
      });
      // 页码
      // console.log($("#m-BigBox >ul>li"));
    },
    error: function (err) {},
  });
}
// fn1();
