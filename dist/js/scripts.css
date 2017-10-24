$('.choose').on('change', function() {
    var section = $('.choose').val();
    $("footer").css("position", "static");
    $("header").css("height", '200px');
    $("header").css("padding-top", "0px");
    $("header").css("margin-bottom", '1%');
    $("img").css("padding-top", "0px");
    $("img").css("margin-bottom", '1%');
    $("img").css("width", '14%');
    $("h3").css("text-align", 'center');
    var url = "https://api.nytimes.com/svc/topstories/v2/" + section + ".json";
    url += '?' + $.param({
      'api-key': "852b83f67db94fd6bb292d1524077bae"
    });
    $( ".headline" ).empty();
    $.ajax({
      url: url,
      method: 'GET',
    }).done(function(result) {
      var counter = 0;
      for (var i=0; i < result.results.length; i++) {
        if(result.results[i].multimedia.length != 0 && counter<12) {
      console.log(result, i);
      var title = result.results[i].title;
      var url = result.results[i].url;
      var imgUrl = result.results[i].multimedia[1].url;

      console.log(title, url, imgUrl);
      /*
      <a href="https://www.nytimes.com/2017/10/20/briefing/harvey-weinstein-los-angeles-dodgers-the-orionids.html">
 <p>Harvey Weinstein, Los Angeles Dodgers, the Orionids: Your Friday</p>
        </a>
    */
      var article = $('<a></a>');
      var myParagraph = $('<p></p>');
      myParagraph.text(title);
      article.attr("href", url);
      article.css("background-image", 'url(' + imgUrl + ')');
          article.append(myParagraph);
          $('.headline').append(article);
          counter++;
}
    //  $('.headline').append(myParagraph);
  }
    }).fail(function(err) {
      throw err;
    });

});
