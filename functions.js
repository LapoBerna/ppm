const sleep = async (milliseconds) => {
  await new Promise(resolve => {
    return setTimeout(resolve, milliseconds)
  });
};


var id = null;

async function bannerStatus() {
  $('#huff_ad').css("top", "0px");
  await sleep(5000);
  slideUp();
  $('#huff_ad').css("top", "-300px");
}

function slideUp() {
  var pos = 0;
  clearInterval(id);
  id = setInterval(frame, 10);
  function frame() {
    if (pos == -300) {
      clearInterval(id);
    } else {
      pos = pos - 4;
      $('#huff_ad').css("top", pos);
    }
  }
}

function slideLeft() {
  var start = $('#carousel').position().left;

  var pos = 0;
  clearInterval(id);
  id = setInterval(frame, 10);
  var abs = Math.abs(start - 2000);
  if (start == -1000) {
    console.log($('#carousel').width() + "a offsetWidth, " + abs + " offsetLeft, ");

    $('#left_btn').addClass("disabled");
  }
  if ($('#carousel').Width < abs) {
    console.log($('#carousel').Width + " offsetWidth, " + abs + " offsetLeft, ");
    $('#right_btn').removeClass("disabled");
  }
  function frame() {
    if (pos == 1000) {
      clearInterval(id);
    } else {
      pos = pos + 10;
      var newPos = start + pos;
      $('#carousel').css("left", newPos);
    }
  }
}

function slideRight() {
  var start = $('#carousel').position().left;

  var pos = 0;
  clearInterval(id);
  id = setInterval(frame, 10);
  var abs = Math.abs(start - 2000);
  if (start == 0) {
    console.log($('#carousel').width() + "a offsetWidth, " + abs + " offsetLeft, ");

    $('#left_btn').removeClass("disabled");
  }
  if ($('#carousel').width() < abs) {
    console.log($('#carousel').width() + " offsetWidth, " + abs + " offsetLeft, ");
    $('#right_btn').addClass("disabled");
  }
  function frame() {
    if (pos == -1000) {
      clearInterval(id);
    } else {
      pos = pos - 10;
      var newPos = start + pos;
      $('#carousel').css("left", newPos);
    }
  }
}


function navChange() {

  $(window).scrollTop()

}


$(window).on("scroll", function () {


  if ($(window).scrollTop() < 351) {


    $('#us_link').removeClass("d-none");
    $('#scroll_left').addClass("d-none");
    $('#scroll_left').css('opacity', '0');
    $('#supp_link').addClass("d-none");


  } else {


    $('#us_link').addClass("d-none");
    $('#scroll_left').removeClass("d-none");
    $('#scroll_left').css('opacity', '1');
    $('#supp_link').removeClass("d-none");


  }
});

$(function () {



  if ($(window).scrollTop() < 351) {

    $('#us_link').removeClass("d-none");
    $('#scroll_left').addClass("d-none");
    $('#supp_link').addClass("d-none");


  } else {


    $('#us_link').addClass("d-none");
    $('#scroll_left').removeClass("d-none");
    $('#supp_link').removeClass("d-none");


  }

  if ($(document).width() > 986) {

    if ($(document).width() > 1200) {

      $('#scroll_logo1').removeClass("d-none");
      $('#scroll_logo2').addClass("d-none");
    } else {

      $('#scroll_logo1').addClass("d-none");
      $('#scroll_logo2').removeClass("d-none");

    }

    $('#huff_sub_head').removeClass("d-none");
    $('#huff_head').addClass("border-bottom border-top");
    $('#huff_head').removeClass("position-sticky");

    $('.add_border_lg').removeClass("border-bottom mb-5 pb-5 align-items-center");

    $('.sliding_ad_slot').removeClass("d-none");
  } else {

    $('#huff_head').removeClass("border-bottom border-top");
    $('#huff_head').addClass("position-sticky");
    $('#huff_sub_head').addClass("d-none");

    $('.add_border_lg').addClass("border-bottom mb-5 pb-5 align-items-center");
    $('.add_border_sm').removeClass("border-bottom mb-5 pb-5 align-items-center");
    $('.sliding_ad_slot').addClass("d-none");
    $('#nav_logo1').removeClass("d-none");
    $('#nav_logo2').addClass("d-none");

    $('#li_text').removeClass("d-none");
    $('#li_img').addClass("d-none");
    if ($(window).width() < 763) {

      $('#li_text').addClass("d-none");
      $('#li_img').removeClass("d-none");

      if ($(window).width() < 576) {
        $('.add_border_sm').addClass("border-bottom mb-5 pb-5 align-items-center");
        $('#nav_logo1').addClass("d-none");
        $('#nav_logo2').removeClass("d-none");
      }
    }
  }
});

$(window).on("resize", function () {

  if ($(document).width() > 986) {

    if ($(document).width() > 1200) {

      $('#scroll_logo1').removeClass("d-none");
      $('#scroll_logo2').addClass("d-none");
    } else {

      $('#scroll_logo1').addClass("d-none");
      $('#scroll_logo2').removeClass("d-none");

    }
    $('#huff_sub_head').removeClass("d-none");
    $('#huff_head').addClass("border-bottom border-top");
    $('#huff_head').removeClass("position-sticky");


    $('.add_border_lg').removeClass("border-bottom mb-5 pb-5 align-items-center");

    $('.sliding_ad_slot').removeClass("d-none");
  } else {

    $('#huff_head').removeClass("border-bottom border-top");
    $('#huff_sub_head').addClass("d-none");
    $('#huff_head').addClass("position-sticky");

    $('.add_border_lg').addClass("border-bottom mb-5 pb-5 align-items-center");
    $('.add_border_sm').removeClass("border-bottom mb-5 pb-5 align-items-center");

    $('.sliding_ad_slot').addClass("d-none");
    $('#nav_logo1').removeClass("d-none");
    $('#nav_logo2').addClass("d-none");

    $('#li_text').removeClass("d-none");
    $('#li_img').addClass("d-none");
    if ($(window).width() < 763) {

      $('#li_text').addClass("d-none");
      $('#li_img').removeClass("d-none");

      if ($(window).width() < 576) {
        $('.add_border_sm').addClass("border-bottom mb-5 pb-5 align-items-center");
        $('#nav_logo1').addClass("d-none");
        $('#nav_logo2').removeClass("d-none");
      }
    }
  }
});