$(document).ready(function (){
    let url = new URL(location.href);
    let params = new URLSearchParams(url.search);
    let gameID = params.get("id");
    
    $.getJSON("data/games.json", function(games) {
        let game = games[gameID];   
        $(document).prop('title', game.name);

        $(".game-title").text(game.name);
        $(".description").text(game.description_long);
        $(".game-image").attr("src", game.img_big);
        $(".price").text(game.price + " €");
    });
});