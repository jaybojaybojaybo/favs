//Biz
var iceCream1;
var movie;
var iceCream2;
var yourFavs = [];

//Front
$(document).ready(function() {
  $("form#userFavInput").submit(function(event){
    event.preventDefault();
    iceCream1 = $('input[name="iceCream1"]:checked').val();
    movie = $('input[name="movie"]:checked').val();
    iceCream2 = $('input[name="iceCream2"]:checked').val();
    yourFavs.push(iceCream1,movie,iceCream2);
    console.log(yourFavs);
    $("#confirmation").show();
    var displayFavs = yourFavs.map(function(yourFav) {
      var userInput = yourFav.toString();
      $("ul#userFavList").append("<li>" + userInput + "</li>");
    });
    $("#userFavInput").hide();
  });

});
