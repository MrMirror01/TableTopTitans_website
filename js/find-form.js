function updateSearch(){
    let currentSearch = $(".search").first().val().toLowerCase();
    let currentTags = [];

    $(".filter").each(function (){
        //console.log($(this).is(":checked"));
        if ($(this).is(":checked")){
            currentTags.push($(this).attr("name"));
        }
    });

    console.log(currentTags);
        
    $(".card").each(function (){
        var title = $(this).data("title").toLowerCase();
        var tags = $(this).data("tags").toLowerCase();

        var tagsValid = (tags === "");

        currentTags.forEach(function (tag) {
            if (tags.indexOf(tag) !== -1){
                tagsValid = true;
                return;
            }
        });

        if(title.indexOf(currentSearch) !== -1 && tagsValid){
            $(this).css('display', 'block');
        } else {
            $(this).css('display', 'none');
        }
    });
}

$(document).ready(function(){
    $(".check-group").click(function (){
        $(this).children().first().prop("checked", !($(this).children().first().is(":checked")));
        updateSearch();
    });
    $(".search").on("input", updateSearch);
    $("#select-all").click(function (){
        $(".filter").prop("checked", true);
    });
    $("#deselect-all").click(function (){
        $(".filter").prop("checked", false);
    });

    
});