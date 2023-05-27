$(document).mousemove((event) => {
    var hoveredCard = $(".card:hover").last();
    if (hoveredCard.length){
        let rect = hoveredCard[0].getBoundingClientRect()
        let deltaX = (event.pageX - (rect.right + rect.left) / 2) / rect.width * 2;
        let deltaY = (event.pageY - (rect.bottom + rect.top) / 2) / rect.height * 2;
        let dist = deltaX * deltaX + deltaY * deltaY;

        hoveredCard.css({
            "transform" : `rotate3d(${-deltaY}, ${deltaX}, 0, ${dist * 5}deg)`
        });
    }
});

$(document).ready(function() {
    $(".card").mouseleave(function() {
        $(this).css({
            "transform" : "none"
        });
    })
});