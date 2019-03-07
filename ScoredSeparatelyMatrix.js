//
//  name=ScoredSeperatelyMatrix.js 
//  dependencies=
//  description=Shows the result tables as a matrix if they have been scored separately.
//  author=Colin Jenkins
//  version=1.0
//  date=2015-07-27
//  url=http://op12no2.me	
//  email=op12no2@gmail.com	
//  twitter=@op12no2
//
//  Please note that this effect only works when more then one or more
//  group (e.g. fleet) has been scored separately.  There may be some 
//  other limitations.  Footers and notes are removed.  Burgees are
//  consolidated.
//

$.fn.exists = function () {
    return this.length !== 0;
}

function showcodes () {
  $('h3.codestitle').fadeIn('slow'); 
  $('table.codestable').fadeIn('slow'); 
}

function showprizes () {
  $('h3.prizestitle').show(); 
  $('table.prizestable').show(); 
}

function showsummary (f) {
  hideall();
  $(d.sum[f].title).show(); 
  $(d.sum[f].caption).show(); 
  $(d.sum[f].table).fadeIn('slow'); 
  showcodes()
}

function showrace (f,r) {
  hideall();
  showcodes()
  $(d.sum[f].races[r].title).show(); 
  $(d.sum[f].races[r].caption).show(); 
  $(d.sum[f].races[r].table).fadeIn('slow'); 
}

function hideall () {
  $('h3.prizestitle').hide();
  $('table.prizestable').hide();
  hideinit();
}  
function hideinit () {
  $('h3.codestitle').hide();
  $('table.codestable').hide();
  $('h3.summarytitle').hide();
  $('div.summarycaption').hide();
  $('table.summarytable').hide();
  $('h3.racetitle').hide();
  $('div.racecaption').hide();
  $('table.racetable').hide();
}  

$(function() {
  $('img').removeClass('hardleft');
  $('img').removeClass('hardright');
  $('img.hardright').remove();
  $('p.hardright').remove();
  $('p.hardleft').remove();
  $('div.contents').remove();       
  $('p.seriesnotes').remove();
  $('p.racenotes').remove();
  
  d = {};

  d.sum = [];
  $('h3.summarytitle').each(function(index) {
    if (!d.sum[index])
      d.sum[index] = {};
    d.sum[index].title = this;
    console.log($(d.sum[index].title).text());
    if ($(this).attr('id'))
      d.sum[index].id = $(this).attr('id').replace(/summary/gi,'');
    else
      d.sum[index].id = 'overall';
    //console.log($(this).attr('id'));
    //console.log(d.sum[index].id);
    d.sum[index].caption = $(this).next();
    d.sum[index].table   = $(this).next().next();
    maxraces = 100; //hack $('h3.racetitle').size();
    minr = 10000;
    maxr = 0;
    //console.log(maxraces);
    d.sum[index].races = [];
    for (var i=0; i<maxraces; i++) {
      var r = i + 1;
      var id = '#r' + r + d.sum[index].id;
      //console.log(id);
      if ($(id).exists()) {
        if (r > maxr)
          maxr = r;
        if (r < minr)
          minr = r;
        d.sum[index].races[r] = {};
        d.sum[index].races[r].raceno = r;
        d.sum[index].races[r].title = $(id);
        d.sum[index].races[r].caption = $(id).next();
        d.sum[index].races[r].table = $(id).next().next();
      } 
    }
  });
  $('a.racelink').each(function(index) {
    $(this).parent().html($(this).text());
  });

  hideinit();

  h = '<div style="margin: 40px auto 20px; auto;" id="dynamic"><table>';

  for (var f=0; f<d.sum.length; f++) {
    var fleet = d.sum[f];
    var races = d.sum[f].races;
    h += '<tr><td>' + $(fleet.title).text() + '</td>';
    var linktitle = 'Overall';
    h += '<td><a href="#" onclick="showsummary(' + f + ');">' + linktitle + '</a></td>';
    for (var r=minr; r<=maxr; r++) {
      var linktitle = $.trim(($(races[r].title).text().split('-'))[0]);
      h += '<td>';
      if (races[r])
        h += '<a href="#" onclick="showrace(' + f + ',' + r + ');">' + linktitle + '</a>';
      else
        h += '&nbsp;';
      h += '</td>';
    }
    h += '</tr>';
  }

  //h += '<tr><td><a href="#" onclick="showcodes();">Scoring codes</a></td></tr>'; 
  //h += '<tr><td><a href="#" onclick="showprizes();">Prizes</a></td></tr>'; 
  h += '</table></div>';
  
  $('h3.seriestitle').append(h);

});