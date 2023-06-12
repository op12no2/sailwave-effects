//
//  name=Scroller.js 
//  dependencies=
//  description=Scroll the page up and down.
//  usage=http://www.sailwave.com/scroller
//  author=Colin Jenkins
//  version=1.0
//  date=2015-07-27
//  url=
//  email=op12no2@gmail.com	
//  twitter=@op12no2
//
  
var args = swGetURLArgs();

if (args.step)
  var stepY = parseInt(args.step);  
else
  var stepY = 2;  

if (args.speed)
  var timeout = parseInt(args.speed); 
else
  var timeout = 70; 
 
function getDocHeight() {
    var D = document;
    return Math.max(
        Math.max(D.body.scrollHeight, D.documentElement.scrollHeight),
        Math.max(D.body.offsetHeight, D.documentElement.offsetHeight),
        Math.max(D.body.clientHeight, D.documentElement.clientHeight)
    );
}

var startY = 0;
var stopY  = 0;
var dir    = 0; 
var currY  = 0;

function bump() {
  scrollTo(0,currY);
  scroller(); 
}

function scroller() {

  if (stopY == 0) {
    stopY = getDocHeight();
    stopY = stopY - stopY/8;
    if (stopY <= 100)
      var abort = true;
    else 
      var abort = false;
  }

  if (dir == 0)
     currY += stepY;
  else
     currY -= stepY;

  if (currY > stopY) {
    dir = 1;
    currY = stopY;
  }

  if (currY < 0) {
    dir = 0;
    currY = 0;
  }
        
  if (!abort)
    if (dir == 0)
      setTimeout(bump,timeout);
    else
      setTimeout(bump,timeout/100);
}

window.onload=scroller;
