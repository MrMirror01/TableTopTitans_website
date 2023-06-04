$(document).ready(function() {
    $.getJSON("data/games.json", function(games) {        
        let content = "";
        games.forEach(function (game, index){
            content += `
            <div class="card" data-id="${index}" data-title="${game.name}" data-tags="${game.tags}">
                <div class="img-container"><img src="${game.img_small}"></div>
                <div class="description">
                    <h3>${game.name}</h3>
                    <p>${game.description_short}</p>
                </div>
            </div>
            `;
        });
        
        $(".content").append(content);

        $(".card").mouseleave(function() {
            $(this).css({
                "transform" : "none"
            });
        })

        $(".card").click(function () {
            location.href = `game.html?id=${$(this).data("id")}`;
        });
    });

    $.getJSON("data/tags.json", function(tags) {
        let checkBoxes = "<br>";
        tags.forEach(function (tag){
            checkBoxes += `
            <div class="check-group">
                <input type="checkbox" class="filter" name="${tag}" checked="true">
                <span class="checkmark"></span>
                <label for="classic">${tag}</label><br>
            </div>
            `
        });

        $(checkBoxes).insertAfter(".search");

        $(".check-group").click(function (){
            $(this).children().first().prop("checked", !($(this).children().first().is(":checked")));
            updateSearch();
        });
    });
});