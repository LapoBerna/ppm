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

  if ($(window).width() > 1250) {
    $('#scroll_logo1').removeClass("d-none");
    $('#scroll_logo2').addClass("d-none");
  } else {

    $('#scroll_logo1').addClass("d-none");
    $('#scroll_logo2').removeClass("d-none")
  }
});

$(window).on("resize", function () {

  if ($(window).width() > 1250) {

    $('#scroll_logo1').removeClass("d-none");
    $('#scroll_logo2').addClass("d-none");
  } else {
    if ($(window).width() > 1000) {
      $('#scroll_logo1').addClass("d-none");
      $('#scroll_logo2').removeClass("d-none");
    }

  }
});