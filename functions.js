const sleep = async (milliseconds) => {
    await new Promise(resolve => {
        return setTimeout(resolve, milliseconds)
    });
};


var id = null;

async function bannerStatus() {
    const banner = document.getElementById("huff_ad");
    banner.style.top = "0px";
    await sleep(5000);
    slideUp();
    banner.style.top = "-300px";
    document.getElementById("demo").innerHTML = "Paragraph changed.";
}

function slideUp() {
    var elem = document.getElementById("huff_ad");   
    var pos = 0;
    clearInterval(id);
    id = setInterval(frame, 10);
    function frame() {
      if (pos == -300) {
        clearInterval(id);
      } else {
        pos=pos-4; 
        elem.style.top = pos + 'px'; 
      }
    }
  }

  function slideLeft() {
    var elem = document.getElementById("carousel");   
    var start =  elem.offsetLeft;
    var pos = 0;
    clearInterval(id);
    id = setInterval(frame, 10);
    var abs = Math.abs(start-2000);
    if(start== -1000){
        console.log(elem.offsetWidth + "a offsetWidth, "+abs + " offsetLeft, ");

        var left_btn = document.getElementById("left_btn");
        left_btn.classList.add("disabled");
    }
    if(elem.offsetWidth<abs){
        console.log(elem.offsetWidth + " offsetWidth, "+abs + " offsetLeft, ");
        var right_btn = document.getElementById("right_btn");
        right_btn.classList.remove("disabled");
    }
    function frame() {
      if (pos == 1000) {
        clearInterval(id);
      } else {
        pos=pos+10; 
        var newPos=start+pos ;
        elem.style.left = newPos + 'px'; 
      }
    }
  }

  function slideRight() {
    var elem = document.getElementById("carousel");   
    var start = elem.offsetLeft;
    var pos = 0;
    clearInterval(id);
    id = setInterval(frame, 10);
    var abs = Math.abs(start-2000);
    if(start==0){
        console.log(elem.offsetWidth + "a offsetWidth, "+abs + " offsetLeft, ");

        var left_btn = document.getElementById("left_btn");
        left_btn.classList.remove("disabled");
    }
    if(elem.offsetWidth<abs){
        console.log(elem.offsetWidth + " offsetWidth, "+abs + " offsetLeft, ");
        var right_btn = document.getElementById("right_btn");
        right_btn.classList.add("disabled");
    }
    function frame() {
      if (pos == -1000) {
        clearInterval(id);
      } else {
        pos=pos-10; 
        var newPos=start+pos ;
        elem.style.left = newPos + 'px'; 
      }
    }
  }