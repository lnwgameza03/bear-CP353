'use strict';

var toSearch = function toSearch(Beerja, Yeastja) {
    console.log(Beerja, Yeastja);
    var game = '?';

    if (Beerja && Yeastja) {
        game += 'beer_name=' + Beerja + '&yeast=' + Yeastja;
    } else if (Beerja) {
        game += 'beer_name=' + Beerja;
    } else if (Yeastja) {
        game += '&yeast=' + Yeastja;
    }

    fetch('https://api.punkapi.com/v2/beers/' + game).then(function (Response) {
        return Response.json();
    }).then(function (Beers) {
        console.log(Beers);
        var showbeer = "";
        for (var i = 0; i < Beers.length; i++) {
            var beer = Beers[i];
            var beertwo = i % 2 == 0 ? 'text-right' : 'text-left';
            showbeer += '<div class="' + beertwo + '"> <b>Name : </b>' + beer.name + '<br> \n             <b>Tagline : </b>' + beer.tagline + '<br> \n             <b>PH : </b>' + beer.ph + '<br>\n             <b>Yeast : </b>' + beer.ingredients.yeast + '<br>\n             <b>First Brewed : </b>' + beer.first_brewed + '<br> \n             <b>Description : </b>' + beer.description + '<br>\n             <img src="' + beer.image_url + '" style = "max-width:50px" ><hr></div>';
        }

        document.getElementById('result').innerHTML = showbeer;
    });
};
