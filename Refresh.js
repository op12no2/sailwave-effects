//
//  name=Refresh.js 
//  dependencies=
//  description=Refresh the page (and clears cache) every 10 seconds (or rate=miliseconds in url)
//  usage=http://www.sailwave.com/refresh
//  author=Colin Jenkins
//  version=1.0
//  date=2016-03-03
//  url=http://op12no2.me	
//  email=op12no2@gmail.com	
//  twitter=@op12no2
//
  
var args = swGetURLArgs();

if (args.rate)
  var rate = parseInt(args.rate);  
else
  var rate = 10000;  

setTimeout(function(){
   window.location.reload(1);
}, rate);

