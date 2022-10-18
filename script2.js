
// var para=document.createElement("p");

// para.innerHTML = "HAPPY INDEPENDENCE DAY";

// document.body.append(para);

var div = document.createElement("div");
div.setAttribute("id","countdown");

var timeleft = 10;
var downloadTimer = setInterval(function(){
  if(timeleft <= 0){
    clearInterval(downloadTimer);
    document.getElementById("countdown").innerHTML = "HAPPY INDEPENDENCE DAY";
  } else {
    document.getElementById("countdown").innerHTML = timeleft + " seconds remaining";
  }
  timeleft -= 1;
}, 1000);
var br=document.createElement("br");
document.body.append(br,br,br,br,div);
