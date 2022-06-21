$(function () {
  /*$(".head").load("header.html"); */

  $(".content").load("home.html");
  $(".footer").load("footer.html");

  /*$("a").click(function () {
    //ให้ทำการโหลดหน้าเว็บโดยรับค่าจาก attribute ของ tag a ลงใน .container 
    $(".content").load($(this).attr("href"));
    return false;
  });*/

  //----------------------ส่วนของการโหลดเนื้อหา(อันเก่า)----------------------------------

  $('.menu a').click(function (e) {
    e.preventDefault();
    var link = $(this).attr('href');
    /* ดึงเนื้อหาจากลิงค์ด้วย Ajax เมื่อผู้ใช้กดลิงค์ */
    $.get(link, function (res) {
      /* อัพเดทเนื้อหาที่ได้จาก Ajax ไปที่ div ที่มี id="content" */
      $('.content').html(res);
      window.scrollTo({ top: 0, behavior: "smooth" });
      /*หลังจากอัพเดทเนื้อหาเสร็จ เปลี่ยน URL ของเบราว์เซอร์ */
      /* window.history.replaceState(null, null, link); */
    });
  });

  //----------------------ส่วนของการโหลดเนื้อหา menu----------------------------------

  $('.sidenav a').click(function (e) {
    e.preventDefault();
    var link = $(this).attr('href');
    /* ดึงเนื้อหาจากลิงค์ด้วย Ajax เมื่อผู้ใช้กดลิงค์ */
    $.get(link, function (res) {
      /* อัพเดทเนื้อหาที่ได้จาก Ajax ไปที่ div ที่มี id="content" */
      $('.content').html(res);
      window.scrollTo({ top: 0, behavior: "smooth" });
      /*หลังจากอัพเดทเนื้อหาเสร็จ เปลี่ยน URL ของเบราว์เซอร์ */
      /* window.history.replaceState(null, null, link); */
    });
    closeNav()
  });
  //----------------------ส่วนของการโหลดเนื้อหา sideMenu----------------------------------

  $(window).on('scroll', function () {
    if ($(window).scrollTop()) {
      $('#nav').addClass('sticky');
    } else {
      $('#nav').removeClass('sticky');
    }
  })

  //------------------------------Sticky Nav----------------------------------
  $(".menu a").on('click', function () {

    $('.menu a').removeClass('current');
    $(this).addClass('current');
  });
  //------------------------- Search Bar & Toggle ----------------------------

  $("a").on('click', function () {

    if ($(this).attr("id") == "about") {
      $(".container").css("min-height", "50vh");
      $(".bg-text").css("top", "20%");
      $(".bg-text").css("border", "0px");
      $(".bg").addClass("bg-about");
      $(".bg-text h1").html("ABOUT");
    } else if ($(this).attr("id") == "contact") {
      $(".container").css("min-height", "50vh");
      $(".bg-text").css("top", "20%");
      $(".bg-text").css("border", "0px");
      $(".bg").addClass("bg-contact");
      $(".bg-text h1").html("CONTACT");
    } else if ($(this).attr("id") == "menu") {
      $(".container").css("min-height", "50vh");
      $(".bg-text").css("top", "20%");
      $(".bg-text").css("border", "0px");
      $(".bg").addClass("bg-menu");
      $(".bg-text h1").html("MENU");
    } else if ($(this).attr("id") == "gallery") {
      $(".container").css("min-height", "50vh");
      $(".bg-text").css("top", "20%");
      $(".bg-text").css("border", "0px");
      $(".bg").addClass("bg-gallery");
      $(".bg-text h1").html("GALLERY");
    } else {
      $(".container").css("min-height", "100vh");
      $(".bg-text").css("top", "50%")
      $(".bg-text").css("border", "1px solid #f1f1f1");
      $(".bg").removeClass("bg-about");
      $(".bg").removeClass("bg-contact");
      $(".bg").removeClass("bg-menu");
      $(".bg").removeClass("bg-gallery");
      $(".bg-text h1").html("WELCOME");
    }
  })

  //---------------------------เปลี่ยน bg ตาม id Menu---------------------------

});

function openNav() {
  $("#mySidenav").css("height", "40%");
}
function closeNav() {
  $("#mySidenav").css("height", "0%");
}