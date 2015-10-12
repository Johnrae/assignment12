(function () {

  var string = $('#contentSpit').text();

  var funStuff = _.template(string);


  _.each(etsy.results, function(item){
    var itemHTML = funStuff(item);
  $('.content').append(itemHTML);
  });


}());