//
//  name=SocialShare.js 
//  dependencies=
//  description=Add facebook and twitter sharing links.
//  author=Colin Jenkins
//  version=1.0
//  date=2015-07-27
//  url=
//  email=op12no2@gmail.com	
//  twitter=@op12no2
//

$(function() {

  var fbimage = 'http://sailwave.com/media/facebook.png';
  var fbshare = 'https://www.facebook.com/sharer/sharer.php?u=' + window.location;
  var fblink  = '<a title="share on facebook" href="' + fbshare + '"><img src="' + fbimage + '"></a>'

  var twimage = 'http://sailwave.com/media/twitter.png';
  var twshare = 'https://twitter.com/intent/tweet?text=' + '%23' + encodeURIComponent($('title').text()) + '&url=' + window.location;
  var twlink  = '<a title="share on twitter" href="' + twshare + '"><img src="' + twimage + '"></a>'

  $('body').prepend(fblink + ' ' + twlink);

});
