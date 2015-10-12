'use strict';

(function () {

  var etsyURL = 'https://api.etsy.com/v2/listings/active.js?api_key=h9oq2yf3twf4ziejn10b717i&keywords=slime&includes=Images,Shop';

  $.ajax({
    url: etsyURL,
    dataType: 'jsonp',
    method: 'get'
  }).then(function (etsy) {

    var string = $('#contentSpit').text();

    var funStuff = _.template(string);

    _.each(etsy.results, function (item) {
      var itemHTML = funStuff(item);
      $('.content').append(itemHTML);
    });
  });
})();