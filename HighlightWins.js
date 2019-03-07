//
//  name=HighlightWins.js 
//  dependencies=
//  description=Highlight winning scores in summary tables.
//  author=Colin Jenkins
//  version=1.0
//  date=2015-07-27
//  url=http://op12no2.me	
//  email=op12no2@gmail.com	
//  twitter=@op12no2
//

var winsText     = '1.0';
var winsColour   = '#ffd700';
var winsSelector = '.summarytable td';

$(function () {
  $(winsSelector).filter(function() {
    return $(this).text() === winsText;
  }).css("background", winsColour);
});

