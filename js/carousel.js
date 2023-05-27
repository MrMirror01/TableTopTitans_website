let activeIdx = 0;
let count = 3;

function resetLast(idx) {
    $(`.carousel > img:nth-child(${idx + 1})`).toggleClass("last");
}

function carouselRight() {
    $(`.carousel > img:nth-child(${activeIdx + 1})`).toggleClass("active last");
    $(`.carousel > img:nth-child(${(activeIdx + 1) % count + 1})`).addClass("active");

    setTimeout(resetLast, 2000, activeIdx);

    activeIdx = (activeIdx + 1) % count;
}

$(document).ready(() => {
    count = $(".carousel > img").length;

    setInterval(carouselRight, 6000);
});